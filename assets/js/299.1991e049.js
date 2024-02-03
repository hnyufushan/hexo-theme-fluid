(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{643:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("当我们运行前端项目的时候，常常在解决依赖的时候会加上一个参数"),t("code",[s._v("npm install --registry=https://registry.npm.taobao.org")]),s._v("将源指定为淘宝的源，以期让速度加快起来，事实上这种的确能够让速度变快，但是长久来看，如果想真正的快速敏捷开发部署，搭建企业内部的私服，则会让速度更上一个台阶。")]),s._v(" "),t("p",[s._v("搭建 npm 私服，我们依旧使用 nexus3。")]),s._v(" "),t("p",[s._v("与其他私服一样的，npm 私服同样有三种类型：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("hosted")]),s._v(" : 本地存储，即同 docker 官方仓库一样提供本地私服功能")]),s._v(" "),t("li",[t("code",[s._v("proxy")]),s._v(" : 提供代理其他仓库的类型，如 docker 中央仓库")]),s._v(" "),t("li",[t("code",[s._v("group")]),s._v(" : 组类型，实质作用是组合多个仓库为一个地址")])]),s._v(" "),t("p",[s._v("那么就来一个一个创建。")]),s._v(" "),t("h2",{attrs:{id:"_1-创建-blob-存储。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-blob-存储。"}},[s._v("#")]),s._v(" 1，创建 blob 存储。")]),s._v(" "),t("p",[s._v("为其创建一个单独的存储空间。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1bfcd86269c5c714.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_2-创建-hosted-类型的-npm。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-hosted-类型的-npm。"}},[s._v("#")]),s._v(" 2，创建 hosted 类型的 npm。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Name")]),s._v(": 定义一个名称 local-npm")]),s._v(" "),t("li",[t("code",[s._v("Storage")]),s._v("：Blob store，我们下拉选择前面创建好的专用 blob：npm-hub。")]),s._v(" "),t("li",[t("code",[s._v("Hosted")]),s._v("：开发环境，我们运行重复发布，因此 Delpoyment policy 我们选择 Allow redeploy。这个很重要！")])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a84f7376e5ce267d.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_3-创建一个-proxy-类型的-npm-仓库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个-proxy-类型的-npm-仓库。"}},[s._v("#")]),s._v(" 3，创建一个 proxy 类型的 npm 仓库。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Name")]),s._v(": proxy-npm")]),s._v(" "),t("li",[t("code",[s._v("Proxy")]),s._v("：Remote Storage: 远程仓库地址，这里填写: "),t("a",{attrs:{href:"https://registry.npmjs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://registry.npmjs.org"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("code",[s._v("Storage")]),s._v(": npm-hub。")])]),s._v(" "),t("p",[s._v("其他的均是默认。")]),s._v(" "),t("p",[s._v("整体配置截图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ef27d8f4f6e5161f.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_4-创建一个-group-类型的-npm-仓库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建一个-group-类型的-npm-仓库。"}},[s._v("#")]),s._v(" 4，创建一个 group 类型的 npm 仓库。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Name")]),s._v("：group-npm")]),s._v(" "),t("li",[t("code",[s._v("Storage")]),s._v("：选择专用的 blob 存储 npm-hub。")]),s._v(" "),t("li",[t("code",[s._v("group")]),s._v(" : 将左边可选的 2 个仓库，添加到右边的 members 下。")])]),s._v(" "),t("p",[s._v("整体配置截图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9cca019b9c80d33c.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这些配置完成之后，就可以使用了。")]),s._v(" "),t("h2",{attrs:{id:"_5-验证使用。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证使用。"}},[s._v("#")]),s._v(" 5，验证使用。")]),s._v(" "),t("p",[s._v("新建一台环境干净的主机，安装好 node 环境。")]),s._v(" "),t("p",[s._v("首先通过"),t("code",[s._v("curl 192.168.106.10/a | sh")]),s._v("安装好 node 环境。")]),s._v(" "),t("p",[s._v("如果看不懂这是什么鬼，可以点击这篇文章了解："),t("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/1395.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("构建运维外挂。"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("此脚本我已经开源在 GitHub 之中，感兴趣的同学可以点击下边跳转参观。")]),s._v(" "),t("div",{staticClass:"cardListContainer"},[t("div",{staticClass:"card-list"},[t("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#0074ff","--randomColor":"#0074ff",color:"#fff"},attrs:{href:"https://github.com/eryajf/magic-of-sysuse-scripts",target:"_blank"}},[t("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),s._v(" "),t("div",[t("p",{staticClass:"name"},[s._v("magic-of-sysuse-scripts")]),s._v(" "),t("p",{staticClass:"desc"},[s._v("运维外挂小工具")])])])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" magic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("of"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sysuse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("scripts\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 运维外挂小工具\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("avatar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//avatars2.githubusercontent.com/u/416130"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("s=460"),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com/eryajf/magic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("of"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sysuse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("scripts "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0074ff"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("textColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#fff"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--textColor)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),t("p",[s._v("然后拷贝一份前端项目的源码。")]),s._v(" "),t("h3",{attrs:{id:"_1-首先获取默认的仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先获取默认的仓库地址"}},[s._v("#")]),s._v(" 1，首先获取默认的仓库地址：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@moban business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" config get registryhttps://registry.npmjs.org/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-配置为私服地址。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置为私服地址。"}},[s._v("#")]),s._v(" 2，配置为私服地址。")]),s._v(" "),t("p",[s._v("从如下截图中查看(其实就是创建的组对外的地址)。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/94a1469b6b9cd5e4.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("通过如下命令配置：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@moban business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://192.168.112.214:8081/repository/group-npm/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@moban business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" config get registry\nhttp://192.168.112.214:8081/repository/group-npm/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在开始安装，安装之前先看一下组里的内容：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ac0e384fc52e1e12.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("可以看到还是空的。")]),s._v(" "),t("h3",{attrs:{id:"_3-安装编译。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装编译。"}},[s._v("#")]),s._v(" 3，安装编译。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在编译的过程中，我们已经可以看看组里的变化了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2a284ea50c702692.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("安装完成，整个过程如下，可以看到一共花费了"),t("code",[s._v("82秒")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@moban business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" uglifyjs-webpack-plugin@0.4.6 postinstall /root/business_jsdweb/node_modules/webpack/node_modules/uglifyjs-webpack-plugin\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" lib/post_install.js\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_modules/fsevents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" fsevents@1.2.4: wanted "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"darwin"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"any"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x64"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nadded "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1216")]),s._v(" packages from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("717")]),s._v(" contributors "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),s._v(".171s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"_4-再一次安装编译。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-再一次安装编译。"}},[s._v("#")]),s._v(" 4，再一次安装编译。")]),s._v(" "),t("p",[s._v("这里再准备一台环境干净的主机，然后进行一次编译安装，看看效果。")]),s._v(" "),t("p",[s._v("编译之前，先将远程地址配置为我们自己的：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7-3 business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" config get registry\nhttps://registry.npmjs.org/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7-3 business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://192.168.112.214:8081/repository/group-npm/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7-3 business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" config get registry\nhttp://192.168.112.214:8081/repository/group-npm/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后编译，看效果：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7-3 business_jsdweb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" uglifyjs-webpack-plugin@0.4.6 postinstall /root/business_jsdweb/node_modules/webpack/node_modules/uglifyjs-webpack-plugin\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" lib/post_install.js\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_modules/fsevents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" fsevents@1.2.4: wanted "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"darwin"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"any"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x64"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nadded "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1216")]),s._v(" packages from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("717")]),s._v(" contributors "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(".693s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("可以看到，同样是全新的环境下，因为第一次已经将依赖从远程缓存到本地私服，那么在第二次安装编译的时候，用时"),t("code",[s._v("31秒")]),s._v("。")]),s._v(" "),t("p",[s._v("私服的重要性，以及便捷性，高下立见！")])])}),[],!1,null,null,null);t.default=e.exports}}]);