(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{661:function(t,a,_){"use strict";_.r(a);var s=_(0),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"配置界面总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置界面总览"}},[t._v("#")]),t._v(" 配置界面总览")]),t._v(" "),a("p",[t._v("如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e6e292a40d7c063d.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"详细配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细配置"}},[t._v("#")]),t._v(" 详细配置")]),t._v(" "),a("h3",{attrs:{id:"_1-系统设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-系统设置"}},[t._v("#")]),t._v(" 1， 系统设置")]),t._v(" "),a("p",[t._v("此处定义Jenkins的全局消息，或者是邮箱的配置。")]),t._v(" "),a("h3",{attrs:{id:"_2-全局安全配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局安全配置"}},[t._v("#")]),t._v(" 2， 全局安全配置")]),t._v(" "),a("p",[t._v("主要是配置用户访问的控制，这里仅开启允许用户注册，这样的话，可以让所有开发测试小伙伴在这里以自己的名字注册自己的账号，然后运维管理人员根据他们不同的项目与权限进行规则的设置就行了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4db042bba136d012.jpg",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"_3-全局工具设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-全局工具设置"}},[t._v("#")]),t._v(" 3， 全局工具设置")]),t._v(" "),a("p",[t._v("里边包含了所有的代码库，或者打包工具的位置，根据情况进行设置就行。或者什么都不设置也可以。只不过以后脚本里边注意添加命令加载变量。")]),t._v(" "),a("h3",{attrs:{id:"_4-管理插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-管理插件"}},[t._v("#")]),t._v(" 4， 管理插件")]),t._v(" "),a("p",[t._v("可参考：https://www.w3cschool.cn/jenkins/jenkins-s5xk28l5.html")]),t._v(" "),a("p",[t._v("里边有丰富的插件提供，详细的插件功能，不多赘述，有几个重要的需要在：")]),t._v(" "),a("ul",[a("li",[t._v("ant：打包的")]),t._v(" "),a("li",[t._v("LDAP：就是上边的访问控制功能")]),t._v(" "),a("li",[t._v("Git：从代码库拉取代码")]),t._v(" "),a("li",[t._v("Role-Based Strategy：角色管理。")]),t._v(" "),a("li",[t._v("Email Extension Plugin： (邮件通知)")]),t._v(" "),a("li",[t._v("Publish Over SSH： (远程Shell)")]),t._v(" "),a("li",[t._v("Maven Integration plugin：Maven集成，否则新建的时候没有Maven Project")]),t._v(" "),a("li",[t._v("Monitoring：监控Jenkins所消耗的系统资源，如内存使用等")])]),t._v(" "),a("h3",{attrs:{id:"_5-管理节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-管理节点"}},[t._v("#")]),t._v(" 5， 管理节点")]),t._v(" "),a("p",[t._v("如果服务器数量过于庞大，则可能会使用到主从式的集群进行构建发布。")]),t._v(" "),a("h3",{attrs:{id:"_6-管理用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-管理用户"}},[t._v("#")]),t._v(" 6， 管理用户")]),t._v(" "),a("p",[t._v("这些用户能够登录到Jenkins。这是列表的子集，也包括那些只是提交了代码到某些项目但是从未登录Jenkins而自动创建的用户。这是官方的介绍，点击用户后边的设置，还可以更改他的信息以及密码的重置等。")]),t._v(" "),a("h3",{attrs:{id:"_7-小黄锁。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-小黄锁。"}},[t._v("#")]),t._v(" 7， 小黄锁。")]),t._v(" "),a("p",[t._v("需要安装插件Role-Based Strategy")]),t._v(" "),a("p",[t._v("此处可以参考：")]),t._v(" "),a("p",[t._v("所有的用户分组规则权限都在这里设置了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a0ca2ddacde15316.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("管理角色是规则的设置")]),t._v(" "),a("p",[t._v("1，全局变量的设置，也可以理解成是组的添加设置，这里只设置出了开发者一个组。也可以通过下边的add新增。他们对全局有读的权限就好了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2933f049cfcb6f85.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("2，项目的分组。这个地方有点像Git里边的权限了，有分组的，也有项目的，经过这样两层的过滤，基本上每个人都会有合适的权限了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/aaeed204a4149919.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("分配角色")]),t._v(" "),a("p",[t._v("这里边就是对每个人的权限进行具体的分配了。这里边的又是与上边全局配置的规则对应的，因此先add把人添加进来，然后在后边勾选合适的权限就可以了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a985dfc95d0e4e81.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("注意不同人身份的不同权限设置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a04c48eaa427a5d0.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("现在，基本上对Jenkins的基础配置已经完成了，接下来就能够进行项目的构建与部署了。")])])}),[],!1,null,null,null);a.default=v.exports}}]);