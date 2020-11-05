# MarginPadding 内外边距
定义内/外边距样式类

## 示例
根据常用场景，定义了三个尺寸（`lg`、`md`、`sm`）、默认等其他样式类
- `lg`：对应`15px`样式类设定
- `md`：对应`10px`样式类设定
- `sm`：对应`5px`样式类设定
- `0px`样式类设定

### Margin
#### lg
大尺寸`15px`外边距样式类定义
```
<div class="display-inline-block border">
    <button class="margin-lg">.margin-lg 大尺寸（15px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-top-lg">.margin-top-lg 距离顶部大尺寸（15px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-right-lg">.margin-right-lg 距离右边大尺寸（15px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-bottom-lg">.margin-bottom 距离底部大尺寸（15px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-left-lg">.margin-left-lg 距离左边大尺寸（15px）外边距样式类</button>
</div>
```

#### md
中尺寸`10px`外边距样式类定义
```
<div class="display-inline-block border">
    <button class="margin-md">.margin-md 中尺寸（10px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-top-md">.margin-top-md 距离顶部中尺寸（10px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-right-md">.margin-right-md 距离右边中尺寸（10px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-bottom-md">.margin-bottom 距离底部中尺寸（10px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-left-md">.margin-left-md 距离左边中尺寸（10px）外边距样式类</button>
</div>
```

#### sm
小尺寸`5px`外边距样式类定义
```
<div class="display-inline-block border">
    <button class="margin-sm">.margin-sm 小尺寸（5px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-top-sm">.margin-top-sm 距离顶部小尺寸（5px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-right-sm">.margin-right-sm 距离右边小尺寸（5px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-bottom-sm">.margin-bottom 距离底部小尺寸（5px）外边距样式类</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-left-sm">.margin-left-sm 距离左边小尺寸（5px）外边距样式类</button>
</div>
```

#### 其他
`0px`、`auto`外边距样式类定义
```
<div class="padding-md margin-bottom-md" style="background: var(--border-1px-color)">
    <button class="margin-auto" style="display: block;">.margin-auto 外边距自适应样式类</button>
</div>
<div class="display-inline-block border">
    <button class="margin">.margin 外边距0px</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-lg margin-top">.margin-top 距离顶部外边距0px</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-lg margin-right">.margin-right 距离右边外边距0px</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-lg margin-bottom">.margin-bottom 距离底部外边距0px</button>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <button class="margin-lg margin-left">.margin-left 距离左边外边距0px</button>
</div>
```

### Padding
#### lg
大尺寸`15px`内边距样式类定义
```
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-lg">.padding-lg 大尺寸（15px）内边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-top-lg">.padding-top-lg 距离顶部大尺寸（15px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-right-lg">.padding-right-lg 距离右边大尺寸（15px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-bottom-lg">.padding-bottom 距离底部大尺寸（15px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-left-lg">.padding-left-lg 距离左边大尺寸（15px）外边距样式类</span>
</div>
```

#### md
中尺寸`10px`内边距样式类定义
```
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-md">.padding-md 中尺寸（10px）内边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-top-md">.padding-top-md 距离顶部中尺寸（10px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-right-md">.padding-right-md 距离右边中尺寸（10px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-bottom-md">.padding-bottom 距离底部中尺寸（10px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-left-md">.padding-left-md 距离左边中尺寸（10px）外边距样式类</span>
</div>
```

#### sm
小尺寸`5px`内边距样式类定义
```
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-sm">.padding-sm 小尺寸（10px）内边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-top-sm">.padding-top-sm 距离顶部小尺寸（5px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-right-sm">.padding-right-sm 距离右边小尺寸（5px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-bottom-sm">.padding-bottom 距离底部小尺寸（5px）外边距样式类</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-left-sm">.padding-left-sm 距离左边小尺寸（5px）外边距样式类</span>
</div>
```

#### 其他 
`0px`内边距样式类定义
```
<div class="display-inline-block">
    <span class="padding">.padding 内边距0px</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-lg padding-top">.padding-top 距离顶部内边距0px</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-lg padding-right">.padding-right 距离右边内边距0px</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-lg padding-bottom">.padding-bottom 距离底部内边距0px</span>
</div>
<div class="display-inline-block" style="background: var(--border-1px-color)">
    <span class="padding-lg padding-left">.padding-left 距离左边内边距0px</span>
</div>
```

## 样式类
### Margin
样式类 | 描述
--- | ---
`.margin-lg` | 大尺寸（`15px`）外边距样式类
`.margin-top-lg` | 距离顶部大尺寸（`15px`）外边距样式类
`.margin-right-lg` | 距离右边大尺寸（`15px`）外边距样式类
`.margin-bottom-lg` | 距离底部大尺寸（`15px`）外边距样式类
`.margin-left-lg` | 距离左边大尺寸（`15px`）外边距样式类
`.margin-md` | 中尺寸（`10px`）外边距样式类
`.margin-top-md` | 距离顶部中尺寸（`10px`）外边距样式类
`.margin-right-md` | 距离右边中尺寸（`10px`）外边距样式类
`.margin-bottom-md` | 距离底部中尺寸（`10px`）外边距样式类
`.margin-left-md` | 距离左边中尺寸（`10px`）外边距样式类
`.margin-sm` | 小尺寸（`5px`）外边距样式类
`.margin-top-sm` | 距离顶部小尺寸（`5px`）外边距样式类
`.margin-right-sm` | 距离右边小尺寸（`5px`）外边距样式类
`.margin-bottom-sm` | 距离底部小尺寸（`5px`）外边距样式类
`.margin-left-sm` | 距离左边小尺寸（`5px`）外边距样式类
`.margin` | 外边距`0px`样式类
`.margin-top` | 距离顶部`0px`外边距样式类
`.margin-right` | 距离右边`0px`外边距样式类
`.margin-bottom` | 距离底部`0px`外边距样式类
`.margin-left` | 距离左边`0px`外边距样式类
`.margin-auto` | 外边距自适应样式类

### Padding
样式类 | 描述
--- | ---
`.padding-lg` | 大尺寸（`15px`）内边距样式类
`.padding-top-lg` | 距离顶部大尺寸（`15px`）内边距样式类
`.padding-right-lg` | 距离右边大尺寸（`15px`）内边距样式类
`.padding-bottom-lg` | 距离底部大尺寸（`15px`）内边距样式类
`.padding-left-lg` | 距离左边大尺寸（`15px`）内边距样式类
`.padding-md` | 中尺寸（`10px`）内边距样式类
`.padding-top-md` | 距离顶部中尺寸（`10px`）内边距样式类
`.padding-right-md` | 距离右边中尺寸（`10px`）内边距样式类
`.padding-bottom-md` | 距离底部中尺寸（`10px`）内边距样式类
`.padding-left-md` | 距离左边中尺寸（`10px`）内边距样式类
`.padding-sm` | 小尺寸（`5px`）内边距样式类
`.padding-top-sm` | 距离顶部小尺寸（`5px`）内边距样式类
`.padding-right-sm` | 距离右边小尺寸（`5px`）内边距样式类
`.padding-bottom-sm` | 距离底部小尺寸（`5px`）内边距样式类
`.padding-left-sm` | 距离左边小尺寸（`5px`）内边距样式类
`.padding` | 内边距`0px`样式类
`.padding-top` | 距离顶部`0px`内边距样式类
`.padding-right` | 距离右边`0px`内边距样式类
`.padding-bottom` | 距离底部`0px`内边距样式类
`.padding-left` | 距离左边`0px`内边距样式类

## 重置样式
可修改`:root`中的相关`CSS`变量

CSS变量 | 描述
--- | ---
`--margin-padding-lg` | 大尺寸外内边距变量设置
`--margin-padding-md` | 中尺寸外内边距变量设置
`--margin-padding-sm` | 小尺寸外内边距变量设置

```
:root {
    --margin-padding-lg: 15px;
    --margin-padding-md: 10px;
    --margin-padding-sm: 5px;
}
```
