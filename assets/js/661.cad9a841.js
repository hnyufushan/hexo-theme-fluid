(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{1004:function(a,r,s){"use strict";s.r(r);var e=s(0),t=Object(e.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("docker安装portainer（docker镜像管理软件）详细步骤")]),a._v(" "),r("h2",{attrs:{id:"_1-拉取portainer镜像。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-拉取portainer镜像。"}},[a._v("#")]),a._v(" 1，拉取portainer镜像。")]),a._v(" "),r("ul",[r("li",[a._v("拉取portainer镜像。")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("docker pull lihaixin/portainer\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("h2",{attrs:{id:"_2-启动portainer容器。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动portainer容器。"}},[a._v("#")]),a._v(" 2，启动portainer容器。")]),a._v(" "),r("ul",[r("li",[a._v("运行。")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("docker run -d -p 9000:9000 --restart=always \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n--name portainer lihaixin/portainer\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("h2",{attrs:{id:"_3-docker-ps查看容器。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker-ps查看容器。"}},[a._v("#")]),a._v(" 3，docker ps查看容器。")]),a._v(" "),r("ul",[r("li",[a._v("查看容器")])]),a._v(" "),r("div",{staticClass:"language-dockerfile line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[a._v("docker ps\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看日志")]),a._v("\ndocker logs -f portainer\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("h2",{attrs:{id:"_4-浏览器中ip-端口访问。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器中ip-端口访问。"}},[a._v("#")]),a._v(" 4，浏览器中ip+端口访问。")]),a._v(" "),r("ul",[r("li",[a._v("首次登录，需要你创建管理员admin的密码，")]),a._v(" "),r("li",[a._v("密码12345678")])])])}),[],!1,null,null,null);r.default=t.exports}}]);