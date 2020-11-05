# Text 文本
定义常用文本样式类，例如字体大小、对齐方式、文本一行显示溢出显示省略号、文本两行显示溢出显示省略号、文本换行/不换行等

## 示例
### 字体大小
#### h1~h6
```
<h1>h1字体大小与使用 .font-size-xl 样式类字体大小一致，只是多了字体加粗</h1>
<h2>h2字体大小与使用 .font-size-lg 样式类字体大小一致，只是多了字体加粗</h2>
<h3>h3字体大小与使用 .font-size-md 样式类字体大小一致，只是多了字体加粗</h3>
<h4>h4字体大小与使用 .font-size-sm 样式类字体大小一致，只是多了字体加粗</h4>
<h5>h5字体大小与使用 .font-size 样式类字体大小一致，只是多了字体加粗</h5>
<h6>h6字体大小与使用 .font-size-xs 样式类字体大小一致，只是多了字体加粗</h6>
```

#### 不同尺寸
尺寸分为：`xl`、`lg`、`md`、`sm`、默认、`xs`
```
<p class="font-size-xl">.font-size-xl 超大号字体样式类，与h1字体大小一致</p>
<p class="font-size-lg">.font-size-lg 大号字体样式类，与h2字体大小一致</p>
<p class="font-size-md">.font-size-md 中号字体样式类，与h3字体大小一致</p>
<p class="font-size-sm">.font-size-sm 小号字体样式类，与h4字体大小一致</p>
<p class="font-size">.font-size 默认字体大小样式类（全局默认字体大小），与h5字体大小一致</p>
<p class="font-size-xs">.font-size-xs 超小号字体样式类，与h6字体大小一致</p>
```

### 文本对齐
```
<p class="text-align-left">.text-align-left 文本左对齐样式类</p>
<p class="text-align-center">.text-align-center 文本居中对齐样式类</p>
<p class="text-align-right">.text-align-right 文本右对齐样式类</p>
```

### 字体加粗/不加粗
```
<p class="font-weight-bold">.font-weight-bold 文本加粗样式类</p>
<p class="font-weight-normal">.font-weight-normal 文本常规样式类</p>
```

### 溢出隐藏
```
<p class="text-overflow-ellipsis margin-bottom-md" style="max-width: 300px;">.text-overflow-ellipsis 单行文本溢出显示省略号样式类 .text-overflow-ellipsis 单行文本溢出显示省略号样式类 .text-overflow-ellipsis 单行文本溢出显示省略号样式类 .text-overflow-ellipsis 单行文本溢出显示省略号样式类 </p>

<p class="line-clamp-2" style="max-width: 300px;">.line-clamp-2 两行文本溢出显示省略号样式类 .line-clamp-2 两行文本溢出显示省略号样式类 .line-clamp-2 两行文本溢出显示省略号样式类 .line-clamp-2 两行文本溢出显示省略号样式类 .line-clamp-2 两行文本溢出显示省略号样式类 .line-clamp-2 两行文本溢出显示省略号样式类 .line-clamp-2 两行文本溢出显示省略号样式类 .line-clamp-2 两行文本溢出显示省略号样式类 </p>
```

### 强制换行/不换行
```
<p class="white-space-nowrap border padding-md margin-bottom-md" style="max-width: 300px;">.white-space-nowrap 强制不换行样式类1111111111111111111111111111111</p>

<p class="word-break-break-word border padding-md" style="max-width: 300px;">.word-break-break-word 强制换行样式类1111111111111111111111111111111</p>
```

## 样式类
### 字体大小
样式类 | 描述
--- | ---
`.font-size-xl` | 超大号字体样式类，与`h1`字体大小一致
`.font-size-lg` | 大号字体样式类，与`h2`字体大小一致
`.font-size-md` | 中号字体样式类，与`h3`字体大小一致
`.font-size-sm` | 小号字体样式类，与`h4`字体大小一致
`.font-size` | 默认字体大小样式类（全局默认字体大小），与`h5`字体大小一致
`.font-size-xs` | 超小号字体样式类，与`h6`字体大小一致

### 文本对齐
样式类 | 描述
--- | ---
`.text-align-left` | 文本左对齐样式类
`.text-align-center` | 文本居中对齐样式类
`.text-align-right` | 文本右对齐样式类

### 字体加粗/不加粗
样式类 | 描述
--- | ---
`.font-weight-bold` | 文本加粗样式类
`.font-weight-normal` | 文本常规样式类

### 溢出隐藏
样式类 | 描述
--- | ---
`.text-overflow-ellipsis` | 单行文本溢出显示省略号样式类
`.line-clamp-2` | 两行文本溢出显示省略号样式类

### 强制换行/不换行
样式类 | 描述
--- | ---
`.white-space-nowrap` | 强制不换行样式类
`.word-break-break-word` | 强制换行样式类

## 重置样式
可修改`:root`中的相关`CSS`变量

CSS变量 | 描述
--- | ---
`--font-size-xl` | 超大号字体样式类，与`h1`字体大小一致
`--font-size-lg` | 大号字体样式类，与`h2`字体大小一致
`--font-size-md` | 中号字体样式类，与`h3`字体大小一致
`--font-size-sm` | 小号字体样式类，与`h4`字体大小一致
`--font-size` | 默认字体大小样式类（全局默认字体大小），与`h5`字体大小一致
`--font-size-xs` | 超小号字体样式类，与`h6`字体大小一致

```
:root {
    --font-size-xl: 26px;
    --font-size-lg: 20px;
    --font-size-md: 18px;
    --font-size-sm: 16px;
    --font-size: 14px;
    --font-size-xs: 12px;
}
```
