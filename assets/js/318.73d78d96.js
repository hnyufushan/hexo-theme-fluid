(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{663:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言絮叨"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言絮叨"}},[a._v("#")]),a._v(" 前言絮叨")]),a._v(" "),t("p",[a._v("事实上之前是做过一些简单的文档总结的，但是太扣住“简单”这个主题了，因此基本上只能是一些辅助理解的东东，并不能算作教程类的。今天，就特别来把教程详细说明写出。")]),a._v(" "),t("p",[a._v("在教程以及文档方面，个人的一些心得就是，这是一个很有悖论的事情，教程肯定都是会了的人写出来的，而会了的人好像又不需要教程（注意是好像，因为遗忘之后又会需要），因此会了的人写的教程往往都是简之又简，不会的人往往看了会了的人写的教程，则蒙之又蒙。")]),a._v(" "),t("p",[a._v("因此，当我愿意认真写文档的时候，常常喜欢把自己当成白痴一样的来把教程写给自己，可能会耗费多一些心力，也会有一些啰嗦繁多，但是可以真正让人受益，又有什么可与此相比呢。")]),a._v(" "),t("h2",{attrs:{id:"官网及下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官网及下载"}},[a._v("#")]),a._v(" 官网及下载")]),a._v(" "),t("p",[a._v("Jenkins官方网站：http://jenkins-ci.org/。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/91bf002e27acf8fb.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("由于其安装包比较容易在官方进行下载，所以就不再繁琐的在百度云留存了。\n下载也非常简单，点击大大的"),t("a",{attrs:{href:"https://jenkins.io/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Download"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d92a0e98e493701a.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("左边是半年更新一次的稳定版，右边是与小米系统更新频率一样（每周一更新）的开发版本，用起来都差不太多。所以选择右边最下边的war包的方式下载，这样部署简单，管理方便，两全其美。\n一般直接在浏览器下载速度也不算慢，如果嫌慢，可以用迅雷进行下载，或者使用阿里云服务器复制链接进行wget下载，这里不多赘述了。")]),a._v(" "),t("h2",{attrs:{id:"架构简析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构简析"}},[a._v("#")]),a._v(" 架构简析")]),a._v(" "),t("p",[a._v("Jenkins持续构建部署工具是有一套完整的架构体系的。如图所示（注，图片来自网络）：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5bf36897c791232c.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("介绍：\n1， 需要用到的软件工具。\n代码库（SVN/Git），Jenkins，如果是Java项目，则还可能用到nexus（maven的私服仓库），maven（打包工具）。\n2， 整套的工作流程是：开发人员进行项目开发—-提交代码到代码库—-在Jenkins上进行部署构建—-原本繁琐的一系列操作，就这么被Jenkins给一条龙服务了。\n3， 这是网上的图，一般如果直接使用，则可以忽略掉docker镜像和镜像库两步，直接将发布包部署到相对应的服务器上就ok了。\n4， 一般公司至少都是有测试与生产环境两种（或者还会有预发的环境），两种环境最好分开部署两个Jenkins， 一方面利于权限管理，另一方面避免掉项目过多的误操作。我曾听一个同事说他们之前公司没有测试环境，直接拿线上当测试，每次发布，所有人都像如临大敌一样瞪大双眼监控着有没有问题，，，想想就可怕哈。")]),a._v(" "),t("h2",{attrs:{id:"正式部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正式部署"}},[a._v("#")]),a._v(" 正式部署")]),a._v(" "),t("p",[a._v("总览：\n1， 部署jdk。\n2， 部署tomcat。\n3， 部署Jenkins。\n4， 配置Jenkins。")]),a._v(" "),t("h3",{attrs:{id:"部署jdk。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署jdk。"}},[a._v("#")]),a._v(" 部署jdk。")]),a._v(" "),t("p",[a._v("下载地址：http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html")]),a._v(" "),t("p",[a._v("最新的版本已经是1.9，但是这里使用1.8版本的。注意下载的时候选中一下接受许可协议。然后找到对应版本进行下载。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/943518d70c07766d.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("安装步骤是：解压—-移动到对应目录下—-写入环境变量—–加载一下—-验证。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tar")]),a._v(" xf jdk.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mv")]),a._v(" jdk1.8.0_144/ /usr/local/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$vim")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/jdk1.8.0_144\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ROCKETMQ_HOME")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MAVEN_HOME")]),a._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$source")]),a._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$java")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-version")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" version "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_144"')]),a._v("\nJava"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" SE Runtime Environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_144-b01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nJava HotSpot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.144")]),a._v("-b01, mixed mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/862f131e06b04253.jpg",alt:"image"}})]),a._v(" "),t("h3",{attrs:{id:"部署tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署tomcat"}},[a._v("#")]),a._v(" 部署tomcat")]),a._v(" "),t("p",[a._v("下载地址：https://tomcat.apache.org/download-80.cgi\n这里下载的源码包。")]),a._v(" "),t("p",[a._v("步骤是：解压—-移动到对应目录下，都是非常简单的操作，就不过多废话。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tar")]),a._v(" xf apache-tomcat-8.0.47.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mv")]),a._v(" apache-tomcat-8.0.47 /usr/local/tomcat\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"部署jenkins。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署jenkins。"}},[a._v("#")]),a._v(" 部署Jenkins。")]),a._v(" "),t("p",[a._v("看操作")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cd")]),a._v(" /usr/local/tomcat/webapps/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost webapps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ls")]),a._v("\ndocs  examples  host-manager  manager  ROOT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost webapps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" *\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost webapps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rz")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v("\nrz waiting to receive.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost webapps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/bin/startup.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" tailf "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/logs/catalina.out\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("清空webapps目录下所有内容，导入Jenkins的war包，改名成默认的包名。启动，并监控启动日志的输出。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1906f0576a8ad019.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("大概一两分钟后，可以看到日志输出，Jenkins已经初始化安装成功，并且给出了管理员admin的登陆密码为ed7fbe822bcd4dec916d1dfdbf22f403，当然也可以在/root/.jenkins/secrets/initialAdminPassword文件中cat到。")]),a._v(" "),t("p",[a._v("接下来访问：192.168.96.26:8080")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b50708b084dd81b2.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("刚好，将刚才的密码填进去咯。然后稍候：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/581affcc21fe0bdf.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("有时候可能会因为一些代理，或者https，或者网络的各种莫名其妙，说不清楚的问题吧，会出现一些其他的画面，比如下边的这个就是博文里边一位读者朋友提供的：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c591f15e70ac725f.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("关于这个问题的解决，可以参考这里：https://blog.csdn.net/txyzqc/article/details/77885367")]),a._v(" "),t("p",[a._v("现在新版本的Jenkins已经对中文的支持非常全面了，所以使用的门槛也是越来越低，中文看起来到底还是要比外文亲切的呀。\n插件在Jenkins中的地位非常重要，详细的在后边进行表述，这个地方就选择人家推荐的进行安装。毕竟新手就暂时顺应安排咯。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/aa9619397529388a.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("静静等待，安装过程略慢。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ba11e5a35ddb3aae.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("新手总算入门了，这个地方不多设置，直接使用admin账号继续登入")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e5714efc54dea852.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("等下登陆之后改一下密码就好了。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6e606105f9e04d20.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("先修改admin的密码")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/40620c001bfe5f43.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("点进去有惊喜，具体怎么改，不说了。\n到这里安装基本上就完成了，详细选项的介绍以及配置，容后详述。")])])}),[],!1,null,null,null);t.default=e.exports}}]);