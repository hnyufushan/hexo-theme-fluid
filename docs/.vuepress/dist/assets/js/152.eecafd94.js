(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{500:function(s,t,n){"use strict";n.r(t);var e=n(0),v=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在 CentOS/Fedora/RHEL 版本的 Linux 中则使用下面的命令进行安装。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("lsof")]),s._v("也是有着最多选项的 Linux/Unix 命令之一。"),t("code",[s._v("lsof")]),s._v("可以查看打开的文件是：")]),s._v(" "),t("ul",[t("li",[s._v("普通文件")]),s._v(" "),t("li",[s._v("目录")]),s._v(" "),t("li",[s._v("网络文件系统的文件")]),s._v(" "),t("li",[s._v("字符或设备文件")]),s._v(" "),t("li",[s._v("(函数) 共享库")]),s._v(" "),t("li",[s._v("管道、命名管道")]),s._v(" "),t("li",[s._v("符号链接")]),s._v(" "),t("li",[s._v("网络文件（例如：NFS file、网络 socket，unix 域名 socket）")]),s._v(" "),t("li",[s._v("还有其它类型的文件，等等")])]),s._v(" "),t("p",[s._v("虽然"),t("code",[s._v("lsof")]),s._v("命令有着 N 多的选项，但是常用的只有以下几个：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-a")]),s._v("：使用 AND 逻辑，合并选项输出内容")]),s._v(" "),t("li",[t("code",[s._v("-c")]),s._v("：列出名称以指定名称开头的进程打开的文件")]),s._v(" "),t("li",[t("code",[s._v("-d")]),s._v("：列出打开指定文件描述的进程")]),s._v(" "),t("li",[t("code",[s._v("+d")]),s._v("：列出目录下被打开的文件")]),s._v(" "),t("li",[t("code",[s._v("+D")]),s._v("：递归列出目录下被打开的文件")]),s._v(" "),t("li",[t("code",[s._v("-n")]),s._v("：列出使用 NFS 的文件")]),s._v(" "),t("li",[t("code",[s._v("-u")]),s._v("：列出指定用户打开的文件")]),s._v(" "),t("li",[t("code",[s._v("-p")]),s._v("：列出指定进程号所打开的文件")]),s._v(" "),t("li",[t("code",[s._v("-i")]),s._v("：列出打开的套接字")])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4bb1a7899dfcfec8.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("总的说来，"),t("code",[s._v("lsof")]),s._v("命令还是一个比较复杂的命令，那么多选项，用起来还是蛮累的，但是这不能否定它是一个出色的工具，一个我们不得不学习的命令。下面就来说一些"),t("code",[s._v("lsof")]),s._v("的惯用用法。\n– 命令：")]),s._v(" "),t("p",[t("code",[s._v("lsof")])]),s._v(" "),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("COMMAND     PID   TID    "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("   FD      TYPE             DEVICE   SIZE/OFF       NODE NAME\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  cwd       DIR              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" /\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  rtd       DIR              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" /\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  txt       REG              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1523568")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1053845")]),s._v(" /usr/lib/systemd/systemd\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  mem       REG              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20040")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050452")]),s._v(" /usr/lib64/libuuid.so.1.3.0\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  mem       REG              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("261336")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1051899")]),s._v(" /usr/lib64/libblkid.so.1.1.0\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  mem       REG              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90664")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050435")]),s._v(" /usr/lib64/libz.so.1.2.7\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  mem       REG              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("157424")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050447")]),s._v(" /usr/lib64/liblzma.so.5.2.2\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  mem       REG              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23968")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050682")]),s._v(" /usr/lib64/libcap-ng.so.0.0.0\nsystemd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          root  mem       REG              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("253,1")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19888")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050666")]),s._v(" /usr/lib64/libattr.so.1.1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("输出内容详解：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("COMMAND")]),s._v("：进程的名称")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("PID")]),s._v("：进程标识符")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("TID")]),s._v("：线程标识符")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("USER")]),s._v("：进程所有者")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("FD")]),s._v("：文件描述符，应用程序通过文件描述符识别该文件，一般有以下取值：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("cwd")]),s._v("：表示 current work dirctory，即：应用程序的当前工作目录，这是该应用程序启动的目录")]),s._v(" "),t("li",[t("code",[s._v("txt")]),s._v("：该类型的文件是程序代码，如应用程序二进制文件本身或共享库")]),s._v(" "),t("li",[t("code",[s._v("lnn")]),s._v("：library references (AIX)")]),s._v(" "),t("li",[t("code",[s._v("er")]),s._v("：FD information error (see NAME column)")]),s._v(" "),t("li",[t("code",[s._v("jld")]),s._v("：jail directory (FreeBSD)")]),s._v(" "),t("li",[t("code",[s._v("ltx")]),s._v("：shared library text (code and data)")]),s._v(" "),t("li",[t("code",[s._v("mxx")]),s._v("：hex memory-mapped type number xx")]),s._v(" "),t("li",[t("code",[s._v("m86")]),s._v("：DOS Merge mapped file")]),s._v(" "),t("li",[t("code",[s._v("mem")]),s._v("：memory-mapped file")]),s._v(" "),t("li",[t("code",[s._v("mmap")]),s._v("：memory-mapped device")]),s._v(" "),t("li",[t("code",[s._v("pd")]),s._v("：parent directory")]),s._v(" "),t("li",[t("code",[s._v("rtd")]),s._v("：root directory")]),s._v(" "),t("li",[t("code",[s._v("tr")]),s._v("：kernel trace file (OpenBSD)")]),s._v(" "),t("li",[t("code",[s._v("v86")]),s._v("：VP/ix mapped file")]),s._v(" "),t("li",[t("code",[s._v("0")]),s._v("：表示标准输出")]),s._v(" "),t("li",[t("code",[s._v("1")]),s._v("：表示标准输入")]),s._v(" "),t("li",[t("code",[s._v("2")]),s._v("：表示标准错误")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("TYPE")]),s._v("：文件类型，常见的文件类型有以下几种：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("DIR")]),s._v("：表示目录")]),s._v(" "),t("li",[t("code",[s._v("CHR")]),s._v("：表示字符类型")]),s._v(" "),t("li",[t("code",[s._v("BLK")]),s._v("：块设备类型")]),s._v(" "),t("li",[t("code",[s._v("UNIX")]),s._v("：UNIX 域套接字")]),s._v(" "),t("li",[t("code",[s._v("FIFO")]),s._v("：先进先出 (FIFO) 队列")]),s._v(" "),t("li",[t("code",[s._v("IPv4")]),s._v("：网际协议 (IP) 套接字")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("DEVICE")]),s._v("：指定磁盘的名称")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("SIZE/OFF")]),s._v("：文件的大小")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("NODE")]),s._v("：索引节点（文件在磁盘上的标识）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("NAME")]),s._v("：打开文件的确切名称")]),s._v(" "),t("ul",[t("li",[s._v("命令："),t("code",[s._v("lsof abc.txt")]),s._v("\n说明：显示开启文件 abc.txt 的进程")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -i :80")]),s._v("\n说明：列出 80 端口目前打开的文件列表")])]),s._v(" "),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("COMMAND     PID  "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("   FD   TYPE    DEVICE SIZE/OFF NODE NAME\nnginx      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8838")]),s._v("  root    8u  IPv4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114512623")]),s._v("      0t0  TCP *:http "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnginx     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12886")]),s._v(" jelly    8u  IPv4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114512623")]),s._v("      0t0  TCP *:http "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnginx     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12887")]),s._v(" jelly    8u  IPv4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114512623")]),s._v("      0t0  TCP *:http "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("命令：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("说明：列出所有的网络连接")]),s._v(" "),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("COMMAND     PID  "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("   FD   TYPE    DEVICE SIZE/OFF NODE NAME\nntpd        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("856")]),s._v("   ntp   16u  IPv4     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13105")]),s._v("      0t0  UDP *:ntp \nntpd        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("856")]),s._v("   ntp   17u  IPv6     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13106")]),s._v("      0t0  UDP *:ntp \nntpd        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("856")]),s._v("   ntp   18u  IPv4     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13210")]),s._v("      0t0  UDP localhost:ntp \nntpd        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("856")]),s._v("   ntp   19u  IPv4     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13211")]),s._v("      0t0  UDP jellythink:ntp \nvsftpd     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1613")]),s._v("  root    3u  IPv6     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17867")]),s._v("      0t0  TCP *:ftp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp-fpm    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4037")]),s._v(" jelly    0u  IPv4  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60908335")]),s._v("      0t0  TCP localhost:cslistener "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsshd       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8503")]),s._v("  root    3u  IPv4    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("197060")]),s._v("      0t0  TCP *:50022 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnginx      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8838")]),s._v("  root    8u  IPv4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114512623")]),s._v("      0t0  TCP *:http "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnginx      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8838")]),s._v("  root    9u  IPv4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114512624")]),s._v("      0t0  TCP *:https "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp-fpm    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9059")]),s._v(" jelly    0u  IPv4  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60908335")]),s._v("      0t0  TCP localhost:cslistener "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp-fpm    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9137")]),s._v(" jelly    0u  IPv4  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60908335")]),s._v("      0t0  TCP localhost:cslistener "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("命令："),t("code",[s._v("lsof -i tcp")]),s._v("\n说明：列出所有的 TCP 网络连接信息")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -i udp")]),s._v("\n说明：列出所有的 UDP 网络连接信息")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -i tcp:80")]),s._v("\n说明：列出 80 端口 TCP 协议的所有连接信息")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -i udp:25")]),s._v("\n说明：列出 25 端口 UDP 协议的所有连接信息")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -c ngin")]),s._v("\n说明：列出以 ngin 开头的进程打开的文件列表")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -p 20711")]),s._v("\n说明：列出指定进程打开的文件列表")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -u uasp")]),s._v("\n说明：列出指定用户打开的文件列表")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -u uasp -i tcp")]),s._v("\n说明：将所有的 TCP 网络连接信息和指定用户打开的文件列表信息一起输出")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -a -u uasp -i tcp")]),s._v("\n说明：将指定用户打开的文件列表信息，同时是 TCP 网络连接信息的一起输出；注意和上一条命令进行对比")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof +d /usr/local/")]),s._v("\n说明：列出目录下被进程打开的文件列表")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof +D /usr/local/")]),s._v("\n说明：递归搜索目录下被进程打开的文件列表")]),s._v(" "),t("li",[s._v("命令："),t("code",[s._v("lsof -i @peida.linux:20,21,22,25,53,80 -r 3")]),s._v("\n说明：列出目前连接到主机 peida.linux 上端口为 20，21，22，25，53，80 相关的所有文件信息，且每隔 3 秒不断的执行"),t("code",[s._v("lsof")]),s._v("指令")])])])]),s._v(" "),t("p",[s._v("原文地址：http://t.cn/AiOgYZox")])])}),[],!1,null,null,null);t.default=v.exports}}]);