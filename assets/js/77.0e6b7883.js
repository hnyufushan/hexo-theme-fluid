(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{422:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在公司里边，一般都会把一台服务器做KVM虚拟化，这时候就会用到VNC远程连接工具了。连接方式很简单，那就是用kvm宿主机的IP加上定义的虚拟机的端口，就可以连接了。")]),s._v(" "),a("p",[s._v("​    此端口可以在设置当中进行更改。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("virsh")]),s._v(" edit name        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#即虚拟机的名字")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0035710d2a641aa8.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("打开vnc开始连接")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a8aa6aae23326feb.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("但是连接之后会直接闪退。\n解决方法很简单：\n在刚才登录界面")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("点击Option\n点击Advanced\n点击Expert\n找到ColourLevel\n默认值是pal8.修改成rgb222或者full\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后重新连接就不会闪退了！\n用到的时候很难找，但是一个小配置不搞定，就是死活连不上，有时候人生就是如此，因此这一次赶紧把解决方法记录下来，以免之后遇到。")])])}),[],!1,null,null,null);a.default=e.exports}}]);