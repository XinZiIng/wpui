# Dialog 对话框
基于[&lt;drawer-component/&gt;](/docs/feedback/drawer) 组件封装

用于当前页面处理事务，防止跳转页面时打断当前工作流程

## 示例
```html
<button onclick="dialogVisible(true)" class="button-theme">点击显示对话框</button>

<!--
    半屏对话框组件
    [visible=true]                  定义该组件是否可见状态，接收`true`或`false`；默认`false`；当该值改变时可触发`changed`事件
    [mask-closable="true"]          定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false`；默认`true`
    [mask-blur="6"]                 定义该组件遮罩层模糊样式；默认：`6`
    [mask-bg="var(--mask-black)"]   定义该组件遮罩层背景样式；默认：`var(--mask-black)`
    [border-radius="24"]            定义该组件圆角样式；默认：`24`
-->
<dialog-component
    visible="false"
    mask-closable="true"
    mask-blur="6"
    mask-bg="var(--mask-black)"
    border-radius="24"
>
    <!--  头部插槽元素  -->
    <div slot="header">弹窗标题</div>

    <!--  主体内容插槽元素  -->
    <div slot="body">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>

    <!--  底部插槽元素  -->
    <div slot="footer" class="row">
        <button class="button-theme-gray button-lg" onclick="dialogVisible(false)">辅助操作</button>
        <button class="button-theme button-lg" onclick="dialogVisible(false)">主操作</button>
    </div>
</dialog-component>

<script>
    function dialogVisible(visible) {
        document.querySelector('dialog-component').setAttribute("visible", visible)
    }
</script>
```

## 属性
该组件所支持属性：

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`visible` | 定义该组件是否可见状态，接收`true`或`false` | `false` | `true`
`mask-closable` | 定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false` | `true` | -
`mask-bg` | 定义该组件遮罩层背景样式；默认`var(--mask-black)` | - | -
`mask-blur` | 定义该组件遮罩层模糊样式 | `6` | -
`border-radius` | 定义该组件圆角样式 | `24` | -

## Slot
插槽名 | 描述
--- | --- 
`header` |  自定义组件头部插槽元素
`body` |  自定义组件内容插槽元素
`footer` |  自定义组件尾部插槽元素