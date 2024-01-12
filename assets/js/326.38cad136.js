(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{673:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("规范，乃运维效率之本，没有统一的规范，也就意味着到处都是乱麻，工作当中，没有什么比一团乱麻更糟糕的了。")]),s._v(" "),t("p",[s._v("本文将分享过往运维实践中总结积累下来的约定规范，大多数内容都具有普适意义，欢迎大家再加补充与交流！")]),s._v(" "),t("h2",{attrs:{id:"_1-版本约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-版本约束"}},[s._v("#")]),s._v(" 1，版本约束")]),s._v(" "),t("p",[s._v("软件的不同版本，或者插件的不同版本，在使用起来都有可能带来不可预知的影响，因此需要统一整理，固定下来，不允许轻易变更。")]),s._v(" "),t("ul",[t("li",[s._v("软件版本\n"),t("ul",[t("li",[t("code",[s._v("JDK：")]),s._v("1.8.0_121")]),s._v(" "),t("li",[t("code",[s._v("Tomcat：")]),s._v("8")]),s._v(" "),t("li",[t("code",[s._v("Maven：")]),s._v("3.3.9")]),s._v(" "),t("li",[t("code",[s._v("Jenkins：")]),s._v("2.249.1")])])]),s._v(" "),t("li",[s._v("插件\n一些插件非常重要，在某些版本中未必好用，比如用户权限控制插件，因此我们验证了当前好用的版本之后，赶忙打了镜像，以备扩容的时候可以用。\n"),t("ul",[t("li",[t("code",[s._v("LDAP：")]),s._v("1.24")]),s._v(" "),t("li",[t("code",[s._v("Role-based Authorization Strategy：")]),s._v("2.10 注意此插件绝不可擅自升级")]),s._v(" "),t("li",[t("code",[s._v("Git：")]),s._v("4.4.1")]),s._v(" "),t("li",[t("code",[s._v("Git Parameter：")]),s._v("0.9.13")])])])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("注意：")]),s._v("插件的安装或升级在运维团队需严格管控，管理员安装插件时，务必与组内同步，先做评估，经过测验，再行安装或升级。因为一些插件的升级可能带来未知问题与影响。")])]),s._v(" "),t("h2",{attrs:{id:"_2-jenkins自身规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jenkins自身规范"}},[s._v("#")]),s._v(" 2，Jenkins自身规范")]),s._v(" "),t("h3",{attrs:{id:"_0-主机配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-主机配置"}},[s._v("#")]),s._v(" 0，主机配置")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("配置：")]),s._v("在越大越好的前提下，最好不低于"),t("code",[s._v("8C16G")]),s._v("，建议"),t("code",[s._v("16C32G")]),s._v("，注意优化Tomcat。")]),s._v(" "),t("li",[t("code",[s._v("存储：")]),s._v("建议"),t("code",[s._v("100G系统盘")]),s._v("+"),t("code",[s._v("1T数据盘")]),s._v("。盘的规格越高越好。最低"),t("code",[s._v("SSD")]),s._v("，其中数据盘可酌情加，数据盘一定要用所能提供的最高规格的盘，这是保障Jenkins使用体验的最核心。")]),s._v(" "),t("li",[t("code",[s._v("其他：")]),s._v("其他没有什么注意点，按照一般主机配置初始化即可。")])]),s._v(" "),t("h3",{attrs:{id:"_1-如果扩容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-如果扩容"}},[s._v("#")]),s._v(" 1，如果扩容")]),s._v(" "),t("p",[s._v("Jenkins新增slave不要单独从头部署，应从原slave主机打镜像，然后进行新增扩容，只需要调整agent脚本启动即可注册，agent通过docker维护。")]),s._v(" "),t("h3",{attrs:{id:"_2-jenkins-home"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jenkins-home"}},[s._v("#")]),s._v(" 2，JENKINS_HOME")]),s._v(" "),t("p",[s._v("需要注意，我们的"),t("code",[s._v("JENKINS_HOME")]),s._v("统一在：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n1")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/.jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("严禁非此标准的情况。")]),s._v(" "),t("h3",{attrs:{id:"_3-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-workspace"}},[s._v("#")]),s._v(" 3，WORKSPACE")]),s._v(" "),t("p",[s._v("需要注意，我们的 "),t("code",[s._v("WORKSPACE")]),s._v(" 统一在：")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v("$ grep workspaceDir /data/.jenkins/config.xml\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("workspaceDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("${ITEM_ROOTDIR}/workspace"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("workspaceDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("严禁非此标准的情况。")]),s._v(" "),t("h3",{attrs:{id:"_4-编译缓存目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译缓存目录"}},[s._v("#")]),s._v(" 4，编译缓存目录")]),s._v(" "),t("p",[s._v("因为根目录磁盘并不大，所以要修改缓存目录到数据目录中，缓存目录统一存放在"),t("code",[s._v("/data/.cache")]),s._v("\n目录之下，下一层目录以语言栈为标识。")]),s._v(" "),t("p",[s._v("如下列举了常见语言编译过程中缓存目录的设置方法。")]),s._v(" "),t("ul",[t("li",[s._v("maven"),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v("vim /usr/local/maven/conf/settings.xml\n\n# 修改\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("/data/.cache/java/.m2/repository"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[s._v("node"),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get cache\n/root/.npm\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 npm 全局包下载路径")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/.cache/node/node_global"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 npm 缓存路径")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cache "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/.cache/node/node_cache"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[s._v("pip"),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.config/pip/pip.conf\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ncache-dir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/.cache/pip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[s._v("go"),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/go\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOCACHE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/.cache/go-build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_5-备份方面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-备份方面"}},[s._v("#")]),s._v(" 5，备份方面")]),s._v(" "),t("p",[s._v("理论上，当我们整体面向git管理Jenkins源文件之后，其实已经不需要对Jenkins进行什么备份，即便是完全宕机无法恢复，也能够依赖git所存有的项目引导文件对项目进行恢复。")]),s._v(" "),t("p",[s._v("不过，我们还是最好使用"),t("code",[s._v("thinBackup")]),s._v("对一些基础元数据进行备份即可。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/27e055085b7aadfa.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_3-其他约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他约定"}},[s._v("#")]),s._v(" 3，其他约定")]),s._v(" "),t("p",[s._v("构建过程中，我们会依赖一些公共组件，或者共享库，这些内容都应该使用统一的目录或者仓库，从而便于统一维护与管理。在说具体约定之前，首先说一个前置约定，亦即所有第三方需要统一固定的目录，都应该在 "),t("code",[s._v("/data/.jenkins/other")]),s._v("之下。")]),s._v(" "),t("h3",{attrs:{id:"_1-版本目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-版本目录"}},[s._v("#")]),s._v(" 1，版本目录")]),s._v(" "),t("p",[s._v("要实现回滚，有赖于本地版本目录，此目录我们统一约定在：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ls /jenkins_sync/version/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("注意：")]),s._v("此处的 "),t("code",[s._v("/jenkins_sync")]),s._v("目录是一个"),t("code",[s._v("nfs")]),s._v("(也可以直接使用云产品的nfs)挂载在各个node节点的目录，类似version之类的内容，都可以放到这个目录之内。")]),s._v(" "),t("h3",{attrs:{id:"_2-剧本目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-剧本目录"}},[s._v("#")]),s._v(" 2，剧本目录")]),s._v(" "),t("p",[s._v("剧本是项目在发布过程中使用的ansible剧本等内容。")]),s._v(" "),t("p",[s._v("关于命名，我们约定如下规范：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("仓库：")]),s._v("https://gitlab.eryajf.net/jenkins/deploy-playbook.git")]),s._v(" "),t("li",[t("code",[s._v("命名规范：")]),s._v("ansible-{语言栈}")])]),s._v(" "),t("p",[s._v("关于使用，我们约定如下规范：")]),s._v(" "),t("ul",[t("li",[s._v("我们约定一切剧本的更改都需要同步到git仓库中，可以创建一个自动推送job，提交之后自动将此项目同步到Jenkins主机上来。")]),s._v(" "),t("li",[s._v("正式启用之后，严禁直接修改master提交，必须经过其他分支测试验证过之后才能合并到master，因为这是核心，牵一发而动全身。")]),s._v(" "),t("li",[s._v("每次运行构建的时候，都会有一个stage单独拉取playbook，剧本的暂存目录为："),t("code",[s._v("${WORKSPACE}/ansible_tmp")]),s._v("。")])]),s._v(" "),t("h3",{attrs:{id:"_3-共享库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-共享库"}},[s._v("#")]),s._v(" 3，共享库")]),s._v(" "),t("p",[s._v("共享库是为我们将项目模板提取出来之后提供的一种高效率方案。")]),s._v(" "),t("p",[s._v("关于命名，我们约定如下规范：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("仓库：")]),s._v("https://gitlab.eryajf.net/jenkins/shared-library.git")]),s._v(" "),t("li",[t("code",[s._v("命名规范：")]),s._v("尽量做到见名知意。")])]),s._v(" "),t("p",[s._v("关于使用，我们约定如下规范：")]),s._v(" "),t("ul",[t("li",[s._v("项目非特殊不得绕开共享库单独配置pipeline，部分项目采用流水线外置到仓库中，并通过目录进行分类，这种策略虽然将jenkinsfile版本控制了，但是并不利于以后模板化的方向，因此不推荐过度使用这种方案。")]),s._v(" "),t("li",[s._v("正式启用之后，严禁直接修改master提交，必须经过其他分支测试验证过之后才能合并到master，因为这是核心，牵一发而动全身。如有变更，最好做到二人check。")]),s._v(" "),t("li",[s._v("现在已经将共享库的内容接入到了ci测试，普通的语法错误都能够检测出来，从而无法合并到主分支。")]),s._v(" "),t("li",[s._v("共享库作为抽象出来的构建模板，不能够毫无节制地添加模板，而应该更多去思考如何在原有共享库中做到更优的兼容，过多地模板对维护来说，将会是灾难。")]),s._v(" "),t("li",[s._v("共享库模板中的内容固然可以进行再次声明函数进行抽离，但是我并不建议这么做，过多地调用性抽离，会让一个模板的流程逻辑复杂化，反而会给后期的应用以及维护带来更多的认知成本，这是不划算的。")])]),s._v(" "),t("h3",{attrs:{id:"_4-风格约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-风格约定"}},[s._v("#")]),s._v(" 4，风格约定")]),s._v(" "),t("p",[s._v("我们约定统一的pipeline风格为 "),t("code",[s._v("声明式")]),s._v("，声明式是固定语法，接近原生shell的使用方式，对运维也更加友好。事实上这不仅仅是风格统一的问题，还可以做到研究成果共享。")]),s._v(" "),t("h3",{attrs:{id:"_5-项目命名约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-项目命名约定"}},[s._v("#")]),s._v(" 5，项目命名约定")]),s._v(" "),t("p",[s._v("项目命名规范，决定了"),t("code",[s._v("权限")]),s._v("配置的便利以及可用。项目命名原则上与gitlab仓库中项目命名保持一致，然后在前边添加环境作为区隔，如果项目名为admin，那么不同环境的命名应该为：")]),s._v(" "),t("ul",[t("li",[s._v("test-admin")]),s._v(" "),t("li",[s._v("pre-admin")]),s._v(" "),t("li",[s._v("prod-admin")])]),s._v(" "),t("p",[s._v("如果一个项目仓库将会部署多个子项目，那么命名风格应该保持队形：")]),s._v(" "),t("ul",[t("li",[s._v("test-admin-(a/b/c)")])]),s._v(" "),t("p",[s._v("以此类推。")]),s._v(" "),t("h3",{attrs:{id:"_6-授权方面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-授权方面"}},[s._v("#")]),s._v(" 6，授权方面")]),s._v(" "),t("p",[s._v("首先人员通过对接openLDAP进行同步，配置方式参考："),t("a",{attrs:{href:"https://wiki.eryajf.net/pages/3416.html#_3-jenkins",target:"_blank",rel:"noopener noreferrer"}},[s._v("openLDAP集成# Zabbix,Jenkins,GitLab,JumpServer,Harbor,Nginx实战"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("授权统一使用openLDAP用户分组绑定Jenkins权限角色的方式进行，不再通过个人绑定角色。")]),s._v(" "),t("ul",[t("li",[s._v("测试环境发布权限要求w3以上。")]),s._v(" "),t("li",[s._v("灰度环境发布权限要求w4以上。")]),s._v(" "),t("li",[s._v("正式环境发布权限要求w5以上。")])]),s._v(" "),t("p",[s._v("一个业务通常分三组角色对应三个环境的应用，同理也要在openLDAP创建三个分组，将分组绑定到角色上，而后的维护则在运维平台上只需要将人员加入到分组即可。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/05/5b4cb4f9b98669f7.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_4-jenkinsfile编写约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-jenkinsfile编写约定"}},[s._v("#")]),s._v(" 4，Jenkinsfile编写约定")]),s._v(" "),t("h3",{attrs:{id:"_1-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-变量"}},[s._v("#")]),s._v(" 1，变量")]),s._v(" "),t("p",[s._v("准确简洁的变量名是可读性及易维护性的重要保障，针对脚本的变量名应当至少遵循以下规范:")]),s._v(" "),t("ol",[t("li",[s._v("自定义环境变量命名约定："),t("code",[s._v("统一采用大写单词与下划线拼接方式命名，自定义变量必须要有备注。")])]),s._v(" "),t("li",[s._v("变量名必须有实际含义, 避免英文下划线以外的特殊字符。")]),s._v(" "),t("li",[s._v("避免变量名过短(数据或对象内容复杂而变量名无法推断其含义)与过长(变量名接近甚至超过半行造成视觉阅读困难)。")]),s._v(" "),t("li",[s._v("变量名尽量避开 groovy 语言自身关键字，避开环境变量。")]),s._v(" "),t("li",[s._v("无特殊需求，避免修改流水线默认生成的环境变量。")]),s._v(" "),t("li",[s._v("不允许出现后置流程引用未落位的变量，否则容易造成不熟悉者的维护障碍。")]),s._v(" "),t("li",[s._v("在固定的拼接处理中, 应尽量减少定义语句使用的嵌套层数，例如："),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 套娃式定义")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" pathA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path1"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" paraZ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("pathA")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('/path2"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" paraB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("pathZ")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('/path3"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" paraY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("pathB")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('/path4"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" paraX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("pathY")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('/path5"')])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 展开嵌套, 具有更好的可读性")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" paraX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path1/path2/path3/path4/path5"')])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-stage与标签命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-stage与标签命名"}},[s._v("#")]),s._v(" 2，stage与标签命名")]),s._v(" "),t("p",[s._v("stage定义了每个节点的任务内容，应该使用简洁清晰的文字对该阶段任务进行注释。名字不能超过7个字，失败原因也要做到简单清晰。")]),s._v(" "),t("h3",{attrs:{id:"_3-镜像风格定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-镜像风格定义"}},[s._v("#")]),s._v(" 3，镜像风格定义")]),s._v(" "),t("p",[s._v("命名规则如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\t\t\t\t             server_name\t commit     "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("     build_id\nharbor.eryajf.net/multienv/eryajf-back-admin:16c525_20201013114449_10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在实际使用中变量定义为：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("BASE_IMAGE_NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harbor.eryajf.net/multienv/')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("SERVICE_NAME")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),s._v("\n\nenv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IMAGE_NAME  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("BASE_IMAGE_NAME")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v(':"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("COMMIT_ID")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('_"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"`date '+%Y%m%d%H%M%S'`\"")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("BUILD_ID")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" returnStdout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//构建版本号")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("我们并不吝惜利用所有该当利用的变量来组建项目镜像的tag，这是出于大量实际运维经验而言，我们希望在不影响构建稳定的情况，尽可能地提供出有利于我们快速定位的信息，这将在无数次后续问题排查中，一一受益！")]),s._v(" "),t("p",[t("code",[s._v("注意：")]),s._v("最开始这里把分支也加入到了版本当中，但是后来的实践当中发现，分支可能会是 "),t("code",[s._v("feature/gocover")]),s._v("，这种分支在镜像tag当中就会报错，所以废弃掉了！")]),s._v(" "),t("h2",{attrs:{id:"_5-维护以及使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-维护以及使用"}},[s._v("#")]),s._v(" 5，维护以及使用")]),s._v(" "),t("ol",[t("li",[s._v("插件的安装或升级需严格管控，管理员安装插件时，务必与组内同步，先做评估，经过测验，再行安装或升级。因为一些插件的升级可能带来未知问题与影响。")]),s._v(" "),t("li",[s._v("流水线尽量使用一种语法，比如声明式，这样以后大家各自研究的成果可以直接共享，便于一起迭代前进。")]),s._v(" "),t("li",[s._v("尽可能将单个流水线的主逻辑放在更少的地方，这样对于后期的维护以及变更绝对是更加高效且省力的，不要一个流水线七零八落调用了五六个地方，非常不利于快速预览与定位。当然，一些非重要的公共逻辑，可以放在约定好的固定地方统一调用，比如通知脚本，回滚用的库，共享库等。")]),s._v(" "),t("li",[s._v("构建过程中所用工具，一定要版本统一，不给自己留坑，比如mvn，go，node等。")]),s._v(" "),t("li",[s._v("根据标准化的流水线，需要输出对研发的接入标准，让所有的研发项目/框架都来适配我们运维的标准，严禁接入非标的项目，除非走研发经理特批，运维需要严防这条线。")]),s._v(" "),t("li",[s._v("运维自己的流水线迭代更新也需要走正规的开发流程，调试环境和正式使用环境分开，代码合并的时候也需要互相review。")]),s._v(" "),t("li",[s._v("master节点不允许运行任务，只作为调度节点。")]),s._v(" "),t("li",[s._v("不允许变更虚拟机的环境，不允许随意在虚拟机安装软件，如果构建过程有环境依赖，则必须将环境依赖注入到容器中，通过docker进行构建。")]),s._v(" "),t("li",[s._v("一起向追求四个现代化看齐，即规范化，标准化，高效化，优雅化。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);