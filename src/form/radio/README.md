# Radio 单选框
用于多个同`[name]`属性值组件中切换选中状态，且只选中当前

## 示例
### 基础使用
```
<!--
    [name=xx]           定义该组件的名称；同属性值的所有组件中切换选中状态，且只选中当前
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`;当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul>
    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item-1"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >单选框一</radio-component>
    </li>

    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item-1"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >单选框二</radio-component>
    </li>

    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item-1"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >单选框三</radio-component>
    </li>
</ul>
<script>
    document.querySelectorAll("radio-component[name=radio-item-1]").forEach(item => {
        item.addEventListener("change", e => {
            console.log("属性改变时回调：", e.detail);
        })
    });
</script>
```

### 默认激活
设置`<radio-component/>`元素的`[checked]`属性值为`true`
```
<!--
    [name=xx]           定义该组件的名称；同属性值的所有组件中切换选中状态，且只选中当前
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul>
    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item-2"
            value="xxx"
            size="32"
            checked="true"
            disabled="false"
        >单选框一</radio-component>
    </li>

    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item-2"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >单选框二</radio-component>
    </li>

    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item-2"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >单选框三</radio-component>
    </li>
</ul>
<script>
    document.querySelectorAll("radio-component[name=radio-item-2]").forEach(item => {
        item.addEventListener("change", e => {
            console.log("属性改变时回调：", e.detail);
        })
    });
</script>
```

### 禁用状态
设置`<radio-component/>`元素的`[disabled]`属性值为`true`
```
<!--
    [name=xx]           定义该组件的名称；同属性值的所有组件中切换选中状态，且只选中当前
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul>
    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item"
            value="xxx"
            size="32"
            checked=""
            disabled="true"
        >禁用状态</radio-component>
    </li>

    <li class="margin-right-md float-left">
        <radio-component
            name="radio-item"
            value="xxx"
            size="32"
            checked="true"
            disabled="true"
        >选中且禁用</radio-component>
    </li>
</ul>
```

## 属性
该组件所支持属性：

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`size` | 定义该组件的尺寸，该值为数字类型 | `32` | -
`name` | 定义该组件的名称，同属性值的所有组件中切换选中状态，且只选中当前 | - | -
`value` | 定义该组件的值 | - | -
`checked` | 定义该组件是否选中状态；可接收`true`、`false` | `false` | `true`
`disabled` | 定义该组件是否禁用状态；可接收`true`、`false` | `false` | `true`

## 事件
在`change`事件回调内，将额外个属性值：
- `isCheckedAll`：同当前组件`[name]`属性的所有组件是否全选状态（除禁用状态），返回`true`或`false`
```
document.querySelector("radio-component").addEventListener("change", e => {
    let detail = e.detail;
    console.log("属性改变时回调：", detail);
    // {
    //     name: "xxx",             // 当前该组件的名称
    //     value: "xxx",            // 当前组件的名称
    //     checked: true,           // 当前组件是否选中状态，返回`true`或`false`
    //     disabled: false,         // 当前组件是否禁用状态，返回`true`或`false`
    //     activeIndex: 0,          // 在同`[name]`属性值的组件中，是第几个元素
    // }
})
```