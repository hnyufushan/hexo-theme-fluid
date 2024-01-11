(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{680:function(a,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("当程序员确认可以发布版本，在由运维人员发布成功之后，测试人员发现刚刚发布版本有问题时，严重的，则需要进行回滚操作了。")]),a._v(" "),s("p",[a._v("对于程序员以及领导来说，回滚只不过是线上业务出现问题的时候一句话而已，但是对于运维人员来说，回滚则是平时就要做好准备的事情，不仅要做好准备，更要有经过演练。")]),a._v(" "),s("p",[a._v("我就曾有过自以为脚本方面都是梳理完整了放进Jenkins里，突然一天领导那边说需要回滚一下子，我当然觉得没有问题咯，于是兴致勃勃的跑去进行了回滚的操作，最后却发现，压根儿就没有成功，这就非常尴尬啦，顿时就脸红脖子粗起来，脖子粗也没用呀，问题总还要解决，于是最后只得手动打包，进行了一次原始部署了。")]),a._v(" "),s("p",[a._v("因此，回滚是一件闲时准备，战时不慌的操作，非常重要了。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a8f04c8f003b90ab.jpg",alt:"image"}})]),a._v(" "),s("p",[a._v("我这里提到的回滚，都是基于Jenkins来进行部署考虑的，通过我个人对Jenkins的理解，大致分有以下方法可供选择：")]),a._v(" "),s("h2",{attrs:{id:"_1-gitlab代码回滚。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-gitlab代码回滚。"}},[a._v("#")]),a._v(" 1，gitlab代码回滚。")]),a._v(" "),s("p",[a._v("由程序员先将Git的版本回退到上一个版本，然后再一次进行部署。就实现了上个版本回退。")]),a._v(" "),s("p",[a._v("但是这种情形很容易受到影响，如果过程中有其他人进行过提交，版本不容易定位，如果牵扯到一些数据库的问题，就更加复杂，极有可能出现一些无法控制的问题，因此这是一种十分不推荐也不可取的方式。但是据我了解到一些公司就曾采用过这种方式来进行回滚的操作，想起来也是十分让人难以理解的。")]),a._v(" "),s("p",[a._v("好了废话不多说，进入今天正题。")]),a._v(" "),s("h2",{attrs:{id:"_2-脚本方式回滚。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-脚本方式回滚。"}},[a._v("#")]),a._v(" 2，脚本方式回滚。")]),a._v(" "),s("p",[a._v("在Jenkins部署脚本当中加入"),s("code",[a._v("git rev-parse HEAD")]),a._v("命令记录每次发布的版本的唯一"),s("code",[a._v("版本号")]),a._v("，并将此记录在一个"),s("code",[a._v("log")]),a._v("文件里，如果需要回滚，则由脚本取出上一次发布的版本号（命令为："),s("code",[a._v("tail -n 2 version.log | head -n 1")]),a._v("）进行版本的回退，而后在回退的基础上再发布即可。")]),a._v(" "),s("p",[a._v("这是一种非常保险，也绝对靠谱的一种方式了，非常非常推荐。")]),a._v(" "),s("p",[a._v("唯一的缺点，大概可能就是需要重新部署一次有点耗时间，对于某些高访问量（时间就是金钱）的线上业务来说，显得有点耽误工夫了。")]),a._v(" "),s("p",[a._v("具体的这种回滚方式的相关脚本以及思路的参考，我在另一篇文章当中已经写出，可以"),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/639.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击这里进行跳转浏览"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"_3-war包回滚。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-war包回滚。"}},[a._v("#")]),a._v(" 3，war包回滚。")]),a._v(" "),s("p",[a._v("在每一次发布部署的同时，将每一个部署的（JAVA）war包按时间进行备份，然后再备份一个紧邻的上次发布的bak包，如果需要紧急回滚，则直接将上一个包替换当前包即可。由于一般回滚不会回滚到很久以前的版本，所以这里的备份包，保留五个即可，多余的利用脚本进行删除，避免了时间长占用空间过大的问题。")]),a._v(" "),s("p",[a._v("思路基本如上，我这里列出一个简单脚本仅供参考。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#author:eryajf")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#time:2018-7")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("project")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("code_dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root/project/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("tomcat_dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/tomcat_"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ROOTWAR_dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/WAR\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bakdir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/bak_dir\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("MAVEN_CODE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /root/project/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v("\n   mvn clean "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dmaven.test.skip")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ne")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\033[31m[ error ] Failed to maven the code\\033[0m'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/WAR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/WAR\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$code_dir")]),a._v("/51fbadmin-web/target/ROOT.war "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/WAR\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MAVEN_CODE"')]),a._v("\n   MAVEN_CODE\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$bakdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$bakdir")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"backup"')]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ROOTWAR_dir")]),a._v("/ROOT.war "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps/ROOT.war "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps/ROOT.warbak "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$bakdir")]),a._v("/ROOT_"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%y%m%d%H%M%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(".war\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps/ROOT."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("war,warbak"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"stop tomcat_'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $2}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps/ROOT "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ROOTWAR_dir")]),a._v("/ROOT.war "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"start tomcat_'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" /bin/bash /usr/local/tomcat_"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v("/bin/startup.sh\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("rollback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"stop tomcat_'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $2}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps/ROOT.war "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps/ROOT\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tomcat_dir")]),a._v("/webapps/ROOT."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("warbak,war"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"start tomcat_'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" /bin/bash /usr/local/tomcat_"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$project")]),a._v("/bin/startup.sh\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'deploy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        deploy\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rollback'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        rollback\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   *"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Usage: '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$0")]),a._v(' {deploy | rollback}"')]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("esac")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br")])]),s("p",[a._v("因为这个脚本是一个最后环节的，所以我简单说明一下：")]),a._v(" "),s("p",[a._v("1，脚本承接Jenkins处传递过来的两个参数，一个是mode的值，一个是project的值，mode决定是部署还是回滚，project则决定了是对哪个项目进行操作。\n2，部署的时候，先将上次备份的bak包放进一个专门存放old包的目录下，将正在用的包备份成bak包，然后进行常规的部署。\n3，如果回滚，则直接将bak还原回来，即达到回滚目的。")]),a._v(" "),s("p",[a._v("这种简洁高效，非常好用。只要在部署的时候将对应的包进行很好的安置，事情都会非常好处理的。当然了，还少一个定期清理目录下包数量的脚本，别急，您可以参考我的另外一篇文章："),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/531.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("如何让不断增加的目录只保留五个文件？"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"_4-tag回滚。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-tag回滚。"}},[a._v("#")]),a._v(" 4，tag回滚。")]),a._v(" "),s("p",[a._v("这种回滚方案配置非常简单，而且实用性也非常强，已经在另外一篇文章中进行发布，如需浏览，可以点击跳转："),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/1676.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Jenkins利用tag方式进行回滚！"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);