(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{644:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-nexus-介绍。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-nexus-介绍。"}},[s._v("#")]),s._v(" 1，Nexus 介绍。")]),s._v(" "),a("h3",{attrs:{id:"nexus-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexus-是什么"}},[s._v("#")]),s._v(" Nexus 是什么？")]),s._v(" "),a("p",[s._v("Nexus 是一个强大的 maven 仓库管理器，它极大地简化了本地内部仓库的维护和外部仓库的访问。")]),s._v(" "),a("p",[s._v("不仅如此，他还可以用来创建 yum、pypi、npm、docker、nuget、rubygems 等各种私有仓库。")]),s._v(" "),a("p",[s._v("所支持的类型，可从下图管窥：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b73cb089b60ab885.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("如果使用了公共的 Maven 仓库服务器，可以从 Maven 中央仓库下载所需要的构件（Artifact），但这通常不是一个好的做法。\n正常做法是在本地架设一个 Maven 仓库服务器，即利用 Nexus 私服可以只在一个地方就能够完全控制访问和部署在你所维护仓库中的每个 Artifact。\nNexus 在代理远程仓库的同时维护本地仓库，以降低中央仓库的负荷, 节省外网带宽和时间，Nexus 私服就可以满足这样的需要。\nNexus 是一套 “开箱即用” 的系统不需要数据库，它使用文件系统加 Lucene 来组织数据。\nNexus 使用 ExtJS 来开发界面，利用 Restlet 来提供完整的 REST APIs，通过 m2eclipse 与 Eclipse 集成使用。\nNexus 支持 WebDAV 与 LDAP 安全身份认证。\nNexus 还提供了强大的仓库管理功能，构件搜索功能，它基于 REST，友好的 UI 是一个 extjs 的 REST 客户端，它占用较少的内存，基于简单文件系统而非数据库。")]),s._v(" "),a("h3",{attrs:{id:"为什么要构建-nexus-私服"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要构建-nexus-私服"}},[s._v("#")]),s._v(" 为什么要构建 Nexus 私服？")]),s._v(" "),a("p",[s._v("如果没有 Nexus 私服，我们所需的所有构件都需要通过 maven 的中央仓库和第三方的 Maven 仓库下载到本地，而一个团队中的所有人都重复的从 maven 仓库下载构件无疑加大了仓库的负载和浪费了外网带宽，如果网速慢的话，还会影响项目的进程。很多情况下项目的开发都是在内网进行的，连接不到 maven 仓库怎么办呢？开发的公共构件怎么让其它项目使用？这个时候我们不得不为自己的团队搭建属于自己的 maven 私服，这样既节省了网络带宽也会加速项目搭建的进程，当然前提条件就是你的私服中拥有项目所需的所有构件。")]),s._v(" "),a("p",[s._v("总之，在本地构建 nexus 私服的好处有：")]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("加速构建")]),s._v(" "),a("li",[s._v("节省带宽")]),s._v(" "),a("li",[s._v("节省中央 maven 仓库的带宽")]),s._v(" "),a("li",[s._v("稳定（应付一旦中央服务器出问题的情况）")]),s._v(" "),a("li",[s._v("控制和审计")]),s._v(" "),a("li",[s._v("能够部署第三方构件")]),s._v(" "),a("li",[s._v("可以建立本地内部仓库")]),s._v(" "),a("li",[s._v("可以建立公共仓库")])])]),s._v(" "),a("p",[s._v("这些优点使得 Nexus 日趋成为最流行的 Maven 仓库管理器。")]),s._v(" "),a("h2",{attrs:{id:"_2-版本选择及下载。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-版本选择及下载。"}},[s._v("#")]),s._v(" 2，版本选择及下载。")]),s._v(" "),a("h3",{attrs:{id:"关于版本选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于版本选择"}},[s._v("#")]),s._v(" 关于版本选择")]),s._v(" "),a("p",[s._v("以前公司使用的版本一直是用的一个 2.x 的版本，旧的版本各种陈旧，在这种陈旧的情况下，许多地方已经破破烂烂了，比如最重要的功能之一，自动同步远程仓库的依赖，就已经无法使用，看到版本已经更新到 3.x，因此就想着搭一个高版本的来体验一下。")]),s._v(" "),a("p",[s._v("这么一体验，发现这个东东，真真的是一个特别好的利器，神器。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/11d4a8c868c78c35.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"关于下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于下载"}},[s._v("#")]),s._v(" 关于下载")]),s._v(" "),a("p",[s._v("官网地址：https://www.sonatype.com/")]),s._v(" "),a("ul",[a("li",[s._v("可以直接通过下边链接下载"),a("code",[s._v("最新版本")]),s._v("：https://www.sonatype.com/oss-thank-you-tar.gz")]),s._v(" "),a("li",[s._v("可以通过后边的这个链接选择"),a("code",[s._v("历史版本")]),s._v("："),a("a",{attrs:{href:"https://help.sonatype.com/repomanager3/download/download-archives---repository-manager-3",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://help.sonatype.com/repomanager3/download/download-archives—repository-manager-3"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("可能一般网络下在浏览器里边下载比较慢，那么可以复制链接用迅雷下载，就会好一些。")]),s._v(" "),a("p",[s._v("接下来开始整个安装的流程介绍，我们先来介绍普通方式的安装。")]),s._v(" "),a("h2",{attrs:{id:"_3-安装-jdk-1-8。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-jdk-1-8。"}},[s._v("#")]),s._v(" 3，安装 jdk-1.8。")]),s._v(" "),a("p",[s._v("nexus 的安装依赖 jdk 环境。最好安装 1.8 版本的，否则可能会遇到其他不可知问题。此安装不再赘述。")]),s._v(" "),a("p",[s._v("我都是通过这种方式安装的"),a("code",[s._v("curl 192.168.106.10/a | sh")]),s._v("，如果看不懂这是什么鬼，可以点击这篇文章了解："),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/1395.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("构建运维外挂。"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("此脚本我已经开源在 GitHub 之中，感兴趣的同学可以点击下边跳转参观。")]),s._v(" "),a("div",{staticClass:"cardListContainer"},[a("div",{staticClass:"card-list"},[a("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#0074ff","--randomColor":"#0074ff",color:"#fff"},attrs:{href:"https://github.com/eryajf/magic-of-sysuse-scripts",target:"_blank"}},[a("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),s._v(" "),a("div",[a("p",{staticClass:"name"},[s._v("magic-of-sysuse-scripts")]),s._v(" "),a("p",{staticClass:"desc"},[s._v("运维外挂小工具")])])])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" magic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("of"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sysuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("scripts\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 运维外挂小工具\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//avatars2.githubusercontent.com/u/416130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("s=460"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com/eryajf/magic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("of"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sysuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("scripts "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0074ff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("textColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#fff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--textColor)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),a("h2",{attrs:{id:"_4-部署-nexus。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署-nexus。"}},[s._v("#")]),s._v(" 4，部署 nexus。")]),s._v(" "),a("h3",{attrs:{id:"_1-解压。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解压。"}},[s._v("#")]),s._v(" 1，解压。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tar")]),s._v(" xf nexus-3.12.1-01-unix.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ls")]),s._v("\nnexus-3.12.1-01  nexus-3.12.1-01-unix.tar.gz  sonatype-work\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("下载到指定目录并解压，我们可以看到解压后有通常两个文件。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("nexus-x.x.x")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("Nexus 运行所需要的文件，如运行脚本，依赖 jar 包等")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("sonatype-work")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("该目录包含 Nexus 生成的配置文件、日志文件、仓库文件等")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-启动。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动。"}},[s._v("#")]),s._v(" 2，启动。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /mnt/nexus-3.12.1-01/bin\n./nexus run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("大概等待一分钟左右，如果在日志输出当中看到如下显示，则说明启动成功。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-------------------------------------------------\n\nStarted Sonatype Nexus OSS "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.12")]),s._v(".1-01\n\n-------------------------------------------------\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-访问。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-访问。"}},[s._v("#")]),s._v(" 3，访问。")]),s._v(" "),a("p",[s._v("默认监听端口为"),a("code",[s._v("8081")]),s._v("，默认用户名密码为"),a("code",[s._v("admin/admin123")]),s._v("，因此可以访问以下首页并登陆。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://192.168.157.110:8081/",target:"_blank",rel:"noopener noreferrer"}},[s._v("192.168.157.110:8081"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("这里直接访问了，一般内部使用，就不开启防火墙神马的了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/82872362d880b21f.jpg",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_5-优化配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-优化配置。"}},[s._v("#")]),s._v(" 5，优化配置。")]),s._v(" "),a("h3",{attrs:{id:"_1-设置开机自启。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置开机自启。"}},[s._v("#")]),s._v(" 1，设置开机自启。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /mnt/nexus-3.12.1-01/bin/nexus /etc/init.d/nexus3\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--add")]),s._v(" nexus3\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" nexus3 on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-配置运行用户。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置运行用户。"}},[s._v("#")]),s._v(" 2，配置运行用户。")]),s._v(" "),a("p",[s._v("这个地方可以使用 root 运行，不过官方文档里边也不建议使用 root 来运行，因此使用普通用户来运行。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$useradd")]),s._v(" nexus\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vim")]),s._v(" nexus.rc\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("run_as_user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nexus"')]),s._v("\n\n配置之后记得更改目录权限，否则下次启动会没有权限。\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" nexus.nexus /mnt/nexus-3.12.1-01\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" nexus.nexus /mnt/sonatype-work\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_3-配置-jdk。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置-jdk。"}},[s._v("#")]),s._v(" 3，配置 jdk。")]),s._v(" "),a("p",[s._v("如果这里不配置，一般会使用默认的 JAVA_HOME 的变量，如果系统中有多个，那么可以进行配置。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vim")]),s._v(" nexus\n\n修改第14行：\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL4J_JAVA_HOME_OVERRIDE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/jdk1.8.0_144\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_4-修改端口。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改端口。"}},[s._v("#")]),s._v(" 4，修改端口。")]),s._v(" "),a("p",[s._v("一般使用默认的，如果需要修改，则更改"),a("code",[s._v("/mnt/nexus-3.12.1-01/etc/nexus-default.properties")]),s._v("里边的配置。")]),s._v(" "),a("p",[s._v("这里不做修改了。")]),s._v(" "),a("h3",{attrs:{id:"_5-配置存储及日志位置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置存储及日志位置。"}},[s._v("#")]),s._v(" 5，配置存储及日志位置。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nexus bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vim")]),s._v(" /mnt/nexus-3.12.1-01/bin/nexus.vmoptions\n\n一般都不做修改，使用默认即可，这里列出是为了了解这个点。\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:LogFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/sonatype-work/nexus3/log/jvm.log\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dkaraf.data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/sonatype-work/nexus3\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Djava.io.tmpdir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/sonatype-work/nexus3/tmp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("配置完毕之后，重启一下服务。")]),s._v(" "),a("h3",{attrs:{id:"_6-启动之后-解决一个小问题。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-启动之后-解决一个小问题。"}},[s._v("#")]),s._v(" 6，启动之后，解决一个小问题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8b0ae1a04f74f682.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("注意左上角会有一个告警，这个告警的意思是系统默认的最大文件句柄太小了。")]),s._v(" "),a("p",[s._v("解决办法官网也已经给出了："),a("a",{attrs:{href:"https://help.sonatype.com/repomanager3/system-requirements#filehandles",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决文件句柄限制。"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3f2deef0fff0e385.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("因此我们照官方解决办法来做：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nexus  -  nofile 65536"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/security/limits.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后再次重启服务即可。")]),s._v(" "),a("h2",{attrs:{id:"_6-docker-方式安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-docker-方式安装。"}},[s._v("#")]),s._v(" 6，docker 方式安装。")]),s._v(" "),a("p",[s._v("最后介绍一些使用 docker 的方式如何安装。")]),s._v(" "),a("p",[s._v("如果想使用 docker 来启动，那么可以参考："),a("a",{attrs:{href:"https://hub.docker.com/r/sonatype/nexus3/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方镜像介绍。"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("或用下边方式直接启动。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /mnt/nexus-data\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":8081 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nexus "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--ulimit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nofile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("：65536 /mnt/nexus-data:/nexus-data sonatype/nexus3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);