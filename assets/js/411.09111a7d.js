(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{755:function(s,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("kubernetes master 节点运行如下组件：")]),s._v(" "),e("ul",[e("li",[s._v("kube-apiserver")]),s._v(" "),e("li",[s._v("kube-scheduler")]),s._v(" "),e("li",[s._v("kube-controller-manager")])]),s._v(" "),e("p",[s._v("kube-scheduler 和 kube-controller-manager 可以以集群模式运行，通过 leader 选举产生一个工作进程，其它进程处于阻塞模式。")]),s._v(" "),e("p",[s._v("对于 kube-apiserver，可以运行多个实例（本文档是 3 实例），但对其它组件需要提供统一的访问地址，该地址需要高可用。本文档使用 keepalived 和 haproxy 实现 kube-apiserver VIP 高可用和负载均衡。")]),s._v(" "),e("h2",{attrs:{id:"_1-下载最新版本的二进制文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载最新版本的二进制文件"}},[s._v("#")]),s._v(" 1，下载最新版本的二进制文件")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.k8s.io/v1.10.4/kubernetes-server-linux-amd64.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" kubernetes-server-linux-amd64.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kubernetes\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v("  kubernetes-src.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("将二进制文件拷贝到所有 master 节点：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    scp server/bin/* k8s@${node_ip}:/opt/k8s/bin/\n    ssh k8s@${node_ip} "chmod +x /opt/k8s/bin/*"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);