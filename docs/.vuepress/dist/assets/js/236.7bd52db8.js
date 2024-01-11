(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{582:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("前注：本文同时收录在github-slug-action官方README的推荐当中："),t("a",{attrs:{href:"https://github.com/rlespinasse/github-slug-action#thanks-for-talking-about-us",target:"_blank",rel:"noopener noreferrer"}},[s._v("Thanks for talking about us"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("使用 GitHub Action 时，有一种场景需求为，通过 release 触发构建，然后构建的过程中，还要用到这次创建的 release 号。")]),s._v(" "),t("p",[s._v("此时我在 learn-github 仓库中进行演练。添加了如下一个 action 内容：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test action env\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("release")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("types")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("created"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示在创建新的 Release 时触发")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test_action_env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Test Action Env\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          env")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("此时手动创建一个 release，我这边版本号为："),t("code",[s._v("v0.5.6")]),s._v("，然后在日志输出中搜索这个关键字：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GITHUB_WORKFLOW_REF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("learn"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("workflows"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yml@refs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tags"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GITHUB_REF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("refs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tags"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GITHUB_REF_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("网上大多数的方案是对 "),t("code",[s._v("GITHUB_REF")]),s._v(" 这个变量下手，比如：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Get Release version\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACTIONS_ALLOW_UNSECURE_COMMANDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          echo \"::set-env name=RELEASE_VERSION::$(echo $GITHUB_REF | cut -d'/' -f 3)\"")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("code",[s._v("📢注意：")]),s._v(" 需要注意的是，如果使用 set-env 来添加变量，则需要声明 "),t("code",[s._v("ACTIONS_ALLOW_UNSECURE_COMMANDS: true")]),s._v("，否则运行过程中会报错如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("The "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("set-env")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" command is disabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Please upgrade to using Environment Files or opt into unsecure command execution by setting the "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("ACTIONS_ALLOW_UNSECURE_COMMANDS")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" environment variable to "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" For more information see"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("blog"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("changelog"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("actions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("deprecating"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("and"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("commands"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这自然没什么毛病，但着实用起来不够方便，不够优雅。")]),s._v(" "),t("p",[s._v("也许你看到了，上边日志输出中还有一个 "),t("code",[s._v("GITHUB_REF_NAME")]),s._v("，正好就是我和你想要的值，但是我想告诉你的是，的确官方新给出了这个变量，但可气的是，这个变量并没有在全局暴漏，因此虽然能在这个 "),t("code",[s._v("env")]),s._v(" 输出当中看到这个变量，但实际却并不能用。")]),s._v(" "),t("p",[s._v("关于此问题，可见这两个讨论：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/github/docs/issues/15319",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/github/docs/issues/15319"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rlespinasse/github-slug-action/issues/104",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/rlespinasse/github-slug-action/issues/104"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),t("p",[s._v("为了验证如上表述的内容，我创建一个测试脚本如下：")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"language-yaml line-numbers-mode"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test action env\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("release")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("types")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("created"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示在创建新的 Release 时触发")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test_action_env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Test Action Env\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          env")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Get Release version\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vars\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACTIONS_ALLOW_UNSECURE_COMMANDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          echo \"::set-env name=RELEASE_VERSION_ONE::$(echo $GITHUB_REF | cut -d'/' -f 3)\"")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Get Release version\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' echo "RELEASE_VERSION_TWO=$'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GITHUB_REF"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#refs/*/}" >> $GITHUB_ENV')]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Show Release Num\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n          echo "通过GitHub-Action获取版本号： ${{ env.GITHUB_REF_NAME }}"\n          echo "通过自定义脚本获取版本号第一种： ${{ env.RELEASE_VERSION_ONE }}"\n          echo "通过自定义脚本获取版本号第二种： ${{ env.RELEASE_VERSION_TWO }}"')]),s._v("\n")])]),s._v(" "),t("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("17")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("18")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("19")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("20")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("21")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("22")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("23")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("24")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("25")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("26")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("27")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("28")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("29")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("30")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("31")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("32")]),t("br")])])]),t("p",[s._v("运行后得到结果如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/02/cda775b399fb8034.png",alt:""}})]),s._v(" "),t("div",{pre:!0},[t("p",[s._v("可见虽然在全局环境变量中能看到 "),t("code",[s._v("GITHUB_REF_NAME=v0.5.13")]),s._v("，但实际上在后续的上下文中，你并不能通过 "),t("code",[s._v("${{ env.GITHUB_REF_NAME }}")]),s._v(" 来引用这个变量。")])]),t("h2",{attrs:{id:"解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),t("p",[s._v("虽然上边的脚本提供了两种解决方案，但是都不算够优雅，网上也有针对这一问题处理的解决方案，其中以专门针对 GitHub Action 中变量问题解决的项目 github-slug-action 为甚，这也是本文的主角。")]),s._v(" "),t("ul",[t("li",[s._v("项目："),t("a",{attrs:{href:"https://github.com/rlespinasse/github-slug-action",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-slug-action"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("这个 Action 提供了一系列 GitHub Action 运行过程中的变量暴漏等功能。")]),s._v(" "),t("p",[s._v("此时我们把 action 的配置文件改成下边这样：")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"language-yaml line-numbers-mode"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test action env\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("release")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("types")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("created"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示在创建新的 Release 时触发")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test_action_env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Test Action Env\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Inject slug/short variables\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rlespinasse/github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("slug"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@v4\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          env")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Show Release Num\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n          echo "通过GitHub-Action获取版本号： ${{ env.GITHUB_REF_NAME }}"\n          echo "通过github-slug-action获取版本号： ${{ env.GITHUB_REF_NAME_SLUG }}"')]),s._v("\n")])]),s._v(" "),t("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("17")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("18")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("19")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("20")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("21")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("22")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("23")]),t("br"),t("span",{pre:!0,attrs:{class:"line-number"}},[s._v("24")]),t("br")])])]),t("div",{pre:!0},[t("p",[s._v("当我们把 github-slug-action 应用在流水线中之后，它首先会把原来官方遗漏的变量 "),t("code",[s._v("${{ env.GITHUB_REF_NAME }}")]),s._v(" 给填充好，其次也可以通过使用 "),t("code",[s._v("${{ env.GITHUB_REF_NAME_SLUG }}")]),s._v(" 来获取到对应的版本号。")])]),t("p",[s._v("除去这个变量之外，github-slug-action 还提供了其他一些变量，并且做到了配置简单(如你所见，在流水线中引用即可)，优雅易用，因此是一个性价比非常高的，值得在流水线中应用的 action。")]),s._v(" "),t("ul",[t("li",[s._v("更多可用变量，可参考"),t("a",{attrs:{href:"https://github.com/rlespinasse/github-slug-action#available-environment-variables",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档的说明"),t("OutboundLink")],1),s._v("。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);