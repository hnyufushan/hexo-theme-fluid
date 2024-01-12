(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{652:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("如何配置一个 yum 私服，这个问题很早之前就已经研究过，博客也发表过此文章："),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/2002.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 nexus3 配置 yum 私有仓库"),a("OutboundLink")],1),s._v("，只不过打算重新启用的时候，发现原来博客中前半部分的配置没什么毛病，在后半部分的使用上，则稍有欠缺，这里另起文章，作为补充。")]),s._v(" "),a("p",[s._v("这个跟 Python 私服有点类似：")]),s._v(" "),a("p",[s._v("其实用一句话来表述，就是"),a("code",[s._v("通过私服拉包的时候，走group的代理，从本地上传包的时候，要走local的仓库。")])]),s._v(" "),a("p",[s._v("接下来就记录一下配置方法并用测试包来验证下。")]),s._v(" "),a("p",[s._v("创建私服的过程这里不详述了，已知现有 Yum 私仓，物料信息如下：")]),s._v(" "),a("ul",[a("li",[s._v("group：http://nexus.test.com/repository/yum/")]),s._v(" "),a("li",[s._v("local：http://nexus.test.com/repository/wpt-yum-local/")])]),s._v(" "),a("p",[s._v("这两个仓库在客户端引用的时候，要分别配置，其中 group 可代理外部包自动下载，一些想要固定版本之类的包，则可以通过上传到 local 里边进行存储。")]),s._v(" "),a("p",[s._v("group 的配置上边文章已经介绍，这里着重说一下 local 仓库的应用，本文以将 elk-7.14.0 版本的 RPM 包及其依赖 down 到本地并传到私服的全流程。")]),s._v(" "),a("h2",{attrs:{id:"_1-配置-elk-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置-elk-repo"}},[s._v("#")]),s._v(" 1，配置 elk-repo")]),s._v(" "),a("p",[s._v("首先要在一台能够联网的的主机上配置 elk 的 repo，最好是能访问国外网站的节点，通过 "),a("code",[s._v("repotrack")]),s._v("命令将 RPM 包及依赖下载到本地。")]),s._v(" "),a("p",[s._v("一些软件包 repo 源在国外，并不容易下载，这里提供一个开源的国内镜像同步搜索工具:")]),s._v(" "),a("div",{staticClass:"cardListContainer"},[a("div",{staticClass:"card-list"},[a("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#0074ff","--randomColor":"#0074ff",color:"#fff"},attrs:{href:"http://m.eryajf.net/#/",target:"_blank"}},[a("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),s._v(" "),a("div",[a("p",{staticClass:"name"},[s._v("search-mirror")]),s._v(" "),a("p",{staticClass:"desc"},[s._v("开源软件的国内镜像站点")])])])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mirror\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 开源软件的国内镜像站点\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("avatar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//avatars2.githubusercontent.com/u/416130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("s=460"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//m.eryajf.net/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0074ff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("textColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#fff"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选，默认var(--textColor)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),a("p",[s._v("参考 elastic 官方文档，可以看到"),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.14/rpm.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("7.x"),a("OutboundLink")],1),s._v("（另外"),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.7/rpm.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("6.x"),a("OutboundLink")],1),s._v("）的 repo 配置姿势大致如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装秘钥")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--import")]),s._v(" https://artifacts.elastic.co/GPG-KEY-elasticsearch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置repo")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/yum.repos.d/es7.repo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[elasticsearch]\nname=Elasticsearch repository for 7.x packages\nbaseurl=https://artifacts.elastic.co/packages/7.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("注意官方配置的 "),a("code",[s._v("enabled=")]),s._v("为"),a("code",[s._v("0")]),s._v("，这里要改成"),a("code",[s._v("1")]),s._v("。")]),s._v(" "),a("p",[s._v("如上配置搞定之后，来两步常规的构建缓存动作：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum clean all\n$ yum makecache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("缓存构建完毕，这个时候可以简单查看一下源里的包：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" elasticsearch\napm-server.i686                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\napm-server.x86_64                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\napp-search.noarch                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.6")]),s._v(".2-1                    elasticsearch\nauditbeat.i686                            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nauditbeat.x86_64                          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nelastic-agent.i686                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.12")]),s._v(".1-1                   elasticsearch\nelastic-agent.x86_64                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nelasticsearch.x86_64                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nenterprise-search.noarch                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nfilebeat.i686                             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nfilebeat.x86_64                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nheartbeat-elastic.i686                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nheartbeat-elastic.x86_64                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\njournalbeat.i686                          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\njournalbeat.x86_64                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nkibana.x86_64                             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nlogstash.noarch                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":7.9.3-1                  elasticsearch\nlogstash.x86_64                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":7.14.0-1                 elasticsearch\nmetricbeat.i686                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\nmetricbeat.x86_64                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\npacketbeat.i686                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\npacketbeat.x86_64                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   elasticsearch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("可以看到我们常用的几大金刚的 rpm 包全在里边了。")]),s._v(" "),a("p",[a("code",[s._v("注意")]),s._v("：这个地方不指定版本的时候，默认是对应大版本的最后一个版本，我们亦可以通过 "),a("code",[s._v("yum list | grep elasticsearch-7.10.1")]),s._v("来查看指定小版本的包。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3ddc54d030b9c22e.jpg",alt:"20210429— - 2021-04-29T154332.757"}})]),s._v(" "),a("h2",{attrs:{id:"_2-下载包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载包"}},[s._v("#")]),s._v(" 2，下载包")]),s._v(" "),a("p",[s._v("如上准备工作完成之后，我们就要下载包了，下载包有多种方式，"),a("a",{attrs:{href:"https://www.cnblogs.com/dyh004/p/13975275.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),a("OutboundLink")],1),s._v("介绍了三种方式，其中的 "),a("code",[s._v("repotrack")]),s._v("既能下载 RPM 包及依赖又能下载依赖的依赖，因此针对一些离线环境是比较友好的，这里也使用此命令。")]),s._v(" "),a("p",[s._v("我们首先将四大金刚写入到一个文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" a\nkibana\nelasticsearch\nlogstash\nfilebeat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后使用如下命令将包缓存到本地：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" repotrack "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("-p")]),s._v("参数是指定包的下载路径。")])]),s._v(" "),a("p",[s._v("同理，如果你想缓存其他指定版本的包，可用如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" repotrack "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("-7.10.1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命令跑完之后，可以在本地看到缓存下来的 RPM 包。")]),s._v(" "),a("h2",{attrs:{id:"_3-上传到私服"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-上传到私服"}},[s._v("#")]),s._v(" 3，上传到私服")]),s._v(" "),a("p",[s._v("想要缓存的包已经有了之后，就可以通过命令将包批量传到私服了：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin:admin'")]),s._v(" --upload-file "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" http://nexus.test.com/repository/wpt-yum-local/7/os/x86_64/Packages/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("注意")]),s._v("：在 local 这个块儿的 path 后边加了个 "),a("code",[s._v("7/os/x86_64/Packages")]),s._v("，是为了与 group 缓存的 path 对齐，从而在客户端检索的时候能够直接使用。")]),s._v(" "),a("h2",{attrs:{id:"_4-正式应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-正式应用"}},[s._v("#")]),s._v(" 4，正式应用")]),s._v(" "),a("p",[s._v("私服已经有了 RPM 包，这个时候找一台客户端主机，可以清空他的 repo 配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/yum.repos.d\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" bak "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" * bak\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("添加如下一个配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/yum.repos.d/nexus.repo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\n[nexus]\nname=Nexus Repository\nbaseurl=http://nexus.test.com/repository/yum/$releasever/os/$basearch/\nenabled=1\ngpgcheck=0\n\n[nexus-local]\nname=Nexus Repository\nbaseurl=http://nexus.test.com/repository/wpt-yum-local/\nenabled=1\ngpgcheck=0\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("如上配置将 group 和 local 分别写在配置文件，可实现内外两种包都能无忧下载并安装。")]),s._v(" "),a("p",[s._v("如上配置搞定之后，来两步常规的构建缓存动作：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum clean all\n$ yum makecache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("缓存构建完毕，这个时候可以简单查看一下源里的包：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" elasticsearch\nelasticsearch.x86_64                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.14")]),s._v(".0-1                   nexus-local\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("此时可以看到这个包是在"),a("code",[s._v("nexus-local")]),s._v("这个源里，那么再进行安装 elk 的包就直接走本地私服的 yum 源了。")]),s._v(" "),a("blockquote",[a("p",[s._v("如上姿势是拿这种标准下的包进行举例，与此雷同的还有诸如 remi 源同样可以利用此方式转移到本地私服，但是还有一些比如 gitlab，或者 grafana 这种的，默认通过 yum 源只能安装最新版本，而无法拿到之前的历史版本，这种时候可以直接下载对应版本的 rpm 包，直接 curl 上传到私服仓库即可。")])]),s._v(" "),a("h2",{attrs:{id:"_5-报错汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-报错汇总"}},[s._v("#")]),s._v(" 5，报错汇总")]),s._v(" "),a("p",[s._v("在配置之后，将私服配置推广到了所有服务器，过程中遇到了一些报错，这里记录一波。")]),s._v(" "),a("h3",{attrs:{id:"_1-yum-命令无法执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-yum-命令无法执行"}},[s._v("#")]),s._v(" 1，yum 命令无法执行")]),s._v(" "),a("p",[s._v("只要一执行命令，就报如下错误：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum clean\nerror: rpmdb: BDB0113 Thread/process "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19126")]),s._v("/139888834549824 failed: BDB1507 Thread died "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Berkeley DB library\nerror: db5 error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-30973"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" from dbenv-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("failchk: BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery\nerror: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" Packages index using db5 -  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-30973"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nerror: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" Packages database "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /var/lib/rpm\nCRITICAL:yum.main:\n\nError: rpmdb "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" failed\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("解决办法：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/lib/rpm/__db.*\n$ yum clean all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum makecache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-安装软件的报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装软件的报错"}},[s._v("#")]),s._v(" 2，安装软件的报错")]),s._v(" "),a("p",[s._v("在安装软件的时候，报如下错误：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Error: Multilib version problems found. This often means that the root\n       cause is something "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" and multilib version checking is just\n       pointing out that there is a problem. Eg.:\n\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". You have an upgrade "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" libuuid "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" is missing some\n            dependency that another package requires. Yum is trying to\n            solve this by installing an older version of libuuid of the\n            different architecture. If you exclude the bad architecture\n            yum will tell you what the root cause is "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("which package\n            requires what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". You can try redoing the upgrade with\n            "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),s._v(" libuuid.otherarch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". this should give you an error\n            message showing the root cause of the problem.\n\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". You have multiple architectures of libuuid installed, but\n            yum can only see an upgrade "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one of those architectures.\n            If you don't want/need both architectures anymore "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" you\n            can remove the one with the missing update and everything\n            will work.\n\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". You have duplicate versions of libuuid installed already.\n            You can use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yum check"')]),s._v(" to get yum show these errors.\n\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".you can also use "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--setopt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("protected_multilib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false to remove\n       this checking, however this is almost never the correct thing to\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" as something "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" is very likely to go wrong "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("often causing\n       much "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" problems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\n       Protected multilib versions: libuuid-2.23.2-65.el7.i686 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" libuuid-2.23.2-65.el7_9.1.x86_64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("那么在安装的时候加上提示的参数即可解决此问题：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openresty "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--setopt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("protected_multilib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);