(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1030:function(t,s,v){"use strict";v.r(s);var a=v(0),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Linux常用命令")]),t._v(" "),s("h2",{attrs:{id:"_1-vi和vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vi和vim"}},[t._v("#")]),t._v(" 1.vi和vim")]),t._v(" "),s("blockquote",[s("p",[t._v("vi和vim可以创建并编辑文件\n用法：vi text.txt")])]),t._v(" "),s("h2",{attrs:{id:"_2-vi预览模式下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vi预览模式下"}},[t._v("#")]),t._v(" 2.vi预览模式下")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("定位到16行   "),s("strong",[t._v("命令：16g")])]),t._v(" "),s("li",[t._v("直接定位并且编辑第16行  "),s("strong",[t._v("命令：vi text.txt +16")])]),t._v(" "),s("li",[t._v("查看文件末尾  "),s("strong",[t._v("命令：vi text.txt +")])]),t._v(" "),s("li",[t._v("保存退出  "),s("strong",[t._v('命令："：wq"或者":x"')])]),t._v(" "),s("li",[t._v("跳到行首 "),s("strong",[t._v("命令：0")]),t._v("  跳到行尾 "),s("strong",[t._v("命令：$")])]),t._v(" "),s("li",[t._v("文件顶部  "),s("strong",[t._v("命令：gg")])]),t._v(" "),s("li",[t._v("文件底部  "),s("strong",[t._v("命令：G")])]),t._v(" "),s("li",[t._v("到指定行  "),s("strong",[t._v("命令：数字gg")]),t._v("   例如：66gg->就是到文件66行")]),t._v(" "),s("li",[t._v("上一页  "),s("strong",[t._v("命令：Ctrl+b")])]),t._v(" "),s("li",[t._v("下一页  "),s("strong",[t._v("命令：Ctrl+f")])]),t._v(" "),s("li",[t._v("选择命令  "),s("strong",[t._v("命令：V")])]),t._v(" "),s("li",[t._v("查找命令 "),s("strong",[t._v("命令：/str 向上查找n 向下查找N")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-vi编辑模式下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vi编辑模式下"}},[t._v("#")]),t._v(" 3.vi编辑模式下")]),t._v(" "),s("blockquote",[s("p",[t._v("预览模式输入"),s("strong",[t._v("命令：i")]),t._v(" 即可进入编辑模式，可以自由编辑代码。")])]),t._v(" "),s("h2",{attrs:{id:"_4-linux基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-linux基本命令"}},[t._v("#")]),t._v(" 4.linux基本命令")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("创建文件  "),s("strong",[t._v("touch  aaa.txt")])]),t._v(" "),s("li",[t._v("创建文件夹 "),s("strong",[t._v("mkdir  test")])]),t._v(" "),s("li",[t._v("删除文件 "),s("strong",[t._v("rm  aaa.txt")])]),t._v(" "),s("li",[t._v("删除文件夹 "),s("strong",[t._v("rm  -r  test")])]),t._v(" "),s("li",[t._v("帮助文档 "),s("strong",[t._v("例如：mkdir —help  或  rm  —")])]),t._v(" "),s("li",[t._v("文件列表")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ls  -a    显示所有包括隐藏文件\nls  -l    文件以列表显示\nls  -l  -h  显示文件大小列表  可以简写ls  -lh\nls  -lha  显示列表包括隐藏文件\nls  t*  表示t开头的文件\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("ol",{attrs:{start:"7"}},[s("li",[t._v("查看文件 "),s("strong",[t._v("cat  -b  123.txt  带行数查看cat  -n  123.txt 或者 more  123.txt")])]),t._v(" "),s("li",[t._v("文件查找  "),s("strong",[t._v("grep  -n  hello  123.txt")]),t._v("  在123.txt中查找hello关键字  并显示在第几行")]),t._v(" "),s("li",[t._v("find  路径  -name  “"),s("code",[t._v("*1*")]),t._v("”  查找含有1的文件")]),t._v(" "),s("li",[t._v("写入文件  "),s("strong",[t._v("echo  hello  test  > 123.txt")]),t._v("  写入文件内容\nls  -lh  > a   >是覆盖 >>是写入")]),t._v(" "),s("li",[t._v("编辑文件 "),s("strong",[t._v("gedit  123.txt")])]),t._v(" "),s("li",[t._v("组管理")])]),t._v(" "),s("blockquote",[s("p",[t._v("sudo  groupadd  dev  添加组\nsudo  groupdel  dev  删除组\nsudo  chgrp  -R  dev  test/  给test文件修改为dev组")])]),t._v(" "),s("ol",{attrs:{start:"13"}},[s("li",[t._v("用户管理")])]),t._v(" "),s("blockquote",[s("p",[t._v("sudo  useradd  -m  -g  dev  wangwu  创wangwu用户指定dev组  -m是创建用户目录  -g是指定组\nsudo  passwd  wangwu  设置密码\nusermod  -s  /bin/bash  wangwu  修改王五登陆后窗口执行脚本（解决用户登陆后ls没有u颜色显示）")])]),t._v(" "),s("ol",{attrs:{start:"14"}},[s("li",[t._v("查询系统日期 "),s("strong",[t._v("date")])]),t._v(" "),s("li",[t._v("cal  查一个月  cal  -y  查一年的日历")]),t._v(" "),s("li",[t._v("磁盘空间查看")])]),t._v(" "),s("blockquote",[s("p",[t._v("df  -h  磁盘空间占用\ndu  -h  当前目录空间占用")])]),t._v(" "),s("ol",{attrs:{start:"17"}},[s("li",[t._v("查看进程")])]),t._v(" "),s("blockquote",[s("p",[t._v("ps  au  查看所有用户正在使用进程  ps  aux查看所有进程\ntop  按照内存占用查看\nkill  98765  杀死进程  kill  -9  98765  强制杀死")])]),t._v(" "),s("ol",{attrs:{start:"18"}},[s("li",[t._v("解压和压缩")])]),t._v(" "),s("blockquote",[s("p",[t._v("tar  -cvf  test.tar  1.txt  2.txt  打包两个文件\ntar  -xvf  test.tar  解压")])]),t._v(" "),s("ol",{attrs:{start:"19"}},[s("li",[t._v("打包的时候要压缩文件命令如下：")])]),t._v(" "),s("blockquote",[s("p",[t._v("tar  -zcvf  test.tar.gz  1.txt\ntar  -zxvf  test.tar.gz  解压缩")])]),t._v(" "),s("ol",{attrs:{start:"20"}},[s("li",[t._v("查看某个可执行程序的位置 "),s("strong",[t._v("which  javac")])])])]),t._v(" "),s("h2",{attrs:{id:"_5-查询被占用的端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-查询被占用的端口"}},[t._v("#")]),t._v(" 5.查询被占用的端口")]),t._v(" "),s("p",[t._v("首先是需要输入命令，查看被占用的端口的进程")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("lsof -i:端口\n或者\nnetstat -tunpl |grep\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("如果想详细查看这个进程，ID具体是哪一个进程，可以通过命令的方式进行查看进程的详细信息")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ps -ef|grep 进程ID\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("结束进程")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kill -9 ID\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=_.exports}}]);