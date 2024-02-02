(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{811:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-再见wordpress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-再见wordpress"}},[t._v("#")]),t._v(" 1，再见WordPress")]),t._v(" "),s("p",[t._v("从2017年购买主机，2018年开始折腾博客，到今天已经三年多了，已经写了有三百多篇文章，可算是有一定的博主资历，而今将要更换平台，特此作文纪念。")]),t._v(" "),s("p",[t._v("再见WordPress，只是暂时告别WordPress平台，并非不再折腾博客分享文章了，曾经决定折腾博客之后，在工作时间之余前后花了一个月左右的时间熟悉WordPress，了解Git主题，调整排版布局，添加各种有意思的小功能，网上各种浏览别人的博客，还找人互加各种友链，白天总结学习的新东西，晚上下班在家就开始往博客分享，每每忙到深夜，却乐此不疲。")]),t._v(" "),s("p",[t._v("后来随着写的东西越来越多，百度渐渐也开始有收录，来自陌生读者的阅读与反馈越来越多，这些博客里的评论，以及能够给在路上的后行者以帮助，都总能激励我不断写下去，只是最近这一年来，工作实在忙碌，写文分享的激情大不如前，着实惭愧。这次迁移过程中，使得自己能够再一次审视过往写过的文章，不得不说，有一些文章，是真的下了大功夫的，一步一讲解，一讲一截图，这种风格映照了当时我的一些心境：希望写文章的时候把自己当一个门外汉写给自己，从而能够在日后回看文章时，快速理解并吸收，于是文章总能不辞辛苦，备尽其详。现在重新审视自我，希望能够再次回归当初本心，写出干练简洁，内容详实的文章来。")]),t._v(" "),s("p",[t._v("网上博客界有句话叫：博客在于折腾。事实上我也没少折腾，当初第一次折腾就费了太多精力，于是在博客的样式定型之后，我就暗自决定，只安心写文字分享， 不再对博客进行大更改。这个决定，一直延续到今年六月份。事实上在这三年的写博过程中，我并非没有动过二心，早期看到别人折腾的好看的WordPress主题，总禁不住也想要武装到自己博客中来，不过好在自己一向懒惰，也就始终停留在想想的阶段。不过随着年龄的增长，当初要把博客折腾的花里胡哨，夺人眼目的心，就越来越淡，偶尔看到别的博主用简单朴素的样式框架，填充优秀干货内容的时候，就想着，自己总有一天也会将博客改版成那样。2021年6月份，我终于动身了，从五月过度docsify，到最终落脚Vuepress，我终于走入到markdown格式的静态博客中来。")]),t._v(" "),s("p",[t._v("就在昨天将原博客文章迁移到新博客完毕之后，我终于把旧博客域名从数据库中update成新的：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" wp_options "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" option_value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://blog.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" option_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" option_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'siteurl'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" wp_posts "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" post_content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("post_content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://blog.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" wp_postmeta "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" meta_value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meta_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://blog.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" wp_comments "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" comment_content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comment_content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://blog.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" wp_comments "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" comment_author_url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comment_author_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://blog.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" wp_posts "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" guid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://blog.eryajf.net'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" post_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'attachment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("并在老域名配置文件改成rewrite到新博客的配置之后按下了回车键，自此：")]),t._v(" "),s("ul",[s("li",[t._v("原eryajf.net(即www.eryajf.net)域名更改为blog.eryajf.net，从此不再更新文章，仅以当前状态与新博客共同存留，以作纪念。")]),t._v(" "),s("li",[t._v("原eryajf.net(即www.eryajf.net)域名rewrite到新博客wiki.eryajf.net，同时新老博客的文章链接在迁移过程中保持一致，从而使得老链接能够直接跳转到新博客，所有百度的收录，或者读者朋友收藏的链接，都不需要更换，均可自动301到新博客中来。")])]),t._v(" "),s("p",[t._v("规则如下：")]),t._v(" "),s("div",{staticClass:"language-nginx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  eryajf.net www.eryajf.net")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~* \\.(html)$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" ^(.*) http://fsvip.gitee.io/hexo-theme-fluid//pages"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" permanent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("这里保留旧版博客一些截图。")]),t._v(" "),s("p",[s("code",[t._v("访问了88.88k：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ceabdb7603c44767.jpg",alt:"Snipaste_2019-11-11_08-54-28_new"}})]),t._v(" "),s("p",[s("code",[t._v("访问了200k：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6db84f26a9db63f8.jpg",alt:"iShot2020-07-1414.20.56_new"}})]),t._v(" "),s("p",[s("code",[t._v("主页")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2fca04e05ee32163.jpg",alt:"image-20210704165054728_new"}})]),t._v(" "),s("p",[t._v("在编写分享博文的过程中，我也结识了许多互联网上的朋友，这些可爱的朋友成为这两三年互联网工作中不可或缺的一部分。")]),t._v(" "),s("p",[t._v("试想：如果没有写博客，则对于一个整天埋头工作，不善交际，周末也宅在家的互联网工作者来说，如上这些友谊都是不可能出现的。")]),t._v(" "),s("p",[t._v("随着博客内容的积淀与发酵，小于博客这个博客也削微有了一些影响力，有不少朋友说为什么不在博客放个广告呢，然而我始终未曾往这方面想。就像一些博主所说的，我并未打算以此营利，博客的服务器费用也还能承受得起的情况下。")]),t._v(" "),s("p",[t._v("曾在18年赶双十一的活动买的三年主机，今年也将要到期，于是前几天赶着618活动，我又买了新的主机，以为接续。")]),t._v(" "),s("h2",{attrs:{id:"_2-hello-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-hello-vuepress"}},[t._v("#")]),t._v(" 2，Hello Vuepress")]),t._v(" "),s("p",[t._v("正如前文所言，我曾不止一次心动于淡雅朴素的博客风格，在见识了不少专门维护wiki性质网站的博客之后，我终于开始行动。")]),t._v(" "),s("p",[t._v("五月份，无意之中浏览到了一个"),s("a",{attrs:{href:"https://notes.abelsu7.top/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),s("OutboundLink")],1),t._v("，让我再一次注意到了"),s("a",{attrs:{href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docsify"),s("OutboundLink")],1),t._v("，这是很早就知道并注意的一款静态博客工具，也曾一度想着后边改造博客就是用此主题，于是，我开始了新的折腾，通读官方文档，读遍所有插件，最后折腾出了当今的周刊模样：")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://eryajf.github.io/Learning-Weekly/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习周刊"),s("OutboundLink")],1),t._v("：一个日常工作学习中遇到的优秀博客，优秀项目，优秀文章的总结整理，每周更新。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/49bae509b966340f.jpg",alt:"image-20210704180840723_new"}})])])]),t._v(" "),s("p",[t._v("虽然docsify没有成为最终博客的选型，不过也用周刊的形式落脚，也算是没有浪费当初我花了整整两天时间啃各种文档的功夫。")]),t._v(" "),s("p",[t._v("再往后我因为被"),s("a",{attrs:{href:"https://github.com/koderover/zadig-doc/issues/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("zadig-doc"),s("OutboundLink")],1),t._v("的官方文档风格吸引，从而知道了"),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),s("OutboundLink")],1),t._v("的主题"),s("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing",target:"_blank",rel:"noopener noreferrer"}},[t._v("vdoing"),s("OutboundLink")],1),t._v("，自此一见倾心，无法自拔。事实上在这之前，我也曾中意过另一主题"),s("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),s("OutboundLink")],1),t._v("，这些都是优秀的主题，我实在因为被zadig吸引，从而最终落脚vdoing。")]),t._v(" "),s("p",[t._v("这种既能展示单篇文章的更新历程，又能够通过分类将一个技术点集中罗列的风格，正是我梦寐以求的，因为这与我本地文档目录排列("),s("a",{attrs:{href:"https://gitee.com/eryajf/great-moment",target:"_blank",rel:"noopener noreferrer"}},[t._v("参见"),s("OutboundLink")],1),t._v(")风格是一致的；另外主题追求素净，简朴，立足展示内容的立意也是我一直追求的；还有就是完全基于markdown风格，与我当前以typora为主文档阵地的风格一致。基于如上几点，我感觉到Vuepress就是我想要的博客的模样。")]),t._v(" "),s("p",[t._v("新主题官方文档非常详尽，从开篇的作者介绍中，能够看得出主题的作者是一个颇有文档意识的互联网人，其中的一段话深得我心，摘录在此：")]),t._v(" "),s("blockquote",[s("p",[t._v("我以前的一个领导和我们说过一个好的知识管理可以帮助我们提高开发质量和开发效率，下面这张图就是他想传达的，我表示赞同： "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200318125116.jpg",alt:"知识库"}})]),t._v(" "),s("p",[t._v("什么是一个好用的知识管理工具呢？其实我也在不断的寻找和思考中。不过我觉得它至少要结构清晰、管理方便，在查找知识点的过程中可以快速的找到，正像上图所说的要在15秒内找到一个知识点，在添加内容的时候可以很方便的添加，并且保证结构清晰。")])]),t._v(" "),s("p",[t._v("上图很好的诠释了文档的重要性以及写好文档的重要性，当然文本主旨不在此处，故不展开。")]),t._v(" "),s("p",[t._v("说回新博客，真正迁移之后，我照例通读了vdoing官方文档的所有说明，从而为折腾新站点打基础，也许我已经浮躁到很久不曾静心通读一篇文章，但为了能把握住Vuepress，我不得不耐心阅读文档，查看其它案例博客，搜索各种博客相关的插件文档等，好在这是一套成熟的系统，并没有耗费我过多的精力，新的博客就已经初具模样。又因为这是一款静态博客，于是在个人部署的基础之上，还能够基于GitHub Pages进行部署，那么pages的站，就能够与GitHub共存亡了，除非哪天GitHub主动关闭了pages服务。")]),t._v(" "),s("p",[t._v("新博客访问方式如下：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://fsvip.gitee.io/hexo-theme-fluid/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://eryajf.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://eryajf.github.io"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("当初步框架搭建完成之后，就开始了忙碌地迁移工作，由于之前的过分努力，原博客截止目前共发布文章353篇，截图留念如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9deee51b0c21bc5b.jpg",alt:"image-20210704183024723_new"}})]),t._v(" "),s("p",[t._v("这是一项"),s("code",[t._v("内容丰富")]),t._v("的迁移工程，除去将原博客内容平移到新博客之外，我还对以下内容进行了优化：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对迁移后的文章进行了全新的目录规划排布，从而以一种更系统的形式呈现给世人。")])]),t._v(" "),s("li",[s("p",[t._v("迁移的文章首先将时间与原文章保持一致，不为其他，只为了在时间轴上见证自己一路走来的成长历程。")])]),t._v(" "),s("li",[s("p",[t._v("迁移文章的 "),s("code",[t._v("permalink")]),t._v("(即文章的URL)与原文章保持一致，举例如下：")]),t._v(" "),s("ul",[s("li",[t._v("原博客文章链接：http://www.eryajf.net/2852.html")]),t._v(" "),s("li",[t._v("新博客文章链接：http://fsvip.gitee.io/hexo-theme-fluid//pages/2852.html")])]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("该方案参考了主题中的"),s("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing/issues/435",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1),t._v("，别人思想的光芒，不应该遗忘。")]),t._v(" "),s("li",[t._v("添加pages目录是为了编译之后保持根目录的清爽。")]),t._v(" "),s("li",[t._v("最重要的目的，是为了迁移之后，不仅老域名可以301到新域名，而且老文章也可以301到新站的相同内容。从而让存了书签的朋友，百度的收录，都能够不作任何改变，无缝访问到想要的内容。")])])]),t._v(" "),s("li",[s("p",[t._v("迁移文章之后针对代码块儿进行统一的主题指定，从而渲染高亮。")])]),t._v(" "),s("li",[s("p",[t._v("迁移的文章对图片进行了统一的更新，全部基于weibo作为图床，从而提高访问速度。")])])]),t._v(" "),s("p",[t._v("做好了如上行动纲领之后，我趁着下班之后的时间，经过两三周的功夫，终于全线迁移，完成了新博客如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f25c9700c2376162.jpg",alt:"image-20210704185733261_new"}})]),t._v(" "),s("p",[t._v('博客logo沿用了小红蜡烛的设计，蜡烛的寓意，不言自明，banner图应用了主题内含的权游图片，看着白与夜，火与冰的对比，正和我红蜡烛的立意。右边栏选择了个人16岁的"帅照"，注意后黑板板报上的诗歌，正是本人所做《十六岁时》，选这张图片是为了敦促自己，勿忘年轻时愤世嫉俗的心，以及写欲蓬勃的激情，抓好新的博客舞台，尽情写作吧， 尽情发挥吧！')]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("最后，我已经有许久未曾像今天这样写文章了，这篇承接前后的文章正式一次新的纽带，希望在接下来的工作生活中，自己能够多写文章，尤其是与家人相关的文章，别忘了还有好多篇怀念爷爷的文章要写，别忘了记录女儿成长的历程，别忘了还有一些诗情画意要抒发，总之路还很长，不要忘了，多多记录沿途的风景啊！")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("写于2021年7月04日下午")])])])}),[],!1,null,null,null);s.default=r.exports}}]);