# Drawer 抽屉
用于当前页面处理事务，防止跳转页面时打断当前工作流程

该组件只提供了交互，具体显示内容可自行根据业务需求去扩展；例如基于该组件二次封装的组件：[ActionSheet](/docs/feedback/action-sheet) 、[Confirm](/docs/feedback/taost) 、 [HalfScreenDialog](/docs/feedback/half-screen-dialog) 、 [Modal](/docs/feedback/modal)  、 [Toast](/docs/feedback/toast) ...

## 示例
```
<!--
    [align="center"]                定义该组件内容对齐方式；可选值有：`top`、`right`、`bottom`、`left`、`center`；默认`center`
    [visible="false"]               定义该组件是否可见状态，接收`true`或`false`；默认`false`；当该值改变时可触发`changed`事件
    [mask-closable="true"]          定义该组件是否可通过点击遮罩层隐藏，接收`true`或`false`；默认`true`
    [mask-bg="var(--mask-black)"]   定义该组件遮罩层样式；默认`var(--mask-black)`
    [blur="6"]                      定义该组件遮罩层模糊样式；默认`6`
-->
<drawer-component
    align="center"
    visible="false"
    mask-closable="true"
    mask-bg="var(--mask-black)"
    blur="6"
>
    <div style="background: white; min-height: 200px; min-width: 200px;">drawer content</div>
</drawer-component>

<button class="button-theme" onclick="drawerVisible('top')">top</button>
<button class="button-info margin-left-md" onclick="drawerVisible('right')">right</button>
<button class="button-success margin-left-md" onclick="drawerVisible('center')">center</button>
<button class="button-warning margin-left-md" onclick="drawerVisible('bottom')">bottom</button>
<button class="button-danger margin-left-md" onclick="drawerVisible('left')">left</button>

<script>
    var drawerComponent = document.querySelector("drawer-component");

    function drawerVisible(align) {
        drawerComponent.setAttribute("align", align)
        drawerComponent.setAttribute("visible", true)
    }
</script>
```

## 属性
属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`align` |  定义该组件内容对齐方式，可选值有：`top`、`right`、`bottom`、`left`、`center` | `center` | -
`visible` | 定义该组件是否可见状态，接收`true`或`false` | `false` | `true`
`mask-closable` | 定义该组件是否可通过点击遮罩层隐藏 | `true` | -
`mask-bg` | 定义该组件遮罩层样式 | `var(--mask-black)` | -
`blur` | 定义该组件遮罩层模糊样式 | `6` | -