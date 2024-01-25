(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{508:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("通过如下命令，我们可以看到系统当中 TCP 状态中的情况：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ netstat -n | awk '/^tcp/ {++state[$NF]} END {for(key in state) print key,\"\\t\",state[key]}'\nLAST_ACK     192\nSYN_RECV     97\nCLOSE_WAIT   2\nESTABLISHED      14418\nFIN_WAIT1    389\nFIN_WAIT2    1706\nSYN_SENT     2\nCLOSING      51\nTIME_WAIT    17697\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("当然了，如果我们配置了系统监控，那么从 Prometheus 中看系统 TCP 状态会更加清晰。")]),t._v(" "),s("p",[t._v("主机上的 TCP 状态的 TIME_WAIT 数非常高，在三万到五万之间徘徊，这是相当高的，在分析问题原因以及给出解决方案之前，先来理解一下这个 TIME_WAIT 是个什么东东。")]),t._v(" "),s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("我们的应用对外提供服务，当 TCP 连接主动关闭时，都会经过 TIME_WAIT 状态。TCP 四次握手结束后，连接双方都不再交换消息，但主动关闭的一方会保持这个连接在一段时间内不可用。")]),t._v(" "),s("h2",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[t._v("那么，保持这么一个状态有什么用呢？")]),t._v(" "),s("p",[t._v("为了理解 TIME_WAIT 状态的必要性，我们先来假设没有这么一种状态会导致的问题。暂以 A、B 来代指 TCP 连接的两端，A 为主动关闭的一端。")]),t._v(" "),s("ul",[s("li",[t._v("四次挥手中，A 发 FIN， B 响应 ACK，B 再发 FIN，A 响应 ACK 实现连接的关闭。而如果 A 响应的 ACK 包丢失，B 会以为 A 没有收到自己的关闭请求，然后会重试向 A 再发 FIN 包。")])]),t._v(" "),s("p",[t._v("此时，如果没有 TIME_WAIT 状态，A 不再保存这个连接的信息，收到一个不存在的连接的包，A 会响应 RST 包，导致 B 端异常响应。")]),t._v(" "),s("p",[t._v("此时， TIME_WAIT 是为了保证全双工的 TCP 连接正常终止。")]),t._v(" "),s("p",[t._v("我们还知道，TCP 下的 IP 层协议是无法保证包传输的先后顺序的。如果双方挥手之后，一个网络四元组（src/dst ip/port）被回收，而此时网络中还有一个迟到的数据包没有被 B 接收，A 应用程序又立刻使用了同样的四元组再创建了一个新的连接后，这个迟到的数据包才到达 B，那么这个数据包就会让 B 以为是 A 刚发过来的。")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://t.eryajf.net/imgs/2021/09/1650e8e582a00166.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1650e8e582a00166.jpg",alt:"img"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("从如上内容的分析中，我们在解决此类问题的时候，大致有两个方向可走，一个是控制一个 TCP 连接流程在系统当中的最大时间，一个是分配的 time_wait 容量池的最大容量，从这两个角度入手，一般就能比较好的控制系统当中 time_wait 的数量。")]),t._v(" "),s("p",[t._v("而上边说到的这两个参数，则都是在内核参数当中进行配置定义的。在 sysctl.conf 当中定义如下参数：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("net.ipv4.tcp_fin_timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置单条TCP超时时间为20s，centos中默认为30s")]),t._v("\nnet.ipv4.tcp_max_tw_buckets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19400")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("在网上一些文章中，有建议将 "),s("code",[t._v("net.ipv4.tcp_max_tw_buckets")]),t._v("这个参数往大了调的，这种建议呢，或许在业务量小，没跑出系统性能的情况下，是合适的，但是如果在业务量庞大的场景下，我是不建议使劲儿把这个参数往大了调的，如果设置的过大（超过常规的 65535），那么很可能会影响正常的 TCP 请求，因此应该自行斟酌将此值设置在一个合理的范围当中。")])])}),[],!1,null,null,null);s.default=n.exports}}]);