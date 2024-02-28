(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{864:function(s,a,t){"use strict";t.r(a);var e=t(0),v=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这几天连续两次遇到服务器磁盘空间不足的问题，而两次的情况以及处理解决的办法又都是不一样的，每次操作只有也都记录了文档，今天也整理到这里来。\n首先是第一种情况，通过直接挂载一块儿新的磁盘来实现扩容。")]),s._v(" "),a("p",[s._v("运维的工作有一个基础，那就是备份，这件事儿看上去在平时好像没什么用，但是用到的时候如果没有，那将可能是致命的。")]),s._v(" "),a("p",[s._v("好像有一种爱情哲学叫做 “"),a("code",[s._v("失去后才懂得珍惜")]),s._v("”，这都是愚蠢的人才干的事情，真正如我们这般聪明的，当然不会在后悔中明白珍惜的意义，因为更好的一种哲学应该是 “"),a("code",[s._v("你眼前这一位就是最好的")]),s._v("”，因此在拥有的时候珍惜，才是明白人应该做的事情。")]),s._v(" "),a("p",[s._v("那么说回工作上来，或许是数据库，或许是日志文件，我们给它安装的棒棒哒，打理的也棒棒哒，就这样它为我们服务着，相安无事，大家开心又快乐。但是如果没有备份的存在，那么一旦遭受攻击，或者服务器出现不可恢复性的故障，那么曾经的快乐就也不可能再次复现，留给我们的，只有无尽悔恨以及伤心而已了。")]),s._v(" "),a("p",[s._v("好了，扯了一些了，还是说回今天的备份吧。")]),s._v(" "),a("p",[s._v("公司做的日志备份服务器磁盘快满了（原来是挂了一块儿 5T 的磁盘），当然所能知道快满了，是通过 zabbix 的监控报警得知的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/458df135952b5570.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("看到报警时间已经是凌晨十二点了，小伙伴们也都非常关心。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a9cad01ed7d49e45.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("嘿吼，那个主动领命搞定这件事情的，就是本尊。")]),s._v(" "),a("p",[s._v("好啦，自己已经自领成命了，还说啥呢，主动去干呗。")]),s._v(" "),a("p",[s._v("第二天一大早，就登录到服务器上去。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/08d651531e50eabe.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("（这个地方之所以已经有两块 5T 的，是因为这张图是在配置完成之后截的。）")]),s._v(" "),a("p",[s._v("一看触目惊心了，五分之四已经用掉了。往里边详细看，事实上有一部分是没意义的日志，先干掉，还有一些，都是去年的陈芝麻烂谷子了的日志，与开发以及老大协商这些旧日志怎么处理，一致认为，不能删。")]),s._v(" "),a("p",[s._v("好吧，很明显，要加一块儿磁盘咯。")]),s._v(" "),a("p",[s._v("说干就干。")]),s._v(" "),a("p",[s._v("去到 VMware 当中，有这么一两步。")]),s._v(" "),a("p",[s._v("1，首先找到对应的服务器，然后找到配置界面。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a6007d977d9b7cf3.jpg",alt:""}})]),s._v(" "),a("p",[s._v("2，然后添加。")]),s._v(" "),a("p",[s._v("步骤是点击编辑按钮—》新设备选择新磁盘—》点击右侧添加—》设置要添加的大小—》点击确定就加好了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c50ca4fcab8eda2c.jpg",alt:""}})]),s._v(" "),a("p",[s._v("确定之后稍等一下，然后再管理其他磁盘里边就可以看到刚添加的磁盘了。")]),s._v(" "),a("p",[s._v("那么这里加好之后，需要到服务器进行挂载了。")]),s._v(" "),a("p",[s._v("去服务器并没有看到新添加的服务器被虚机读取，"),a("code",[s._v("partprobe")]),s._v("命令也没有效果，最后"),a("code",[s._v("重启了一下服务器")]),s._v("才读取到了，这个没什么多说的，但愿你的这台备份服务器不是一台不可关闭的东东。")]),s._v(" "),a("p",[s._v("现在有一个问题值得思考一下：之前的数据是 5T 的，现在又加了一块儿 5T 的磁盘，那么是在之前的逻辑卷的基础之上把它扩容呢，还是新盘单独挂载使用呢？")]),s._v(" "),a("p",[s._v("如果这是很小的磁盘，以及日常的一些无关紧要额操作，或许可以这么做（直接扩容），但是对于这么大量级的情况下，并不建议这么做，而且我们这里的情况是原来的磁盘也并不是以逻辑卷创立的。")]),s._v(" "),a("p",[s._v("因此决定走老三步，分区，格式化，挂载。")]),s._v(" "),a("h2",{attrs:{id:"_1-分区。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-分区。"}},[s._v("#")]),s._v(" 1，分区。")]),s._v(" "),a("p",[s._v("因为刚才已经通过重启读到了这块磁盘，直接将这块盘作为一个分区，也就不再重新分区了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9013d8aad0e5b6ff.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_2-格式化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-格式化。"}},[s._v("#")]),s._v(" 2，格式化。")]),s._v(" "),a("p",[s._v("如果不知道该把文件系统格式化成什么格式的，那么首先来看一眼之前的 sdb 是什么格式的。")]),s._v(" "),a("p",[s._v("查看方式大概有：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-hT")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/fstab\nlsblk "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\nblkid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("基本上可以通过以上几种方式来查看磁盘的分区文件系统类型。")]),s._v(" "),a("p",[s._v("通过查看得知之前的 sdb 是 xfs 格式，那么新的也歌城 xfs 呗。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkfs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" xfs /dev/sdc\nmkfs.xfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /dev/sdc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("以上两条命令都可以，选择其中一个执行即可。")]),s._v(" "),a("h2",{attrs:{id:"_3-挂载。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-挂载。"}},[s._v("#")]),s._v(" 3，挂载。")]),s._v(" "),a("p",[s._v("接着创建一个新的目录，进行挂载。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /new-nfs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sdc /new-nfs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("ok，新增磁盘完成。接着可以先把老的数据移过来，然后之前的备份脚本就不用进行什么改动了。")])])}),[],!1,null,null,null);a.default=v.exports}}]);