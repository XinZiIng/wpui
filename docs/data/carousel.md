# Carousel 轮播
轮播组件，其中可使用`<carousel-item>`元素与`[slot="dots"]`插槽元素，否则会导致未定义的行为

## 示例
### 基础使用
横向轮播，且不循环
```
<carousel-component
    loop="false"
    threshold="50"
    margin="0"
    vertical="false"
    interval="5000"
    autoplay="false"
    index="0"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

### 横向循环轮播
设置`<carousel-component/>`元素的属性值`[loop=true]`
```
<carousel-component
    loop="true"
    threshold="50"
    margin="0"
    vertical="false"
    interval="5000"
    autoplay="false"
    index="0"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

### 竖向不循环轮播
竖向轮播，且不循环

设置`<carousel-component/>`元素的属性值`[vertical=true]`为竖向轮播

```
<carousel-component
    loop="false"
    threshold="50"
    margin="0"
    vertical="true"
    interval="5000"
    autoplay="false"
    index="0"
    style="height: 300px;"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

### 竖向循环轮播
竖向轮播，且不循环

设置`<carousel-component/>`元素的属性值`[vertical=true]`为竖向轮播

设置`[loop="true"]`为循环轮播
```
<carousel-component
    loop="true"
    threshold="50"
    margin="0"
    vertical="true"
    interval="5000"
    autoplay="false"
    index="0"
    style="height: 300px;"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

### 滑动到指定索引
修改`<carousel-component/>`元素的属性`[index]`属性值

设置默认值与在使用中设置指定值都可
```
<carousel-component
    id="SetCarouselIndex"
    loop="true"
    threshold="50"
    margin="0"
    vertical="false"
    interval="5000"
    autoplay="true"
    index="0"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>

<button class="button-theme margin-sm" onclick="setCarouselToIndex(0)">滑动到第1张</button>
<button class="button-theme margin-sm" onclick="setCarouselToIndex(1)">滑动到第2张</button>
<button class="button-theme margin-sm" onclick="setCarouselToIndex(2)">滑动到第3张</button>

<script>
    let carouselComponent = document.querySelector("carousel-component")

    function setCarouselToIndex(i) {
        document.querySelector("#SetCarouselIndex").setAttribute("index", i);
    }
</script>
```

### 边距
设置`<carousel-component/>`元素的属性`[margin="15"]`
```
<carousel-component
    loop="true"
    threshold="50"
    margin="15"
    vertical="false"
    interval="5000"
    autoplay="true"
    index="0"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

### 卡片横向不循环轮播
设置`carousel-item`宽度
```
<style>
    carousel-component[vertical="false"] carousel-item {
        width: 80vw !important;
    }
</style>

<carousel-component
    loop="false"
    threshold="50"
    margin="15"
    vertical="false"
    interval="5000"
    autoplay="false"
    index="0"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

### 卡片横向循环轮播
设置`carousel-item`宽度
```
<style>
    carousel-component[vertical="false"] carousel-item {
        width: 80vw !important;
    }
</style>

<carousel-component
    loop="true"
    threshold="50"
    margin="15"
    vertical="false"
    interval="5000"
    autoplay="false"
    index="0"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

### 自动轮播
当`<carousel-component/>`元素的属性`[loop="true"]`时，设置`[autoplay=true]`为自动轮播

设置`[interval=5000]`可修改轮播间隔时间
```
<carousel-component
    loop="true"
    threshold="50"
    margin="0"
    vertical="false"
    interval="5000"
    autoplay="true"
    index="0"
>
    <carousel-item>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3156021755,433235465&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1121472188,874182665&fm=26&gp=0.jpg" alt="">
    </carousel-item>
    <carousel-item>
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2215911299,1915319398&fm=15&gp=0.jpg" alt="">
    </carousel-item>

    <!-- 小圆点列表插槽，需要自行遍历 -->
    <div slot="dots">
        <!-- .default 默认样式（如需自定义样式时，请勿添加该样式类） -->
        <ul class="carousel-dots-box default">
            <!-- .active 激活 -->
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
            <li class="carousel-dots-item"></li>
        </ul>
    </div>
</carousel-component>
```

## 属性

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`loop` | 定义该组件是否循环轮播，需子项长度大于`3` | - | -
`threshold` | 定义该组件滑动阀值 | `50` | -
`margin` | 义计数类型微章文本色，只有`[type=count]`时生效 | `0` | -
`vertical` | 定义该组件是否竖向轮播 | `false` | -
`autoplay` | 定义该组件是否自动轮播，只有`[loop=true]`时生效 | `false` | -
`interval` | 定义该组件是否竖向轮播，只有`[type=count]`时生效 | `white` | -
`index` | 定义该组件当前索引值 | `0` | `true`

## 事件
定义改变前、改变后自定义事件

事件名 | 描述
--- | ---
`beforeChange` | 定义该组件在改变前回调事件，并可其回调内可通过`arguments[0].detail.currentActiveIndex`属性值获取当前索引，`arguments[0].detail.newActiveIndex`属性值为新索引
`afterChange` | 定义该组件在改变后回调事件，并可其回调内可通过`arguments[0].detail.currentActiveIndex`属性值获取当前索引，`arguments[0].detail.oldActiveIndex`属性值为旧索引
```
<script>
    let carouselComponent = document.querySelector("carousel-component")

    carouselComponent.addEventListener("beforeChange", function (ev) {
        let {currentActiveIndex, newActiveIndex} = ev.detail;
        console.log("在改变之前当前索引：", currentActiveIndex);
        console.log("在改变之前新索引：", newActiveIndex);
    })

    carouselComponent.addEventListener("afterChange", function (ev) {
        let {currentActiveIndex, oldActiveIndex} = ev.detail;
        console.log("在改变之后旧索引：", oldActiveIndex);
        console.log("在改变之后当前索引：", currentActiveIndex);
    })
</script>
```