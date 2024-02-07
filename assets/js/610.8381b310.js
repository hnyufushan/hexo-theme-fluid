(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{950:function(e,a,r){"use strict";r.r(a);var s=r(0),t=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("使用docker快速安装部署oracle-xe-11g-r2数据库\n一直使用的是mysql数据库，最近有需要使用到oracle数据库，于是想用docker部署一个oracle。但是由于某些我也不懂的原因，发现找不到官方的docker镜像。那怎么办呢？没事别急，还有一些第三方的人事做了一些第三方的镜像，拿来自己学习完全够用了。我这里使用一个下载量比较高的一个作者的开源镜像，github开源地址为：https://github.com/wnameless/docker-oracle-xe-11g")]),e._v(" "),a("h2",{attrs:{id:"_1-下载镜像。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载镜像。"}},[e._v("#")]),e._v(" 1，下载镜像。")]),e._v(" "),a("ul",[a("li",[e._v("运行一下命令")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" pull wnameless/oracle-xe-11g-r2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-运行容器-更多参数配置可以参考github中的readme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行容器-更多参数配置可以参考github中的readme"}},[e._v("#")]),e._v(" 2，运行容器（更多参数配置可以参考github中的readme）")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[e._v("docker run --name oracle -d -p 1521:1521 -e ORACLE_ALLOW_REMOTE=true wnameless/oracle-xe-11g-r2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("上述命令解释：运行一个名为oracle的容器，端口为1521，允许远程登录。")]),e._v(" "),a("li",[e._v("启动后oracle默认的账户密码等信息为：")]),e._v(" "),a("li",[e._v("hostname: localhost")]),e._v(" "),a("li",[e._v("port: 1521")]),e._v(" "),a("li",[e._v("sid: xe")]),e._v(" "),a("li",[e._v("username: system")]),e._v(" "),a("li",[e._v("password: oracle\n"),a("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/10019.png",alt:""}})]),e._v(" "),a("li",[e._v("安装之后如果需要新建用户可以参考oracle创建新用户并赋予相关权限sql")])]),e._v(" "),a("h2",{attrs:{id:"_3-oracle新建数据库-新用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-oracle新建数据库-新用户"}},[e._v("#")]),e._v(" 3，Oracle新建数据库（新用户）")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建用户：")])]),e._v(" "),a("li",[a("p",[e._v("create user root identified by root;")])]),e._v(" "),a("li",[a("p",[e._v("其中root为创建的用户名，root为用户密码。")])]),e._v(" "),a("li",[a("p",[e._v("创建用户后需要对用户赋予相应的权限，以下是示例，为root用户赋予connect,resource,dba三个权限。")])]),e._v(" "),a("li",[a("p",[e._v("授权：")])]),e._v(" "),a("li",[a("p",[e._v("grant connect,resource,dba to root;")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);