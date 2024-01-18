(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{651:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-手动上传包。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-手动上传包。"}},[t._v("#")]),t._v(" 1，手动上传包。")]),t._v(" "),s("p",[t._v("之前有不少人问过nexus私服搭建好了之后，我该如何将一些新的外部包上传到私服当中呢，其实是非常简单的。")]),t._v(" "),s("p",[t._v("首先是要登录上去，然后点击 "),s("code",[t._v("Upload")]),t._v("，找到 "),s("code",[t._v("maven-local")]),t._v("将jar包找到选中，然后填写对应的三个定位信息即可上传。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bedb667e8c85b089.jpg",alt:"image"}})]),t._v(" "),s("p",[t._v("在引用的时候，道理是一样的，将刚刚定义的三个定位信息写入到项目的pom文件当中，即可引用。")]),t._v(" "),s("h2",{attrs:{id:"_2-引用snapshot的一个坑。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用snapshot的一个坑。"}},[t._v("#")]),t._v(" 2，引用SNAPSHOT的一个坑。")]),t._v(" "),s("p",[t._v("前天一个开发者过来找到我，说自己通过命令行往私服上传了一个"),s("code",[t._v("SNAPSHOT")]),t._v("（关于快照包的概念请自行百度，这里不赘述了）包，接着就在pom当中引用这个包，发现总是报错，报错内容大概如下：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Failed to execute goal on project ishangjie-admin-service: Could not resolve dependencies "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" project com.ald.ishangjie:ishangjie-admin-service:jar:1.0.0: Could not "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" artifact com.ald.ishangjie:ishangjie-activity-service-client:jar:0.0.1-SNAPSHOT -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Help "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" To see the full stack trace of the errors, re-run Maven with the "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" switch.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Re-run Maven using the "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" switch to "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" full debug logging.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" For "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information about the errors and possible solutions, please "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" the following articles:\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Help "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" http://cwiki.apache.org/confluence/display/MAVEN/DependencyResolutionException\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("大概意思就是无法引用到。")]),t._v(" "),s("p",[t._v("后来在其他地方找到了答案：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("blockquote",[s("p",[t._v("Maven内置的插件远程仓库配置，"),s("strong",[t._v("关闭了对SNAPSHOT的支持")]),t._v("，防止不稳定的构建")])])]),t._v(" "),s("p",[t._v("所以解决办法最关键的是：在maven 的conf 目录下的setting.xml 文件中，"),s("strong",[t._v("添加对SNAPSHOT的支持")]),t._v("，将 "),s("code",[t._v("false")]),t._v("改为 "),s("code",[t._v("true")]),t._v("即可。")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("snapshots")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n　　"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("snapshots")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("现在再去进行构建，就不会报刚刚的错误了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0d230885e915a821.jpg",alt:"image"}})]),t._v(" "),s("p",[t._v("参考地址：http://t.cn/AiCnBtIR")])])}),[],!1,null,null,null);s.default=e.exports}}]);