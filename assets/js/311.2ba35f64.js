(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{656:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1，前言")]),s._v(" "),a("p",[s._v("如何配置 npm 私服，这个问题很早之前就已经研究过，博客也发表过此文章： "),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/1956.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 nexus3 配置 npm 私有仓库"),a("OutboundLink")],1),s._v(" ，本文来介绍当我们私服配置完毕之后，如何上传到nexus私服中。")]),s._v(" "),a("p",[s._v("这个逻辑跟 Python 私服有点类似：")]),s._v(" "),a("p",[s._v("其实用一句话来表述，就是 "),a("code",[s._v("通过私服拉包的时候，走 group 的代理，从本地上传包的时候，要走 local 的仓库。")])]),s._v(" "),a("p",[s._v("接下来就记录一下配置方法并用测试包来验证下。")]),s._v(" "),a("p",[s._v("创建私服的过程这里不详述了，已知现有 npm 私仓，物料信息如下：")]),s._v(" "),a("ul",[a("li",[s._v("group：http://192.168.31.68:8931/repository/npm/")]),s._v(" "),a("li",[s._v("local：http://192.168.31.68:8931/repository/npm-local/")])]),s._v(" "),a("p",[s._v("本文将介绍一个通过本地上传的方式处理包依赖的流程。")]),s._v(" "),a("h2",{attrs:{id:"_2-准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备"}},[s._v("#")]),s._v(" 2，准备")]),s._v(" "),a("p",[s._v("这个配置过程中，如果有一些地方没有配置正确，将会遇到一些错误，这里先介绍能够正常走通的流程，最后再汇总过程中可能会遇到的问题。")]),s._v(" "),a("p",[s._v("首先因为与私服交互需要一个账号，因此我们来创建一个单独的账号来与 npm 私服交互。")]),s._v(" "),a("p",[s._v("nexus 中账号的管理思路是，先创建角色，然后给角色绑定不同的管理权限，接着创建账号，将账号绑定给不同的角色。")]),s._v(" "),a("p",[s._v("先创建角色：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/09/afa6929b47059291.png",alt:""}})]),s._v(" "),a("p",[s._v("这里创建一个 nx-npm 的角色，该角色拥有 npm 方面所有的权限，这可能是个比较大的权限，我没有测试过上传所需的最小权限，感兴趣的同学可以自行测试一下。")]),s._v(" "),a("p",[s._v("然后创建用户：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/09/e553a28081843017.png",alt:""}})]),s._v(" "),a("p",[s._v("基本上都是常规内容，不做过多赘述。")]),s._v(" "),a("p",[s._v("注意给用户绑定 nx-npm 这个角色。")]),s._v(" "),a("p",[s._v("配置 nexus 中安全方面的一个规则，具体操作如下图，如果这步不操作，后边传包的时候会有 401 的错误。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/09/8f676bc6ea80df5e.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_3-实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实践"}},[s._v("#")]),s._v(" 3，实践")]),s._v(" "),a("p",[s._v("以上准备工作完成之后，就可以进入传包的实践了。")]),s._v(" "),a("p",[s._v("首先创建一个空的测试包：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" eryajf-test "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" eryajf-test\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" index.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("接着登陆认证到私服：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.31.68:8931/repository/npm-local/\nUsername: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("\nPassword:\nEmail: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("this IS public"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" npm@eryajf.net\nLogged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" as "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" on http://192.168.31.68:8931/repository/npm-local/.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后执行上传：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.31.68:8931/repository/npm-local/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice 📦  eryajf-test@1.0.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Tarball Contents "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    index.js\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice 225B package.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Tarball Details "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice name:          eryajf-test\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice version:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice package size:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("278")]),s._v(" B\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice unpacked size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("225")]),s._v(" B\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice shasum:        179052169d980f939dc5051bac456ed6b8f3d217\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice integrity:     sha512-XcOCpbgz9deAK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/5mKTv7o5d8Xg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice total files:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice\n+ eryajf-test@1.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("从这里可以看到已经上传成功了，去浏览器当中查看：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/09/f6942b1961b8e329.png",alt:""}})]),s._v(" "),a("p",[s._v("这样就成功将本地的包上传到了 "),a("code",[s._v("nexus")]),s._v(" 私服当中。")]),s._v(" "),a("h2",{attrs:{id:"_4-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试"}},[s._v("#")]),s._v(" 4，测试")]),s._v(" "),a("p",[s._v("当我们把包成功上传之后，就可以直接通过如下命令测试包的下载：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" eryajf-test@1.0.0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.31.68:8931/repository/npm/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" notice created a lockfile as package-lock.json. You should commit this file.\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" WARN npm-app2@1.0.3 No description\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" WARN npm-app2@1.0.3 No repository field.\n\n+ eryajf-test@1.0.0\nadded "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" package "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".551s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("可以看到包已经可以通过私服的 group 正常拉取了。")]),s._v(" "),a("h2",{attrs:{id:"_5-报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-报错"}},[s._v("#")]),s._v(" 5，报错")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果遇到如下报错：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Unable to authenticate, need: BASIC "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("realm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sonatype Nexus Repository > Manager"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("原因是没有启用 "),a("code",[s._v("npm Bearer Token Realm")]),s._v(" 参考上文进行启用即可。")]),s._v(" "),a("ul",[a("li",[s._v("如果遇到 401 的报错，则大多是账号密码认证的问题。")])]),s._v(" "),a("h2",{attrs:{id:"_6-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-参考"}},[s._v("#")]),s._v(" 6，参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://levelup.gitconnected.com/deploying-private-npm-packages-to-nexus-a16722cc8166",target:"_blank",rel:"noopener noreferrer"}},[s._v("Publishing private NPM packages to Nexus"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);