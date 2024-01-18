(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{740:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-安装版本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装版本。"}},[s._v("#")]),s._v(" 1，安装版本。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Kubernetes v1.8.6\nEtcd v3.2.12\nFlanneld0.9.1\nDocker v17.12.0-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-基础环境。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-基础环境。"}},[s._v("#")]),s._v(" 2，基础环境。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("IP Address             Role      组件\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3        master    etcd,kube-scheduler,kube-controller-manager,kube-apiserver,kube-proxy,kubelet,docker,kubectl\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4        node01    etcd,kube-proxy,kubelet,docker\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5        node02    etcd,kube-proxy,kubelet,docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这边 master 为主要控制节点也是部署节点，node 为应用程序工作节点。\n所有操作全部用 root 使用者进行。")]),s._v(" "),a("h2",{attrs:{id:"_3-初始化配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化配置。"}},[s._v("#")]),s._v(" 3，初始化配置。")]),s._v(" "),a("h3",{attrs:{id:"_1-基础准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础准备。"}},[s._v("#")]),s._v(" 1，基础准备。")]),s._v(" "),a("p",[s._v("所有节点彼此网络互通，并且 master1 SSH 登入其他节点为 passwdless。\n所有防火墙与 SELinux 已关闭。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl stop firewalld "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" systemctl disable firewalld "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" setenforce "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/SELINUX/s/enforcing/disabled/'")]),s._v(" /etc/selinux/config\nswapoff "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改"),a("code",[s._v("/etc/fstab")]),s._v(" 文件，注释掉"),a("code",[s._v("SWAP")]),s._v("的自动挂载，使用"),a("code",[s._v("free -m")]),s._v("确认 swap 已经关闭。")]),s._v(" "),a("h3",{attrs:{id:"_2-hosts-配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-hosts-配置。"}},[s._v("#")]),s._v(" 2，hosts 配置。")]),s._v(" "),a("p",[s._v("所有节点需要设定 / etc/host 解析到所有主机。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" /etc/hosts\n \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3 master\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4 node01\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5 node02\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_3-主机名修改。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-主机名修改。"}},[s._v("#")]),s._v(" 3，主机名修改。")]),s._v(" "),a("p",[a("code",[s._v("master：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost  system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostnamectl")]),s._v(" set-hostname master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("node01：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostnamectl")]),s._v(" set-hostname node01\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("node02：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostnamectl")]),s._v(" set-hostname node02\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-所有节点需要设定-etc-sysctl-d-k8s-conf-的系统参数。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-所有节点需要设定-etc-sysctl-d-k8s-conf-的系统参数。"}},[s._v("#")]),s._v(" 4，所有节点需要设定 / etc/sysctl.d/k8s.conf 的系统参数。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat <<EOF > /etc/sysctl.d/k8s.conf")]),s._v("\nnet.ipv4.ip_forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nnet.bridge.bridge-nf-call-iptables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nEOF\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_5-加载-br-netfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-加载-br-netfilter"}},[s._v("#")]),s._v(" 5，加载 br_netfilter")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modprobe br_netfilter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "modprobe br_netfilter" >> /etc/rc.local')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("刷新使之生效。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sysctl -p /etc/sysctl.d/k8s.conf")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6-设置-iptables-策略为-accept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-设置-iptables-策略为-accept"}},[s._v("#")]),s._v(" 6，设置 iptables 策略为 ACCEPT")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /sbin/iptables -P FORWARD ACCEPT")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo  "sleep 60 && /sbin/iptables -P FORWARD ACCEPT" >> /etc/rc.local')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_7-安装依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-安装依赖包"}},[s._v("#")]),s._v(" 7，安装依赖包")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y epel-release yum-utils device-mapper-persistent-data lvm2 net-tools conntrack-tools wget")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-所有包汇总。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-所有包汇总。"}},[s._v("#")]),s._v(" 4，所有包汇总。")]),s._v(" "),a("p",[s._v("在搭建过程中，会用到许多的包，而这些包的资源又都是在国外，因此一般下载都是非常痛苦的，因此博主这里已经将所有需要的包打包好了，汇总成了一个包，然后上传了百度云，可以通过下边的方式进行获取。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("下载地址：https://pan.baidu.com/s/1Y8xibDTEmLqOGTuHmRN1rA")])]),s._v(" "),a("li",[a("p",[s._v("提取码: "),a("code",[s._v("84ks")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);