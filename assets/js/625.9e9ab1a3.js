(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{969:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在日常开发工作中，有一些配置文件之类的静态内容我们是剥离在项目之外存在的，而如果想要实现该项目打出来的二进制包能够不依赖本地静态配置，随处运行，针对这个问题，已经有不少前人思考过了，这篇文章就是要介绍一个工具：")]),s._v(" "),t("div",{staticClass:"cardListContainer"},[t("div",{staticClass:"card-list"},[t("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#ffa8a8","--randomColor":"#ffa8a8"},attrs:{href:"https://github.com/go-bindata/go-bindata",target:"_blank"}},[t("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),s._v(" "),t("div",[t("p",{staticClass:"name"},[s._v("go-bindata")]),s._v(" "),t("p",{staticClass:"desc"},[s._v("将静态文件编译到二进制")])])])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bindata\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 将静态文件编译到二进制\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("avatar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//avatars2.githubusercontent.com/u/416130"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("s=460"),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com/go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bindata/go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bindata\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#ffa8a8'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),t("h2",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1，安装")]),s._v(" "),t("p",[s._v("此工具使用时依赖命令行对文件进行处理，因此我们先安装此包：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" get "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bindata"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bindata"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果你的go版本已经来到了1.17，那么可能会遇到如下报错：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ go get "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" github.com/go-bindata/go-bindata/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ngo: downloading github.com/go-bindata/go-bindata v1.0.0\ngo get: installing executables with "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'go get'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" module mode is deprecated.\n\tUse "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'go install pkg@version'")]),s._v(" instead.\n\tFor "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information, see https://golang.org/doc/go-get-install-deprecation\n\tor run "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'go help get'")]),s._v(" or "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'go help install'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("此时可将命令更改如下("),t("a",{attrs:{href:"https://github.com/go-bindata/go-bindata/issues/77",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1),s._v(")：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" github.com/go-bindata/go-bindata/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".@latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装完成之后，会在本地GOPATH目录下多一个二进制文件，我们将其放到系统环境变量中，以备方便使用。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin/go-bindata\n/Users/liqilong/eryajf/letsgo/project/bin/go-bindata\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin/go-bindata /usr/local/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("执行如下命令验证安装成功：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ go-bindata "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v("\ngo-bindata "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(".3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Go runtime go1.14.4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nCopyright "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2010")]),s._v("-2013, Jim Teeuwen.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_2-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[s._v("#")]),s._v(" 2，使用")]),s._v(" "),t("p",[s._v("此时我们有一个配置文件如下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("$ cat .env\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eryajf\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PASS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eryajf.net\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("原来在本地读取的时候，结合"),t("code",[s._v("viper")]),s._v("包，我们的姿势如下：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/spf13/viper"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tviper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetConfigFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取yaml配置文件")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" viper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReadInConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ok "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("viper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConfigFileNotFoundError"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ok "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Config file not found; ignore error if desired")]),s._v("\n\t\t\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no such config file"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Config file was found but another error was produced")]),s._v("\n\t\t\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read config error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取配置文件失败致命错误")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户为:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" viper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"USER"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"密码为:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" viper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PASS"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("运行可得结果如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ go run main.go\n用户为: eryajf\n密码为: eryajf.net\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在我们把配置文件通过go-bindata准换成一个go文件，操作如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ go-bindata "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./public/config.go "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pkg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public .env\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("-o")]),s._v("：指定打包后生成的go文件路径")]),s._v(" "),t("li",[t("code",[s._v("-pkg")]),s._v("：指定打包后生成的go文件的包名")]),s._v(" "),t("li",[t("code",[s._v(".env")]),s._v("：指定将要打包的文件，也可以是一个目录")])]),s._v(" "),t("p",[s._v("打包命令执行后，可以看到生成了一个public目录，而且多了一个config.go文件。")]),s._v(" "),t("p",[s._v("此时主main包改造如下：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"notify-demo/public"')]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/spf13/viper"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfileobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" public"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Asset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asset file err:%v\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tviper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetConfigType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yaml"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\terr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" viper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReadConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewBuffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fileobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Read Config err:%v\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户为:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" viper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"USER"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"密码为:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" viper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PASS"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("运行可得结果：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ go run main.go\n用户为: eryajf\n密码为: eryajf.net\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这样即便我们把本地的.env删除，也不会影响项目运行了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);