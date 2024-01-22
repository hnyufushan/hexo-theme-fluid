(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{490:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-引子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-引子"}},[s._v("#")]),s._v(" 1，引子")]),s._v(" "),t("p",[s._v("在 prometheus 当中，如果想要查询每台服务器每 1 分钟的 CPU 负载是多少，则需要使用如下的查询语句进行查询：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total{mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v('"idle"}['),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m]"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v(" by "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" by "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输入到查询框之后，直接回车，返回的是对应结果的 value，点击 Graph 可以看到比较简单的图，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2bdb80f8d84936d4.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("在我没有深入了解学习 prometheus 之前，看到这样的查询语句，早就已经蒙圈了，我也正是好多次被这样繁复的语句给吓到，从而始终没有入了 Prometheus 的门，大多时候，作为运维的我们，在习惯了 zabbix 的各种点点点就能出图的方式之后，就相对比较抵触这种像编程一样的监控方式，而且从上边截图看起来，一切也都并不那么优雅美观，于是，我们就在内心里把 Prometheus 判了死刑。")]),s._v(" "),t("p",[s._v("但是，如果我们真正能够放下自己内心的成见，花一些时间，用心体会了 Prometheus 的设计思路已经监控方式之后，应该会被这种细致与简洁吸引。")]),s._v(" "),t("p",[s._v("在 Prometheus 中，这种特有的查询方式，被称作 PromQL (Prometheus Query Language) ，PromQL 是 Prometheus 自己开发的数据查询 DSL 语言，语言表现力非常丰富，官方也提供了许多非常丰富的函数供我们使用，我们以后的监控大盘的绘制，以及告警规则的定义，都会用到它。")]),s._v(" "),t("p",[s._v("接下来我就先从最简单也最常见的关于 CPU 的监控说起，一步一步来探析 Prometheus 针对 exporter 暴漏出来的 metrics 是如何处理成我们想要的结果的。")]),s._v(" "),t("h2",{attrs:{id:"_2-关于-cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-关于-cpu"}},[s._v("#")]),s._v(" 2，关于 CPU")]),s._v(" "),t("h3",{attrs:{id:"_1-问两个问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-问两个问题"}},[s._v("#")]),s._v(" 1，问两个问题")]),s._v(" "),t("p",[s._v("在进行真正的所谓的 CPU 负载或者使用率的查询方法介绍之前，我们不妨先想一个问题，那就是，Linux 服务器中，CPU 负载或者使用率是如何查看的呢？如果这个问题探究明白了，那么 Prometheus 当中如何查询也就不难了。")]),s._v(" "),t("p",[s._v("作为运维老手，我们应该都能很容易想到日常工作中，查看 CPU 的使用情况直接用 "),t("code",[s._v("w")]),s._v("命令，或者 "),t("code",[s._v("top")]),s._v("（"),t("code",[s._v("htop")]),s._v("）等命令进行查看，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e8c76187c3ac5511.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("从上图能大概看出此时 CPU 使用率占比较高的一些进程情况，以及服务器整体 CPU 的大概情况，如果想要看每颗 CPU 的使用情况，还可以按一下 1，查看每颗的使用占比：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3d3bc76ec984f7b8.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("看起来刚刚的问题似乎并不复杂，监控工具采集的时候也模仿刚刚的命令即可。那么，此时或许可以再问一步，是不是可以想想，这些命令 "),t("code",[s._v("w")]),s._v(","),t("code",[s._v("top")]),s._v("又是怎么得出的 CPU 使用百分比的呢？这个问题，才是我这里真正想要问的问题，那么，我们就带着这个问题，开启今天关于如何在 Prometheus 中查询主机 CPU 使用情况的旅程。")]),s._v(" "),t("h3",{attrs:{id:"_2-cpu-详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-cpu-详解"}},[s._v("#")]),s._v(" 2，CPU 详解")]),s._v(" "),t("p",[s._v("通常在 Prometheus 当中，我们通过 "),t("code",[s._v("node_exporter")]),s._v("来获取主机相关的一些信息，在任意一台安装了"),t("code",[s._v("node_exporter")]),s._v("的主机上执行如下命令，可以查看所有的 metrics。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9100/metrics\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("请求之后会返回很多的内容，这里只把 CPU 相关的摘出来，便于后边分析理解：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HELP node_cpu_seconds_total Seconds the cpus spent in each mode.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TYPE node_cpu_seconds_total counter")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".5753192e+06\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iowait"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2862.38")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"irq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nice"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10430.32")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"softirq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1593.13")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"steal"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20133.98")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114790.89")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".53955659e+06\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iowait"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3402")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"irq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nice"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15018.42")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"softirq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1084.01")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"steal"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23992.78")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("139793.89")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".50768181e+06\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iowait"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3373.99")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"irq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nice"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13949.32")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"softirq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1047.97")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"steal"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22868.3")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175018.57")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".54823306e+06\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iowait"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3286.86")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"irq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nice"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14471.86")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"softirq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("996.37")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"steal"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22494.83")]),s._v("\nnode_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(",mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("135483.97")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("p",[s._v("这组数据，看最开头的两行注释，可以了解到这是一个 counter 类型的，记录了各个模式 (这个翻译未必准备) 所花费的时间 (一定要注意这个地方的值是一个时间的数值) 的 metrics。")]),s._v(" "),t("p",[s._v("有人可能会想，我就想查询一下 CPU 的使用情况，一下子整出来这么一大堆东东，都是什么鬼额，其实不用惊慌，让我们去繁就简，拨开云雾，一切就都清晰了。")]),s._v(" "),t("p",[s._v("首先看到 metrics 的 key 为 "),t("code",[s._v("node_cpu_seconds_total")]),s._v("，表示 CPU 使用时间，大括号里的内容表示对前边的 key 进行二次细分，mode 表示各个模式，CPU 表示各个 CPU(我这台机器 4 核，所以看到是 4 组)，大括号外边就是 key 对应的 value 了。")]),s._v(" "),t("p",[s._v("那么，先去掉四分之三，剩下一组，来看单颗 CPU，仍然有八项内容，不过，只要弄明白了每个 mode 的含义，在倒推回来，理解 CPU 的使用率就不难了。")]),s._v(" "),t("p",[s._v("这里的 mode，与上边 top 命令中看到的，是一样的，每个 mode 对应的含义如下：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("user")]),s._v("(us)\n表示用户态空间或者说是用户进程 (running user space processes) 使用 CPU 所耗费的时间。这是日常我们部署的应用所在的层面，最常见常用。")]),s._v(" "),t("li",[t("code",[s._v("system")]),s._v("(sy)\n表示内核态层级使用 CPU 所耗费的时间。分配内存、IO 操作、创建子进程…… 都是内核操作。这也表明，当 IO 操作频繁时，System 参数会很高。")]),s._v(" "),t("li",[t("code",[s._v("steal")]),s._v("(st)\n当运行在虚拟化环境中，花费在其它 OS 中的时间（基于虚拟机监视器 hypervisor 的调度）；可以理解成由于虚拟机调度器将 cpu 时间用于其它 OS 了，故当前 OS 无法使用 CPU 的时间。")]),s._v(" "),t("li",[t("code",[s._v("softirq")]),s._v("(si)\n从系统启动开始，累计到当前时刻，软中断时间")]),s._v(" "),t("li",[t("code",[s._v("irq")]),s._v("(hi)\n从系统启动开始，累计到当前时刻，硬中断时间")]),s._v(" "),t("li",[t("code",[s._v("nice")]),s._v("(ni)\n从系统启动开始，累计到当前时刻， 低优先级 (低优先级意味着进程 nice 值小于 0) 用户态的进程所占用的 CPU 时间")]),s._v(" "),t("li",[t("code",[s._v("iowait")]),s._v("(wa)\n从系统启动开始，累计到当前时刻，IO 等待时间")]),s._v(" "),t("li",[t("code",[s._v("idle")]),s._v("(id)\n从系统启动开始，累计到当前时刻，除 IO 等待时间以外的其它等待时间，亦即空闲时间")])]),s._v(" "),t("p",[s._v("理论当中，下边等式是成立的：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("total "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user + "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nice")]),s._v(" + system + idle + iowait + irq + softirq + steal\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意： "),t("code",[s._v("guest")]),s._v(" 以及 "),t("code",[s._v("guest_nice")]),s._v(" 不参与求和计算，因为这两种时间分别作为 user 以及 nice 的一部分统计在其中了。")]),s._v(" "),t("p",[s._v("那么，正是基于如上一个等式，我们想要计算主机 CPU 的使用率的时候，只需要看看正常工作使用的时间占所有时间的比重是多少就可以了。谈到这里，基本上我们就能隐隐对这些概念有一个模糊的认识了，接着可以得出如下的一些等式：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("%us"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("User "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" + Nice "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n%sy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("System "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" + Hard Irq "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" +SoftIRQ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n%id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Idle "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n%ni"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Nice "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n%wa"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Waiting "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n%hi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Hard Irq "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n%si"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SoftIRQ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n%st"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Steal "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/total * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("现在，我们已经弄清楚了 CPU 当中一些计算的逻辑与方式，就可以倒推回去，再把一开始展示的 CPU 使用率计算公式拿出来，逐段进行解析了。")]),s._v(" "),t("h2",{attrs:{id:"_3-再回首"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-再回首"}},[s._v("#")]),s._v(" 3，再回首")]),s._v(" "),t("p",[s._v("再回首的时候，让我再一次将开头的命令拿过来进行一下简单解析：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total{mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v('"idle"}['),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m]"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v(" by "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("increase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node_cpu_seconds_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" by "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在再来理解这个计算语句就不是那么困难了，根据括号我们可以粗略将如上内容拆分成三个部分：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('1-((sum(increase(node_cpu_seconds_total{mode="idle"}[1m])) by (instance))')]),s._v("：这句话从内到外进行解析，后边计算的是 1 分钟内所有 CPU 的空闲时间，前边 1 减去这个时间，得出的就是正常使用的时间。")]),s._v(" "),t("li",[t("code",[s._v("(sum(increase(node_cpu_seconds_total[1m])) by (instance)))")]),s._v("：这句话表达的意思更加简单，就是计算 1 分钟内，CPU 的总时间。")]),s._v(" "),t("li",[s._v("剩下的部分，直白说就是 "),t("code",[s._v("使用时间")]),s._v(" 除以 "),t("code",[s._v("总时间")]),s._v(" 再乘以 "),t("code",[s._v("一百")]),s._v(" 最终得出 1 分钟内 CPU 的使用率。")])]),s._v(" "),t("p",[s._v("解析完毕之后，我们大概就能理解了，Prometheus 在获取一些监控指标的内容是，大体的思路与方法，当然，上边的解析还是有一些粗糙的，并没有深入讲解其中的函数，以及其他一些表现方式的含义，这些内容，自然又会单独另外一篇文章进行分析。")]),s._v(" "),t("ul",[t("li",[s._v("参考地址：\n"),t("ul",[t("li",[t("a",{attrs:{href:"http://t.cn/zYJ4bT2",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://t.cn/zYJ4bT2"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://t.cn/AikMQEea",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://t.cn/AikMQEea"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);