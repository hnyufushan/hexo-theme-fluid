(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{521:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-系统代理。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-系统代理。"}},[s._v("#")]),s._v(" 1，系统代理。")]),s._v(" "),t("p",[s._v("可以通过配置系统层级的代理进行加速。")]),s._v(" "),t("p",[s._v("配置系统代理的方法如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.96.10:1080"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.96.10:1080"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curl")]),s._v(" cip.cc\nIP\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47.91")]),s._v(".208.248\n地址\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 中国  香港  阿里云\n运营商\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.396428")]),s._v("\n \n数据二\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 香港 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 阿里云\n \n数据三\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 中国香港香港 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 阿里云\n \nURL\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" http://www.cip.cc/47.91.208.248\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("而这种方案貌似效果并不大理想。")]),s._v(" "),t("h2",{attrs:{id:"_2-daocloud-加速器。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-daocloud-加速器。"}},[s._v("#")]),s._v(" 2，DaoCloud 加速器。")]),s._v(" "),t("p",[s._v("官网地址：https://www.daocloud.io/mirror#accelerator-doc")]),s._v(" "),t("p",[s._v("首先进入官网，注册一个账号，登陆进去之后，在账号右边，可以看到一个小火箭：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8addb87dd77a6100.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("点击进去之后，会看到一个链接：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2c71ea02141e8671.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("在主机上执行这条命令，执行完成之后，重启一下 docker，然后即可实现加速功能。")]),s._v(" "),t("h2",{attrs:{id:"_3-docker-层的代理。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker-层的代理。"}},[s._v("#")]),s._v(" 3，docker 层的代理。")]),s._v(" "),t("p",[s._v("这个地方参考官网地址：https://docs.docker.com/config/daemon/systemd/#runtime-directory-and-storage-driver")]),s._v(" "),t("p",[s._v("1，为 docker 服务创建 systemd 插件目录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/systemd/system/docker.service.d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2，创建一个名为的文件 / etc/systemd/system/docker.service.d/http-proxy.conf ，添加 HTTP_PROXY 环境变量")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP_PROXY=http://192.168.96.10:80/"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("3，创建一个名为 / etc/systemd/system/docker.service.d/https-proxy.conf 添加 HTTPS_PROXY 环境变量的文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTPS_PROXY=https://192.168.96.10:443/"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("4，加载配置重启服务。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("5，验证是否已加载配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ systemctl show "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--property")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Environment "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_4-国内地址。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-国内地址。"}},[s._v("#")]),s._v(" 4，国内地址。")]),s._v(" "),t("p",[s._v("还有一种方案，就是通过国内的一些镜像站下载，速度也会比较快。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://hub.daocloud.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("DaoCloud 镜像市场。"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("暂时就推荐这一个吧，其他的那些要么就是镜像都是几年前的，要么就是停止维护了的。")])])}),[],!1,null,null,null);t.default=n.exports}}]);