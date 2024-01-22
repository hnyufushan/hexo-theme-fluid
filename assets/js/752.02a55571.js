(window.webpackJsonp=window.webpackJsonp||[]).push([[752],{1096:function(a,t,r){"use strict";r.r(t);var s=r(0),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Docker安装Harbor（docker镜像服务器）")]),a._v(" "),t("h2",{attrs:{id:"_1-把离线安装包-harbor-offline-installer-v1-10-10-tgz-上传到服务器上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-把离线安装包-harbor-offline-installer-v1-10-10-tgz-上传到服务器上"}},[a._v("#")]),a._v(" 1，把离线安装包（harbor-offline-installer-v1.10.10.tgz）上传到服务器上")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://quqi.com/343829/254",target:"_blank",rel:"noopener noreferrer"}},[a._v("离线安装包下载地址"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_2、解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、解压"}},[a._v("#")]),a._v(" 2、解压")]),a._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[a._v("tar -zxvf  harbor-offline-installer-v1.10.10.tgz -C /mydata/harbor\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3、编辑配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、编辑配置文件"}},[a._v("#")]),a._v(" 3、编辑配置文件")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("cat harbor.yml"),t("br"),a._v(" "),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/10009.png",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("hostname改成IP地址")])]),a._v(" "),t("li",[t("p",[a._v("port端口改为你访问的端口")])]),a._v(" "),t("li",[t("p",[a._v("密码：\n"),t("img",{attrs:{src:"https://mp-09fcd8a7-9cfd-4c7c-a49a-6d3b4574db95.cdn.bspapp.com/100091.png",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("注释掉https")])])]),a._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https related config                                                                                                                                  ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https:                                                                                                                                                ")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https port for harbor, default is 443                                                                                                               ")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# port: 443                                                                                                                                            ")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# The path of cert and key files for nginx                                                                                                            ")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# certificate: /your/certificate/path                                                                                                                  ")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# private_key: /your/private/key/path")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"_4、启动harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动harbor"}},[a._v("#")]),a._v(" 4、启动harbor")]),a._v(" "),t("ul",[t("li",[a._v("./install.sh")]),a._v(" "),t("li",[a._v("注意：harbor里面自带nginx和redis 先删除这两个docker容器")])]),a._v(" "),t("h2",{attrs:{id:"_5、访问地址-http-192-168-1-5-86"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、访问地址-http-192-168-1-5-86"}},[a._v("#")]),a._v(" 5、访问地址：http://192.168.1.5:86/")]),a._v(" "),t("ul",[t("li",[a._v("用户名：admin")]),a._v(" "),t("li",[a._v("密码：Harbor12345")])]),a._v(" "),t("h2",{attrs:{id:"_6、登录harbor命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、登录harbor命令"}},[a._v("#")]),a._v(" 6、登录harbor命令")]),a._v(" "),t("ul",[t("li",[a._v("docker login -u admin -p Harbor12345 192.168.1.5:86")]),a._v(" "),t("li",[a._v("推送镜像到harbor：docker push 192.168.1.5:86/repo/mysql:5.7")]),a._v(" "),t("li",[a._v("级联删除关联镜像：docker rmi 9cfcce23593a -f")])])])}),[],!1,null,null,null);t.default=e.exports}}]);