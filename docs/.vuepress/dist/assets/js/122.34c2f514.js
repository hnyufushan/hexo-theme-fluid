(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{467:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("源码包有源码包的灵活，RPM 包有 RPM 包的方便，一些比较常用的生产工具包，打成 RPM 包还是比较方便的。")]),s._v(" "),a("h2",{attrs:{id:"_1-物料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-物料"}},[s._v("#")]),s._v(" 1，物料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://openresty.org/cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("openresty 官网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/openresty/openresty-packaging",target:"_blank",rel:"noopener noreferrer"}},[s._v("openresty-packaging"),a("OutboundLink")],1),s._v("：官方维护的 RPM 构建的基础文件。")])]),s._v(" "),a("h2",{attrs:{id:"_2-我的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-我的"}},[s._v("#")]),s._v(" 2，我的")]),s._v(" "),a("p",[s._v("官方提供的包大多给的是默认配置，不大适合在生产直接使用，因此借鉴官方的包进行了一些简单的调整改造，并将基础文件整理成了项目：")]),s._v(" "),a("div",{staticClass:"cardListContainer"},[a("div",{staticClass:"card-list"},[a("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#0074ff","--randomColor":"#0074ff",color:"#fff"},attrs:{href:"https://github.com/eryajf/rpmbuild",target:"_blank"}},[a("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),s._v(" "),a("div",[a("p",{staticClass:"name"},[s._v("rpmbuild")]),s._v(" "),a("p",{staticClass:"desc"},[s._v("工作中常用的RPM构建spec")])])])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rpmbuild\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 工作中常用的RPM构建spec\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//avatars2.githubusercontent.com/u/416130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("s=460"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com/eryajf/rpmbuild "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0074ff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("textColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#fff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--textColor)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),a("p",[s._v("调整说明如下：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("替换了默认的 nginx.conf 文件内容")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("调整日志格式为 json，日志路径如下")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v(" /data/log/error.log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" /data/log/tmp.log json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("调整支持传递带有下划线的 header。")])])])]),s._v(" "),a("li",[a("p",[s._v("主动创建一些软链，便于维护或者规范")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-snf")]),s._v(" /usr/local/openresty/nginx/sbin/nginx /usr/sbin/nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-snf")]),s._v(" /usr/local/openresty/nginx/conf /etc/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("添加基于 logrotate 的日志清理策略")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("/data/log/tmp.log\n/data/log/error.log\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    daily\n    dateext\n    missingok\n    rotate 7\n    notifempty\n    create 755 www\n    sharedscripts\n    postrotate\n        [ -f /var/run/nginx.pid ] && kill -USR1 `cat /var/run/nginx.pid`\n    endscript\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])]),s._v(" "),a("p",[s._v("添加模块儿如下：")]),s._v(" "),a("ul",[a("li",[s._v("添加 ldap 模块儿的支持")]),s._v(" "),a("li",[s._v("添加 upsync 模块儿的支持")])]),s._v(" "),a("h2",{attrs:{id:"_3-打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-打包"}},[s._v("#")]),s._v(" 3，打包")]),s._v(" "),a("p",[s._v("如下内容基于 CentOS7 进行。")]),s._v(" "),a("p",[s._v("首先将项目克隆在主机的 root 目录下，因为 rpmbuild 有不少变量是基于家目录来做的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git clone https://github.com/eryajf/rpmbuild.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置阿里和 openresty 的 yum 源：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" yum-utils\n$ yum-config-manager --add-repo http://mirrors.aliyun.com/repo/Centos-7.repo\n$ yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("安装基础构建工具：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rpm-build redhat-rpm-config rpmdevtools\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装项目编译依赖：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++ systemtap-sdt-devel openresty-zlib-devel openresty-openssl-devel openresty-pcre-devel gd-devel openresty-openssl111-devel ccache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下载 spec 中定义的源码文件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入到工作目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/rpmbuild/SPECS/openresty/\n$ spectool "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" openresty.spec\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行打包命令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ rpmbuild "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ba")]),s._v(" openresty.spec\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当看到最后结果返回值为 0 时，则说明构建成功。如果有报错，则根据报错信息进行具体应对工作。")]),s._v(" "),a("p",[s._v("成功之后，会在 "),a("code",[s._v("/root/rpmbuild/RPMS")]),s._v(" 目录中生成构建好的 rpm 包。")]),s._v(" "),a("p",[s._v("查看构建的包信息：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/rpmbuild/RPMS/x86_64\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qpi")]),s._v(" openresty-1.19.9.1-1.eryajf.el7.x86_64.rpm\nName        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" openresty\nVersion     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.19")]),s._v(".9.1\nRelease     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".eryajf.el7\nArchitecture: x86_64\nInstall Date: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("not installed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nGroup       "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" System Environment/Daemons\nSize        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3714763")]),s._v("\nLicense     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" BSD\nSignature   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSource RPM  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" openresty-1.19.9.1-1.eryajf.el7.src.rpm\nBuild Date  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Thu Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":00:12 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("\nBuild Host  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 13264c814536\nRelocations "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("not relocatable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPackager    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" https://github.com/eryajf\nURL         "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" https://openresty.org/\nSummary     "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" OpenResty, scalable web platform by extending NGINX with Lua\nDescription "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\nThis package contains the core server "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" OpenResty. Built "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" production\nuses.\n\nOpenResty is a full-fledged web platform by integrating the standard Nginx\ncore, LuaJIT, many carefully written Lua libraries, lots of high quality\n3rd-party Nginx modules, and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("most")]),s._v(" of their external dependencies. It is\ndesigned to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" developers easily build scalable web applications, web\nservices, and dynamic web gateways.\n\nBy taking advantage of various well-designed Nginx modules "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most of "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v("\nare developed by the OpenResty team themselves"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", OpenResty effectively\nturns the nginx server into a powerful web app server, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" the web\ndevelopers can use the Lua programming language to script various existing\nnginx C modules and Lua modules and construct extremely high-performance\nweb applications that are capable to handle 10K ~ 1000K+ connections "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\na single box.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h2",{attrs:{id:"_4-模块儿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-模块儿"}},[s._v("#")]),s._v(" 4，模块儿")]),s._v(" "),a("p",[s._v("日常工作中可能会有其他模块儿的使用场景，一般通过 "),a("code",[s._v("--add-module")]),s._v("进行添加，我这里目前添加了两个模块儿：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ll\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104")]),s._v("\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" liqilong  staff    12K "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":59 openresty-ldap.spec\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" liqilong  staff    12K "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":58 openresty-upsync.spec\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("一个是支持基于 ldap 做认证的 ldap 模块儿。配置参考："),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/3416.html#_6-nginx",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("一个是微博开源的能够基于 consul 做配置中心的 upsync 模块儿。")]),s._v(" "),a("p",[s._v("如果你在使用过程中有什么问题，欢迎留言交流。")])])}),[],!1,null,null,null);a.default=t.exports}}]);