(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{570:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("混迹于互联网，或多或少难免都会与 GitHub 有交互，大多数时候在公司中积累的 git 使用经验都是面向 GitLab 的，也很容易想当然地将过往的经验套到 GitHub 中，而事实上还是有一些差别的，最近开源了几个项目，有一些还涉及到要与外部开发者协同工作，当我真正面对要处理一个 PR 的时候，内心是慌乱的，一时间不知道该从何处下手，这里就整理记录一下这方面的实践。")]),s._v(" "),a("h2",{attrs:{id:"发布项目并维护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布项目并维护"}},[s._v("#")]),s._v(" 发布项目并维护")]),s._v(" "),a("p",[s._v("个人发布开源项目相对来说算是比较简单，通常创建仓库，然后将代码 push 上去，这些流程步骤我们都是熟悉的。")]),s._v(" "),a("p",[s._v("这里我不过多介绍如何创建一个项目，只说一些项目创建之后的问题。")]),s._v(" "),a("h3",{attrs:{id:"基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[s._v("#")]),s._v(" 基础配置")]),s._v(" "),a("p",[s._v("配置项目的说明，对应官网，以及标签，这些信息将辅助别人快速认识这个项目，并深入了解学习这个项目。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/9a78c978731d34b3.jpg",alt:""}})]),s._v(" "),a("p",[s._v("如果想要精简二级 tab，则可以在项目的设置中的 "),a("code",[s._v("Features")]),s._v(" 配置项进行取舍：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/42dd05742b2913f9.jpg",alt:""}})]),s._v(" "),a("p",[s._v("在 settings 的 Pages 配置页面中，我们可以选择将该项目配置为静态站点：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/36150a0dd332b312.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"自己维护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自己维护"}},[s._v("#")]),s._v(" 自己维护")]),s._v(" "),a("p",[s._v("如果你是项目的负责人，在后期项目维护中，同样不建议直接使用本地 push 的方式进行，尽管我们有这个项目的全部权限，也可能会因为某次失手，导致将不符合预期的内容提交。这里建议走 pr 的方式进行维护，便于在 merge 的时候二次核验一下代码差异。")]),s._v(" "),a("p",[s._v("接下来是一个维护的常规流程。")]),s._v(" "),a("p",[s._v("拉取代码到本地：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:eryajf/learn-github.git\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" learn-github\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# learn-github")]),s._v("\n学习GitHub相关交互以及功能\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("此时项目所在分支为默认的 main 分支，我们从最新代码切到一个测试分支。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模拟如下修改")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'模拟修改提交'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" README.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后将 test 分支提交到远程。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("然后我们来到 GitHub 项目页，可以看到 test 分支：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/1eb3fe63f43e6fb4.jpg",alt:""}})]),s._v(" "),a("p",[s._v("可以看到页面已经提示 test 分支，并有一个提交 PR 的按钮，我们来创建这个 PR：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/f6da24b989a5749b.jpg",alt:""}})]),s._v(" "),a("p",[s._v("通常点击 1 的 tab 进行交互，2 号可以选择当前项目的不同分支，我们这里选择刚刚的 test 分支。")]),s._v(" "),a("p",[s._v("编号 3 表示可以选择其他远程仓库进行合并，通常是与一个 fork 后的仓库进行交互。编号 4 可以清晰看到当前这次合并与源分支的差异。")]),s._v(" "),a("p",[s._v("点击创建 PR：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/009c859bd97793ec.jpg",alt:""}})]),s._v(" "),a("p",[s._v("通常我们应该在这一步写明一个标题，以及当次将要合并的内容纲要。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/e9be61f4666fce21.jpg",alt:""}})]),s._v(" "),a("p",[s._v("此时视角切回到项目主维护者，可以通过编号 1 和编号 2 来核对提交的次数以及差异内容，这里因为是从本地推送，所以通常直接二次 check 即可，如果是处理别人的 PR，则应该将代码拉到本地进行一些功能测验。")]),s._v(" "),a("p",[s._v("编号 3 表示将这次 PR 进行合并，所有的提交都会合并到 main 分支中，如果该次 PR 有多次 commit，主分支也会呈现多次 commit 的历史。")]),s._v(" "),a("p",[s._v("编号 4 表示将多次 commit 压缩成 1 次，然后再合并到主分支，一般与协助者协同维护项目的时候，应该选择第二项。")]),s._v(" "),a("p",[s._v("当我们确认之后，就完成了一次自己面对项目的迭代推进流程。")]),s._v(" "),a("h3",{attrs:{id:"协同流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协同流程"}},[s._v("#")]),s._v(" 协同流程")]),s._v(" "),a("p",[s._v("当我们的项目吸引了更多的同学关注之后，有一些有想法的同学可能就会参与进来，作为项目维护者，我们会面对第一个 issue，第一个 PR，这个时候不要慌，开源是一个很有包容性的理念，甚至有时候没有人关注你的某一个错漏，但你也不要因此就肆无忌惮，因为还会有人关注你的每一处用心与细节。")]),s._v(" "),a("p",[s._v("现在我这里用另外一个账号，模拟项目协同者，来看看这个流程会经历哪些内容。")]),s._v(" "),a("p",[s._v("注意接下来的内容描述将会在两个账号之间切换，这里首先将两个账号角色做个概览：")]),s._v(" "),a("ul",[a("li",[s._v("eryajf：项目 owner。")]),s._v(" "),a("li",[s._v("lql95：项目协作者。")])]),s._v(" "),a("p",[s._v("通常作为协同者，我们会先把项目 fork 到自己的仓库中：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/a37f1afa65f7d0e4.jpg",alt:""}})]),s._v(" "),a("p",[s._v("现在我处于 lql95 的视角，已经将刚刚 eryajf 名下的项目 fork 到了自己的仓库，此时可以将该项目拉到自己本地进行编码：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:lql95/learn-github.git\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" learn-github\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("将 README 内容改变如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# learn-github")]),s._v("\n学习GitHub相关交互以及功能\n模拟修改提交\n\n这是lql95新增的内容\n\n- a\n- b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("编码完毕之后，就可以将代码提交到自己的远程仓库了，步骤如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git add .\n$ git commit -m '以lql95的视角协同维护项目'\n$ git push --set-upstream origin main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此时 lql95 的远程仓库实际可以相当于刚刚自己维护的 test 分支，我们需要到 eryajf 的仓库中请求对方将自己的修改 pull 过去：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/d1d774b5b681b12f.jpg",alt:""}})]),s._v(" "),a("p",[s._v("方向选择正确之后，我们就可以创建这个 PR 了，同样下一步需要填写标题与备注，这里的标题备注尽量将当次 PR 的内容以列表的形式表明，以便于维护者能够直观地审核自己的这次 PR。")]),s._v(" "),a("p",[s._v("创建完 PR 之后，lql95 突然发现还有一些内容需要修改，于是又进行了一波编码操作：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调整后的内容如下")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# learn-github")]),s._v("\n学习GitHub相关交互以及功能\n\n这是lql95新增的内容\n\n- a\n- b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后再次进行提交：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git add .\n$ git commit -m '删除无用内容'\n$ git push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这次提交同样会呈现在刚刚创建的那次 PR 之上，现在我们站在 eryajf 的视角来看看这个 PR：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/dc4cf071e0230009.jpg",alt:""}})]),s._v(" "),a("p",[s._v("可以看到 lql95 的 2 次 commit，也可以在差异页面查看此次 PR 的详情，因为这次交互内容不多，所以这里看起来比较简单，在真实项目协作过程中，一次 PR 变化的文件可能有几十个，这个时候再通过页面来看就很不直观了，可以通过如下方式在本地处理。")]),s._v(" "),a("p",[s._v("owner 在自己本地项目目录下，打开 "),a("code",[s._v(".git/config")]),s._v(" 文件，在 "),a("code",[s._v('[remote "origin"]')]),s._v(" 后添加一行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("fetch = +refs/pull/*/head:refs/pull/origin/*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后执行 "),a("code",[s._v("git pull")]),s._v(" 将远程内容拉到本地：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\nremote: Enumerating objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(", done.\nremote: Counting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("/11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Compressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Total "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nUnpacking objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("/7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.28")]),s._v(" KiB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("435.00")]),s._v(" KiB/s, done.\nFrom github.com:eryajf/learn-github\n   85630a4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("421212d  main             -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/main\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         refs/pull/1/head -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" refs/pull/origin/1\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         refs/pull/2/head -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" refs/pull/origin/2\nYour configuration specifies to merge with the ref "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refs/heads/test'")]),s._v("\nfrom the remote, but no such ref was fetched.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("可以看到有两个 PR，我们将分支切到第二个 PR，并在本地创建一个新分支：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git checkout -b eryajf_test refs/pull/origin/2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时项目在本地就将此次 PR 后的最新代码，以 eryajf_test 分支存在，我们可以对协作者提交的代码功能进行一些核验等工作，当我们测验感觉没有问题之后，就可以将代码进行合并了。合并的操作与上边一样，不再赘述。")]),s._v(" "),a("h2",{attrs:{id:"其他内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他内容"}},[s._v("#")]),s._v(" 其他内容")]),s._v(" "),a("h3",{attrs:{id:"如何将readme中的表格居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何将readme中的表格居中"}},[s._v("#")]),s._v(" 如何将README中的表格居中")]),s._v(" "),a("p",[s._v("这个居中指的是整个表格居中展示，而非内容的居中，查了一圈，发现将表格用如下内容包裹，就可以实现居中：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("align")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("参考："),a("a",{attrs:{href:"https://stackoverflow.com/questions/24127507/is-it-possible-to-center-tables-in-a-markdown-file",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/24127507/is-it-possible-to-center-tables-in-a-markdown-file"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"readme-自动生成-toc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readme-自动生成-toc"}},[s._v("#")]),s._v(" README 自动生成 TOC")]),s._v(" "),a("p",[s._v("参考： "),a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/226388/",target:"_blank",rel:"noopener noreferrer"}},[s._v("利用 GitHub Actions 自动为 README 添加 TOC 目录"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"readme-中生成贡献者列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readme-中生成贡献者列表"}},[s._v("#")]),s._v(" README 中生成贡献者列表")]),s._v(" "),a("p",[s._v("参考： "),a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/2cb154/",target:"_blank",rel:"noopener noreferrer"}},[s._v("利用 GitHub Actions 自动将项目贡献者列表添加到 README 中"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"借助-actions-自动生成release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借助-actions-自动生成release"}},[s._v("#")]),s._v(" 借助 Actions 自动生成release")]),s._v(" "),a("p",[s._v("参考："),a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/f3e878/",target:"_blank",rel:"noopener noreferrer"}},[s._v("利用GitHub Actions自动优雅地为项目构建Releases"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"协作账号问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协作账号问题"}},[s._v("#")]),s._v(" 协作账号问题")]),s._v(" "),a("p",[s._v("请务必注意协作的时候，将 git 对应的配置与 GitHub 账号的配置对齐，尤其是邮箱，否则 GitHub 找不到这个邮箱，将无法识别对应账号，你的贡献自然也无法被识别到。")]),s._v(" "),a("p",[s._v("这个问题解决方案参考： "),a("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/6ec567/",target:"_blank",rel:"noopener noreferrer"}},[s._v("git 配置 github 与 gitlab 推送时指定不同用户与邮箱"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"如何将多次提交合并为一次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何将多次提交合并为一次"}},[s._v("#")]),s._v(" 如何将多次提交合并为一次")]),s._v(" "),a("p",[s._v("上边讲到，我们作为协同者，可能会修改多次在同一个 PR 上，这个时候项目的 owner 可以选择压缩合并，不过作为协作者，我们应该有这种自觉，在认为代码没问题的时候，主动将多次提交合并为一次。")]),s._v(" "),a("p",[s._v("可以通过 rebase 进行合并，操作步骤如下，比如刚刚那次在协作者 lql95 的视角已经提交了两次，我们现在再进行一次提交：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test info'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test.txt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add test file'")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这次提交之后，这个 PR 就有了三次提交，我们自己在本地做如下处理。")]),s._v(" "),a("p",[s._v("首先查看一下提交历史：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\ncommit 55e307a11369a3238d908344fea39b91d32d229f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" main, origin/main, origin/HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: lql95 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("eryajf@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":21:10 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" +0800\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\ncommit 0d61a99c31b2dced4fb9b1e1edfc74585571c909\nAuthor: lql95 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("eryajf@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":53:44 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" +0800\n\n    删除无用内容\n\ncommit 5c575c34b0351750510abef7ce6734b8914f951f\nAuthor: lql95 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("eryajf@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":44:39 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" +0800\n\n    以lql95的视角协同维护项目\n\ncommit 421212d25e6062dc0d15173304762056dbb3e583\nMerge: 85630a4 c2cf945\nAuthor: 小于博客 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Linuxlql@163.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Tue May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":29:58 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" +0800\n\n    Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 from eryajf/test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("比如这里要将最新的三次提交合并，可以运行如下命令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("421212d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i后面的参数为最后一个不需要合并的Commit，这里为Commit 1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行之后，将会进入一个交互界面，内容如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/bd846e6ddba4b7ba.jpg",alt:""}})]),s._v(" "),a("p",[s._v("我们把后两个 pick 改成 squash，改后如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/daa947c52d075c4c.jpg",alt:""}})]),s._v(" "),a("p",[s._v("这里两个关键字的含义为：")]),s._v(" "),a("ul",[a("li",[s._v("pick 表示其他的提交将会合并到这一次提交上")]),s._v(" "),a("li",[s._v("squash 表示将对应标识的提交合并到 pick 选择的那次 commit 上。")])]),s._v(" "),a("p",[s._v("保存之后，进入一个新的交互页面，这个页面是填写提交信息的，可保持默认，然后保存，就合并成功了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/7dc4adfd7e62f5c3.jpg",alt:""}})]),s._v(" "),a("p",[s._v("通过查看状态，也能看到此时的状态详情：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("* dc38fb2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 以lql95的视角协同维护项目\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * 55e307a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/main, origin/HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * 0d61a99 删除无用内容\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * 5c575c3 以lql95的视角协同维护项目\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/\n*   421212d Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 from eryajf/test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * c2cf945 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/\n* 85630a4 Create README.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("当然在 vscode 中也能够清晰地看到变化：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/246721782aba13d8.jpg",alt:""}})]),s._v(" "),a("p",[s._v("最后将这次调整 push 到远程即可，因为这次的本地调整，导致本地落后于远程，所以需要进行强推：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" origin main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时再去到 eryajf 主视角看刚刚那次 PR，就可以看到提交次数只有一次了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/30faf5a3ceee6aa3.jpg",alt:""}})]),s._v(" "),a("p",[s._v("以后还会有很多需要补充的能力，今天就先介绍到这里。")])])}),[],!1,null,null,null);a.default=n.exports}}]);