# ActionSheet 弹出式菜单
基于[<drawer-component/>](docs/feedback/drawer) 组件封装

## 示例
```
<button class="button-theme" onclick="showActionSheet()">点击弹出菜单</button>

<script>
    /**
     * 弹出式菜单
     * @param {boolean} options.visible             定义该组件默认显示或隐藏，也可通过`setVisible(boolean)`方法操作显示隐藏；默认`false`
     * @param {string} options.title                定义该组件标题文本
     * @param {array} options.data                  定义该组件菜单数据配置项
     * @param {string} options.data[i].text         定义该组件菜单数据项文本
     * @param {boolean} options.data[i].isActive    定义该组件菜单数据项是否默认激活；默认`false`
     * @param {boolean} options.data[i].isDisabled  定义该组件菜单数据项是否默认禁用；默认`false`
     * @param {string} options.footerButtonText     定义该组件底部操作按钮文本
     * @param {number} options.borderRadius         定义该组件圆角样式；默认`24`
     * @param {number} options.maskBlur             定义该组件遮罩层模糊样式；默认`6`
     * @param {number} options.maskClosable         定义该组件是否可通过点击遮罩层隐藏；可接收`true`或`false`；默认`true`
     * @param {function} options.onChange           组件属性改变时回调，当显示隐藏时，都会触发回调，可通过监听`arguments[0].detail.visible`识别
     * @param {function} options.onClick            菜单项点击时回调，接收两个参数，参数一返回当前菜单项数据，参数二返回当前菜单项索引；注意：默认禁用的菜单项将不会触发
     */
    var as = new ActionSheet({
        title: "这是一个标题，可以为一行或者两行。",
        data: [
            {
                text: "示例项（激活）",
                isActive: true,
                isDisabled: false,
            }, {
                text: "示例项（禁用）",
                isActive: false,
                isDisabled: true,
            }, {
                text: "示例项（禁用且激活）",
                isActive: true,
                isDisabled: true,
            }, {
                text: "示例项（默认）",
                isActive: false,
                isDisabled: false,
            },
        ],
        footerButtonText: "取消",
        borderRadius: 24,
        maskBlur: 6,
        maskClosable: true,
        onChange(e) {
            console.log("属性改变时回调：", e.detail);
        },
        onClick(item, activeIndex) {
            alert(`激活索引：${activeIndex}；当前数据项：${JSON.stringify(item)}`);
        },
    })

    function showActionSheet () {
        as.setVisible(true)
    }
</script>
```

## 参数
`new ActionSheet(options)`的`options`属性值接受一个对象集，可接收以下参数：

属性名 | 描述 | 属性值类型
--- | --- | ---
`options.visible` | 定义该组件默认显示或隐藏，也可通过`setVisible(boolean)`方法操作显示隐藏 | `Boolean`
`options.title` | 定义该组件标题文本 | `String`
`options.data` | 定义该组件菜单数据配置项 | `Array`
`options.data[i].text` | 定义该组件菜单数据项文本 | `String`
`options.data[i].isActive` | 定义该组件菜单数据项是否默认激活；默认`false` | `Boolean`
`options.data[i].isDisabled` | 定义该组件菜单数据项是否默认禁用；默认`false` | `Boolean`
`options.footerButtonText` | 定义该组件底部操作按钮文本 | `String`
`options.borderRadius` | 定义该组件圆角样式；默认`24` | `Number`
`options.blur` | 定义该组件遮罩层模糊样式；默认`6` | `Number`
`options.changed` | 组件属性改变时回调，当显示隐藏时，都会触发回调，可通过监听`arguments[0].detail.visible`识别 | `Function`
`options.onClick` | 菜单项点击时回调，接收两个参数，参数一返回当前菜单项数据，参数二返回当前菜单项索引；注意：默认禁用的菜单项将不会触发 | `Function`

## 方法

方法名 | 描述
--- | ---
`setVisible(boolean)` | 设置该组件显示或隐藏

调用方法示例，例如调用`setVisible(boolean)`方法
```
const AS = new ActionSheet({
    ...
})

// 设置该组件显示或隐藏；参数如果是true时为显示，反之false为隐藏
AS.setVisible(true)
```