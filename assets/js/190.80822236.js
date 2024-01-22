(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{535:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("业务方有一个需求是想在服务器跑一些浏览器截屏的功能，因为这个环境是在容器中进行的，因此这里记录一下如何构建这个镜像。")]),s._v(" "),t("p",[s._v("想要完成这个需求，有两个主要依赖项需要满足：")]),s._v(" "),t("ul",[t("li",[s._v("chrome环境。")]),s._v(" "),t("li",[s._v("中文字体。")])]),s._v(" "),t("h2",{attrs:{id:"_1-演示验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-演示验证"}},[s._v("#")]),s._v(" 1，演示验证")]),s._v(" "),t("p",[s._v("了解需求之后，我们应该尽可能找到能够验证的方式，以免增加与需求人员进行更多无必要的沟通的成本。")]),s._v(" "),t("p",[s._v("冲浪时我了解到"),t("a",{attrs:{href:"https://github.com/chromedp/chromedp",target:"_blank",rel:"noopener noreferrer"}},[s._v("chromedp"),t("OutboundLink")],1),s._v("包能够进行相关操作，而且官方也提供了简便直观的示例，因此有如下脚本：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Command screenshot is a chromedp example demonstrating how to take a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// screenshot of a specific element and of the entire browser viewport.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"context"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io/ioutil"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/chromedp/chromedp"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// create context")]),s._v("\n\tctx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cancel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" chromedp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewContext")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t\tcontext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Background")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// chromedp.WithDebugf(log.Printf),")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cancel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// capture screenshot of an element")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" buf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("byte")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// capture entire browser viewport, returning png with quality=90")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" chromedp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fullScreenshot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("`http://fsvip.gitee.io/hexo-theme-fluid//`")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" ioutil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("WriteFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fullScreenshot.png"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0o644")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wrote elementScreenshot.png and fullScreenshot.png"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fullScreenshot takes a screenshot of the entire browser viewport.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Note: chromedp.FullScreenshot overrides the device's emulation settings. Reset")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fullScreenshot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("urlstr "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" quality "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" chromedp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tasks "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" chromedp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tasks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tchromedp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Navigate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("urlstr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\tchromedp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FullScreenshot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" quality"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br")])]),t("p",[s._v("在本地运行之后会生成一个fullScreenshot.png：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8a7a7f1a2d48fa02.jpg",alt:"fullScreenshot"}})]),s._v(" "),t("h2",{attrs:{id:"_2-安装chrome环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装chrome环境"}},[s._v("#")]),s._v(" 2，安装chrome环境")]),s._v(" "),t("p",[s._v("添加yum源：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat >> /etc/yum.repos.d/google-chrome.repo <<EOF\n[google-chrome]\nname=google-chrome\nbaseurl=https://dl.google.com/linux/chrome/rpm/stable/\\$basearch\nenabled=1\ngpgcheck=1\ngpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub\nEOF\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("宿主机上，我们直接使用yum即可安装，镜像构建同样可以使用这个命令来进行安装。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" google-chrome\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者下载到本地，使用本地安装的姿势：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进行安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum localinstall ./google-chrome-stable_current_x86_64.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-添加中文字体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加中文字体"}},[s._v("#")]),s._v(" 3，添加中文字体")]),s._v(" "),t("h3",{attrs:{id:"_1-方法一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-方法一"}},[s._v("#")]),s._v(" 1，方法一")]),s._v(" "),t("p",[s._v("直接使用如下命令安装并验证：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 管理工具")]),s._v("\n$ yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fontconfig\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装字体")]),s._v("\n$ yum groupinstall fonts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新缓存")]),s._v("\n$ fc-cache "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vf")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("查看效果：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ fc-list :lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh\n\n/usr/share/fonts/wqy-microhei/wqy-microhei.ttc: WenQuanYi Micro Hei,文泉驛微米黑:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Regular\n/usr/share/fonts/wqy-zenhei/wqy-zenhei.ttc: WenQuanYi Zen Hei:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Regular\n/usr/share/fonts/wqy-zenhei/wqy-zenhei.ttc: WenQuanYi Zen Hei Sharp,文泉驛點陣正黑:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Regular\n/usr/share/fonts/cjkuni-uming/uming.ttc: AR PL UMing TW MBE:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Light\n/usr/share/fonts/wqy-microhei/wqy-microhei.ttc: WenQuanYi Micro Hei Mono,文泉驛等寬微米黑:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Regular\n/usr/share/fonts/wqy-zenhei/wqy-zenhei.ttc: WenQuanYi Zen Hei Mono:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Regular\n/usr/share/fonts/cjkuni-uming/uming.ttc: AR PL UMing TW:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Light\n/usr/share/fonts/cjkuni-uming/uming.ttc: AR PL UMing HK:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Light\n/usr/share/fonts/cjkuni-uming/uming.ttc: AR PL UMing CN:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Light\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"_2-方法二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法二"}},[s._v("#")]),s._v(" 2，方法二")]),s._v(" "),t("p",[s._v("使用如下命令安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fontconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Linux 字体目录是："),t("code",[s._v("/usr/share/fonts")]),s._v("，只要将字体文件放入这个目录就可以了，我在这里存了一个字体："),t("a",{attrs:{href:"https://gitee.com/eryajf/work-use/blob/master/Chinaese_font/WeiRuanYaHei-1.ttf",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我下载"),t("OutboundLink")],1),s._v("，注意最好通过浏览器下载然后校验一下仓库里的md5，否则可能会导致下边的步骤失败：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("MD5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WeiRuanYaHei-1.ttf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" f80465e9d8cea2b48da01f5aba236b59\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下载之后将文件放到字体目录中，然后执行如下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("fc-cache "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vf")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("最后通过如下命令进行验证，如果看到字体输出，则说明安装成功：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ fc-list :lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh\n/usr/share/fonts/WeiRuanYaHei-1.ttf: Microsoft YaHei:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Regular,Normal\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_4-容器化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-容器化"}},[s._v("#")]),s._v(" 4，容器化")]),s._v(" "),t("p",[s._v("如上步骤都已经成熟之后，直接生成如下Dockerfile:")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" registry.cn-hangzhou.aliyuncs.com/eryajf/centos:7.5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum -y install google-chrome fontconfig")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" WeiRuanYaHei-1.ttf /usr/share/fonts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" fc-cache -vf")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("构建并验证：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" fc-list :lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh\n/usr/share/fonts/WeiRuanYaHei-1.ttf: Microsoft YaHei:style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Regular,Normal\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("然后将上边的验证代码编译成二进制，丢进容器里，发现仍旧能够正常生成网页快照。")])])}),[],!1,null,null,null);t.default=e.exports}}]);