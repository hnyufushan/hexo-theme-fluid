(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{777:function(s,e,t){"use strict";t.r(e);var a=t(0),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("部署了 kubegems，然后集群接入了，后来没再使用，再删除集群的命名空间时，遇到了如下的报错：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ kubectl delete ns "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nError from server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("InternalError"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Internal error occurred: failed calling webhook "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"valiate.namespace.dev"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Post "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://kubegems-local-controller-webhook.kubegems-local.svc:443/validate?timeout=10s"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubegems-local-controller-webhook"')]),s._v(" not found\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("此时，需要先删除如下资源，然后再执行 delete 就不会报错了：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ kubectl delete  validatingwebhookconfiguration kubegems-local-controller-webhook\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("validatingwebhookconfiguration 是 k8s 中一种 webhook，表示接受或拒绝和对象而不更改它的准入 Webhook 的配置。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://t.eryajf.net/imgs/2023/07/1689427215160.jpg",alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);