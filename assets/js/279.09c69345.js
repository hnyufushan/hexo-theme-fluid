(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{624:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在防火墙配置策略当中有 SNAT 以及 DNAT 之分，两者各有区别，今天先来说明一下 SNAT。")]),s._v(" "),a("p",[s._v("多应用在公司只有一个外网 IP, 那么整个公司的内网, 该怎么上网呢?")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bbe8d489eae0c756.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("要想都能够访问外网, 就可以通过防火墙规则将它们出去时的源地址修改成唯一的公网 IP, 然后与外网对接, 数据返回之后, 它再交给内网 (局域网)PC 机。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/87d3a39488ca31c2.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("现在可以通过简单的实验来做个验证。")]),s._v(" "),a("p",[s._v("主机 A: 模拟内网主机 eth0 192.168.66.10")]),s._v(" "),a("p",[s._v("主机 B: 模拟网关服务器 eth0 192.168.66.20\neth1 200.200.200.10")]),s._v(" "),a("p",[s._v("主机 C: 模拟外网 Web 站点 eth0 200.200.200.20")]),s._v(" "),a("p",[a("code",[s._v("条件")]),s._v("：")]),s._v(" "),a("p",[s._v("1， 内网各主机将设置正确的 IP 地址 / 子网掩码，并设置网关服务器的内网 IP 为默认网关地址。（可由 DHCP 服务器分发）")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("route "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" default gw "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.20\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2， 网关服务器支持 IP 路由转发，并编写 SNAT 转换规则。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysctl.conf\n其中的net.ipv4.ip_forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启转发")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加载一下")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#iptables -t nat -A POSTROUTING -s 192.168.66.0/24 -o eth1 -j SNAT --to-source 200.200.200.10\t")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解释这条规则如下：")]),s._v(" "),a("p",[s._v("#在防火墙的 nat 表当中的 POSTROUTING 链上添加（-A）一条规则，规则是从（-s）66 网段过来的请求，出去（-o OPUTPUT）的时候都走 eth1（外网网卡），做的动作（-j）是转换它的源地址（SNAT）为 200.200.200.10")]),s._v(" "),a("p",[s._v("查看一下这条规则")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/869ddd1285dda213.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("3， 外网服务器，安装 apache，写一个测试网页！")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" “11111” "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  /var/www/html/index.html\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("测试")]),s._v("：")]),s._v(" "),a("p",[s._v("直接在内网主机输入 curl 200.200.200.20，如果访问到，则说明成功。")]),s._v(" "),a("p",[a("code",[s._v("插曲")]),s._v("：")]),s._v(" "),a("p",[s._v("上边是针对企业中常应用的，但在家庭当中，很少有固定地址，一般都是动态地址，也就是说，出去的跳板是变动的，这样刚才所设置的规则就不行了，不过现在可以通过一个叫做 MASQUERADE—- 地址伪装来解决。")]),s._v(" "),a("p",[s._v("按刚才的环境不变，清空刚才的的防火墙规则。重新添加。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("iptables\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" nat\niptables "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" nat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v(" POSTROUTING "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.0/24 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" eth1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" MASQUERADE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c153c386284c2a43.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("ok，现在，可以模拟改变外网 IP")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200.200")]),s._v(".200.200 netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("测试")]),s._v("：")]),s._v(" "),a("p",[s._v("直接在内网主机输入 curl 200.200.200.20，如果访问到，则说明成功。")])])}),[],!1,null,null,null);a.default=n.exports}}]);