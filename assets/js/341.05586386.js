(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{686:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-缘起。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-缘起。"}},[s._v("#")]),s._v(" 1，缘起。")]),s._v(" "),t("p",[s._v("许多公司在做安卓的构建或者其他项目构建的同时，会有打"),t("code",[s._v("tag")]),s._v("到"),t("code",[s._v("Gitlab")]),s._v("的需求，这个需求的存在有其实在的价值意义，不仅仅让每一次我们发布过的代码有记录存留，也能够方便一些其他的功能（比如回滚），因此，今天就来说说这个事儿。")]),s._v(" "),t("p",[s._v("这个功能的实现依赖于Jenkins的git插件，不过一般都默认有安装。")]),s._v(" "),t("p",[s._v("先准备一个测试项目，内容如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/62ae34735d934219.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("然后来到Jenkins处，做一些简单的功能，能够用于测试验证即可。")]),s._v(" "),t("p",[s._v("执行shell处加一些简单的操作：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**********************************************"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**********************************************"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("进入正式配置之前需要先安装本文的主角"),t("code",[s._v("Git Parameter插件")]),s._v("，插件详情，"),t("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/2280.html#toc-11",target:"_blank",rel:"noopener noreferrer"}},[s._v("可以点我查看。"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("在构建后的操作中添加"),t("code",[s._v("Git Publisher")]),s._v("，然后如图中所示配置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4d0dce948a91d8ba.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("在构建后操作当中选择"),t("code",[s._v("Git Publisher")]),s._v("，然后如图配置：")]),s._v(" "),t("ul",[t("li",[s._v("配置一：定义tag名称，release-$BUILD_NUMBER这里取用了一个Jenkins的环境变量，用于每次的tag自增问题。")]),s._v(" "),t("li",[s._v("配置二：选中，以表示创建一个新的tag。")]),s._v(" "),t("li",[s._v("配置三：要推送的项目。")])]),s._v(" "),t("p",[s._v("接着我们构建一下看看效果：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/456d6d9082b2c8eb.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("看样子tag已经打好并且推送到远程服务器去了。")]),s._v(" "),t("p",[s._v("现在去git里边看看是否有了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/645d6ad8d3772a6d.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("图中圈起来的地方可以看到，正好与我们构建此时对应的，创建了三个标签。")]),s._v(" "),t("p",[s._v("现在我们模拟开发，更改一下项目文件内容，然后再构建一下看看情况。")]),s._v(" "),t("p",[s._v("来波操作：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Administrator@liqilong MINGW64 ~/Desktop/gittest/eryajf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第二次添加内容用于测试"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" README.md\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/eryajf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add two"')]),s._v("\nwarning: LF will be replaced by CRLF "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" README.md.\nThe "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" will have its original line endings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your working directory.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 822b2f3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" two\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \nAdministrator@liqilong MINGW64 ~/Desktop/gittest/eryajf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\nEnumerating objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(", done.\nCounting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nDelta compression using up to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" threads.\nCompressing objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("307")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("76.00")]),s._v(" KiB/s, done.\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTo "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.70:linux/eryajf.git\n   635b61c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("822b2f3  master -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("然后再去构建一下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8af5ed7e669c9bdd.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("第四次构建，已经看到刚刚模拟开发所添加的内容了。")]),s._v(" "),t("p",[s._v("那么现在，就可以引出这个自动打tag的功能所带来的另外一个大方便了，那就是方便回滚。")]),s._v(" "),t("h2",{attrs:{id:"_2-回滚功能。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-回滚功能。"}},[s._v("#")]),s._v(" 2，回滚功能。")]),s._v(" "),t("p",[s._v("我们可以在参数化构建当中进行参数的定义，依赖于Git版本控制的特性，当用户选择的是构建时，可以选择对应的分支进行构建，当用户选择的是回滚是，那么可以选择对应的tag进行回滚。事实上与分支的构建回滚是一个道理，不过这里直接选择tag，也非常方便。")]),s._v(" "),t("p",[s._v("那么在验证之前，我们需要对Jenkins进行一些小小的调整，通过添加刚刚表述的参数，以及执行的shell的配合，来完成这样一个构建回滚各有分工的一个事情。")]),s._v(" "),t("h3",{attrs:{id:"_1-添加mode选项。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加mode选项。"}},[s._v("#")]),s._v(" 1，添加mode选项。")]),s._v(" "),t("p",[s._v("在参数化构建过程中先添加一个选项参数，从而让构建以及回滚两种情况存在。具体配置如图:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a38db134c0edd334.jpg",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"_2-再添加branch选项。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-再添加branch选项。"}},[s._v("#")]),s._v(" 2，再添加branch选项。")]),s._v(" "),t("p",[s._v("然后添加一个用于构建不同代码分支的字符参数，这个是一个很常规的配置，就不做过多介绍，具体如图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/443a51080f04aebd.jpg",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"_3-添加git-parameter选项。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加git-parameter选项。"}},[s._v("#")]),s._v(" 3，添加Git Parameter选项。")]),s._v(" "),t("p",[s._v("然后添加一个用于回滚不同tag的选项，这里的tag是我们项目自动生成的，随后会做一下总结，具体如图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/546ff95c4959bc47.jpg",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"_4-修改shell内容。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改shell内容。"}},[s._v("#")]),s._v(" 4，修改shell内容。")]),s._v(" "),t("p",[s._v("修改一下shell的执行内容，做一个简单判断，脚本如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$branch")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**********************************************"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**********************************************"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tagbak")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**********************************************"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**********************************************"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("如果你对Jenkins熟悉的话，那么看到这个地方，估计就已经能够知道，上边的功能是什么了。")]),s._v(" "),t("p",[s._v("我们的开发进行日常开发，然后进行日常构建，一切就走分支这一条了，没tag这边啥事儿，只不过在每次构建的时候，都创建一个与构建历史数一致的tag，为了不让这个tag浪费，那么我们就废物利用，通过这个自动生成的tag，实现了回滚的功能。")]),s._v(" "),t("p",[s._v("开发同学专注开发（branch），运维同学专注部署（deploy），一旦需要回滚（rollback），利用程序自动生成的tag（tag）来进行回滚咯。这，就是各有分工。")]),s._v(" "),t("p",[s._v("ok，最后是验证的时刻了。")]),s._v(" "),t("h2",{attrs:{id:"_3-验证。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证。"}},[s._v("#")]),s._v(" 3，验证。")]),s._v(" "),t("p",[s._v("验证也非常简单，通过三次构建即可验证：")]),s._v(" "),t("ul",[t("li",[s._v("构建一：初始内容，正常构建。")]),s._v(" "),t("li",[s._v("构建二：添加内容，正常构建。")]),s._v(" "),t("li",[s._v("构建三；直接回滚，验证结果。")])]),s._v(" "),t("h3",{attrs:{id:"_1-构建一。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建一。"}},[s._v("#")]),s._v(" 1，构建一。")]),s._v(" "),t("p",[s._v("为了更清晰的看实验效果，我将刚刚的历史清空，重打鼓另开张，新建一个项目进行测试。")]),s._v(" "),t("p",[s._v("现在准备出测试文件，内容如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5467f632533e422c.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("进行常规构建：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d0d35a6923ba5cfb.jpg",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"_2-构建二。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建二。"}},[s._v("#")]),s._v(" 2，构建二。")]),s._v(" "),t("p",[s._v("模拟开发，添加内容：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/308fa45b8d68c988.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("进行常规构建：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/baae22cb128fda9d.jpg",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"_3-构建三。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建三。"}},[s._v("#")]),s._v(" 3，构建三。")]),s._v(" "),t("p",[s._v("直接通过tag进行回滚。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e746ca8154b78369.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("然后查看构建结果：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bb81f51fe35aa1c2.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("注意我圈住的地方，基本上就是按我们所想的所走的，而结果，也正是我们所想要的。")]),s._v(" "),t("p",[s._v("本篇文章需要一定的基础，从而才能够顺畅阅读以及实践，除此之外，更需要大量的耐心，诚心，进行钻研学习，从而才能够真正在此，有所收获。")])])}),[],!1,null,null,null);t.default=e.exports}}]);