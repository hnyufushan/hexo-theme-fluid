(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{536:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("我写的"),a("a",{attrs:{href:"https://github.com/eryajf/go-ldap-admin",target:"_blank",rel:"noopener noreferrer"}},[s._v("go-ldap-admin"),a("OutboundLink")],1),s._v("的demo环境是通过docker-compose一键拉起的。")]),s._v(" "),a("p",[s._v("因为服务器部署，与本地拉起测试有一些配置需要调整，于是打算用脚本做一下，这个时候发现执行带有通配符的命令会报如下错误：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" go-ldap-admin-ui  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" static/js/app.*.js\nls: cannot access static/js/app.*.js: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("一开始想着加个单引号把命令包起来，发现仍然不行。")]),s._v(" "),a("p",[a("strong",[s._v("解决方案")]),s._v("：用双引号将命令包裹起来，就不会报错了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" go-ldap-admin-ui "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ls static/js/app.*.js"')]),s._v("\nstatic/js/app.580a29c6.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/8647d5b91f458b86.png",alt:""}})]),s._v(" "),a("p",[s._v("参考："),a("a",{attrs:{href:"https://stackoverflow.com/questions/50742892/using-in-docker-exec-command",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/50742892/using-in-docker-exec-command"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);