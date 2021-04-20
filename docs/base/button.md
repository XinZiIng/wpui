# Button 按钮
定义常用按钮样式类，例如普通状态按钮、线框按钮、按钮组等

## 示例
按钮根据常用场景分为：`theme`、`info`、`success`、`warning`、`danger`

### 默认按钮
```html
<button>默认按钮</button>
```

### 普通状态按钮
```html
<button class="button-theme">主题状态按钮</button>
<button class="button-info">信息状态按钮</button>
<button class="button-success">成功状态按钮</button>
<button class="button-warning">危险状态按钮</button>
<button class="button-danger">警告状态按钮</button>
<button class="button-link">链接状态按钮</button>
<button class="button-transparent">透明状态按钮</button>
```

### 线框状态按钮
```html
<button class="button-wireframe-theme">主题状态线框按钮</button>
<button class="button-wireframe-info">信息状态线框按钮</button>
<button class="button-wireframe-success">成功状态线框按钮</button>
<button class="button-wireframe-warning">危险状态线框按钮</button>
<button class="button-wireframe-danger">警告状态线框按钮</button>
```

### 圆角按钮
在按钮样式类上追加`.border-radius`圆角边框样式类
```html
<button class="border-radius button-theme">主题按钮</button>
<button class="border-radius button-info">信息状态按钮</button>
<button class="border-radius button-success">成功状态按钮</button>
<button class="border-radius button-warning">危险状态按钮</button>
<button class="border-radius button-danger">警告状态按钮</button>
```

### 椭圆按钮
在按钮样式类上追加`.border-oval`椭圆边框样式类
```html
<button class="border-oval button-theme">主题按钮</button>
<button class="border-oval button-info">信息状态按钮</button>
<button class="border-oval button-success">成功状态按钮</button>
<button class="border-oval button-warning">危险状态按钮</button>
<button class="border-oval button-danger">警告状态按钮</button>
```

### 按钮组
给按钮子项样式类的父级添加`.button-group`样式类
```html
<div class="button-group margin-bottom-md">
    <button class="button-sm button-theme">主题按钮-1</button>
    <button class="button-sm button-wireframe-theme">主题按钮-2</button>
    <button class="button-sm button-wireframe-theme">主题按钮-3</button>
</div>

<div class="button-group margin-bottom-md">
    <button class="button-sm button-info">信息按钮-1</button>
    <button class="button-sm button-wireframe-info">信息按钮-2</button>
    <button class="button-sm button-wireframe-info">信息按钮-3</button>
</div>

<div class="button-group margin-bottom-md">
    <button class="button-sm button-success">成功按钮-1</button>
    <button class="button-sm button-wireframe-success">成功按钮-2</button>
    <button class="button-sm button-wireframe-success">成功按钮-3</button>
</div>

<div class="button-group margin-bottom-md">
    <button class="button-sm button-warning">警告按钮-1</button>
    <button class="button-sm button-wireframe-warning">警告按钮-2</button>
    <button class="button-sm button-wireframe-warning">警告按钮-3</button>
</div>

<div class="button-group margin-bottom-md">
    <button class="button-sm button-danger">危险按钮-1</button>
    <button class="button-sm button-wireframe-danger">危险按钮-2</button>
    <button class="button-sm button-wireframe-danger">危险按钮-3</button>
</div>
```

### 圆角按钮组
在按钮组样式类追加`.border-radius`样式类
```html
<div class="border-radius button-group margin-bottom-md">
    <button class="button-sm button-theme">主题按钮-1</button>
    <button class="button-sm button-wireframe-theme">主题按钮-2</button>
    <button class="button-sm button-wireframe-theme">主题按钮-3</button>
</div>

<div class="border-radius button-group margin-bottom-md">
    <button class="button-sm button-info">信息按钮-1</button>
    <button class="button-sm button-wireframe-info">信息按钮-2</button>
    <button class="button-sm button-wireframe-info">信息按钮-3</button>
</div>

<div class="border-radius button-group margin-bottom-md">
    <button class="button-sm button-success">成功按钮-1</button>
    <button class="button-sm button-wireframe-success">成功按钮-2</button>
    <button class="button-sm button-wireframe-success">成功按钮-3</button>
</div>

<div class="border-radius button-group margin-bottom-md">
    <button class="button-sm button-warning">警告按钮-1</button>
    <button class="button-sm button-wireframe-warning">警告按钮-2</button>
    <button class="button-sm button-wireframe-warning">警告按钮-3</button>
</div>

<div class="border-radius button-group margin-bottom-md">
    <button class="button-sm button-danger">危险按钮-1</button>
    <button class="button-sm button-wireframe-danger">危险按钮-2</button>
    <button class="button-sm button-wireframe-danger">危险按钮-3</button>
</div>
```

### 椭圆形按钮组
在按钮组样式类追加`.border-oval`样式类
```html
<div class="border-oval button-group margin-bottom-md">
    <button class="button-sm button-theme">主题按钮-1</button>
    <button class="button-sm button-wireframe-theme">主题按钮-2</button>
    <button class="button-sm button-wireframe-theme">主题按钮-3</button>
</div>

<div class="border-oval button-group margin-bottom-md">
    <button class="button-sm button-info">信息按钮-1</button>
    <button class="button-sm button-wireframe-info">信息按钮-2</button>
    <button class="button-sm button-wireframe-info">信息按钮-3</button>
</div>

<div class="border-oval button-group margin-bottom-md">
    <button class="button-sm button-success">成功按钮-1</button>
    <button class="button-sm button-wireframe-success">成功按钮-2</button>
    <button class="button-sm button-wireframe-success">成功按钮-3</button>
</div>

<div class="border-oval button-group margin-bottom-md">
    <button class="button-sm button-warning">警告按钮-1</button>
    <button class="button-sm button-wireframe-warning">警告按钮-2</button>
    <button class="button-sm button-wireframe-warning">警告按钮-3</button>
</div>

<div class="border-oval button-group margin-bottom-md">
    <button class="button-sm button-danger">危险按钮-1</button>
    <button class="button-sm button-wireframe-danger">危险按钮-2</button>
    <button class="button-sm button-wireframe-danger">危险按钮-3</button>
</div>
```

## 样式类
样式类 | 描述
--- | ---
`.button-theme` | 主题状态按钮样式类
`.button-info` | 信息状态按钮样式类
`.button-success` | 成功状态按钮样式类
`.button-warning` | 危险状态按钮样式类
`.button-danger` | 警告状态按钮样式类
`.button-link` | 链接状态按钮样式类
`.button-transparent` | 透明状态按钮样式类
`.button-wireframe-theme` | 主题状态线框按钮样式类
`.button-wireframe-info` | 信息状态线框按钮样式类
`.button-wireframe-success` | 成功状态线框按钮样式类
`.button-wireframe-warning` | 危险状态线框按钮样式类
`.button-wireframe-danger` | 警告状态线框按钮样式类
`.button-group` | 按钮组样式类，在按钮子项父类上添加

### 其他样式类
可在`.button-group`、或其他`.button-*`样式类上追加

样式类 | 描述
--- | ---
`.border-radius` | 给按钮/按钮组设置圆角样式
`.border-oval` | 给按钮/按钮组设置椭圆样式

## 重置样式变量
可修改`:root`中的相关`CSS`变量，具体使用可查阅[CSS变量设置](/docs/base/variable)，具体使用可查阅[CSS变量设置](/docs/base/variable)

CSS变量 | 描述
--- | ---
`--color-theme` | 主题色变量设置
`--color-info` | 信息状态变量设置
`--color-success` | 成功状态变量设置
`--color-warning` | 警告状态变量设置
`--color-danger` | 危险状态变量设置
`--color-link` | 链接状态变量设置

**注意：上述变量修改将会影响到字体颜色相关、按钮相关等其他样式类**