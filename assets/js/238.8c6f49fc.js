(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{583:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("最近 ChatGPT 大火，随之一起火起来的，有一大批基于 ChatGPT 编写的工具，我的项目 "),e("a",{attrs:{href:"https://github.com/eryajf/chatgpt-dingtalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("chatgpt-dingtalk"),e("OutboundLink")],1),t._v(" 也是这批项目中的一个，旨在提供在钉钉群聊中与 ChatGPT 交互的能力。")]),t._v(" "),e("p",[t._v("这是一个工具类的项目，已经提供了 docker 一键部署的能力。但是也有人只想通过二进制直接部署的方式进行体验，多平台兼容的二进制构建，早已有成熟的 Actions 支持，本文就来介绍一个实现方案。")]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("所用 Actions："),e("a",{attrs:{href:"https://github.com/wangyoucao577/go-release-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-release-action"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了。")]),t._v(" "),e("p",[t._v("我们在 workflows 目录下添加如下内容：")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("$ cat go"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("binary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("release.yml\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("go"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("binary\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("release")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("types")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("created"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示在创建新的 Release 时触发")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-go-binary")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matrix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("goos")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("linux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" darwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要打包的系统")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("goarch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("amd64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arm64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要打包的架构")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 排除某些平台和架构")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("goarch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arm64\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("goos")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" windows\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v3\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wangyoucao577/go"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@v1.30\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个默认的变量，用来实现往 Release 中添加文件")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("goos")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matrix.goos "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("goarch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matrix.goarch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("goversion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.18")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以指定编译使用的 Golang 版本")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("binary_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chatgpt-dingtalk"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以指定二进制文件的名称")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("extra_files")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" README.md config.dev.json "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要包含的额外文件")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br")])]),e("p",[t._v("配置好之后，我们可以来到 release 页面，点击 "),e("code",[t._v("Darft a new release")]),t._v(" 创建完一个 release 之后，这个 Actions 就会自动运行，将不同环境不同架构下的二进制打好了。")]),t._v(" "),e("p",[t._v("效果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/12/1d8e1511fa8befa5.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),e("p",[t._v("如上 yaml 文件中用到的参数基本上都已经有了注释，这里再对官方目前提供的所有参数做个注释说明：")]),t._v(" "),e("div",{pre:!0},[e("table",[e("thead",[e("tr",[e("th",{pre:!0,attrs:{style:"text-align:center"}},[t._v("参数名")]),t._v(" "),e("th",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("必填")])]),t._v(" "),e("th",{pre:!0,attrs:{style:"text-align:center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("github_token")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("是")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("你的 "),e("code",[t._v("GITHUB_TOKEN")]),t._v(" 用于将版本上传到 Github Release。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("goos")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("是")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("code",[t._v("GOOS")]),t._v(" 是运行程序的操作系统：darwin、windows、linux 等。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("goarch")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("是")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("code",[t._v("GOARCH")]),t._v(" 是运行程序的架构：386、amd64、arm、arm64、s390x、loong64 等。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("goamd64")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("code",[t._v("GOAMD64")]),t._v(" 是正在运行的程序 amd64 微架构级别，从 1.18 开始可用。它只能在 GOARCH 是 amd64 时使用：v1、v2、v3、v4 之一。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("goversion")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("Go 编译环境版本。 "),e("code",[t._v("latest")]),t._v(" ("),e("a",{pre:!0,attrs:{href:"https://go.dev/VERSION?m=text",target:"_blank",rel:"noopener noreferrer"}},[t._v("check it here"),e("OutboundLink",{pre:!0})],1),t._v(") 是默认的, 可自定义选项有： "),e("code",[t._v("1.13")]),t._v(", "),e("code",[t._v("1.14")]),t._v(", "),e("code",[t._v("1.15")]),t._v(", "),e("code",[t._v("1.16")]),t._v(", "),e("code",[t._v("1.17")]),t._v(", "),e("code",[t._v("1.18")]),t._v(", "),e("code",[t._v("1.19")]),t._v(".")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("project_path")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("在哪里运行 "),e("code",[t._v("go build")]),t._v(" 命令。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("binary_name")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("如果不想使用仓库名称作为二进制名字，请指定另一个二进制名称。如果未设置，请使用存储库的基本名称。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("pre_command")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("在构建之前将执行的额外命令。如果您不使用 Go 模块，您可能需要使用它来解决依赖性问题。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("build_command")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("构建二进制文件的实际命令，通常用 "),e("code",[t._v("go build")]),t._v(". 您可能希望使用其他命令包装器, e.g., "),e("a",{pre:!0,attrs:{href:"https://github.com/gobuffalo/packr/tree/master/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("packr2"),e("OutboundLink",{pre:!0})],1),t._v(", example "),e("code",[t._v("build_command: 'packr2 build'")]),t._v(". 记得用 "),e("code",[t._v("pre_command")]),t._v(" 设置 "),e("code",[t._v("packr2")]),t._v(" 命令. 它还支持 "),e("code",[t._v("make")]),t._v(" ("),e("code",[t._v("Makefile")]),t._v(") 构建方案, example "),e("code",[t._v("build_command: make")]),t._v(". 在这种情况下两者都是 "),e("code",[t._v("build_flags")]),t._v(" and "),e("code",[t._v("ldflags")]),t._v(" 将被忽略，因为它们应该写在你的 "),e("code",[t._v("Makefile")]),t._v(" . 此外，请确保生成的二进制文件放在 Make 运行的路径中, i.e., "),e("code",[t._v("project_path")]),t._v(".")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("executable_compression")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("用一些第三方工具压缩可执行的二进制文件。它接受带有否参数的压缩命令作为输入，例如 UPX 或 UPX-V。目前只支持 UPX。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("build_flags")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("传递给 "),e("code",[t._v("go build")]),t._v(" 命令的其他参数。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("ldflags")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("要提供给 "),e("code",[t._v("-ldflags")]),t._v(" 标志参数的值。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("extra_files")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("指定将额外的文件打包的制品内。用空间分隔的多个文件。支持拷贝文件夹，因为内部执行的是 "),e("code",[t._v("cp -r")]),t._v(". E.g., "),e("code",[t._v("extra_files: LICENSE README.md")])])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("md5sum")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("与工件一起发布 "),e("code",[t._v(".md5")]),t._v("，默认为 TRUE。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("sha256sum")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("与工件一起发布 "),e("code",[t._v(".sha256")]),t._v(" ，默认为 FALSE。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("release_tag")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("将二进制文件发布到的目标版本标签。它致力于在每次推送时将二进制文件发布到一个指定的发布页面，因为在这种情况下没有目标。如果像大多数人一样，通过 "),e("code",[t._v("release：[created]")]),t._v(" 事件触发动作，不要设置它。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("release_name")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("替代 "),e("code",[t._v("release_tag")]),t._v(" 用于发布目标规范和二进制推送. 给定 "),e("code",[t._v("release_name")]),t._v(" 的最新版本将从所有版本中选择。对例如无标签 (草稿) 的有用。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("overwrite")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("如果资产已经存在，则覆盖它。默认为 FALSE。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("asset_name")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("如果不想使用默认格式，请自定义资产名称 "),e("code",[t._v("${BINARY_NAME}-${RELEASE_TAG}-${GOOS}-${GOARCH}")]),t._v(". 确保正确设置它，特别是对于必须附加的矩阵用法 "),e("code",[t._v("-${{ matrix.goos }}-${{ matrix.goarch }}")]),t._v(". 一个有效的例子可能是 "),e("code",[t._v("asset_name: binary-name-${{ matrix.goos }}-${{ matrix.goarch }}")]),t._v(".")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("retry")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("如果上传失败，重试多少次。默认为 3。")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("post_command")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("将为拆解工作执行的额外命令。例如，您可以使用它将工件上传到 AWS s3 或阿里云 OSS")])]),t._v(" "),e("tr",[e("td",{pre:!0,attrs:{style:"text-align:center"}},[t._v("compress_assets")]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("strong",[t._v("否")])]),t._v(" "),e("td",{pre:!0,attrs:{style:"text-align:center"}},[e("code",[t._v("auto")]),t._v(" 默认将产生一个 "),e("code",[t._v("zip")]),t._v(" 文件于 Windows 系统以及 "),e("code",[t._v("tar.gz")]),t._v(" 文件于其他. "),e("code",[t._v("zip")]),t._v(" 将强制使用 "),e("code",[t._v("zip")]),t._v(". "),e("code",[t._v("OFF")]),t._v(" 将禁用资产打包.")])])])])]),e("h2",{attrs:{id:"遗留问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遗留问题"}},[t._v("#")]),t._v(" 遗留问题")]),t._v(" "),e("p",[t._v("如果单个项目，同时配置了自动生成 release 和当前这个构建二进制的 Action，会发现发布 release 之后没有触发构建，这个问题目前还没有找到比较好的解决办法。")]),t._v(" "),e("p",[e("strong",[t._v("补充于2023-03-01")])]),t._v(" "),e("p",[t._v("关于这个遗留问题，实际上还是自己对action的应用不够熟悉导致的，没有触发的原因是配置当中的时机不对，通过 release drafter 生成release，其实create已经完成，真正的动作应该是publish才对，因此调整触发时机即可：")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("release")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("types")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("created"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("published"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示在创建新的 Release 时触发")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);