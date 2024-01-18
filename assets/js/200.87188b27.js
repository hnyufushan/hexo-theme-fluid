(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{544:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("虽然有集群高可用所在，但是仍旧可能会有整个集群覆灭的情况，所以这里试验一下集群的备份问题。")]),s._v(" "),a("p",[s._v("现在，在已有集群当中，跑了两个应用如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f4718a580d4c88f3.jpg",alt:""}})]),s._v(" "),a("p",[s._v("接下来，开始进入备份的配置。因为 rancher 整个集群跑在 k8s 里边，而 k8s 的所有数据又都存储在 etcd 里边，所以针对 etcd 来做备份就可以了。")]),s._v(" "),a("h2",{attrs:{id:"_1-备份。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-备份。"}},[s._v("#")]),s._v(" 1，备份。")]),s._v(" "),a("h3",{attrs:{id:"_1-环境说明。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境说明。"}},[s._v("#")]),s._v(" 1，环境说明。")]),s._v(" "),a("ul",[a("li",[s._v("Rancher Kubernetes Engine v0.1.7 或更高版本\nRKE v0.1.7 以及更高版本才支持 etcd 快照功能")]),s._v(" "),a("li",[s._v("rancher-cluster.yml\n需要使用到安装 Rancher 的 RKE 配置文件 rancher-cluster.yml。")])]),s._v(" "),a("h3",{attrs:{id:"_2-备份方案。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-备份方案。"}},[s._v("#")]),s._v(" 2，备份方案。")]),s._v(" "),a("p",[s._v("rancher 有两种备份方式：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("方案 A: 定时自动创建快照")]),s._v(" "),a("p",[s._v("在 Rancher HA 安装时，通过更改配置信息以实现自动创建快照的功能。")])]),s._v(" "),a("li",[a("p",[s._v("方案 B: 手动创建快照")]),s._v(" "),a("p",[s._v("手动创建适用于集群升级或者变更之前的操作。")])])]),s._v(" "),a("p",[s._v("这里为了验证备份以及恢复的功能可用性，暂时采取手动备份的方式，自动的方式等到最后再介绍。")]),s._v(" "),a("h3",{attrs:{id:"_3-手动备份。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-手动备份。"}},[s._v("#")]),s._v(" 3，手动备份。")]),s._v(" "),a("p",[s._v("当我们需要升级 Rancher 或将其恢复到以前的快照时，应该对数据手动创建快照，以便数据异常时可供恢复。")]),s._v(" "),a("p",[s._v("备份前要确保部署的时候使用的集群部署配置文件还在。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - rancher\n$ rke etcd snapshot-save "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" test.db "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v(" rancher-cluster.yml\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /opt/rke/etcd-snapshots\npki.bundle.tar.gz  test.db\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("其中的"),a("code",[s._v("test.db")]),s._v("是备份后的文件名，可以自定义。\n如果看到屏幕输出"),a("code",[s._v("Finished saving snapshot [test.db] on all etcd hosts")]),s._v("，则说明备份已经正常完成了，如果有报错，则根据报错进行解决。")]),s._v(" "),a("blockquote",[a("p",[s._v("备份完成后，RKE 会获取每个 etcd 节点的快照，并保存在每个 etcd 节点的"),a("code",[s._v("/opt/rke/etcd-snapshots")]),s._v("目录下。")])]),s._v(" "),a("h2",{attrs:{id:"_2-恢复。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-恢复。"}},[s._v("#")]),s._v(" 2，恢复。")]),s._v(" "),a("h3",{attrs:{id:"_1-恢复准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-恢复准备"}},[s._v("#")]),s._v(" 1，恢复准备")]),s._v(" "),a("p",[s._v("恢复有两种情况：在原集群中恢复和在新机器中恢复。")]),s._v(" "),a("ul",[a("li",[s._v("原集群中恢复：需要清除 Kubernetes 和 Rancher 配置，详情了解点击，"),a("a",{attrs:{href:"https://www.cnrancher.com/docs/rancher/v2.x/cn/configuration/admin-settings/remove-node/",target:"_blank",rel:"noopener noreferrer"}},[s._v("恢复出厂设置。"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("新机器中恢复：需要先准备与原来集群相匹配的环境，以及集群安装的一些基础环境。")])]),s._v(" "),a("p",[s._v("这里为了验证数据的迁移可用，因此使用在新机器中恢复的方式来进行恢复的操作。")]),s._v(" "),a("h3",{attrs:{id:"_2-新机器初始化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新机器初始化。"}},[s._v("#")]),s._v(" 2，新机器初始化。")]),s._v(" "),a("p",[s._v("在进行正式的恢复初始化之前，需要先对新机器进行初始化。因为老集群是三台服务器，所以这里也准备三台新机器进行对接。")]),s._v(" "),a("p",[s._v("服务器准备情况，大致如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("老机器")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("新机器")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.106.3")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.111.4")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.106.4")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.111.5")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.106.5")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.111.6")])])])]),s._v(" "),a("h4",{attrs:{id:"_1-初始化及安装-docker。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化及安装-docker。"}},[s._v("#")]),s._v(" 1，初始化及安装 docker。")]),s._v(" "),a("p",[s._v("以下操作在"),a("code",[s._v("192.168.111.4")]),s._v("上边进行。")]),s._v(" "),a("p",[s._v("在进行初始化之前，先保证本机能够免密码登陆被操作机器。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ssh-keygen\nssh-copy-id root@192.168.111.4\nssh-copy-id root@192.168.111.5\nssh-copy-id root@192.168.111.6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后定义如下脚本并执行。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_IPS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.4 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.5 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubernetes.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nnet.bridge.bridge-nf-call-iptables=1\nnet.bridge.bridge-nf-call-ip6tables=1\nnet.ipv4.ip_forward=1\nnet.ipv4.tcp_tw_recycle=0\nvm.swappiness=0\nvm.overcommit_memory=1\nvm.panic_on_oom=0\nfs.inotify.max_user_watches=89100\nfs.file-max=52706963\nfs.nr_open=52706963\nnet.ipv6.conf.all.disable_ipv6=1\nnet.netfilter.nf_conntrack_max=2310720\nEOF")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" daemon.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "registry-mirrors": ["https://7bezldxe.mirror.aliyuncs.com/","https://kw88y6eh.mirror.aliyuncs.com"],\n  "insecure-registries":["192.168.112.69"],\n    "storage-driver": "overlay2",\n    "storage-opts": [\n    "overlay2.override_kernel_check=true"\n    ]\n}\nEOF')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("node_ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_IPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">>> '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yum install -y wget ntpdate lrzsz curl yum-utils device-mapper-persistent-data lvm2 bash-completion"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iptables -F && sudo iptables -X && sudo iptables -F -t nat && sudo iptables -X -t nat && iptables -P FORWARD ACCEPT"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"swapoff -a && sed -i '/ swap / s/^\\(.*\\)$/#"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/g' /etc/fstab\"")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" kubernetes.conf root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(":/etc/sysctl.d/kubernetes.conf\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"modprobe br_netfilter && modprobe ip_vs"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sysctl -p /etc/sysctl.d/kubernetes.conf"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yum -y update openssh'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo -e  \"root soft nofile 65535\\nroot hard nofile 65535\\n* soft nofile 65535\\n* hard nofile 65535\\n\"     >> /etc/security/limits.conf'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sed -i \"s#4096#65535#g\" /etc/security/limits.d/20-nproc.conf'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'groupadd docker && useradd rancher -G docker && echo \"123456\" | passwd --stdin rancher'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yum -y install ntpdate && ntpdate -u cn.pool.ntp.org && echo \"* * * * * /usr/sbin/ntpdate -u cn.pool.ntp.org &> /dev/null\" > /var/spool/cron/root'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yum remove -y docker docker-client docker-client-latest docker-common docker-latest-logrotate docker-logrotate docker-selinux docker-engine-selinux docker-engine container*'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yum -y install --setopt=obsoletes=0 docker-ce-17.03.2.ce-1.el7.centos docker-ce-selinux-17.03.2.ce-1.el7.centos'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'systemctl enable docker'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'systemctl start docker'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'systemctl status docker'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" daemon.json  root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(":/etc/docker/daemon.json\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'systemctl daemon-reload'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node_ip}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'systemctl restart docker'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br")])]),a("p",[s._v("脚本内容完成了服务器的初始化，并安装了 docker 配置了加速器。")]),s._v(" "),a("p",[s._v("然后安装一些集群依赖组件："),a("code",[s._v("rke")]),s._v(","),a("code",[s._v("kubectl")]),s._v(","),a("code",[s._v("helm")]),s._v("等。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://192.168.106.10/pack/rancher.tar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过如上命令下载并部署，过程略。")]),s._v(" "),a("h4",{attrs:{id:"_2-配置-rancher-用户。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-rancher-用户。"}},[s._v("#")]),s._v(" 2，配置 rancher 用户。")]),s._v(" "),a("p",[s._v("这个时候还需要一步，那就是配置 rancher 用户的免密码登陆其他节点，否则后边的恢复等操作将进行不下去。")]),s._v(" "),a("p",[s._v("仍旧是在"),a("code",[s._v("192.168.111.4")]),s._v("这台主机上进行。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - rancher\nssh-keygen\nssh-copy-id rancher@192.168.111.4\nssh-copy-id rancher@192.168.111.5\nssh-copy-id rancher@192.168.111.6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("完成如上步骤，基本上就可以进入正式的恢复操作了。")]),s._v(" "),a("h3",{attrs:{id:"_3-准备恢复文件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备恢复文件。"}},[s._v("#")]),s._v(" 3，准备恢复文件。")]),s._v(" "),a("p",[s._v("恢复所要的除了上边准备的基础环境之外，还需要之前备份的数据以及部署集群的原配置文件。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1，先在三台新机器上都创建备份默认目录。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /opt/rke/etcd-snapshots\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("2，去原来的部署主机"),a("code",[s._v("192.168.106.3")]),s._v("将数据拷贝过来。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/rke/etcd-snapshots\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" pki.bundle.tar.gz test.db root@192.168.111.4:/opt/rke/etcd-snapshots/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" pki.bundle.tar.gz test.db root@192.168.111.5:/opt/rke/etcd-snapshots/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" pki.bundle.tar.gz test.db root@192.168.111.6:/opt/rke/etcd-snapshots/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("因为 etcd 多副本，几个节点备份的都一样，所以可以把原来的 1 个拷贝给新的集群。")])]),s._v(" "),a("li",[a("p",[s._v("3，拷贝部署集群的原配置文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - rancher\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" rancher-cluster.yml rancher@192.168.111.4:/home/rancher/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("拷贝完成之后，就能进入真正的恢复操作了。")])])]),s._v(" "),a("h3",{attrs:{id:"_4-更改-rke-配置文件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-更改-rke-配置文件。"}},[s._v("#")]),s._v(" 4，更改 RKE 配置文件。")]),s._v(" "),a("p",[s._v("现在目光再次聚焦到"),a("code",[s._v("192.168.111.4")]),s._v("这台主机，制作原始"),a("code",[s._v("rancher-cluster.yml")]),s._v("文件的副本。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" rancher-cluster.yml rancher-cluster-restore.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对副本配置文件进行修改，基本上其他地方不用更改，只需把原来文件当中的几个主机"),a("code",[s._v("IP地址")]),s._v("更改为现在集群的即可。")]),s._v(" "),a("p",[s._v("文件更改前后对比如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" rancher-cluster.yml rancher-cluster-restore.yml\n2c2\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("   - address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   - address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.4\n5c5\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("   - address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   - address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.5\n8c8\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("   - address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   - address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.6\n11d10\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"_5-恢复-etcd-数据。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-恢复-etcd-数据。"}},[s._v("#")]),s._v(" 5，恢复 ETCD 数据。")]),s._v(" "),a("p",[s._v("执行如下命令，从而恢复 etcd 的数据。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ rke etcd snapshot-restore "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" test.db "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v(" ./rancher-cluster-restore.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果正常完成，则将会在最后输出"),a("code",[s._v("Finished restoring snapshot [test.db] on all etcd hosts")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_6-恢复集群。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-恢复集群。"}},[s._v("#")]),s._v(" 6，恢复集群。")]),s._v(" "),a("p",[s._v("使用 RKE 在"),a("code",[s._v("新ETCD节点")]),s._v("上启动集群。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ rke up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v(" ./rancher-cluster-restore.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果正常完成，则将会在最后输出"),a("code",[s._v("Finished building Kubernetes cluster successfully")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_7-测试集群。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-测试集群。"}},[s._v("#")]),s._v(" 7，测试集群。")]),s._v(" "),a("p",[s._v("RKE 运行完成后会创建 kubectl 的配置文件 kube_config_rancher-cluster-restore.yml，可通过这个配置文件查询 K8S 集群节点状态：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube_config_rancher-cluster-restore.yml  get nodes\nNAME            STATUS     ROLES                      AGE   VERSION\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3   Ready      controlplane,etcd,worker   48m   v1.11.6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4   Ready      controlplane,etcd,worker   48m   v1.11.6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5   Ready      controlplane,etcd,worker   48m   v1.11.6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.4   Ready      controlplane,etcd,worker   47m   v1.11.6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.5   Ready      controlplane,etcd,worker   47m   v1.11.6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.6   Ready      controlplane,etcd,worker   47m   v1.11.6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_8-清理旧节点。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-清理旧节点。"}},[s._v("#")]),s._v(" 8，清理旧节点。")]),s._v(" "),a("p",[s._v("通过 kubectl 从集群中删除旧节点。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube_config_rancher-cluster-restore.yml  delete "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.106.3"')]),s._v(" deleted\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.106.4"')]),s._v(" deleted\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.106.5"')]),s._v(" deleted\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_9-耐心等待新集群各功能启动。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-耐心等待新集群各功能启动。"}},[s._v("#")]),s._v(" 9，耐心等待新集群各功能启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube_config_rancher-cluster-restore.yml  get pods --all-namespaces\nNAMESPACE       NAME                                        READY   STATUS    RESTARTS   AGE\ncattle-system   cattle-cluster-agent-d8b957b79-8hglr        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\ncattle-system   cattle-node-agent-cjm72                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\ncattle-system   cattle-node-agent-fsfzc                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\ncattle-system   cattle-node-agent-mdwf6                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\ncattle-system   rancher-7c5cf9945b-8xgjb                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          41m\ncattle-system   rancher-7c5cf9945b-bzt8k                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\ncattle-system   rancher-7c5cf9945b-tpr9m                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\ndefault         admin-79dccb46f-945nr                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\ndefault         api-68d656fbf9-jzx6r                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          41m\ningress-nginx   default-http-backend-797c5bc547-xw85p       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\ningress-nginx   nginx-ingress-controller-8t2p2              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\ningress-nginx   nginx-ingress-controller-dhj7h              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\ningress-nginx   nginx-ingress-controller-wfffk              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\nkube-system     canal-8vt7t                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\nkube-system     canal-kqbrw                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\nkube-system     canal-ssnsj                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          48m\nkube-system     cert-manager-cert-manager-8f55cc84b-5pt58   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          41m\nkube-system     kube-dns-7588d5b5f5-dnthk                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\nkube-system     kube-dns-autoscaler-5db9bbb766-mh9rs        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\nkube-system     metrics-server-97bc649d5-fpwx2              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\nkube-system     tiller-deploy-8cb5b5f5c-dzj2c               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"_10-域名解析问题。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-域名解析问题。"}},[s._v("#")]),s._v(" 10，域名解析问题。")]),s._v(" "),a("p",[s._v("如果原来集群的 nginx 还没有问题，那么接下来的操作可以直接在原来的 nginx 当中进行。")]),s._v(" "),a("p",[s._v("我这里重新部署了一个 nginx 进行配置，配置过程略。")]),s._v(" "),a("p",[s._v("代理完成之后，分别在新集群当中将域名指向 nginx 的地址。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('echo "192.168.111.3 hi.rancher.cn" >> /etc/hosts\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后更改一些本地 Windows 的 hosts 解析，接着去浏览器中访问，发现集群起来了，而且，之前跑在集群当中的服务，也还在。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e310c71cfb85bfa5.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("看一眼服务：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a5e104707ce617cb.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("如此以来，整个集群的备份以及恢复试验，也就完成了。")]),s._v(" "),a("h2",{attrs:{id:"_3-说说自动备份。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-说说自动备份。"}},[s._v("#")]),s._v(" 3，说说自动备份。")]),s._v(" "),a("p",[s._v("事实上自动备份的功能已经被 rancher 官方集成，其配置方式就在一开始的启动文件"),a("code",[s._v("rancher-cluster.yml")]),s._v("中。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1，编辑 rancher-cluster.yml 配置文件")])]),s._v(" "),a("li",[a("p",[s._v("2，在 rancher-cluster.yml 配置文件中添加以下代码:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("services:\n  etcd:\n    snapshot: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否启用快照功能，默认false；")]),s._v("\n    creation: 6h0s  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 快照创建间隔时间，不加此参数，默认5分钟；")]),s._v("\n    retention: 24h  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 快照有效期，此时间后快照将被删除；")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("根据实际需求更改相应参数。")])]),s._v(" "),a("li",[a("p",[s._v("3，运行 up 进行加载。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("rke up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v(" rancher-cluster.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_4-备份的核心。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-备份的核心。"}},[s._v("#")]),s._v(" 4，备份的核心。")]),s._v(" "),a("p",[s._v("核心当然是异地备份啦，刚刚执行的备份，都是将快照文件放在了集群本地的"),a("code",[s._v("/opt/rke/etcd-snapshots")]),s._v("目录，所以应该把这个目录进行异地备份即可。")])])}),[],!1,null,null,null);a.default=n.exports}}]);