(window.webpackJsonp=window.webpackJsonp||[]).push([[739],{1082:function(s,e,a){"use strict";a.r(e);var r=a(0),t=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("docker安装Redis详细步骤")]),s._v(" "),e("h2",{attrs:{id:"_1-查看可用的-redis-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看可用的-redis-版本"}},[s._v("#")]),s._v(" 1，查看可用的 redis 版本")]),s._v(" "),e("ul",[e("li",[s._v("运行一下命令")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search redis\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-拉取-mysql-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取-mysql-镜像"}},[s._v("#")]),s._v(" 2，拉取 MySQL 镜像")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[s._v("docker pull redis:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-查看本地镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看本地镜像"}},[s._v("#")]),s._v(" 3，查看本地镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4、运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、运行容器"}},[s._v("#")]),s._v(" 4、运行容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -itd --name redis -p 6379:6379 redis --requirepass 123456\n参数说明：\n-p 6379:6379：映射容器服务的 6379 端口到宿主机的 6379 端口。外部可以直接通过宿主机ip:6379 访问到 Redis 的服务。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"_5、redis设置密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、redis设置密码"}},[s._v("#")]),s._v(" 5、redis设置密码：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("1.进入redis的容器 docker exec -it 容器ID bash\n2.进入redis目录 cd /usr/local/bin\n3.运行命令：redis-cli\n4.查看现有的redis密码：config get requirepass\n5.设置redis密码config set requirepass 111111（****为你要设置的密码）")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);