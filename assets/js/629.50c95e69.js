(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{972:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("数据库代码汇总")])]),s._v(" "),t("h2",{attrs:{id:"_1-oracle序列设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-oracle序列设置"}},[s._v("#")]),s._v(" 1.oracle序列设置")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" sequence SE_R_DOCUMENTDETAIL_1356\n  minvalue "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    nomaxvalue "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      increment "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        noorder nocycle cache "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_2-设置oracle外键关联"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置oracle外键关联"}},[s._v("#")]),s._v(" 2.设置oracle外键关联")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" R_RECTIFICATIONSTAGE_1151 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" SYS_C00110337 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("P_RECTIFICATIONSTAGEID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" R_RECTIFICATIONSTAGE_1151"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RECTIFICATIONSTAGEID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-设置新的最大连接数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置新的最大连接数"}},[s._v("#")]),s._v(" 3.设置新的最大连接数")]),s._v(" "),t("blockquote",[t("p",[s._v("set GLOBAL max_connections=200;")])]),s._v(" "),t("h2",{attrs:{id:"_4-结束当前进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-结束当前进程"}},[s._v("#")]),s._v(" 4.结束当前进程")]),s._v(" "),t("blockquote",[t("p",[s._v("kill 加进程ID")])]),s._v(" "),t("h2",{attrs:{id:"_5-查看当前所有用户的连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看当前所有用户的连接"}},[s._v("#")]),s._v(" 5.查看当前所有用户的连接")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("full")]),s._v(" processlist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_6-我们来查看mysql的最大连接数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-我们来查看mysql的最大连接数"}},[s._v("#")]),s._v(" 6.我们来查看mysql的最大连接数")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%max_connections%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_7-查看序列下一个号码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看序列下一个号码"}},[s._v("#")]),s._v(" 7.查看序列下一个号码")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ACHILLES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SE_Q_CMN_OPPTAUDITDETAIL_558"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextval "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_8-查询统计档案查询sql语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-查询统计档案查询sql语句"}},[s._v("#")]),s._v(" 8.查询统计档案查询SQL语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operatepointid operatepointid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operatepointname operatepointname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OPERATEPOINTADDRESS OPERATEPOINTADDRESS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ind90"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("industrytypename industrytypename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      un18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LEGALPERSON LEGALPERSON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OPPTRESPONSIBLEPERSON OPPTRESPONSIBLEPERSON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cmn1123"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentsupervisedptid currentsupervisedptid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("opptresponsiblepersonphone opptresponsiblepersonphone"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cmn1123"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentsuperviseopptid currentsuperviseopptid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opt21"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operatepointname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'安全生产监察队'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'浦东新区安全生产监察大队'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'安监大队'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" operatepointname1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("longitude"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("latitude"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cmn431"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("istemparchived"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("businessstatusid\n       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" q_cmn_operatepoint_20 opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("d_industrytype_90 ind90"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("q_cmn_operatepoint_20 opt21"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("q_cmn_pandbunitsspecial_431 cmn431"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                       q_cmn_unit_18 un18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Q_CMN_OPTCURRENTSUPERVISE_1123 cmn1123\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdeleted"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" cmn431"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdeleted "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" cmn431"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ISNEEDREPORT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" cmn431"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pandbunitsspecialid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cmn1123"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pandbunitsspecialid\n                      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" cmn1123"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CURRENTSUPERVISEYPE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" cmn1123"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdeleted "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operatepointid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cmn431"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operatepointid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" un18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdeleted"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--and opt20.businessstatusid between 1 and 2")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" cmn1123"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentsuperviseopptid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opt21"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("operatepointid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("industrytypeid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ind90"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("industrytypeid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" opt20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("unitid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("un18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("unitid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"_9-如果查询出来的是null则用0代替"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-如果查询出来的是null则用0代替"}},[s._v("#")]),s._v(" 9.如果查询出来的是null则用0代替")]),s._v(" "),t("blockquote",[t("p",[s._v("NVL(A.VERIFYNODEID, 0) VERIFYNODEID")])])])}),[],!1,null,null,null);t.default=e.exports}}]);