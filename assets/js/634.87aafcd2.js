(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{977:function(e,t,a){"use strict";a.r(t);var s=a(0),l=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("之前就有这个想法，又因为在"),t("a",{attrs:{href:"https://github.com/go-ldap/ldap",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ldap"),t("OutboundLink")],1),e._v("库的"),t("a",{attrs:{href:"https://github.com/go-ldap/ldap/issues/200",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),t("OutboundLink")],1),e._v("中看到有人寻求文档，因此花了一天左右的时间，写了这样一个小工具，以帮助后边使用该库的人能够快速了解上手。")]),e._v(" "),t("h2",{attrs:{id:"项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[e._v("#")]),e._v(" 项目")]),e._v(" "),t("div",{staticClass:"cardListContainer"},[t("div",{staticClass:"card-list"},[t("a",{staticClass:"card-item row-1",staticStyle:{"background-color":"#0074ff","--randomColor":"#0074ff",color:"#fff"},attrs:{href:"https://github.com/eryajf/ldapctl",target:"_blank"}},[t("img",{staticClass:"no-zoom",attrs:{src:"https://avatars2.githubusercontent.com/u/416130?s=460&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4"}}),e._v(" "),t("div",[t("p",{staticClass:"name"},[e._v("ldapctl")]),e._v(" "),t("p",{staticClass:"desc"},[e._v("openldap Controller")])])])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ldapctl\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" openldap Controller\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("avatar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//avatars2.githubusercontent.com/u/416130"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("?")]),e._v("s=460"),t("span",{pre:!0,attrs:{class:"token important"}},[e._v("&u=8753e86600e300a9811cdc539aa158deec2e2724&v=4")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 可选")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("link")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//github.com/eryajf/ldapctl "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 可选")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("bgColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"#0074ff"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("textColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"#fff"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 可选，默认var(--textColor)")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("p",[e._v("启动 ldapctl 体验只需两个步骤:")]),e._v(" "),t("ol",[t("li",[e._v("使用"),t("code",[e._v("docs/start-ldap-eryajf.sh")]),e._v("脚本通过"),t("code",[e._v("docker")]),e._v("在本地启动"),t("code",[e._v("openLDAP")]),e._v("实例。")]),e._v(" "),t("li",[e._v("运行"),t("code",[e._v("make build")]),e._v("编译项目，然后就可以投入测试。")])]),e._v(" "),t("p",[e._v("如果要管理你自己的 ldap，可以直接在"),t("code",[e._v("public/public.go")]),e._v("中修改配置信息，然后编译项目投入使用，目前提供用户和组的简单管理，主要用于学习 ldap 库。可能有一些不足之处。欢迎交流。")]),e._v(" "),t("h2",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),t("ul",[t("li",[e._v("user\n"),t("ul",[t("li",[e._v("add: add user\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user add --cn testuser1 --sn 测试用户1 --employeeNumber 001 --mail testuer1@eryajf.net --mobile 13888888881 --uid testuser1 --userPassword testuser1")])])])]),e._v(" "),t("li",[e._v("changeuserpwd: update user uid\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user changeuserpwd -u testuser1 -o testuser1 -n user1")])])])]),e._v(" "),t("li",[e._v("checkuser: Check whether the user password is correct\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user checkuser -u testuser1 -p testuser1")])])])]),e._v(" "),t("li",[e._v("delete: delete user by uid\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user del -u testuser1")])])])]),e._v(" "),t("li",[e._v("get: get user by uid\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user get -u testuser1")])])])]),e._v(" "),t("li",[e._v("getall: list all users\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user getall")])])])]),e._v(" "),t("li",[e._v("update: update user\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user update -u testuser1 --displayName testtest")])])])]),e._v(" "),t("li",[e._v("updateuserdn: update user uid\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl user updateuserdn -o testuser1 -n user1")])])])])])]),e._v(" "),t("li",[e._v("group\n"),t("ul",[t("li",[e._v("add: add group\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v('./ldapctl group add -c testg -d "测试分组"')])])])]),e._v(" "),t("li",[e._v("delete: delete group\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl group delete -c testg")])])])]),e._v(" "),t("li",[e._v("get: get group menbers\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl group get -c groupname")])])])]),e._v(" "),t("li",[e._v("getall: list all groups\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl group getall")])])])]),e._v(" "),t("li",[e._v("update: update group\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v('./ldapctl group update -c testg -d "测试分组1"')])])])]),e._v(" "),t("li",[e._v("adduser: add user to group\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl group adduser -c test -u eryajf")])])])]),e._v(" "),t("li",[e._v("removeuser: remove user to group\n"),t("ul",[t("li",[e._v("Example："),t("code",[e._v("./ldapctl group removeuser -c test -u eryajf")])])])])])])]),e._v(" "),t("p",[e._v("如果您还有其他要添加的功能，请在"),t("a",{attrs:{href:"https://github.com/eryajf/ldapctl/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),t("OutboundLink")],1),e._v("里边提交。")])])}),[],!1,null,null,null);t.default=l.exports}}]);