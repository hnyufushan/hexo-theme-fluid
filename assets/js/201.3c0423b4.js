(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{546:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("关于 Jenkins 结合 rancher 进行应用的持续集成，整个流程事实上并不算复杂，只不过牵扯到的东西，以及需要注意到的地方太多，因此这篇文章就针对全局技能的掌握以及过程中的技巧的应用进行分享。")]),s._v(" "),a("h2",{attrs:{id:"_1-环境准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备。"}},[s._v("#")]),s._v(" 1，环境准备。")]),s._v(" "),a("p",[s._v("这次所做的实验主机系统全部基于"),a("code",[s._v("CentOS Linux release 7.6.1810 (Core)")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_1-关于应用的准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于应用的准备。"}},[s._v("#")]),s._v(" 1，关于应用的准备。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("应用")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("版本")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("Gitlab")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("latest")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("Jenkins")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("2.138")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("harbor")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("1.7.1")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("rancher")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("2.2.2")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-rancher-cli-的准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rancher-cli-的准备。"}},[s._v("#")]),s._v(" 2，rancher-cli 的准备。")]),s._v(" "),a("p",[s._v("想要使 Jenkins 与 rancher 打通，需要借助于 rancher-cli 这个工具，具体配置流程参考："),a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/2734.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("rancher-cli 的使用"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_3-关于-rancher-环境存储卷的准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-关于-rancher-环境存储卷的准备。"}},[s._v("#")]),s._v(" 3，关于 rancher 环境存储卷的准备。")]),s._v(" "),a("ul",[a("li",[s._v("1，创建存储卷。")])]),s._v(" "),a("p",[s._v("前边已经"),a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/2723.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("搭建"),a("OutboundLink")],1),s._v("了一个完整可用的 rancher 集群，因为部署应用考虑到一个日志问题，所以这里准备一个存储卷用于应用挂载。")]),s._v(" "),a("p",[s._v("首先进入到将要部署应用的集群（关于集群的规划问题，后续再深入研究摸索）当中，点击"),a("code",[s._v("应用商店")]),s._v("，选择"),a("code",[s._v("启用")]),s._v("，搜索到"),a("code",[s._v("nfs")]),s._v("，点击"),a("code",[s._v("详情")]),s._v("进行部署。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e829576fb7e6ed93.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("部署完成之后，可以在集群的"),a("code",[s._v("工作负载")]),s._v("之中看到对应的服务。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ccf8edee52772edd.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这个时候，还需要进行一些小调整，使得这个服务能够固定地跑在某一个节点之上。我的考虑是这样的，后续所有应用的日志都通过这个服务进行汇总，这样以来开发同学面对应用的时候，就只需要在 Jenkins 界面点击一下部署，然后去到一个统一的位置查看日志就行了，而不用考虑应用在这个过程中做了哪些事情。")]),s._v(" "),a("p",[s._v("所以我在集群的"),a("code",[s._v("work-2")]),s._v("节点上加了一块儿 500G 的硬盘，并挂载在了"),a("code",[s._v("data")]),s._v("目录下。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@work-2 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$df")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-hT")]),s._v("\nFilesystem              Type      Size  Used Avail Use% Mounted on\n/dev/mapper/centos-root xfs       196G   12G  184G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("% /\ndevtmpfs                devtmpfs   12G     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   12G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs                   tmpfs      12G     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   12G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\ntmpfs                   tmpfs      12G   12M   12G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /run\ntmpfs                   tmpfs      12G     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   12G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /sys/fs/cgroup\n/dev/sda1               xfs       497M  208M  290M  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("% /boot\n/dev/sdb1               xfs       500G   33M  500G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /data\ntmpfs                   tmpfs     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".4G     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".4G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/user/0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("code",[s._v("注意")]),s._v("：留意新增的分区文件系统，需要使用"),a("code",[s._v("xfs")]),s._v("的，否则后期可能会出现 pod 挂载失败的报错。报错内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" volumes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" pod "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isj-eureka-57fb65b885-wf77q_isj(b0b0594f-715e-11e9-884a-0050568fa4d0)"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" expired waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" volumes to attach or "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" pod "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isj"')]),s._v("/"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isj-eureka-57fb65b885-wf77q"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" list of unmounted "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("eureka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(". list of unattached "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("eureka default-token-9wmpb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来对刚刚在应用商店里部署的 nfs 服务进行一些小小的调整，从而满足我们的需求，点击升级可以更改应用的一些配置信息。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/eda2ffe1ab30e36e.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这里主要修改两个地方。")]),s._v(" "),a("ul",[a("li",[s._v("主机调度：让 pod 绑定在 work-2 上，从而始终在我们加了硬盘的主机之上。")]),s._v(" "),a("li",[s._v("数据卷：卷名可以自定义，主要是挂载路径更改成我们预设的"),a("code",[s._v("/data")]),s._v("目录，否则就会跑到它默认的 / srv 目录下了。")])]),s._v(" "),a("p",[s._v("调整之后，点击升级就可以了，这样就可以使用这个存储卷了。")]),s._v(" "),a("p",[s._v("在 rancher 中有两个关于存储的名字，一个存储类，一个持久卷。通俗一点理解的话，存储类则像是逻辑卷，持久卷则像是从逻辑卷当中分出来的一个一个存储分区，刚刚安装的这个 nfs 属于存储类，后续需要的话，可以直接从里边划分，非常方便，后边部署应用的时候会用到，这里先说这么多。")]),s._v(" "),a("ul",[a("li",[s._v("2，添加持久卷。")])]),s._v(" "),a("p",[s._v("上边存储卷配置完成之后还不能用，为了下边部署应用顺利，这里还需要添加一下持久卷。")]),s._v(" "),a("p",[s._v("来到集群的数据卷栏目，配置添加：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ef67d2758f363b66.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("点击创建之后，就能在持久卷当中看到一块儿 “磁盘” 挂载了，后边部署应用的时候也都可以使用了。")]),s._v(" "),a("h2",{attrs:{id:"_2-安装服务。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装服务。"}},[s._v("#")]),s._v(" 2，安装服务。")]),s._v(" "),a("p",[s._v("各个服务安装流程这里就不详细说明了。不明白的，可以直接点击下边对应的地址进行参考：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/243.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Gitlab"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/63.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/2314.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Harbor"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/2723.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rancher"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"_3-进入正式配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-进入正式配置。"}},[s._v("#")]),s._v(" 3，进入正式配置。")]),s._v(" "),a("p",[s._v("如上我们已经准备了这么一堆的零件，现在该从何入手，仿佛一时间还有一些懵，这个时候，必然是先从最基础的镜像开始的，这是第一步。")]),s._v(" "),a("p",[s._v("思路大概应该是这样，首先在 Jenkins 主机上将应用代码克隆下来，然后进行编译，接着编写 Dockerfile 构建镜像，然后跑一跑调试下，如果可以那么推到私服，接着就可以在 rancher 当中部署了，最后再整理一下流程当中的步骤，给它落实到 Jenkins 当中即可。")]),s._v(" "),a("p",[s._v("现在就遵照着上边规划的思路，一步一步部署一个应用出来。")]),s._v(" "),a("h3",{attrs:{id:"_1-克隆代码-构建应用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-克隆代码-构建应用。"}},[s._v("#")]),s._v(" 1，克隆代码，构建应用。")]),s._v(" "),a("p",[s._v("因为最终这些都是落实到 Jenkins 当中的，所以制作镜像也就直接在 Jenkins 身上完成了。")]),s._v(" "),a("p",[s._v("当然，这里的步骤，可以稍微省力的直接在 Jenkins 上进行调试，为了方便，我直接创建一个"),a("code",[s._v("maven风格")]),s._v("的应用进行配置。")]),s._v(" "),a("p",[s._v("因为开始都是这些老生常谈的几项配置，所以就不再详细叙述，直接通过下边一个截图看配置。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6b8286b1a574d27f.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("配置当中主要也就那么几个事儿，保留 8 此构建历史，添加文本参数实现代码分支构建的需求，添加选项参数实现部署回滚的需求，添加 git 代码地址，注意分支引用上边文本参数的变量名称，然后就是利用 maven 工具对项目进行编译。")]),s._v(" "),a("p",[s._v("现在可以直接构建一次，让应用包先打出来。")]),s._v(" "),a("p",[s._v("接着去到"),a("code",[s._v("$WORKSPACE")]),s._v("里边编写 Dockerfile。写完之后进行一下构建，构建完成之后，run 一下看看是否能够正常跑起来，如果可以的话，就可以推到私服，进行部署的操作了。")]),s._v(" "),a("p",[s._v("把刚才说的这段话翻译成 shell 脚本放进 Jenkins，大概就是下边的样子：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##set color##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("echoRed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0;31m'")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0m'; }\nechoGreen() { echo $'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0;32m'\"")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0m'; }\nechoYellow() { echo $'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0;33m'\"")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0m'; }\n##set color##\n#\nproject=\"")]),s._v("ebei-mudao"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nversion='),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d%H%M%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\necho -------------------------------------\n# 进入项目target目录\ncd  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("-server/target/ && mv "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("-server-1.0.jar app.jar\n# 创建docker镜像\ncat > run.sh << EOF\n#!/bin/bash\nsource /etc/profile\n/opt/app.jar run\nEOF\ncat > app.conf << EOF\nMODE=service\nAPP_NAME="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v('-server\nEOF\nchmod +x run.sh app.jar\ncat >Dockerfile << EOF\nFROM 192.168.112.69/public/jdk:1.8\nMAINTAINER eryajf <liqilong@edspay.com>\nENV LANG en_US.UTF-8\nADD   app.jar /opt\nADD   run.sh  /\nADD   app.conf /opt\nEXPOSE 8004\nENTRYPOINT [ "')]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('", "')]),s._v("-c"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('", "')]),s._v("/run.sh"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]\nEOF\n# 编译镜像\nechoGreen "')]),s._v('开始构建当次镜像！"\n'),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".112.69/mudao/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("p",[s._v("这里有一些个人小心得，特此表达一下。")]),s._v(" "),a("p",[s._v("1，包名优化。")]),s._v(" "),a("p",[s._v("因为同类应用最后生成的包名如下：")]),s._v(" "),a("ul",[a("li",[s._v("ebei-a-server-1.0.jar")]),s._v(" "),a("li",[s._v("ebei-b-server-1.0.jar")]),s._v(" "),a("li",[s._v("ebei-c-server-1.0.jar")])]),s._v(" "),a("p",[s._v("进入到容器之后就不必计较这些分别，所以就统一成了 app.jar，从而让脚本的通用性更强，在后续新增项目的时候，修改更少的代码即能部署，以提高效率。")]),s._v(" "),a("p",[s._v("2，巧用 cat 的特性。")]),s._v(" "),a("p",[s._v("因为 Dockerfile 需要一些文件来辅助，创建这些文件的时候，我用到了"),a("code",[s._v("cat")]),s._v("这个命令，上边包名优化的时候可以一致，而下边配置内容里边，却又要保证项目名称保持原样，于是调用一开始的"),a("code",[s._v("project变量")]),s._v("，通过 cat 命令之后，会直接将"),a("code",[s._v("APP_NAME=$project-server")]),s._v("执行为"),a("code",[s._v("APP_NAME=ebei-mudao-server")]),s._v("，如此以来，其他应用部署的时候，这个配置就不用改了，只需更改一下开头的 project 对应的名称即可。")]),s._v(" "),a("h3",{attrs:{id:"_2-推送镜像-部署应用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-推送镜像-部署应用。"}},[s._v("#")]),s._v(" 2，推送镜像，部署应用。")]),s._v(" "),a("p",[s._v("镜像制作完成并测试之后，就可以推送到私服当中了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jenkins target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$docker")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".112.69/mudao/ebei-mudao:20190428190020\nThe push refers to a repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".112.69/mudao/ebei-mudao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n506b28e05d9d: Pushed\n0f9f466d3574: Pushed\ne2ba34130aac: Pushed\n952ea0986f6c: Mounted from mudao/ebei-admin\n2d0c92e53222: Mounted from mudao/ebei-admin\n129b697f70e9: Mounted from mudao/ebei-admin\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190428190020")]),s._v(": digest: sha256:25789d14f7be659c1c21bd4c48a853e147dd5be18b184133a41873526e048cb5 size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1574")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后就可以来到 rancher 当中进行应用的部署了，因为 rancher 集成了很友好的 UI 界面，所以常规应用部署直接在 UI 中操作就可以了。")]),s._v(" "),a("p",[s._v("进入到集群中，在工作负载当中点击部署应用，按照下图内容进行配置：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9d972d05284fd184.jpg",alt:"image"}})]),s._v(" "),a("ul",[a("li",[s._v("1，定义将要部署的应用名称，这里最好与上边脚本中"),a("code",[s._v("$project")]),s._v("的值相等，以便于脚本的上下文调用。")]),s._v(" "),a("li",[s._v("2，填入刚刚生成的镜像地址。")]),s._v(" "),a("li",[s._v("3，选择应用所属的命名空间，第一次可以新建一个。")]),s._v(" "),a("li",[s._v("4，填入容器当中应用的端口。")]),s._v(" "),a("li",[s._v("5，填入将要映射出来的端口，这个地方建议合理规划与使用。")]),s._v(" "),a("li",[s._v("6，通过端口检查来做健康检查，根据应用初始化情况合理设置后边的时间。")]),s._v(" "),a("li",[s._v("7，在"),a("code",[s._v("添加卷")]),s._v("中选择"),a("code",[s._v("使用现有的持久卷")]),s._v("，卷名自定义。")]),s._v(" "),a("li",[s._v("8，下拉选择一开始准备环境时添加的持久卷。")]),s._v(" "),a("li",[s._v("9，根据自己的需求挂载容器目录，我这里是把应用的日志目录挂载了出来。")]),s._v(" "),a("li",[s._v("10，定义挂载在持久卷中的目录名称。")])]),s._v(" "),a("p",[s._v("接着点击创建，即完成了应用的部署。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8cad30c57a02bee8.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("部署完成之后，也可以访问一下，点击应用名称下边的端口，即可直接跳转访问。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3b3cdaeb2e10ad54.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这样，也就完成了一个应用的部署，剩下的事情，就是将刚刚遗留的一些东西放入到 Jenkins 脚本当中即可。")]),s._v(" "),a("p",[s._v("等等，在进行后边的事情之前，先来看下日志的情况，首先在 rancher 当中可以直接查看。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6d2b6e12ff284bb0.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("接着再去我们一开始配置的存储类对应的节点上看看日志是什么状况。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@work-2 ebei-mudao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/data/pvc-3a632cf3-698c-11e9-a71b-0050568fa4d0/ebei-mudao\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@work-2 ebei-mudao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\napi.log  error.log  root.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可以看到日志也如一开始预期的出现了，其中"),a("code",[s._v("pvc-3a632cf3-698c-11e9-a71b-0050568fa4d0")]),s._v("是上边创建的持久卷的名称，"),a("code",[s._v("ebei-mudao")]),s._v("则是刚刚部署应用时定义的。")]),s._v(" "),a("h3",{attrs:{id:"_3-完善脚本-一键部署。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-完善脚本-一键部署。"}},[s._v("#")]),s._v(" 3，完善脚本，一键部署。")]),s._v(" "),a("p",[s._v("因为上边的脚本已经完成了大部分工作，剩下的无非就是补充一下推送镜像的代码以及部署的代码。")]),s._v(" "),a("p",[s._v("整理之后的代码完整内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##set color##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("echoRed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0;31m'")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0m'; }\nechoGreen() { echo $'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0;32m'\"")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0m'; }\nechoYellow() { echo $'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0;33m'\"")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v("[0m'; }\n##set color##\n#\nproject=\"")]),s._v("ebei-mudao"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nversion='),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d%H%M%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\necho -------------------------------------\n# 进入项目target目录\ncd  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("-server/target/ && mv "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("-server-1.0.jar app.jar\n# 创建docker镜像\ncat > run.sh << EOF\n#!/bin/bash\nsource /etc/profile\n/opt/app.jar run\nEOF\ncat > app.conf << EOF\nMODE=service\nAPP_NAME="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v('-server\nEOF\nchmod +x run.sh app.jar\ncat >Dockerfile << EOF\nFROM 192.168.112.69/public/jdk:1.8\nMAINTAINER eryajf <liqilong@edspay.com>\nENV LANG en_US.UTF-8\nADD   app.jar /opt\nADD   run.sh  /\nADD   app.conf /opt\nEXPOSE 8004\nENTRYPOINT [ "')]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('", "')]),s._v("-c"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('", "')]),s._v("/run.sh"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]\nEOF\n# 编译镜像\nechoGreen "')]),s._v("开始构建当次镜像！"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ndocker build -t 192.168.112.69/mudao/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),s._v(' .\n# 上传到docker私服\nechoGreen "')]),s._v("开始将镜像push到私服！"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ndocker push 192.168.112.69/mudao/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),s._v("\n[ "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(' != 0 ] && echoRed "')]),s._v("请注意，在执行push上传时出错，故而退出！"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" && exit 1\ndocker rmi 192.168.112.69/mudao/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),s._v('\n#更新镜像\nechoGreen "')]),s._v("开始将最新镜像部署到远端！"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nrancher kubectl set image deployment/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("=192.168.112.69/mudao/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$version")]),s._v(" -n mudao\n[ "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(' != 0 ] && echoRed "')]),s._v("请注意，在执行镜像更新时出错，故而退出！"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" && exit 1\nechoGreen "')]),s._v('部署完成！"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("p",[s._v("简单清晰，放入 Jenkins，然后再次点击一下构建，看看是否能够将新的构建内容部署到 rancher 去。")]),s._v(" "),a("p",[s._v("点击 Jenkins 构建日志看到流程是顺利的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/853be4bfdc09ee48.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("然后来到 rancher 这边，看到新的应用已经开始部署了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3e5f92b7b7f7c5a9.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("由于之前配置的策略是"),a("code",[s._v("滚动: 先启动新Pod，再停止旧Pod")]),s._v("，所以整个部署过程是不会影响到业务的正常访问的。")]),s._v(" "),a("p",[s._v("另一方面，因为整个全局都有在考虑着规范化的问题，所以这样一个应用配置流程走完之后，以后再新增应用的时候，直接 Jenkins 复制 Job，仅需要更改一些代码地址，"),a("code",[s._v("$project")]),s._v("的变量内容，然后 rancher 上复制应用，对应更改一些地方，一个新的应用就这么上线了，算起来，应该不会超过五分钟的吧，与传统方式对比起来，优势立马就显出来了。")]),s._v(" "),a("p",[s._v("这就是几个零散的工具之间联动的整个流程，特此记录。")]),s._v(" "),a("p",[s._v("突然想感慨一下，有的人稍有成就，便不再努力，混吃等死，堕入深渊，有的人则永不休止，不断精进，最终走向人生巅峰。忽然感觉到，成功的路上，的确不太拥挤。")])])}),[],!1,null,null,null);a.default=n.exports}}]);