(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{606:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-快速部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-快速部署"}},[s._v("#")]),s._v(" 1，快速部署")]),s._v(" "),a("p",[s._v("使用如下命令快速创建 VPN 服务 server 端：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" ipsec-vpn-server --env-file /data/jump/vpn/.env "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(":500/udp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4500")]),s._v(":4500/udp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /lib/modules:/lib/modules:ro "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),s._v(" registry.cn-hangzhou.aliyuncs.com/eryajf/ipsec-vpn-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中用户名密码配置文件内容为：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /data/jump/vpn/.env\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Define your own values for these variables")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - DO NOT put \"\" or '' around values, or add space around =")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - DO NOT use these special characters within values: \\ \" '")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_IPSEC_PSK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6JhixxWU0u9REqATiFrEAG0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用于登陆VPN的账号和密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("9s0RrJX4qEoQG7L32s9I\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如下应该填写本机的外网IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_PUBLIC_IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".0.2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (Optional) Define additional VPN users")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - Uncomment and replace with your own values")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - Usernames and passwords must be separated by spaces")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置额外的用户名和密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_ADDL_USERS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("user1 user2\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_ADDL_PASSWORDS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pass1 pass2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (Optional) Use alternative DNS servers")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - By default, clients are set to use Google Public DNS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - Example below shows using Cloudflare's DNS service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_DNS_SRV1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.5")]),s._v(".5.5\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VPN_DNS_SRV2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.6")]),s._v(".6.6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("一个用户名对应一个密码，如果需要新增， 更改配置文件，重启服务即可。注意服务器需要有外网 IP，以及放开对应端口。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看 IPsec VPN 服务器状态")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" ipsec-vpn-server ipsec status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查看当前已建立的 VPN 连接")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" ipsec-vpn-server ipsec whack "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--trafficstatus")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_2-客户端连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-客户端连接"}},[s._v("#")]),s._v(" 2，客户端连接")]),s._v(" "),a("p",[s._v("目前手上只有 Mac 电脑，所以着重介绍下 Mac 的连接方式。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("打开网络偏好设置详情")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fb0849c2f8e7c454.jpg",alt:"img"}})])]),s._v(" "),a("li",[a("p",[s._v("然后点击左侧加号新建连接，接口选择VPN，VPN类型选择L2TP/IPSec。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/588f39f5c9c82ca2.jpg",alt:""}})]),s._v(" "),a("p",[s._v("注意服务器地址应该填写服务端的外网 IP，账户名称则是上边对应的账号。")]),s._v(" "),a("p",[s._v("点击认证设置，需要填写密码与共享秘钥，秘钥是上边配置文件中的 "),a("code",[s._v("VPN_IPSEC_PSK")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/650bf2d17bd00ab3.jpg",alt:"img"}})])])]),s._v(" "),a("p",[s._v("还要注意一个配置项，点击下边的高级，记得勾选通过 VPN 发送所有流量：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/edac09160041938d.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("配置完毕之后，点击应用，然后点击连接，如无问题，则配置完毕。")]),s._v(" "),a("h2",{attrs:{id:"_3-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考"}},[s._v("#")]),s._v(" 3，参考")]),s._v(" "),a("ul",[a("li",[s._v("https://github.com/hwdsl2/docker-ipsec-vpn-server/blob/master/README-zh.md")]),s._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients-zh.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置 IPsec/L2TP VPN 客户端"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);