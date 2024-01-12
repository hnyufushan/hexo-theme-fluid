(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{675:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("上次已经写过Jenkins与Git之间的一下关联，但是那篇文章阐之未尽，今天再来行文表一表Jenkins与Git分支之间的问题。")]),s._v(" "),t("p",[s._v("也是这中间有不少人一起探讨到关于项目分支的问题，彼时我对此没有深究，因此也是云里雾里，有人问起来，自己也是不敢确定性的告诉给人家这是什么。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/10f635f01a1cbcdb.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这是最尴尬的事情，有些东西你以为你懂着，其实经不起别人问上一问，而显然，经不起问的，必然也就证明掌握的不够牢靠。因此，深入研究一番是自不待言的。")]),s._v(" "),t("p",[s._v("这也是下午做的事情。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("1，在自己本地搭建了一个gitlab服务器，不仅仅为了这次测试，也为了以后各种倒腾之需。")])]),s._v(" "),t("li",[t("p",[s._v("2，顺道模拟开发学习了一波Git的使用。")])]),s._v(" "),t("li",[t("p",[s._v("3，验证以及总结Jenkins与Git分支之间的一些交互问题。")])])]),s._v(" "),t("p",[s._v("现在，直奔主题，不说其他。")]),s._v(" "),t("p",[s._v("首先说Jenkins与Git分支之间的交互，有两种（当然，可能有更多，只不过我暂时掌握这两种），一种是Jenkins用Jenkins自身的构建参数来实现，另一种是通过插件来实现。")]),s._v(" "),t("p",[s._v("之前发布的第四篇文章（"),t("a",{attrs:{href:"https://wiki.eryajf.net/pages/85.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins实战应用–Jenkins一个项目的构建"),t("OutboundLink")],1),s._v("），因为主题是构建一个项目，分支这里也就一笔带过了，带过的连我自己也没有深入进行思考，导致不少人在配置成功之后仍旧对Jenkins是如何发布其他分支的问题抱有疑惑，今天，就来解开这个疑惑。")]),s._v(" "),t("p",[s._v("现在来介绍这两种交互方式。")]),s._v(" "),t("h2",{attrs:{id:"_1-通过构建参数中的字符参数来实现。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过构建参数中的字符参数来实现。"}},[s._v("#")]),s._v(" 1，通过构建参数中的字符参数来实现。")]),s._v(" "),t("p",[s._v("我们来看看上次Jenkins这里是如何配置的。")]),s._v(" "),t("p",[s._v("今天是为了详解分支的问题，因此不计较项目的构建问题，我就在自己搭建的测试Gitlab上随便创建两个分支并写一些简单的内容，以供测试验证今天的问题。")]),s._v(" "),t("p",[s._v("首先来看一下这种字符参数在构建的时候是什么样的：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bfce266bb880a4a8.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("发布的时候，如果是默认的master分支，那么我们直接点击开始构建，就会构建master分支的代码了。")]),s._v(" "),t("p",[s._v("如果此时非master分支，那么删除掉Branch中的master，将要部署的分支填入点击构建就可以了。")]),s._v(" "),t("p",[s._v("那么这种选择分支的构建方式是怎么实现的呢？")]),s._v(" "),t("p",[s._v("先在参数化构建中添加字符参数：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f733922455eccea1.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("然后注意在Git连接处填入调用分支的变量名。")]),s._v(" "),t("p",[s._v("很多人说填入git连接之后总是报错啊")]),s._v(" "),t("p",[s._v("解决办法参考"),t("a",{attrs:{href:"https://wiki.eryajf.net/pages/562.html#_3-%E9%85%8D%E7%BD%AEgit%E8%BF%9E%E6%8E%A5%E6%97%B6%E6%8A%A5%E9%94%99%E6%80%8E%E4%B9%88%E5%8A%9E%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins连接gitlab报错怎么办？"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("那么我们来看Git连接处的配置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/237068e1f64e0b5a.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("注意图中框起来的地方，就是上边添加字符参数时所填写的名称变量Branch。注意前边的$符号不要少了。")]),s._v(" "),t("p",[s._v("此时我们来做一些简单构建来看看。")]),s._v(" "),t("p",[s._v("构建之前我们先来看下我准备的分支以及分支下的内容：")]),s._v(" "),t("h3",{attrs:{id:"_1-这是master分支。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-这是master分支。"}},[s._v("#")]),s._v(" 1，这是master分支。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f337020974037f4c.jpg",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"_2-这是dev分支。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-这是dev分支。"}},[s._v("#")]),s._v(" 2，这是dev分支。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c6e311d3e524d120.jpg",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"_3-这是liqilong分支。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-这是liqilong分支。"}},[s._v("#")]),s._v(" 3，这是liqilong分支。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/831e782b0b4fb668.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("那么我们先来构建一下master分支。")]),s._v(" "),t("p",[s._v("为了更清晰看到分支的变化，我们在项目的构建处添加两条命令：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9be0bc09039b2e78.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("现在去到项目中进行构建：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d13d04fe9f710425.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("然后去看控制台的输出内容：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/13567fd06d235a66.jpg",alt:"image"}})]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Started by user 李启龙  \nBuilding "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" workspace /root/.jenkins/workspace/test-branch  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-parse --is-inside-work-tree "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout=10  ")]),s._v("\nFetching changes from the remote Git repository  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config remote.origin.url http://192.168.96.23/root/testa.git "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout=10  ")]),s._v("\nFetching upstream changes from http://192.168.96.23/root/testa.git  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout=10  ")]),s._v("\nusing GIT_ASKPASS to "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" credentials   \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tags")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--progress")]),s._v(" http://192.168.96.23/root/testa.git +refs/heads/*:refs/remotes/origin/*  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-parse origin/master^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout=10  ")]),s._v("\nChecking out Revision 2ba088747e4b0e830fef235e01c0881a62fc58b2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.sparsecheckout "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout=10  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 2ba088747e4b0e830fef235e01c0881a62fc58b2  \nCommit message: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"更新 readme"')]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list --no-walk 2ba088747e4b0e830fef235e01c0881a62fc58b2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout=10  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" $ /bin/sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xe")]),s._v(" /usr/local/tomcat/temp/jenkins4544984219385266947.sh  \n+ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" /root/.jenkins/workspace/test-branch  \n/root/.jenkins/workspace/test-branch  \n+ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" readme  \nthis is master branch  \n \n构建master分支就可以看到这句话，而且构建出来的包就是master分支。  \nFinished: SUCCESS\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("此处把构建历史单摘出来，当然意味深远，上图中我们看到构建选择master分支，那么构建的内容就是master分支下的内容。")]),s._v(" "),t("p",[s._v("单摘出来，就详聊一下这个日志输出的意义吧：")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("ul",[t("li",[s._v("1，表示项目构建人事李启龙。")]),s._v(" "),t("li",[s._v("2，表示在此目录下进行的构建。")]),s._v(" "),t("li",[s._v("从第三行到第十五行都是对git的连接与操作，这里捡一些重要的来讲一下（其实是捡我知道的来讲下，不知道的也没法讲呀）。")]),s._v(" "),t("li",[s._v("4，从远程Git仓库读取更改。")]),s._v(" "),t("li",[s._v("10，表示本地构建的分支是master分支。")]),s._v(" "),t("li",[s._v("11，显示出本地构建的commit id.")]),s._v(" "),t("li",[s._v("13，根据commit id切换到对应的分支。")]),s._v(" "),t("li",[s._v("14，本地构建的commit message。")]),s._v(" "),t("li",[s._v("16，Jenkins临时生成一个构建脚本进行构建。")]),s._v(" "),t("li",[s._v("17，是打印我刚才的第一条命令。")]),s._v(" "),t("li",[s._v("18，是第一条命令的结果输出。")]),s._v(" "),t("li",[s._v("19，打印第二条命令。")]),s._v(" "),t("li",[s._v("20~22，第二条命令结果输出。")]),s._v(" "),t("li",[s._v("23，构建结果，成功。")])])]),s._v(" "),t("p",[s._v("那么我们马上来看下构建其他分支的操作与结果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2230fd35070f01bc.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("看看结果：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6dc6c39ce9c1f9ed.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("此处可以看到构建了对应的分支，而且在dev分支下工作了。")]),s._v(" "),t("p",[s._v("不过且慢，现在猛然想起来，我们一开始提的问题好像是两次构建之间，第二次构建把第一次构建的代码怎么着了呢。")]),s._v(" "),t("p",[s._v("好，我想到现在去Jenkins服务器的$WORKSPACE里边看个究竟。")]),s._v(" "),t("p",[s._v("直接cd到刚才的构建历史输出的目录。")]),s._v(" "),t("p",[s._v("接下来进入一小段点评节目：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@xdjenkins test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cd")]),s._v(" /root/.jenkins/workspace/test-branch  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@xdjenkins test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ls")]),s._v("\nreadme\t\t\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("评上：ok，果然只有readme一个人。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@xdjenkins test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" readme\nthis is dev branch\n \n如果选择构建的是dev分支，将会看到这里的内容。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("评上：内容也是dev的东东，而关于刚刚构建的master的，已经消失不见。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@xdjenkins test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" branch\n* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("detached from cf27c4b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("评上：什么鬼！")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@xdjenkins test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("detached from cf27c4b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  remotes/origin/dev\n  remotes/origin/liqilong\n  remotes/origin/master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("评上：略知一二了。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@xdjenkins test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" log\ncommit cf27c4b0f1f8ef8c5849cec63bf93bd1d0328e98\nAuthor: Administrator "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("admin@example.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":06:16 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n \n    更新 readme\n \ncommit 7179bb71ae6601154648e2d979b1474e2467dd38\nAuthor: eryajf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Linuxlql@163.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":47:35 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n \n    添加文件\n \ncommit 4c15546cc08c146d63c4f3ada647b4f0068928fb\nAuthor: eryajf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Linuxlql@163.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":45:31 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n \n    测试提交\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("评上：搜嘎，commit id对着嘞。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@xdjenkins test-branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$git")]),s._v(" show cf27c4b0f1f8e\ncommit cf27c4b0f1f8ef8c5849cec63bf93bd1d0328e98\nAuthor: Administrator "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("admin@example.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":06:16 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" +0800\n \n    更新 readme\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--git")]),s._v(" a/readme b/readme\nindex 64fdb4f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("5e4f328 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/readme\n+++ b/readme\n@@ -1,3 +1,3 @@\n this is dev branch\n \n-这次修改是为了验证新分支开发后提交。\n+如果选择构建的是dev分支，将会看到这里的内容。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("评上：行啦，知道你是什么情况啦。")])]),s._v(" "),t("p",[s._v("那么现在可以纠正一下刚才的一个错误，刚才说第二次构建就是在dev分支下工作了，而经过上边这波操作之后发现，事实并非如此，Jenkins是将dev分支上最新的那次"),t("code",[s._v("commit id")]),s._v("作为临时工作“"),t("code",[s._v("分支")]),s._v("”，从而保证代码的新鲜度。")]),s._v(" "),t("p",[s._v("哎呀，一下没收住，打破砂锅问到底的精神又冒出来了，可能有人觉得跑这么深没什么必要，但是因为有了这次没必要的深入，至少以后在遇到构建失败或者异常等问题时，知道在"),t("code",[s._v("$WORKSPACE")]),s._v("这里究竟曾发生过什么事儿。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("现在可以回答开头的问题了。Jenkins第一次构建是将对应分支的代码全部拉过来进行构建，第二次构建如果还是第一次的分支，那么只会同步分支变动的代码进行构建，如果两次构建分支不同，那么工作的顺序与一开始我的猜想是一致的，确认到新的分支，删除掉旧分支上的东西，然后把新分支上的拉取过来。并且，我估计，这个过程中，一样的代码，不会删掉。")])]),s._v(" "),t("p",[s._v("好了，问题找到答案了，现在去将第二种分支构建的方式完善了吧。")]),s._v(" "),t("h2",{attrs:{id:"_2-通过git-parameter插件实现选择分支进行构建。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过git-parameter插件实现选择分支进行构建。"}},[s._v("#")]),s._v(" 2，通过Git Parameter插件实现选择分支进行构建。")]),s._v(" "),t("p",[s._v("同样，先来看下这种方式的构建方式是怎样的：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0ff019d48c68d660.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("可以看到方框中直接把我项目的分支罗列了出来。构建的时候直接选择分支，然后进行构建就ok了。")]),s._v(" "),t("p",[s._v("那么这种方式是如何实现的呢？")]),s._v(" "),t("p",[s._v("首先去安装插件："),t("code",[s._v("Git Parameter")]),s._v(" ，就不过多废话了。")]),s._v(" "),t("p",[s._v("接着看图学技能：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e3918ab40c77a32f.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("通过插件中的配置，来实现构建时分支的选择。")]),s._v(" "),t("p",[s._v("简单测试一下，看看其效果：")]),s._v(" "),t("p",[s._v("在构建中选择哪个没有构建过的分支：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/91b36b928b7b0b9a.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("然后看一些构建日志：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e1599f73f262fdd8.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("与第一种构建方式如出一辙。")]),s._v(" "),t("p",[s._v("尾巴！")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("或许我们掌握一种方式能够成功就足够了\n甚至我们都不需要知道它是怎么成功的\n或者我们掌握多种方法把一件事儿完成\n在掌握一种方式之外的那种方式的过程中\n就已经对这个环节，了如指掌以至于用起来得心应手！")])])])}),[],!1,null,null,null);t.default=n.exports}}]);