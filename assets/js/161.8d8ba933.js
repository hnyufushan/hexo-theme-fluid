(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{506:function(s,a,t){"use strict";t.r(a);var r=t(0),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-介绍。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍。"}},[s._v("#")]),s._v(" 1，介绍。")]),s._v(" "),a("p",[s._v("pinpoint 是开源在 github 上的一款 APM 监控工具，它是用 Java 编写的，用于大规模分布式系统监控。它对性能的影响最小（只增加约 3％资源利用率），安装 agent 是无侵入式的，只需要在被测试的 Tomcat 中加上 3 句话，打下探针，就可以监控整套程序了。这篇 Blog 主要是想记录一下它安装的过程，方便日后查阅。")]),s._v(" "),a("h2",{attrs:{id:"_2-开源-apm-架构对比。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开源-apm-架构对比。"}},[s._v("#")]),s._v(" 2，开源 APM 架构对比。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/cc453efb5fe30000.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_3-pinpoint-架构。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-pinpoint-架构。"}},[s._v("#")]),s._v(" 3，pinpoint 架构。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7daeac4fcc54bf0f.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_4-相关软件下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-相关软件下载"}},[s._v("#")]),s._v(" 4，相关软件下载")]),s._v(" "),a("h3",{attrs:{id:"_1-hbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-hbase"}},[s._v("#")]),s._v(" 1，hbase")]),s._v(" "),a("p",[s._v("下载地址：http://archive.apache.org/dist/hbase/1.1.5/")]),s._v(" "),a("h3",{attrs:{id:"_2-pinpoint-相关包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-pinpoint-相关包"}},[s._v("#")]),s._v(" 2，pinpoint 相关包")]),s._v(" "),a("p",[s._v("下载地址：https://github.com/naver/pinpoint/releases/")]),s._v(" "),a("h3",{attrs:{id:"_3-汇总进百度云"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-汇总进百度云"}},[s._v("#")]),s._v(" 3，汇总进百度云")]),s._v(" "),a("p",[s._v("因为 pinpoint 是在 GitHub 上，下载相当慢，因此这里整理到百度云方便下载。")]),s._v(" "),a("p",[s._v("其中提取码可通过如下方式进行获取:")]),s._v(" "),a("p",[s._v("百度云链接提取码：228k")]),s._v(" "),a("h2",{attrs:{id:"_5-部署-hbase。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-部署-hbase。"}},[s._v("#")]),s._v(" 5，部署 hbase。")]),s._v(" "),a("p",[s._v("环境依赖：jdk。需要在以下操作之前解决好此依赖问题。")]),s._v(" "),a("p",[s._v("pinpoint 收集来的测试数据，主要是存在 Hbase 数据库的。所以它可以收集大量的数据，可以进行更加详细的分析。")]),s._v(" "),a("h3",{attrs:{id:"_1-解压部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解压部署"}},[s._v("#")]),s._v(" 1，解压部署")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf hbase-1.1.5-bin.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/ishangjie/pinpoint\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" hbase-1.1.5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/ishangjie/pinpoint/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-修改-hbase-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改-hbase-配置"}},[s._v("#")]),s._v(" 2，修改 hbase 配置")]),s._v(" "),a("p",[s._v("1，配置 java 环境信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hbase-1.1.5/conf/hbase-env.sh\n \n在文件尾部加入下边配置\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/jdk1.8.0_144\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("2，配置数据存储路径。")]),s._v(" "),a("p",[s._v("这步不建议操作，很奇怪我做了之后反而不能用了！")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hbase-1.1.5/conf/hbase-site.xml\n \n修改尾部文件内容如下：\n \n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hbase.rootdir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("file:///usr/local/ishangjie/pinpoint/hbase-1.1.5/hbase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_3-启动-hbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动-hbase"}},[s._v("#")]),s._v(" 3，启动 hbase")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./hbase-1.1.5/bin/start-hbase.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看 Hbase 是否启动成功，如果启动成功的会看到”HMaster” 的进程")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ald-19-server bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jps")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5108")]),s._v(" Jps\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22775")]),s._v(" Bootstrap\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23448")]),s._v(" Bootstrap\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4686")]),s._v(" HMaster\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("也可以通过访问其服务来确认是否成功。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://192.168.10.19:16010/",target:"_blank",rel:"noopener noreferrer"}},[s._v("192.168.10.19:16010"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_4-默认数据初始化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-默认数据初始化。"}},[s._v("#")]),s._v(" 4，默认数据初始化。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./hbase-1.1.5/bin/hbase shell /opt/hbase-create.hbase\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("初始数据脚本")]),s._v("：")]),s._v(" "),a("p",[s._v("脚本已放置在个人 Github 中，点击可跳转查看。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/eryajf/shellabout/blob/master/hbase-create.hbase",target:"_blank",rel:"noopener noreferrer"}},[s._v("初始数据脚本"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("稍等一分钟，会有一个初始的过程。完成之后可以进入看一下数据是否成功导入。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./hbase-1.1.5/bin/hbase shell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入”"),a("code",[s._v("status 'detailed'")]),s._v("“可以查看刚才初始化的表，是否存在.")]),s._v(" "),a("p",[s._v("或者通过 web 查看是否成功。")]),s._v(" "),a("p",[s._v("http://192.168.10.19:16010/master-status")]),s._v(" "),a("h2",{attrs:{id:"_6-部署-pinpoint-管理端。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-部署-pinpoint-管理端。"}},[s._v("#")]),s._v(" 6，部署 pinpoint 管理端。")]),s._v(" "),a("h3",{attrs:{id:"_1-部署。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署。"}},[s._v("#")]),s._v(" 1，部署。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" pinpoint-collector-1.8.0-RC1.war /usr/local/ishangjie/pinpoint/tomcat-collector/webapps/ROOT.war\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-启动。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动。"}},[s._v("#")]),s._v(" 2，启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/usr/local/ishangjie/pinpoint/tomcat-collector/bin/startup.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过日志查看启动是否正常。")]),s._v(" "),a("h2",{attrs:{id:"_7-部署-pinpoint-的-web-端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-部署-pinpoint-的-web-端"}},[s._v("#")]),s._v(" 7，部署 pinpoint 的 web 端")]),s._v(" "),a("h3",{attrs:{id:"_1-部署。-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署。-2"}},[s._v("#")]),s._v(" 1，部署。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" pinpoint-web-1.8.0-RC1.war /usr/local/ishangjie/pinpoint/tomcat-web/webapps/ROOT.war\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-启动。-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动。-2"}},[s._v("#")]),s._v(" 2，启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/usr/local/ishangjie/pinpoint/tomcat-web/bin/startup.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-一些说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-一些说明"}},[s._v("#")]),s._v(" 3，一些说明")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ald-19-server logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ll")]),s._v(" /usr/local/ishangjie/pinpoint/tomcat-web/webapps/ROOT/WEB-INF/classes/\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("889")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 applicationContext-cache.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3684")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 applicationContext-dao-config.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2762")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 applicationContext-datasource.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8679")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 applicationContext-hbase.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("487")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 applicationContext-web-namespace.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("942")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 applicationContext-websocket.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10507")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 applicationContext-web.xml\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" 09:17 batch\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("149")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 batch.properties\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" root root    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" 09:17 com\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("682")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 ehcache.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1125")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 hbase.properties\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("154")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 jdbc.properties\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3189")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 log4j.xml\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" 09:17 mapper\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1563")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 mybatis-config.xml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3690")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 pinpoint-web.properties\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("157")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 project.properties\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2429")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":33 servlet-context.xml\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" 09:17 sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ul",[a("li",[s._v("hbase.properties 配置我们 pp-web 从哪个数据源获取采集数据，这里我们只指定 Hbase 的 zookeeper 地址。")]),s._v(" "),a("li",[s._v("jdbc.properties pp-web 连接自身 Mysql 数据库的连接认证配置。")]),s._v(" "),a("li",[s._v("sql 目录 pp-web 本身有些数据需要存放在 MySQL 数据库中，这里需要初始化一下表结构。")]),s._v(" "),a("li",[s._v("pinpoint-web.properties 这里 pp-web 集群的配置文件，如果你需要 pp-web 集群的话。")]),s._v(" "),a("li",[s._v("applicationContext-* .xml 这些文件在后续的调优工作中会用到。")]),s._v(" "),a("li",[s._v("log4j.xml 日志相关配置。")])]),s._v(" "),a("p",[s._v("此时可以根据配置的 web 服务端口进行访问了。")]),s._v(" "),a("p",[s._v("http://192.168.10.19:8180/#/main")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/502c470008d0c53e.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这个地方我想，控制节点与 web 是可以使用同一个 tomcat 的，然后用一个端口不用的目录进行访问。")]),s._v(" "),a("h2",{attrs:{id:"_8-客户端部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-客户端部署"}},[s._v("#")]),s._v(" 8，客户端部署")]),s._v(" "),a("p",[s._v("客户端是整个监控系统成立的抓手，通过程序启动的时候指定到客户端的程序，从而将数据发送到控制节点保存到 hbase，然后再由 web 端展示出来。")]),s._v(" "),a("h3",{attrs:{id:"_1-部署。-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署。-3"}},[s._v("#")]),s._v(" 1，部署。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" pinpoint-agent-1.8.0-RC1.tar.gz /usr/local/ishangjie/pinpoint/pp-agent\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置。"}},[s._v("#")]),s._v(" 2，配置。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("  /usr/local/ishangjie/pinpoint/pp-agent/pinpoint.config\n \n修改collector.ip为对应部署的机器（在第8行）\n\t\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("profiler.collector.ip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.19\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-让程序加载客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-让程序加载客户端"}},[s._v("#")]),s._v(" 3，让程序加载客户端")]),s._v(" "),a("p",[s._v("1，如果是 tomcat 方式启动。")]),s._v(" "),a("p",[s._v("修改启动文件配置信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/tomcat/bin/catalina.sh\n\t\n在文件20行处加入如下内容：\n\t\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -javaagent:/usr/local/ishangjie/pinpoint/pp-agent/pinpoint-bootstrap-1.8.0-RC1.jar"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -Dpinpoint.agentId=26test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_OPTS")]),s._v(' -Dpinpoint.applicationName=26test"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("然后启动 tomcat，数据就会推送过去了。")]),s._v(" "),a("p",[s._v("2，如果是微服务方式启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" -javaagent:/usr/local/ishangjie/pinpoint/pp-agent/pinpoint-bootstrap-1.8.0-RC1.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dpinpoint.agentId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("-gateway "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dpinpoint.applicationName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("-gateway "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xms128m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xmx128m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:PermSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("128M "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:MaxPermSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("128m test.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--spring.profiles.active")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动的时候将对应参数加上即可。")]),s._v(" "),a("h3",{attrs:{id:"_4-网络问题排查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-网络问题排查"}},[s._v("#")]),s._v(" 4，网络问题排查")]),s._v(" "),a("p",[s._v("如果是异地主机监控，那么可以通过下边方式进行检测网络连通性是否可用。")]),s._v(" "),a("p",[s._v("参考官网：http://naver.github.io/pinpoint/troubleshooting_network.html")]),s._v(" "),a("p",[s._v("使用如下命令进行检测：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" pinpoint-tools-1.8.0-RC1.jar /usr/local/ishangjie/pinpoint/pp-agent/pinpoint.config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中的 jar 包在 agent 的 tool 目录下。")]),s._v(" "),a("p",[s._v("如果看到如下输出，则说明可用。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("UDP-STAT:// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.19\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.19:9995 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n \nUDP-SPAN:// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.19\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.19:9996 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n \nTCP:// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.19\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.19:9994 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_9-监控效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-监控效果"}},[s._v("#")]),s._v(" 9，监控效果")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/367f1d17ad893c50.jpg",alt:"image"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/65df33ab8acf8fea.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_10-参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-参考链接"}},[s._v("#")]),s._v(" 10，参考链接")]),s._v(" "),a("p",[s._v("1，"),a("a",{attrs:{href:"https://www.cnblogs.com/yyhh/p/6106472.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("pinpoint 安装部署"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("2，[APM pinpoint 部署](http://tonylit.me/2018/04/13/APM pinpoint 部署/)")]),s._v(" "),a("p",[s._v("3，"),a("a",{attrs:{href:"https://naver.github.io/pinpoint/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);