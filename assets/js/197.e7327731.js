(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{540:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("因为前边部署的已经是ha的rancher集群，在三个节点前边，已经通过nginx代理，完成集群的ha状态。")]),s._v(" "),t("p",[s._v("这个时候，如果某个节点宕机，是不会影响整个集群的使用的。")]),s._v(" "),t("p",[s._v("这里模拟其中一个node关机。")]),s._v(" "),t("p",[s._v("目前三个节点分别是：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("192.168.106.3\n192.168.106.4\n192.168.106.5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("此时，把"),t("code",[s._v("192.168.106.5")]),s._v("shutdown关机，然后看整个集群的状态。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rancher@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ kubectl get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\nNAME            STATUS     ROLES                      AGE   VERSION\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3   Ready      controlplane,etcd,worker   1h    v1.11.6\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4   Ready      controlplane,etcd,worker   1h    v1.11.6\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5   NotReady   controlplane,etcd,worker   1h    v1.11.6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("web管理界面在这中间可能有三到五分钟的反应时间，等待之后，去界面看看状态。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c39764d404064f37.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("看到"),t("code",[s._v("192.168.106.5")]),s._v("状态异常，但是并不影响整个集群的使用。")]),s._v(" "),t("p",[s._v("因此，推荐使用这种ha集群进行管理。")]),s._v(" "),t("p",[s._v("现在再将"),t("code",[s._v("192.168.106.5")]),s._v("主机启动，然后回到集群查看状态。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/62a4f5feac391fe5.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("又一次回到了集群的怀抱之中。")])])}),[],!1,null,null,null);t.default=n.exports}}]);