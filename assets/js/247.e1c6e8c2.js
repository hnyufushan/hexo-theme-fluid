(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{591:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作"}},[s._v("#")]),s._v(" 1，准备工作")]),s._v(" "),a("h3",{attrs:{id:"_1-主机准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-主机准备。"}},[s._v("#")]),s._v(" 1，主机准备。")]),s._v(" "),a("p",[s._v("准备三台主机，都是 CentOS-7，IP 如下：")]),s._v(" "),a("ul",[a("li",[s._v("192.168.106.7")]),s._v(" "),a("li",[s._v("192.168.106.8")]),s._v(" "),a("li",[s._v("192.168.106.9")])]),s._v(" "),a("p",[s._v("为了方便后续操作，先配置一下主机免密码登陆。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ssh")]),s._v("-keygen\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ssh")]),s._v("-copy-id root@192.168.106.7\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ssh")]),s._v("-copy-id root@192.168.106.8\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ssh")]),s._v("-copy-id root@192.168.106.9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("更改三节点的主机名。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostnamectl")]),s._v(" set-hostname node1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostnamectl")]),s._v(" set-hostname node2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostnamectl")]),s._v(" set-hostname node3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("配置 hosts。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6\n192.168.106.7 node1\n192.168.106.8 node2\n192.168.106.9 node3\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-依赖准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-依赖准备。"}},[s._v("#")]),s._v(" 2，依赖准备。")]),s._v(" "),a("p",[s._v("只需准备 jdk 环境即可，通过如下命令安装："),a("code",[s._v("curl 192.168.1.1/a | sh")]),s._v("。")]),s._v(" "),a("p",[s._v("此种安装方式可以"),a("a",{attrs:{href:"https://github.com/eryajf/magic-of-sysuse-scripts",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考这里"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_3-安装包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装包。"}},[s._v("#")]),s._v(" 3，安装包。")]),s._v(" "),a("p",[s._v("下载 kafka。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.cnnic.cn/apache/kafka/0.11.0.2/kafka_2.11-0.11.0.2.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-配置集群。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置集群。"}},[s._v("#")]),s._v(" 2，配置集群。")]),s._v(" "),a("h3",{attrs:{id:"_1-解压分发。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解压分发。"}},[s._v("#")]),s._v(" 1，解压分发。")]),s._v(" "),a("p",[s._v("首先将 kafka 解压，然后分发给集群中各个 node。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tar")]),s._v(" xf kafka_2.11-0.11.0.2.tgz\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mv")]),s._v(" kafka_2.11-0.11.0.2 kafka\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用如下脚本进行分发。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_IPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("node_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_IPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" /opt/kafka root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(":/usr/local\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_2-配置-zookeeper-集群。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-zookeeper-集群。"}},[s._v("#")]),s._v(" 2，配置 zookeeper 集群。")]),s._v(" "),a("p",[s._v("要搭建 kafka 集群，首先要部署 zookeeper 集群，这里直接使用 kafka 内置的 zookeeper 进行部署。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^#|^$'")]),s._v(" zookeeper.properties\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataDir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/kafka/zookeeper\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("clientPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maxClientCnxns")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("initLimit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("syncLimit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node1:2888:3888\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server.2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node2:2889:3889\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server.3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node3:2890:3890\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("dataDir：zookeeper 的快照存储地址")]),s._v(" "),a("li",[s._v("clientPort：zookeeper 端口")]),s._v(" "),a("li",[s._v("maxClientCnxns：单个客户端与单台服务器之间的连接数的限制")]),s._v(" "),a("li",[s._v("initLimit：默认值是 10，即 tickTime 属性值的 10 倍。它用于配置允许 Followers 连接并同步到 Leader 的最大时间。如果 ZooKeeper 管理的数据量很大的话可以增加这个值")]),s._v(" "),a("li",[s._v("syncLimit：默认值是 5，即 tickTime 属性值的 5 倍。它用于配置 Leader 和 Followers 间进行心跳检测的最大延迟时间。如果在设置的时间内 Followers 无法与 Leader 进行通信，那么 Followers 将会被丢弃")]),s._v(" "),a("li",[s._v("server.1：server.x 中的 x 要与 myid 中的数字一致，node1 为集群 IP，当然前边配置了 hosts 可以这么写，2888 用于 follower 与 leader 之间的数据同步与其他通信；3888 用于 leader 选举时的通信")])]),s._v(" "),a("p",[s._v("配置完成之后，将文件分发出去。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_IPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("node_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_IPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /opt/kafka/config/zookeeper.properties root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(":/usr/local/kafka/config\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("创建对应的 myid，用于区分不同节点的身份。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_IPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v("${#NODE_IPS[@]}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("node_ip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_IPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$i-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v('"')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mkdir -p /usr/local/kafka/zookeeper'")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v(' > /usr/local/kafka/zookeeper/myid"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("启动 zookeeper 服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_IPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("node_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_IPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/kafka/bin/zookeeper-server-start.sh -daemon /usr/local/kafka/config/zookeeper.properties'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("查看服务状态：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2818")]),s._v(" QuorumPeerMain config/zookeeper.properties\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8901")]),s._v(" Jps "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("观察一下日志，查看是否有日常。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d7fd0802bce9e94a.jpg",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"_3-配置-kafka-集群。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置-kafka-集群。"}},[s._v("#")]),s._v(" 3，配置 kafka 集群。")]),s._v(" "),a("p",[s._v("同样是先调整 kafka 的配置。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^#|^$'")]),s._v(" server.properties\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("broker.id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#三个节点不能一样")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listeners")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://:9092\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("num.network.threads")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("num.io.threads")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket.send.buffer.bytes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket.receive.buffer.bytes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket.request.max.bytes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104857600")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log.dirs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/kafka/kafka-logs\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("num.partitions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("num.recovery.threads.per.data.dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("offsets.topic.replication.factor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("transaction.state.log.replication.factor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("transaction.state.log.min.isr")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log.retention.hours")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log.segment.bytes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log.retention.check.interval.ms")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zookeeper.connect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7:2181,192.168.106.8:2181,192.168.106.9:2181\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zookeeper.connection.timeout.ms")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("group.initial.rebalance.delay.ms")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("分发配置文件。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_IPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("node_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_IPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /opt/kafka/config/server.properties root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(":/usr/local/kafka/config\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("分发之后记得更改一下每个配置文件的 "),a("code",[s._v("broker.id")]),s._v("。")]),s._v(" "),a("p",[s._v("启动 kafka。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_IPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("node_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_IPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/kafka/bin/kafka-server-start.sh -daemon /usr/local/kafka/config/server.properties'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这样整个集群就搭建完成了。")]),s._v(" "),a("h2",{attrs:{id:"_3-验证集群。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证集群。"}},[s._v("#")]),s._v(" 3，验证集群。")]),s._v(" "),a("h3",{attrs:{id:"_1-创建一个-topic。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个-topic。"}},[s._v("#")]),s._v(" 1，创建一个 topic。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$/usr/local/kafka/bin/kafka-topics.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zookeeper")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7:2181,192.168.106.8:2181,192.168.106.9:2181 --replication-factor "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--partitions")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --topictest-topic\nCreated topic "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test-topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-查看-topic。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看-topic。"}},[s._v("#")]),s._v(" 2，查看 topic。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$/usr/local/kafka/bin/kafka-topics.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zookeeper")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7:2181,192.168.106.8:2181,192.168.106.9:2181\ntest-topic\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-生产消息。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-生产消息。"}},[s._v("#")]),s._v(" 3，生产消息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$/usr/local/kafka/bin/kafka-console-producer.sh --broker-list "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7:9092,192.168.106.8:9092,192.168.106.9:9092 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--topic")]),s._v(" test-topic\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("this is "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4-消费消息。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-消费消息。"}},[s._v("#")]),s._v(" 4，消费消息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$/usr/local/kafka/bin/kafka-console-consumer.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zookeeper")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.7:2181,192.168.106.8:2181,192.168.106.9:2181 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--topic")]),s._v(" test-topic --from-beginning\nUsing the ConsoleConsumer with old consumer is deprecated and will be removed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a future major release. Consider using the new consumer by passing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bootstrap-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" instead of "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zookeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".\nthis is "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如此，一个完整的集群就配置完成了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);