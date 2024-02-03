(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{918:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("新的Mac系统使用起来，各个方面都非常舒服，不过因为CPU架构的变化，在使用过程中也遇到了不少奇怪的问题，这自然难免，不同的架构之间本身就会存在软件兼容性的问题，今天在通过vscode调试go项目的时候，就遇到这类问题了。")]),s._v(" "),a("p",[s._v("这里直接总览说明下问题原因以及思路：")]),s._v(" "),a("ul",[a("li",[a("ol",[a("li",[s._v("检查golang环境版本，确保为arm版本的。")])])]),s._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[s._v("重装编辑器使用的dlv工具，重装之后，重启下vscode。")])])]),s._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[s._v("记得检查一下自己的编辑器，看看是不是也是arm版本的。")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/2b047abd54f8aa81.jpg",alt:""}})]),s._v(" "),a("p",[s._v("一开始与往常一样，配置了"),a("code",[s._v("launch.json")]),s._v("之后，就开始运行调试，然后就看到了这样的报错：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("could not launch process: stub exited "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" connection: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" status "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("后来查看网上说法，发现自己的golang版本安装成amd的了，尽管运行项目的时候没有任何问题，但是现在调试的时候，就不行了。")]),s._v(" "),a("p",[s._v("于是，需要先把golang环境换成arm版本的，这里大家根据自己的实际情况调整即可。我是通过压缩包的方式安装，因此直接删除原来的版本，然后下载新版，安装即可：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /usr/local/go\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://studygolang.com/dl/golang/go1.17.8.darwin-arm64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf go1.17.8.darwin-arm64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" go /usr/local/go\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("重新安装之后，查看一下当前的go版本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ go version\ngo version go1.17.8 darwin/arm64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后再次运行调试，发现仍旧不行，还会报错，网上冲浪看了不少的答案，也都是没有效果，有的人说把插件全部删除重新安装，这个的确是需要重新安装的。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" *\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后在vscode的命令窗口中输入 "),a("code",[s._v(">go:install")]),s._v("，选择所有的插件重新安装。重装之前最好重启一下vscode。")]),s._v(" "),a("p",[s._v("我这里重新安装之后，发现仍旧不行，遇到了一个新的错误：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("could not launch process: can not run under Rosetta, check that the installed build of Go is right "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your CPU architecture\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个问题在dlv插件的issue中有不少人遇到的，最后，我终于在其中一个"),a("a",{attrs:{href:"https://github.com/go-delve/delve/issues/2604#issuecomment-1086604156",target:"_blank",rel:"noopener noreferrer"}},[s._v("评论"),a("OutboundLink")],1),s._v("中获得灵感。")]),s._v(" "),a("p",[s._v("如果golang环境以及插件都已经是arm架构之下的，那么可能需要再检查一下编辑器，是不是arm版本的，我看了下自己安装的vscode，果然是Intel版本的，于是去到官网下载了arm版本的，重新安装之后，发现调试能够正常运行了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);