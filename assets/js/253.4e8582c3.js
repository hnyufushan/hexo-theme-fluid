(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{599:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-前言。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言。"}},[a._v("#")]),a._v(" 1，前言。")]),a._v(" "),s("p",[a._v("当数据库文件以及量级不大的时候，我们可以采用全量备份的策略来进行备份。但是当数据库文件有一定量级的时候，再使用全量备份，就显得有些笨拙了。")]),a._v(" "),s("p",[a._v("内网数据虽然没有特别重要，但是备份也是不可或缺的一个环节，朱子有言：“"),s("code",[a._v("宜未雨而筹谋，勿临渴而掘井")]),a._v("”，这句话放在备份领域简直就是无法颠破的真理。")]),a._v(" "),s("p",[a._v("因此，在内网的数据，我们也做了全量备份，今天就来整理一下备份的脚本以及备份的策略以及备份的灾备恢复。")]),a._v(" "),s("p",[a._v("增量备份的成立依赖于 mysql 的 bin-log 原理，我们在数据库中的每一步增删改查操作都会记录在 binlog 日志当中，那么通过先对数据库进行一次全量备份，备份同时将 binlog 日志刷新，在这次备份之后的所有操作都会记录在新增的 binlog 日志当中，在增量备份当中我们只需要对增加的 binlog 进行备份，就实现了对不断增加内容的数据库的完美备份了。")]),a._v(" "),s("p",[a._v("当数据库出现异常的时候，我们可以先恢复最近一次的全量备份，接着将增量备份的文件一个一个按顺序恢复即可实现原来数据库的恢复。")]),a._v(" "),s("h2",{attrs:{id:"_2-备份。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-备份。"}},[a._v("#")]),a._v(" 2，备份。")]),a._v(" "),s("h3",{attrs:{id:"_1-开启-bin-log-记录。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启-bin-log-记录。"}},[a._v("#")]),a._v(" 1，开启 bin-log 记录。")]),a._v(" "),s("p",[a._v("执行增量备份的前提条件是 MySQL 打开"),s("code",[a._v("binlog")]),a._v("日志功能，在"),s("code",[a._v("my.cnf")]),a._v("中加入")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("log-bin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/mysql/mysql-bin  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#“log-bin=”后的字符串为日志记载目录，如果不指定位置的话，默认在mysql的data目录下。")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-首先是全量备份的脚本。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-首先是全量备份的脚本。"}},[a._v("#")]),a._v(" 2，首先是全量备份的脚本。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dumpdate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%H%M%S"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("filedate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%y%m%d"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mysqldump")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mysql/bin/mysqldump\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mulu")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/backup/sqlbackup/all/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$filedate")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mulu")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mulu")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mysqldump")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--quick")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--events")]),a._v(" --all-databases --flush-logs --delete-master-logs --single-transaction "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${mulu}")]),a._v("/all"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${dumpdate}")]),a._v(".sql\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[s("strong",[a._v("参数：")])]),a._v(" "),s("p",[s("code",[a._v("--quick，-q")])]),a._v(" "),s("p",[a._v("该选项在导出大表时很有用，它强制 MySQLdump 从服务器查询取得记录直接输出而不是取得所有记录后将它们缓存到内存中。")]),a._v(" "),s("p",[s("code",[a._v("--events, -E")])]),a._v(" "),s("p",[a._v("导出事件")]),a._v(" "),s("p",[s("code",[a._v("--all-databases , -A")])]),a._v(" "),s("p",[a._v("导出全部数据库。")]),a._v(" "),s("p",[s("code",[a._v("--flush-logs")])]),a._v(" "),s("p",[a._v("开始导出之前刷新日志，"),s("code",[a._v("这一项必须带上")]),a._v("。")]),a._v(" "),s("p",[a._v("请注意：假如一次导出多个数据库 (使用选项—databases 或者—all-databases)，将会逐个数据库刷新日志。除使用—lock-all-tables 或者—master-data 外。在这种情况下，日志将会被刷新一次，相应的所以表同时被锁定。因此，如果打算同时导出和刷新日志应该使用—lock-all-tables 或者—master-data 和—flush-logs。")]),a._v(" "),s("p",[s("code",[a._v("--delete-master-logs")])]),a._v(" "),s("p",[a._v("master 备份后删除日志. 这个参数将自动激活—master-data。")]),a._v(" "),s("p",[s("code",[a._v("--single-transaction")])]),a._v(" "),s("p",[a._v("该选项在导出数据之前提交一个 BEGIN SQL 语句，BEGIN 不会阻塞任何应用程序且能保证导出时数据库的一致性状态。它只适用于多版本存储引擎，仅 InnoDB。本选项和—lock-tables 选项是互斥的，因 LOCK TABLES 会使任何挂起的事务隐含提交。要想导出大表的话，应结合使用—quick 选项。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4d17a5b26fbd9f06.jpg",alt:"image"}})]),a._v(" "),s("h3",{attrs:{id:"_3-接着是增量备份的脚本。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-接着是增量备份的脚本。"}},[a._v("#")]),a._v(" 3，接着是增量备份的脚本。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("en_US.UTF-8\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BakDir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/backup/sqlbackup/add\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LogFile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BakDir")]),a._v("/binlog.log\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BinDir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mysql/data\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BinFile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mysql/data/mysql-bin.index\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mysqladmin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mysql/bin/mysqladmin\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mysqladmin")]),a._v("  flush-logs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#这个是用于产生新的mysql-bin.00000*文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Counter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" $BinFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $1}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NextNum")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#这个for循环用于比对$Counter,$NextNum这两个值来确定文件是不是存在或最新的。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" $BinFile"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("base")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("basename")]),a._v(" $file"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#basename用于截取mysql-bin.00000*文件名，去掉./mysql-bin.000005前面的./")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NextNum")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("expr")]),a._v(" $NextNum + "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NextNum")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-eq")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Counter")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$base")]),a._v(" skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LogFile")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dest")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BakDir")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$base")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$dest")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#test -e用于检测目标文件是否存在，存在就写exist!到$LogFile去。")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$base")]),a._v(" exist"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LogFile")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BinDir")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$base")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BakDir")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$base")]),a._v(" copying "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LogFile")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%Y年%m月%d日 %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" Bakup succ"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$LogFile")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br")])]),s("p",[a._v("针对 binlog 的增量备份。")]),a._v(" "),s("h3",{attrs:{id:"_4-通过定时执行两个脚本来实现备份策略。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过定时执行两个脚本来实现备份策略。"}},[a._v("#")]),a._v(" 4，通过定时执行两个脚本来实现备份策略。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("方式")]),a._v(" "),s("th",[a._v("定时任务")]),a._v(" "),s("th",[a._v("备注")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("增量备份")]),a._v(" "),s("td",[a._v("0 3 0 /bin/bash /backup/sqlbakall.sh")]),a._v(" "),s("td",[a._v("每周日凌晨三点备份")])]),a._v(" "),s("tr",[s("td",[a._v("全量备份")]),a._v(" "),s("td",[a._v("0 3 1-6 /bin/bash /backup/sqlbakadd.sh")]),a._v(" "),s("td",[a._v("每周一到周六凌晨三点备份")])])])]),a._v(" "),s("p",[a._v("这样就实现了数据库的增量备份。其中全量备份则使用 mysqldump 将所有的数据库导出，每周日凌晨三点执行，并会删除上周留下的 binlog（mysql-bin.00000*）。增量备份会在每周一到周六的凌晨三点执行，执行的动作是将一周生成的 binlog 复制到指定的目录。")]),a._v(" "),s("h2",{attrs:{id:"_3-恢复。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-恢复。"}},[a._v("#")]),a._v(" 3，恢复。")]),a._v(" "),s("p",[s("strong",[a._v("关于灾备恢复")]),a._v("。")]),a._v(" "),s("p",[a._v("一旦出现问题，恢复的顺序应该是"),s("code",[a._v("先恢复")]),a._v("最近一次的全量备份，让数据库追溯到最近一次的完整状态。\n然后按顺序将增量备份一个一个恢复起来。（注意：这个地方要注意的是，由于脚本当中没有对旧备份的 binlog 进行处理，所以当需要恢复增量备份的时候，要结合全量备份的日期，与 binlog 备份中的日期，恢复的时候只用从全量备份那一天之后的 binlog 进行恢复即可！）")]),a._v(" "),s("p",[s("strong",[a._v("具体恢复命令如下")]),a._v("：")]),a._v(" "),s("h3",{attrs:{id:"_1-恢复安全备份。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-恢复安全备份。"}},[a._v("#")]),a._v(" 1， 恢复安全备份。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" all104528.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-恢复增量备份。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-恢复增量备份。"}},[a._v("#")]),a._v(" 2， 恢复增量备份。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysqlbinlog master-bin.000007 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v("\nmysqlbinlog master-bin.000008 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v("\nmysqlbinlog master-bin.000009 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("注：当执行恢复操作的时候，由于数据量较大，可以暂时关闭 binlog 的记录。")]),a._v(" "),s("h2",{attrs:{id:"_4-优化。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化。"}},[a._v("#")]),a._v(" 4，优化。")]),a._v(" "),s("p",[a._v("突然想，为何不优化一下呢？")]),a._v(" "),s("p",[a._v("说干就干。")]),a._v(" "),s("p",[a._v("优化思路就是把旧的 binlog 保存在 oldbinlog 目录当中。")]),a._v(" "),s("p",[s("strong",[a._v("全量备份")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dumpdate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%H%M%S"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("filedate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%y%m%d"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mysqldump")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/mysql/bin/mysqldump\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("mulu")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/backup/sqlbackup/all/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$filedate")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mulu")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mulu")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mysqldump")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--quick")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--events")]),a._v(" --all-databases --flush-logs --delete-master-logs --single-transaction "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${mulu}")]),a._v("/all"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${dumpdate}")]),a._v(".sql\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /backup/sqlbackup/add/\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("mv master-bin.0000*  oldbinlog\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("注意要创建这个 oldbinlog 目录。")]),a._v(" "),s("p",[a._v("这样，当服务出问题的时候，直接根据 all 目录下的全量备份进行恢复，然后根据 add 目录下的增量备份进行恢复即可。")])])}),[],!1,null,null,null);s.default=r.exports}}]);