# Color 文本色
定义常用文本色样式类

## 示例
```html
<p class="padding-md margin-bottom-md color-theme">.color-theme 主题色文本样式类</p>
<p class="padding-md margin-bottom-md color-info">.color-info 信息状态文本色样式类</p>
<p class="padding-md margin-bottom-md color-success">.color-success 信息状态文本色样式类</p>
<p class="padding-md margin-bottom-md color-warning">.color-warning 危险状态文本色样式类</p>
<p class="padding-md margin-bottom-md color-danger">.color-danger 警告状态文本色样式类</p>

<p class="padding-md margin-bottom-md color-disabled">.color-disabled 禁用状态文本色样式类</p>
<p class="padding-md margin-bottom-md color-link">.color-link 链接状态文本色样式类</p>

<p class="padding-md margin-bottom-md color-black">.color-black 默认文本色样式类</p>
<p class="padding-md margin-bottom-md color-white" style="background: black">.color-white 白色文本色样式类</p>
<p class="padding-md margin-bottom-md color-gray">.color-gray 灰色（辅助内容）文本色样式类</p>
<p class="padding-md margin-bottom-md color-gray-light">.color-gray-light 浅灰色（次要内容）文本色样式类</p>
```

## 样式类
样式类 | 描述
--- | ---
`.color-theme` | 主题色文本样式类
`.color-info` | 信息状态文本色样式类
`.color-success` | 信息状态文本色样式类
`.color-warning` | 危险状态文本色样式类
`.color-danger` | 警告状态文本色样式类
`.color-disabled` | 禁用状态文本色样式类
`.color-link` | 链接状态文本色样式类
`.color-black` | 默认文本色样式类
`.color-white` | 白色文本色样式类
`.color-gray` | 灰色（辅助内容）文本色样式类
`.color-gray-light` | 浅灰色（次要内容）文本色样式类

## 重置样式变量
可修改`:root`中的相关`CSS`变量，具体使用可查阅[CSS变量设置](/docs/base/variable)

变量 | 描述
--- | ---
`--color-theme` | 主题文本色变量设置
`--color-info` | 信息状态文本色变量设置
`--color-success` | 成功状态文本色变量设置
`--color-warning` | 警告状态文本色变量设置
`--color-danger` | 危险状态文本色变量设置
`--color-disabled` | 禁用状态文本色变量设置
`--color-link` | 链接状态文本色变量设置
`--color-black` | 默认黑色文本色变量设置
`--color-gray` | 灰色（辅助内容）文本色变量设置
`--color-gray-light` | 浅灰色（次要内容）文本色变量设置

**注意：上述变量修改将会影响到字体颜色相关、按钮相关等其他样式类**