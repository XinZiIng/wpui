# Switch 开关
用于操作开或关两种状态之间的切换

## 示例
### 基础使用
```html
<!--
    [name=xx]           定义该组件的名称
    [size=48]           定义该组件的尺寸，该值为数字类型；默认`48`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`;当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul class="clear-both">
    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item-1"
            value="xxx"
            size="48"
            checked="false"
            disabled="false"
        ></switch-component>
    </li>

    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item-1"
            value="xxx"
            size="48"
            checked="false"
            disabled="false"
        ></switch-component>
    </li>

    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item-1"
            value="xxx"
            size="48"
            checked="false"
            disabled="false"
        ></switch-component>
    </li>
</ul>
<script>
    document.querySelectorAll("switch-component[name=switch-item-1]").forEach(item => {
        item.addEventListener("change", e => {
            console.log("属性改变时回调：", e.detail);
        })
    });
</script>
```

### 默认激活
设置`<switch-component/>`元素的`[checked]`属性值为`true`
```html
<!--
    [name=xx]           定义该组件的名称
    [size=48]           定义该组件的尺寸，该值为数字类型；默认`48`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul class="clear-both">
    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item-2"
            value="xxx"
            size="48"
            checked="true"
            disabled="false"
        >复选框一</switch-component>
    </li>

    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item-2"
            value="xxx"
            size="48"
            checked="false"
            disabled="false"
        >复选框二</switch-component>
    </li>

    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item-2"
            value="xxx"
            size="48"
            checked="false"
            disabled="false"
        >复选框三</switch-component>
    </li>
</ul>
<script>
    document.querySelectorAll("switch-component[name=switch-item-2]").forEach(item => {
        item.addEventListener("change", e => {
            console.log("属性改变时回调：", e.detail);
        })
    });
</script>
```

### 禁用状态
设置`<switch-component/>`元素的`[disabled]`属性值为`true`
```html
<!--
    [name=xx]           定义该组件的名称
    [size=48]           定义该组件的尺寸，该值为数字类型；默认`48`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul class="clear-both">
    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item"
            value="xxx"
            size="48"
            checked=""
            disabled="true"
        ></switch-component>
    </li>

    <li class="margin-right-md float-left">
        <switch-component
            name="switch-item"
            value="xxx"
            size="48"
            checked="true"
            disabled="true"
        ></switch-component>
    </li>
</ul>
```

## 属性
该组件所支持属性：

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`size` | 定义该组件的尺寸，该值为数字类型 | `48` | -
`name` | 定义该组件的名称 | - | -
`value` | 定义该组件的值 | - | -
`checked` | 定义该组件是否选中状态；可接收`true`、`false` | `false` | `true`
`disabled` | 定义该组件是否禁用状态；可接收`true`、`false` | `false` | `true`
