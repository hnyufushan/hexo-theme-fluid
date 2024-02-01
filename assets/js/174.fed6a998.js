(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{516:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("systemd 有很丰富很详细的用法，而这些内容不是本文想要介绍的，本文想着重说明一下如何通过自定义配置来管理一些常用的，不常用的服务。")]),s._v(" "),a("h2",{attrs:{id:"_1-了解配置内容。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-了解配置内容。"}},[s._v("#")]),s._v(" 1，了解配置内容。")]),s._v(" "),a("p",[s._v("systemd 的配置文件主要放在"),a("code",[s._v("/usr/lib/systemd/system")]),s._v("目录，也可能在"),a("code",[s._v("/etc/systemd/system")]),s._v("目录。")]),s._v(" "),a("p",[s._v("现在来看一个系统的配置文件来学习一下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" sshd.service\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OpenSSH server daemon\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("man:sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" man:sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target sshd-keygen.service\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Wants")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sshd-keygen.service\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/sshd.pid\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/sysconfig/sshd\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/sshd "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OPTIONS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-HUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("process\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("42s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("这个是我们常用的 sshd 的配置文件内容，下边简单解释一下，以帮助理解。")]),s._v(" "),a("ul",[a("li",[s._v("[Unit] 区块：启动顺序与依赖关系。\n"),a("ul",[a("li",[s._v("Description：当前配置文件的描述信息。")]),s._v(" "),a("li",[s._v("Documentation：帮助信息。")]),s._v(" "),a("li",[s._v("After：表示当前服务是在那个服务后面启动，一般定义为网络服务启动后启动")]),s._v(" "),a("li",[s._v("Wants：表示 sshd.service 与 sshd-keygen.service 之间存在” 弱依赖” 关系，即如果”sshd-keygen.service” 启动失败或停止运行，不影响 sshd.service 继续执行。")])])]),s._v(" "),a("li",[s._v("[Service] 区块：启动行为\n"),a("ul",[a("li",[s._v("Type：定义启动类型。详细"),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/systemd_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E6%9C%8D%E5%8A%A1%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[s._v("了解点此"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[s._v("PIDFile：服务的 pid 文件路径。")]),s._v(" "),a("li",[s._v("EnvironmentFile：指定当前服务依赖的环境参数文件。")]),s._v(" "),a("li",[s._v("ExecStart：定义启动进程时执行的命令。")]),s._v(" "),a("li",[s._v("ExecReload：重启服务时执行的命令")]),s._v(" "),a("li",[s._v("KillMode：定义 Systemd 如何停止 sshd 服务。")]),s._v(" "),a("li",[s._v("Restart：定义了 sshd 退出后，Systemd 的重启方式。")]),s._v(" "),a("li",[s._v("RestartSec：表示 Systemd 重启服务之前，需要等待的秒数。上面的例子设为等待 42 秒。")])])]),s._v(" "),a("li",[s._v("[Install] 区块：定义如何安装这个配置文件，即怎样做到开机启动。\n"),a("ul",[a("li",[s._v("WantedBy：表示该服务所在的 Target。multi-user.target 表明当系统以多用户方式（默认的运行级别）启动时，这个服务需要被自动运行。")])])])]),s._v(" "),a("h2",{attrs:{id:"_2-定义一个示例配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义一个示例配置。"}},[s._v("#")]),s._v(" 2，定义一个示例配置。")]),s._v(" "),a("p",[s._v("掌握上边的一些信息之后，就可以自定义一些配置来管理系统当中的一些应用了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/60b6970c13d6d653.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("比如我个人日常写笔记用的工具就是自己搭建的 "),a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/1614.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mindoc"),a("OutboundLink")],1),s._v("，日常使用都是通过命令行进行启动的。")]),s._v(" "),a("p",[s._v("日常管理是这样式儿的：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/opt/doc-wiki/mindoc_linux_amd64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在添加配置通过 systemd 来管理。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/mindoc.service\n添加如下配置：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Mindoc\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/doc-wiki/mindoc_linux_amd64\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("保存之后，先加载一下。")]),s._v(" "),a("p",[s._v("检视和控制 systemd 的主要命令是 systemctl。该命令可用于查看系统状态和管理系统及服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl daemon-reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后启动一下验证下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl start mindoc\n$ systemctl status mindoc\n● mindoc.service - Mindoc\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/mindoc.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Mon "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-18 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 1s ago\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15060")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mindoc_linux_am"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   CGroup: /system.slice/mindoc.service\n           └─15060 /opt/doc-wiki/mindoc_linux_amd64\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Started Mindoc.\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Starting Mindoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki mindoc_linux_amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15060")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("/02/18 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39.123 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command.go:34"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  正在初始化数据库配置.\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki mindoc_linux_amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15060")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("/02/18 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39.125 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command.go:86"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  数据库初始化完成.\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki mindoc_linux_amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15060")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": MinDoc version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2.0-beta.2\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki mindoc_linux_amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15060")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": build "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Thu Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" 09:01:12 UTC "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki mindoc_linux_amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15060")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": start directory "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/doc-wiki/mindoc_linux_amd64\nFeb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39 wiki mindoc_linux_amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15060")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("/02/18 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":23:39.190 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("asm_amd64.s:1333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  http server Running on http://:8181\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("再访问一下，可以看到能够正常使用。\n然后还可以加入到开机自启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@wiki system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$systemctl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mindoc\nCreated symlink from /etc/systemd/system/multi-user.target.wants/mindoc.service to /usr/lib/systemd/system/mindoc.service.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("那么其他的服务，也基本上也可以参照如上配置，来进行添加使用了。")]),s._v(" "),a("h2",{attrs:{id:"_3-整理-systemctl-命令。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-整理-systemctl-命令。"}},[s._v("#")]),s._v(" 3，整理 systemctl 命令。")]),s._v(" "),a("ul",[a("li",[s._v("显示所有单元状态")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl 或 systemctl list-units\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("只显示服务单元的状态")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("验证 sshd 服务当前是否活动")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl is-active sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("启动，停止和重启 sshd 服务")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl start sshd.service\nsystemctl stop sshd.service\nsystemctl restart sshd.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("重新加载配置")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl reload sshd.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("列出活动状态的所有服务单元")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl list-units "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("列出所有服务单元")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl list-units "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("service "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看所有的服务单元是否为开机自启")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl list-unit-files "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("列出依赖的单元")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl list-dependencies sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("验证 sshd 服务是否开机启动")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl is-enabled sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("关闭开机自启")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl disable network\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("启用 network 开机自启。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" network\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-systemd-日志管理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-systemd-日志管理。"}},[s._v("#")]),s._v(" 4，systemd 日志管理。")]),s._v(" "),a("p",[s._v("systemd 提供了自己日志系统（logging system），称为 journal. 使用 systemd 日志，无需额外安装日志服务（syslog）。读取日志的命令：")]),s._v(" "),a("ul",[a("li",[s._v("查看所有日志 (默认显示本次启动的所有日志)")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" journalctl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看本次启动的所有日志也可以使用")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("journalctl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看内核日志")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("journalctl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("根据服务筛选")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("journalctl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("根据进程 ID 查询")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("journalctl "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("_PID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看日志占用的磁盘空间")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("journalctl --disk-usage\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("设置日志占用的空间")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("journalctl --vacuum-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("500M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);