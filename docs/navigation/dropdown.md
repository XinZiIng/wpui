# Dropdown 下拉菜单
基于[<popover-component/>](http://biuui.com/docs/feedback/drawer) 组件使用，更多使用方式可参考[Popover](http://biuui.com/docs/feedback/drawer) 文档

## 示例
使用默认样式，无需配置，简单使用
```
<popover-component
    placement="bottomLeft"
    trigger="click"
    border-radius="0"
    background="white"
    disabled="false"
    arrow="true"
>
    <ul slot="content" class="white-space-nowrap">
        <li>
            <a class="height-sm align-items-center justify-content-center padding-right-md padding-left-md" href="">下拉菜单-1</a>
        </li>
        <li>
            <a class="height-sm align-items-center justify-content-center padding-right-md padding-left-md" href="">下拉菜单-2</a>
        </li>
        <li>
            <a class="height-sm align-items-center justify-content-center padding-right-md padding-left-md" href="">下拉菜单-3</a>
        </li>
        <li>
            <a class="height-sm align-items-center justify-content-center padding-right-md padding-left-md" href="">下拉菜单-4</a>
        </li>
    </ul>

    <button slot="reference">click me</button>
</popover-component>
```