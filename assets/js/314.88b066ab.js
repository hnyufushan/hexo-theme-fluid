(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{658:function(e,s,t){"use strict";t.r(s);var n=t(0),a=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("历史工作经历中，我已处理过两次将 nexus 从 2.x 升级到 3.x 的操作，这两次操作，都是参考的 "),s("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/1868.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("maven私服nexus2-14-5迁移到nexus3-7-1"),s("OutboundLink")],1),e._v(" 这篇文章，按照文章记录的步骤，总体迁移还都是比较顺利的。")]),e._v(" "),s("h2",{attrs:{id:"升级失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级失败"}},[e._v("#")]),e._v(" 升级失败")]),e._v(" "),s("p",[e._v("升级过程中唯一遇到过的问题是，在同步的过程中，遇到过一个报错信息："),s("code",[e._v('Cannot execute query "SELECT * FROM quartz_trigger WHERE state IN [ ?,?,? ]": low heap memory')]),e._v("，不知道这个错误信息是不是真正的表象，总之使用默认配置启动新的 nexus 升级过程中就会遇到这样的问题，解决的方案是，你的新 nexus 主机配置最好不低于 4C8G，然后调整内存大小：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" bin/nexus.vmoptions\n\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Xms4096M")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Xmx4096M")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-XX:MaxDirectMemorySize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("6G\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("重启之后，再次重复升级的配置步骤，就能够成功同步了。")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/f659f8871ff6931c.jpg",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"仓库地址变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仓库地址变化"}},[e._v("#")]),e._v(" 仓库地址变化")]),e._v(" "),s("p",[e._v("升级完成之后，nexus2 与 nexus3 对同一仓库的访问地址是有变化的，大概变化如下：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("nexus2\n\thttp://nexus2.eryajf.net/nexus/content/groups/public\nnexus3\n\thttp://nexus3.eryajf.net/repository/public/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("稍微拆解一下两者的命名规范：")]),e._v(" "),s("ul",[s("li",[e._v("nexus2\n"),s("ul",[s("li",[s("code",[e._v("/nexus")]),e._v(" : 这是 nexus2 启动的时候，在配置中固定了 path。")]),e._v(" "),s("li",[s("code",[e._v("/content")]),e._v(" ：类似 nexus3 中的 repository，是一个拼接在主 URL 之后的固定标识。")]),e._v(" "),s("li",[s("code",[e._v("/groups")]),e._v(" ：用于表示这是一个 group 类型的仓库。如果是 host 或 proxy 类型，则为 "),s("code",[e._v("repositories")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("/public")]),e._v(" ：这一层才是仓库真正的名字。")])])]),e._v(" "),s("li",[e._v("nexux3\n"),s("ul",[s("li",[e._v("默认启动的时候，没有带 "),s("code",[e._v("/nexus")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("/repository")]),e._v(" ：对标 nexus2 中的 "),s("code",[e._v("/content")]),e._v("，这是 nexus3 中的固定标识。")]),e._v(" "),s("li",[s("code",[e._v("/public")]),e._v(" ：这一层才是仓库真正的名字。\n可见在 nexus3 中对仓库命名进行了一些改变，改变了主固定标识，并去掉了 "),s("code",[e._v("/groups")]),e._v(" 这一层的标识。")])])])]),e._v(" "),s("p",[e._v("了解到了这个区别之后，在遇到升级之后的使用问题时就能清楚地定位到问题原因了。")]),e._v(" "),s("h3",{attrs:{id:"maven-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-打包"}},[e._v("#")]),e._v(" maven 打包")]),e._v(" "),s("p",[e._v("如果你的公司统一使用 maven 进行打包构建，那么你只需要在打包的机器上，在 maven 的 settings.xml 中将原来的 "),s("code",[e._v("http://nexus2.eryajf.net/nexus/content/groups/public")]),e._v(" 改为 "),s("code",[e._v("http://nexus3.eryajf.net/repository/public/")]),e._v(" 即可，这个时候项目打包拉取依赖是不会受到任何影响的，但有一个需要注意的点在于：这个更改你也同时需要同步给开发者，让他们把自己本地指向原来的地址也一并改掉，否则将会以 nexus2 风格的 URL 在 nexus3 中检索依赖，肯定就会遇到找不到包的错误了。")]),e._v(" "),s("h3",{attrs:{id:"gradle-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-打包"}},[e._v("#")]),e._v(" gradle 打包")]),e._v(" "),s("p",[e._v("gradle 打包风格的项目，通常私服地址的配置在每个项目根目录下的 build.gradle 文件中配置，这个时候要想改掉指向私服的 URL，可能就不是一个轻松的工作了，官方也提供了一个 nexus3 兼容 nexus2 命名风格的参数，从而让你在升级了 nexus 之后，不需要更改原来的配置，就可以使用新的版本：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" etc/nexus-default.properties\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("### 文件中其他配置这里不陈列了")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将访问URL后边的nexus配置上")]),e._v("\nnexus-context-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/nexus\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 添加该配置，兼容 nexus2 的 URL 规范")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("org.sonatype.nexus.repository.httpbridge.internal.HttpBridgeModule.legacy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("添加了配置之后，重启 nexus3 服务，这个时候，项目中仍旧使用 nexus2 风格的地址，但并不会影响拉包构建。")]),e._v(" "),s("p",[e._v("参考链接："),s("a",{attrs:{href:"https://issues.sonatype.org/browse/NEXUS-10162",target:"_blank",rel:"noopener noreferrer"}},[e._v("migrating NXRM2 to NXRM3 automatically enables legacy content URLs"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);