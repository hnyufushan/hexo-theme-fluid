(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{982:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{align:"center"}},[t._v("Go-Ldap-Admin")]),t._v(" "),a("div",{attrs:{align:"center"}},[t._v("\n基于Go+Vue实现的openLDAP后台管理项目。\n"),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://img.shields.io/github/go-mod/go-version/eryajf-world/go-ldap-admin",alt:"Go version"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/Gin-1.6.3-brightgreen",alt:"Gin version"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/badge/Gorm-1.20.12-brightgreen",alt:"Gorm version"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/github/license/eryajf-world/go-ldap-admin",alt:"License"}})])]),t._v(" "),a("p",[a("strong",[t._v("目录")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#go-ldap-admin"}},[t._v("Go-Ldap-Admin")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%BC%98%E8%B5%B7"}},[t._v("缘起")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C"}},[t._v("在线体验")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E9%A1%B9%E7%9B%AE%E5%9C%B0%E5%9D%80"}},[t._v("项目地址")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD"}},[t._v("核心功能")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B"}},[t._v("快速开始")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%9C%AC%E5%9C%B0%E5%BC%80%E5%8F%91"}},[t._v("本地开发")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%94%9F%E4%BA%A7%E9%83%A8%E7%BD%B2"}},[t._v("生产部署")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%84%9F%E8%B0%A2"}},[t._v("感谢")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8F%A6%E5%A4%96"}},[t._v("另外")])])])])]),t._v(" "),a("h2",{attrs:{id:"缘起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缘起"}},[t._v("#")]),t._v(" 缘起")]),t._v(" "),a("p",[t._v("我曾经经历的公司强依赖openLDAP来作为企业内部员工管理的平台，并通过openLDAP进行各平台的认证打通工作。")]),t._v(" "),a("p",[t._v("但成也萧何败也萧何，给运维省力的同时，ldap又是维护不够友好的。")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://github.com/bradleypeabody/godap",target:"_blank",rel:"noopener noreferrer"}},[t._v("godap"),a("OutboundLink")],1),t._v("项目中，作者这样描述对ldap的感受：")]),t._v(" "),a("blockquote",[a("p",[t._v("The short version of the story goes like this: I hate LDAP. I used to love it. But I loved it for all the wrong reasons. LDAP is supported as an authentication solution by many different pieces of software. Aside from its de jure standard status, its wide deployment cements it as a de facto standard as well.")]),t._v(" "),a("p",[t._v("However, just because it is a standard doesn't mean it is a great idea.")]),t._v(" "),a("p",[t._v("I'll admit that given its age LDAP has had a good run. I'm sure its authors carefully considered how to construct the protocol and chose ASN.1 and its encoding with all of wellest of well meaning intentions.")]),t._v(" "),a("p",[t._v("The trouble is that with today's Internet, LDAP is just a pain in the ass. You can't call it from your browser. It's not human readable or easy to debug. Tooling is often arcane and confusing. It's way more complicated than what is needed for most simple authentication-only uses. (Yes, I know there are many other uses than authentication - but it's often too complicated for those too.)")]),t._v(" "),a("p",[t._v('Likely owing to the complexity of the protocol, there seems to be virtually no easy to use library to implement the server side of the LDAP protocol that isn\'t tied in with some complete directory server system; and certainly not in a language as easy to "make it work" as Go.')])]),t._v(" "),a("p",[t._v("他说他对ldap又爱又恨，因为ldap出现的最早，许多的三方软件都兼容支持它，它成了这方面的一个标准。但问题在于，它对于维护者而言，又是复杂麻烦的。就算是有Phpldapadmin这样的平台能够在浏览器维护，但看到那样上古的界面，以及复杂的交互逻辑，仍旧能够把不少人劝退。")]),t._v(" "),a("p",[t._v("鉴于此，我开发了这个现代化的openLDAP管理后台。")]),t._v(" "),a("h2",{attrs:{id:"在线体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线体验"}},[t._v("#")]),t._v(" 在线体验")]),t._v(" "),a("blockquote",[a("p",[t._v("admin / 123456")])]),t._v(" "),a("p",[t._v("演示地址："),a("a",{attrs:{href:"http://demo-go-ldap-admin.eryajf.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://demo-go-ldap-admin.eryajf.net"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"项目地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[t._v("#")]),t._v(" 项目地址")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("分类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("GitHub")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Gitee")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("后端")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/eryajf-world/go-ldap-admin.git")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("https://gitee.com/eryajf-world/go-ldap-admin.git")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("前端")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("https://github.com/eryajf-world/go-ldap-admin-ui.git")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("https://gitee.com/eryajf-world/go-ldap-admin-ui.git")])])])]),t._v(" "),a("h2",{attrs:{id:"核心功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心功能"}},[t._v("#")]),t._v(" 核心功能")]),t._v(" "),a("ul",[a("li",[t._v("基于 GIN WEB API 框架，基于Casbin的 RBAC 访问控制模型，JWT 认证，Validator 参数校验")]),t._v(" "),a("li",[t._v("基于 GORM 的数据库存储")]),t._v(" "),a("li",[t._v("基于 go-ldap 库的主逻辑交互")]),t._v(" "),a("li",[t._v("用户管理\n"),a("ul",[a("li",[t._v("用户的增删改查")])])]),t._v(" "),a("li",[t._v("分组管理\n"),a("ul",[a("li",[t._v("分组的增删改查")]),t._v(" "),a("li",[t._v("分组内成员的管理")])])])]),t._v(" "),a("h2",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),a("p",[t._v("你可以通过docker-compose在本地快速拉起进行体验。")]),t._v(" "),a("p",[t._v("快速拉起的容器包括：MySQL-5.7，openLDAP-1.4.0，phpldapadmin-0.9.0，go-ldap-admin。")]),t._v(" "),a("p",[t._v("服务端口映射如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Service")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MySQL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("3307:3306")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("openLDAP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("389:389")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("phpldapadmin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("8091:80")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("go-ldap-admin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("8090:80")]),t._v(","),a("code",[t._v("8888:8888")])])])])]),t._v(" "),a("p",[t._v("拉起之前确认是否有与本地端口冲突的情况。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git clone https://github.com/eryajf-world/go-ldap-admin.git\n\n$ cd docs/docker-compose\n\n$ docker-compose up -d\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("当看到容器都正常运行之后，可以在本地访问：http://localhost:8090，用户名/密码：admin/123456")]),t._v(" "),a("p",[a("code",[t._v("登录页：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/17dbe07a137c9b4c.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("首页：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/b18c5fbf5ba0e6af.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("用户管理：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/f3ae695b703c00c8.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("分组管理：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/cb7bcd851b2c972f.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("分组内成员管理：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/f1732540ce0632de.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"本地开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地开发"}},[t._v("#")]),t._v(" 本地开发")]),t._v(" "),a("h3",{attrs:{id:"前言准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言准备"}},[t._v("#")]),t._v(" 前言准备")]),t._v(" "),a("p",[t._v("前提是已准备好MySQL与openLDAP，本地开发建议直接通过docker拉起即可，可参考文档："),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/3a0d5f",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eryajf.net/pages/3a0d5f"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"拉取代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取代码"}},[t._v("#")]),t._v(" 拉取代码")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 后端代码\n$ git clone https://github.com/eryajf-world/go-ldap-admin.git\n\n# 前端代码\n$ git clone https://github.com/eryajf-world/go-ldap-admin-ui.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("后端目录结构：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─config     # viper读取配置\n├─controller # controller层，响应路由请求的方法\n├─docs       # 一些物料信息\n├─logic      # 主要的处理逻辑\n├─middleware # 中间件\n├─model      # 结构体模型\n├─public     # 一些公共的，工具类的放在这里\n├─routes     # 所有路由\n├─service    # 整合与底层存储交互的方法\n├─svc        # 定义入参出参的结构体\n└─test       # 跑测试用的\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"更改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改配置"}},[t._v("#")]),t._v(" 更改配置")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 修改后端配置\n$ cd go-ldap-admin\n# 文件路径 config.yml\n$ vim config.yml\n\n# 根据自己本地的情况，调整数据库以及openLDAP的配置信息。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[t._v("#")]),t._v(" 启动服务")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 启动后端\n$ cd go-ldap-admin\n$ go mod tidy\n$ go run main.go\n$ make run\n\n# 启动前端\n$ cd go-ldap-admin-ui\n$ yarn\n$ yarn dev\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("本地访问：http://localhost:8090，用户名/密码：admin/密码是配置文件中openLDAP中admin的密码。")]),t._v(" "),a("h2",{attrs:{id:"生产部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产部署"}},[t._v("#")]),t._v(" 生产部署")]),t._v(" "),a("p",[t._v("生产环境单独部署，通过Nginx代理服务，配置如下：")]),t._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" go-ldap-admin.eryajf.net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data/www/web/dist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Cache-Control "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-store'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("  X-Real-IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-For "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X-Forwarded-Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://127.0.0.1:8888")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h2",{attrs:{id:"感谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感谢"}},[t._v("#")]),t._v(" 感谢")]),t._v(" "),a("p",[t._v("感谢如下优秀的项目，没有这些项目，不可能会有go-ldap-admin：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("后端技术栈")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gin-gonic/gin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gin-v1.6.3"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/go-gorm/gorm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gorm-v1.20.12"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/go-ldap/ldap",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go-ldap-v3.4.2"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/casbin/casbin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Casbin-v2.22.0"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("前端技术栈")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-ui"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("另外感谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gnimli/go-web-mini",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-web-mini"),a("OutboundLink")],1),t._v("：项目基于该项目重构而成，感谢作者的付出。")])])])]),t._v(" "),a("h2",{attrs:{id:"另外"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#另外"}},[t._v("#")]),t._v(" 另外")]),t._v(" "),a("ul",[a("li",[t._v("如果觉得项目不错，麻烦动动小手点个⭐️star⭐️!")]),t._v(" "),a("li",[t._v("如果你还有其他想法或者需求，欢迎在issue中交流！")]),t._v(" "),a("li",[t._v("程序还有很多bug，欢迎各位朋友一起协同共建！")])])])}),[],!1,null,null,null);a.default=n.exports}}]);