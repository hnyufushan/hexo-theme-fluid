(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{764:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Heapster 是一个收集者，将每个 Node 上的 cAdvisor 的数据进行汇总，然后导到第三方工具 (如 InfluxDB)。")]),s._v(" "),a("p",[s._v("Heapster 是通过调用 kubelet 的 http API 来获取 cAdvisor 的 metrics 数据的。")]),s._v(" "),a("p",[s._v("由于 kublet 只在 10250 端口接收 https 请求，故需要修改 heapster 的 deployment 配置。同时，需要赋予 kube-system:heapster ServiceAccount 调用 kubelet API 的权限。")]),s._v(" "),a("h2",{attrs:{id:"_1-下载-heapster-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-heapster-文件"}},[s._v("#")]),s._v(" 1，下载 heapster 文件")]),s._v(" "),a("p",[s._v("到 "),a("a",{attrs:{href:"https://github.com/kubernetes/heapster/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("heapster release 页面"),a("OutboundLink")],1),s._v(" 下载最新版本的 heapster")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/kubernetes/heapster/archive/v1.5.3.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" v1.5.3.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" v1.5.3.tar.gz heapster-1.5.3.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("官方文件目录： "),a("code",[s._v("heapster-1.5.3/deploy/kube-config/influxdb")])]),s._v(" "),a("h2",{attrs:{id:"_2-修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改配置"}},[s._v("#")]),s._v(" 2，修改配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" heapster-1.5.3/deploy/kube-config/influxdb\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" grafana.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(",.orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" grafana.yaml.orig grafana.yaml\n16c16\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("         image: gcr.io/google_containers/heapster-grafana-amd64:v4.4.3\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         image: cnych/heapster-grafana-amd64:v4.4.3\n67c67\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# type: NodePort")]),s._v("\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   type: NodePort\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("修改后文件内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" grafana.yaml\n \napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: monitoring-grafana\n  namespace: kube-system\nspec:\n  replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  template:\n    metadata:\n      labels:\n        task: monitoring\n        k8s-app: grafana\n    spec:\n      containers:\n      - name: grafana\n        image: cnych/heapster-grafana-amd64:v4.4.3\n        ports:\n        - containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n          protocol: TCP\n        volumeMounts:\n        - mountPath: /etc/ssl/certs\n          name: ca-certificates\n          readOnly: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        - mountPath: /var\n          name: grafana-storage\n        env:\n        - name: INFLUXDB_HOST\n          value: monitoring-influxdb\n        - name: GF_SERVER_HTTP_PORT\n          value: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3000"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The following env variables are required to make Grafana accessible via")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the kubernetes api-server proxy. On production clusters, we recommend")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# removing these env variables, setup auth for grafana, and expose the grafana")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service using a LoadBalancer or a public IP.")]),s._v("\n        - name: GF_AUTH_BASIC_ENABLED\n          value: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n        - name: GF_AUTH_ANONYMOUS_ENABLED\n          value: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n        - name: GF_AUTH_ANONYMOUS_ORG_ROLE\n          value: Admin\n        - name: GF_SERVER_ROOT_URL\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you're only using the API Server proxy, set this value instead:")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# value: /api/v1/namespaces/kube-system/services/monitoring-grafana/proxy")]),s._v("\n          value: /\n      volumes:\n      - name: ca-certificates\n        hostPath:\n          path: /etc/ssl/certs\n      - name: grafana-storage\n        emptyDir: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you are NOT using this as an addon, you should comment out this line.")]),s._v("\n    kubernetes.io/cluster-service: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n    kubernetes.io/name: monitoring-grafana\n  name: monitoring-grafana\n  namespace: kube-system\nspec:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# In a production setup, we recommend accessing Grafana through an external Loadbalancer")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or through a public IP.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# type: LoadBalancer")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You could also use NodePort to expose the service at a randomly-generated port")]),s._v("\n  type: NodePort\n  ports:\n  - port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    targetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n  selector:\n    k8s-app: grafana\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br")])]),a("ul",[a("li",[s._v("镜像更改成自己已经 pull 好了的，并且开启 NodePort。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" heapster.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(",.orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$diff")]),s._v(" heapster.yaml.orig heapster.yaml\n23c23\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("         image: gcr.io/google_containers/heapster-amd64:v1.5.3\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         image: cnych/heapster-amd64:v1.4.2\n27c27\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("         - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--source")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes:https://kubernetes.default\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--source")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes:https://kubernetes.default?kubeletHttps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kubeletPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10250")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("修改后文件内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" heapster.yaml\n \napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: heapster\n  namespace: kube-system\n---\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: heapster\n  namespace: kube-system\nspec:\n  replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  template:\n    metadata:\n      labels:\n        task: monitoring\n        k8s-app: heapster\n    spec:\n      serviceAccountName: heapster\n      containers:\n      - name: heapster\n        image: cnych/heapster-amd64:v1.4.2\n        imagePullPolicy: IfNotPresent\n        command:\n        - /heapster\n        - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--source")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes:https://kubernetes.default?kubeletHttps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kubeletPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10250")]),s._v("\n        - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--sink")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("influxdb:http://monitoring-influxdb.kube-system.svc:8086\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    task: monitoring\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you are NOT using this as an addon, you should comment out this line.")]),s._v("\n    kubernetes.io/cluster-service: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n    kubernetes.io/name: Heapster\n  name: heapster\n  namespace: kube-system\nspec:\n  ports:\n  - port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    targetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n  selector:\n    k8s-app: heapster\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("ul",[a("li",[s._v("由于 kubelet 只在 10250 监听 https 请求，故添加相关参数；")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" influxdb.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(",.orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" influxdb.yaml.orig influxdb.yaml\n16c16\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("         image: gcr.io/google_containers/heapster-influxdb-amd64:v1.3.3\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         image: cnych/heapster-influxdb-amd64:v1.3.3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("修改后文件内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" influxdb.yaml\n \napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: monitoring-influxdb\n  namespace: kube-system\nspec:\n  replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  template:\n    metadata:\n      labels:\n        task: monitoring\n        k8s-app: influxdb\n    spec:\n      containers:\n      - name: influxdb\n        image: cnych/heapster-influxdb-amd64:v1.3.3\n        volumeMounts:\n        - mountPath: /data\n          name: influxdb-storage\n      volumes:\n      - name: influxdb-storage\n        emptyDir: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    task: monitoring\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you are NOT using this as an addon, you should comment out this line.")]),s._v("\n    kubernetes.io/cluster-service: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n    kubernetes.io/name: monitoring-influxdb\n  name: monitoring-influxdb\n  namespace: kube-system\nspec:\n  ports:\n  - port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v("\n    targetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v("\n  selector:\n    k8s-app: influxdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h2",{attrs:{id:"_3-执行所有定义文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行所有定义文件"}},[s._v("#")]),s._v(" 3，执行所有定义文件")]),s._v(" "),a("p",[s._v("修改后的文件内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" heapster-rbac.yaml\n \nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: heapster\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:heapster\nsubjects:\n- kind: ServiceAccount\n  name: heapster\n  namespace: kube-system\n \n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: heapster-kubelet-api\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:kubelet-api-admin\nsubjects:\n- kind: ServiceAccount\n  name: heapster\n  namespace: kube-system\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("ul",[a("li",[s._v("将 serviceAccount kube-system:heapster 与 ClusterRole system:kubelet-api-admin 绑定，授予它调用 kubelet API 的权限；")])]),s._v(" "),a("h2",{attrs:{id:"_4-检查执行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-检查执行结果"}},[s._v("#")]),s._v(" 4，检查执行结果")]),s._v(" "),a("p",[s._v("检查 kubernets dashboard 界面，可以正确显示各 Nodes、Pods 的 CPU、内存、负载等统计数据和图表：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/429bee36339b3bb0.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_5-访问-grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-访问-grafana"}},[s._v("#")]),s._v(" 5，访问 grafana")]),s._v(" "),a("h3",{attrs:{id:"_1-通过-kube-apiserver-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过-kube-apiserver-访问"}},[s._v("#")]),s._v(" 1. 通过 kube-apiserver 访问")]),s._v(" "),a("p",[s._v("获取 monitoring-grafana 服务 URL：")]),s._v(" "),a("p",[s._v("浏览器访问 URL： "),a("code",[s._v("https://192.168.106.110:8443/api/v1/namespaces/kube-system/services/monitoring-grafana/proxy")])]),s._v(" "),a("h3",{attrs:{id:"_2-通过-kubectl-proxy-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过-kubectl-proxy-访问"}},[s._v("#")]),s._v(" 2，通过 kubectl proxy 访问：")]),s._v(" "),a("p",[s._v("创建代理")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl proxy "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.106.5'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v(" --accept-hosts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^*$'")]),s._v("\nStarting to serve on "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5:8086\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("浏览器访问 URL："),a("code",[s._v("http://192.168.106.5:8086/api/v1/namespaces/kube-system/services/monitoring-grafana/proxy/?orgId=1")])]),s._v(" "),a("h3",{attrs:{id:"_3-通过-nodeport-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过-nodeport-访问"}},[s._v("#")]),s._v(" 3，通过 NodePort 访问：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get svc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'monitoring|heapster'")]),s._v("\nheapster               ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".34.87    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/TCP          12m\nmonitoring-grafana     NodePort    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".186.62   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":8654/TCP     12m\nmonitoring-influxdb    ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".55.105   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v("/TCP        12m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("grafana 监听 NodePort 8654；")])]),s._v(" "),a("p",[s._v("浏览器访问 URL："),a("code",[s._v("http://192.168.106.3:8654/?orgId=1")])]),s._v(" "),a("p",[s._v("那么，这个时候，可以通过如下几种方式访问到 grafana 服务：")]),s._v(" "),a("ul",[a("li",[s._v("http://192.168.106.3:8654/?orgId=1")]),s._v(" "),a("li",[s._v("http://192.168.106.4:8654/?orgId=1")]),s._v(" "),a("li",[s._v("http://192.168.106.5:8654/?orgId=1")]),s._v(" "),a("li",[s._v("https://192.168.106.110:8443/api/v1/namespaces/kube-system/services/monitoring-grafana/proxy")])]),s._v(" "),a("p",[s._v("进去之后可以点击一下集群，看看里边的一些信息：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/264a3b098edc5bbe.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_6-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-参考"}},[s._v("#")]),s._v(" 6，参考：")]),s._v(" "),a("ol",[a("li",[s._v("配置 heapster：https://github.com/kubernetes/heapster/blob/master/docs/source-configuration.md")])])])}),[],!1,null,null,null);a.default=t.exports}}]);