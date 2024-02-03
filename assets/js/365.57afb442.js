(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{708:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("我们在使用pipeline的时候，如果某一个变量没有正常声明，则会遇到变量定义失败的错误，这个时候，我们可以借助三元表达式来解决这个问题。")]),t._v(" "),s("p",[t._v("举一个场景：比如我在流水线中，代码拉取完毕之后，会获取到该次拉取对应的一些commit信息，但是当拉代码的步骤执行失败的时候，通常会遇到下边变量定义失败的错误。")]),t._v(" "),s("p",[t._v("有一些变量无法确定的场景中，就会使用到三元表达式。")]),t._v(" "),s("p",[t._v("书接上篇文章 "),s("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/ef36d8/#%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins结合MySql Database插件的平台化实践思路 #"),s("OutboundLink")],1),t._v("，流水线中的很多变量是通过查询数据库拿到的结果来赋值的，有时候可能某个值拿不到数据，我们想给他个默认值，就可以用如下方法来写：")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("\tenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROBOT_KEY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job_msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" job_msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot_key "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bbbbbbb'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如上写法表示：我想把"),s("code",[t._v("job_msg.robot_key")]),t._v(" 的值赋值给 "),s("code",[t._v("ROBOT_KEY")]),t._v(" ，如果"),s("code",[t._v("job_msg.robot_key")]),t._v("的值不为null，则"),s("code",[t._v("ROBOT_KEY")]),t._v("等于问号后边的内容，如果值为null，则"),s("code",[t._v("ROBOT_KEY")]),t._v("等于冒号后边的内容。")]),t._v(" "),s("p",[t._v("通常我们都是要对应的值，或者给一个默认值，可以简写如下：")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("\tenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROBOT_KEY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job_msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bbbbbbb'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("表示：如果"),s("code",[t._v("job_msg.robot_key")]),t._v("的值不为null，则"),s("code",[t._v("ROBOT_KEY")]),t._v("等于"),s("code",[t._v("job_msg.robot_key")]),t._v("，如果值为null，则"),s("code",[t._v("ROBOT_KEY")]),t._v("等于"),s("code",[t._v("bbbbbbb")]),t._v("。")]),t._v(" "),s("p",[t._v("这种用法的一个好处在于，首先代码简洁，其次就是能够有效避免一些不确定变量定义导致的流水线异常。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva2.sinaimg.cn/large/008k1Yt0ly1h4rdnv4bawj30u011g7ai.jpg",alt:""}})]),t._v(" "),s("p",[t._v("同时我们还可以做一些判断语句，如果前边的判断语句为真，则值为问号后边的，为假则值为冒号后边的，举例如下：")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("\tenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROBOT_KEY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job_msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" null "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" job_msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" job_msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot_key\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("灵活使用三元表达式，能够让我们更加优雅地集成流水线。")])])}),[],!1,null,null,null);s.default=n.exports}}]);