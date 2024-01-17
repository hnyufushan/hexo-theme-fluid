(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{487:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("上一次我们安装部署了，Prometheus 以及通过部署 node_exporter 监控主机上的资源状态，并且实现了简单的邮件报警功能。本次我们通过部署 Grafana 来进行图形展示，Grafana 为我们提供了非常多的图形模板。")]),a._v(" "),t("p",[a._v("Grafana 官网：https://grafana.com/")]),a._v(" "),t("h2",{attrs:{id:"_1、下载安装-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载安装-grafana"}},[a._v("#")]),a._v(" 1、下载安装 Grafana")]),a._v(" "),t("p",[a._v("我们使用最简单的 RPM 包方式来安装，下载链接：https://grafana.com/grafana/download")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://s3-us-west-2.amazonaws.com/grafana-releases/release/grafana-5.2.4-1.x86_64.rpm\n$ yum localinstall grafana-5.2.4-1.x86_64.rpm\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("运行 Grafana 服务，默认监听在 TCP/3000 的端口上，默认用户名和密码为 “admin”。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ systemctl start grafana-server\n$ systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" grafana-server\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2、配置-grafana-添加数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置-grafana-添加数据源"}},[a._v("#")]),a._v(" 2、配置 Grafana 添加数据源")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/44db8d24b2b89560.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("填写对应的配置信息。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ce22b87bdcb83586.jpg",alt:"image"}})]),a._v(" "),t("ul",[t("li",[a._v("Name：定义数据源的名字；")]),a._v(" "),t("li",[a._v("Type：数据源类型；")]),a._v(" "),t("li",[a._v("URL：Prometheus 服务的 IP 地址和端口；")])]),a._v(" "),t("p",[a._v("其他保持默认，然后点击测试并保存。")]),a._v(" "),t("h2",{attrs:{id:"_3-导入-dashboard-模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-导入-dashboard-模板"}},[a._v("#")]),a._v(" 3，导入 Dashboard 模板")]),a._v(" "),t("p",[a._v("在 Grafana 官方提供了众多的 Dashboard 模板根据自己的需要下载一个模板导入即可。")]),a._v(" "),t("p",[a._v("我这里下载了一个 node_exporter 的图形模板：https://grafana.com/dashboards/1860")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/94df6e7cb012a568.jpg",alt:"image"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8e2d39b5c715b3dc.jpg",alt:"image"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fee69c1e3d3cab55.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("注意 localhost 处选择 Prometheus。")]),a._v(" "),t("p",[a._v("导入模板之后，仅修改 Name 和 localhost 选择为我们添加的数据源 Prometheus 即可，导入完成后就可以看到图形啦：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a53054f40962dbb1.jpg",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);