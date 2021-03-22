# Input 输入框

## 示例
### 基础使用
```
<!--
    [clear=xx]      是否显示清除输入框值操作图标
    [view=xx]       是否显示密码输入框值密码可见操作图标
-->
<input-component clear="true" view="true">
    <input type="text" placeholder="输入点什么好呢？"/>
</input-component>
```

### 清除值
设置组件的`[clear=true]`属性值
```
<!--
    [clear=xx]      是否显示清除输入框值操作图标
-->
<input-component clear="true">
    <input type="text" placeholder="输入点什么好呢？"/>
</input-component>
```

### 密码可见
设置组件的`[view=true]`属性值
```
<!--
    [view=xx]       是否显示密码输入框值可见操作图标
-->
<input-component view="true">
    <input type="password" placeholder="请输入密码"/>
</input-component>
```

### 自定义前缀
添加前缀插槽元素`[slot="prefix"]`
```
<div class="margin-bottom-md">
    <input-component>
        <!-- 前缀插槽元素 -->
        <div slot="prefix">
            <i class="iconfont icon-people font-size-md color-gray margin-left-md"></i>
        </div>

        <input type="text" placeholder="输入点什么好呢？"/>
    </input-component>
</div>

<div>
    <input-component>
        <!-- 前缀插槽元素 -->
        <div slot="prefix">
            <i class="iconfont icon-lock font-size-md color-gray margin-left-md"></i>
        </div>

        <input type="password" placeholder="请输入密码"/>
    </input-component>
</div>
```

### 自定义后缀
添加后缀插槽元素`[slot="suffix"]`
```
<input-component>
    <input type="number" placeholder="请输入金额"/>

    <!-- 后缀插槽元素 -->
    <div slot="suffix">
        <span class="font-weight-bold margin-right-md">RMB</span>
    </div>
</input-component>
```

## 属性
该组件所支持属性：

属性名 | 描述 | 默认值 | 属性监听回调
--- | --- | --- | ---
`clear` | 定义该组件是否显示清除输入框值操作图标 | `false` | -
`view` | 定义该组件是否显示密码输入框值密码可见操作图标 | `false` | -

## Slot
该组件所支持属性：

属性名 | 描述
--- | --- 
`prefix` | 定义该组件前缀插槽元素
`suffix` | 定义该组件后缀插槽元素


