(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{536:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("当我们基于 Dockerfile 构建一个镜像的时候，不可避免的会遇到错误或失败，这个时候，通常我们会核查对应步骤执行的指令，然后调整指令，再次构建镜像，这是一种常规的方法。")]),s._v(" "),a("p",[s._v("其实，因为 Docker 底层存储的机制，我们可以直接进入到失败之前成功的那次状态中，然后二次调试我们的指令，从而做到有的放矢地验证。")]),s._v(" "),a("p",[s._v("docker 基于 Dockerfile 构建一个镜像的流程大致如下：")]),s._v(" "),a("ol",[a("li",[s._v("基于 "),a("code",[s._v("FROM")]),s._v(" 的基础镜像运行一个临时容器")]),s._v(" "),a("li",[s._v("在临时容器当中，执行 Dockerfile 中定义的指令")]),s._v(" "),a("li",[s._v("然后执行类似 "),a("code",[s._v("docker commit")]),s._v(" 的操作，生成一个全新的"),a("code",[s._v("镜像层")])]),s._v(" "),a("li",[s._v("Docker会再基于刚刚提交的镜像运行一个新容器")]),s._v(" "),a("li",[s._v("接着重复 "),a("code",[s._v("2 ~ 4")]),s._v(" 步，直到 Dockerfile 中的所有指令执行完毕。")])]),s._v(" "),a("p",[s._v("因此，当我们遇到构建失败的时候，只需要复原出错前一步的 Docker 容器，即可回溯到出错前的环境，然后再手动执行出错的命令来分析出错的原因即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/10/614b90515388dca3.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[s._v("#")]),s._v(" 实践")]),s._v(" "),a("p",[s._v("有如下 Dockerfile 文件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" Dockerfile\nFROM registry.cn-hangzhou.aliyuncs.com/eryajf/centos:7.5\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aaa'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/test\nRUN ehco "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bbb'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /opt/test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这里可以看到，第三行指令的 echo 命令拼写有误，此时镜像构建日志如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nSending build context to Docker daemon  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".048kB\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/3 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" FROM registry.cn-hangzhou.aliyuncs.com/eryajf/centos:7.5\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a290d4e5c19d\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/3 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" RUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aaa'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/test\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 706e69349e9a\nRemoving intermediate container 706e69349e9a\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ad3fb6309109\nStep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" RUN ehco "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bbb'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /opt/test\n ---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Running "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" bec27c733f58\n/bin/sh: ehco: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" not found\nThe "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bin/sh -c ehco '")]),s._v("bbb"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' >> /opt/test'")]),s._v(" returned a non-zero code: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("可以看到步骤 3 执行有异常，但是步骤 2 是正常执行的，我们可以执行如下命令拉起一个步骤 2 的环境：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" ad3fb6309109 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/test"')]),s._v("\naaa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如上命令可以看到第二行的 echo 指令已经正常执行，而且环境也是当时的现场，这个时候我们就可以基于当时的现场，进行后续指令的调试。")])])}),[],!1,null,null,null);a.default=n.exports}}]);