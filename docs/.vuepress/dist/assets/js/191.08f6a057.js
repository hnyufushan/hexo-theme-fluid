(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{535:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("某些时候，我们会有在容器内容访问宿主机某个服务的需求，比如现在 openai 无法直接访问，需要给项目添加代理，我的 "),s("a",{attrs:{href:"https://github.com/eryajf/chatgpt-dingtalk",target:"_blank",rel:"noopener noreferrer"}},[a._v("chatgpt-dingtalk"),s("OutboundLink")],1),a._v(" 项目支持了通过环境变量指定代理地址。")]),a._v(" "),s("p",[a._v("添加方式如下：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行项目")]),a._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chatgpt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8090")]),a._v(":8090 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APIKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("换成你的key "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MODEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gpt-3.5-turbo"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SESSION_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HTTP_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEFAULT_MODE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"单聊"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always dockerproxy.com/eryajf/chatgpt-dingtalk:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("其中的 HTTP_PROXY 就是对应的代理服务。")]),a._v(" "),s("h2",{attrs:{id:"方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[a._v("#")]),a._v(" 方案")]),a._v(" "),s("p",[a._v("要解决这个问题，并且让如上命令能通用在 Linux，Mac，Windows 系统都通用，因此网上一些通过命令获取到宿主机 IP 的方案就不满足需求了，要实现这个需求，需要一点点骚操作才行。")]),a._v(" "),s("h3",{attrs:{id:"方案一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[a._v("#")]),a._v(" 方案一")]),a._v(" "),s("p",[a._v("使用 host 模式启动服务。")]),a._v(" "),s("p",[a._v("默认情况下，docker 使用的是桥接模式启动服务，即 Docker 容器将使用 Docker 自己创建的虚拟网络，Docker 容器之间可以相互通信，但是它们无法直接访问宿主机上的网络服务。Docker 容器需要通过端口映射来暴露自己的服务，以便宿主机或其他网络主机访问。")]),a._v(" "),s("p",[a._v("而使用 host 模式启动，Docker 容器与宿主机共享同一个网络命名空间，即 Docker 容器将直接使用宿主机的网络。这意味着 Docker 容器可以使用宿主机的 IP 地址和端口，可以直接访问宿主机上的网络服务。然而，host 模式也存在一些限制，例如 Docker 容器之间无法直接通信，Docker 容器的网络性能可能会受到影响。")]),a._v(" "),s("p",[a._v("所以此时启动命令可以改成下边这样：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行项目")]),a._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chatgpt  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APIKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("换成你的key "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MODEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gpt-3.5-turbo"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SESSION_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HTTP_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://127.0.0.1:1080"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEFAULT_MODE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"单聊"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always dockerproxy.com/eryajf/chatgpt-dingtalk:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("这样容器就能直接访问到宿主机的 1080 了。")]),a._v(" "),s("p",[a._v("但是因为这种模式的局限性，因此实际生产当中几乎没有人会用这种方式，所以不推荐使用方案一，推荐方案二。")]),a._v(" "),s("h3",{attrs:{id:"方案二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[a._v("#")]),a._v(" 方案二")]),a._v(" "),s("p",[a._v("docker 官方提供了一种支持方案，可通过指向 "),s("code",[a._v("host.docker.internal")]),a._v(" 来指向宿主机的 IP。参见文档："),s("a",{attrs:{href:"https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host",target:"_blank",rel:"noopener noreferrer"}},[a._v("从容器连接到主机上的服务"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/215c61e103505625.png",alt:""}})]),a._v(" "),s("p",[a._v("但注意，这个方案存在一个问题，那就是只支持 Mac 与 Windows 中 desktop 这种环境，并不支持在 Linux 中使用，所以不能直接使用。")]),a._v(" "),s("p",[a._v("于是，有人在官方提交了这个 issue："),s("a",{attrs:{href:"https://github.com/docker/for-linux/issues/264",target:"_blank",rel:"noopener noreferrer"}},[a._v("Support host.docker.internal DNS name to host"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("p",[a._v("在其中的一个回答里，找到了一种可行方案：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/b390bdbf9f727d2d.png",alt:""}})]),a._v(" "),s("p",[a._v("按照如上说明，可以使用如下命令进行启动：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行项目")]),a._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" chatgpt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8090")]),a._v(":8090 --add-host"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"host.docker.internal:host-gateway"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APIKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("换成你的key "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MODEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gpt-3.5-turbo"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SESSION_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HTTP_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://host.docker.internal:15732"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEFAULT_MODE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"单聊"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always dockerproxy.com/eryajf/chatgpt-dingtalk:latest\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("于是我在自己的 Mac 以及 Linux 都使用这种方案做了测试，发现是可以的。")]),a._v(" "),s("p",[a._v("需要注意的是，这个功能在 docker 版本过低的时候，可能支持的有问题，所以你的 docker 版本最好不低于 20。")]),a._v(" "),s("p",[a._v("如果使用的是docker-compose，则通过添加如下内容进行配置：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("extra_hosts:\n  - "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'host.docker.internal:host-gateway'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("比如上边的项目改成docker-compose部署，就变成下边这样：")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.9'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("chatgpt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dockerproxy.com/eryajf/chatgpt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dingtalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" chatgpt\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" APIKEY=换成你的key\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(' MODEL="gpt'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("3.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("turbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v('0301"\n      '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" SESSION_TIMEOUT=600\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" HTTP_PROXY=http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//host.docker.internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15777")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(' DEFAULT_MODE="单聊"\n    '),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8090:8090"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("extra_hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" host.docker.internal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("gateway\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);