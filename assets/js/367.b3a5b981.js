(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{711:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("之前写过一篇文章介绍通过接口获取到数据来渲染构建过程中的动态参数，详见："),t("a",{attrs:{href:"http://fsvip.gitee.io/hexo-theme-fluid//pages/73a9c5/#_1-%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins中pipeline对接CMDB接口获取主机列表的发布实践"),t("OutboundLink")],1),s._v("。那么既然能够通过接口渲染数据，是否可以直接在 activity choice 参数的 groovy 脚本中直接通过 MySQL 来实现动态参数的需求呢。")]),s._v(" "),t("p",[s._v("答案是可以的，只不过，一开始我没有料想到，这条路走的是如此曲折。")]),s._v(" "),t("p",[s._v("前后折腾了两次，花费了很多精力去寻找解决方案，最后终于算是摸索出来了一条可行的路。")]),s._v(" "),t("p",[s._v("赶快分享，不在话下！")]),s._v(" "),t("h2",{attrs:{id:"环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),t("p",[s._v("也许不同的 Jenkins 版本，或者插件版本在使用此功能的时候，会遇到与我不一样的问题，或者甚至压根儿不会遇到问题，这都说不准，具体你还要根据你的实际现状来测试，来验证，来观测。")]),s._v(" "),t("p",[s._v("那么我使用的环境基本信息如下：")]),s._v(" "),t("ul",[t("li",[s._v("Jenkins 版本：2.411")]),s._v(" "),t("li",[s._v("插件：\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://plugins.jenkins.io/uno-choice",target:"_blank",rel:"noopener noreferrer"}},[s._v("Active Choices Plug-in"),t("OutboundLink")],1),s._v(":2.7.2")])])]),s._v(" "),t("li",[s._v("数据库：5.7")])]),s._v(" "),t("p",[s._v("我习惯使用 Tomcat 部署 war 包的形式来部署 Jenkins。")]),s._v(" "),t("h2",{attrs:{id:"准备数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备数据"}},[s._v("#")]),s._v(" 准备数据")]),s._v(" "),t("p",[s._v("因为需要与数据库交互，因此这里需要先有一个数据库，并准备一些基础数据。")]),s._v(" "),t("p",[s._v("创建数据库：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" jkdata "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8mb4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建用户表：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" jkdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    department "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("添加几个测试用户：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" jkdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhangsan'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ops'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" jkdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lisi'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ops'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" jkdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wangwu'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" jkdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhaoliu'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("我们的需求是先有一个选项参数，用于指定部门信息，然后动态参数通过查询数据库，列出对应部门的用户。")]),s._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),t("p",[s._v("经过一些检索实验，我这边调试后的代码如下：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parameters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("choice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'department'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                choices"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ops'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                description"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ops==运维组<br>test==测试组"')])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CascadeChoiceParameter'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            choiceType"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PT_RADIO'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            description"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请选择对应的用户"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            referencedParameters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'department'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            filterable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            script"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GroovyScript'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    fallbackScript"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        classpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        sandbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        script"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"return['An error occured']\"")])]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    script"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        classpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        sandbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        script"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'''\nimport groovy.sql.Sql\n\ndef output = []\n\ndef sql = Sql.newInstance('jdbc:mysql://192.168.1.1:3306/jkdata', 'root', 'password', 'com.mysql.jdbc.Driver')\nString sqlString = \"SELECT DISTINCT username FROM user WHERE department = \\'${department}\\'\"\n    sql.eachRow(sqlString){ row ->\n        output.push(row[0])\n    }\nreturn output\n                                            '''")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\npipeline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any\n    stages "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"执行"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'''\n                    println\"\"\"\n                        部门为: ${department}\n                        用户为: ${username}\n                    \"\"\"\n                '''")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br")])]),t("p",[s._v("前边使用了选项参数来写死了部门信息，下边用户信息则是根据选择的部门，通过查询数据库而将符合条件的用户列出来。")]),s._v(" "),t("h2",{attrs:{id:"核心代码踩坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心代码踩坑"}},[s._v("#")]),s._v(" 核心代码踩坑")]),s._v(" "),t("p",[s._v("里边的核心代码是：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" groovy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Sql\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" output "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" sql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jdbc:mysql://192.168.1.1:3306/jkdata'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.mysql.jdbc.Driver'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nString sqlString "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"SELECT DISTINCT username FROM user WHERE department = \\'")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("department")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\\'\"")])]),s._v("\n    sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("eachRow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sqlString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" row "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("\n        output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" output\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("调试的过程就是这段代码踩坑的过程。主要问题出在 MySQL 的驱动上，我们可以把如上代码，来到 Jenkins 的 "),t("code",[s._v("系统设置")]),s._v(" 的 "),t("code",[s._v("Script Console")]),s._v(" 中，尝试运行一下，然后就遇到了如下错误：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("java.lang.ClassNotFoundException: com.mysql.jdbc.Driver\n\tat org.apache.catalina.loader.WebappClassLoaderBase.loadClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WebappClassLoaderBase.java:1420"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tat org.apache.catalina.loader.WebappClassLoaderBase.loadClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WebappClassLoaderBase.java:1228"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tat java.base/java.lang.Class.forName0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Native Method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2023/09/1694272861789.png",alt:""}})]),s._v(" "),t("p",[s._v("就是这样一个错误，我查遍了全网，进行了大量的阅读浏览，基本上都是货不对板的解决方案，或者不够详尽。")]),s._v(" "),t("p",[s._v("问题似乎不复杂，无非就是 Jenkins 在运行 groovy 脚本的时候，无法正确加载到驱动，那么，如何才能解决这个驱动问题呢？")]),s._v(" "),t("p",[s._v("直到经过了上百个网页浏览之后，我遇到了这样一篇文章："),t("a",{attrs:{href:"https://www.cnblogs.com/Bug-Hunter/p/11277665.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins工程中SQL语句执行的方法"),t("OutboundLink")],1),s._v(" 里边介绍了，需要下载 com.mysql.jdbc_5.1.38.jar，然后将 jar 包放到 jenkins 的 lib 目录当中。")]),s._v(" "),t("p",[s._v("接下来问题又来了，文章只说了下载这个包，但没有直接放下载链接，经过检索之后，我发现可以通过这个链接下载这个包： http://www.java2s.com/Code/Jar/c/Downloadcommysqljdbc515jar.htm")]),s._v(" "),t("p",[s._v("这个链接下载的是 com.mysql.jdbc_5.1.15.jar 版本的，不过实测仍旧能够使用。")]),s._v(" "),t("p",[s._v("我的 jenkins 的 lib 路径是在 "),t("code",[s._v("/usr/local/tomcat/webapps/ROOT/WEB-INF/lib")]),s._v("，将下载的 "),t("code",[s._v("jar")]),s._v(" 放到这个目录下，然后 "),t("code",[s._v("重启 Jenkins")]),s._v("，之后再到 Script Console 运行脚本，可以看到有结果了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2023/09/1694272874733.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"效果呈现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果呈现"}},[s._v("#")]),s._v(" 效果呈现")]),s._v(" "),t("p",[s._v("当代码调试通过之后，就可以将如上 groovy 创建为项目，然后运行项目，查看效果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2023/09/1694272028025.gif",alt:""}})]),s._v(" "),t("p",[s._v("嗯，舒服!！")]),s._v(" "),t("h2",{attrs:{id:"最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),t("p",[s._v("虽然现在跑通了，但这里边我仍有一些疑惑，如果有人找到了答案，欢迎在评论区一块儿交流：")]),s._v(" "),t("ul",[t("li",[s._v("在 activity choice 插件的参数当中，有一个参数项是 classpath，看起来像是能自定义 jar 包，但我做了许多尝试，都没能成功。")]),s._v(" "),t("li",[s._v("上边的 groovy 脚本中的部门信息是通过选项参数写死的，你如果有兴趣让这个信息也通过数据库取出，那你可以尝试改造一些 groovy 来实现。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);