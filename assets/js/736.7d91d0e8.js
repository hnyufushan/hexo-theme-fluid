(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1080:function(e,a,s){"use strict";s.r(a);var r=s(0),t=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Docker基本用法")]),e._v(" "),a("h2",{attrs:{id:"_1-设置docker容器开机是否自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置docker容器开机是否自启动"}},[e._v("#")]),e._v(" 1，设置docker容器开机是否自启动")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[e._v("docker update --restart=no aad9651b63d1\ndocker update --restarty=always aad9651b63d1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-docker进入容器的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker进入容器的命令"}},[e._v("#")]),e._v(" 2，docker进入容器的命令：")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[e._v("docker exec -it 775c7c9ee1e1 /bin/bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-从宿主机拷文件到容器里面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-从宿主机拷文件到容器里面"}},[e._v("#")]),e._v(" 3，从宿主机拷文件到容器里面")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[e._v("docker cp mysql-connector-java-5.1.46.jar aad9651b63d1:/usr/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("从容器里面拷文件到宿主机？")])]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[e._v("docker cp aad9651b63d1：/usr/mysql-connector-java-5.1.46.jar /root\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4、docker-同一个宿主机器上容器间相互访问-no-route-to-host-6379"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、docker-同一个宿主机器上容器间相互访问-no-route-to-host-6379"}},[e._v("#")]),e._v(" 4、Docker 同一个宿主机器上容器间相互访问 No route to host 6379")]),e._v(" "),a("ul",[a("li",[e._v("防火墙开放端口即可")])]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[e._v("firewall-cmd --zone=public --add-port=6379/tcp --permanent\nfirewall-cmd --reload\nsystemctl restart firewalld.service\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"_5、级联删除相互关联的镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、级联删除相互关联的镜像"}},[e._v("#")]),e._v(" 5、级联删除相互关联的镜像")]),e._v(" "),a("ul",[a("li",[e._v("docker rmi 9cfcce23593a -f")])])])}),[],!1,null,null,null);a.default=t.exports}}]);