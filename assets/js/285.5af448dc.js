(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{629:function(a,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("在实际工作当中，很多时候会遇到一些有意思的事情，这些事情可能你原本压根没在意过，或者一丁点都不知道，但是在某一些卡住你过不去不得不解决而又解决了的经历之后，你的那种喜悦感，以及收获感，是非常丰富而满足的，今天，我就来记录一下工作中与maven这个并不太多打交道的工具之间的小故事两则。")]),a._v(" "),e("h2",{attrs:{id:"故事一-编译的配置指向。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故事一-编译的配置指向。"}},[a._v("#")]),a._v(" 故事一：编译的配置指向。")]),a._v(" "),e("p",[a._v("这个故事事实上在写Jenkins配置的那篇文章里边已经表达过了，这里简单概述一下，然后留下那里的详细链接。")]),a._v(" "),e("p",[a._v("故事非常简单，就是我们运维这边以前在打包的时候从来都是用下边的命令：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mvn clean install -Dmaven.test.skip=true\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("这没有什么毛病，但是因为在编译的时候只能读取默认的在主机的"),e("code",[a._v("/root")]),a._v("目录下生成的"),e("code",[a._v("antx.properties")]),a._v("文件，这会导致一些配置方面的问题，带来一点点麻烦，直到有一天一个同事划了一个圈，就彻底改变了命运：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mvn clean install -Dmaven.test.skip=true -Dautoconfig.userProperties=/root/pre_config/antx.properties_pre\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("从此以后再也不担心关于配置的复杂问题了，直接进行读取的指向，就一劳永逸了。")]),a._v(" "),e("p",[a._v("关于这个故事的详细内容可以看：https://wiki.eryajf.net/pages/1626.html#_2-%E7%BC%96%E8%AF%91%E6%9B%BF%E6%8D%A2%E6%B3%95%E3%80%82")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fe834fe6c9710b39.jpg",alt:"image"}})]),a._v(" "),e("h2",{attrs:{id:"故事二-mvn-install-与-mvn-clean-install。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故事二-mvn-install-与-mvn-clean-install。"}},[a._v("#")]),a._v(" 故事二：mvn install 与 mvn clean install。")]),a._v(" "),e("p",[a._v("这个故事是在一个同事说他的项目代码更改了一些东西，但是发布之后发现好像并没有变化之后，引发的一系列深入探讨与试验，当时因为对比了一下编译流程，发现了只有在编译的时候差了一个clean的参数，因此就打算针对这个参数进行一些试验。")]),a._v(" "),e("ul",[e("li",[a._v("试验进行了三次，第一次是原始代码的试验，进行一次打包。")]),a._v(" "),e("li",[a._v("第二次试验的时候在代码里取消掉一个jar包的引用，然后用"),e("code",[a._v("mvn install -Dmaven.test.skip=true")]),a._v("的命令进行打包，发现打完包之后，代码里取消调用的那个jar包竟然依然存在。")]),a._v(" "),e("li",[a._v("第三次试验采用刚刚的代码（也就是取消那个jar包的调用），然后用"),e("code",[a._v("mvn clean instal -Dmaven.test.skip=true")]),a._v("的命令打包，发现打完包之后，代码里取消掉用的那个jar包也随之消失。")])]),a._v(" "),e("p",[a._v("看完了这个试验之后，我们赶紧乖乖的在项目里都加入了clean的参数。")]),a._v(" "),e("p",[a._v("关于这个地方的详细探讨请看专业人士的专业文章：https://blog.csdn.net/abc86319253/article/details/44019881")]),a._v(" "),e("h2",{attrs:{id:"故事三-编译的时候指定maven的配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故事三-编译的时候指定maven的配置文件"}},[a._v("#")]),a._v(" 故事三：编译的时候指定maven的配置文件")]),a._v(" "),e("p",[a._v("一般在公司里边，都会有自己搭建的私有仓库来作为maven的打包仓库，如果仓库的版本较新，那么一般可以与公网的远程仓库同步，如果仓库的版本略旧一些，那么就需要开发人员将项目中对应的依赖的jar包，传到私服当中来，一般情况下，项目编译的时候默认的就从内网的私服拉取jar包进行编译。")]),a._v(" "),e("p",[a._v("然而，有时候也会有另外的情况，那就是项目一开始就是用默认的远程仓库进行拉取依赖的，那么这个时候再使用内容的仓库进行编译，就会发生各种编译不过去的问题。这个时候，有两种解决方案，一个是依赖于Jenkins的maven风格进行配置文件的指定，还有一种就是直接在命令行里通过参数进行指定。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mvn clean install -gs /usr/local/maven/conf/settings1.xml -Dmaven.test.skip=true\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("其中settings1.xml是用的maven的默认配置文件，通过这条命令编译之后，一下子就完成啦。")])])}),[],!1,null,null,null);e.default=n.exports}}]);