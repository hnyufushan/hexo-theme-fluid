(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{701:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("公司这次的打包平台是测试同学搞的，Jenkins 部署在 Mac 电脑，看到他把包搞到了三方，因此打算一起拉回到本地。")]),s._v(" "),a("h2",{attrs:{id:"_1-nginx-的准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-nginx-的准备工作"}},[s._v("#")]),s._v(" 1，NGINX 的准备工作")]),s._v(" "),a("p",[s._v("Mac 电脑很方便，因此使用 docker 先来跑两个 NGINX 虚拟主机：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" erya "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /Users/liqilong/eryajf/docker/nginx/test1:/apk "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /Users/liqilong/eryajf/docker/nginx/test2:/er "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /Users/liqilong/eryajf/docker/nginx/test1/default.conf:/etc/nginx/conf.d/default.conf  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("801")]),s._v(":800 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("802")]),s._v(":801  daocloud.io/library/nginx:1.15.9-alpine-perl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中 test1 作为 apk 包的目录，test2 作为二维码的目录，用到的 default.conf 文件如下：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cat")]),s._v(" default.conf\nserver")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("800")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),s._v(" utf-8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("  /apk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex_exact_size")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex_localtime")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("801")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),s._v(" utf-8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /er")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex_exact_size")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex_localtime")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("启动之后，访问"),a("code",[s._v("localhost:800")]),s._v("即可看到每次的包，访问"),a("code",[s._v("localhost:801")]),s._v("即可看到对应二维码。当然在 Jenkins 中需要用 IP 进行访问。")]),s._v(" "),a("h2",{attrs:{id:"_2-安卓项目的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安卓项目的配置"}},[s._v("#")]),s._v(" 2，安卓项目的配置")]),s._v(" "),a("p",[s._v("安卓的打包，依然需要下载制作二维码的开源程序，基本上这个思路都还比较清晰简单：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0282f2e56c8c4626.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("脚本内容：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /Users/zxmren/.jenkins/workspace/test_android/app/build/outputs/apk/release/app-release.apk /Users/zxmren/nginx/apk/wpt-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BUILD_ID")]),s._v(".apk\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" /Users/zxmren/nginx/jar/qr.jar "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.3.3:800/wpt-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BUILD_ID")]),s._v(".apk "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wpt-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BUILD_ID")]),s._v(".jpg "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("save")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/zxmren/nginx/er/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("就 OK 了。")]),s._v(" "),a("h2",{attrs:{id:"_3-ios-的曲折配置之路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ios-的曲折配置之路"}},[s._v("#")]),s._v(" 3，iOS 的曲折配置之路")]),s._v(" "),a("p",[s._v("现在比较尴尬的是 iOS 的情况，一开始不了解，依旧按照安卓的思路进行配置，后来发现 iOS 打出来的 ipa 包，手机扫了之后并不能直接安装，非常尴尬，因为这个坑，耽误了几个小时，直到后来在 GitHub 看到了一个开源程序："),a("a",{attrs:{href:"https://github.com/bumaociyuan/ios-ipa-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("ios-ipa-server"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"cardListContainer"},[a("div",{staticClass:"card-list"},[a("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#0074ff","--randomColor":"#0074ff",color:"#fff"},attrs:{href:"https://github.com/bumaociyuan/ios-ipa-server",target:"_blank"}},[a("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),s._v(" "),a("div",[a("p",{staticClass:"name"},[s._v("ios-ipa-server")]),s._v(" "),a("p",{staticClass:"desc"},[s._v("ios包下载工具")])])])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ipa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ios包下载工具\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//avatars2.githubusercontent.com/u/416130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("s=460"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com/bumaociyuan/ios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ipa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0074ff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("textColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#fff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--textColor)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),a("p",[s._v("寻找解决方案的过程中了解到了 ipa 的包想要安装顺利，需要一个 plist 的文件进行配置，而开源程序，正是做了这个事情。")]),s._v(" "),a("p",[s._v("这个程序能够让打好的包直接转化成可安装，然后提供二维码用于下载，先在主机安装软件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i -g ios-ipa-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命令使用方式如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ios-ipa-server -i 192.168.3.4 -p 666 /media/ipa/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("/media/ipa/")]),s._v("下放的是每次打好的 ipa 包，这个软件优秀的是，后续再放进来的 ipa 包，也会自动转化成可用的，所以只需要守护进程（这里用的"),a("code",[s._v("tmux")]),s._v("）运行这个程序，然后每次构建的包放到这个目录下就可以了。")]),s._v(" "),a("p",[s._v("这个时候会返回两个二维码，以及两个链接，第一个是 ca 证书，可以忽略，第二个才是重点：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/342f455140b436b2.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("接下来的操作基本上就差不多了，因为这个二维码 URL 是固定的，所以可以在 Jenkins 里边也固定一下，把这个 URL 打成二维码。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0cfd2a8cd2c0cd09.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("同时也可以在项目的说明信息当中添加一下说明，从而易于使用：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1f06e0a11d8fca60.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("其中用到的保留五个版本的脚本，这里也记录一下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" keep-five.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/media/ipa/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.ipa"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" $file_path/$file_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lt")]),s._v(" $file_path/$file_namt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $9}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-gt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$B")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);