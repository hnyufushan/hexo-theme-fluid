(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{424:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("如果一直风平浪静，则说明风浪即将到。\n下午，一切都风平浪静。\n就来到某台线上服务器，检查自己制作的回滚功能是否生效，发现原本应该在webapps目录下备份出ROOT.warbak文件的，但是并没有看到这个文件，先去Jenkins上看上次发布的脚本执行情况，最后发现是脚本当中某个变量上下文名称没有保持一致，简单，上下一致不就行咯。\n此刻，原本安静离开就好，我却不痛不痒的在webapps目录下执行了下边的命令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ROOT."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("war,warbak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("so，原来的ROOT.war就变成了ROOT.warbak，而很快，自己就有点懵逼，服务运行的主目录ROOT竟然也消失不见。\n瞬间紧张起来，毕竟这是线上啊，先去把负载的权重调整成0。让访问不再进来，然后将刚才的包在复制回来，问题就解决了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ROOT.warbak ROOT.war\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这是最迅速的解决办法了，也是后来发现的，而当时，则足足操作了十分钟才恢复正常。")]),s._v(" "),a("p",[s._v("这就引出了这个坑，tomcat服务中，如果运行主程序的ROOT.war被移走或者删除，那么解压出来的ROOT目录，也跟随消失。我去找同事说明这个情况，他给出的解释，大概是对的，但是我也不确定，他说，war包移走，类似于软件卸载了，而他的安装目录也就跟随删除掉了。\n原来我个人的理解就是两个文件是完全分离的，就像一个压缩包解压出来一个文件，此时删除压缩包，而解压文件并不会受影响一样的，但是现在看来，这里，并不是这样的。\n踩坑让人紧张，踩坑也让人前进！")])])}),[],!1,null,null,null);a.default=e.exports}}]);