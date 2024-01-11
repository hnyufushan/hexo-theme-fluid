(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{582:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-no-help-topic-for-put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-no-help-topic-for-put"}},[t._v("#")]),t._v(" 1，No help topic for ‘put’")]),t._v(" "),s("p",[t._v("在 put 一个信息的时候看到失败了，报错 "),s("code",[t._v("No help topic for 'put'")]),t._v("，解决方法是设置如下环境变量：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后再执行如上命令，发现就可以成功了。")]),t._v(" "),s("p",[t._v("获取如上信息：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ etcdctl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--endpoints")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://192.168.0.122:2379,http://192.168.0.122:2377,http://192.168.0.122:2378 get eryajf\neryajf\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f8a56ba3c4de2386.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_2-go-mod-中报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-go-mod-中报错"}},[t._v("#")]),t._v(" 2，go mod 中报错")]),t._v(" "),s("p",[t._v("在项目当中引入了 go mod 进行管理，然后 "),s("code",[t._v("go get go.etcd.io/etcd/clientv3")]),t._v(" 项目，过程中报错如下：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# github.com/coreos/etcd/clientv3/balancer/resolver/endpoint")]),t._v("\nvendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("github.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("coreos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("etcd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("clientv3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("balancer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("resolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("endpoint.go:114:78: undefined: resolver.BuildOption\nvendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("github.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("coreos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("etcd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("clientv3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("balancer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("resolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("endpoint.go:182:31: undefined: resolver.ResolveNowOption\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# github.com/coreos/etcd/clientv3/balancer/picker")]),t._v("\nvendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("github.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("coreos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("etcd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("clientv3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("balancer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("picker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("err.go:37:44: undefined: balancer.PickOptions\nvendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("github.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("coreos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("etcd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("clientv3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("balancer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("picker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("roundrobin_balanced.go:55:54: undefined: balancer.PickOptions\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("原因："),s("code",[t._v("需要将grpc1.27.1 替换成grpc1.26.0版本")])]),t._v(" "),s("p",[t._v("解决：此时可以点开"),s("code",[t._v("go.mod")]),t._v("文件，将"),s("code",[t._v("google.golang.org/grpc v1.27.1 *// indirect*")]),t._v("更改为 "),s("code",[t._v("google.golang.org/grpc v1.26.0 *// indirect*")]),t._v("。")]),t._v(" "),s("p",[t._v("然后再 go get 即可。")]),t._v(" "),s("p",[t._v("参考：https://segmentfault.com/q/1010000021762281/")])])}),[],!1,null,null,null);s.default=e.exports}}]);