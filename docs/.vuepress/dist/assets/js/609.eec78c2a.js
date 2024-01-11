(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{953:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("今天有一个小需求。")]),s._v(" "),a("p",[s._v("运维工作就是要学着不断给自己提出一些需求，然后来将这些需求满足，这就叫成长。")]),s._v(" "),a("p",[s._v("因为自己利用了Jenkins构建安卓的构建历史来达到保留历史构建仍可下载的目的，因此对应存放app以及二维码的目录就慢慢变大起来，之前的目标是保留五次的历史可用，那么现在问题来了，如何让目录下只剩下想要的5个文件？")]),s._v(" "),a("p",[s._v("注意：我这里不断增加的文件，首先有其规律，其次规律并不是日期的规律，而是(1.apk，1.jpg)，(2.apk，2.jpg），这种的递增方式增加的，因此通过find的日期参数进行删除是不可行的哦。先把这个排除在外。")]),s._v(" "),a("p",[s._v("一开始自己的想法是利用脚本来完成这件事儿，但是也想看看网上有没有什么比较新奇的实现方法的。")]),s._v(" "),a("p",[s._v("果不其然，遇到有个地方介绍了两种方法，虽然没有最终解决我的需求（因为它所能实现的都是只能排除一个文件），但是也蛮可爱的，特在此一并记录。")]),s._v(" "),a("p",[s._v("这两种方法源自于https://jingyan.baidu.com/article/e75aca851ff15c142fdac64c.html")]),s._v(" "),a("h2",{attrs:{id:"_1-使用扩展通配符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用扩展通配符"}},[s._v("#")]),s._v(" 1，使用扩展通配符")]),s._v(" "),a("p",[s._v("首先开启扩展通配符")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("shopt -s  extglob\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以先查看是否开启")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("shopt -s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在test文件夹下有1.tt、1.png、index.html，现在要删除除1.tt之外的所有文件，则可以执行如下命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rm -rf !(1.tt)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("利用通配符的功能来进行文件的排除，也是很妙的一个用法，不过我马上拿这个操作进行测试是否支持多个文件的排除在外，发现并不支持，无奈不符合我的需求，放弃。")]),s._v(" "),a("p",[s._v("再看第二个。")]),s._v(" "),a("h2",{attrs:{id:"_2-find命令法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-find命令法"}},[s._v("#")]),s._v(" 2，find命令法")]),s._v(" "),a("p",[s._v("在test文件夹下有1.tt、1.png、index.html，现在要删除除1.tt之外的所有文件，则可以执行如下命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('find . -not -name "1.tt" -exec rm -rf {} \\;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在执行的时候有一个提示，不用管它，因为.和..是系统默认指明为当前目录和上级目录的，不会删除的。")]),s._v(" "),a("p",[s._v("也可以将find的结果通过xargs进行转换后再交给rm命令处理。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('find . -not -name "1.tt" | xargs rm -rf\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个方法与第一个一样也是无法实现多个文件的排除。哎，自己直接搞个简单脚本吧。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("开始自己的表演之前先来个小福利。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b45fc11244302eec.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_3-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-脚本"}},[s._v("#")]),s._v(" 3，脚本")]),s._v(" "),a("p",[s._v("于是写了这样一个脚本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bib/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("dosome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(" /tmp/er\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" *\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /tmp/er/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" ./\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/html/er\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.jpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/aa.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" /tmp/aa.log"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\ndosome\n \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/html/app\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.apk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/aa.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" /tmp/aa.log"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\ndosome\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("扔到服务器验证一下。")]),s._v(" "),a("p",[s._v("ok，个人需求满足，打完收功。")]),s._v(" "),a("p",[s._v("6与28日补充：")]),s._v(" "),a("p",[s._v("有一些bug是需要时间来将其呈现的。由于自己之前所面临的都是一百以内的情况，因此测试起来，脚本按之前的也没有毛病，但是由于这个东西太好用，小伙伴们的构建热情非常高涨，很快就超过一百此了，而我却看到，这个目录下有一些毛病了，因为加入定时任务隔段时间一清理，发现只保留到99.apk了。")]),s._v(" "),a("p",[s._v("废话不多说，直接放上调整后的脚本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bib/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("dosome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(" /tmp/er\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" *\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /tmp/er/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" ./\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/html/er\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lt")]),s._v(" *.jpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/aa.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" /tmp/aa.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $9}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\ndosome\n \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/html/app\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lt")]),s._v(" *.apk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/aa.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" /tmp/aa.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $9}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\ndosome\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);