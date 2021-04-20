# Base 基础布局
页面常见布局方式

## 示例
### 顶部、主体、底部
```html
<section>
    <header class="height-lg">
        <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Header</div>
    </header>

    <main>
        <div class="align-items-center justify-content-center" style="background: #108EE9; color: white; height: 200px">Content</div>
    </main>

    <footer class="height-lg">
        <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Footer</div>
    </footer>
</section>
```

### 顶部固定、主体滚动、底部固定
```html
<section class="flex-direction-column" style="height: 250px;">
    <header class="height-lg">
        <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Header</div>
    </header>

    <main class="flex overflow-y-auto" style="background: #2d9cec;">
        <div style="text-align: center; color: white;">
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
            <p class="align-items-center justify-content-center height-sm">Content</p>
        </div>
    </main>

    <footer class="height-lg">
        <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Footer</div>
    </footer>
</section>
```

### 头部、主体（侧边栏+内容）、底部
```html
<section class="flex-direction-column">
    <header class="height-lg">
        <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Header</div>
    </header>

    <main class="flex overflow-hidden row">
        <aside class="col-2 min-min-height-flex">
            <div class="align-items-center justify-content-center" style="text-align: center; color: white; height: 150px;background: #3ba0e9;">
                Sidebar
            </div>
        </aside>

        <div class="flex min-min-height-flex">
            <div class="align-items-center justify-content-center" style="text-align: center; color: white; height: 150px;background: #2d9cec;">
                Content
            </div>
        </div>
    </main>

    <footer class="height-lg">
        <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Footer</div>
    </footer>
</section>
```

### 头部（侧边栏+内容区）、主体（侧边栏+内容区）
```html
<section class="flex-direction-column">
    <header class="row">
        <aside class="col-2 height-lg">
            <div class="height-lg align-items-center justify-content-center" style="text-align: center; color: white;background: #49a8ed;">
                Logo
            </div>
        </aside>

        <div class="flex height-lg">
            <div class="height-lg align-items-center justify-content-center" style="text-align: center; color: white;background: #359fec;">
                Nav
            </div>
        </div>
    </header>

    <main class="flex overflow-hidden row">
        <aside class="col-2 min-min-height-flex">
            <div class="align-items-center justify-content-center" style="text-align: center; color: white; height: 200px;background: #3ba0e9;">
                Sidebar
            </div>
        </aside>

        <div class="flex min-min-height-flex">
            <div class="align-items-center justify-content-center" style="text-align: center; color: white; height: 200px;background: #2d9cec;">
                Content
            </div>
        </div>
    </main>
</section>
```

### 头部固定、主体（侧边栏滚动+内容区滚动）
```html
<section class="flex-direction-column" style="height: 250px;">
    <header class="height-lg">
        <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Header</div>
    </header>
    
    <main class="flex overflow-hidden row">
        <aside class="col-2 height-flex overflow-y-auto" style="background: #89c5f1; color: white;">
            <div style="text-align: center; color: white;">
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
            </div>
        </aside>

        <div class="flex height-flex overflow-y-auto" style="background: #2d9cec;">
            <div style="text-align: center; color: white;">
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
            </div>
        </div>
    </main>
</section>
```

### 头部固定（侧边栏+内容区）、主体（侧边栏滚动+内容区滚动）
```html
<section class="flex-direction-column" style="height: 250px;">
    <header class="row">
        <aside class="col-2 height-lg">
            <div class="height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">Logo</div>
        </aside>

        <div class="flex height-lg">
            <div class="height-lg align-items-center justify-content-center" style="background: #108EE9; color: white;">Nav</div>
        </div>
    </header>

    <main class="row flex overflow-hidden">
        <aside class="col-2 height-flex overflow-y-auto" style="background: #89c5f1; color: white;">
            <div style="text-align: center; color: white;">
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
                <p class="align-items-center justify-content-center height-sm">Sidebar</p>
            </div>
        </aside>

        <div class="flex height-flex overflow-y-auto" style="background: #2d9cec;">
            <div style="text-align: center; color: white;">
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
                <p class="align-items-center justify-content-center height-sm">Content</p>
            </div>
        </div>
    </main>
</section>
```

### 响应式布局
使用[Grid](/docs/grid)提供的样式类：`.col-*-show`/`.col-*-show-flex`、`.col-hide`
```html
<section>
    <header class="height-lg">
        <!-- PC Header -->
        <div class="col-lg-show col-hide">
            <div class="col-12 height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">PC Header</div>
        </div>

        <!-- WAP Header -->
        <div class="col-lg-hide col-show">
            <div class="col-12 height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">WAP Header</div>
        </div>
    </header>

    <main>
        <div class="align-items-center justify-content-center" style="background: #108EE9; color: white; height: 200px">Content</div>
    </main>

    <footer class="height-lg">
        <!-- PC Footer -->
        <div class="col-lg-show col-hide">
            <div class="col-12 height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">PC Footer</div>
        </div>

        <!-- WAP Footer -->
        <div class="col-lg-hide col-show">
            <div class="col-12 height-lg align-items-center justify-content-center" style="background: #7dbcea; color: white;">WAP Footer</div>
        </div>
    </footer>
</section>
```