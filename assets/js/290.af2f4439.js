(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{635:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("作为开发利器的 maven，为我们提供了十分丰富的命令，了解 maven 的命令行操作并熟练运用常见的 maven 命令还是十分必要的。无论多先进多炫的图形化界面，底层都得靠 maven 命令来驱动。知其然，知其所以然，方能百战不殆。")]),t._v(" "),s("h2",{attrs:{id:"_1-常用参数整理。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用参数整理。"}},[t._v("#")]),t._v(" 1，常用参数整理。")]),t._v(" "),s("p",[t._v("常用命令参数汇总整理：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令参数")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mvn -v")]),t._v(" "),s("td",[t._v("—version 显示版本信息")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -V")]),t._v(" "),s("td",[t._v("–show-version 显示版本信息后继续执行 Maven 其他目标;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -h")]),t._v(" "),s("td",[t._v("–help 显示帮助信息;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -e")]),t._v(" "),s("td",[t._v("–errors 控制 Maven 的日志级别, 产生执行错误相关消息;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -X")]),t._v(" "),s("td",[t._v("–debug 控制 Maven 的日志级别, 产生执行调试信息;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -q")]),t._v(" "),s("td",[t._v("–quiet 控制 Maven 的日志级别, 仅仅显示错误;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -Pxxx")]),t._v(" "),s("td",[t._v("激活 id 为 xxx 的 profile (如有多个，用逗号隔开);")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -Dxxx=yyy")]),t._v(" "),s("td",[t._v("指定 Java 全局属性;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -o")]),t._v(" "),s("td",[t._v("–offline 运行 offline 模式, 不联网更新依赖;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -N")]),t._v(" "),s("td",[t._v("—non-recursive 仅在当前"),s("a",{attrs:{href:"http://www.07net01.com/tags-%E9%A1%B9%E7%9B%AE-0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目"),s("OutboundLink")],1),t._v("模块执行命令, 不构建子模块;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -pl")]),t._v(" "),s("td",[t._v("–module_name 在指定模块上执行命令;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -ff")]),t._v(" "),s("td",[t._v("–fail-fast 遇到构建失败就直接退出;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -fn")]),t._v(" "),s("td",[t._v("–fail-never 无论项目结果如何, 构建从不失败;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -fae")]),t._v(" "),s("td",[t._v("–fail-at-end 仅影响构建结果, 允许不受影响的构建继续;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -C")]),t._v(" "),s("td",[t._v("–strict-checksums 如果校验码不匹配的话, 构建失败;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -c")]),t._v(" "),s("td",[t._v("–lax-checksums 如果校验码不匹配的话, 产生告警;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -U")]),t._v(" "),s("td",[t._v("强制更新 snapshot 类型的插件或依赖库 (否则 maven 一天只会更新一次 snapshot 依赖);")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -npu")]),t._v(" "),s("td",[t._v("–no-plugin-s 对任何相关的注册插件, 不进行最新检查 (使用该选项使 Maven 表现出稳定行为，该稳定行为基于本地仓库当前可用的所有插件版本);")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -cpu")]),t._v(" "),s("td",[t._v("–check-plugin-updates 对任何相关的注册插件, 强制进行最新检查 (即使项目 POM 里明确规定了 Maven 插件版本, 还是会强制更新);")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -up")]),t._v(" "),s("td",[t._v("–update-plugins [mvn -cpu] 的同义词;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -B")]),t._v(" "),s("td",[t._v("–batch-mode 在非交互（批处理）模式下运行 (该模式下, 当 Mven 需要输入时, 它不会停下来接受用户的输入, 而是使用合理的默认值);")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -f")]),t._v(" "),s("td",[t._v("–file "),s("code",[t._v("<file>")]),t._v(" 强制使用备用的 POM 文件;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -s")]),t._v(" "),s("td",[t._v("–settings "),s("code",[t._v("<arg>")]),t._v(" 用户配置文件的备用路径;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -gs")]),t._v(" "),s("td",[t._v("–global-settings "),s("code",[t._v("<file>")]),t._v(" 全局配置文件的备用路径;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -emp")]),t._v(" "),s("td",[t._v("–encrypt-master-password "),s("code",[t._v("<password>")]),t._v(" 加密主安全密码, 存储到 Maven settings 文件里;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -ep")]),t._v(" "),s("td",[t._v("–encrypt-password "),s("code",[t._v("<password>")]),t._v(" 加密服务器密码, 存储到 Maven settings 文件里;")])]),t._v(" "),s("tr",[s("td",[t._v("mvn -npr")]),t._v(" "),s("td",[t._v("–no-plugin-registry 对插件版本不使用~/.m2/plugin-registry.xml(插件注册表) 里的配置;")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-其他参数介绍。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他参数介绍。"}},[t._v("#")]),t._v(" 2，其他参数介绍。")]),t._v(" "),s("h3",{attrs:{id:"_1-d-传入属性参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-d-传入属性参数"}},[t._v("#")]),t._v(" 1. -D 传入属性参数")]),t._v(" "),s("p",[t._v("比如命令：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mvn package -Dmaven.test.skip=true\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("以 “"),s("code",[t._v("-D”")]),t._v("开头，意思是将"),s("code",[t._v("“maven.test.skip”")]),t._v("的值设为"),s("code",[t._v("“true”")]),t._v(", 就是告诉 maven 打包的时候跳过单元测试。同理，“"),s("code",[t._v("mvn deploy -Dmaven.test.skip=true")]),t._v("” 代表部署项目并跳过单元测试。")]),t._v(" "),s("h3",{attrs:{id:"_2-p-使用指定的-profile-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-p-使用指定的-profile-配置"}},[t._v("#")]),t._v(" 2. -P 使用指定的 Profile 配置")]),t._v(" "),s("p",[t._v("比如项目开发需要有多个环境，一般为开发，测试，预发，正式 4 个环境，在 pom.xml 中的配置如下：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("qa"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("qa"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("prod"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("prod"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n......\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("config/${env}.properties"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("directory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("src/main/resources"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("directory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filtering")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filtering")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n      ......\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br")])]),s("p",[t._v("profiles 定义了各个环境的变量 id，filters 中定义了变量配置文件的地址，其中地址中的环境变量就是上面 profile 中定义的值，resources 中是定义哪些目录下的文件会被配置文件中定义的变量替换。")]),t._v(" "),s("p",[t._v("通过 maven 可以实现按不同环境进行打包部署，命令为:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mvn package -P dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中 “"),s("code",[t._v("dev")]),t._v("“为环境的变量"),s("code",[t._v("id")]),t._v(", 代表使用 Id 为 “dev” 的 profile。")]),t._v(" "),s("h2",{attrs:{id:"_3-maven-的使用。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-maven-的使用。"}},[t._v("#")]),t._v(" 3，maven 的使用。")]),t._v(" "),s("p",[t._v("我们已经知道 maven 预定义了许多的阶段（phase），每个插件都依附于这些阶段，并且在进入某个阶段的时候，调用运行这些相关插件的功能。我们先来看完整的 maven 生命周期：")]),t._v(" "),s("p",[t._v("生命周期：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("生命周期")]),t._v(" "),s("th",[t._v("阶段描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("validate")]),t._v(" "),s("td",[t._v("验证项目是否正确，以及所有为了完整构建必要的信息是否可用")])]),t._v(" "),s("tr",[s("td",[t._v("generate-sources")]),t._v(" "),s("td",[t._v("验证项目是否正确，以及所有为了完整构建必要的信息是否可用")])]),t._v(" "),s("tr",[s("td",[t._v("process-sources")]),t._v(" "),s("td",[t._v("处理源代码，比如过滤一些值")])]),t._v(" "),s("tr",[s("td",[t._v("generate-resources")]),t._v(" "),s("td",[t._v("生成所有需要包含在打包过程中的资源文件")])]),t._v(" "),s("tr",[s("td",[t._v("process-resources")]),t._v(" "),s("td",[t._v("复制并处理资源文件至目标目录，准备打包")])]),t._v(" "),s("tr",[s("td",[t._v("compile")]),t._v(" "),s("td",[t._v("编译项目的源代码")])]),t._v(" "),s("tr",[s("td",[t._v("process-classes")]),t._v(" "),s("td",[t._v("后处理编译生成的文件，例如对 Java 类进行字节码增强（bytecode enhancement）")])]),t._v(" "),s("tr",[s("td",[t._v("process-classes")]),t._v(" "),s("td",[t._v("生成所有包含在测试编译过程中的测试源码")])]),t._v(" "),s("tr",[s("td",[t._v("process-test-sources")]),t._v(" "),s("td",[t._v("处理测试源码，比如过滤一些值")])]),t._v(" "),s("tr",[s("td",[t._v("process-test-sources")]),t._v(" "),s("td",[t._v("生成测试需要的资源文件")])]),t._v(" "),s("tr",[s("td",[t._v("process-test-resources")]),t._v(" "),s("td",[t._v("复制并处理测试资源文件至测试目标目录")])]),t._v(" "),s("tr",[s("td",[t._v("process-test-resources")]),t._v(" "),s("td",[t._v("编译测试源码至测试目标目录")])]),t._v(" "),s("tr",[s("td",[t._v("test")]),t._v(" "),s("td",[t._v("使用合适的单元测试框架运行测试。这些测试应该不需要代码被打包或发布")])]),t._v(" "),s("tr",[s("td",[t._v("prepare-package")]),t._v(" "),s("td",[t._v("在真正的打包之前，执行一些准备打包必要的操作。这通常会产生一个包的展开的处理过的版本（将会在 Maven 2.1 + 中实现）")])]),t._v(" "),s("tr",[s("td",[t._v("package")]),t._v(" "),s("td",[t._v("将编译好的代码打包成可分发的格式，如 JAR，WAR，或者 EAR")])]),t._v(" "),s("tr",[s("td",[t._v("pre-integration-test")]),t._v(" "),s("td",[t._v("执行一些在集成测试运行之前需要的动作。如建立集成测试需要的环境")])]),t._v(" "),s("tr",[s("td",[t._v("integration-test")]),t._v(" "),s("td",[t._v("如果有必要的话，处理包并发布至集成测试可以运行的环境")])]),t._v(" "),s("tr",[s("td",[t._v("integration-test")]),t._v(" "),s("td",[t._v("执行一些在集成测试运行之后需要的动作。如清理集成测试环境")])]),t._v(" "),s("tr",[s("td",[t._v("verify")]),t._v(" "),s("td",[t._v("执行所有检查，验证包是有效的，符合质量规范")])]),t._v(" "),s("tr",[s("td",[t._v("install")]),t._v(" "),s("td",[t._v("执行所有检查，验证包是有效的，符合质量规范")])]),t._v(" "),s("tr",[s("td",[t._v("deploy")]),t._v(" "),s("td",[t._v("复制最终的包至远程仓库，共享给其它开发人员和项目（通常和一次正式的发布相关）")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-maven-的核心插件介绍。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-maven-的核心插件介绍。"}},[t._v("#")]),t._v(" 4，maven 的核心插件介绍。")]),t._v(" "),s("p",[t._v("maven 核心的插件列表可以参考 http://maven.apache.org/plugins/index.html 。这里仅列举几个常用的插件及其配置参数：")]),t._v(" "),s("p",[s("code",[t._v("clean插件")])]),t._v(" "),s("blockquote",[s("p",[t._v("只包含一个 goal 叫做 clean:clean ，负责清理构建时候创建的文件。默认清理的位置是如下几个变量指定的路径：project.build.directory, project.build.outputDirectory,project.build.testOutputDirectory, and project.reporting.outputDirectory 。")])]),t._v(" "),s("p",[s("code",[t._v("compiler 插件")])]),t._v(" "),s("blockquote",[s("p",[t._v("包含 2 个 goal，分别是 compiler:compile 和 compiler:testCompile 。可以到这里查看两者的具体参数设置：compile , testCompile 。")])]),t._v(" "),s("p",[s("code",[t._v("surefire插件")])]),t._v(" "),s("blockquote",[s("p",[t._v("运行单元测试用例的插件，并且能够生成报表。包含一个 goal 为 surefire:test 。主要参数 testSourceDirectory 用来指定测试用例目录，参考完整用法帮助")])]),t._v(" "),s("p",[s("code",[t._v("jar")])]),t._v(" "),s("blockquote",[s("p",[t._v("负责将工程输出打包到 jar 文件中。包含两个 goal，分别是 jar:jar, jar:test-jar 。两个 goal 负责从 classesDirectory 或 testClassesDirectory 中获取所有资源，然后输出 jar 文件到 outputDirectory 中。")])]),t._v(" "),s("p",[s("code",[t._v("war")])]),t._v(" "),s("blockquote",[s("p",[t._v("负责打包成 war 文件。常用 goal 有 war:war ，负责从 warSourceDirectory（默认 ${basedir}/src/main/webapp）打包所有资源到 outputDirectory 中。")])]),t._v(" "),s("p",[s("code",[t._v("resources")])]),t._v(" "),s("blockquote",[s("p",[t._v("负责复制各种资源文件，常用 goal 有 resources:resources ，负责将资源文件复制到 outputDirectory 中，默认为 ${project.build.outputDirectory}。")])]),t._v(" "),s("p",[s("code",[t._v("install")])]),t._v(" "),s("blockquote",[s("p",[t._v("负责将项目输出 (install:install) 或者某个指定的文件 (install:install-file) 加入到本机库 %USERPROFILE%/.m2/repository 中。可以用 install:help 寻求帮助。")])]),t._v(" "),s("p",[s("code",[t._v("deploy")])]),t._v(" "),s("blockquote",[s("p",[t._v("负责将项目输出 (deploy:deploy) 或者某个指定的文件 (deploy:deploy-file) 加入到公司库中。")])]),t._v(" "),s("p",[s("code",[t._v("site")])]),t._v(" "),s("blockquote",[s("p",[t._v("将工程所有文档生成网站，生成的网站界面默认和 apache 的项目站点类似，但是其文档用 doxia 格式写的，目前不支持 docbook，需要用其他插件配合才能支持。需要指出的是，在 maven 2.x 系列中和 maven3.x 的 site 命令处理是不同的，在旧版本中，用 mvn site 命令可以生成 reporting 节点中的所有报表，但是在 maven3 中，reporting 过时了，要把这些内容作为 maven-site-plugin 的 configuration 的内容才行。详细内容可以参考 http://www.wakaleo.com/blog/292-site-generation-in-maven-3")])]),t._v(" "),s("p",[t._v("参考如下地址并整理：")]),t._v(" "),s("p",[t._v("https://blog.csdn.net/makyan/article/details/51723294\nhttps://blog.csdn.net/u012152619/article/details/51473410#\nhttp://www.cnblogs.com/951106Nancy/p/9355448.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);