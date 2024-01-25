(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{660:function(s,n,a){"use strict";a.r(n);var t=a(0),r=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),n("p",[s._v("我们的项目标配使用"),n("code",[s._v("gradle")]),s._v("进行编译，我们也配置了"),n("code",[s._v("nexus")]),s._v("作为私服，理论上来说，不应该再会出现因包依赖的原因导致编译失败的情况，但是这个问题仍旧会偶尔发生，我解决过一两次，只看到通常失败的编译都是在开头的时候去 "),n("code",[s._v("plugins.gradle.org")]),s._v(" 拉包的情况，当时将该问题存疑，今天特来探析一下导致这个问题的根因。")]),s._v(" "),n("h2",{attrs:{id:"摸索"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#摸索"}},[s._v("#")]),s._v(" 摸索")]),s._v(" "),n("p",[n("strong",[s._v("简单分析：")]),s._v(" 理论上来说，当我们的"),n("code",[s._v("gradle")]),s._v("通过"),n("code",[s._v("build.gradle")]),s._v("将"),n("code",[s._v("repositories")]),s._v("指向私服地址之后，就不应该再出现任何一个第三方的私服地址才对，但gradle在这里就是异常头铁，偏偏会在开头请求一下官方地址。这是彼时遇到问题之后的一个原始的疑问！")]),s._v(" "),n("p",[n("strong",[s._v("缘起：")]),s._v(" 今天一位开发同学反馈说某项目在"),n("code",[s._v("gray环境")]),s._v("打包的时候出现编译失败的情况。我看到构建日志如下：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("+ gradle --no-daemon bootJar\n\nFAILURE: Build failed with an exception.\n\n* What went wrong:\nA problem occurred configuring root project "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'example'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not resolve all artifacts "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" configuration "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("':classpath'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not resolve org.springframework.boot:spring-boot-gradle-plugin:2.1.5.RELEASE.\n     Required by:\n         project "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" org.springframework.boot:org.springframework.boot.gradle.plugin:2.1.5.RELEASE\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not resolve org.springframework.boot:spring-boot-gradle-plugin:2.1.5.RELEASE.\n         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not parse POM https://plugins.gradle.org/m2/org/springframework/boot/spring-boot-gradle-plugin/2.1.5.RELEASE/spring-boot-gradle-plugin-2.1.5.RELEASE.pom\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not resolve org.springframework.boot:spring-boot-tools:2.1.5.RELEASE.\n               "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not resolve org.springframework.boot:spring-boot-tools:2.1.5.RELEASE.\n                  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not get resource "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://plugins.gradle.org/m2/org/springframework/boot/spring-boot-tools/2.1.5.RELEASE/spring-boot-tools-2.1.5.RELEASE.pom'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n                     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Could not HEAD "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://plugins.gradle.org/m2/org/springframework/boot/spring-boot-tools/2.1.5.RELEASE/spring-boot-tools-2.1.5.RELEASE.pom'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" closed connection during handshake\n\n* Try:\nRun with "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--stacktrace")]),s._v(" option to get the stack trace. Run with "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--info")]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--debug")]),s._v(" option to get "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" log output. Run with "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--scan")]),s._v(" to get full insights.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("通常遇到这种问题，我都会到对应构建的Jenkins服务器上，手动跑一次编译，然后ci机器再次打包就能过去了。这次使用同样手法将问题解决之后，我打算探究一下导致该问题的根因是什么。")]),s._v(" "),n("blockquote",[n("p",[s._v("后来了解到运维侧在打包的机器上有一个定时清理本地缓存的操作，是为了避免一些包依赖不更新的问题。所以当缓存清空之后，这些依赖就会重新下载，就可能因为网络原因而失败。")])]),s._v(" "),n("p",[s._v("首先看到了报错提示的包基本都是plugins，于是看了一眼build.gradle文件，可以看到在文件中有这样的配置声明：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("plugins "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id 'org.springframework.boot' version '"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v("."),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".RELEASE'\n    id 'java'\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("报错的提示也正是在拉取该插件的时候报错的。")]),s._v(" "),n("p",[s._v("所以，这里得到一个问题是：即便已经配置指向了私服，但是此处的plugins中的包拉取的时候仍旧绕过了私服。")]),s._v(" "),n("p",[s._v("这是为什么呢？")]),s._v(" "),n("p",[s._v("通过Google，找到了"),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1),s._v(" 对plugins功能的介绍，并且里边也介绍了"),n("a",{attrs:{href:"https://docs.gradle.org/current/userguide/plugins.html#sec:custom_plugin_repositories",target:"_blank",rel:"noopener noreferrer"}},[s._v("plugins的仓库指向"),n("OutboundLink")],1),s._v("，需要通过单独的配置文件进行配置：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" settings.gradle "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意需要把配置文件放到这个文件的开头，而非build.gradle中")]),s._v("\npluginManagement "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    repositories "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        maven "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            url "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./maven-repo'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        gradlePluginPortal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        ivy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            url "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./ivy-repo'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("这里我做了下测试，将如下配置添加到了项目对应的配置中：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" settings.gradle\npluginManagement "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    repositories "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        //本地资源库\n        mavenLocal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        //自定义maven仓库\n        maven "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aifocus-repository'")]),s._v("\n            url "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://nexus.eryajf.net/nexus/content/groups/public/'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("接着执行构建，发现如下报错：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("FAILURE: Build failed with an exception.\n\n* Where:\nBuild "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/data/gradle/example/build.gradle'")]),s._v(" line: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n* What went wrong:\nPlugin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot'")]),s._v(", version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.1.5.RELEASE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" was not found "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" any of the following sources:\n\n- Gradle Core Plugins "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("plugin is not "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.gradle'")]),s._v(" namespace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n- Plugin Repositories "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("could not resolve plugin artifact "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.boot:org.springframework.boot.gradle.plugin:2.1.5.RELEASE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Searched "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the following repositories:\n    MavenLocal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("file:/root/.m2/repository"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    aifocus-repository"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("http://nexus.eryajf.net/nexus/content/groups/public/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n* Try:\nRun with "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--stacktrace")]),s._v(" option to get the stack trace. Run with "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--info")]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--debug")]),s._v(" option to get "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" log output. Run with "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--scan")]),s._v(" to get full insights.\n\n* Get "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" at https://help.gradle.org\n\nBUILD FAILED "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 3s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("在私服仓库中，找不到这个包，需要注意的是，虽然通过"),n("code",[s._v("org.springframework.boot")]),s._v(" 能够搜索到包，但是这个包还有"),n("code",[s._v("gradle.plugin")]),s._v("的path，所以如下检索到的包并不符合条件。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/06/d12ea0825cebfefe.png",alt:""}})]),s._v(" "),n("p",[s._v("那么就需要将官方地址代理进来，此处要注意一个坑点在于，官方代理的正确地址是 https://plugins.gradle.org/m2/ 而非 https://plugins.gradle.org ，此处踩坑可见该"),n("a",{attrs:{href:"https://discuss.gradle.org/t/use-repository-manager-to-proxy-gradle-central-plugin-repository/34859/4",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[s._v("帖子")]),n("OutboundLink")],1),n("strong",[s._v("。")])]),s._v(" "),n("p",[s._v("国内一些镜像库也有plugin的镜像，所以这里直接配置了阿里的镜像仓库：https://maven.aliyun.com/repository/gradle-plugin/")]),s._v(" "),n("p",[s._v("当我把官方地址加入到私服之后，再次回来进行构建，可以看到这个插件通过我们的私服进行拉取了，而正确拉取之后，私服当中也缓存了该依赖，符合预期，喜大普奔！")]),s._v(" "),n("h2",{attrs:{id:"结论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" "),n("strong",[s._v("结论")])]),s._v(" "),n("p",[s._v("这个问题以后就变得简单了，所有使用gradle打包的项目，只要使用到了plugins，那么就应该在 settings.gradle 文件的开头，加上如下配置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pluginManagement {\n    repositories {\n        //本地资源库\n        mavenLocal()\n        //自定义maven仓库\n        maven {\n            name 'aifocus-repository'\n            url 'http://nexus.eryajf.net/nexus/content/groups/public/'\n        }\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("从此不会再有与plugins.gradle.org这个域名交互的情况出现，"),n("strong",[s._v("自然也与编译失败说拜拜了！")])])])}),[],!1,null,null,null);n.default=r.exports}}]);