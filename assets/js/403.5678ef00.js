(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{746:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-minikube-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-minikube-是什么"}},[s._v("#")]),s._v(" 1，Minikube 是什么？")]),s._v(" "),e("ul",[e("li",[s._v("Minikube 是一种方便在本地运行 Kubernetes 的工具。")]),s._v(" "),e("li",[s._v("Minikube 是可以在 VM 中运行单节点的 Kubernetes 集群。")]),s._v(" "),e("li",[s._v("Minikube 是为了开发或测试在本地启动一个节点的 kubernetes 集群。")])]),s._v(" "),e("p",[s._v("因为它安装非常简单，因此是个人用户入门学习 k8s 的一个不错选择。")]),s._v(" "),e("h2",{attrs:{id:"_2-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-特点"}},[s._v("#")]),s._v(" 2，特点")]),s._v(" "),e("p",[s._v("不能启动生产集群，没有高可用性的单节点机器。\n可以工作在 Windows,Linux,MacOS 下。")]),s._v(" "),e("h2",{attrs:{id:"_3-安装。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装。"}},[s._v("#")]),s._v(" 3，安装。")]),s._v(" "),e("p",[s._v("因为官方的源都在国外，因此下载等问题常常会让安装失败，这里选择使用阿里云的源来进行安装。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/baec88ab7eaee79c.jpg",alt:"image"}})]),s._v(" "),e("p",[s._v("本文所用系统以及软件：")]),s._v(" "),e("ul",[e("li",[s._v("CentOs：7.3")]),s._v(" "),e("li",[s._v("docker：17.12.1-ce")]),s._v(" "),e("li",[s._v("minikube：v0.30.0")]),s._v(" "),e("li",[s._v("kubectl：v1.12.1")])]),s._v(" "),e("h3",{attrs:{id:"_1-安装-docker。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-docker。"}},[s._v("#")]),s._v(" 1，安装 docker。")]),s._v(" "),e("p",[s._v("依旧配置成阿里源进行安装下载。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" docker-ce.repo /etc/yum.repos.d\nyum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-17.12.1.ce-1.el7.centos\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("启动 docker。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl start "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_2-安装-kubectl。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-kubectl。"}},[s._v("#")]),s._v(" 2，安装 kubectl。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/yum.repos.d/kubernetes.repo")]),s._v("\n[kubernetes]\nname=Kubernetes\nbaseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=0\ngpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n     http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF")]),s._v("\n \n \nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" kubectl-1.12.2-0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"_3-配置-minikube。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置-minikube。"}},[s._v("#")]),s._v(" 3，配置 minikube。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Lo")]),s._v(" minikube http://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/releases/v0.30.0/minikube-linux-amd64 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x minikube "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" minikube /usr/local/bin/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_4-启动之。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动之。"}},[s._v("#")]),s._v(" 4，启动之。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("minikube start --registry-mirror"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.docker-cn.com --kubernetes-version v1.12.1 --vm-driver"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启动完成之后，可以通过一些简单的命令查看是否成功。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost dashboard"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\nNAME       STATUS    ROLES     AGE       VERSION\nminikube   Ready     master    1h        v1.12.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);