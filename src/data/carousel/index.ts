import {$, createCustomElement, Touch} from "../../utils"
import "./item"
import {DOMHandlerInterface} from "./index.d"

/**
 * 微章组件
 */
class CarouselComponent extends HTMLElement {
    private isConnect: Boolean;                     // 是否组件元素触发了connectedCallback回调
    private isVertical: boolean;                    // 是否垂直样式
    private isLoop: boolean;                        // 是否无缝循环轮播
    private lock: boolean;

    private activeIndex: number;                    // 激活索引
    private transition: number;                     // 过渡时长
    private afterLastElementPosition: number;           // 第一个节点元素定位位置
    private beforeFirstElementPosition: number;            // 最后一个节点元素定位位置
    private marginValue: number;                    // 间隙

    private carouselItemsElement: any;              // 子项元素
    private carouselSliderElement: HTMLElement;    // 子项父级元素

    private pageXOrY: string;                       // page值，isVertical为true时，返回pageY；反之为pageX
    private widthOrHeight: string;                  // isVertical为true时，返回height；反之为width
    private leftOrTop: string;                      // isVertical为true时，返回top；反之为left

    private Touch: Touch;                           // Touch实例对象
    private timer: NodeJS.Timeout;
    private autoPlayTimer: NodeJS.Timeout;
    private threshold: number;

    /**
     * 构造器
     */
    constructor() {
        super();

        this.isLoop = false;
        this.lock = false;

        this.afterLastElementPosition = 0;
        this.beforeFirstElementPosition = 0;
        this.marginValue = 0;
        this.transition = 300;
        this.threshold = $(this).attr("threshold") || 50;

        this.isVertical = $(this).attr("vertical") === "true";

        this.pageXOrY = this.isVertical ? 'pageY' : 'pageX';
        this.widthOrHeight = this.isVertical ? 'height' : 'width';
        this.leftOrTop = this.isVertical ? 'top' : 'left';

        const shadow = this.attachShadow({mode: 'open'})

        shadow.innerHTML = this.render();
    }
    /**
     * 监听属性
     * @returns {string[]}      需要被监听的属性名
     */
    static get observedAttributes() {
        return ["index"];
    }

    /**
     * 当自定义元素的指定属性被增加、移除或更改时被调用
     * @param name          属性名
     * @param oldValue      更改前的属性值
     * @param newValue      新的属性值
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.isConnect && oldValue != newValue) {
            this.setActiveIndex(newValue)
        }
    }

    /**
     * 当自定义元素第一次被连接到文档DOM时被调用
     */
    connectedCallback() {
        this.isConnect = true;

        this.activeIndex = Number($(this).attr("index")) || 0;

        this.setLoop();

        this.carouselSliderElement = $(this.shadowRoot).find(".carousel-slider").get(0);

        this.dispatch('change');

        this.bindEvents();

        this.setActiveDot();

        this.autoPlay();

        if (!this.isLoop) return;

        setTimeout(() => {
            let pageValue = this.getActiveElementPosition(this.activeIndex);

            let touchend = {
                pageX: 0,
                pageY: 0,
            }

            touchend[this.pageXOrY] = pageValue;

            this.Touch.set({
                touchend,
            })

            $(this.carouselSliderElement).css(
                "transform",
                `translate3d(${touchend.pageX}px, ${touchend.pageY}px, 0)`,
                true
            )

            this.loopTouchStart();
        }, 100)
    }

    /**
     * 当自定义元素与文档DOM断开连接时被调用（关闭当前窗口不会被调用）
     */
    disconnectedCallback() {
        this.dispatch('disconnect');
    }

    /**
     * 当自定义元素被移动到新文档时被调用
     */
    adoptedCallback() {
        this.dispatch('adopt');
    }

    /**
     * 派发事件
     * @param type      事件类型
     */
    dispatch(type, detail = {}) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: {
                ...detail
            },
        }))
    }

    /**
     * 绑定事件
     */
    bindEvents() {
        this.Touch = new Touch({
            el: this,
            onTouchStart(ev, data) {
                clearInterval(this.autoPlayTimer)

                this.setLoop();

                $(this.carouselSliderElement).removeClass("transition");

                if (!this.isLoop) return;

                this.loopTouchStart()
            },
            onTouchMove(ev, data) {
                ev.preventDefault();
                ev.stopPropagation();

                let pageValue = data.touchmove[this.pageXOrY];

                $(this.carouselSliderElement).css(
                    "transform",
                    `translate3d(${this.isVertical ? 0 : pageValue}px, ${this.isVertical ? pageValue : 0}px, 0)`,
                    true
                )

                if (!this.isLoop) return;

                this.loopTouchMove(data.moveDistance[this.pageXOrY], pageValue)
            },
            onTouchEnd(ev, data) {
                let moveDistance = data.moveDistance[this.pageXOrY],
                    newActiveIndex = this.activeIndex;

                if (!Math.abs(moveDistance)) return;

                if (Math.abs(moveDistance) > this.threshold) {
                    moveDistance < 0 ? newActiveIndex++ : newActiveIndex--;
                }
                
                this.setActiveIndex(newActiveIndex);
            },
        })

        $(this)
            .on("click", ev => {
                ev.preventDefault();
                ev.stopPropagation();

                let dotsItem = $(ev.target).parents(".carousel-dots-item");

                if (dotsItem.length) {
                    this.setActiveIndex($(dotsItem).index());
                }
            })
            .on("mouseover", ev => {
                clearInterval(this.autoPlayTimer)
            })
            .on("mouseout", ev => {
                this.autoPlay();
            })
    }

    /**
     * 循环轮播触摸开始
     */
    loopTouchStart() {
        this.getPosition();

        if (!this.activeIndex) {
            $(this.carouselItemsElement)
                .eq(-1)
                .css(this.leftOrTop, this.beforeFirstElementPosition)
        }

        if (this.activeIndex == this.carouselItemsElement.length - 1) {
            $(this.carouselItemsElement)
                .eq(0)
                .css(this.leftOrTop, this.afterLastElementPosition);
        }
    }

    /**
     * 循环轮播触摸运动
     * @param moveDistance      运动距离
     * @param pageValue         运动值
     */
    loopTouchMove(moveDistance, pageValue) {
        let isToRightOrBottom = moveDistance > this.threshold;
        let isToLeftOrTop = moveDistance < -this.threshold;

        let activeElementOffset = $(this.carouselItemsElement).css(this.leftOrTop, 0).eq(this.activeIndex).offset();

        if (!this.activeIndex && isToRightOrBottom && this.carouselItemsElement.length > 3) {
            $(this.carouselItemsElement)
                .eq(-2)
                .css(this.leftOrTop, this.beforeFirstElementPosition);
        }

        if (
            (this.activeIndex === 1 && isToRightOrBottom)
            || (!this.activeIndex && activeElementOffset[this.leftOrTop] + this.marginValue < pageValue)
        ) {
            $(this.carouselItemsElement)
                .eq(-1)
                .css(this.leftOrTop, this.beforeFirstElementPosition)
        }

        if (this.activeIndex === this.carouselItemsElement.length - 2 && isToLeftOrTop) {
            $(this.carouselItemsElement)
                .eq(0)
                .css(this.leftOrTop, this.afterLastElementPosition)
        }

        if (this.activeIndex === this.carouselItemsElement.length - 1 && isToLeftOrTop) {
            $(this.carouselItemsElement)
                .eq(1)
                .css(this.leftOrTop, this.afterLastElementPosition)
        }

        if (this.activeIndex === this.carouselItemsElement.length - 1 && isToLeftOrTop) {
            $(this.carouselItemsElement)
                .eq(1)
                .css(this.leftOrTop, this.afterLastElementPosition)
        }
    }

    /**
     * 循环轮播触摸结束
     * @param touchend          触摸结束数据变量
     * @param newActiveIndex    新激活索引
     */
    loopTouchEnd(touchend, newActiveIndex) {
        this.dispatch('beforeChange', {
            currentActiveIndex: this.activeIndex,
            newActiveIndex,
        });

        $(this).attr("index", newActiveIndex);

        this.setActiveDot(newActiveIndex);

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            let indexLog = {
                oldActiveIndex: this.activeIndex,
                currentActiveIndex: newActiveIndex,
            };

            this.dispatch('change', indexLog);
            this.dispatch('afterChange', indexLog);

            this.autoPlay();

            this.activeIndex = newActiveIndex;

            if (!this.isLoop) {
                return this.Touch.set({
                    touchend,
                    lock: false,
                })
            }

            $(this.carouselItemsElement).css(this.leftOrTop, "0");

            this.activeIndex == -1
                ? this.activeIndex = this.carouselItemsElement.length - 1
                : "";

            this.activeIndex == this.carouselItemsElement.length
                ? this.activeIndex = 0
                : "";

            if (!this.activeIndex || this.activeIndex == this.carouselItemsElement.length - 1) {
                touchend[this.pageXOrY] = this.getActiveElementPosition(this.activeIndex);
            }

            if (!this.activeIndex) {
                $(this.carouselItemsElement)
                    .eq(-1)
                    .css(this.leftOrTop, this.beforeFirstElementPosition)
            }

            if (this.activeIndex == this.carouselItemsElement.length - 1) {
                $(this.carouselItemsElement)
                    .eq(0)
                    .css(this.leftOrTop, this.afterLastElementPosition);
            }

            $(this.carouselSliderElement)
                .removeClass("transition")
                .css(
                    "transform",
                    `translate3d(${touchend.pageX}px, ${touchend.pageY}px, 0)`,
                    true
                )

            this.Touch.set({
                touchend,
                lock: false
            })
        }, this.transition)
    }

    /**
     * 判断是否循环轮播
     */
    setLoop() {
        this.carouselItemsElement = $(this).find("carousel-item");

        this.isLoop = $(this).attr("loop") === "true" && this.carouselItemsElement.length > 1;

        this.marginValue = $(this.carouselItemsElement)
            .eq(0)
            .css(`margin-${this.isVertical ? 'bottom' : 'right'}`) || 0;
    }

    /**
     * 设置轮播索引
     */
    setActiveIndex(newActiveIndex) {
        if (this.Touch.get().lock) return;

        let touchend = {
            pageX:0,
            pageY: 0,
        };

        this.Touch.set({
            lock: true
        })

        let carouselItemsLength = this.carouselItemsElement.length - 1;

        // 循环轮播
        if (this.isLoop) {
            newActiveIndex %= carouselItemsLength + 1;

            let DOMHandler = this.getLoopDOMHandler(newActiveIndex, carouselItemsLength);

            if (typeof DOMHandler?.index != "undefined") {
                $(this.carouselItemsElement)
                    .eq(DOMHandler.index)
                    .css(this.leftOrTop, DOMHandler.position || "0")
            }

        // 非循环轮播
        } else {
            newActiveIndex < 0 ? newActiveIndex = 0 : "";
            newActiveIndex >= carouselItemsLength ? newActiveIndex = carouselItemsLength : "";
        }

        touchend[this.pageXOrY] = this.getActiveElementPosition(newActiveIndex);

        // 非循环轮播设置最大最小值
        if (!this.isLoop) {
            let lastElementOffset = $(this.carouselItemsElement).eq(-1).offset(),
                maxPageValue = -(lastElementOffset[this.leftOrTop] - $(this).offset()[this.widthOrHeight] + lastElementOffset[this.widthOrHeight]);

            // 最大值
            touchend[this.pageXOrY] <= maxPageValue && maxPageValue != 0 ? touchend[this.pageXOrY] = maxPageValue : "";

            // 最小值
            touchend[this.pageXOrY] > 0 ? touchend[this.pageXOrY] = 0 : "";
        }

        $(this.carouselSliderElement)
            .addClass("transition")
            .css(
                "transform",
                `translate3d(${touchend.pageX}px, ${touchend.pageY}px, 0)`,
                true
            )

        this.loopTouchEnd(touchend, newActiveIndex)
    }

    /**
     * 设置激活小圆点
     */
    setActiveDot(newActiveIndex?:number) {
        $(this)
            .find(".carousel-dots-item")
            .removeClass("active")
            .eq(typeof newActiveIndex == "undefined" ? this.activeIndex : newActiveIndex)
            .addClass("active");
    }

    /**
     * 获取循环dom操作数据
     * @param newActiveIndex       下个激活索引
     * @param carouselItemsLength   子项长度
     */
    getLoopDOMHandler(newActiveIndex, carouselItemsLength) {
        let DOMHandler:DOMHandlerInterface

        // 当前第一张，切换到最后一张时，倒数第二张定位在最前面
        if (!this.activeIndex && newActiveIndex == carouselItemsLength) {
            DOMHandler = {
                index: -2,
                position: this.beforeFirstElementPosition
            }
        }

        // 当前最后一张，切换到第一张时，第二张定位在最后面
        if (this.activeIndex == carouselItemsLength && !newActiveIndex) {
            DOMHandler = {
                index: 1,
                position: this.afterLastElementPosition
            }
        }

        // 当前第三张，切换到第一张时，最后一张定位在最前面 || 切换到倒数第二张时，最后一张不定位
        if (
            (this.activeIndex == 2 && !newActiveIndex && carouselItemsLength > 3)
            || (!newActiveIndex && this.activeIndex > newActiveIndex && this.activeIndex != carouselItemsLength)
        ) {
            DOMHandler = {
                index: -1,
                position: this.beforeFirstElementPosition
            }
        }

        // 切换到倒数第二张时，最后一张不定位
        if (newActiveIndex == carouselItemsLength - 1) {
            DOMHandler = {
                index: -1,
                position: 0
            }
        }

        // 当前不是第一张，切换到第二张时，第一张不定位
        if (this.activeIndex && newActiveIndex == 1) {
            DOMHandler = {
                index: 0,
                position: 0
            }
        }

        // 当前不是第一张，切换到最后一张时，第一张定位在最后面
        if (this.activeIndex && newActiveIndex == carouselItemsLength) {
            DOMHandler = {
                index: 0,
                position: this.afterLastElementPosition
            }
        }

        return DOMHandler;
    }

    /**
     * 获取元素定位位置
     */
    getPosition() {
        let lastElementOffset = $(this.carouselItemsElement).eq(-1).offset(),

            afterLastElementPosition = lastElementOffset[this.widthOrHeight] + lastElementOffset[this.leftOrTop] + this.marginValue,

            beforeFirstElementPosition = -(lastElementOffset[this.widthOrHeight] + lastElementOffset[this.leftOrTop]) - this.marginValue;

        this.afterLastElementPosition = afterLastElementPosition || this.afterLastElementPosition;

        this.beforeFirstElementPosition = beforeFirstElementPosition || this.beforeFirstElementPosition;
    }

    /**
     * 获取激活元素居中位置
     * @param activeIndex       激活索引
     * @return                  返回计算后的位置距离
     */
    getActiveElementPosition(activeIndex) {
        let activeElementOffset = $(this.carouselItemsElement).eq(activeIndex).offset();

        return -activeElementOffset[this.leftOrTop] + ($(this).offset()[this.widthOrHeight] - activeElementOffset[this.widthOrHeight]) / 2;
    }


    /**
     * 自动轮播
     */
    autoPlay() {
        let isAutoPlay = $(this).attr("autoplay") === "true";

        if (!(this.isLoop && isAutoPlay) || !isAutoPlay) return;

        clearInterval(this.autoPlayTimer);

        this.autoPlayTimer = setInterval(() => {
            let newActiveIndex = this.activeIndex + 1;

            newActiveIndex %= this.carouselItemsElement.length;

            $(this).attr("index", newActiveIndex)
        }, $(this).attr("interval") || 5000)
    }

    /**
     * 渲染
     * @returns {string}    返回html字符串
     */
    render() {
        return `
            <style>
                ::slotted(carousel-item) {
                    margin-${this.isVertical ? "bottom" : "right"}: ${$(this).attr("margin") || 0}px !important;
                }
                
                :host([vertical=true]) .carousel-slider {
                    display: block;
                    width: 100%;
                }
                
                .carousel-slider {
                    display: flex;
                }
                
                .carousel-slider.transition {
                    transition: .3s;
                }
            </style>
                
            <div class="carousel-slider">
                <slot></slot>
            </div>
                
            <slot name="dots"></slot>
        `
    }
}

export default createCustomElement("carousel-component", CarouselComponent)