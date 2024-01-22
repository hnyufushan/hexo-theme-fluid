(window.webpackJsonp=window.webpackJsonp||[]).push([[737],{1081:function(s,e,a){"use strict";a.r(e);var r=a(0),t=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Docker 安装 MySQL")]),s._v(" "),e("h2",{attrs:{id:"_1-查看可用的-mysql-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看可用的-mysql-版本"}},[s._v("#")]),s._v(" 1，查看可用的 MySQL 版本")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[s._v("docker search mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-拉取-mysql-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取-mysql-镜像"}},[s._v("#")]),s._v(" 2，拉取 MySQL 镜像：")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[s._v("docker pull mysql:latest\n或者 docker pull mysql:5.7 指定版本\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_3-查看本地镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看本地镜像"}},[s._v("#")]),s._v(" 3，查看本地镜像")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4、运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、运行容器"}},[s._v("#")]),s._v(" 4、运行容器")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[s._v("docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("参数说明：")])]),s._v(" "),e("li",[e("p",[s._v("-p 3306:3306 ：映射容器服务的 3306 端口到宿主机的 3306 端口，外部主机可以直接通过 宿主机ip:3306 访问到 MySQL 的服务。")])]),s._v(" "),e("li",[e("p",[s._v("MYSQL_ROOT_PASSWORD=123456：设置 MySQL 服务 root 用户的密码。")])]),s._v(" "),e("li",[e("p",[s._v("本机可以通过 root 和密码 123456 访问 MySQL 服务。")])])]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[s._v("docker exec -it 7acd76fa021a /bin/bash 进入容器执行如下命令\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/10012.png",alt:""}})])])}),[],!1,null,null,null);e.default=t.exports}}]);