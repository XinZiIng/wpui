const marked = require("marked");
const fs = require("fs");
const path = require("path");

function createTemplate(html) {
return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>WPUI</title>
    <link href="./../../dist/css/wpui.min.css?${new Date().getTime()}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/highlight.js/10.7.1/styles/github.min.css">
    <style>
        #Docs {
            max-width: 1000px;
            margin: auto;
            padding: 0 20px 50px;
        }
        
        #Docs > p > a {
            color: var(--color-link);
        }
        
        #Docs > p {
            margin: 15px 0;
            line-height: 1.65;
            color: var(--color-gray);
        }

        #Docs > h1 {
            margin-top: 50px;
        }

        #Docs > h2 {
            margin: 55px 0 20px;
        }

        #Docs > h3, #Docs > h4, #Docs > h5, #Docs > h6 {
            margin: 30px 0 10px;
            font-weight: normal;
        }

        #Docs code {
            color: #d14;
        }

        #Docs > table {
            margin-bottom: 16px;
        }
        
        #Docs > table th, #Docs > table tbody tr td:first-child {
            white-space: nowrap;
        }
        
        #Docs .example-html carousel-component {
            max-width: 350px;
        }
        
        #Docs .example-box {
            border-radius: var(--border-radius);
        }

        #Docs .example-code {
            height: 0;
            overflow: hidden;
            transition: .3s height;
        }

        #Docs .example-code pre code {
            background: transparent;
            line-height: 1.65;
        }
    </style>
</head>
<body>
<section id="Docs">${html}</section>
<script src="./../../dist/js/wpui.min.js?${new Date().getTime()}"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
<script>
    getNext(document.querySelector("h2").nextElementSibling)

    function getNext(el) {
        if (!el || el.tagName == "H2") return

        if (el.tagName == "PRE") {
            let div = document.createElement("div");
            div.innerHTML = '<div class="example-box border-light">' +
                '    <div class="example-html padding-lg">'+ el.children[0].innerHTML.replace(/&lt;/gmi, "<").replace(/&gt;/gmi, ">") +'</div>' +
                '' +
                '    <div class="border-top-light height-md align-content-center justify-content-center color-gray-light cursor-pointer view-code">展开代码</div>' +
                '' +
                '    <div class="example-code">' +
                '        <div>' +
                '            <div class="color-gray-light font-size padding-left-lg">'+ el.children[0].className.replace(/language-/, "") +'：</div>' +
                '            <pre class="padding-lg padding-top">'+ el.innerHTML +'</pre>' +
                '        </div>' +
                '    </div>' +
                '</div>'

            let el2 = div.children[0];
            
            document.querySelector("#Docs").replaceChild(el2, el);
            el = el2;
            
            let scriptElement = el2.querySelector(".example-html script");
            if (scriptElement) {
                let script = document.createElement("script");
                script.innerHTML = scriptElement.innerHTML;
                document.body.appendChild(script)
                
                scriptElement.parentNode.removeChild(scriptElement);
            }
        }

        getNext(el.nextElementSibling)
    }

    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });

    document.querySelectorAll('.view-code').forEach((node) => {
        node.addEventListener("click", function () {
            let codeBoxElement = this.nextElementSibling;
            let codeChildrenHeight = codeBoxElement.children[0].offsetHeight;

            codeBoxElement.style.height = (codeBoxElement.offsetHeight != codeChildrenHeight ? codeChildrenHeight : 0) + "px"
        })
    });
</script>
</body>
</html>`
}

fs.readdir(path.resolve(__dirname, "./"), function (err, res) {
    if (res) {
        res.forEach(dir => {
            if (dir === "index.js") return;

            fs.readdir(path.resolve(__dirname, dir), function (err, res) {
                res.forEach(file => {
                    let res = fs.readFileSync(path.resolve(__dirname, dir, file), 'utf8')

                    let url = path.resolve(__dirname, dir, file.replace(/md/, 'html'));

                    try {
                        fs.unlink(url)
                    }catch (e) {

                    }

                    setTimeout(() => fs.writeFileSync(url, createTemplate(marked(res))), 1000)
                })
            })
        })
    }
})