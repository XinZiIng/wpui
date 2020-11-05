# Grid 网格
定义`1`行`12`列响应式网格样式类 

## 示例
### 普通网格
使用`.col-*`网格列样式类布局
```
<div class="row">
    <div class="col-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-3</div>
    </div>
    <div class="col-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.col-3</div>
    </div>
    <div class="col-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-success)">.col-3</div>
    </div>
    <div class="col-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-danger)">.col-3</div>
    </div>
</div>

<br>

<div class="row">
    <div class="col-4">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-4</div>
    </div>
    <div class="col-4">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.col-4</div>
    </div>
    <div class="col-4">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-success)">.col-4</div>
    </div>
</div>

<br>

<div class="row">
    <div class="col-6">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-6</div>
    </div>
    <div class="col-6">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.col-6</div>
    </div>
</div>

<br>

<div class="row">
    <div class="col-12">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-12</div>
    </div>
</div>
```

### 网格位移
使用`.col-offset-*`网格位移列样式类做位移
```
<div class="row">
    <div class="col-3 col-offset-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-3 .col-offset-3</div>
    </div>
    <div class="col-3 col-offset-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.col-3 .col-offset-3</div>
    </div>
</div>

<br>

<div class="row">
    <div class="col-4">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-4</div>
    </div>
    <div class="col-4 col-offset-4">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.col-4 .col-offset-4</div>
    </div>
</div>

<br>

<div class="row">
    <div class="col-6 col-offset-6">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-6 .col-offset-6</div>
    </div>
</div>
```

### 弹性布局
使用`.col-*`网格列样式类布局
```
<div class="row">
    <div class="col-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-3</div>
    </div>
    <div class="flex">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.flex</div>
    </div>
    <div class="col-3">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-success)">.col-3</div>
    </div>
    <div class="flex">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-danger)">.flex</div>
    </div>
</div>

<br>

<div class="row">
    <div class="col-4">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-4</div>
    </div>
    <div class="flex">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.flex</div>
    </div>
    <div class="col-4">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-success)">.col-4</div>
    </div>
</div>

<br>

<div class="row">
    <div class="col-6">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.col-6</div>
    </div>
    <div class="flex">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)">.flex</div>
    </div>
</div>

<br>

<div class="row">
    <div class="flex">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)">.flex</div>
    </div>
</div>
```

### 响应式网格
响应式网格尺寸分为：`默认`、`sm`、`md`、`lg`、`xl`

`xl`优先级最高，`默认`最低

假如只设置了`xl`，那在非`xl`下将隐藏，以此类推

```
<p class="color-gray-light">当屏幕分辨率>0px时一行一列；>768px时一行两列；>992px时一行三列；>1200px时一行四列；>1600px时一行六列</p>
<div class="row">
    <div class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)"></div>
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-success)"></div>
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-warning)"></div>
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-danger)"></div>
    </div>
    <div class="col-lg-4 col-xl-2">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)"><1200px时隐藏</div>
    </div>
    <div class="col-xl-2">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-success)"><1600px时隐藏</div>
    </div>
</div>
```

### 响应式网格位移
使用方法与上述类型，响应式网格位移尺寸分为：`默认`、`sm`、`md`、`lg`、`xl`

`xl`优先级最高，`默认`最低

假如只设置了`xl`，那在非`xl`下将隐藏，以此类推
```
<p class="color-gray-light">当屏幕分辨率>0px时位移2列；>768px时位移4列；>992px时位移6列；>1200px时位移8列；>1600px时位移10列</p>
<div class="row">
    <div class="flex col-offset-2 col-offset-sm-4 col-offset-md-6 col-offset-lg-8 col-offset-xl-10">
        <div class="height-md color-white align-items-center justify-content-center" style="background: var(--color-info)"></div>
    </div>
</div>
```

## 样式类
### 行
样式类 | 描述
--- | ---
`.row` | 行样式类，在其子元素可使用列样式类

### 列
样式类 | 描述
--- | ---
`.col-n` | 列样式类，当屏幕可视区`>0px`时生效；`n`可选数值范围：`1`~`12`
`.col-sm-n` | 小屏响应式列样式类，当屏幕可视区`>768px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`
`.col-md-n` | 中等屏响应式列样式类，当屏幕可视区`>992px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`
`.col-lg-n` | 大屏响应式列样式类，当屏幕可视区`>1200px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`
`.col-xl-n` | 超大屏响应式列样式类，当屏幕可视区`>1600px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`

优先级（从高到底）：`.col-xl-n`>`.col-lg-n`>`.col-md-n`>`.col-sm-n`>`.col-n`

### 位移列
样式类 | 描述
--- | ---
`.col-offset-n` | 位移列样式类，当屏幕可视区`>0px`时生效；`n`可选数值范围：`1`~`12`
`.col-offset-sm-n` | 小屏响应式位移列样式类，当屏幕可视区`>768px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`
`.col-offset-md-n` | 中等屏响应式位移列样式类，当屏幕可视区`>992px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`
`.col-offset-lg-n` | 大屏响应式位移列样式类，当屏幕可视区`>1200px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`
`.col-offset-xl-n` | 超大屏响应式位移列样式类，当屏幕可视区`>1600px`时生效，反之隐藏；`n`可选数值范围：`1`~`12`

优先级（从高到底）：`.col-offset-xl-n`>`.col-offset-lg-n`>`.col-offset-md-n`>`.col-offset-sm-n`>`.col-offset-n`

### 其他
样式类 | 描述
--- | ---
`.flex` | 列自适应样式类，其优先级与`.col-n`一致
