(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{742:function(s,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("部署 kubectl 工具，创建 kubeconfig 文件。")]),s._v(" "),e("p",[s._v("kubectl 是 kubernetes 的集群管理工具，任一集群中的节点都可以通过 kubetcl 被管理。")]),s._v(" "),e("p",[s._v("本文是在 "),e("code",[s._v("master节点")]),s._v(" 部署，部署成功后会生成 /root/.kube/config 文件，kubectl 就是通过这个获取 kube-apiserver 地址、证书、用户名等信息，所以这个文件需要保管好。")]),s._v(" "),e("h2",{attrs:{id:"_1-下载安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装包"}},[s._v("#")]),s._v(" 1，下载安装包")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://dl.k8s.io/v1.8.6/kubernetes-client-linux-amd64.tar.gz")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -xzvf kubernetes-client-linux-amd64.tar.gz")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo cp kubernetes/client/bin/kube* /usr/local/bin/")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod a+x /usr/local/bin/kube*")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export PATH=/root/local/bin:$PATH")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"_2-创建-root-kube-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-root-kube-config"}},[s._v("#")]),s._v(" 2，创建 / root/.kube/config")]),s._v(" "),e("h3",{attrs:{id:"_1-设置集群参数-server-指定-master-节点-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置集群参数-server-指定-master-节点-ip"}},[s._v("#")]),s._v(" 1，设置集群参数,–server 指定 Master 节点 ip")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-cluster kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--server")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://192.168.106.3:6443\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_2-设置客户端认证参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置客户端认证参数"}},[s._v("#")]),s._v(" 2，设置客户端认证参数")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-credentials admin "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-certificate"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/admin.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/admin-key.pem\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_3-设置上下文参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置上下文参数"}},[s._v("#")]),s._v(" 3，设置上下文参数")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-context kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"_4-设置默认上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置默认上下文"}},[s._v("#")]),s._v(" 4，设置默认上下文")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config use-context kubernetes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("admin.pem 证书 O 字段值为 system:masters，kube-apiserver 预定义的 RoleBinding cluster-admin 将 Group system:masters 与 Role cluster-admin 绑定，该 Role 授予了调用 kube-apiserver 相关 API 的权限。")]),s._v(" "),e("h2",{attrs:{id:"_3-创建-bootstrap-kubeconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-bootstrap-kubeconfig"}},[s._v("#")]),s._v(" 3，创建 bootstrap.kubeconfig")]),s._v(" "),e("p",[s._v("kubelet 访问 kube-apiserver 的时候是通过 bootstrap.kubeconfig 进行用户验证。")]),s._v(" "),e("h3",{attrs:{id:"_1-生成-token-变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成-token-变量"}},[s._v("#")]),s._v(" 1，生成 token 变量")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export BOOTSTRAP_TOKEN=$(head -c 16 /dev/urandom | od -An -t x | tr -d ' ')")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat > token.csv <<EOF")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BOOTSTRAP_TOKEN}")]),s._v(",kubelet-bootstrap,10001,"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system:kubelet-bootstrap"')]),s._v("\nEOF\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv token.csv /etc/kubernetes/")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"_2-设置集群参数-server-为-master-节点-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置集群参数-server-为-master-节点-ip"}},[s._v("#")]),s._v(" 2，设置集群参数–server 为 master 节点 ip")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-cluster kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--server")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://192.168.106.3:6443 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bootstrap.kubeconfig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_3-设置客户端认证参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置客户端认证参数"}},[s._v("#")]),s._v(" 3，设置客户端认证参数")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-credentials kubelet-bootstrap "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--token")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BOOTSTRAP_TOKEN}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bootstrap.kubeconfig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"_4-设置上下文参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置上下文参数"}},[s._v("#")]),s._v(" 4，设置上下文参数")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl config set-context default \\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubelet-bootstrap "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bootstrap.kubeconfig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_5-设置默认上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-设置默认上下文"}},[s._v("#")]),s._v(" 5，设置默认上下文")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl config use-context default --kubeconfig=bootstrap.kubeconfig")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv bootstrap.kubeconfig /etc/kubernetes/")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"_4-创建-kube-proxy-kubeconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-kube-proxy-kubeconfig"}},[s._v("#")]),s._v(" 4，创建 kube-proxy.kubeconfig")]),s._v(" "),e("h3",{attrs:{id:"_1-设置集群参数-server-参数为-master-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置集群参数-server-参数为-master-ip"}},[s._v("#")]),s._v(" 1，设置集群参数 –server 参数为 master ip")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-cluster kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--server")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://192.168.106.3:6443 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\n \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"_2-设置客户端认证参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置客户端认证参数-2"}},[s._v("#")]),s._v(" 2，设置客户端认证参数")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-credentials kube-proxy "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-certificate"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kube-proxy.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kube-proxy-key.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_3-设置上下文参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置上下文参数-2"}},[s._v("#")]),s._v(" 3，设置上下文参数")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl config set-context default "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--kubeconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_4-设置默认上下文-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置默认上下文-2"}},[s._v("#")]),s._v(" 4，设置默认上下文")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl config use-context default --kubeconfig=kube-proxy.kubeconfig")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv kube-proxy.kubeconfig /etc/kubernetes/")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("设置集群参数和客户端认证参数时 –embed-certs 都为 true，这会将 certificate-authority、client-certificate 和 client-key 指向的证书文件内容写入到生成的 kube-proxy.kubeconfig 文件中；")]),s._v(" "),e("p",[s._v("kube-proxy.pem 证书中 CN 为 system:kube-proxy，kube-apiserver 预定义的 RoleBinding cluster-admin 将 User system:kube-proxy 与 Role system:node-proxier 绑定，该 Role 授予了调用 kube-apiserver Proxy 相关 API 的权限；")]),s._v(" "),e("h2",{attrs:{id:"_5-同步配置文件。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-同步配置文件。"}},[s._v("#")]),s._v(" 5，同步配置文件。")]),s._v(" "),e("p",[s._v("生成的 bootstrap.kubeconfig，kube-proxy.kubeconfig 文件拷贝到其它 node 节点的 / etc/kubernetes 目录下。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/kube-proxy.kubeconfig node01:/etc/kubernetes/")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/bootstrap.kubeconfig  node01:/etc/kubernetes/")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/kube-proxy.kubeconfig node02:/etc/kubernetes/")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/bootstrap.kubeconfig  node02:/etc/kubernetes/")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);