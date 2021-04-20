# Badge 微章
位于内容元素右上角显示的微章，用来警示用户

## 示例
### 基础使用
在`<badge-component/>`元素内添加`<badge-item/>`子级元素，该子级元素将自动定位在内容右上角
```html
<badge-component>
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>

    <!--
        [type]      微章类型，可选值有：`dot`、`count`
        [dot-color] 定义小圆点类型微章背景色，只有`[type=dot]`时生效，默认`var(--badge-dot-color)`
        [dot-size]  定义小圆点类型微章尺寸，只有`[type=dot]`时生效，默认`32`
    -->
    <badge-item type="dot" dot-color="var(--badge-dot-color)" dot-size="32"></badge-item>
</badge-component>

<badge-component class="margin-left-lg">
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>

    <!--
        [type]          微章类型，可选值有：`dot`、`count`
        [count-bg]      定义计数类型微章背景色，只有`[type=count]`时生效，默认`var(--badge-count-color)`
        [count-color]   定义计数类型微章文本色，只有`[type=count]`时生效，默认`white`
    -->
    <badge-item type="count" count="1"></badge-item>
</badge-component>

<badge-component class="margin-right-lg margin-left-lg">
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>

    <!--
        [type]          微章类型，可选值有：`dot`、`count`
        [count-bg]      定义计数类型微章背景色，只有`[type=count]`时生效，默认`var(--badge-count-color)`
        [count-color]   定义计数类型微章文本色，只有`[type=count]`时生效，默认`white`
    -->
    <badge-item type="count" count="99"></badge-item>
</badge-component>

<badge-component class="margin-right-lg margin-left-lg">
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>

    <!--
        [type]          微章类型，可选值有：`dot`、`count`
        [count-bg]      定义计数类型微章背景色，只有`[type=count]`时生效，默认`var(--badge-count-color)`
        [count-color]   定义计数类型微章文本色，只有`[type=count]`时生效，默认`white`
    -->
    <badge-item type="count" count="99+"></badge-item>
</badge-component>

<badge-component class="margin-left-lg">
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>

    <!-- 自定义微章，子级可以任何元素 -->
    <badge-item>
        <i class="iconfont icon-close"></i>
    </badge-item>
</badge-component>

<badge-component class="margin-left-lg">
    <span style="width: 50px; height: 50px; background: #f5f5f5"></span>

    <!-- 自定义微章，子级可以任何元素 -->
    <badge-item>
        <i class="iconfont icon-time"></i>
    </badge-item>
</badge-component>
```

### 小圆点微章
给`<badge-item/>`设置`[type=dot]`属性
```html
<!--
    [type]      微章类型，可选值有：`dot`、`count`
    [dot-color] 定义小圆点类型微章背景色，只有`[type=dot]`时生效，默认`var(--badge-dot-color)`
    [dot-size]  定义小圆点类型微章尺寸，只有`[type=dot]`时生效，默认`32`
-->
<badge-item
    class="margin-sm"
    type="dot"
    dot-color="var(--badge-dot-color)"
    dot-size="32"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="dot"
    dot-color="var(--color-theme)"
    dot-size="32"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="dot"
    dot-color="var(--color-info)"
    dot-size="32"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="dot"
    dot-color="var(--color-success)"
    dot-size="32"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="dot"
    dot-color="var(--color-warning)"
    dot-size="32"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="dot"
    dot-color="var(--color-danger)"
    dot-size="32"
>
</badge-item>
```

### 计数微章
给`<badge-item/>`设置`[type=count]`属性
```html
<!--
    [type]          微章类型，可选值有：`dot`、`count`
    [count-bg]      定义计数类型微章背景色，只有`[type=count]`时生效，默认`var(--badge-count-color)`
    [count-color]   定义计数类型微章文本色，只有`[type=count]`时生效，默认`white`
-->
<badge-item
    class="margin-sm"
    type="count"
    count="1"
    count-bg="var(--badge-count-color)"
    count-color="white"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="count"
    count="99"
    count-bg="var(--color-theme)"
    count-color="white"
></badge-item>

<badge-item
    class="margin-sm"
    type="count"
    count="99+"
    count-bg="var(--color-info)"
    count-color="white"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="count"
    count="new"
    count-bg="var(--color-success)"
    count-color="white"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="count"
    count="new"
    count-bg="var(--color-warning)"
    count-color="white"
>
</badge-item>

<badge-item
    class="margin-sm"
    type="count"
    count="new"
    count-bg="var(--color-danger)"
    count-color="white"
>
</badge-item>
```

### 自定义微章
在`<badge-item/>`元素上不定义`[type]`属性，且添加自定义元素子级
```html
<badge-item>自定义</badge-item>

<badge-item>
    <i class="iconfont icon-close"></i>
</badge-item>
```

## 属性

### 小圆点微章
`<badge-item>`可接收属性

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`type` | 微章类型，可选值有：`dot`、`count` | - | -
`dot-color` | 定义小圆点类型微章背景色，只有`[type=dot]`时生效 | `var(--badge-dot-color)` | `true`
`dot-size` | 定义小圆点类型微章尺寸，只有`[type=dot]`时生效 | `32` | `true`

### 小圆点微章
`<badge-item>`可接收属性

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`type` | 微章类型，可选值有：`dot`、`count` | - | -
`count-bg` | 定义计数类型微章背景色，只有`[type=count]`时生效 | `var(--badge-count-color)` | `true`
`dot-color` | 义计数类型微章文本色，只有`[type=count]`时生效 | `white` | `true`

## 重置样式变量
可修改`:root`中的相关`CSS`变量，具体使用可查阅[CSS变量设置](/docs/base/variable)

CSS变量 | 描述
--- | ---
`--badge-dot-color` | 小圆点类型微章颜色
`--badge-count-color` | 计数类型微章颜色（背景色）