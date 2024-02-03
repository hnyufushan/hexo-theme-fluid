(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{769:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("现在，再去了解一个新的定义方式。")]),s._v(" "),n("p",[s._v("了解之前，先将刚刚的 pod 删除。")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl delete "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('f rc_nginx.yml\nreplicationcontroller "nginx" deleted\n'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get pods\nNAME          READY     STATUS        RESTARTS   AGE\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("99nns   0/1       Terminating   0          6m\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c5nk4   0/1       Terminating   0          49m\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("fjnrn   0/1       Terminating   0          6m\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r2zcm   0/1       Terminating   0          49m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get pods\nNAME          READY     STATUS        RESTARTS   AGE\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("fjnrn   0/1       Terminating   0          6m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get pods\nNo resources found.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("可以看到 pod 会慢慢的消失掉，有点淡入淡出的那种感觉哈。")]),s._v(" "),n("p",[s._v("那么新的定义类型叫做"),n("code",[s._v("ReplicaSet")]),s._v("。")]),s._v(" "),n("p",[s._v("其实这个定义方式与上边介绍的"),n("code",[s._v("ReplicationController")]),s._v("非常像，官网这样介绍：")]),s._v(" "),n("p",[s._v("ReplicaSet 是下一代复制控制器。现在 ReplicaSet 和 Replication Controller 之间的唯一区别是选择器支持。ReplicaSet 支持标签用户指南中描述的新的基于集合的选择器要求， 而 Replication Controller 仅支持基于等同的选择器要求。")]),s._v(" "),n("p",[s._v("同样是定义一个 yaml 文件，如下：")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$cat rs_nginx.yml\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ReplicaSet\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tier")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" frontend\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tier")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" frontend\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tier")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" frontend\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containerPort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("创建 pod:")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl create "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('f rs_nginx.yml\nreplicaset.apps "nginx" created\n'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get pods\nNAME          READY     STATUS              RESTARTS   AGE\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4vp95   1/1       Running             0          8s\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("9xxp6   0/1       ContainerCreating   0          8s\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f8vfg   1/1       Running             0          8s\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get rs\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     3         3         1         4s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("关于扩展等，与上边的一样。")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl scale rs nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('replicas=2\nreplicaset.extensions "nginx" scaled\n'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get pods\nNAME          READY     STATUS        RESTARTS   AGE\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4vp95   1/1       Running       0          1m\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("9xxp6   0/1       Terminating   0          1m\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f8vfg   1/1       Running       0          1m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get rs\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     2         2         2         1m\n \n \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl scale rs nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('replicas=5\nreplicaset.extensions "nginx" scaled\n'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get pods\nNAME          READY     STATUS              RESTARTS   AGE\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4vp95   1/1       Running             0          2m\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bbxpk   0/1       ContainerCreating   0          2s\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cg8ts   0/1       ContainerCreating   0          2s\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f8vfg   1/1       Running             0          2m\nnginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sgvpd   0/1       ContainerCreating   0          2s\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get rs\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     5         5         3         2m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get rs\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     5         5         4         2m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$kubectl get rs\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     5         5         5         2m\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("这个知识点，就到这里，可以根据以上的一些小实践，理解其工作方式！")])])}),[],!1,null,null,null);n.default=e.exports}}]);