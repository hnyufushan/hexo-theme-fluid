(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{925:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("前边有详细讲过基于UTM配置安装Windows11的全过程，那么配置CentOS基本上也差不多，只不过有部分内容需要注意一些差异，这里做一下简单的记录。")]),s._v(" "),a("p",[s._v("镜像下载："),a("a",{attrs:{href:"https://mirrors.huaweicloud.com/centos-altarch/7.9.2009/isos/aarch64/",target:"_blank",rel:"noopener noreferrer"}},[s._v("选择国内华为镜像站。"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/04/ffb62f5e2da25c70.jpg",alt:""}})]),s._v(" "),a("p",[s._v("如果只是实验所用，那么选择"),a("code",[s._v("Minimal")]),s._v("版本会比较合适。")]),s._v(" "),a("p",[s._v("创建虚拟机过程基本上全部保持默认，一路下一步即可，这里记录下需要重新配置的注意点：")]),s._v(" "),a("ul",[a("li",[s._v("默认参数下，给的系统配置是"),a("code",[s._v("QEMU 6.2 ARM Virtual Machine (virt-6.2)")]),s._v("，这个并不能正常使用，我这里测试会进入grub页面，无法安装系统。这里需要选择："),a("code",[s._v("QEMU 5.2 ARM Virtual Machine (virt-5.2)")]),s._v("。")]),s._v(" "),a("li",[s._v("网络：默认是共享网络，保持默认即可，系统安装之后，手动配置IP。")]),s._v(" "),a("li",[s._v("注意确认镜像选择正确且页面正常显示挂载，如果没有，请参考"),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/3f19f0/#_1-%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows配置流程"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("p",[s._v("然后就是直接开机进行安装即可，安装过程这里不赘述了，基本上要安装CentOS系统的你应该了解这个过程。安装完成之后会自动进入重启，注意这个时候需要将挂载的镜像弹出，以免再次进入安装界面。")]),s._v(" "),a("p",[s._v("开机之后，就是一个能够正常使用的虚拟机了，唯一需要处理的问题就是网络的配置了。")]),s._v(" "),a("p",[s._v("此时可以手动分配IP：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-eth0\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROXY_METHOD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BROWSER_ONLY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV4_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.6\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("配置保存之后，重启一下网卡。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl restart network\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifdown")]),s._v(" eth0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifup")]),s._v(" eth0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("接着配置一下DNS：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/resolv.conf\nnameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这个时候ping一下外网，应该就能正常使用网络了。")]),s._v(" "),a("p",[s._v("然后是配置一下yum源，需要注意这个是arm平台的：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份已有配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载阿里配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-altarch-7.repo \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭密钥检查")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# makecache")]),s._v("\nyum clean all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" yum makecache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("剩下的就是参照主机初始化的一些步骤流程进行初始化的配置了："),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/1366.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS安装之后的配置优化。"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);