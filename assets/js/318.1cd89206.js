(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{662:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("新安装了 brew，然后安装软件的时候总是会报一个错误：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" trash\n\nfatal: not "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" directory\nError: Command failed with "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("128")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("解决方案是执行如下两条命令：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--add")]),a._v(" safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--add")]),a._v(" safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("然后再执行 install 命令就不会报那个错误了。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/04/54411102a0621097.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);