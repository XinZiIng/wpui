# Image 图片
加载大图时显示加载占位图，加载失败时的容错处理

## 示例
### 基础使用
```html
<!--
    [object-fit]        定义该组件图片缩放模式；可选值有：contain、cover、fill、none、scale-down
    [error-icon-size]   定义该组件默认失败占位图标尺寸，默认`100`
    [src]               定义该组件图片路径
-->
<image-component
    style="width: 200px; height: 200px"
    object-fit="cover"
    error-icon-size="100"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
>
    <!-- 自定义加载时占位插槽元素 -->
    <!--<img slot="loading" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200">-->

    <!-- 自定义加载错误时占位插槽元素 -->
    <!--<div slot="error">加载失败</div>-->
</image-component>
```

### 缩放模式
设置`<image-component/>`的`[object-fit]`属性值修改图片显示方式
```html
<!--
    [object-fit]    定义该组件图片缩放模式；可选值有：contain、cover、fill、none、scale-down
    [src]           定义该组件图片路径
-->
<image-component 
    class="image-component-fit" 
    style="width: 300px; height: 200px" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
>
</image-component>

<div>
    <button class="button-set-fit button-theme margin-sm margin-left" onclick="setObjectFit(this, 'initial')">initial</button>
    <button class="button-set-fit margin-sm" onclick="setObjectFit(this, 'none')">none</button>
    <button class="button-set-fit margin-sm" onclick="setObjectFit(this, 'fill')">fill</button>
    <button class="button-set-fit margin-sm" onclick="setObjectFit(this, 'contain')">contain</button>
    <button class="button-set-fit margin-sm" onclick="setObjectFit(this, 'cover')">cover</button>
    <button class="button-set-fit margin-sm" onclick="setObjectFit(this, 'scale-down')">scale-down</button>
</div>

<script>
    function setObjectFit(el, value) {
        document.querySelector(".image-component-fit").setAttribute("object-fit", value)

        document.querySelector(".button-set-fit.button-theme").classList.remove("button-theme")
        el.classList.add("button-theme");
    }
</script>
```

### 默认加载占位
默认加载占位为浅灰色背景
```html
<!--
    [src]           定义该组件图片路径
-->
<image-component
    class="image-reload"
    style="width: 200px; height: 200px"
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
>
</image-component>

<div>
    <button class="button-theme" onclick="imageReload()">重载</button>
</div>

<script>
    function imageReload() {
        let src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${new Date().getTime()}`

        let image = document.querySelector(".image-reload");
        image.setAttribute("src", src);
        image.querySelector("img").setAttribute("src", src)
    }
</script>
```

### 懒加载
设置`<image-component/>`的`[lazy="true"]`属性值，当该属性值为`true`的时候，不会尝试加载图片，反之尝试加载图片
```html
<!--
    [src]           定义该组件图片路径
    [lazy]          定义该组件图片路径
-->
<image-component
    class="image-lazy"
    style="width: 200px; height: 200px"
    lazy="true"
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
>
</image-component>

<div>
    <button class="button-theme" onclick="imageLazy()">加载</button>
</div>

<script>
    function imageLazy() {
        document.querySelector(".image-lazy").setAttribute("lazy", "false");
    }
</script>
```

### 自定义加载时占位
添加`[slot="loading"]`插槽元素
```html
<!--
    [src]           定义该组件图片路径
-->
<image-component
    class="image-reload-2"
    style="width: 200px; height: 200px"
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
>
    <!-- 自定义加载时占位插槽元素 -->
    <img slot="loading" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200">
</image-component>

<div>
    <button class="button-theme" onclick="imageReload2()">重载</button>
</div>

<script>
    function imageReload2() {
        let src = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${new Date().getTime()}`

        let image = document.querySelector(".image-reload-2");
        image.setAttribute("src", src);
        image.querySelector("img").setAttribute("src", src)
    }
</script>
```

### 默认失败占位
当图片加载失败时，将会默认呈现失败占位效果

可通过设置`[error-icon-size]`修改默认图标尺寸
```html
<!--
    [error-icon-size]   定义该组件默认失败占位图标尺寸，默认`100`
    [src]               定义该组件图片路径
-->
<image-component
    style="width: 200px; height: 200px"
    error-icon-size="100"
    src=""
>
</image-component>
```

### 自定义加载失败时占位
添加`[slot="error"]`插槽元素
```html
<!--
    [src]               定义该组件图片路径
-->
<image-component
    style="width: 200px; height: 200px"
    src=""
>
    <!-- 自定义加载错误时占位插槽元素 -->
    <div slot="error">加载失败</div>
</image-component>
```

## 属性
属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`object-fit` | 定义该组件图片缩放模式 | `none` | -
`error-icon-size` | 定义该组件默认失败占位图标尺寸 | `100` | -
`src` | 定义该组件图片路径 | - | -

### object-fit
设置`<image-component/>`的`[object-fit]`属性值修改图片显示方式

属性值 | 描述
--- | ---
`contain` | 图片将被缩放，以在填充元素的内容框时保持其宽高比
`cover` | 图片在保持其宽高比的同时填充元素的整个内容框
`fill` | 图片正好填充元素的内容框
`none` | 图片将保持其原有的尺寸
`scale-down
` | 内容的尺寸与`none`或`contain`中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些

## 重置样式变量
可修改`:root`中的相关`CSS`变量，具体使用可查阅[CSS变量设置](/docs/base/variable)

CSS变量 | 描述
--- | ---
`--image-loading-bg` | 图片加载时容器背景色
`--image-error-bg` | 图片加载失败时容器背景色