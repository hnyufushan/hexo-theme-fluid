(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{442:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令执行效果。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令执行效果。"}},[s._v("#")]),s._v(" 1，命令执行效果。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@archlab-server2 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# free -m")]),s._v("\n　　　　　　total 　　used 　　"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" 　　shared 　　buffers 　　cached\nMem: 　　　"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3920")]),s._v(" 　 　"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1938")]),s._v(" 　　"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1982")]),s._v(" 　　 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 　　　　 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("497")]),s._v(" 　　　　"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1235")]),s._v("\n-/+ buffers/cache:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("205")]),s._v(" 　　"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3714")]),s._v("\nSwap: 　　 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4095")]),s._v(" 　　 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 　　　"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4095")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_2-详解。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-详解。"}},[s._v("#")]),s._v(" 2，详解。")]),s._v(" "),a("p",[s._v("第二横行表示系统内存的使用情况：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Mem： total（总量）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 3920MB，\n　　used（已使用）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1938MB，\n　　free（空闲）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1982MB，\n　　shared（共享内存）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0MB，\n　　buffers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 497MB，\n　　cached "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1235MB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("注：前面四项都比较好理解，buffer 和 cache找不到合适的词来翻译，它们的区别在于：")]),s._v(" "),a("ul",[a("li",[s._v("A buffer is something that has yet to be “written” to disk.")]),s._v(" "),a("li",[s._v("A cache is something that has been “read” from the disk and stored for later use.")])]),s._v(" "),a("p",[s._v("即"),a("code",[s._v("buffer用于存放要输出到磁盘的数据")]),s._v("，而"),a("code",[s._v("cache是从磁盘读出存放到内存中待今后使用的数据")]),s._v("。它们的引入均是为了提供IO的性能。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/30c0cf2a224bc63f.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("输出的第三行表示在第二行的基础上-/+ buffers/cache得到的：")]),s._v(" "),a("ul",[a("li",[s._v("buffers/cache used = Mem used – buffers – cached = 1938MB – 497MB – 1235MB = 205MB")]),s._v(" "),a("li",[s._v("buffers/cache free = Mem free + buffers + cached = 1982MB + 497MB + 1235MB = 3714MB")])]),s._v(" "),a("p",[s._v("输出的第四行表示交换分区使用的情况：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Swap：total（总量）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 4095MB\n    used（使用）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0MB\n    free（空闲）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 4095MB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("由于系统当前内存还比较充足，并未使用到交换分区。")])])}),[],!1,null,null,null);a.default=r.exports}}]);