# Image 图片
加载大图时显示加载占位图，加载失败时的容错处理

## 示例
### 基础使用
```
<!--
    [object-fit]        定义该组件图片缩放模式；可选值有：contain、cover、fill、none、scale-down
    [border-radius]     定义该组件的圆角样式，默认`0`
    [error-icon-size]   定义该组件默认失败占位图标尺寸，默认`100`
    [error-icon-color]  定义该组件默认失败占位图标颜色，默认`var(--color-gray-light)`
    [src]               定义该组件图片路径，，属性值改变时可触发`change`事件；（@TODO 此属性值必填，需要与其子img元素图片路径一致）
-->
<image-component
    style="width: 200px; height: 200px"
    object-fit="cover"
    error-icon-size="100"
    error-icon-color="var(--color-gray-light)"
    border-radius="0"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
>
    <!--  @TODO 该图片路径与其父级的[src]属性值一致  -->
    <img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
    
    <!-- 自定义加载时占位插槽元素 -->
    <!--<img slot="loading" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200">-->

    <!-- 自定义加载错误时占位插槽元素 -->
    <!--<div slot="error">加载失败</div>-->
</image-component>
```

### 圆角
设置`[border-radius]`属性值
```
<!--
    [border-radius]     定义该组件的圆角样式，默认`0`
    [src]               定义该组件图片路径，，属性值改变时可触发`change`事件；（@TODO 此属性值必填，需要与其子img元素图片路径一致）
-->
<image-component
    style="width: 200px; height: 200px"
    border-radius="20"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
>
    <!--  @TODO 该图片路径与其父级的[src]属性值一致  -->
    <img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</image-component>
```

### 缩放模式
设置`<image-component/>`的`[object-fit]`属性值修改图片显示方式
```
<!--
    [object-fit]    定义该组件图片缩放模式；可选值有：contain、cover、fill、none、scale-down
    [src]           定义该组件图片路径，，属性值改变时可触发`change`事件；（@TODO 此属性值必填，需要与其子img元素图片路径一致）
-->
<image-component 
    class="image-component-fit" 
    style="width: 300px; height: 200px" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
>
    <!--  @TODO 该图片路径与其父级的[src]属性值一致  -->
    <img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</image-component>

<div>
    <button class="button-set-fit button-theme margin-sm margin-left" onclick="setObjectFit(this, 'none')">none</button>
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
```
<!--
    [src]           定义该组件图片路径，，属性值改变时可触发`change`事件；（@TODO 此属性值必填，需要与其子img元素图片路径一致）
-->
<image-component
    class="image-reload"
    style="width: 200px; height: 200px"
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
>
    <!--  @TODO 该图片路径与其父级的[src]属性值一致  -->
    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png">
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

### 自定义加载时占位
添加`[slot="loading"]`插槽元素
```
<!--
    [src]           定义该组件图片路径，，属性值改变时可触发`change`事件；（@TODO 此属性值必填，需要与其子img元素图片路径一致）
-->
<image-component
    class="image-reload-2"
    style="width: 200px; height: 200px"
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
>
    <!--  @TODO 该图片路径与其父级的[src]属性值一致  -->
    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png">

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

可通过设置`[error-icon-color]`修改默认图标颜色
```
<!--
    [error-icon-size]   定义该组件默认失败占位图标尺寸，默认`100`
    [error-icon-color]  定义该组件默认失败占位图标颜色，默认`var(--color-gray-light)`
    [src]               定义该组件图片路径，，属性值改变时可触发`change`事件；（@TODO 此属性值必填，需要与其子img元素图片路径一致）
-->
<image-component
    style="width: 200px; height: 200px"
    error-icon-size="100"
    error-icon-color="var(--color-gray-light)"
    src=""
>
    <!--  @TODO 该图片路径与其父级的[src]属性值一致  -->
    <img src="" alt="">
</image-component>
```

### 自定义加载失败时占位
添加`[slot="error"]`插槽元素
```
<!--
    [src]               定义该组件图片路径，，属性值改变时可触发`change`事件；（@TODO 此属性值必填，需要与其子img元素图片路径一致）
-->
<image-component
    style="width: 200px; height: 200px"
    src=""
>
    <!--  @TODO 该图片路径与其父级的[src]属性值一致  -->
    <img src="" alt="">
    
    <!-- 自定义加载错误时占位插槽元素 -->
    <div slot="error">加载失败</div>
</image-component>
```

## 属性
属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`object-fit` | 定义该组件图片缩放模式 | `none` | -
`border-radius` | 定义该组件的圆角样式 | `0` | -
`error-icon-size` | 定义该组件默认失败占位图标尺寸 | `100` | -
`error-icon-color` | 定义该组件默认失败占位图标颜色 | `var(--color-gray-light)` | -
`src` | 定义该组件图片路径，，属性值改变时可触发`change`事件；（**此属性值必填，需要与其子img元素图片路径一致**） | - | `true`

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

## 重置样式
可修改`:root`中的相关`CSS`变量

CSS变量 | 描述
--- | ---
`--image-loading-bg` | 图片加载时容器背景色
`--image-error-bg` | 图片加载失败时容器背景色

```
:root {
    --image-loading-bg: #f5f5f5;
    --image-error-bg: #f5f5f5;
}
```