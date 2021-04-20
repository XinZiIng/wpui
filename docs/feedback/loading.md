# Loading 加载中
用于页面区块的加载、翻页加载更多数据的场景

## 示例
### 遮罩层
设置该组件的`[type]`属性值为`mask`时，显示遮罩层加载样式；默认`[type=mask]`
```html
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <switch-component
        class="margin-sm switch-component-1"
        name="switch-item"
        value="xxx"
        size="48"
        checked="true"
        onchange=""
    ></switch-component>
    <span>显示</span>
</div>

<!--
    [visible="false"]               定义该组件是否为加载状态且显示相关元素；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   定义该组件加载显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]             当组件加载类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
    [mask-bg="var(--mask-white)"]   定义该组件遮罩层背景样式；默认`var(--mask-white)`
    [mask-blur="6"]                 定义该组件遮罩层模糊样式；该值为数字类型；默认`6`
    [font-size="48"]                定义该组件默认字体图标字体大小；该值为数字类型；默认`48`
    [color="var(--color)"]          定义该组件默认字体图标颜色；默认`var(--color)`
-->
<loading-component
    visible="true"
    type="mask"
    mask-icon-top=""
    mask-bg="var(--mask-white)"
    mask-blur="6"
    font-size="48"
    color="var(--color)"
>
    <table>
        <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>身高</th>
                <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</loading-component>

<script>
    document.querySelector(".switch-component-1").addEventListener("change", function (ev) {
        this.parentNode.nextElementSibling.setAttribute("visible", ev.detail.checked)
    })
</script>
```

### 遮罩层加载图标位置设置
当组件加载类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好，因此可以设置`[mask-icon-top="100"]`

```html
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <switch-component
        class="margin-sm switch-component-2"
        name="switch-item"
        value="xxx"
        size="48"
        checked="true"
        onchange=""
    ></switch-component>
    <span>显示</span>
</div>

<!--
    [visible="false"]               定义该组件是否为加载状态且显示相关元素；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   定义该组件加载显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]             当组件加载类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
    [mask-bg="var(--mask-white)"]   定义该组件遮罩层背景样式；默认`var(--mask-white)`
    [mask-blur="6"]                 定义该组件遮罩层模糊样式；该值为数字类型；默认`6`
    [font-size="48"]                定义该组件默认字体图标字体大小；该值为数字类型；默认`48`
    [color="var(--color)"]          定义该组件默认字体图标颜色；默认`var(--color)`
-->
<loading-component
    visible="true"
    type="mask"
    mask-icon-top="100"
    mask-bg="var(--mask-white)"
    mask-blur="6"
    font-size="48"
    color="var(--color)"
>
    <table>
        <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>身高</th>
                <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</loading-component>

<script>
    document.querySelector(".switch-component-2").addEventListener("change", function (ev) {
        this.parentNode.nextElementSibling.setAttribute("visible", ev.detail.checked)
    })
</script>
```

### 加载更多
设置该组件的属性`[type="more"]`时，显示加载更多样式

```html
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <switch-component
        class="margin-sm switch-component-3"
        name="switch-item"
        value="xxx"
        size="48"
        checked="true"
        onchange=""
    ></switch-component>
    <span>显示</span>
</div>

<!--
    [visible="false"]               定义该组件是否为加载状态且显示相关元素；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   定义该组件加载显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]             当组件加载类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
    [mask-bg="var(--mask-white)"]   定义该组件遮罩层背景样式；默认`var(--mask-white)`
    [mask-blur="6"]                 定义该组件遮罩层模糊样式；该值为数字类型；默认`6`
    [font-size="48"]                定义该组件默认字体图标字体大小；该值为数字类型；默认`48`
    [color="var(--color)"]          定义该组件默认字体图标颜色；默认`var(--color)`
-->
<loading-component
    visible="true"
    type="more"
    mask-icon-top=""
    mask-bg="var(--mask-white)"
    mask-blur="6"
    font-size="48"
    color="var(--color)"
>
    <table>
        <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>身高</th>
                <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>
</loading-component>

<script>
    document.querySelector(".switch-component-3").addEventListener("change", function (ev) {
        this.parentNode.nextElementSibling.setAttribute("visible", ev.detail.checked)
    })
</script>
```

### 遮罩层加载图标自定义
通过定义`[slot="mask"]`属性的插槽元素

```html
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <switch-component
        class="margin-sm switch-component-4"
        name="switch-item"
        value="xxx"
        size="48"
        checked="true"
        onchange=""
    ></switch-component>
    <span>显示</span>
</div>

<!--
    [visible="false"]               定义该组件是否为加载状态且显示相关元素；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   定义该组件加载显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]             当组件加载类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
    [mask-bg="var(--mask-white)"]   定义该组件遮罩层背景样式；默认`var(--mask-white)`
    [mask-blur="6"]                 定义该组件遮罩层模糊样式；该值为数字类型；默认`6`
    [font-size="48"]                定义该组件默认字体图标字体大小；该值为数字类型；默认`48`
    [color="var(--color)"]          定义该组件默认字体图标颜色；默认`var(--color)`
-->
<loading-component
    visible="true"
    type="mask"
    mask-icon-top=""
    mask-bg="var(--mask-white)"
    mask-blur="6"
    font-size="48"
    color="var(--color)"
>
    <table>
        <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>身高</th>
                <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>

    <!--  自定义遮罩层加载插槽  -->
    <div slot="mask">加载中...</div>
</loading-component>

<script>
    document.querySelector(".switch-component-4").addEventListener("change", function (ev) {
        this.parentNode.nextElementSibling.setAttribute("visible", ev.detail.checked)
    })
</script>
```

### 加载更多加载图标自定义
通过定义`[slot="mask"]`属性的插槽元素

```html
<div class="align-items-center justify-content-flex-end">
    <span>隐藏</span>
    <switch-component
        class="margin-sm switch-component-5"
        name="switch-item"
        value="xxx"
        size="48"
        checked="true"
        onchange=""
    ></switch-component>
    <span>显示</span>
</div>

<!--
    [visible="false"]               定义该组件是否为加载状态且显示相关元素；可选值有：`true`、`false`；默认隐藏；当该值改变时可触发`changed`事件
    [type="mask"]                   定义该组件加载显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask`；默认`mask`
    [mask-icon-top="0"]             当组件加载类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好
    [mask-bg="var(--mask-white)"]   定义该组件遮罩层背景样式；默认`var(--mask-white)`
    [mask-blur="6"]                 定义该组件遮罩层模糊样式；该值为数字类型；默认`6`
    [font-size="48"]                定义该组件默认字体图标字体大小；该值为数字类型；默认`48`
    [color="var(--color)"]          定义该组件默认字体图标颜色；默认`var(--color)`
-->
<loading-component
    visible="true"
    type="more"
    mask-icon-top=""
    mask-bg="var(--mask-white)"
    mask-blur="6"
    font-size="48"
    color="var(--color)"
>
    <table>
        <thead>
            <tr>
                <th>昵称</th>
                <th>性别</th>
                <th>身高</th>
                <th>体重</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>188cm</td>
                <td>70kg</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>女</td>
                <td>172cm</td>
                <td>50kg</td>
            </tr>
        </tbody>
    </table>

    <!--  自定义加载更多加载插槽  -->
    <div slot="more">加载中...</div>
</loading-component>

<script>
    document.querySelector(".switch-component-5").addEventListener("change", function (ev) {
        this.parentNode.nextElementSibling.setAttribute("visible", ev.detail.checked)
    })
</script>
```

## 属性
该组件所支持属性：

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`visible` | 定义该组件是否为加载状态且显示相关元素，接收`true`或`false` | `false` | `true`
`type` | 定义该组件加载显示类型，可选值有：`more`(适用于滚动加载下一页)、`mask` | `mask` | -
`mask-icon-top` | 当组件加载类型是`mask`时，可修改加载图标距离顶部距离；默认该图标水平/垂直居中，但内容高度过高时，会在首屏看不到加载图标等情况，这样会导致用户体验不好 | - | -
`mask-bg` | 定义该组件遮罩层背景样式 | `var(--mask-white)` | -
`mask-blur` | 定义该组件遮罩层模糊样式 | `6` | -
`font-size` | 定义该组件默认字体图标字体大小 | `48` | -
`color` | 定义该组件默认字体图标颜色 | `var(--color-theme)` | -

## Slot
插槽名 | 描述
--- | --- 
`mask` |  自定义遮罩层加载图标插槽元素
`more` |  自定义加载更多插槽元素