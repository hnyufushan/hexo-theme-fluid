(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{741:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-创建-ca-证书和秘钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-ca-证书和秘钥"}},[s._v("#")]),s._v(" 1, 创建 CA 证书和秘钥")]),s._v(" "),n("p",[s._v("kubernetes 系统各组件需要使用 TLS 证书对通信进行加密，本文档使用 CloudFlare 的 PKI 工具集 cfssl 来生成 Certificate Authority (CA) 证书和秘钥文件，CA 是自签名的证书，用来签名后续创建的其它 TLS 证书。")]),s._v(" "),n("p",[s._v("以下操作都在 master 节点即 192.168.106.3 上执行，证书只需要创建一次即可，以后在向集群中添加新节点时只要将 /etc/kubernetes/ 目录下的证书拷贝到新节点上即可。")]),s._v(" "),n("h2",{attrs:{id:"_2-安装-cfssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-cfssl"}},[s._v("#")]),s._v(" 2, 安装 CFSSL")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pkg.cfssl.org/R1.2/cfssl_linux-amd64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x cfssl_linux-amd64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cfssl_linux-amd64 /usr/local/bin/cfssl\n \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x cfssljson_linux-amd64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cfssljson_linux-amd64 /usr/local/bin/cfssljson\n \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x cfssl-certinfo_linux-amd64\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cfssl-certinfo_linux-amd64 /usr/local/bin/cfssl-certinfo\n \n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"_3-创建-ca-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-ca-配置文件"}},[s._v("#")]),s._v(" 3, 创建 CA 配置文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir /root/ssl && cd /root/ssl")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ca-config.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "signing": {\n    "default": {\n      "expiry": "8760h"\n    },\n    "profiles": {\n      "kubernetes": {\n        "usages": [\n            "signing",\n            "key encipherment",\n            "server auth",\n            "client auth"\n        ],\n        "expiry": "8760h"\n      }\n    }\n  }\n}\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("ca-config.json")]),s._v("：可以定义多个 profiles，分别指定不同的过期时间、使用场景等参数；后续在签名证书时使用某个 profile；")]),s._v(" "),n("li",[n("code",[s._v("signing")]),s._v("：表示该证书可用于签名其它证书；生成的 ca.pem 证书中 CA=TRUE；")]),s._v(" "),n("li",[n("code",[s._v("server auth")]),s._v("：表示 client 可以用该 CA 对 server 提供的证书进行验证；")]),s._v(" "),n("li",[n("code",[s._v("client auth")]),s._v("：表示 server 可以用该 CA 对 client 提供的证书进行验证；")])]),s._v(" "),n("h2",{attrs:{id:"_4-创建-ca-证书签名请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-ca-证书签名请求"}},[s._v("#")]),s._v(" 4, 创建 CA 证书签名请求")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ca-csr.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "CN": "kubernetes",\n  "key": {\n    "algo": "rsa",\n    "size": 2048\n  },\n  "names": [\n    {\n      "C": "CN",\n      "ST": "BeiJing",\n      "L": "BeiJing",\n      "O": "k8s",\n      "OU": "System"\n    }\n  ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("“CN”")]),s._v("：Common Name，kube-apiserver 从证书中提取该字段作为请求的用户名 (User Name)；浏览器使用该字段验证网站是否合法；")]),s._v(" "),n("li",[n("code",[s._v("“O”")]),s._v("：Organization，kube-apiserver 从证书中提取该字段作为请求用户所属的组 (Group)；")])]),s._v(" "),n("h2",{attrs:{id:"_5-生成-ca-证书和私钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-生成-ca-证书和私钥"}},[s._v("#")]),s._v(" 5, 生成 CA 证书和私钥")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cfssl gencert -initca ca-csr.json | cfssljson -bare ca")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("创建 kubernetes 证书签名请求文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubernetes-csr.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n   "CN": "kubernetes",\n    "hosts": [\n      "127.0.0.1",\n      "192.168.106.3",\n      "192.168.106.4",\n      "192.168.106.5",\n      "10.254.0.1",\n      "kubernetes",\n      "kubernetes.default",\n      "kubernetes.default.svc",\n      "kubernetes.default.svc.cluster",\n      "kubernetes.default.svc.cluster.local"\n    ],\n    "key": {\n        "algo": "rsa",\n        "size": 2048\n    },\n    "names": [\n        {\n            "C": "CN",\n            "ST": "BeiJing",\n            "L": "BeiJing",\n            "O": "k8s",\n            "OU": "System"\n        }\n    ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("注意：如上 3 个 ip 替换成自己服务器的 ip。")]),s._v(" "),n("p",[s._v("hosts 中的内容可以为空，即使按照上面的配置，向集群中增加新节点后也不需要重新生成证书。")]),s._v(" "),n("p",[s._v("如果 hosts 字段不为空则需要指定授权使用该证书的 IP 或域名列表，由于该证书后续被 etcd 集群和 kubernetes master 集群使用，所以上面分别指定了 etcd 集群、kubernetes master 集群的主机 IP 和 kubernetes 服务的服务 IP。")]),s._v(" "),n("h2",{attrs:{id:"_6-生成-kubernetes-证书和私钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-生成-kubernetes-证书和私钥"}},[s._v("#")]),s._v(" 6, 生成 kubernetes 证书和私钥")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kubernetes-csr.json | cfssljson -bare kubernetes")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls kubernetes*")]),s._v("\nkubernetes.csr  kubernetes-csr.json  kubernetes-key.pem  kubernetes.pem\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_7-创建-admin-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-创建-admin-证书"}},[s._v("#")]),s._v(" 7, 创建 admin 证书")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" admin-csr.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "CN": "admin",\n  "hosts": [],\n  "key": {\n    "algo": "rsa",\n    "size": 2048\n  },\n  "names": [\n    {\n      "C": "CN",\n      "ST": "BeiJing",\n      "L": "BeiJing",\n      "O": "system:masters",\n      "OU": "System"\n    }\n  ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("kube-apiserver 使用 RBAC 对客户端 (如 kubelet、kube-proxy、Pod) 请求进行授权； kube-apiserver 预定义了一些 RBAC 使用的 RoleBindings，如 cluster-admin 将 Group system:masters 与 Role cluster-admin 绑定，该 Role 授予了调用 kube-apiserver 的所有 API 的权限； OU 指定该证书的 Group 为 system:masters，kubelet 使用该证书访问 kube-apiserver 时 ，由于证书被 CA 签名，所以认证通过，同时由于证书用户组为经过预授权的 system:masters，所以被授予访问所有 API 的权限。")]),s._v(" "),n("h2",{attrs:{id:"_8-生成-admin-证书和私钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-生成-admin-证书和私钥"}},[s._v("#")]),s._v(" 8, 生成 admin 证书和私钥")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls admin*")]),s._v("\nadmin.csr  admin-csr.json  admin-key.pem  admin.pem\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_9-创建-kube-proxy-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-创建-kube-proxy-证书"}},[s._v("#")]),s._v(" 9, 创建 kube-proxy 证书")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-proxy-csr.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "CN": "system:kube-proxy",\n  "hosts": [],\n  "key": {\n    "algo": "rsa",\n    "size": 2048\n  },\n  "names": [\n    {\n      "C": "CN",\n      "ST": "BeiJing",\n      "L": "BeiJing",\n      "O": "k8s",\n      "OU": "System"\n    }\n  ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("CN 指定该证书的 User 为 system:kube-proxy； kube-apiserver 预定义的 RoleBinding cluster-admin 将 User system:kube-proxy 与 Role system:node-proxier 绑定，该 Role 授予了调用 kube-apiserver Proxy 相关 API 的权限。")]),s._v(" "),n("h2",{attrs:{id:"_10-生成-kube-proxy-客户端证书和私钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-生成-kube-proxy-客户端证书和私钥"}},[s._v("#")]),s._v(" 10, 生成 kube-proxy 客户端证书和私钥")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes  kube-proxy-csr.json | cfssljson -bare kube-proxy")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls kube-proxy*")]),s._v("\nkube-proxy.csr  kube-proxy-csr.json  kube-proxy-key.pem  kube-proxy.pem\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_11-分发证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-分发证书"}},[s._v("#")]),s._v(" 11, 分发证书")]),s._v(" "),n("p",[s._v("将生成的证书和秘钥文件（后缀名为. pem）拷贝到所有机器的 /etc/kubernetes/ssl 目录下。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /etc/kubernetes/ssl")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp *.pem /etc/kubernetes/ssl")]),s._v("\n \n//前提是node01和node02上面需要创建/etc/kubernetes/ssl\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp *.pem node01:/etc/kubernetes/ssl")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp *.pem node02:/etc/kubernetes/ssl")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);