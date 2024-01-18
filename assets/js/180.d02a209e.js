(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{525:function(_,v,a){"use strict";a.r(v);var e=a(0),t=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("Dockerfile 由一行行命令语句组成，并且支持用"),v("code",[_._v("“#”")]),_._v("开头作为注释，一般的，Dockerfile 分为四部分："),v("code",[_._v("基础镜像信息")]),_._v("，"),v("code",[_._v("维护者信息")]),_._v("，"),v("code",[_._v("镜像操作指令")]),_._v("和"),v("code",[_._v("容器启动时执行的指令")]),_._v("。")]),_._v(" "),v("p",[_._v("Dockerfile 的指令是"),v("code",[_._v("忽略大小写")]),_._v("的，建议使用大写，使用 "),v("code",[_._v("#")]),_._v("作为注释，每一行只支持一条指令，每条指令可以携带多个参数。")]),_._v(" "),v("p",[_._v("Dockerfile 的指令根据作用可以分为两种，构建指令和设置指令。构建指令用于构建 image，其指定的操作不会在运行 image 的容器上执行；设置指令用于设置 image 的属性，其指定的操作将在运行 image 的容器中执行。")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f7ff41b46bafb9be.jpg",alt:"image"}})]),_._v(" "),v("p",[_._v("以下将针对常用的指令进行解析：")]),_._v(" "),v("h2",{attrs:{id:"_1、from"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、from"}},[_._v("#")]),_._v(" 1、FROM")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("FROM")]),_._v(" 或"),v("code",[_._v("FROM :")])]),_._v(" "),v("p",[_._v("第一条指令必须为 FROM 指令，并且，如果在同一个 Dockerfile 中创建多个镜像时，可以使用多个 FROM 指令（每个镜像一次）")]),_._v(" "),v("h2",{attrs:{id:"_2、maintainet"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、maintainet"}},[_._v("#")]),_._v(" 2、MAINTAINET")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("MAINTAINET")])]),_._v(" "),v("p",[_._v("指定维护者的信息")]),_._v(" "),v("h2",{attrs:{id:"_3、run"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、run"}},[_._v("#")]),_._v(" 3、RUN")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("RUN")]),_._v("或 "),v("code",[_._v("RUN [“”, “”, “”]")])]),_._v(" "),v("p",[_._v("每条指令将在当前镜像基础上执行，并提交为新的镜像。（可以用 “\\” 换行）")]),_._v(" "),v("h2",{attrs:{id:"_4、cmd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、cmd"}},[_._v("#")]),_._v(" 4、CMD")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("CMD [“”,””,””]")])]),_._v(" "),v("p",[_._v("指定启动容器时执行的命令，每个 Dockerfile 只能有一条 CMD 指令，如果指定了多条指令，则最后一条执行。（会被启动时指定的命令覆盖）")]),_._v(" "),v("h2",{attrs:{id:"_5、expose"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、expose"}},[_._v("#")]),_._v(" 5、EXPOSE")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("EXPOSE [ …]")])]),_._v(" "),v("p",[_._v("告诉 Docker 服务端暴露端口，在容器启动时需要通过 -p 做端口映射")]),_._v(" "),v("h2",{attrs:{id:"_6、env"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、env"}},[_._v("#")]),_._v(" 6、ENV")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("ENV")])]),_._v(" "),v("p",[_._v("指定环境变量，会被 RUN 指令使用，并在容器运行时保存")]),_._v(" "),v("h2",{attrs:{id:"_7、add"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7、add"}},[_._v("#")]),_._v(" 7、ADD")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("ADD")])]),_._v(" "),v("p",[_._v("复制指定的到容器的中，可以是 Dockerfile 所在的目录的一个相对路径；可以是 URL，也可以是 tar.gz（自动解压）")]),_._v(" "),v("h2",{attrs:{id:"_8、copy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8、copy"}},[_._v("#")]),_._v(" 8、COPY")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("COPY")])]),_._v(" "),v("p",[_._v("复制本地主机的 （ 为 Dockerfile 所在目录的相对路径）到容器中的 （当使用本地目录为源目录时，推荐使用 COPY）")]),_._v(" "),v("h2",{attrs:{id:"_9、entrypoint"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9、entrypoint"}},[_._v("#")]),_._v(" 9、ENTRYPOINT")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("ENTRYPOINT [“”,””,””]")])]),_._v(" "),v("p",[_._v("配置容器启动后执行的命令，并且不可被 docker run 提供的参数覆盖。（每个 Dockerfile 中只能有一个 ENTRYPOINT ，当指定多个时，只有最后一个起效）")]),_._v(" "),v("h2",{attrs:{id:"_10、volume"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10、volume"}},[_._v("#")]),_._v(" 10、VOLUME")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("VOLUME [“/mnt”]")])]),_._v(" "),v("p",[_._v("创建一个可以从本地主机或其他容器挂载的挂载点，一般用来存放数据库和需要保持的数据等")]),_._v(" "),v("h2",{attrs:{id:"_11、user"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11、user"}},[_._v("#")]),_._v(" 11、USER")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("USER daemon")])]),_._v(" "),v("p",[_._v("指定运行容器时的用户名或 UID，后续的 RUN 也会使用指定用户。")]),_._v(" "),v("h2",{attrs:{id:"_12、workdir"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12、workdir"}},[_._v("#")]),_._v(" 12、WORKDIR")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("WORKDIR /path/to/workdir")])]),_._v(" "),v("p",[_._v("为后续的 RUN 、 CMD 、 ENTRYPOINT 指令配置工作目录。（可以使用多个 WORKDIR 指令，后续命令如果参数是相对路径， 则会基于之前命令指定的路径）")]),_._v(" "),v("h2",{attrs:{id:"_13、onbuild"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13、onbuild"}},[_._v("#")]),_._v(" 13、ONBUILD")]),_._v(" "),v("p",[_._v("格式："),v("code",[_._v("ONBUILD [INSTRUCTION]")])]),_._v(" "),v("p",[_._v("配置当所创建的镜像作为其它新创建镜像的基础镜像时，所执行的操作指令")])])}),[],!1,null,null,null);v.default=t.exports}}]);