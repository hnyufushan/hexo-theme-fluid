(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{429:function(s,e,t){"use strict";t.r(e);var a=t(0),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("因为目前业务当中遇到程序启动之后自动在"),e("code",[s._v("/tmp")]),s._v("目录下生成一个"),e("code",[s._v("tomcat.1234546854")]),s._v("的文件，有时候程序在上传文件的时候会读取一下这个目录，但是如果服务很久（超过十天）没发布过，那么这个目录可能就被自动清理了，然后导致服务报错。然后在网上看到了如下内容：")]),s._v(" "),e("p",[s._v("CentOS6 以下系统（含）使用 "),e("code",[s._v("watchtmp + cron")]),s._v(" 来实现定时清理临时文件的效果，这点在 CentOS7 发生了变化，在 CentOS7 下，系统使用 systemd 管理易变与临时文件，与之相关的系统服务有 3 个：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemd-tmpfiles-setup.service  ：Create Volatile Files and Directories\nsystemd-tmpfiles-setup-dev.service：Create static device nodes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /dev\nsystemd-tmpfiles-clean.service ：Cleanup of Temporary Directories\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("相关的配置文件也有 3 个地方：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("/etc/tmpfiles.d/*.conf\n/run/tmpfiles.d/*.conf\n/usr/lib/tmpfiles.d/*.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v("/tmp")]),s._v(" 目录的清理规则主要取决于 "),e("code",[s._v("/ usr/lib/tmpfiles.d/tmp.conf")]),s._v(" 文件的设定，默认的配置内容为：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" /tmp "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1777")]),s._v(" root root 10d           \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" /var/tmp "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1777")]),s._v(" root root 30d       \nx /tmp/systemd-private-%b-*\nX /tmp/systemd-private-%b-*/tmp\nx /var/tmp/systemd-private-%b-*\nX /var/tmp/systemd-private-%b-*/tmp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://ae01.alicdn.com/kf/H582d2ea8eb204d73aff56c04ed03b1f7p.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://ae01.alicdn.com/kf/H582d2ea8eb204d73aff56c04ed03b1f7p.png",alt:"img"}}),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("我们可以配置这个文件，比如你不想让系统自动清理 “/tmp"),e("code",[s._v("下以")]),s._v("tomcat` 开头的目录，那么增加下面这条内容到配置文件中即可：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("x /tmp/tomcat.*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("参考：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.jinbuguo.com/systemd/tmpfiles.d.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("tmpfiles.d 中文手册"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("http://t.cn/AiO1BSKv")])])])}),[],!1,null,null,null);e.default=n.exports}}]);