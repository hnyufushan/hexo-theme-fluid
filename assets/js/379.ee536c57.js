(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{722:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"registry文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registry文件"}},[s._v("#")]),s._v(" Registry文件")]),s._v(" "),t("p",[s._v("Filebeat会将自己处理日志文件的进度信息写入到registry文件中，以保证filebeat在重启之后能够接着处理未处理过的数据，而无需从头开始。")]),s._v(" "),t("p",[s._v("registry文件内容为一个list，list里的每个元素都是一个字典，字典的格式如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"source"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/log/tmp.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"offset"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("585451484")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"FileStateOS"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("75063792")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"device"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64785")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timestamp"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-06-06T03:10:03.757645551+08:00"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ttl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90000000000000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("每个字段的意义解释：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("source：")]),s._v(" 记录采集日志的完整路径")]),s._v(" "),t("li",[t("strong",[s._v("offset：")]),s._v(" 采集这个日志文件到了哪个位置，总采集字节数")]),s._v(" "),t("li",[t("strong",[s._v("inode：")]),s._v(" 日志文件的inode号，关于inode的详细解释看下文")]),s._v(" "),t("li",[t("strong",[s._v("device：")]),s._v(" 日志所在的磁盘编号，下文"),t("code",[s._v("stat")]),s._v("命令中Device的值")]),s._v(" "),t("li",[t("strong",[s._v("timestamp：")]),s._v(" 日志最后一次发生变化的时间戳")]),s._v(" "),t("li",[t("strong",[s._v("ttl：")]),s._v(" 采集失效时间，-1表示永不失效")])]),s._v(" "),t("p",[s._v("Filebeat在每次启动时都会来读取这个文件，如果文件不存在则会创建新文件。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a8530db9a1aeead1.jpg",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"inode相关知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inode相关知识"}},[s._v("#")]),s._v(" inode相关知识")]),s._v(" "),t("p",[s._v("硬盘格式化的时候，操作系统自动将硬盘分成了两个区域。")]),s._v(" "),t("p",[s._v("一个是数据区，用来存放文件的数据信息")]),s._v(" "),t("p",[s._v("一个是inode区，用来存放文件的元信息，比如文件的创建者、创建时间、文件大小等等")]),s._v(" "),t("p",[s._v("每一个文件都有对应的inode，里边包含了与该文件有关的一些信息，可以用"),t("code",[s._v("stat")]),s._v("命令查看文件的inode信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stat")]),s._v(" /data/log/tmp.log\n  File: ‘/data/log/tmp.log’\n  Size: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("196901341")]),s._v("   Blocks: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503040")]),s._v("     IO Block: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   regular "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\nDevice: fd11h/64785d    Inode: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("71012560")]),s._v("    Links: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nAccess: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0640/-rw-r-----"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  Uid: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/     www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   Gid: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAccess: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-06-06 03:10:01.841178994 +0800\nModify: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-06-06 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":09:48.536169224 +0800\nChange: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-06-06 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":09:48.536169224 +0800\n Birth: -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("我们可能遇到过明明查看磁盘空间还充足，但无法创建新文件的问题，这时候可能就是因为磁盘的inode用完了，磁盘的inode可以通过命令"),t("code",[s._v("df -i")]),s._v("查看")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -i")]),s._v("\nFilesystem        Inodes IUsed     IFree IUse% Mounted on\nnone           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("104855552")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39836")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("104815716")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /\ntmpfs            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024703")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024687")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /dev\ntmpfs            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024703")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024693")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /sys/fs/cgroup\n/dev/vdc1      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("104855552")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39836")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("104815716")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /etc/hosts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("每个inode都有一个号码，操作系统就是通过这个号码来识别不同文件的，这个号码就是filebet配置中的inode，可以通过"),t("code",[s._v("ls -i")]),s._v("命令查看")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" /data/log/tmp.log\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("71012560")]),s._v(" /data/log/tmp.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可能你查看registry文件发现"),t("strong",[s._v("同名的log文件记录有很多条")]),s._v("，造成这个的主要原因是你的log文件可能被重命名过，常见的场景例如log4j里边的每日生成一个日志文件，把老的日志文件重命名。")]),s._v(" "),t("h2",{attrs:{id:"重新从头读取日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新从头读取日志"}},[s._v("#")]),s._v(" 重新从头读取日志")]),s._v(" "),t("p",[s._v("有些情况下我们需要让filebeat重新从头读取日志，尤其是在调试的时候，有了上边的知识我们就很容易实现filebeat重新从头读取日志了，核心的思想就是干掉registry文件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("找到registry文件的位置，如果没有单独配置那么文件路径为"),t("code",[s._v("/var/lib/filebeat/registry")]),s._v("，不在也没关心，可以直接find命令查找。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find / -name registry")]),s._v("\n/var/lib/filebeat/registry\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("关闭filebeat –> 删掉registry文件 –> 启动filebeat。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/etc/init.d/filebeat stop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" /var/lib/filebeat/registry "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n/etc/init.d/filebeat start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看registry文件内容重新生成了数据。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);