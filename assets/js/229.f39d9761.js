(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{574:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("在GitHub中，我们能看到每个人都在折腾个人同名仓库的profile，我在这上边也花了不少的时间，在这个冲浪经历中，感觉外国人折腾的好像要更厉害一些，浏览过程中看到有人能直接在个人的profile中生成博客最近更新文章，很是新颖，于是就学习了一下。")]),s._v(" "),t("p",[s._v("本文就来讲一下，如何借助 Github Actions 自动获取博客rss文章并呈现在profile中。")]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("所用 Actions： "),t("a",{attrs:{href:"https://github.com/gautamkrishnar/blog-post-workflow",target:"_blank",rel:"noopener noreferrer"}},[s._v("blog-post-workflow"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。")]),s._v(" "),t("p",[s._v("首先添加 Actions 配置文件，e.g. "),t("code",[s._v(".github/workflows/blog-rss.yml")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Latest blog post workflow\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("schedule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run workflow automatically")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cron")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0 * * * *'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Runs every hour, on the hour")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run workflow manually (without waiting for the cron to be called), through the Github Actions Workflow page directly")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("update-readme-with-blog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Update this repo's README with latest blog posts\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pull in eryajf posts\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gautamkrishnar/blog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("workflow@v1\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max_post_count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("committer_username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("committer_email")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf@163.com"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("feed_list")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://wiki.eryajf.net/rss.xml"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$newline- $randomEmoji(💯,🔥,💫,🚀,🌮,📝,🥳,💻,🧰,🏊,🥰,🧐,🤓,😎,🥸,🤩,🤗,🤔,🫣,🤭,🤠,👹,👺,🤡,🤖,🎃,😺,🫶,👍,💪,💄,👀,🧠,🧑‍🏫,👨‍🏫,💂,🧑‍💻,🥷,💃,🕴,💼,🎓,🐻,🐵,🙉,🦄,🦆,🦅,🦍,🦣,🐘,🦒,🦏,🐎,🦩,🐲,🌝,🌜,🌏,🌈,🌊,🎬,🎭,🚀,🚦,⛽️,🗽,🎡,🌋,🌁,💡,🕯,🪜,🧰,⚗️,🔭,🪄,🎊,🎉,) [$title]($url) $newline"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("很多配置见名知意，对照官方文档也都能找到答案，这里就不多赘述。")]),s._v(" "),t("p",[s._v("在内容将要写入的地方配置如下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- BLOG-POST-LIST:START --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- BLOG-POST-LIST:END --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("脚本会每个小时运行一次，自动将获取到的内容写入到两段注释中间。")]),s._v(" "),t("p",[s._v("生成内容效果如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/a8aba8b74d90d40e.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),t("p",[s._v("接下来讲几个注意点，以备扩展该工具时使用。")]),s._v(" "),t("h3",{attrs:{id:"一次订阅多个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一次订阅多个"}},[s._v("#")]),s._v(" 一次订阅多个")]),s._v(" "),t("p",[s._v("如果你有多个内容源需要订阅，则可以在Actions中添加如下标识：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pull in eryajf posts\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gautamkrishnar/blog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("workflow@v1\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max_post_count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment_tag_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("在README中则需要添加如下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- eryajf:START --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- eryajf:END --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("comment_tag_name")]),s._v("将与写入到README中的tag对应，就能实现多个源写入到同一个文件内了。")]),s._v(" "),t("p",[s._v("正是借助这个能力，我创建了一个 "),t("a",{attrs:{href:"https://github.com/eryajf/read-list",target:"_blank",rel:"noopener noreferrer"}},[s._v("read-list"),t("OutboundLink")],1),s._v(" 的项目。")]),s._v(" "),t("p",[s._v("其他的就不多说了，基本上参照我的内容，配合官方文档都可以自己玩起来了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);