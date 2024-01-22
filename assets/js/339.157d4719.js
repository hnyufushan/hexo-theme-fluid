(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{684:function(_,v,t){"use strict";t.r(v);var e=t(0),a=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("如果公司比较小，有可能所有环境（此处的环境指测试，预发，线上）的Jenkins都在一台之上，那么在这种情况下，做好Jenkins项目视图以及权限的控制就显得非常重要了。")]),_._v(" "),v("p",[_._v("如果公司稍微大一些，项目可能七七八八有不少，那么多项目的情况下，如何让负责"),v("code",[_._v("开发a")]),_._v("的同学就只能看到"),v("code",[_._v("a项目")]),_._v("，负责"),v("code",[_._v("开发b")]),_._v("的同学只能看到"),v("code",[_._v("b项目")]),_._v("呢，这就要请出我们今天的主角了，Jenkins当中的"),v("code",[_._v("角色控制")]),_._v("。")]),_._v(" "),v("p",[_._v("事实上在这之前在第三篇文章里边"),v("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/77.html#_7-%E5%B0%8F%E9%BB%84%E9%94%81%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[_._v("小黄锁"),v("OutboundLink")],1),_._v("，我已经对其做过一些介绍，不过还是有不少朋友会来问，这个该怎么使用，都怪我写的太大略，因此今天来对这一方面进行一下详细解释。")]),_._v(" "),v("h2",{attrs:{id:"_1-安装插件。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装插件。"}},[_._v("#")]),_._v(" 1，安装插件。")]),_._v(" "),v("p",[_._v("Jenkins的角色控制依赖于插件："),v("code",[_._v("Role-Based Strategy")]),_._v("。")]),_._v(" "),v("p",[_._v("插件的安装这里就不多说了。")]),_._v(" "),v("h2",{attrs:{id:"_2-启用此功能。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-启用此功能。"}},[_._v("#")]),_._v(" 2，启用此功能。")]),_._v(" "),v("p",[_._v("正常的使用方式就是在系统管理界面有一个"),v("code",[_._v("Manage and Assign Roles")]),_._v("。")]),_._v(" "),v("p",[_._v("但是仅仅安装完插件是不能看到这个功能的，需要到"),v("code",[_._v("系统管理")]),_._v("的"),v("code",[_._v("全局安全配置")]),_._v("界面进行一下配置。")]),_._v(" "),v("p",[_._v("系统默认的是"),v("code",[_._v("登录用户可以做任何事情")]),_._v("，现在改成用"),v("code",[_._v("角色控制")]),_._v("的方案，上边也可以开启"),v("code",[_._v("允许用户注册")]),_._v("。")]),_._v(" "),v("p",[_._v("详细情况如下图所示：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/10ebc3096ddbdff5.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("配置完成之后点击保存，再去"),v("code",[_._v("系统配置")]),_._v("里边就能看到"),v("code",[_._v("小黄锁")]),_._v("（Manage and Assign Roles）出现啦。")]),_._v(" "),v("h2",{attrs:{id:"_3-视图规划。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-视图规划。"}},[_._v("#")]),_._v(" 3，视图规划。")]),_._v(" "),v("p",[_._v("今天我们来从头到尾详细梳理一下，拿真实的例子来进行一波演练。")]),_._v(" "),v("p",[_._v("先看我准备的一些项目。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1e9f9daaf62fd038.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("当然常规来说，我们肯定都是一个项目一个项目创建，然后创建的时候就已经进行了规划分类，现在为了讲解，我先创建了这么8个项目。")]),_._v(" "),v("p",[_._v("大概可以分出四个视图：")]),_._v(" "),v("ul",[v("li",[_._v("1，alibaba-test")]),_._v(" "),v("li",[_._v("2，alababa-online")]),_._v(" "),v("li",[_._v("3，baidu-test")]),_._v(" "),v("li",[_._v("4，baidu-online")])]),_._v(" "),v("p",[_._v("可以直接点击左侧的"),v("code",[_._v("新建视图")]),_._v("来进行项目的分类管理。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d386b60078cdf318.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("如上操作，创建视图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9253649dcc8f0e68.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("将对应的项目选中即可，虽然这步操作与今天的主题关系不大，但是也是日常管理的一个重要项，整理完毕之后，如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/644e2646ab3fe5fc.jpg",alt:"image"}})]),_._v(" "),v("h2",{attrs:{id:"_4-管理角色。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-管理角色。"}},[_._v("#")]),_._v(" 4，管理角色。")]),_._v(" "),v("p",[_._v("如上边操作的，我们已经将不同的项目进行归类，此时对于运维人员来说，百度的开发人员只需要能够看到baidu-test的项目，然后能够进行构建用于测试即可，线上的不需要看到，线上发布的事儿也不用他们操心，当然，更不能让百度的开发人员看到阿里巴巴的项目，想要完成这些操作，就需要先在管理角色界面进行一些配置了。")]),_._v(" "),v("p",[_._v("如果你看过我之前对小黄锁的介绍的话，那么你应该已经知道管理角色是在哪里，以及怎么使用了。")]),_._v(" "),v("p",[_._v("原始界面如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8ea8de23535ea0e3.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("这里其实不必多说单看名字也都知道他们的功能了。")]),_._v(" "),v("h3",{attrs:{id:"_1-global-roles"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-global-roles"}},[_._v("#")]),_._v(" 1，Global roles")]),_._v(" "),v("p",[_._v("是最高统领的一个权限管理，配置某用户（这个用户类似于gitlab当中的master与developer的意义）的权限是什么。")]),_._v(" "),v("p",[_._v("默认的admin就是拥有所有权限，我们可以创建一个开发用户并配置其权限。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6c8770a7e5fae4a2.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("对所有都是"),v("code",[_._v("只能看不能摸")]),_._v("的权限。")]),_._v(" "),v("h3",{attrs:{id:"_2-project-roles"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-project-roles"}},[_._v("#")]),_._v(" 2，Project roles")]),_._v(" "),v("p",[_._v("是详细项目权限的管理。")]),_._v(" "),v("p",[_._v("此处可以添加项目，通过"),v("code",[_._v("正则")]),_._v("进行匹配，从而达到不同的项目以及不同的权限的目的。")]),_._v(" "),v("p",[_._v("废话不多说，直接上图见分晓。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1b22657ce130aeec.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("一般情况下，只要建立项目的时候"),v("code",[_._v("名称足够规范")]),_._v("，那么这里的权限设置也都比较简单的，通过对项目进行正则匹配即可，权限的话，酌情进行分配，如上所分配的权限，是最基础的读，构建，以及取消的权限，足够日常开发使用了。")]),_._v(" "),v("h3",{attrs:{id:"_3-slave-roles"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-slave-roles"}},[_._v("#")]),_._v(" 3，Slave roles")]),_._v(" "),v("p",[_._v("顾名思义，这是有了Jenkins集群之后，进行的权限控制，这里先不多谈，等以后谈到Jenkins集群部署的时候，再来说这个东东，或者就不再说了，因为基本上工作当中基本上不会用到。")]),_._v(" "),v("h2",{attrs:{id:"_5-用户管理。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-用户管理。"}},[_._v("#")]),_._v(" 5，用户管理。")]),_._v(" "),v("p",[_._v("公司新来了小伙伴，或者你的Jenkins刚刚做好，需要让大家都能够登陆，然后看到其对应的项目，那么第一步就是先来创建用户，用户也可以在公司群里吼一声，让大家各自进行注册，然后再来进行管理。")]),_._v(" "),v("p",[_._v("点击"),v("code",[_._v("系统管理")]),_._v("，"),v("code",[_._v("管理用户")]),_._v("，即可进入用户数据库，"),v("code",[_._v("用户注册页面")]),_._v("如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/826d2571c264cbf9.jpg",alt:"image"}})]),_._v(" "),v("ul",[v("li",[_._v("1，用户名：个人用户名的中文拼音。如张三：zhangsan，李四：lisi。")]),_._v(" "),v("li",[_._v("2，密码：自定义。")]),_._v(" "),v("li",[_._v("3，全名：可以沿用用户名，不过此处也可以写自己名字的中文。")]),_._v(" "),v("li",[_._v("4，邮箱地址。")])]),_._v(" "),v("p",[_._v("可能刚刚这段说明有些小啰嗦，但是正是因为对简单的东西的啰嗦，才形成了规范化的一个进展，比如，我在权限分配的时候，不用问你你注册的名字是啥，就直接能够给你授权了，如果张三起了个Tom，李四起了个Jerry，那你运维去吧，够你运维的了。")]),_._v(" "),v("p",[_._v("现在我就创建了百度开发人员张三以及阿里巴巴开发人员李四。")]),_._v(" "),v("p",[_._v("如下图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1f721678e4e33ded.jpg",alt:"image"}})]),_._v(" "),v("h2",{attrs:{id:"_6-分配角色。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-分配角色。"}},[_._v("#")]),_._v(" 6，分配角色。")]),_._v(" "),v("p",[_._v("我们进入到小黄锁的第二个选项当中。")]),_._v(" "),v("p",[_._v("照例先来一张默认图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8ee5ca177614022e.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("当我们需要对一个新注册用户授权的时候，需要做两件事情：")]),_._v(" "),v("ul",[v("li",[_._v("第一在全局权限里，添加用户，让其有开发的权限。")]),_._v(" "),v("li",[_._v("第二就是在项目权限里添加，让其对具体项目拥有具体权限。")])]),_._v(" "),v("p",[_._v("接下来就一个一个设置：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a06a587ec0f76c3a.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("配置完成，别忘了点击最下边的"),v("code",[_._v("save")]),_._v("进行保存。")]),_._v(" "),v("p",[_._v("通过这张图，应该可以非常清楚理解为什么，神通广大的百度开发人员张三，在运维人员的控制之下，却只能看到baidu-test的项目了吧。")]),_._v(" "),v("p",[_._v("究竟是不是如我所说的这样呢，我们登陆一下张三的账号看下是不是真的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5aa305ffc98188af.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("接着再来看看李四的情况。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4527e84296f50cbe.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("ok，到这里，基本上经过这样一趟洗礼之后，如果你看的认真并照做了的话，相信你就已经掌握Jenkins当中的角色控制啦！！")]),_._v(" "),v("p",[_._v("如果还有什么疑惑，以及在工作中有什么坑之类的，欢迎您在下方留言区域一起交流！！！")]),_._v(" "),v("h2",{attrs:{id:"补充一-我现在的使用方式。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#补充一-我现在的使用方式。"}},[_._v("#")]),_._v(" 补充一：我现在的使用方式。")]),_._v(" "),v("p",[_._v("如果上边的文章内容你仔细阅读并进行实验已经理解了利用这个插件来控制用户视图权限的用法的话，那么接下来的操作，可能会让你效率增加一些，现在我的用法是这样的。")]),_._v(" "),v("p",[_._v("在分配角色的global role里边，配置"),v("code",[_._v("Anonymous")]),_._v("拥有"),v("code",[_._v("develop")]),_._v("的那个权限，这样以来，默认所有用户都会拥有首页读的权限，而不会有项目的权限，然后接着把用户在下边针对项目授权即可，这样以来，就能省掉一步授权添加的操作了。")]),_._v(" "),v("p",[_._v("当然，可能这样“裸奔”会被认为不够安全，尤其是针对那些开放了外网访问的Jenkins来说，别急，我这里还有一个办法，根据官方文档描述说：")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("笔记")]),_._v(" "),v("p",[_._v("Jenkins有两个内置角色")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Anonymous")]),_._v(" ：尚未登录的用户")]),_._v(" "),v("li",[v("strong",[_._v("authenticated")]),_._v(" ： 登录用户")])])]),_._v(" "),v("p",[_._v("如此以来，我们这里只需配置"),v("code",[_._v("authenticated")]),_._v("拥有"),v("code",[_._v("develop")]),_._v("的那个权限，然后把"),v("code",[_._v("Anonymous")]),_._v("的权限取消掉，这样以来，所有未经登陆的用户，就无法查看任何内容啦！")]),_._v(" "),v("p",[v("code",[_._v("补充于2019-02-21 14:03:07 星期四")])]),_._v(" "),v("h2",{attrs:{id:"补充二-插件最新版本功能跟进。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#补充二-插件最新版本功能跟进。"}},[_._v("#")]),_._v(" 补充二：插件最新版本功能跟进。")]),_._v(" "),v("p",[_._v("今天有小伙伴找我问起这个插件了，我看了看竟然有新功能更新了，而且是非常赞的一个功能。目前升级到最新版本为2.10。")]),_._v(" "),v("p",[_._v("官网给出的更新日志如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/232f18f31e73bbca.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("着重介绍一下新功能："),v("code",[_._v("“管理角色”表现在支持预览与正则表达式匹配的作业")]),_._v("。")]),_._v(" "),v("p",[_._v("下边配图帮助理解这句话：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/262301bd105a083f.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("点击新增的匹配规则，可以直接看到匹配到设置的规则的项目，非常方便。赞一个！")]),_._v(" "),v("p",[v("code",[_._v("补充于2019-02-21 14:03:07 星期四")])])])}),[],!1,null,null,null);v.default=a.exports}}]);