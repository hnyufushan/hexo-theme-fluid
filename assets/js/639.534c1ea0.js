(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{981:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[a._v("#")]),a._v(" 项目")]),a._v(" "),t("div",{staticClass:"cardListContainer"},[t("div",{staticClass:"card-list"},[t("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#0074ff","--randomColor":"#0074ff",color:"#fff"},attrs:{href:"https://github.com/eryajf/gitlabCodeSearch",target:"_blank"}},[t("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),a._v(" "),t("div",[t("p",{staticClass:"name"},[a._v("gitlabCodeSearch")]),a._v(" "),t("p",{staticClass:"desc"},[a._v("使用关键字搜索所有gitlab项目,并将结果输出为Excel")])])])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" gitlabCodeSearch\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 使用关键字搜索所有gitlab项目"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("并将结果输出为Excel\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("avatar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//avatars2.githubusercontent.com/u/416130"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("?")]),a._v("s=460"),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可选")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("link")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//github.com/eryajf/gitlabCodeSearch "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可选")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bgColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#0074ff"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("textColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#fff"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可选，默认var(--textColor)")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])])]),t("p",[a._v("日常工作中，我们在做一些变更的时候，经常会遇到对 gitlab 所有项目检索某个关键字的需求，这个工具，正是为解决这一需求而生的。")]),a._v(" "),t("h2",{attrs:{id:"如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[a._v("#")]),a._v(" 如何使用")]),a._v(" "),t("p",[a._v("先创建 gitlab 的 token，这一步就不介绍如何创建了。注意此 token 需要给：api 和 read_api 两个权限。")]),a._v(" "),t("p",[a._v("然后你可以通过配置文件，或者环境变量的方式将配置加载到程序当中。")]),a._v(" "),t("p",[a._v("通过环境变量能够快速运行项目，因此这里强烈推荐你使用此方式：")]),a._v(" "),t("p",[a._v("如果你熟悉 go 语言，则可以自己编译二进制，如果不熟悉，也可以直接在 releases 当中下载已经编译好的二进制。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("gcs search "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://gitlab.xxx.com'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'xxxxxxxxxxx'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'测试'")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("效果如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20230902_000537.png",alt:""}})]),a._v(" "),t("p",[a._v("运行成功以后，会自动在项目运行目录下将结果输出为 Excel。")]),a._v(" "),t("p",[a._v("你也可以直接通过 docker 来运行：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" registry.cn-hangzhou.aliyuncs.com/ali_eryajf/gcs gcs search "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://gitlab.xxx.com'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'xxxxxxxxxxx'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'测试'")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);