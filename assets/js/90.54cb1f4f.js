(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{435:function(s,e,t){"use strict";t.r(e);var a=t(0),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("运行python服务的主机迁移了之后，原来安装过的依赖库也需要进行迁移，可通过如下操作快速迁移。")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("现在源服务器上执行如下命令导出已安装的。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("pip freeze "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" requirements.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("在新服务器中执行如下命令，进行安装。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" requirements.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("p",[s._v("需要注意的一个问题是，安装之前需要保证两个服务器的python环境保持一致。")])])}),[],!1,null,null,null);e.default=n.exports}}]);