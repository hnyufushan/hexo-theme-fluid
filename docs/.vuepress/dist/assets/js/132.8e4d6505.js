(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{476:function(t,e,s){"use strict";s.r(e);var n=s(0),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("日常发布PHP项目时，采用reload的方式刷新PHP的缓存，不过业务量大的时候业务方反馈会有502的情况，网上查了一下，看到这篇文章详细介绍了解决方案"),e("a",{attrs:{href:"https://blog.huoding.com/2016/12/11/570",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈PHP的Reload操作"),e("OutboundLink")],1),t._v("，这里简单记录问题解决方式，以为记录。")]),t._v(" "),e("p",[t._v("处理方式，调优PHP主配置文件中如下参数：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("process_control_timeout = 10s # 默认为0\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/01/6b7eea290b476d8e.jpeg",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("参考文章：https://blog.huoding.com/2016/12/11/570")])])])}),[],!1,null,null,null);e.default=r.exports}}]);