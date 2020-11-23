# Toast 消息提示框
基于[<drawer-component/>](http://biuui.com/docs/feedback/drawer) 组件封装

用于主动操作反馈提示，在提示后，将延时隐藏

## 示例
### 简阶版
使用默认样式，无需配置，简单使用
```
<button class="button-theme" onclick="showBaseToast()">快来点击我吧～</button>
<script>
    function showBaseToast() {
        new Toast("Toast Content", function (ev) {
            console.log(ev.detail.visible)
        })
    }
</script>
```

### 高阶版
通过配置项自定义样式
```
<button class="button-theme" onclick="showConfigToast2()">快来点击我吧～</button>
<script>
    function showConfigToast2() {
        /**
         * 消息提示框
         * @param {string} options.align        定义该组件对齐方式；可选值有：`top`、`bottom`、`center`；默认`center`
         * @param {string} options.icon         组件icon显示内容；可接收`html`字符串
         * @param {string} options.content      组件显示内容；可接收`html`字符串
         * @param {number} options.delay        定义该组件多少毫秒后隐藏；默认`2500`
         * @param {number} options.borderRadius 定义该组件内容圆角样式；默认`8`
         * @param {function} options.afterClose 定义该组件在关闭后回调
         */
        new Toast({
            align: "center",
            delay: 2500,
            icon: '<i class="iconfont icon-check" style="font-size: 50px"></i>',
            content: "请求成功",
            borderRadius: 8,
            afterClose(e) {
                console.log("属性改变时回调：", e.detail);
            },
        })
    }
</script>
```

## 参数
### 简阶版
`new Toast(content, afterClose)`可接收两个参数：

参数名 | 描述 | 属性值类型
--- | --- | ---
`content` |  定义该组件显示内容；可接收`html`字符串 | `String`
`afterClose` | 定义该组件在关闭后回调 | `Function`

### 高阶版
`new Toast(options)`可接收一个参数，该参数为一个对象：

属性名 | 描述 | 属性值类型
--- | --- | ---
`options.align` | 定义该组件对齐方式；可选值有：`top`、`bottom`、`center`；默认`center` | `String`
`options.icon` |  定义该组件icon显示内容；可接收`html`字符串 | `String`
`options.content` |  定义该组件显示内容；可接收`html`字符串 | `String`
`options.delay` | 定义该组件多少毫秒后隐藏；默认`2500` | `Number`
`options.borderRadius` | 定义该组件内容圆角样式；默认`8` | `Number`
`options.afterClose` | 定义该组件在关闭后回调 | `Function`
