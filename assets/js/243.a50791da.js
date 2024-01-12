(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{586:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-rabbitmq-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-rabbitmq-简介"}},[s._v("#")]),s._v(" 1，RabbitMQ 简介")]),s._v(" "),a("p",[s._v("RabbitMQ 是一个开源的 AMQP 实现，服务器端用 Erlang 语言编写，支持多种客户端，如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP 等，支持 AJAX。用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。")]),s._v(" "),a("p",[s._v("AMQP，即 Advanced message Queuing Protocol，高级消息队列协议，是应用层协议的一个开放标准，为面向消息的中间件设计。消息中间件主要用于组件之间的解耦，消息的发送者无需知道消息使用者的存在，反之亦然。")]),s._v(" "),a("p",[s._v("AMQP 的主要特征是面向消息、队列、路由（包括点对点和发布 / 订阅）、可靠性、安全。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1ceCOeMaH3KVjSZFj763FWpXaD.png",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_2-环境准备。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境准备。"}},[s._v("#")]),s._v(" 2，环境准备。")]),s._v(" "),a("ul",[a("li",[s._v("CentOS 版本：CentOS Linux release 7.5.1804 (Core)")]),s._v(" "),a("li",[s._v("RabbitMQ 版本：RabbitMQ 3.6")])]),s._v(" "),a("p",[s._v("防火墙之类的全部关掉。")]),s._v(" "),a("h2",{attrs:{id:"_3-安装服务。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装服务。"}},[s._v("#")]),s._v(" 3，安装服务。")]),s._v(" "),a("h3",{attrs:{id:"_1-安装-erlang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-erlang"}},[s._v("#")]),s._v(" 1，安装 Erlang")]),s._v(" "),a("p",[s._v("RabbitMQ 安装需要依赖 Erlang 环境")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.rabbitmq.com/releases/erlang/erlang-19.0.4-1.el7.centos.x86_64.rpm\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" erlang-19.0.4-1.el7.centos.x86_64.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-安装-rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-rabbitmq"}},[s._v("#")]),s._v(" 2, 安装 RabbitMQ")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.rabbitmq.com/releases/rabbitmq-server/v3.6.10/rabbitmq-server-3.6.10-1.el7.noarch.rpm\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rabbitmq-server-3.6.10-1.el7.noarch.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动服务"}},[s._v("#")]),s._v(" 4，启动服务")]),s._v(" "),a("p",[s._v("启动前先添加一下配置信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/rabbitmq/rabbitmq.config\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("rabbit, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("loopback_users, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("这里的意思是开放使用，rabbitmq 默认创建的用户 guest，密码也是 guest，这个用户默认只能是本机访问，localhost 或者 127.0.0.1，从外部访问需要添加上面的配置。")])]),s._v(" "),a("p",[s._v("保存配置之后启动服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl start rabbitmq-server\nsystemctl status rabbitmq-server\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" rabbitmq-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_5-开启-web-管理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-开启-web-管理。"}},[s._v("#")]),s._v(" 5，开启 web 管理。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/sbin/rabbitmq-plugins "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" rabbitmq_management\nsystemctl restart rabbitmq-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("访问："),a("code",[s._v("http://127.0.0.1:15672")])]),s._v(" "),a("li",[s._v("用户名：guest")]),s._v(" "),a("li",[s._v("密码：guest")])]),s._v(" "),a("h2",{attrs:{id:"_6-创建管理用户。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-创建管理用户。"}},[s._v("#")]),s._v(" 6，创建管理用户。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("rabbitmqctl add_user rabbitmq_isj "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jfghLK&I@#MK&*hi123'")]),s._v("\nrabbitmqctl set_user_tags rabbitmq_isj administrator\nrabbitmqctl add_vhost /isj_vhost\nrabbitmqctl  set_permissions "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /isj_vhost rabbitmq_isj "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_7-参考地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-参考地址"}},[s._v("#")]),s._v(" 7，参考地址")]),s._v(" "),a("ul",[a("li",[s._v("http://t.cn/Ai09lvBE")])])])}),[],!1,null,null,null);a.default=r.exports}}]);