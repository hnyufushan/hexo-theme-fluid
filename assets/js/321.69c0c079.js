(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{666:function(t,a,_){"use strict";_.r(a);var e=_(0),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Jenkins拉取从Git仓库拉取代码进行部署操作。现有两种方法，今天分别记录两种方法，并对其中一些问题进行讲解。")]),t._v(" "),a("h2",{attrs:{id:"_1-直接通过其附带的git插件来拉取代码。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接通过其附带的git插件来拉取代码。"}},[t._v("#")]),t._v(" 1， 直接通过其附带的Git插件来拉取代码。")]),t._v(" "),a("p",[t._v("配置如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/50df861fb9955519.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("通过在源码管理当中直接设置Git仓库的代码链接，然后下边添加相对应的已注册用户账号密码，如此就可以拉取到本地workspace里了。然后就能够针对代码进行操作了。")]),t._v(" "),a("p",[t._v("那么这种方式构建的项目，分支切换更加灵活，一般情况下构建记录当中所显现的代码变动记录也会非常大，在真正构建之前都是代码变动的记录。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fa2ab597fe447252.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("看到方框里边就是汇总显示变动传输的情况。")]),t._v(" "),a("h2",{attrs:{id:"_2-不通过git插件对代码进行操作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-不通过git插件对代码进行操作。"}},[t._v("#")]),t._v(" 2， 不通过Git插件对代码进行操作。")]),t._v(" "),a("p",[t._v("这种方式更适合于单一分支发布的情况，一般线上正是环境都是只发master分支，比较适合使用这种方式。")]),t._v(" "),a("p",[t._v("操作流程大概是这样，首先在Jenkins所在服务器上对要工作的项目进行手动clone，然后就可以在Jenkins这里直接对代码进行操作部署。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/651908cb2af403ba.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("直接在构建的地方对代码进行操作")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/97e70e1457b5d486.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("这里隐去的是通过脚本对代码进行操作的一些事情。")]),t._v(" "),a("p",[t._v("那么通过这种方式来进行部署，其代码变化，则看起来会更加直观便捷：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/de389aefbf089a2b.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("解释：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首先是分支已经在master。")])]),t._v(" "),a("li",[a("p",[t._v("然后显示从Git库链接拉取更新。")])]),t._v(" "),a("li",[a("p",[t._v("下边就是一些详细更新内容的展示。")])])]),t._v(" "),a("p",[t._v("两种方式都是可以进行正常构建部署的。第一种更适合于测试环境中使用，分支变动更加灵活，第二种更适合于正式环境，只针对单一分支进行部署更新。")]),t._v(" "),a("p",[t._v("而两种方式还有一个小区别，第一种构建方式，所有的代码变动更新都可以通过项目的变更记录里边看到，但是第二种方式去到变更记录里边，则全部是没有变动。有这个区别，就不会在开发来找你问我代码有没有发上去，而你在确认是否有发上去时–被动。")])])}),[],!1,null,null,null);a.default=s.exports}}]);