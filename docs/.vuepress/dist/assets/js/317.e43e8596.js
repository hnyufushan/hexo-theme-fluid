(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{662:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"絮叨几句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#絮叨几句"}},[s._v("#")]),s._v(" 絮叨几句")]),s._v(" "),a("p",[s._v("在上一篇的文章当中，基本上准备工作都做好了，现在就来真刀真枪来进行项目的构建了，在做真正的项目构建之前，有一些简单的准备工作还是要做的。")]),s._v(" "),a("p",[s._v("我这里就用公司里边的Java项目，全程演示一遍怎么完成这里边的配置。而如果是其他的诸如前端啊，PHP之类的项目，则就更简单了，ok，先来做一些准备工作。")]),s._v(" "),a("h3",{attrs:{id:"服务器配备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器配备"}},[s._v("#")]),s._v(" 服务器配备：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("Jenkins")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("192.168.96.26")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("Gitlab")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.96.27")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("Nexus")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.96.28")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("MySQL")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.96.29")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("Test Tomcat")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.96.17")])])])]),s._v(" "),a("p",[s._v("这个地方看似需要准备的挺多的，其实很多都是已经搞好了的。中间的三个基本上都是我们搭建好了之后，交付给开发人员或者DBA让他们进行操作，我们这里讲的，就只是对Jenkins以及另外一台上的tomcat之间的项目关系。")]),s._v(" "),a("p",[s._v("很多时候就是这样，把Jenkins作为单独的服务器，然后其他的服务器上，可能会有四到五台的tomcat来进行测试，这里模拟的就是这种测试环境，很多时候看到的网上的教程都是在Jenkins服务器本地直接进行的构建，其实都是一个道理，只要弄通了这整个流程的来龙去脉，能够抓住不变的东西，那么任凭其他的再怎么变，也都不足担心。")]),s._v(" "),a("h3",{attrs:{id:"现在需要在要操作的服务器上做一些准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在需要在要操作的服务器上做一些准备工作"}},[s._v("#")]),s._v(" 现在需要在要操作的服务器上做一些准备工作")]),s._v(" "),a("ul",[a("li",[s._v("1， 将Jenkins的秘钥拷贝到Git服务器，以使其在拉取代码的时候免密码操作。")]),s._v(" "),a("li",[s._v("2， 将Jenkins的秘钥拷贝到testtomcat服务器，以使其在同步等操作的时候免密码。")]),s._v(" "),a("li",[s._v("3， 在test tomcat 服务器添加与mysql的连接。我们公司是将mysql的ip写入到了test tomcat服务的hosts里边了。")]),s._v(" "),a("li",[s._v("4， 设置Jenkins上的maven与nexus的连接。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim /usr/local/maven/conf/settings.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/db211ae382b91b06.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("接着还需要将maven像jdk那样把环境写入到系统配置当中，不然等会儿编译可能会报错。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n \n在最底下添加。\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# maven所在的目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("M2_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/maven\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("M2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$M2_HOME")]),s._v("/bin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$M2")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("现在，终于，可以，进行一个项目的配置了。")]),s._v(" "),a("h2",{attrs:{id:"配置开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置开始"}},[s._v("#")]),s._v(" 配置开始")]),s._v(" "),a("p",[s._v("来到Jenkins界面中。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f3ddbe9e89a23076.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("输入项目的名称，选中构建一个自由风格的项目。")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("插曲：大家可能看到这张图带有水印与其他的不一样，因为这张是修改过程中后补上来的。在此要感谢一下读者cooki同学，详细情况在下边留言当中已有表明。嗟乎，人生能有这样的读者，夫复何求！！！")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7cf0f64b3eb0184e.jpg",alt:"image"}})]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("回归正题。")]),s._v(" "),a("p",[s._v("也可以在最低下复制其他的项目名称，直接copy其他的项目的配置，这样会省去很多相同的操作，非常nice。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b5654d902faf7027.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("点击确定，进行下一步")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/38683527e30a9a7b.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("选择参数化构建过程，这里都是拿干货来说了，其他不重要的，可以自己进行测试着玩。\n最后配置出来是这个样子")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3c68ae86ce04911d.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("基本上这样就能够满足测试之需求了，注意这里边的名称都是可以作为参数进行传递的。一般项目都是有部署与回滚的功能，而在部署当中，添加一个Git分支的选择，这对于开发来讲，是非常必要的。")]),s._v(" "),a("p",[s._v("接下来是代码管理")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c019c63ac09c5346.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("我们这里用的是Git代码库，首先把项目的链接复制过来，然后需要添加一个能够登陆的用户，下边add添加一个就行，如果这个地方总是返回128错误，应该是Jenkins添加秘钥到Git了，但是还没有进行过登陆的确认，这个时候到服务器上进行一次代码的clone，然后就会看到这个地方的报错消失了。")]),s._v(" "),a("p",[s._v("这个时候，先不做其他任何操作，我们直接保存设置，然后进行一次构建看看再说。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a43cfde5771284cf.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("点击进去")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bcc7454bcc9ad696.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("如果是第一次构建，那么这个地方会从nexus库当中下载很多需要的依赖包，但是这些并不是我想展示出来看的，真正想看到的是，Jenkins会在自己的工作目录当中创建这样一个项目，然后将所有的代码给拉取过来，随后进行编译的动作。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/09a11bc8c5a05262.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这个就是刚刚创建的项目名称，进去之后就能看到源代码了。\n源码当然是不能看咯，不过现在可以把目光拉到Jenkins刚才的构建界面来。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2ee657e2fc13874e.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这个构建项目需要依赖于antx.properties这个配置文件但是第一次构建还没有这个文件，因此会提示让更新一下，而Jenkins的web界面又是不提供这种交互功能的，于是来到服务器上进行编译并更新。（注意，以后如果开发人员再次对这个文件更新或者更改，部署的时候可能还会出现这样的情况，会一直提示让选择更新，却又选择不了，于是，需要告知开发人员，遇到这种情况，立马叉掉停止构建。）")]),s._v(" "),a("p",[s._v("到服务器上进入刚才的项目目录执行下边命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dmaven.test.skip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("稍等一会儿，会提示让更新：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/606a9120e9793b0d.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("输入y q y就行了，然后会保存在root目录下，如下图中所展示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/368e557b3d84bdab.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("接着就会看到编译成功的界面")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1ca90777d24fa794.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("注意：现在这种操作逻辑呢，是Jenkins将代码从Git服务器拉去到Jenkins服务器上，然后在Jenkins服务器本机上进行编译的操作，比较建议这样的操作，因为Jenkins服务器相对于那些可能有四五个tomcat在跑着的服务器来说，压力会小很多很多，因此建议在Jenkins编译然后将war包同步到测试服务器。")]),s._v(" "),a("p",[s._v("编译完成之后，会在相应的目录下边生成一个war包，具体是什么目录，则由开发人员在代码当中定义的，不过一般规范化的话，会在web/target下")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f6a7954430f7a385.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("那么，再将这个包拷到测试服务器对应目录下，重启tomcat不就行了，事实上就是这样的，现在我们回到Jenkins的web界面来将这些事儿给完成了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b9b4fd7fe5b8d0ef.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("在构建界面找到Execute shell，可能上级目录略有不同，但是找到这个就对了，将构建的脚本进去。脚本内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git checkout new_website_dev_20160430")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git pull")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mvn clean package -Dmaven.test.skip=true")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/tomcat/WAR   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注意这个目录对方服务器（也就是test tomcat服务器）默认没有，需要创建")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("MVN-SCP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nchattr +i /root/antx.properties\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("\nmvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dmaven.test.skip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\nchattr "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" /root/antx.properties\n \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("/web/target/ROOT.war root@192.168.96.17:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$APP_DIR")]),s._v("/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ne")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\033[31m[ error ] Failed to scp the ROOT.war\\033[0m'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MVN & SCP"')]),s._v("\n  MVN-SCP\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.96.17 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo "')]),s._v("调用部署"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" && /usr/local/scripts/deploy.sh '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mode")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("rollback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.96.17 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo "')]),s._v("调用部署"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" && /usr/local/scripts/deploy.sh '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mode")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        deploy\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n rollback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rollback\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(' {deploy|rollback}"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("p",[s._v("这里的脚本主要就是完成两件事情，首先把本地拉取的代码进行编译，然后把编译好了的war包传到远程tomcat服务器，接着调用远程服务器的部署脚本（这个脚本下边会列出），这些操作都并不复杂，如果对Linux服务器所有目录结构以及shell脚本熟悉的话。更多的，则就是细心的配置了，很多时候出问题，基本上都是变量不统一或者脚本调用有误。")]),s._v(" "),a("p",[s._v("刚才说了部署的时候调用了一下远程的部署脚本，那么在远程服务器上的脚本是怎样的呢，是这样的：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tomcat_dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/tomcat  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bak_dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/WAR_backup  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y%m%d%H%M%S"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("stop_tomcat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" tomcat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("start_tomcat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n   /bin/bash  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/bin/startup.sh  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stop_tomcat"')]),s._v("  \n   stop_tomcat  \n     \n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup_war"')]),s._v("  \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bak_dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bak_dir")]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT.war "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bak_dir")]),s._v("/ROOT_"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%y%m%d%H%M%S"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".war "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mv "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("war,warbak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm -rf '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v('/webapps/ROOT"')]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/WAR/ROOT.war "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \n \n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_tomcat"')]),s._v("  \n   start_tomcat  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("rollback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stop_tomcat"')]),s._v("  \n   stop_tomcat  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \n \n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollback"')]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT.war "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("warbak,war"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n \n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_tomcat"')]),s._v("  \n   start_tomcat  \n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n   deploy  \n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy success!!!"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n   rollback  \n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollback success!!!"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(' {deploy | rollback}"')]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br")])]),a("p",[s._v("而这个脚本的内容也是非常简单的，无论是部署还是回滚，都首先把服务停掉，然后进行war的对应操作，最后再启动服务。")]),s._v(" "),a("p",[s._v("如果说这个地方tomcat启动失败。那么就从前往后一步一步捋，先看Jenkins构建是否正常，然后再看tomcat启动日志，数据库连接是否正常，相关的环境配置是否妥当。")]),s._v(" "),a("p",[a("code",[s._v("需要注意一点：")]),s._v("这个脚本放置的位置需要与上一个脚本里边指向的位置（"),a("code",[s._v("/usr/local/scripts")]),s._v("）以及名称（"),a("code",[s._v("deploy.sh")]),s._v("）相同。")]),s._v(" "),a("p",[s._v("当然，这个地方的两个小脚本，只是作为一个示例来讲解出利用脚本与Jenkins的配合，实际生产还应该结合自己环境情况进行不同的调整。")]),s._v(" "),a("p",[s._v("那么，整个一系列的部署就是这个样子的。")]),s._v(" "),a("p",[s._v("最后，摘抄一段网上看到的表述Jenkins优点的几点：\n摘抄自http://blog.csdn.net/u013602835/article/details/54632843")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("关于这4点，实际使用中还是比较方便的：")]),s._v(" "),a("ul",[a("li",[s._v("1，构建项目自动化打包可以省去开发人员好多时间，重要的是，Jenkins为我们维护了一套高质量可用的代码，而且保证了一个纯净的环境。我们经常会出现由于本地配置出错而导致打包失败的情况。现在Jenkins就是一个公平的评判者，它无法正确的编译出ipa，那就是有编译错误或者配置问题。开发人员没必要去争论本地是可以运行的，拉取了谁谁谁的代码以后就不能运行了。共同维护Jenkins的正常编译，因为Jenkins的编译环境比我们本地简单的多，它是最纯净无污染的编译环境。开发者就只用专注于编码。这是给开发者带来的便利。")]),s._v(" "),a("li",[s._v("2，这个可以用来自动化测试。在本地生成大批的测试用例。每天利用服务器不断的跑这些用例。每天每个接口都跑一遍。看上去没必要，但是实际上今天运行正常的系统，很可能由于今天的代码改动，明天就出现问题了。有了Jenkins可以以天为单位的进行回归测试，代码只要有改动，Jenkins就把所有的回归测试的用例全部都跑一遍。在项目工期紧张的情况下，很多情况测试都不是很重视回归测试，毕竟很可能测一遍之后是徒劳的“无用功”。然而由于回归测试不及时，就导致到最后发版的时候系统不可用了，这时候回头查找原因是比较耗时的，查看提交记录，看到上百条提交记录，排查起来也是头疼的事情。以天为单位的回归测试能立即发现问题。测试人员每天可以专注按单元测试，一周手动一次回归测试。这是给测试者带来的便利。")]),s._v(" "),a("li",[s._v("3，这个是静态代码分析，可以检测出很多代码的问题，比如潜在的内存泄露的问题。由于Jenkins所在环境的纯净，还是可以发现一些我们本地复杂环境无法发现的问题，进一步的提高代码质量。这是给质检带来的便利。")]),s._v(" "),a("li",[s._v("4，随时部署。Jenkins在打包完成之后可以设定之后的操作，这个时候往往就是提交app到跑测试用例的系统，或者部署到内测平台生成二维码。部署中不能安装等一些低级问题随之立即暴露。测试人员也只需要扫一下二维码即可安装，很方便。这也算是给测试带来的便利。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);