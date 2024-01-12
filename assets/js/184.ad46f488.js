(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{529:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("之前一直不太喜欢使用 apline 这个镜像，因为太小了，这当然是一个优点，但是真正的生产业务放在这么小的一个镜像里边跑，总是无法让人放心，于是，我所做的镜像都是基于 centos 镜像而作。")]),s._v(" "),a("p",[s._v("但是，有时候有一些场景时只用一次，或者很短时间功能性的使用，那么这个小的镜像就派上用场了。")]),s._v(" "),a("h2",{attrs:{id:"_1-精简的-ssh。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-精简的-ssh。"}},[s._v("#")]),s._v(" 1，精简的 ssh。")]),s._v(" "),a("p",[s._v("在流水线持续集成中，可能就会用到，所以这里简单介绍一下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Dockerfile\nFROM alpine\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g'")]),s._v(" /etc/apk/repositories "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" apk "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --update-cache openssh "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/cache/apk/*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("因为官方的源安装软件非常慢，所以换一下源，然后安装一下常用命令，那么在流水线集成中，调用这个镜像，用完就停掉了，很方便。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/86982ff68d719089.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_2-编译用的-maven。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译用的-maven。"}},[s._v("#")]),s._v(" 2，编译用的 maven。")]),s._v(" "),a("p",[s._v("使用如下文件构建：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Dockerfile\nFROM alpine\nMAINTAINER eryajf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Linuxlql@163.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirror.tuna.tsinghua.edu.cn/alpine/v3.4/main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apk/repositories "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirror.tuna.tsinghua.edu.cn/alpine/v3.4/community"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apk/repositories "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://mirrors.aliyun.com/alpine/latest-stable/main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apk/repositories "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://mirrors.aliyun.com/alpine/latest-stable/community"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apk/repositories "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    apk update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" apk upgrade "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" apk "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" openjdk8 maven ca-certificates tzdata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/cache/apk/*\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sf")]),s._v(" /usr/share/zoneinfo/Asia/Shanghai /etc/localtime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asia/Shanghai"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/timezone\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("然后推送到了远程：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("registry.cn-hangzhou.aliyuncs.com/eryajf/maven:3.6.1\neryajf/maven:3.6.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);