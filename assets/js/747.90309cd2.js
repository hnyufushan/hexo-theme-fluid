(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1090:function(a,s,e){"use strict";e.r(s);var r=e(0),t=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("Docker部署jar包运行详细步骤")]),a._v(" "),s("h2",{attrs:{id:"_1-上传jar到服务器的指定目录。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传jar到服务器的指定目录。"}},[a._v("#")]),a._v(" 1，上传jar到服务器的指定目录。")]),a._v(" "),s("ul",[s("li",[a._v("例如myzhglpt.jar文件")])]),a._v(" "),s("h2",{attrs:{id:"_2-在该目录下创建dockerfile-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在该目录下创建dockerfile-文件"}},[a._v("#")]),a._v(" 2，在该目录下创建Dockerfile 文件")]),a._v(" "),s("ul",[s("li",[a._v("vi Dockerfile")])]),a._v(" "),s("h2",{attrs:{id:"_3-然后将下面的内容复制到dockerfile文件中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-然后将下面的内容复制到dockerfile文件中"}},[a._v("#")]),a._v(" 3，然后将下面的内容复制到Dockerfile文件中")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("FROM")]),a._v(" java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("MAINTAINER")]),a._v(" hnyufushan\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("COPY")]),a._v(" target"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*.jar /app.jar\nENTRYPOINT ["java","-jar","/app.jar"]\n')])])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"_4、创建好dockerfile文件之后-执行命令-构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、创建好dockerfile文件之后-执行命令-构建镜像"}},[a._v("#")]),a._v(" 4、创建好Dockerfile文件之后，执行命令 构建镜像")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker build -t zhglpt:v1.0 .\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_5、镜像构建成功之后-就可以运行容器了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、镜像构建成功之后-就可以运行容器了"}},[a._v("#")]),a._v(" 5、镜像构建成功之后，就可以运行容器了：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9100")]),a._v(":9100 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" zhglpt zhglpt:v1.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_6、然后docker-ps-看看你的容器有没有在运行即可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、然后docker-ps-看看你的容器有没有在运行即可"}},[a._v("#")]),a._v(" 6、然后docker ps 看看你的容器有没有在运行即可")]),a._v(" "),s("h2",{attrs:{id:"_7、docker-logs-f-b0-查看启动日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、docker-logs-f-b0-查看启动日志"}},[a._v("#")]),a._v(" 7、docker logs -f b0 查看启动日志")]),a._v(" "),s("h2",{attrs:{id:"_8、注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、注意"}},[a._v("#")]),a._v(" 8、注意")]),a._v(" "),s("ul",[s("li",[a._v("Docker 同一个宿主机器上容器间相互访问 No route to host 6379")]),a._v(" "),s("li",[a._v("防火墙开放端口即可")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\nsystemctl restart firewalld.service\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);