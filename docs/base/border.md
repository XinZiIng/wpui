# Border 边框
定义常用边框样式类，例如：`1px`、圆角、椭圆、圆形等边框样式类

## 示例
### 1PX边框
定义默认、上、右、下、左`1px`边框样式类

#### 通用场景
该样式类的边框色与`input`、`button`、`textarea`、`select`等元素的边框色一致
```
<div class="border align-items-center justify-content-center" style="height: 40px;">.border 1px边框样式类</div>

<div class="border-top" style="height: 40px;margin: 10px 0;">.border-top 1px顶部边框样式类</div>

<div class="border-right justify-content-flex-end align-content-center" style="height: 40px;">.border-right 1px右边边框样式类</div>

<div class="border-bottom align-content-flex-end" style="margin: 10px 0;height: 40px;">.border-bottom 1px底部边框样式类</div>

<div class="border-left align-content-center" style="height: 40px;">.border-left 1px左边边框样式类</div>
```

#### 浅色
该样式类的边框色比上述的要浅很多，一般常用于列表分割等场景
```
<div class="border align-items-center justify-content-center" style="height: 40px;">.border 1px边框样式类</div>

<div class="border-top" style="height: 40px;margin: 10px 0;">.border-top 1px顶部边框样式类</div>

<div class="border-right justify-content-flex-end align-content-center" style="height: 40px;">.border-right 1px右边边框样式类</div>

<div class="border-bottom align-content-flex-end" style="margin: 10px 0;height: 40px;">.border-bottom 1px底部边框样式类</div>

<div class="border-left align-content-center" style="height: 40px;">.border-left 1px左边边框样式类</div>
```

### 圆角边框
```
<div class="border-radius" style="width: 40px; height: 40px; background: #ccc;"></div>
```

### 椭圆边框
```
<div class="border-oval" style="width: 100px; height: 40px; background: #ccc;"></div>
```

### 圆形边框
```
<div class="border-round" style="width: 40px; height: 40px; background: #ccc;"></div>
```

## 样式类
样式类 | 描述
--- | ---
`.border` | `1px`边框样式类
`.border-top` | `1px`顶部边框样式类
`.border-right` | `1px`右边边框样式类
`.border-bottom` | `1px`底部边框样式类
`.border-left` | `1px`左边边框样式类
`.border-radius` | 圆角边框圆角样式类
`.border-oval` | 椭圆边框圆角样式类
`.border-round` | 圆形边框圆角样式类

## 重置样式
可修改`:root`中的相关`CSS`变量

CSS变量 | 描述
--- | ---
`--border-1px-width` | `1px`边框宽度变量设置
`--border-color-light` | `1px`边框颜色变量设置
`--border-radius` | 圆角边框变量设置

```
:root {
    --border-1px-width: 1px;
    --border-color-light: #ccc;
    --border-radius: 4px;
}
```