(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{714:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("以往都是纸上谈兵，毕竟事情也都由部门其他小伙伴承担了，因此自己虽然也整理了笔记，当真的需要部署起来的时候，却发现并没有这个能力，这次也几经磨难，总算修成正果，特此记录一下。")]),s._v(" "),a("p",[s._v("首先来快速将一个简易的环境部署起来。\n其中防火墙关闭，selinux关闭等的就不多说了，系统是CentOS-7.3，干净而且初始化过了的环境。")]),s._v(" "),a("h3",{attrs:{id:"_1-准备工作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作。"}},[s._v("#")]),s._v(" 1，准备工作。")]),s._v(" "),a("ul",[a("li",[s._v("安装一些依赖包。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lrzsz "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" ntpdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ntpdate "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" cn.pool.ntp.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里java环境是非常重要的，如果不通过yum安装，源码方式也是可以的。但要注意配置好环境变量。")]),s._v(" "),a("ul",[a("li",[s._v("配置yum源。")])]),s._v(" "),a("p",[s._v("添加源：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/yum.repos.d/elk.repo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[elasticsearch-6.x]\nname=Elasticsearch repository for 6.x packages\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("导入key：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--import")]),s._v(" https://artifacts.elastic.co/GPG-KEY-elasticsearch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("如果执行这一步报错，则有可能是主机时间问题，可以同步一下主机时间，再执行！")])]),s._v(" "),a("blockquote",[a("p",[s._v("注：一开始我想着把elk三个安装包都缓存下来，这样以后安装起来就会方便多了，于是我这么做了，但是后来发现，经过缓存的包安装的elk集群，使用的时候是一种没有授权的状态，后来想起正常安装时有这样一个导入key的操作，思来想去，大概就是跟这一步有关系了。最后还是老老实实的通过这样一个流程方式进行安装了。")])]),s._v(" "),a("h3",{attrs:{id:"_2-安装elasticsearch。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装elasticsearch。"}},[s._v("#")]),s._v(" 2，安装elasticsearch。")]),s._v(" "),a("p",[s._v("直接yum安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" elasticsearch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl daemon-reload\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" elasticsearch.service\nsystemctl start elasticsearch.service\nsystemctl status elasticsearch.service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" localhost:9200\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("调整一下配置文件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@elk ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^#|^$"')]),s._v(" /etc/elasticsearch/elasticsearch.yml\ncluster.name: my-application\nnode.name: node-1\npath.data: /logs/elasticsearch6\npath.logs: /logs/elasticsearch6/log\nnetwork.host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nhttp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\ndiscovery.zen.ping.unicast.hosts: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"elk-node1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndiscovery.zen.minimum_master_nodes: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nxpack.security.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("cluster.name")]),s._v("：自定义集群名，相同集群内的节点设置相同的集群名")]),s._v(" "),a("li",[a("code",[s._v("node.name")]),s._v("：自定义节点名，建议统一采用节点hostname")]),s._v(" "),a("li",[a("code",[s._v("path.data")]),s._v("：data存储路径，这里更改成自定义以应对日志的big。")]),s._v(" "),a("li",[a("code",[s._v("path.logs")]),s._v("：log存储路径，是为es自己的日志。")]),s._v(" "),a("li",[s._v("注意创建上边两项定义的两个文件目录。否则会启动失败。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /logs/elasticsearch6/log\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /logs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" elasticsearch.elasticsearch elasticsearch6/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("注意要更改对应目录的权限，否则es启动会报如下错误。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@elk logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$systemctl")]),s._v(" status elasticsearch\n● elasticsearch.service - Elasticsearch\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/elasticsearch.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: failed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Result: exit-code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 5min ago\n     Docs: http://www.elastic.co\n  Process: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/share/elasticsearch/bin/elasticsearch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PID_DIR}")]),s._v("/elasticsearch.pid "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--quiet")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/FAILURE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/FAILURE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48,084 main ERROR Null object returned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("RollingFile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Appenders.\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48,084 main ERROR Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" appender "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rolling"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logger config "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48,084 main ERROR Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" appender "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_indexing_slowlog_rolling"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logger config "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.indexing.slowlog.index"')]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48,084 main ERROR Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" appender "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"audit_rolling"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logger config "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.elasticsearch.xpack.security....gAuditTrail"')]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48,084 main ERROR Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" appender "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_search_slowlog_rolling"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logger config "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.search.slowlog"')]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48,084 main ERROR Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" appender "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deprecated_audit_rolling"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logger config "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.elasticsearch.xpac...gAuditTrail"')]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79428")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-12-14 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48,085 main ERROR Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" appender "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deprecation_rolling"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logger config "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.elasticsearch.deprecation"')]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": elasticsearch.service: main process exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/FAILURE\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Unit elasticsearch.service entered failed state.\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12:48 elk systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": elasticsearch.service failed.\nHint: Some lines were ellipsized, use "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" to show "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" full.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("network.host")]),s._v("：es监听地址，采用"),a("code",[s._v('"0.0.0.0"')]),s._v("，表示允许所有设备访问。")]),s._v(" "),a("li",[a("code",[s._v("http.port")]),s._v("：es监听端口，可不取消注释，默认即此端口。")]),s._v(" "),a("li",[a("code",[s._v("discovery.zen.ping.unicast.hosts")]),s._v("：集群节点发现列表，也可采用ip的形式")]),s._v(" "),a("li",[a("code",[s._v("discovery.zen.minimum_master_nodes")]),s._v("：如果暂时是单节点部署，可以设置成1")]),s._v(" "),a("li",[a("code",[s._v("xpack.security.enabled")]),s._v("：添加这条，这条是配置kibana的安全机制，暂时关闭。")])]),s._v(" "),a("p",[s._v("重启es。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl restart elasticsearch.service\nsystemctl status elasticsearch.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-安装logstash。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装logstash。"}},[s._v("#")]),s._v(" 3，安装logstash。")]),s._v(" "),a("p",[s._v("直接yum安装。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum -y install logstash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置logstash。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@elk ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^#|^$"')]),s._v(" /etc/logstash/logstash.yml\npath.data: /var/lib/logstash\npath.config: /etc/logstash/conf.d\npath.logs: /var/log/logstash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这个地方重要的是第二条配置，同许多应用类似的，这里定义了一个include的目录，以后我们的多个应用实例就可以直接放置在这个目录下了，这里作为了解，后边并不会应用配置好的logstash，原因在后边会说。")]),s._v(" "),a("p",[s._v("然后定义此logstash不再使用系统管理启动，而是以后通过命令行来起对应的logstash实例。\n同时创建软链接，从而让系统能够在"),a("code",[s._v("/usr/share/logstash")]),s._v("下读取到相对应的logstash配置信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl disable logstash.service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /etc/logstash /usr/share/logstash/config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后logstash先放在这里，不用启动，对应的日志等操作，后边就会介绍了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4ac1da02927396a9.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_4-安装kibana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装kibana"}},[s._v("#")]),s._v(" 4，安装kibana")]),s._v(" "),a("p",[s._v("直接yum安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" kibana\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置kibana。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@elk ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^#|^$"')]),s._v(" /etc/kibana/kibana.yml\nserver.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("\nserver.host: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\nelasticsearch.url: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://10.100.120.82:9200"')]),s._v("\nkibana.index: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".newkibana"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("kibana.index")]),s._v("：原来默认是"),a("code",[s._v('".kibana"')]),s._v("，但是新版本的kibana启动之后发现无法访问，访问之后抛出一个异常："),a("code",[s._v("kibana server is not ready yet")]),s._v("，那么回来把配置更改成"),a("code",[s._v('".newkibana"')]),s._v("，然后重启kibana，再次访问，即可成功。")])]),s._v(" "),a("p",[s._v("另外：配置发现，当我把上边配置写入kibana，然后启动，看状态是正常的，但是访问起来总是会报 "),a("code",[s._v("Kibana server is not ready yet")]),s._v("，这似乎是一个经典的错误，却又让人无从下手解决。经过我的一些测试，获得以小经验。")]),s._v(" "),a("p",[s._v("那就是，此处配置文件，不建议直接把原来配置内容清空，然后添加当前内容的方式，尽管在上边配置elasticsearch以及logstash的时候，都这么做了，两个应用都没有发生什么奇怪的问题，但是这在kibana这里，似乎是不可行的，于是如果已经陷入上边那个报错之中了，那么我的建议是首先把当前kibana卸载，然后重新安装，接着在原有配置文件中，比照着上边的四项配置文件进行更改即可，配置完毕之后，启动kibana，等个两三分钟之后再访问会发现，问题就神奇的消失了。")]),s._v(" "),a("p",[s._v("启动kibana。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kibana.service\nsystemctl restart kibana\nsystemctl status  kibana\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("到这儿，基本上，作为单台的elk主机上的工作基本上已经完成，可以说非常简单，而，戏，也从此刚刚开始而已。")])])}),[],!1,null,null,null);a.default=n.exports}}]);