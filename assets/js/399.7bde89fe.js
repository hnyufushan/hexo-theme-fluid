(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{743:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("docker安装websphere")]),a._v(" "),t("h2",{attrs:{id:"_1-获取镜像。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取镜像。"}},[a._v("#")]),a._v(" 1，获取镜像。")]),a._v(" "),t("ul",[t("li",[a._v("运行一下命令")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull ibmcom/websphere-traditional:8.5.5.12-profile \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2-使用镜像生成容器并且启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用镜像生成容器并且启动容器"}},[a._v("#")]),a._v(" 2，使用镜像生成容器并且启动容器：")]),a._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[a._v("docker run --name websphere \\\n -h websphere \\\n　　-e UPDATE_HOSTNAME=true \\\n -p 9043:9043 \\\n -p 9443:9443 \\\n --restart=always \\\n -d ibmcom/websphere-traditional:8.5.5.12-profile\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"_3-查看生成登录的密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看生成登录的密码"}},[a._v("#")]),a._v(" 3，查看生成登录的密码")]),a._v(" "),t("ul",[t("li",[a._v("docker exec websphere cat /tmp/PASSWORD")])]),a._v(" "),t("h2",{attrs:{id:"_4、通过浏览器访问websphere"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、通过浏览器访问websphere"}},[a._v("#")]),a._v(" 4、通过浏览器访问websphere")]),a._v(" "),t("ul",[t("li",[a._v("https://192.168.1.5:9043/ibm/console/login.do?action=secure")])]),a._v(" "),t("h2",{attrs:{id:"_5、前面的步骤没出错-会进入如下登录页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、前面的步骤没出错-会进入如下登录页面"}},[a._v("#")]),a._v(" 5、前面的步骤没出错，会进入如下登录页面")]),a._v(" "),t("h2",{attrs:{id:"_6、登录的账号和密码-登录的账号都是一样的-都是-wsadmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、登录的账号和密码-登录的账号都是一样的-都是-wsadmin"}},[a._v("#")]),a._v(" 6、登录的账号和密码（登录的账号都是一样的，都是 wsadmin）")]),a._v(" "),t("p",[a._v("注意")]),a._v(" "),t("ul",[t("li",[a._v("如果忘记了websphere的密码，可以使用docker exec websphere cat /tmp/PASSWORD 命令来查看登录该容器的密码，账号都统一为 wsadmin。 （websphere为容器名）")]),a._v(" "),t("li",[a._v("如果容器启动不正常，可以使用 docker logs -f websphere 命令来查看容器启动的日志信息，确定错误原因。（websphere为容器名）")]),a._v(" "),t("li",[a._v("注意：websphere启动需要的时间会比较长，所以需要参考日志的输出来判断容器是否已经启动，不能立马访问，立马访问是不会有结果的")]),a._v(" "),t("li",[a._v("更改密码如下图：\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/10016.png",alt:""}})])]),a._v(" "),t("h2",{attrs:{id:"_7、部署war包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、部署war包"}},[a._v("#")]),a._v(" 7、部署war包")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100161.png",alt:""}})]),a._v(" "),t("ul",[t("li",[t("p",[a._v("选择war包文件 --\x3e next")])]),a._v(" "),t("li",[t("p",[a._v("下一步默认，next")])]),a._v(" "),t("li",[t("p",[a._v("下一步，选中select")])]),a._v(" "),t("li",[t("p",[a._v("下一步，选中select，virtual_host 为default_host")])]),a._v(" "),t("li",[t("p",[a._v("下一步，尤为重要，设置上下文根，用来访问这个项目，不写的话无法启动。比如如上传的是 mavenDemo.war，Context Root目录下就写 /mavenDemo")])]),a._v(" "),t("li",[t("p",[a._v("下一步,finish")])]),a._v(" "),t("li",[t("p",[a._v("点击save后，war包已经上传安装成功了。系统自动跳转到启动页面。选中刚刚上传的war包（mavenDemo.war）,然后点击start。（启动成功时，右侧的红色叉叉会变成绿色箭头）\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100162.png",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("下面可以开始访问，在地址栏输入访问地址： https://安装websphere的主机IP：port/${Context Root栏填写的地址}")])]),a._v(" "),t("li",[t("p",[a._v("例如： https://10.1.162.16:9043/mavenDemo")])])]),a._v(" "),t("p",[a._v("注意：是https不是http")]),a._v(" "),t("h2",{attrs:{id:"_8、问题及解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、问题及解决"}},[a._v("#")]),a._v(" 8、问题及解决")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("如果访问出错， 错误内容类似：SRVE0255E: A WebGroup/Virtual Host to handle /p2pd/servlet/dispatch has not been defined.")])]),a._v(" "),t("li",[t("p",[a._v("可通过以下步骤解决：")])]),a._v(" "),t("li",[t("p",[a._v("检查上下文根是否与url一致：\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100163.png",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("点击Context Root For Web Modules按钮查看上下文")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100164.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"_9、检查项目配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、检查项目配置"}},[a._v("#")]),a._v(" 9、检查项目配置")]),a._v(" "),t("ol",[t("li",[a._v("点击Applications --\x3e Application Types --\x3e Websphere enterprise ，点击部署出错的那个项目，例如 mavenDemo.war，点击进入Virtual hosts\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100165.png",alt:""}})]),a._v(" "),t("li",[a._v("选中 select，并且将virtual hosts选中为 default_host，然后点击 ok。之后会回到 configuration页面，点击上方的 save .\n检查环境配置（尤为重要）第一步，点击 Environment --\x3e Virtual Hosts ,然后选中 default_host\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100166.png",alt:""}}),a._v(" "),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100167.png",alt:""}})]),a._v(" "),t("li",[a._v("检测服务配置1）. 依次选中 Servers --\x3e Server Types --\x3e Websphere Application Servers ，然后选择右侧出现的那个服务，例如我的是 server1\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100168.png",alt:""}}),a._v(" "),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100169.png",alt:""}})]),a._v(" "),t("li",[a._v("最后重新启动 websphere容器，再次访问项目，在地址栏中输入访问链接。 https://10.1.162.16:9043/mavenDemo/便能访问成功。(是https而不是http)")])]),a._v(" "),t("h2",{attrs:{id:"_10、部署ear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、部署ear"}},[a._v("#")]),a._v(" 10、部署ear")]),a._v(" "),t("p",[a._v("第一步，得先有个ear包进行测试")]),a._v(" "),t("ol",[t("li",[a._v("新建package文件夹，将原有war包（比如11.war）放进去\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/1001691.png",alt:""}})]),a._v(" "),t("li",[a._v("新建META-INF文件夹，并在META-INF文件夹下创建application.xml\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/1001692.png",alt:""}})]),a._v(" "),t("li",[a._v("注：每个"),t("module"),a._v("代表一个web应用,可添加多个web应用，本测试为方便只创建了一个应用\n"),t("display-name"),a._v("表示部署到was后，仅表示应用名称。\n"),t("web-uri",[a._v("表示war包名称。\n"),t("context-root"),a._v("表示部署路径，各module子节点值不要同名。")],1)],1),a._v(" "),t("li",[a._v("创建好xml后，进入dos命令,cd到packge目录,输入jar cf test.ear 11.war META-INF/application.xml命令，达成ear包:")]),a._v(" "),t("li",[a._v("注： 也可以使用jar xf test.ear来解压.ear包\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/1001693.png",alt:""}})]),a._v(" "),t("li",[a._v("至此.ear包创建完成\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/1001694.png",alt:""}})]),a._v(" "),t("li",[a._v("第二步，部署ear与部署war包基本一样，本着认真负责的态度，还是贴一下图吧")]),a._v(" "),t("li",[a._v("最后：访问https://10.1.162.16:9043/11/")])])])}),[],!1,null,null,null);t.default=r.exports}}]);