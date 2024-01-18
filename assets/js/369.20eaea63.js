(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{713:function(s,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在流水线的构建过程中，免不了会有逻辑判断的地方，通常我们可以使用 when，if 来编写判断的语句，但是当需要判断的分支大于两个的时候，就不再推荐使用如上两种方式了。")]),s._v(" "),t("p",[s._v("简言之，如果是布尔性质的判断，则推荐使用 when 和 if 来实现自己的需求，当判断的分支较多的时候，则推荐使用 switch 来解决这个场景的需求。")]),s._v(" "),t("p",[s._v("switch 的基本书写语法如下：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("script "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PARAM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            println "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is a"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            println "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is b"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            println "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is default"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("因为 switch 属于 groovy 语法中的内容，所以需要在 script 关键字包裹之下。")]),s._v(" "),t("p",[s._v("上边是一个比较常规的写法，还有一些变种的写法，这里也做一下介绍。")]),s._v(" "),t("p",[s._v("多个分支有相同的处理逻辑，这个时候，可以讲这些分支进行合并，有如下两种方式：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("script "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PARAM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is a"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一种")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is the first"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二种")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inList'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is second"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is default"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("在一些判断逻辑场景中，合理适当运用 switch，能够让你的代码看起来更加简洁，专业，优雅。")]),s._v(" "),t("p",[s._v("快用起来吧。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2023/09/1694100590964.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);