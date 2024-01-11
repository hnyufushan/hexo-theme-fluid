(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{511:function(e,_,t){"use strict";t.r(_);var v=t(0),a=Object(v.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"_1-前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[e._v("#")]),e._v(" 1，前言")]),e._v(" "),_("p",[e._v("直到现在，我甚至都没有真正地去实际操作过抓包这个事儿，可能对一个运维工作者来说，这是不可想象的，然而事实就是这样。")]),e._v(" "),_("p",[e._v("我从来没打算逃避自己不会抓包这事儿，这一点在同事们经常脱口而出抓 A 抓 B，而我往往都默不作声即可验证。当然，另一方面，我也从来没打算完全放弃学习抓包，当工作内容越往网络与协议等的深入，我就越觉得这是一个不可回避的事情了。")]),e._v(" "),_("p",[e._v("前几天一个同事分享了《wireshark 网络分析的艺术》这本书给我，让我一下子燃起了对抓包以及网络分析的热情，于是就有了这篇文章。")]),e._v(" "),_("p",[e._v("TCP 协议的相关内容非常多非常深，不过面试时三次握手四次挥手则是经常出现的问题，工作中我们在面对以及处理一些 TCP 相关问题时，也都需要用到这些知识，我始终都不敢说自己掌握的多么熟练，今天，借助于第一次抓包的经历，来分享一下 TCP 的三次握手以及四次挥手。")]),e._v(" "),_("h2",{attrs:{id:"_2-抓包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-抓包"}},[e._v("#")]),e._v(" 2，抓包")]),e._v(" "),_("p",[e._v("通过在主机上使用"),_("code",[e._v("tcpdump")]),e._v("进行抓包，将抓包内容保存到文件中，然后再用"),_("code",[e._v("wireshark")]),e._v("进行分析。")]),e._v(" "),_("p",[e._v("localhost —-> http://eryajf.net/1040.html")]),e._v(" "),_("p",[e._v("以本地作为客户端，然后请求远程网站。")]),e._v(" "),_("p",[e._v("先在本机起一个监听程序：")]),e._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[e._v("tcpdump "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" ens33 "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-S")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" eryajf.net "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" eryajf.cap\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[e._v("然后在本机请求远程主机：")]),e._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" http://eryajf.net/1040.html\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[e._v("接着停掉抓包程序，将抓包文件 down 下来，使用 wireshark 打开。")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3bbc6d887b1652a6.jpg",alt:"img"}})]),e._v(" "),_("p",[e._v("图中凭借着个人目前对 TCP 知识的理解，用红框划分了三个阶段，这三个阶段展示了完整的 TCP 请求的流程。")]),e._v(" "),_("p",[e._v("1–3：是建联时的 TCP 三次握手。")]),e._v(" "),_("p",[e._v("4–7：进入到 HTTP 请求与响应的数据交互过程。")]),e._v(" "),_("p",[e._v("8–11：是结束连接的四次挥手流程。")]),e._v(" "),_("h2",{attrs:{id:"_3-见图知意"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-见图知意"}},[e._v("#")]),e._v(" 3，见图知意")]),e._v(" "),_("p",[e._v("接下来用大白话浅显的针对每条数据包进行一下简单分析，分析内容中将会依据如上三个阶段进行讲解，并且，因为在这整个过程中，TCP 的状态是在不断变化的，往常我们碰到主机 TIME_WAIT 或者 CLOSE_WAIT 过多的时候，经常头疼于这些名词的含义，因此争取在这次讲解当中也能够将 TCP 的状态对应上，以帮助我们理解那些名词。")]),e._v(" "),_("p",[e._v("讲解之前，先引用两张超级厉害的动图来进行一下概括，首先说明，图来自于 https://blog.csdn.net/qzcsu/article/details/72861891 ，人家已经画的足够好，自己就不必在这上头浪费精力了。")]),e._v(" "),_("p",[_("code",[e._v("三次握手：")])]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6c9c1864123d4882.gif",alt:"img"}})]),e._v(" "),_("p",[e._v("通过三次握手成功建立连接，两端进入数据传输过程。")]),e._v(" "),_("p",[_("code",[e._v("四次挥手：")])]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7e19799dc0c1757d.gif",alt:"img"}})]),e._v(" "),_("h2",{attrs:{id:"_4-流程浅析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-流程浅析"}},[e._v("#")]),e._v(" 4，流程浅析")]),e._v(" "),_("p",[e._v("详细说明如下，为了便于对比抓包数据，再次把 wireshark 的图搬过来：")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3bbc6d887b1652a6.jpg",alt:"img"}})]),e._v(" "),_("ol",[_("li",[_("p",[_("code",[e._v("client")]),e._v(" 发起 TCP 建联请求，通过本机的临时端口 "),_("code",[e._v("34362")]),e._v(" 与远程 "),_("code",[e._v("server")]),e._v(" 的 "),_("code",[e._v("80")]),e._v(" 端口通信。\n标志位为 "),_("code",[e._v("SYN")]),e._v("，序列号为 seq=x(0)，此处 SYN 表示客户端请求建立连接。然后，客户端进入 "),_("code",[e._v("SYN_SEND")]),e._v("（同步已发送状态）状态，等待服务器的确认。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("server")]),e._v(" 收到建联请求，通过 web 端口 "),_("code",[e._v("80")]),e._v(" 与 "),_("code",[e._v("client")]),e._v(" 的 "),_("code",[e._v("34362")]),e._v(" 端口通信。\n服务器收到客户端的 "),_("code",[e._v("SYN")]),e._v(" 报文段，需要对这个 SYN 报文段进行确认，确认报文中应该 ACK=1，SYN=1，确认号是 ack=x+1(1)，同时也要为自己初始化一个序列号 seq=y，此时，TCP 服务器进程进入了 "),_("code",[e._v("SYN_RCVD")]),e._v("（同步收到）状态。")])]),e._v(" "),_("li",[_("p",[e._v("TCP 客户端进程收到确认后，再次向服务器发出确认。\n确认报文的 ACK=1，ack=y+1，自己的序列号 seq=x+1，此时，TCP 连接建立，客户端进入 "),_("code",[e._v("ESTABLISHED")]),e._v("（已建立连接）状态。")]),e._v(" "),_("p",[_("code",[e._v("此时可看下图帮助理解")]),e._v("，(图源网络)。")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/102f366a1331d2b7.png",alt:""}})])]),e._v(" "),_("li",[_("p",[e._v("握手完毕，两端都进入 "),_("code",[e._v("ESTABLISHED")]),e._v(" 状态，可以看到 client 向 server 端发起了一个 "),_("code",[e._v("HTTP")]),e._v(" 协议(HTTP 建联是基于 TCP 协议的)的 "),_("code",[e._v("GET")]),e._v(" 请求。")])]),e._v(" "),_("li",[_("p",[e._v("从 info 中我们看到了 "),_("code",[e._v("ACK")]),e._v(" 的标志，说明这个包是 server 回应给 client 上一个包的请求。")])]),e._v(" "),_("li",[_("p",[e._v("这个包同样是从 server 流向 client 的，我们在 info 中看到了，"),_("code",[e._v("HTTP 301 Moved Permanently")]),e._v("，301 是一个重定向的状态码，"),_("strong",[e._v("Moved Permanently")]),e._v("表明 server 将请求的资源反馈给 client 端。前后许多动作都是为了这一步，我们也可以看到这个包的长度为 "),_("code",[e._v("363")]),e._v("，是整个请求流程中最大的，表明这次的真正的数据传输。")])]),e._v(" "),_("li",[_("p",[e._v("从 info 中我们再次看到了 "),_("code",[e._v("ACK")]),e._v(" 的标志，说明这个包是 client 回应给 server 端表明自己收到了上一个包。整个你来我往的流程就是这样客气。")]),e._v(" "),_("blockquote",[_("p",[e._v("当数据传输完毕，客户端不再发起请求，就会进入四次分手阶段。注意分手的话不一定都是客户端先说，因此下边将双方用主机 A 和主机 B 来表示。")])])]),e._v(" "),_("li",[_("p",[e._v("主机 A 的客户端进程向主机 B 的服务端发出连接释放的报文，并且停止发送数据。\n主机 A 设置 Seq 和 Ack，向主机 B 发送一个 FIN 报文段，FIN 是关闭连接的标志。此时，主机 A 进入到 "),_("code",[e._v("FIN_WAIT_1")]),e._v(" 状态，这表示主机 A 没有数据要发送给主机 B 了。")]),e._v(" "),_("blockquote",[_("p",[e._v("到这个地方需要注意一个细节，因为一些请求的发生时机并非完全顺序执行的，因此可能会有包的记录时间先后顺序不规范的情况。这个地方 9 与 10 两个包就应该换一下位置才符合正常分手的程序，不然就成了两个人同时说分手，然后一拍两散了。")])])]),e._v(" "),_("li",[_("p",[e._v("主机 B 收到连接释放报文，向主机 A 发送确认报文。\n主机 B 收到了主机 A 发送的 FIN 报文段，向主机 A 回一个 ACK 报文段，Ack 为 Seq 都加 1，此时主机 B 进入到 "),_("code",[e._v("CLOSE_WAIT")]),e._v(" 状态，表示我"),_("strong",[e._v("同意")]),e._v("你的关闭请求。")]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("CLOSE_WAIT")]),e._v(" 是被动关闭端在等待应用进程关闭时的一个状态，比如 golang 中应用打开一个文件句柄与客户端交互，当服务端进入 close_wait 状态时，就是在等待文件对象调用 Close 方法。")])])]),e._v(" "),_("li",[_("p",[e._v("主机 B 向主机 A 发送连接释放报文。\n主机 A 收到 B 的确认之后，进入 "),_("code",[e._v("FIN_WAIT_2")]),e._v(" 状态，是半关闭状态，即主机 A 失去发送能力，但是主机 B 却还能向 A 发送数据，并且 A 可以接收数据。此时主机 B 占主导位置了，如果需要继续关闭则需要主机 B 来操作了，于是，这一次就是，它向主机 A 发送 FIN 报文段，请求关闭连接，同时主机 B 进入 "),_("code",[e._v("LAST_ACK")]),e._v(" 状态。")])]),e._v(" "),_("li",[_("p",[e._v("主机 A 收到连接释放报文，向主机 B 发送确认报文。\n主机 A 接收到请求后发送 ACK 确认，然后进入 "),_("code",[e._v("TIME_WAIT")]),e._v(" 状态，等待 2MSL 之后进入 "),_("code",[e._v("CLOSED")]),e._v(" 状态，而主机 B 则在接受到确认后即进入 "),_("code",[e._v("CLOSED")]),e._v(" 状态。")]),e._v(" "),_("p",[_("code",[e._v("此时可看下图帮助理解")]),e._v("，(图源网络)。")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/e5a80b140d7a2214.jpg",alt:""}})])])]),e._v(" "),_("p",[e._v("本文基于个人目前对 TCP 相关知识的理解而写，可能会有错漏的地方，如果有人发现，欢迎指出交流。")]),e._v(" "),_("h2",{attrs:{id:"_5-思维扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-思维扩展"}},[e._v("#")]),e._v(" 5，思维扩展")]),e._v(" "),_("p",[e._v("关于上边内容的与实际工作的关联，我能想到的大概有如下几点。")]),e._v(" "),_("h3",{attrs:{id:"_1-端口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-端口"}},[e._v("#")]),e._v(" 1，端口")]),e._v(" "),_("p",[e._v("以往对这块儿的理解不够深入，以为"),_("code",[e._v("server")]),e._v("就启动一个"),_("code",[e._v("80")]),e._v("的服务，然后 client 直接请求 server 的这个端口就好了，没想过本机也要启动一个端口。不过话说回来，在理解了之后，就想到端对端通信肯定是要基于两个端口来的，不可能对方起一个 80 端口，自己就硬生生去请求数据了。")]),e._v(" "),_("p",[e._v("基于此，再扩展一下来看，我们可以通过如下命令查看到 CentOS 中默认情况下的临时端口分配范围：")]),e._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@eryajf ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),_("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cat")]),e._v(" /proc/sys/net/ipv4/ip_local_port_range\n"),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("32768")]),e._v("   "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("60999")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br")])]),_("p",[e._v("可以看到默认给出的范围是"),_("code",[e._v("32768-60999")]),e._v("，而面对一些实际生产环境，这个范围的端口可能是不够用的，如果不够用，那么超过这个范围的请求就会受到影响。于是，我们可以通过调整内核参数来进行修改：")]),e._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 添加如下配置")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"net.ipv4.ip_local_port_range=10240 65000"')]),e._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /etc/sysctl.conf\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 重载生效")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("sysctl")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br")])]),_("p",[e._v("正是基于如上知识的了解以及理解，这里才能够体会此处"),_("code",[e._v("内核参数调优")]),e._v("（特意把这个标红，是为了把这个高大上的词汇平凡化）的意义所在。")]),e._v(" "),_("h3",{attrs:{id:"_2-关注-tcp-状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-关注-tcp-状态"}},[e._v("#")]),e._v(" 2，关注 TCP 状态")]),e._v(" "),_("p",[e._v("正如前边提到的，以往在我听到"),_("code",[e._v("TIME_WAIT")]),e._v("之类的词汇，常常是有一些迷糊的，并不能准确的定位这个状态是发生在整个请求流程的哪一步了，包括"),_("code",[e._v("CLOST_WAIT")]),e._v("，"),_("code",[e._v("ESTABLISHED")]),e._v("等名词。于是，这次在整理本文时，我特地将各个状态在整个流程中标明，以帮助理解。")]),e._v(" "),_("p",[e._v("基于如上理解，也可以扩展一下，实际生产业务当中，有哪些状态是需要我们重点关注的呢？这些状态的数值究竟达到多少才是我们应该去处理的呢？处理的时候应该怎样操作配置才能对症下药呢？")]),e._v(" "),_("p",[e._v("事实上在过去半年多的工作当中，我们曾多次以"),_("code",[e._v("TCP")]),e._v("在"),_("code",[e._v("Prometheus")]),e._v("中的对应状态的波动，来倒推开发回头审视自己的代码中的 bug 的，以及我们自己对一些配置项的合理度。")]),e._v(" "),_("p",[e._v("这里举几个实际生产中的例子来进行说明，某一天，在进行监控巡检的时候，忽的看到有机器的 TCP 状态如下图所示：")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9029482a07c44b46.jpg",alt:"img"}})]),e._v(" "),_("p",[e._v("最开始看到的是当前的数值相当大，接着把时间跨度拉大，发现这一现象是从某一刻开始的，而并非一直这么大，后来开发一查代码，果然是在调用连接池的时候，忘记关闭了，如此一来，连接数自然就会越堆越多了。")]),e._v(" "),_("p",[e._v("还有一个例子是我针对一组服务器的 TIME_WAIT 状态过多地探析与研究，具体可以参考一下 "),_("a",{attrs:{href:"https://wiki.eryajf.net/pages/4147.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS 系统里 TCP 状态中 TIME_WAIT 超过 3 万的分析与建议"),_("OutboundLink")],1),e._v("这篇文章。")]),e._v(" "),_("p",[e._v("再有一次就是某组 web 服务的机器"),_("code",[e._v("ESTABLISHED")]),e._v("状态相当的多，高峰时几乎接近"),_("code",[e._v("四万")]),e._v("，如果不进行处理，如果某一天突然一大波流量进来，可能直接就占满了，从而系统无法处理超出的连接。")]),e._v(" "),_("p",[e._v("其实连接数过多无非也就那么几种情况，要么是真实连接的确多，要么是没有及时将连接关闭导致，因为是 web 服务，极有可能配置在 NGINX 那里控制着，果不其然，我看到了配置中的 "),_("code",[e._v("keepalive_timeout")]),e._v("定义的是"),_("code",[e._v("300")]),e._v("(5 分钟)，尽管这可能不算很长，但是针对请求量本身就很大的主机来说，显然也是不合理的。")]),e._v(" "),_("p",[e._v("于是我将这个情况与开发进行沟通，表明这个数值需要调小，是否会影响对应的实际业务 (针对一些特殊长链的场景，如果猛然调小超时时间，可能会带来其他不可知问题)，得到的回应是不会影响，于是果断将超时时间改为"),_("code",[e._v("60")]),e._v("(1 分钟)，没过多久，就在监控中看到了相应的效果。")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ccea7ee13cc35fbd.jpg",alt:"img"}})]),e._v(" "),_("p",[e._v("很多内容是在我们不经意之间串联着的，当我们一直奔忙在实际工作的任务时，可能有时候反而容易忽略一些简单的东西。")]),e._v(" "),_("h3",{attrs:{id:"_3-close-wait-过多"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-close-wait-过多"}},[e._v("#")]),e._v(" 3，CLOSE_WAIT 过多")]),e._v(" "),_("p",[e._v("如果服务器出现大量的"),_("code",[e._v("CLOSE_WAIT")]),e._v("，一般有以下几点思路：")]),e._v(" "),_("ul",[_("li",[e._v("通常这种现象多出现在中间件服务所在服务器上，因为应用程序在连接中间件的时候，就会涉及到 "),_("code",[e._v("Open")]),e._v(", "),_("code",[e._v("Close")]),e._v(" 这样的操作，如果开发者在编码时忘记 "),_("code",[e._v("Close")]),e._v("，或者代码有逻辑 bug，导致即便写了 close 也执行不到，那么就很容易出现 "),_("code",[e._v("CLOSE_WAIT")]),e._v("。")]),e._v(" "),_("li",[e._v("可以查看一下服务器资源是不是很紧张，比如 CPU 很忙，或者磁盘 IO 很高，从而导致 Close 方法无法正确执行。")])]),e._v(" "),_("p",[e._v("此问题，可详见此文的分析："),_("a",{attrs:{href:"https://plantegg.github.io/2021/04/06/%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%99%E4%B9%88%E5%A4%9ACLOSE_WAIT/",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么这么多CLOSE_WAIT"),_("OutboundLink")],1)]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("好了，这篇文字东扯葫芦西扯瓢地已经说了不少，该去做点饭填补一下空虚的肚皮了。")]),e._v(" "),_("h2",{attrs:{id:"_5-参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-参考"}},[e._v("#")]),e._v(" 5，参考")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://blog.csdn.net/qzcsu/article/details/72861891",target:"_blank",rel:"noopener noreferrer"}},[e._v("两张动图 - 彻底明白 TCP 的三次握手与四次挥手"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/jawil/blog/issues/14",target:"_blank",rel:"noopener noreferrer"}},[e._v("通俗大白话来理解 TCP 协议的三次握手和四次分手"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://www.jianshu.com/p/a62ed1bb5b20",target:"_blank",rel:"noopener noreferrer"}},[e._v("聊聊 tcpdump 与 Wireshark 抓包分析"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);