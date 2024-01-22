(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{641:function(t,e,c){"use strict";c.r(e);var a=c(0),l=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1，前言")]),t._v(" "),e("p",[t._v("http-server 可以简单理解成一个透明代理。能够让我们方便的在本地对项目以及资源进行调试校验，而不必再起一个 Nginx 来进行代理。")]),t._v(" "),e("ul",[e("li",[t._v("地址："),e("a",{attrs:{href:"https://github.com/http-party/http-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/http-party/http-server"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_2-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[t._v("#")]),t._v(" 2，安装")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 使用 npm\nnpm install --global http-server\n\n# Mac可以使用brew\nbrew install http-server\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/12/72a0c2d9a56656a0.jpg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_3-用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-用法"}},[t._v("#")]),t._v(" 3，用法")]),t._v(" "),e("p",[t._v("直接在任意目录下运行 "),e("code",[t._v("http-server")]),t._v(" 就会启动一个本地监听，默认端口为 8080，静态代理，可以直接获取对应资源。如果 8080 端口被占用，会自动向后寻找未被占用的端口进行监听。")]),t._v(" "),e("p",[t._v("可用参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-p")]),t._v(" 或者 "),e("code",[t._v("--port")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("要使用的端口。用于 "),e("code",[t._v("-p 0")]),t._v(" 寻找开放端口，从 8080 开始。它也将从 "),e("code",[t._v("process.env.PORT")]),t._v(".")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8080")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-a")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.0.0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-d")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示目录列表")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-i")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示自动索引")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-g")]),t._v(" 或者 "),e("code",[t._v("--gzip")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启用后，它将 "),e("code",[t._v("./public/some-file.js.gz")]),t._v(" 代替 "),e("code",[t._v("./public/some-file.js")]),t._v(" 文件的 gzip 版本存在并且请求接受 gzip 编码。如果还启用了 brotli，它将首先尝试为 brotli 提供服务。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-b")]),t._v(" 或者 "),e("code",[t._v("--brotli")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启用后，它将 "),e("code",[t._v("./public/some-file.js.br")]),t._v(" 代替 "),e("code",[t._v("./public/some-file.js")]),t._v(" 文件的 brotli 压缩版本存在并且请求接受 "),e("code",[t._v("br")]),t._v(" 编码。如果还启用了 gzip，它将首先尝试为 brotli 提供服务。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-e")]),t._v(" 或者 "),e("code",[t._v("--ext")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("如果没有提供默认文件扩展名")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("html")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-s")]),t._v(" 或者 "),e("code",[t._v("--silent")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从输出中抑制日志消息")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--cors")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("Access-Control-Allow-Origin")]),t._v(" 通过 header 启用 CORS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-o [path]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动服务器后打开浏览器窗口。（可选）提供要打开的 URL 路径。例如：-o /other/dir/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-c")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("为 cache-control max-age 标头设置缓存时间（以秒为单位），例如 "),e("code",[t._v("-c10")]),t._v(" 10 秒。要禁用缓存，请使用 "),e("code",[t._v("-c-1")]),t._v(".")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("3600")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-U")]),t._v(" 或者 "),e("code",[t._v("--utc")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在日志消息中使用 UTC 时间格式。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--log-ip")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启用客户端 IP 地址的日志记录")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-P")]),t._v(" 或者 "),e("code",[t._v("--proxy")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代理所有无法在本地解析到给定 url 的请求。例如：-P "),e("a",{attrs:{href:"http://someurl.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://someurl.com"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--proxy-options")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("使用嵌套的点状对象传递代理"),e("a",{attrs:{href:"https://github.com/http-party/node-http-proxy#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("选项。"),e("OutboundLink")],1),t._v("例如：--proxy-options.secure false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--username")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启用认证指定用户名")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--password")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启用认证指定用户密码")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-S")]),t._v(", "),e("code",[t._v("--tls")]),t._v(" 或者 "),e("code",[t._v("--ssl")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("使用 TLS/SSL (HTTPS) 启用安全请求服务")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-C")]),t._v(" 或者 "),e("code",[t._v("--cert")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ssl 证书文件的路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cert.pem")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-K")]),t._v(" 或者 "),e("code",[t._v("--key")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ssl 密钥文件的路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("key.pem")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-r")]),t._v(" 或者 "),e("code",[t._v("--robots")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自动提供一个/robots.txt（内容默认为 "),e("code",[t._v("User-agent: *\\nDisallow: /")]),t._v("）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--no-dotfiles")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不显示点文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--mimetypes")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用于自定义 mimetype 定义的 .types 文件的路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-h")]),t._v(" 或者 "),e("code",[t._v("--help")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("帮助命令")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-v")]),t._v(" 或者 "),e("code",[t._v("--version")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("查看版本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])])])}),[],!1,null,null,null);e.default=l.exports}}]);