(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{692:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"正文开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正文开始"}},[t._v("#")]),t._v(" 正文开始")]),t._v(" "),s("p",[t._v("这是一次骚操作，从需求开始，就充满着骚骚的气息，容我从头讲述一下。")]),t._v(" "),s("p",[t._v("前后端分离的测试环境，一般都有好几套以应对日常的测试需求，而前端同学为了灵活，就在自己的项目当中做了灵活的转发，也就是从文件中定义后端地址，从而确定当前环境是转发到对应的后端服务去的。")]),t._v(" "),s("p",[t._v("这么做的好处就是比较灵活，不至于因为写死在配置当中，然后可能对应的环境还并不能同步的用于测试，从而影响测试进度，但是弊端也很明显，那就是太过灵活，一方面针对新来的小伙伴来说，学习成本会增加，另一方面就是如果某一方出了问题，不好定位。")]),t._v(" "),s("p",[t._v("因此，为了解决这一尴尬，前端大哥找我提了需求，大概意思就是，能否把相关的构建信息打印出来，当我了解到这个将要打印的东东是在一个固定的位置时，我就想，简单啊，给你一cat不就行了，然而大哥不满足呀，他想要这结果能输出在项目某个界面来的，从而让构建的人一眼就能看到什么是什么。")]),t._v(" "),s("p",[t._v("我想，如果我会开发，可能这是一个分分钟解决的问题，奈何我不懂，于是只能在自己所掌握的技能范围内，尽量的将其需求实现出来。")]),t._v(" "),s("p",[t._v("经过一番折腾，最终实现效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/75e94dc55aebaf1f.jpg",alt:"image"}})]),t._v(" "),s("p",[t._v("其中模糊部分是构建人的名字，后边的testapp则代表这次构建的前段对应的是testapp这个后端地址。")]),t._v(" "),s("p",[t._v("实现起来也非常简单，首先需要安装两个插件：")]),t._v(" "),s("ul",[s("li",[t._v("user build vars #定义名称全局变量")]),t._v(" "),s("li",[t._v("description setter #自定义描述信息")])]),t._v(" "),s("p",[t._v("首先在"),s("code",[t._v("构建环境")]),t._v("当中选中如下选项，从而定义出构建人信息的全局变量。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3f6484e82b7ffd91.jpg",alt:"image"}})]),t._v(" "),s("p",[t._v("接着在"),s("code",[t._v("执行shell")]),t._v("当中添加两句话，把需要的内容给取出来：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" $WORKSPACE/ecosystem.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试环境"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v("  testapp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $4}'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $1}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /media/version.txt\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("然后在"),s("code",[t._v("构建")]),t._v("当中找到"),s("code",[t._v("update build name")]),t._v("这个工具，对刚刚定义的内容进行读取：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a3c3b558f0c99779.jpg",alt:"image"}})]),t._v(" "),s("p",[t._v("接着还是在"),s("code",[t._v("构建")]),t._v("当中再添加一个"),s("code",[t._v("set build description")]),t._v("，写下描述信息即可：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/76375b61d7477e74.jpg",alt:"image"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);