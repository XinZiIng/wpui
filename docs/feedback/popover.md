# Popover 弹出框

## 示例
### 基础使用
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="0"
    background="white"
    disabled="false"
    triangle="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">click me</button>
</popover-component>
```

### 默认显示
通过设置组件的`[visible=xx]`属性值
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="0"
    background="white"
    disabled="false"
    triangle="true"
    visible="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">click me</button>
</popover-component>
```

### 触发方式
三种触发方式：鼠标移入、聚集、点击

通过设置组件的`[trigger=xx]`属性值
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="0"
    background="white"
    disabled="false"
    triangle="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">click</button>
</popover-component>

<popover-component
    placement="bottomLeft"
    trigger="hover"
    border-radius="0"
    background="white"
    disabled="false"
    triangle="true"
    class="margin-right-md margin-left-md"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">mouse</button>
</popover-component>

<popover-component
    placement="bottomLeft"
    trigger="focus"
    border-radius="0"
    background="white"
    disabled="false"
    triangle="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <input type="text" slot="reference" placeholder="focus"/>   
</popover-component>
```

### 位置
设置组件的`[placement=xx]`属性值可修改弹窗位置
```
<style>
    button {
        width: 110px;
    }
</style>
<div class="justify-content-center" style="width: 570px;">
    <popover-component
        placement="topLeft"
        trigger="click"
        border-radius="0"
        background="white"
        disabled="false"
        triangle="true"
    >
        <div style="white-space: nowrap; padding: 6px 8px;">
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
        </div>

        <button slot="reference">topLeft</button>
    </popover-component>
    <popover-component
        placement="top"
        trigger="click"
        border-radius="0"
        background="white"
        disabled="false"
        triangle="true"
        style="margin: 0 10px"
    >
        <div style="white-space: nowrap; padding: 6px 8px;">
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
        </div>

        <button slot="reference">top</button>
    </popover-component>
    <popover-component
        placement="topRight"
        trigger="click"
        border-radius="0"
        background="white"
        disabled="false"
        triangle="true"
    >
        <div style="white-space: nowrap; padding: 6px 8px;">
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
        </div>

        <button slot="reference">topRight</button>
    </popover-component>
</div>

<div style="width: 570px; margin: 10px 0;" class="justify-content-space-between">
    <div style="width: 100px">
        <popover-component
            placement="leftTop"
            trigger="click"
            border-radius="10"
            background="white"
            visible="false"
            disabled="false"
            triangle="true"
        >
            <div style="white-space: nowrap; padding: 6px 8px;">
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
            </div>

            <button slot="reference">leftTop</button>
        </popover-component>
        <popover-component
            placement="left"
            trigger="click"
            border-radius="0"
            background="white"
            disabled="false"
            triangle="true"
            style="margin: 10px 0;"
        >
            <div style="white-space: nowrap; padding: 6px 8px;">
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
            </div>

            <button slot="reference">left</button>
        </popover-component>
        <popover-component
            placement="leftBottom"
            trigger="click"
            border-radius="0"
            background="white"
            disabled="false"
            triangle="true"
        >
            <div style="white-space: nowrap; padding: 6px 8px;">
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
            </div>

            <button slot="reference">leftBottom</button>
        </popover-component>
    </div>

    <div style="width: 100px">
        <popover-component
            placement="rightTop"
            trigger="click"
            border-radius="0"
            background="white"
            disabled="false"
            triangle="true"
        >
            <div style="white-space: nowrap; padding: 6px 8px;">
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
            </div>

            <button slot="reference">rightTop</button>
        </popover-component>
        <popover-component
            placement="right"
            trigger="click"
            border-radius="0"
            background="white"
            disabled="false"
            triangle="true"
            style="margin: 10px 0;"
        >
            <div style="white-space: nowrap; padding: 6px 8px;">
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
            </div>

            <button slot="reference">right</button>
        </popover-component>
        <popover-component
            placement="rightBottom"
            trigger="click"
            border-radius="0"
            background="white"
            disabled="false"
            triangle="true"
        >
            <div style="white-space: nowrap; padding: 6px 8px;">
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
                <p style="white-space: nowrap">popover content</p>
            </div>

            <button slot="reference">rightBottom</button>
        </popover-component>
    </div>
</div>

<div class="justify-content-center" style="width: 570px;">
    <popover-component
        placement="bottomLeft"
        trigger="click"
        border-radius="0"
        background="white"
        disabled="false"
        triangle="true"
    >
        <div style="white-space: nowrap; padding: 6px 8px;">
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
        </div>

        <button slot="reference">bottomLeft</button>
    </popover-component>
    <popover-component
        placement="bottom"
        trigger="click"
        border-radius="0"
        background="white"
        disabled="false"
        triangle="true"
        style="margin: 0 10px;"
    >
        <div style="white-space: nowrap; padding: 6px 8px;">
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
        </div>

        <button slot="reference">bottom</button>
    </popover-component>
    <popover-component
        placement="bottomRight"
        trigger="click"
        border-radius="0"
        background="white"
        disabled="false"
        triangle="true"
    >
        <div style="white-space: nowrap; padding: 6px 8px;">
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
            <p style="white-space: nowrap">popover content</p>
        </div>

        <button slot="reference">bottomRight</button>
    </popover-component>
</div>
```

### 三角形图标
通过设置组件的`[triangle=xx]`属性值可修改三角形图标是否显示
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="0"
    background="white"
    disabled="false"
    triangle="false"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">箭头隐藏</button>
</popover-component>

<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="0"
    background="white"
    disabled="false"
    triangle="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">箭头显示</button>
</popover-component>
```

### 圆角
通过设置组件的`[border-radius=xx]`属性值可修改弹出窗圆角样式
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="20"
    background="white"
    disabled="false"
    triangle="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">修改圆角样式</button>
</popover-component>
```

### 背景色
设置组件的`[backgrounds=xx]`属性值可修改弹出窗背景颜色样式
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="20"
    background="#ebebeb"
    disabled="false"
    triangle="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">修改背景样式</button>
</popover-component>
```

### 禁用
通过设置组件的`[disabled=xx]`属性值可设置弹出窗是否禁用状态
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="20"
    background="white"
    disabled="false"
    triangle="true"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">可用状态</button>
</popover-component>

<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="20"
    background="white"
    disabled="true"
    triangle="true"
    class="margin-left-md"
>
    <div style="white-space: nowrap; padding: 6px 8px;">popover content</div>

    <button slot="reference">禁用状态</button>
</popover-component>
```

## 属性
属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`visible` | 定义该组件是否可见状态，接收`true`或`false` | `false` | `true`
`placement` |  定义该组件弹出窗显示方式，可选值有：`topLeft`、`top`、`topRight`、`leftTop`、`left` 、`leftBottom` 、`rightTop` 、`right` 、`rightBottom` 、`bottomLeft` 、`bottom`、`bottomRight` | `bottomLeft` | -
`trigger` | 定义该组件触发弹出框方式，可选值有：`click`、`hover`、`focus` | `click` | -
`border-radius` | 定义该组件弹出窗圆角样式 | `0` | -
`background` | 定义该组件弹出窗背景色样式 | `white` | -
`triangle` | 定义该组件弹出窗是否显示三角形图标，接收`true`或`false` | `true` | -
`disabled` | 定义该组件是否禁用触发弹出窗，接收`true`或`false` | `false` | -

## Slot
插槽名 | 描述
--- | --- 
`reference` |  定义激活该组件弹窗的参考元素