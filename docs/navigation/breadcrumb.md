# Breadcrumb 面包屑
显示当前页面在系统层级结构中的位置，并能向上返回

## 示例
### 基础使用
```html
<!--
    [separator=xxx]           定义该组件子项分隔符；默认：“/”
-->
<breadcrumb-component separator="/">
    <breadcrumb-item>
        <a href="">用户中心</a>
    </breadcrumb-item>
    <breadcrumb-item>
        <a href="">个人资料</a>
    </breadcrumb-item>
    <breadcrumb-item>
        <a href="">修改昵称</a>
    </breadcrumb-item>
</breadcrumb-component>
```

### 自定义分隔符 
设置组件的`[separator]`属性值
```html
<!--
    [separator=xxx]           定义该组件子项分隔符；默认：“/”
-->
<breadcrumb-component separator=">">
    <breadcrumb-item>
        <a href="">用户中心</a>
    </breadcrumb-item>
    <breadcrumb-item>
        <a href="">个人资料</a>
    </breadcrumb-item>
    <breadcrumb-item>
        <a href="">修改昵称</a>
    </breadcrumb-item>
</breadcrumb-component>
```

## 属性
### <breadcrumb-component/>

属性值 | 描述
--- | ---
`separator` | 设置面包屑子项之间的分隔符，默认`/`