(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{424:function(v,_,n){"use strict";n.r(_);var e=n(0),s=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("服务器kernel版本过低，需要进行补丁升级，事实上升级的操作非常简单，也就那么一步两步搞定的问题，但是由于是对线上服务器进行的操作，因此不能鲁莽操作，要让其服务平稳过度才行。")]),v._v(" "),_("p",[v._v("于是，今天说起来是记录升级的，事实上却是要记录一下线上服务平稳过度的一些操作与注意事项的。")]),v._v(" "),_("p",[v._v("先来说明一下之前的情况是怎样的（事实上是有问题的，等下也会说明这个问题的原因）。")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2751feea9bb2e7b6.jpg",alt:"image"}})]),v._v(" "),_("p",[v._v("最最开始，这项服务事实上只有一个serverA的，这当然是非常有问题的，但是在没有出现问题以及没有强烈意识的情况下，有些问题始终也就不算问题。终于有一天，serverA因为一些原因（这个原因又是非常不应该的，即因服务器上其他服务日志突然增大，爆满之后直接影响到这个服务down掉了，这可是线上业务，影响当然是不小的。但是以前就是这么过来的，有那么一种原生的野性与鲁莽吧，你可以说这是一种无知或者懒惰，但是，某些规范化的章程还不完善，或者说某些创伤还没有出现，总是感觉不到痛痒，也就无从痛而后勇的。），终于要一变二起来。")]),v._v(" "),_("p",[v._v("变二也是非常简单的，新开一台服务器，部署上一样的服务，每台服务器上都添加nginx的代理解析，然后再在前端通过SLB进行负载分发，但有一个问题阻碍了这种想法。")]),v._v(" "),_("p",[v._v("原来serverA服务在阿里云上，现在进增加的服务器是从公司托管的机房里边开出来的一台机器，于是乎，之前想的用SLB的方案就破裂了，最后只是把两台服务都部署起来，然后通过nginx的一个负载方案，做了一个流量的分发，而并没有所谓高可用。")]),v._v(" "),_("p",[v._v("现在，就是在这样的一个现实情况下，要对这台服务器进行升级重启，而不能够影响到线上服务。")]),v._v(" "),_("p",[v._v("方法可能有很多，我今天用的方法如下，方法也简单，问题是里边有一些细节需要注意到。")]),v._v(" "),_("h2",{attrs:{id:"_1-首先通过另一服务器配置nginx流量分发。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先通过另一服务器配置nginx流量分发。"}},[v._v("#")]),v._v(" 1， 首先通过另一服务器配置nginx流量分发。")]),v._v(" "),_("p",[v._v("将本服务器上的nginx配置复制到另外一台服务器的nginx上去，注意，要暂时将本机的解析中的upstream删除，即暂时把将要重启的本机从负载当中踢出，把所有流量先全部放到另外那台serverB上去。")]),v._v(" "),_("h2",{attrs:{id:"_2-然后创建一个slb对两台nginx进行负载。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-然后创建一个slb对两台nginx进行负载。"}},[v._v("#")]),v._v(" 2， 然后创建一个SLB对两台nginx进行负载。")]),v._v(" "),_("p",[v._v("a) 首先新建负载均衡。")]),v._v(" "),_("p",[v._v("b) 然后进入到负载均衡详情当中添加端口的监听（443）。")]),v._v(" "),_("p",[v._v("c) 然后将后端两台nginx服务器添加进来。")]),v._v(" "),_("p",[v._v("d) "),_("code",[v._v("注意")]),v._v("要再去两台nginx服务器当中配置安全组（白名单）放开刚刚SLB的外网ip对本机的443端口的访问")]),v._v(" "),_("p",[v._v("e) "),_("code",[v._v("注意")]),v._v("添加两台服务器的时候，暂时先将另一台nginx的权重设置为0.")]),v._v(" "),_("h2",{attrs:{id:"_3-添加对应域名解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加对应域名解析"}},[v._v("#")]),v._v(" 3，添加对应域名解析")]),v._v(" "),_("p",[v._v("去到解析配置界面，将刚刚服务器域名的解析资源记录更改成刚刚SLB的ip。")]),v._v(" "),_("p",[v._v("那么，此时的架构应该是这样的。")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/90f6c9842715071a.jpg",alt:"image"}})]),v._v(" "),_("p",[v._v("正如图中所见，就像接的水管一样的，掐住一头，另外一头接着流，并不影响水流一样。")]),v._v(" "),_("p",[v._v("现在需要掐住serverA上nginx这根管子，今天的操作是直接掐了，这样有可能导致问题。")]),v._v(" "),_("p",[v._v("为了避免一些不确定因素出现，有必要首先在内网做一些测试检验：")]),v._v(" "),_("p",[v._v("1， 在阿里云服务器内网中找一台服务器，将服务对应的域名以及另一台服务器上的nginx的ip写入服务器的hosts当中，然后直接本地curl -I 域名 进行访问验证，这一层是验证另一台的nginx到serverB上是否可用，毕竟等下是要干掉serverA的。看到返回200，则说明正常。")]),v._v(" "),_("p",[v._v("2， 然后启动另一台上的nginx。")]),v._v(" "),_("p",[v._v("3， 此时，服务器上监控nginx的日志输出，另一边SLB可以把这台服务器权重给调成0，看是否有流量过来。如果有流量进来了，则说明这一条线是可用的。")]),v._v(" "),_("p",[v._v("4， 实操，关权重，重启。")]),v._v(" "),_("p",[v._v("既然可以使用了，那么来到SLB，把serverA的权重调成0.此时看到serverA上监控的日志已经渐渐不刷了，而新的nginx则忙碌起来。")]),v._v(" "),_("p",[v._v("此刻，迅速做一些操作：")]),v._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[v._v("yum update kernel "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[v._v("-y")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("shutdown")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[v._v("-r")]),v._v(" now\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("连接上以后，将对应的服务跑起来。")]),v._v(" "),_("p",[v._v("然后再重新把SLB权重调回来。")]),v._v(" "),_("p",[v._v("就不再动了，刚好把现在的做成一个高可用！")])])}),[],!1,null,null,null);_.default=s.exports}}]);