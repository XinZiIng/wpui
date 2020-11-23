# Checkbox 复选框
用于多个同`[name]`属性值或单个组件中选中/反选切换当前状态

## 示例
### 基础使用
```
<!--
    [name=xx]           定义该组件的名称；当选中状态改变时，会根据该属性值是否一致来判断是否全选
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`;当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul>
    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item-1"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >复选框一</checkbox-component>
    </li>

    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item-1"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >复选框二</checkbox-component>
    </li>

    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item-1"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >复选框三</checkbox-component>
    </li>
</ul>
<script>
    document.querySelectorAll("checkbox-component[name=checkbox-item-1]").forEach(item => {
        item.addEventListener("change", e => {
            console.log("属性改变时回调：", e.detail);
        })
    });
</script>
```

### 默认激活
设置`<checkbox-component/>`元素的`[checked]`属性值为`true`
```
<!--
    [name=xx]           定义该组件的名称；当选中状态改变时，会根据该属性值是否一致来判断是否全选
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul>
    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item-2"
            value="xxx"
            size="32"
            checked="true"
            disabled="false"
        >复选框一</checkbox-component>
    </li>

    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item-2"
            value="xxx"
            size="32"
            checked="true"
            disabled="false"
        >复选框二</checkbox-component>
    </li>

    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item-2"
            value="xxx"
            size="32"
            checked="true"
            disabled="false"
        >复选框三</checkbox-component>
    </li>
</ul>
<script>
    document.querySelectorAll("checkbox-component[name=checkbox-item-2]").forEach(item => {
        item.addEventListener("change", e => {
            console.log("属性改变时回调：", e.detail);
        })
    });
</script>
```

### 禁用状态
设置`<checkbox-component/>`元素的`[disabled]`属性值为`true`
```
<!--
    [name=xx]           定义该组件的名称；当选中状态改变时，会根据该属性值是否一致来判断是否全选
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<ul>
    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item"
            value="xxx"
            size="32"
            checked=""
            disabled="true"
        >禁用状态</checkbox-component>
    </li>

    <li class="margin-right-md float-left">
        <checkbox-component
            name="checkbox-item"
            value="xxx"
            size="32"
            checked="true"
            disabled="true"
        >选中且禁用</checkbox-component>
    </li>
</ul>
```

### 全选
通过给`<checkbox-component/>`元素绑定`change`事件，并可其回调内可通过`arguments[0].detail.isCheckedAll`属性值判断是否全选，通过`arguments[0].detail.isTriggerEvent`属性值判断是否通过事件触发（用户点击行为，而非手动修改属性值引起）
```
<!--
    [name=xx]           定义该组件的名称；当选中状态改变时，会根据该属性值是否一致来判断是否全选
    [size=32]           定义该组件的尺寸，该值为数字类型；默认`32`
    [value=xx]          定义该组件的值
    [checked=false]     定义该组件是否选中状态；可接收`true`、`false`；当该值改变时可触发`change`事件
    [disabled=false]    定义该组件是否禁用状态；可接收`true`、`false`；当该值改变时可触发`change`事件
-->
<dl>
    <dt>
        <checkbox-component
            name="check-all"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >全选</checkbox-component>
    </dt>
    
    <dd class="margin-right-md float-left">
        <checkbox-component
            name="check-item"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >复选框一</checkbox-component>
    </dd>

    <dd class="margin-right-md float-left">
        <checkbox-component
            name="check-item"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >复选框二</checkbox-component>
    </dd>

    <dd class="margin-right-md float-left">
        <checkbox-component
            name="check-item"
            value="xxx"
            size="32"
            checked="false"
            disabled="false"
        >复选框三</checkbox-component>
    </dd>
</dl>
<script>
    let checkAllElement = document.querySelector("dt checkbox-component");
    let checkItemsElement = document.querySelectorAll("dd checkbox-component");

    /**
     * 复选框操作
     */
    checkItemsElement.forEach(item => {
        item.addEventListener("change", e => {
            let detail = e.detail;
            console.log("属性改变时回调：", detail);

            // 事件触发才对全选复选框操作（用户点击行为，而非手动修改属性值引起）
            if (detail.isTriggerEvent) {
                let isChecked = checkAllElement.getAttribute("checked");

                isChecked != detail.isCheckedAll ? checkAllElement.setAttribute("checked", detail.isCheckedAll) : ""
            }
        })
    });

    /**
     * 全选复选框操作
     */
    checkAllElement.addEventListener("change", e => {
        let detail = e.detail;

        // 事件触发才对全选复选框操作（用户点击行为，而非手动修改属性值引起）
        if (detail.isTriggerEvent) {
            checkItemsElement.forEach(item => {
                item.getAttribute("disabled") !== "true" ? item.setAttribute("checked", detail.checked) : "";
            });
        }
    })
</script>
```

## 属性
该组件所支持属性：

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`size` | 定义该组件的尺寸，该值为数字类型 | `48` | -
`name` | 定义该组件的名称，**当切换状态改变时，会根据同属性组件判断是否全选** | - | -
`value` | 定义该组件的值 | - | -
`checked` | 定义该组件是否选中状态；可接收`true`、`false` | `false` | `true`
`disabled` | 定义该组件是否禁用状态；可接收`true`、`false` | `false` | `true`


## 事件
在`change`事件回调内，将额外返回两个属性值：
- `isCheckedAll`：同当前组件`[name]`属性的所有组件是否全选状态（除禁用状态），返回`true`或`false`
- `isTriggerEvent`：当前组件的`[checked]`、`[disabled]`属性改变是否通过用户触发行为，还是修改对应属性值，返回`true`或`false`
```
document.querySelector("checkbox-component").addEventListener("change", e => {
    let detail = e.detail;
    console.log("属性改变时回调：", detail);
    // {
    //     name: "xxx",             // 当前该组件的名称
    //     value: "xxx",            // 当前组件的名称
    //     checked: true,           // 当前组件是否选中状态，返回`true`或`false`
    //     disabled: false,         // 当前组件是否禁用状态，返回`true`或`false`
    //     isCheckedAll: false,     // 同当前组件`[name]`属性的所有组件是否全选状态（除禁用状态），返回`true`或`false`
    //     isTriggerEvent: true,    // 当前组件的`[checked]`、`[disabled]`属性改变是否通过用户触发行为，还是修改对应属性值，返回`true`或`false`
    // }
})
```

