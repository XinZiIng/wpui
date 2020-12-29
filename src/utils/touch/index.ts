import {$} from "../index";

import {TouchDataInterface, TouchOptionsInterface} from "./index.d"

/**
 * 触摸事件封装
 */
export default class Touch {
    private data: TouchDataInterface;

    constructor(options: TouchOptionsInterface) {
        this.data = {
            touchstart: {
                pageX: 0,
                pageY: 0,
            },
            touchmove: {
                pageX: 0,
                pageY: 0,
            },
            touchend: {
                pageX: 0,
                pageY: 0,
            },
            moveDistance: {
                pageX: 0,
                pageY: 0,
            },
            rotate: 0,
            scale: 1,
            lock: false,
        }

        this.bindEvents(options);
    }

    /**
     * 绑定事件
     */
    bindEvents(options) {
        $(options.el)
            .on("touchstart", ev => {
                if (this.data.lock) return;

                let touches = ev.touches ? ev.touches[0] : ev;

                this.data.touchstart = {
                    pageX: touches.pageX - this.data.touchend.pageX,
                    pageY: touches.pageY - this.data.touchend.pageY,
                };

                this.data.moveDistance = {
                    pageX: 0,
                    pageY: 0,
                }

                let startResultValue = options?.onTouchStart?.call(ev.currentTarget, ev, this.data);

                startResultValue ? this.data.touchend = {
                    ...startResultValue
                } : "";
            })
            .on("touchmove", (ev) => {
                if (this.data.lock) return;

                let touches = ev.touches ? ev.touches[0] : ev;

                this.data.touchmove = {
                    pageX: touches.pageX - this.data.touchstart.pageX,
                    pageY: touches.pageY - this.data.touchstart.pageY,
                };

                this.data.moveDistance = {
                    pageX: this.data.touchmove.pageX - this.data.touchend.pageX,
                    pageY: this.data.touchmove.pageY - this.data.touchend.pageY,
                }

                options?.onTouchMove?.call(ev.currentTarget, ev, this.data);
            })
            .on("touchend", ev => {
                if (this.data.lock) return;

                this.data.touchend = {
                    ...this.data.touchmove
                }

                let endResultValue = options?.onTouchEnd?.call(ev.currentTarget, ev, this.data);
                endResultValue ? this.data = {
                    ...this.data,
                    ...endResultValue
                } : "";
            })
    }

    set(object:object) {
        this.data = {
            ...this.data,
            ...object
        }
    }

    get() {
        return this.data
    }
}
