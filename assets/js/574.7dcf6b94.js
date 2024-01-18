(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{918:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("之前就听说过 neovim，只不过一直没有涉足，最近打算研究下，却发现看了不少文章都没有清晰讲解其用法，踩了一些坑之后，今天来做一下分享。")]),s._v(" "),t("h2",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1，安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" neovim\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("更改别名，鸟枪换炮。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# edit ~/.zshrc")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vim")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nvim'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nvim'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_2-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-插件"}},[s._v("#")]),s._v(" 2，插件")]),s._v(" "),t("h3",{attrs:{id:"_1-安装插件管理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装插件管理器"}},[s._v("#")]),s._v(" 1，安装插件管理器")]),s._v(" "),t("p",[s._v("很多丰富的功能依赖于插件的加持，在安装插件之前，需要先安装插件的管理方式，这里使用 "),t("code",[s._v("vim-plug")]),s._v("， 命令如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fLo")]),s._v(" ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("大多数情况下，我们在国内执行如上命令，都会得到如下回复："),t("code",[s._v("curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused")]),s._v("，此时将如下一组数据写入到 hosts 以避开这个报错：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"199.232.28.133 raw.githubusercontent.com"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后再来执行上边的"),t("code",[s._v("curl")]),s._v("安装命令，即可成功了。")]),s._v(" "),t("p",[s._v("当然，如果直接请求不成功，也可以直接通过下载文件，放置到本地的方式进行安装，不过你最好能解决科学上网的问题，否则在后边安装插件可能也不会太顺利。")]),s._v(" "),t("p",[s._v("插件管理器下载到本地之后，注意要执行一下下边的软链，否则后续的步骤可能总会有问题：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-snf")]),s._v(" ~/.vim ~/.config/nvim\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-配置插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置插件"}},[s._v("#")]),s._v(" 2，配置插件")]),s._v(" "),t("p",[s._v("插件的管理维护依赖于配置文件："),t("code",[s._v("~/.config/nvim/init.vim")]),s._v("，我们先不必实操，先简单了解一下插件的配置文件规范。")]),s._v(" "),t("p",[s._v("标准的语法格式如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("call plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#begin()")]),s._v("\ncall plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#end()")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("所需要安装的插件写在这两个语句中间，然后通过插件管理的命令进行配置：")]),s._v(" "),t("ul",[t("li",[s._v("安装插件："),t("code",[s._v(":PlugInstall")])]),s._v(" "),t("li",[s._v("更新插件："),t("code",[s._v(":PlugUpdate")])]),s._v(" "),t("li",[s._v("删除插件："),t("code",[s._v(":PlugClean")]),s._v(" （首先在 "),t("code",[s._v("init.vim")]),s._v(" 中，注释掉该插件，然后打开 Nvim， 使用 "),t("code",[s._v(":PlugClean")]),s._v(" 命令清除该插件）")]),s._v(" "),t("li",[s._v("查看插件状态："),t("code",[s._v(":PlugStatus")])]),s._v(" "),t("li",[s._v("升级 vim-plug："),t("code",[s._v(":PlugUpgrade")])])]),s._v(" "),t("h2",{attrs:{id:"_3-插件大全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-插件大全"}},[s._v("#")]),s._v(" 3，插件大全")]),s._v(" "),t("h3",{attrs:{id:"_1-底部状态栏vim-airline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-底部状态栏vim-airline"}},[s._v("#")]),s._v(" 1，底部状态栏"),t("code",[s._v("vim-airline")])]),s._v(" "),t("p",[s._v("默认的 iterm2 的 vim 界面中，底部状态栏内容很少，通过配置这个插件，可以让状态栏内容更加丰富一些。")]),s._v(" "),t("p",[s._v("这是安装的第一个插件，为了提供给刚刚接触的同学一个清晰的熟悉方向，我来完整演示一下安装的流程，网上有太多介绍的文章，往往都是泛泛而言，让初学的我如坠五里雾，悲剧不应重演，我只希望看到这篇文章的朋友不需要再去点开其他文章了。")]),s._v(" "),t("p",[s._v("正像上边说的，应该严格按照如上语法要求，将要安装的插件写入到配置文件中：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.config/nvim/init.vim\ncall plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#begin()")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim-airline/vim-airline'")]),s._v("\ncall plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#end()")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("然后输入 vim 进入到 neovim 中，接着键入"),t("code",[s._v(":PlugInstall")]),s._v("回车进行安装，其实这个地方编辑的时候已经支持补全，键入 "),t("code",[s._v("P")]),s._v("然后"),t("code",[s._v("tab")]),s._v("一下，就会补全为 "),t("code",[s._v("Plug")]),s._v("了。看到 Done 则说明已经安装成功了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e044c46c851a111a.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("如果这里报错："),t("code",[s._v("不是编辑器的命令: PlugInstall")]),s._v("，则有可能是前边的某个步骤遗漏了或者错了，可回过去重新来一遍。")]),s._v(" "),t("p",[s._v("然后通过两次 "),t("code",[s._v(":q")]),s._v("退出编辑器，接着再次进入，就能看到插件已经生效了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a74e76e430d4de05.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("事实上"),t("code",[s._v("vim-airline")]),s._v("提供了很多主题来支持用户自定义，不同主题可以参考"),t("a",{attrs:{href:"https://github.com/vim-airline/vim-airline/wiki/Screenshots",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("。想要更改主题，首先需要安装插件 "),t("a",{attrs:{href:"https://github.com/vim-airline/vim-airline-themes",target:"_blank",rel:"noopener noreferrer"}},[s._v("vim-airlinetheme"),t("OutboundLink")],1),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.config/nvim/init.vim\ncall plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#begin()")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim-airline/vim-airline'")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim-airline/vim-airline-themes'")]),s._v("\ncall plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#end()")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("安装完成之后，通过如下设置进行自定义，同样，配置仍然是写入到 "),t("code",[s._v("~/.config/nvim/init.vim")]),s._v("中。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" g:airline_theme"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<theme>'")]),s._v(' " '),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("theme"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 代表某个主题的名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-自动双引号-括号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动双引号-括号"}},[s._v("#")]),s._v(" 2，自动双引号 & 括号")]),s._v(" "),t("p",[s._v("我们日常在编辑器中写代码时，输入的引号或者括号都会默认自动写入一对，然后鼠标的光标停留在中间，这里我们通过插件 "),t("a",{attrs:{href:"https://github.com/jiangmiao/auto-pairs",target:"_blank",rel:"noopener noreferrer"}},[s._v("auto-paris"),t("OutboundLink")],1),s._v(" 也可以给 vim 扩展这个功能。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Plug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jiangmiao/auto-pairs'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装之后，就拥有了与编辑器一样的自动扩展引号的功能了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7ea932841608240c.gif",alt:"img"}})]),s._v(" "),t("p",[s._v("详细规则如下：")]),s._v(" "),t("p",[s._v("auto-pairs 插件的主要功能通过如下的表格进行描述 (表格中 "),t("code",[s._v("│")]),s._v(" 表示当前光标所在位置)。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("auto-pairs 功能")])]),s._v(" "),t("th",[t("strong",[s._v("支持的配对符号")])]),s._v(" "),t("th",[t("strong",[s._v("原文本")])]),s._v(" "),t("th",[t("strong",[s._v("按键")])]),s._v(" "),t("th",[t("strong",[s._v("新文本")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("成对插入")]),s._v(" "),t("td",[s._v("{}、[]、()、“”、“、”")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("[")]),s._v(" "),t("td",[s._v("[│]")])]),s._v(" "),t("tr",[t("td",[s._v("成对删除")]),s._v(" "),t("td",[s._v("{}、[]、()、“”、“、”")]),s._v(" "),t("td",[s._v("foo[│]")]),s._v(" "),t("td",[s._v("BACKSPACE")]),s._v(" "),t("td",[s._v("foo│")])]),s._v(" "),t("tr",[t("td",[s._v("删除重复成对符号")]),s._v(" "),t("td",[s._v("{}、[]、()、“”、“、”")]),s._v(" "),t("td",[s._v("foo“““│”””")]),s._v(" "),t("td",[s._v("BACKSPACE")]),s._v(" "),t("td",[s._v("foo│")])]),s._v(" "),t("tr",[t("td",[s._v("换行并自动缩进")]),s._v(" "),t("td",[s._v("{}、[]、()")]),s._v(" "),t("td",[s._v("node{│}")]),s._v(" "),t("td",[s._v("ENTER")]),s._v(" "),t("td",[s._v("node{│}")])]),s._v(" "),t("tr",[t("td",[s._v("在括号内两侧各插入空格")]),s._v(" "),t("td",[s._v("{}、[]、()")]),s._v(" "),t("td",[s._v("foo{│}")]),s._v(" "),t("td",[s._v("SPACE")]),s._v(" "),t("td",[s._v("foo{│}")])]),s._v(" "),t("tr",[t("td",[s._v("词后单引号不成对插入")]),s._v(" "),t("td",[s._v("’")]),s._v(" "),t("td",[s._v("foo│")]),s._v(" "),t("td",[s._v("’")]),s._v(" "),t("td",[s._v("foo’│")])]),s._v(" "),t("tr",[t("td",[s._v("跳过右括号")]),s._v(" "),t("td",[s._v("{}、[]、()")]),s._v(" "),t("td",[s._v("[foo│]")]),s._v(" "),t("td",[s._v("]")]),s._v(" "),t("td",[s._v("[foo]│")])]),s._v(" "),t("tr",[t("td",[s._v("在转义符 \\ 后禁用插件")]),s._v(" "),t("td",[s._v("{}、[]、()、“”、“、”")]),s._v(" "),t("td",[s._v("foo\\│")]),s._v(" "),t("td",[s._v("{")]),s._v(" "),t("td",[s._v("foo{│")])]),s._v(" "),t("tr",[t("td",[s._v("对字符串加小括号")]),s._v(" "),t("td",[s._v("C 语言风格的字符串")]),s._v(" "),t("td",[s._v("│‘foo’")]),s._v(" "),t("td",[s._v("ALT+e")]),s._v(" "),t("td",[s._v("(‘foo’)│")])])])]),s._v(" "),t("h3",{attrs:{id:"_3-注释插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-注释插件"}},[s._v("#")]),s._v(" 3，注释插件")]),s._v(" "),t("p",[s._v("平常我们注释一行内容的时候，可能会比较麻烦，尤其是不同语言的注释，各不相同，在 vim 中操作可能会比较麻烦，而 "),t("a",{attrs:{href:"https://github.com/scrooloose/nerdcommenter",target:"_blank",rel:"noopener noreferrer"}},[s._v("nerdcommenter"),t("OutboundLink")],1),s._v(" 就是一款针对这个问题的插件。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Plug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrooloose/nerdcommenter'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("用法：通过键入 "),t("code",[s._v("\\cc")]),s._v("可以对某行进行注释，使用 "),t("code",[s._v("3\\cc")]),s._v("则可以注释包含光标所在行往下三行的内容， "),t("code",[s._v("3\\ci")]),s._v("切换对应行的注释状态。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/73f15ec83d15e38b.gif",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"_4-文件管理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件管理器"}},[s._v("#")]),s._v(" 4， 文件管理器")]),s._v(" "),t("p",[s._v("让我们在终端里也能像图形界面中一样管理系统中的文件，插件名字是："),t("a",{attrs:{href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"}},[s._v("scrooloose/nerdtree"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Plug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrooloose/nerdtree'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用姿势：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v(":NERDTree")]),s._v(" 即可打开当前编辑文件所在的目录")]),s._v(" "),t("li",[s._v("按住 Ctrl, 双击 w 可以在两个窗口之间切换")]),s._v(" "),t("li",[s._v("把光标移动到该文件，然后按 o，即可在右边窗口打开该文件")]),s._v(" "),t("li",[s._v("在该窗口直接按 q 即可退出")])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/916c4d7c6a2ce174.jpg",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"_5-高亮显示复制内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-高亮显示复制内容"}},[s._v("#")]),s._v(" 5，高亮显示复制内容")]),s._v(" "),t("p",[s._v("在 vim 当中我们有时候会用"),t("code",[s._v("yy")]),s._v("复制一些行，默认情况下按下"),t("code",[s._v("yy")]),s._v("之后不会有任何反应，只能凭借自己刚刚的记忆来确认复制了哪些内容，"),t("a",{attrs:{href:"https://github.com/machakann/vim-highlightedyank",target:"_blank",rel:"noopener noreferrer"}},[s._v("vim-highlightedyank"),t("OutboundLink")],1),s._v(" 插件则可以让我们在按下"),t("code",[s._v("yy")]),s._v("之后高亮显示一会儿将要复制的内容。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Plug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'machakann/vim-highlightedyank'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果觉得高亮显示的时间太短，可以设置增加高亮显示的时间（单位为毫秒）：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" g:highlightedyank_highlight_duration "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(' " 高亮持续时间为 '),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" 毫秒\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("目前暂时先罗列这几个，以后遇到优秀的插件，还会再收集分享。GitHub 也有很多人分享的成熟的配置，只不过如果只添加却不知道作用，似乎也用处不大。")]),s._v(" "),t("h3",{attrs:{id:"_6-个人配置汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-个人配置汇总"}},[s._v("#")]),s._v(" 6，个人配置汇总")]),s._v(" "),t("p",[s._v("我个人的配置汇总如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("call plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#begin()")]),s._v("\n\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim-airline/vim-airline'")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim-airline/vim-airline-themes'")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jiangmiao/auto-pairs'")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrooloose/nerdcommenter'")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrooloose/nerdtree'")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'machakann/vim-highlightedyank'")]),s._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tmhedberg/SimpylFold'")]),s._v("\n\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'junegunn/fzf'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dir'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/.fzf'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'do'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./install --all'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'junegunn/fzf.vim'")]),s._v(",\n\ncall plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#end()")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" g:airline_theme"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'simple'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" 设置空白字符的视觉提示\nset list listchars=extends:❯,precedes:❮,tab:▸\\ ,trail:˽\n\n"')]),s._v(" 高亮当前行\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(' cursorline\n\n" 显示行号\n'),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" number\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"_4-参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[s._v("#")]),s._v(" 4，参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://jdhao.github.io/2018/09/05/centos_nvim_install_use_guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux 下 Neovim 配置 Python 开发环境指南"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://michael728.github.io/2018/12/02/tools-vim-plugin-config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vim 插件及配置"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);