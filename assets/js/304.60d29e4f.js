(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{649:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("很多时候在部署一些开源的Python项目时，会被各种包的问题给恶心到，要么是找不到，要么是网络问题下不下来，在许多不够细心地时候，就那么踩坑了。现在公司有一些小伙伴在写Python项目，私服也在，因此拉出来简简单单添加了一下Python的，过程同其他几种私服一样的，都非常简单，这里仅做简单记录。")]),a._v(" "),s("p",[a._v("搭建Python私服，我们依旧使用nexus3。")]),a._v(" "),s("p",[a._v("与其他私服一样的，Python私服同样有三种类型：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("hosted")]),a._v(" : 本地存储，便于开发者将个人的一些包上传到私服中")]),a._v(" "),s("li",[s("code",[a._v("proxy")]),a._v(" : 提供代理其他仓库的类型，如豆瓣的pypi仓库")]),a._v(" "),s("li",[s("code",[a._v("group")]),a._v(" : 组类型，实质作用是组合多个仓库为一个对外的地址")])]),a._v(" "),s("p",[a._v("那么就来一个一个创建。")]),a._v(" "),s("h2",{attrs:{id:"_1-创建blob存储。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建blob存储。"}},[a._v("#")]),a._v(" 1，创建blob存储。")]),a._v(" "),s("p",[a._v("为其创建一个单独的存储空间。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0ef8ef8d243f5ed0.jpg",alt:"image"}})]),a._v(" "),s("h2",{attrs:{id:"_2-创建hosted类型的pypi。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建hosted类型的pypi。"}},[a._v("#")]),a._v(" 2，创建hosted类型的pypi。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Name")]),a._v(": 定义一个名称local-pypi")]),a._v(" "),s("li",[s("code",[a._v("Storage")]),a._v("\nBlob store，我们下拉选择前面创建好的专用blob：pypi-hub。")]),a._v(" "),s("li",[s("code",[a._v("Hosted")]),a._v("\n开发环境，我们运行重复发布，因此Delpoyment policy 我们选择Allow redeploy。这个很重要！")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f200d1f0b065a421.jpg",alt:"image"}})]),a._v(" "),s("h2",{attrs:{id:"_3-创建一个proxy类型的pypi仓库。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个proxy类型的pypi仓库。"}},[a._v("#")]),a._v(" 3，创建一个proxy类型的pypi仓库。")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("Name")]),a._v(": proxy-pypi")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Proxy")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Remote Storage: 远程仓库地址")]),a._v(" "),s("p",[a._v("这里填写: http://pypi.python.org/pypi/\n上边的是官方的仓库地址，还有其他几个国内常见的，罗列如下：")]),a._v(" "),s("ul",[s("li",[a._v("阿里云：http://mirrors.aliyun.com/pypi/")]),a._v(" "),s("li",[a._v("中国科技大学：https://pypi.mirrors.ustc.edu.cn/")]),a._v(" "),s("li",[a._v("豆瓣：http://pypi.douban.com/")]),a._v(" "),s("li",[a._v("清华大学：https://pypi.tuna.tsinghua.edu.cn/")]),a._v(" "),s("li",[a._v("中国科学技术大学：http://pypi.mirrors.ustc.edu.cn/")])])])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("Storage")]),a._v(": pypi-hub。")])])]),a._v(" "),s("p",[a._v("其他的均是默认。")]),a._v(" "),s("p",[a._v("整体配置截图如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1b439f58e9bafccd.jpg",alt:"image"}})]),a._v(" "),s("p",[a._v("另外几个仓库同上操作，一一创建，当然也不必全部都加，根据自己实际需求添加即可。")]),a._v(" "),s("h2",{attrs:{id:"_4-创建一个group类型的pypi仓库。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建一个group类型的pypi仓库。"}},[a._v("#")]),a._v(" 4，创建一个group类型的pypi仓库。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Name")]),a._v("：group-pypi")]),a._v(" "),s("li",[s("code",[a._v("Storage")]),a._v("：选择专用的blob存储pypi-hub。")]),a._v(" "),s("li",[s("code",[a._v("group")]),a._v(" : 将左边可选的4个仓库，添加到右边的members下。")])]),a._v(" "),s("p",[a._v("整体配置截图如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a1c9a4a17159bae3.jpg",alt:"image"}})]),a._v(" "),s("p",[a._v("这些配置完成之后，就可以使用了。")]),a._v(" "),s("h2",{attrs:{id:"_5-验证使用。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证使用。"}},[a._v("#")]),a._v(" 5，验证使用。")]),a._v(" "),s("h3",{attrs:{id:"_1-指定配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-指定配置"}},[a._v("#")]),a._v(" 1，指定配置")]),a._v(" "),s("p",[a._v("新建一台环境干净的主机，安装好Python的pip环境。可通过如下命令进行安装：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" release\n$ yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" python36 python36-devel\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("然后通过命令行随便安装一个包，安装的时候，将代理指向我们的私服来。这个地方遇到了两个坑，这里用两个注意来进行提醒。")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("注意：")]),a._v("在指定刚刚配置的私服时，需要在统一对外的地址最后加上一个simple。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("注意：")]),a._v("在第一次进行安装测试的时候，一定要指定测试包的版本，否则可能会报如下错误：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("ERROR: Could not "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" a version that satisfies the requirement django "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("from versions: none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nERROR: No matching distribution found "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" django\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("这个时候指定一下包的版本，就下载成功了，而在往后的下载，就不需要指定版本了。")])])]),a._v(" "),s("p",[a._v("通过如下命令进行验证：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ pip3.6 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --trusted-host "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.3")]),a._v(".0.41 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" http://10.3.0.41:8081/repository/group-pypi/simple django\nWARNING: Running pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" with root privileges is generally not a good idea. Try "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("pip3.6 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--user")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" instead.\nCollecting django\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/6a/23/08f7fd7afdd24184a400fcaebf921bd09b5b5235cbd62ffa02308a7d35d6/Django-3.0.1-py3-none-any.whl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(".4MB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("% "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("████████████████████████████████"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(".4MB "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(".3MB/s\nCollecting asgiref~"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("from django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/a5/cb/5a235b605a9753ebcb2730c75e610fb51c8cab3f01230080a8229fa36adb/asgiref-3.2.3-py2.py3-none-any.whl\nCollecting pytz "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("from django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/e7/f9/f0b53f88060247251bf481fa6ea62cd0d25bf1b11a87888e53ce5b7c8ad2/pytz-2019.3-py2.py3-none-any.whl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("509kB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("% "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("████████████████████████████████"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 512kB "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78")]),a._v(".3MB/s\nCollecting sqlparse"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),a._v(".2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("from django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/ef/53/900f7d2a54557c6a37886585a91336520e5539e3ae2423ff1102daf4f3a7/sqlparse-0.3.0-py2.py3-none-any.whl\nInstalling collected packages: asgiref, pytz, sqlparse, django\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("这个时候去私服的库里看下，已经可以看到刚刚安装的几个包了。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/eryajf/t@master/t/image-20191229213306188.png",alt:"image-20191229213306188"}})]),a._v(" "),s("h3",{attrs:{id:"_2-全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局配置"}},[a._v("#")]),a._v(" 2，全局配置")]),a._v(" "),s("p",[a._v("通过添加全局配置，就不需要每次执行编译的时候指定私服地址了：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/.pip\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ~/.pip/pip.conf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF\n[global]\ntimeout = 60\ntrusted-host =  10.3.0.41\nindex-url = http://10.3.0.41:8081/repository/group-pypi/simple\nEOF")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("保存之后，本机的代理就走本地的私服了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);