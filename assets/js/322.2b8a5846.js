(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{666:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本文在编写的时候没有配图，但是没有配图又触发了个人的强迫症，so")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0a8425e7cb40612a.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"一、admin密码未更改情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、admin密码未更改情况"}},[t._v("#")]),t._v(" 一、admin密码未更改情况")]),t._v(" "),a("ul",[a("li",[t._v("1.进入\\Jenkins\\secrets目录，打开initialAdminPassword文件，复制密码；")]),t._v(" "),a("li",[t._v("2.访问Jenkins页面，输入管理员admin，及刚才的密码；")]),t._v(" "),a("li",[t._v("3.进入后可更改其他管理员密码；")])]),t._v(" "),a("h2",{attrs:{id:"二、admin密码更改忘记情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、admin密码更改忘记情况"}},[t._v("#")]),t._v(" 二、admin密码更改忘记情况")]),t._v(" "),a("p",[t._v("1，删除Jenkins目录下config.xml文件中下面代码，并保存文件。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("useSecurity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("useSecurity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("authorizationStrategy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hudson.security.FullControlOnceLoggedInAuthorizationStrategy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("denyAnonymousReadAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("denyAnonymousReadAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("authorizationStrategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("securityRealm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hudson.security.HudsonPrivateSecurityRealm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("disableSignup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("disableSignup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("enableCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("enableCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("securityRealm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("2，重启Jenkins服务；")]),t._v(" "),a("p",[t._v("3，进入首页>“系统管理”>“Configure Global Security”；(全局安全配置)")]),t._v(" "),a("p",[t._v("4，勾选“启用安全”；")]),t._v(" "),a("p",[t._v("5，点选“Jenkins专有用户数据库”，并点击“保存”；")]),t._v(" "),a("p",[t._v("6，重新点击首页>“系统管理”,发现此时出现“管理用户”；")]),t._v(" "),a("p",[t._v("7，点击进入展示“用户列表”；")]),t._v(" "),a("p",[t._v("8，点击右侧进入修改密码页面，修改后即可重新登录。")])])}),[],!1,null,null,null);a.default=e.exports}}]);