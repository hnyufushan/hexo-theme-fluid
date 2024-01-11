(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{628:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("平时特别喜欢在 GitHub 上边逛着看有没有什么好用的运维开源工具，在这个过程中，似乎打交道最多的也就数 python 了，那么熟练的安装以及运用 python 就是一个绕不开的话题了，今天就来个最基础最简单的，python2.7 的安装。")]),s._v(" "),a("h2",{attrs:{id:"一、安装-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装-python"}},[s._v("#")]),s._v(" 一、安装 Python")]),s._v(" "),a("h3",{attrs:{id:"_1-安装依赖。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖。"}},[s._v("#")]),s._v(" 1，安装依赖。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib zlib-devel readline-devel sqlite-devel bzip2-devel openssl-devel gdbm-devel libdbi-devel ncurses-libs kernel-devel libxslt-devel libffi-devel python-devel mysql-devel zlib-devel mysql-server sshpass gcc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-下载源码包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载源码包。"}},[s._v("#")]),s._v(" 2，下载源码包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.sohu.com/python/2.7.12/Python-2.7.12.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-解压安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解压安装。"}},[s._v("#")]),s._v(" 3，解压安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" Python-2.7.12.tgz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Python-2.7.12\n./configure "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" distclean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1662111e7b60c9b4.jpg",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"_4-配置软链接。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置软链接。"}},[s._v("#")]),s._v(" 4，配置软链接。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/python /usr/bin/python2.6.6\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/bin/python2.7 /usr/bin/python\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-修改两个配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改两个配置。"}},[s._v("#")]),s._v(" 5，修改两个配置。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1s/python/python2.6.6/g'")]),s._v(" /usr/bin/yum\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1s/python/python2.6.6/g'")]),s._v(" /usr/libexec/urlgrabber-ext-down\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"二、安装-easy-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装-easy-install"}},[s._v("#")]),s._v(" 二、安装 easy_install")]),s._v(" "),a("h3",{attrs:{id:"_1-下载安装包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装包。"}},[s._v("#")]),s._v(" 1，下载安装包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate  https://pypi.python.org/packages/f7/94/eee867605a99ac113c4108534ad7c292ed48bf1d06dfe7b63daa51e49987/setuptools-28.0.0.tar.gz"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#md5=9b23df90e1510c7353a5cf07873dcd22")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装。"}},[s._v("#")]),s._v(" 2，安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" setuptools-28.0.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" setuptools-28.0.0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" python  setup.py  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"三、安装-pip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、安装-pip"}},[s._v("#")]),s._v(" 三、安装 pip")]),s._v(" "),a("h3",{attrs:{id:"_1-下载安装包。-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装包。-2"}},[s._v("#")]),s._v(" 1，下载安装包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate https://github.com/pypa/pip/archive/1.5.5.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" pip-1.5.5.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-安装。-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装。-2"}},[s._v("#")]),s._v(" 2，安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" pip-1.5.5.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" pip-1.5.5/\npython setup.py "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);