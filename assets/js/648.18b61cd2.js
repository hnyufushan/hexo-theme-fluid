(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{991:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("精髓代码随手笔记")]),s._v(" "),a("h2",{attrs:{id:"_1-利用gson把map转换成string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-利用gson把map转换成string"}},[s._v("#")]),s._v(" 1.利用GSON把map转换成string")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Gson")]),s._v(" gson "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Gson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toJson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-把string转换成map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-把string转换成map"}},[s._v("#")]),s._v(" 2.把String转换成Map")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    String plainText;\n    Gson gson = new Gson();\n    HashMap plainTextMap = gson.fromJson(plainText, HashMap.class);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3-new线程休眠时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-new线程休眠时间"}},[s._v("#")]),s._v(" 3.new线程休眠时间")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    //休息5秒\n    TimeUnit.SECONDS.sleep(5);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-可重入锁-并发锁的添加-当程序多线程执行时给当前线程加一把锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-可重入锁-并发锁的添加-当程序多线程执行时给当前线程加一把锁"}},[s._v("#")]),s._v(" 4.可重入锁--并发锁的添加（当程序多线程执行时给当前线程加一把锁）")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//new可重入锁(和synchronized同步锁区别：ReentrantLock锁可以重复进入，当已有程序进\n    //入则自动跳过synchronized锁会让程序等待当前线程执行完毕才能执行)\n    private final ReentrantLock lock = new ReentrantLock();\n\n    if(lock.tryLock()){\n        try{\n            //业务处理\n        } finally {\n            lock.unlock();\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_5-动态日期处理-几分钟之前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-动态日期处理-几分钟之前"}},[s._v("#")]),s._v(" 5.动态日期处理（几分钟之前）")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    //日期没有处理前\n    @GetMapping("/demo")\n    public R test(){\n        //五分钟之前（和北京时间差8小时）\n        Instant now = Instant.now().minus(Duration.ofMinutes(5));\n        return R.ok().data("msg","测试demo").data("now",new Date()).data("date",now);\n    }\n    //输出结果\n    {"code":0,"msg":"成功","data":{"msg":"测试demo","date":"2022-11-18T08:07:39.330Z","now":"2022-11-18T16:07:39.330+0800"}}\n    //配置文件加入\n    spring:\n      jackson:\n        date-format: yyyy-MM-dd HH:mm:ss\n        time-zone: GMT+8\n    //输出结果\n    {"code":0,"msg":"成功","data":{"msg":"测试demo","date":"2022-11-18T08:16:37.075Z","now":"2022-11-18 16:16:37"}}\n\n    {"code":0,"msg":"成功","data":{"aa":11,"aa1":112}}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);