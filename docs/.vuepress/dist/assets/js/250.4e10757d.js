(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{594:function(s,n,a){"use strict";a.r(n);var e=a(0),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("当一个topic写入到kafka，而我们接入了多了个消费组，这种情况下，其中某个消费组停止消费，却会看到对应消费组的消息堆积依然在叠加，这是个奇怪的问题，暂时不知道什么原因，不过可以通过如下方式，将这个消费组删除，如果这些消息内容不是很重要的话。")]),s._v(" "),n("p",[s._v("堆积如下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7eff34cfee8f98a9.jpg",alt:"image-20200831094331365"}})]),s._v(" "),n("p",[s._v("此时来到kafka集群，进行一波查看：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/kafka/bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("查看对应消费组：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("./kafka-consumer-groups.sh --bootstrap-server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".9.105:9092 --list"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" vector\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("查看该消费组详情：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("./kafka-consumer-groups.sh --bootstrap-server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".9.105:9092 "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--describe")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--group")]),s._v(" vector-group\n\nConsumer group "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vector-group'")]),s._v(" has no active members.\n\nTOPIC             PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG             CONSUMER-ID     HOST            CLIENT-ID\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20860823645")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20863941258")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3117613")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079366043")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082484017")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3117974")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18831750772")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18834869297")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3118525")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079254321")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082372335")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3118014")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18831738315")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18834855686")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3117371")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26853103894")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26856224627")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3120733")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079407716")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082528677")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3120961")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20860709161")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20863824916")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115755")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26853198869")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26856314382")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115513")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20860734059")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20863849934")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115875")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079285753")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082406080")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3120327")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18831568395")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18834686220")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3117825")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20860468934")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20863586315")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3117381")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26853057203")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26856172911")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115708")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079427219")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082542547")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115328")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079333972")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082449832")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115860")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079275520")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082390038")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3114518")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079305622")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082421647")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3116025")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079513281")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082630851")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3117570")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079328833")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082447027")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3118194")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26852831434")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26855949848")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3118414")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18831619833")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18834735405")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115572")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18831782140")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18834896831")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3114691")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18831578690")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18834692791")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3114101")]),s._v("         -               -               -\nnginx_access-json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7079300839")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7082416771")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3115932")]),s._v("         -               -               -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("删除之：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("./kafka-consumer-groups.sh --bootstrap-server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".9.105:9092 "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--group")]),s._v(" vector-group\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后再看堆积的监控，就没有新的消息往里边注入了。")])])}),[],!1,null,null,null);n.default=r.exports}}]);