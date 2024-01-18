(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{485:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当我们把zabbix的基础建设构建完成之后，就能够对Linux服务器的一些基本项进行监控了，在web界面也可以看到相关问题的一些报警了，但是这样的报警显然是不够的，我们需要的是那种与实际工作常用工具相结合的报警，这样既容易发现告警，先显得比较高端，再加上一些基础的服务器信息以及告警项，做出对应的处理就非常容易了。")]),s._v(" "),a("p",[s._v("今天我们就来整理一下zabbix结合钉钉机器人的报警配置。")]),s._v(" "),a("h2",{attrs:{id:"_1-首先是钉钉客户端配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先是钉钉客户端配置。"}},[s._v("#")]),s._v(" 1，首先是钉钉客户端配置。")]),s._v(" "),a("h3",{attrs:{id:"_1-建立一个钉钉群组。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立一个钉钉群组。"}},[s._v("#")]),s._v(" 1，建立一个钉钉群组。")]),s._v(" "),a("h3",{attrs:{id:"_2-添加一个机器人。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加一个机器人。"}},[s._v("#")]),s._v(" 2，添加一个机器人。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a9f43eb07c4a49ef.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("注意，这里要复制下来这个wenhook值，等会要用到的。")]),s._v(" "),a("h2",{attrs:{id:"_2-zabbix服务器端配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-zabbix服务器端配置。"}},[s._v("#")]),s._v(" 2，zabbix服务器端配置。")]),s._v(" "),a("h3",{attrs:{id:"_1-zabbix-配置文件中查找-alert-查看告警脚本存放路径。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-zabbix-配置文件中查找-alert-查看告警脚本存放路径。"}},[s._v("#")]),s._v(" 1，Zabbix 配置文件中查找”Alert”查看告警脚本存放路径。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/zabbix/zabbix_server.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AlertScriptsPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/lib/zabbix/alertscripts\t\t（455行，默认的，不用修改）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-进入配置中路径创建配置文件-并添加监听脚本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-进入配置中路径创建配置文件-并添加监听脚本。"}},[s._v("#")]),s._v(" 2，进入配置中路径创建配置文件，并添加监听脚本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost ~]# cd /usr/lib/zabbix/alertscripts/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-然后添加脚本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-然后添加脚本。"}},[s._v("#")]),s._v(" 3，然后添加脚本。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost alertscripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim token.sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("to")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("subject")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxxxxxx'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处的xxxxx就是刚刚复制存留的api接口地址。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n{"msgtype": "text",\n"text": {\n"content": "\'')]),s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$text")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"at"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"atMobiles"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\'"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isAtAll"')]),s._v(":false\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"_3-配置执行文件权限与归属"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置执行文件权限与归属"}},[s._v("#")]),s._v(" 3，配置执行文件权限与归属")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost alertscripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown zabbix.zabbix token.sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost alertscripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod +x token.sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("切换至 zabbix 用户测试脚本是否执行成功。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bash  token.sh 11 22 33\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果钉钉已经有了提示消息，说明配置成功。")]),s._v(" "),a("h2",{attrs:{id:"_4-设置前端创建脚本及报警媒介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置前端创建脚本及报警媒介"}},[s._v("#")]),s._v(" 4，设置前端"),a("code",[s._v("创建脚本")]),s._v("及"),a("code",[s._v("报警媒介")])]),s._v(" "),a("p",[s._v("再添加以下 3 个参数，分别对应脚本需要的 3 个参数：收件人地址、主题、详细内容。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ALERT.SENDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ALERT.SUBJECT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ALERT.MESSAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/cfcda5d9a12427b7.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_5-创建动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建动作"}},[s._v("#")]),s._v(" 5，创建动作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("配置\n---\x3e动作\n---\x3e右上角触发器\n---\x3e创建动作\n---\x3e名称(钉钉)\n---\x3e新的触发条件(触发器示警度---\x3e大于等于---\x3e警告)\n---\x3e添加(上边出现了两条---\x3e计算方式选和)\n---\x3e选择右边操作\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/613360e480a91eab.jpg",alt:"image"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\x3e步骤时间---\x3e1000\n---\x3e标题(故障{TRIGGER.STATUS},服务器:{HOSTNAME1}发生: {TRIGGER.NAME}故障!)\n---\x3e默认信息下边的添加\n\n        告警主机:{HOSTNAME1}\n\t告警时间:{EVENT.DATE} {EVENT.TIME}\n\t告警等级:{TRIGGER.SEVERITY}\n\t告警信息: {TRIGGER.NAME}\n\t告警项目:{TRIGGER.KEY1}\n\t问题详情:{ITEM.NAME}:{ITEM.VALUE}\n\t当前状态:{TRIGGER.STATUS}:{ITEM.VALUE1}\n\t事件 ID:{EVENT.ID}\n\n---\x3e操作添加\n---\x3e步骤---\x3e5 表示触发 5 次动作\n---\x3e步骤持续时间---\x3e每隔 120 秒触发一次\n---\x3e告警发给 admin 用户\n---\x3e用”钉钉”媒介发送。\n---\x3e点击小”add”添加选项，否则等于没写\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/33a92e533b50a4f0.jpg",alt:"image"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("点击添加之后\n---\x3e右边恢复操作，相当于服务正常之后的操作\n---\x3e标题改为---\x3e恢复{TRIGGER.STATUS}, 服务器:{HOSTNAME1}: {TRIGGER.NAME}已恢复!\n---\x3e信息改为---\x3e\n\n\t告警主机:{HOSTNAME1}\n\t告警时间:{EVENT.DATE} {EVENT.TIME}\n\t告警等级:{TRIGGER.SEVERITY}\n\t告警信息: {TRIGGER.NAME}\n\t告警项目:{TRIGGER.KEY1}\n\t问题详情:{ITEM.NAME}:{ITEM.VALUE}\n\t当前状态:{TRIGGER.STATUS}:{ITEM.VALUE1}\n\t事件 ID:{EVENT.ID}\n\n---\x3e点击”新的”添加发送选项\n---\x3e添加群组\n---\x3e添加用户 Admin\n---\x3e仅送到---\x3e钉钉\n---\x3e点击小”添加”添加选项，否则等于没写\n点击小 add 添加选项后再点击大 ADD 完成动作增加。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c8d52a183b4cb0b4.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_6-添加报警媒介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-添加报警媒介"}},[s._v("#")]),s._v(" 6，添加"),a("code",[s._v("报警媒介")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\x3e点击右上角用户头像\n---\x3e点击报警媒介\n---\x3e添加\n---\x3e类型---\x3e钉钉\n---\x3e收件人---\x3e要@的人的手机号\n---\x3e当启用时---\x3e这个设置的是报警的时间设置\n---\x3e添加\n---\x3e然后直接点击更新\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c88601a9e6538c25.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("更新。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7473c97e11ff90f2.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_7-配置提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-配置提示"}},[s._v("#")]),s._v(" 7，配置提示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\x3e点击右上角用户头像\n---\x3e选择正在发送消息\n---\x3e选中前端消息\n---\x3e下边的全选中，，更新。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c216ff87b55c344d.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("测试\n直接把监控的nginx服务器网卡断掉，然后等待报警！！！")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3aae964bb5c5fc90.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("现在再将网卡链接，看等会儿会是怎样的报警。")]),s._v(" "),a("p",[s._v("这样，一个非常给力好用的zabbix结合钉钉的报警就配置完成了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);