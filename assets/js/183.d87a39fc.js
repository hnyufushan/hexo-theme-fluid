(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{529:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-容器的时间问题。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器的时间问题。"}},[e._v("#")]),e._v(" 1，容器的时间问题。")]),e._v(" "),a("p",[e._v("在测试环境已经全面使用 k8s 部署了，今天突然有一个测试同学，因为特殊场景，希望更改一下服务对应的容器时间，当时我心想，这不是挺简单的。")]),e._v(" "),a("p",[e._v("于是就来到容器当中，执行如下命令进行更改：")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@a-admin-f478dbd55-ddv7x /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# date")]),e._v("\nTue Jun "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":01:34 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@a-admin-f478dbd55-ddv7x /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# date -s 05/28")]),e._v("\ndate: cannot "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" date: Operation not permitted\nTue May "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" 00:00:00 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@a-admin-f478dbd55-ddv7x /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# date")]),e._v("\nTue Jun "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":01:48 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("报了一个"),a("code",[e._v("date: cannot set date: Operation not permitted")]),e._v("的错误，而且也没有更改成功。当时还不知道一些深层次的原因，于是开始了搜索之旅。")]),e._v(" "),a("p",[e._v("最先搜索到的，是解决 date 命令报错的问题：需要在启动容器的时候，加上"),a("code",[e._v("--cap-add SYS_TIME")]),e._v("的参数。")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-it")]),e._v(" --cap-add SYS_TIME "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" centos centos /bin/bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("简单说明一下这里添加的参数，深入的后边探讨。")]),e._v(" "),a("p",[e._v("在添加这些特殊权限的时候，可以有如下几种操作：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--cap-add：")]),e._v("给容器添加某个权限。")]),e._v(" "),a("li",[a("code",[e._v("--cap-drop：")]),e._v("去掉容器的某个权限。")]),e._v(" "),a("li",[a("code",[e._v("--privileged：")]),e._v("将所有的权限添加给容器。")]),e._v(" "),a("li",[a("code",[e._v("--cap-drop ALL：")]),e._v("去掉所有权限。")])]),e._v(" "),a("p",[e._v("然后再进入到容器里，重复执行上边改时间的操作，就能成功了。")]),e._v(" "),a("p",[e._v("因为目前使用 rancher 进行 k8s 的管理，因此挂载的方式如下，可点击"),a("code",[e._v("pod升级")]),e._v("，在"),a("code",[e._v("高级选项")]),e._v("的最后，有"),a("code",[e._v("增加内核")]),e._v("的选项，选中"),a("code",[e._v("SYS_TIME")]),e._v("，然后点击"),a("code",[e._v("升级")]),e._v("即可。")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6e0298bc00f142f2.jpg",alt:"image"}})]),e._v(" "),a("p",[e._v("事实上可能问题到这里，就已经没有问题了，但是接着测试同学发现，时间会自动又变成现在的时间了，以至于无法进行测试，我当时心想，难道说，k8s 自己有这样的时间修正机制么，，，")]),e._v(" "),a("p",[e._v("后来想到会不会是定时任务的因素，于是乎，来到了刚刚那个容器所在的主机之上，一看，果然有时间校准的定时任务，每分钟执行一次，于是注释掉，再次更改容器时间，这次才真正的生效，与此同时，发现了另外一个重大问题，那就是容器时间变更为 5 月 28 日之后，宿主机的时间也跟着变更了，让我一阵儿惶恐，尽管这是在测试环境，宿主机的时间更改可也不是闹着玩的呀")]),e._v(" "),a("p",[e._v("到后来才知道，原来上边操作的 "),a("code",[e._v("--cap-add SYS_TIME")]),e._v("是为了将宿主机的内核时间挂载进来与容器共享，因此容器时间更改了，宿主机时间也会跟着更改。说到底，还是对 docker 理解不深的缘故，但是借着这个机缘，倒是静下心来，看了如下的一些资料，让自己对容器技术有了新的一层认识。")]),e._v(" "),a("h2",{attrs:{id:"_2-docker-之-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-之-namespace"}},[e._v("#")]),e._v(" 2，docker 之 Namespace")]),e._v(" "),a("ul",[a("li",[e._v("内核为容器提供了两种技术"),a("code",[e._v("cgroup")]),e._v("和"),a("code",[e._v("namespace")]),e._v("，分别对容器进行"),a("code",[e._v("资源限制")]),e._v("和"),a("code",[e._v("资源隔离")]),e._v("。\n"),a("ul",[a("li",[e._v("容器本质是进程，"),a("code",[e._v("cgroup用来限制容器的资源使用量")]),e._v("，避免单个容器耗尽系统资源。")]),e._v(" "),a("li",[a("code",[e._v("namespace用来隔离容器与宿主机，以及不同的容器。")])])])])]),e._v(" "),a("p",[e._v("这里，就先针对 namespace 这个概念进行一下探析。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Namespace")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("系统调用参数")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("隔离内容")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("内核版本")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("UTS")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("CLONE_NEWUTS")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("主机名与域名")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2.6.19")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("IPC")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("CLONE_NEWIPC")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("信号量，消息队列和共享内存")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2.6.19")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("PID")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("CLONE_NEWPID")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("进程编号")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2.6.24")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Network")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("CLONE_NEWNET")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("网络设备，网络栈，端口等")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2.6.29")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Mount")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("CLONE_NEWNS")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("挂载点（文件系统）")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2.4.19")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("User")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("CLONE_NEWUSER")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("用户和用户组")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("3.8")])])])]),e._v(" "),a("p",[e._v("如上列出的这六项，是目前构建一个容器所默认赋予的基础能力，可以有别于原宿主机而在容器当中单独存在（当然还是基于宿主机），这个时候就能够理解，上边改时间的操作之所以失败，就是因为默认情况下，容器是没有 Time（时间）这个 Namespace 的，通过"),a("code",[e._v("--cap-add SYS_TIME")]),e._v("挂载也是引用了系统的内核时间，因此改了容器时间之后，系统时间跟着变化，也就不稀奇了。")]),e._v(" "),a("h3",{attrs:{id:"_1-uts-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-uts-namespace"}},[e._v("#")]),e._v(" 1，UTS namespace")]),e._v(" "),a("p",[e._v("UTS(UNIX Time-sharing System)namespace 提供了主机名与域名的隔离，这样每个 docke 容器就可以拥有独立的主机名和域名了，在网络上可以被视为一个独立的节点，而非宿主机上的一个进程。")]),e._v(" "),a("p",[e._v("docker 中，每个镜像基本都以自身所提供的服务名称来命名镜像的 hostname，且不会对宿主机产生任何影响，其原理就是使用了 UTS namespace。")]),e._v(" "),a("h3",{attrs:{id:"_2-ipc-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ipc-namespace"}},[e._v("#")]),e._v(" 2，IPC namespace")]),e._v(" "),a("p",[e._v("进程间通信 (Inter-Process Communication，IPC) 涉及的 IPC 资源包括常见的信号量、消息队列和共享内存。申请 IPC 资源就申请了一个全局唯一的 32 位 ID，所以 IPC namespace 中实际上包含了系统 IPC 标识符以及实现 POSIX 消息队列的文件系统。在同一个 IPC namespace 下的进程彼此可见，不同 IPC namespace 下的进程则互相不可见。")]),e._v(" "),a("p",[e._v("目前使用 IPC namespace 机制的系统不多，其中比较有名的有 PostgreSQL。Docker 当前也使用 IPC namespace 实现了容器与宿主机、容器与容器之间的 IPC 隔离。")]),e._v(" "),a("h3",{attrs:{id:"_3-pid-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-pid-namespace"}},[e._v("#")]),e._v(" 3，PID namespace")]),e._v(" "),a("p",[e._v("PID namespace 隔离非常实用，它对进程 PID 重新标号，即两个不同 namespace 下的进程可以有相同的 PID。每个 PID namespace 都有自己的计数程序。内核为所有的 PID namespace 维护了一个树状结构，最顶层的是系统初始时创建的，被称为 root namespace，它创建的心 PID namespace 被称为 child namespace(树的子节点)，而原先的 PID namespace 就是新创建的 PID namespace 的 parent namespace(树的父节点)。通过这种方式，不同的 PID namespace 会形成一个层级体系。所属的父节点可以看到子节点中的进程，并可以通过信号等方式对子节点中的进程产生影响。反过来，子节点却不能看到父节点 PID namespace 中的任何内容，由此产生如下结论。")]),e._v(" "),a("ul",[a("li",[e._v("每个 PID namespace 中的第一个进程 “PID 1”，都会像全通 Linux 中的 init 进程一样拥有特权，其特殊作用。")]),e._v(" "),a("li",[e._v("一个 namespace 中的进程，不可能通过 kill 或 ptrace 影响父节点或者兄弟节点中的进程，因为其他几点的 PID 在这个 namespace 没有任何意义。")]),e._v(" "),a("li",[e._v("如果你在新的 PID namespace 中重新挂载 / proc 文件系统，会发现其下只显示同属一个 PID namespace 中的其他进程。")]),e._v(" "),a("li",[e._v("在 root namespace 中看到所有的进程，并且递归包含所有子节点中的进程。到这里，读者可能已经联想到了一种在 Docker 外部监控运行程序的方法了，就是监控 Docker daemon 所在的 PID namespace 下的所有进程及子进程，在进行筛选即可。")])]),e._v(" "),a("h3",{attrs:{id:"_4-mount-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-mount-namespace"}},[e._v("#")]),e._v(" 4，mount namespace")]),e._v(" "),a("p",[e._v("mount namespace 通过隔离文件系统挂载点对隔离文件系统提供支持，它是历史上第一个 Linux namespace，所以标示位比较特殊，就是"),a("code",[e._v("CLONE_NEWNS")]),e._v("。隔离后，不同的 mount namespace 中的文件结构发生变化也互不影响。也可以通过 / proc/[pid]/mounts 查看到所有挂载在当前 namespace 中的文件系统，还可以通过 / proc/[pid]/mountstats 看到 mount namespace 中文件设备的统计信息，包括挂载文件的名字、文件系统的类型、挂载位置等。")]),e._v(" "),a("p",[e._v("进程在创建 mount namespace 时，会把当前的文件结构复制给新的 namespace。新 namespace 中的所有 mount 操作都只影响自身的文件系统，对外界不会产生任何影响。这种做法非常严格的实现了隔离，但对某些状况可能并不适用。比如父节点 namespace 中的进程挂载了一张 CD-ROM，这时子节点 namespace 复制的目录结构是无法自动挂载上这张 CD-ROM 的，因为这种操作会影响到父节点的文件系统。")]),e._v(" "),a("p",[e._v("一个挂载状态可能为以下一种：")]),e._v(" "),a("ul",[a("li",[e._v("共享挂载")]),e._v(" "),a("li",[e._v("从属挂载")]),e._v(" "),a("li",[e._v("共享 / 从属挂载")]),e._v(" "),a("li",[e._v("私有挂载")]),e._v(" "),a("li",[e._v("不可绑定挂载")])]),e._v(" "),a("p",[e._v("传播事件的挂载对象称为共享挂载；接收传播事件的挂载对象称为从属挂载；同时兼有前述两者特征的挂载对象为共享 / 从属挂载；既不传播也不接受事件的挂载对象称为私有挂载；另一种特殊的挂载对象称为不可绑定挂载，它们与私有挂载相似，但不允许执行绑定挂载，即创建 mount namespace 时这块文件对象不可被复制。")]),e._v(" "),a("h3",{attrs:{id:"_5-netword-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-netword-namespace"}},[e._v("#")]),e._v(" 5，netword namespace")]),e._v(" "),a("p",[e._v("network namespace 主要提供了关于网络资源的隔离，包括网络设备、IPv4 和 IPv6 协议栈、IP 路由表、防火墙、/proc/net 目录、/sys/class/net 目录、socket 等。一个物理的网络设备最多存在于一个 network namespace 中，可以通过创建 veth pair(虚拟网络设备对：有两端，类似管道，如果数据从一端传入另一端也能接受，反之亦然) 在不同的 network namespace 间创建通道，以达到通信目的。")]),e._v(" "),a("p",[e._v("也许你会好奇，在建立起 veth pair 之前，新旧 namespace 该如何通信呢？答案是"),a("code",[e._v("pipe")]),e._v("(管道)。以 Docker daemon 启动容器的过程为例，假设容器内初始化的进程称为 init。Docker daemon 在宿主机上负责创建这个 veth pair，把一段绑定到 docker0 网桥上，另一端介入新建的 network namespace 进程中。这个过程执行期间，Docker daemon 和 init 就通过 pipe 进行通信。具体来说，就是在 Docker deamon 完成 veth pair 的创建之前，init 在管道的另一端循环等待，直到管道另一端传来 Docker daemon 关于 veth 设备的信息，并关闭管道。init 才结束等待的过程，并把它的 “eth0” 启动起来。")]),e._v(" "),a("p",[e._v("与其他 namespace 类似，对 network namespace 的使用其实就是在创建的时候添加 CLONE_NEWNET 标识符位。")]),e._v(" "),a("h3",{attrs:{id:"_6-user-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-user-namespace"}},[e._v("#")]),e._v(" 6，user namespace")]),e._v(" "),a("p",[e._v("user namespace 主要隔离了安全相关的标识符 (identifier) 和属性 (attribute)，包括用户 ID、用户组 ID、root 目录、key(指密钥) 以及特殊权限。通俗地讲，一个普通用户的进程通过 clone()创建的新进程在新 user namespace 中可以拥有不同的用户和用户组。这意味着一个进程在容器外属于一个没有特权的普通用户，但是它创建的容器进程却属于拥有所有权限的超级用户，这个技术为容器提供了极大的自由。")]),e._v(" "),a("p",[e._v("user namespace 时目前的 6 个 namespace 中最后一个支持的，并且直到 linux 内核 3.8 版本的时候还未完全实现 (还有部分文件系统不支持)。user namespace 实际上并不算完全成熟，很多发行版担心安全问题，在编译内核的时候并未开启 USER_NS。Docker 在 1.10 版本中对 user namespace 进行了支持。只要用户在启动 Docker daemon 的时候制定了–user-remap，那么当用户运行容器时，容器内部的 root 用户并不等于宿主机的 root 用户，而是映射到宿主机上的普通用户。")]),e._v(" "),a("p",[e._v("Docker 不仅使用了 user namespace，还使用了在 user namespace 中涉及的 Capability 机制。从内核 2.2 版本开始，Linux 把原来和超级用户相关的高级权限分为不同的单元，称为 Capability。这样管理员就可以独立的对特定的 Capability 进行使用或禁止。Docker 同时使用 namespace 和 Capability，这很大程度上加强了容器的安全性。")]),e._v(" "),a("p",[e._v("这些似乎都是 docker 相关的基础性概念，过去也许并非没有看过，但都一带而过没有留下印象，若非今日时间问题这个机缘，恐怕自己也还一直不懂得这些原理，有时候学习就是如此，要看缘分。重要的是，如果缘分来了，不要错失！")]),e._v(" "),a("h2",{attrs:{id:"_3-如何单独更改容器时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何单独更改容器时间"}},[e._v("#")]),e._v(" 3，如何单独更改容器时间")]),e._v(" "),a("p",[e._v("后来经过朋友分享，发现可以通过曲线救国的方式更改容器的时间。")]),e._v(" "),a("p",[e._v("在github上有一个libfaketime项目,我们可以使用LD_PRELOAD这个环境变量使date连接这个项目编译的库来"),a("code",[e._v("fake")]),e._v("（欺骗）应")]),e._v(" "),a("p",[e._v("用，达到修改docker容器时间的目的。")]),e._v(" "),a("h3",{attrs:{id:"_1-先导试验。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-先导试验。"}},[e._v("#")]),e._v(" 1，先导试验。")]),e._v(" "),a("p",[e._v("通过如下操作可以获得依赖库：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/wolfcw/libfaketime.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" libfaketime/src/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n编译之后，将会获得对应的库文件。\n\nsrc/libfaketime.so.1\n\n同时也在系统之中生成了对应的文件。\n/usr/local/lib/faketime/libfaketime.so.1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("接着来启动一个容器操作一下看看。")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-itd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" aa "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".112.69/public/jdk:1.8\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" src/libfaketime.so.1 aa:/usr/local/lib\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("然后进入到容器之中引用并更改时间。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('sh-4.2# date\nThu Jun 20 15:35:18 CST 2019\n\nsh-4.2# export LD_PRELOAD=/usr/local/lib/libfaketime.so.1 FAKETIME="-10d"\n\nsh-4.2# date\nMon Jun 10 15:35:39 CST 2019\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("这样就实现了容器时间变更，而宿主机时间并不会变。")]),e._v(" "),a("p",[e._v("但是我个人测试的情况是，进入容器之后的确可以实现，但是退出容器重新进入之后，时间就又回到与宿主机一致的了。")]),e._v(" "),a("p",[e._v("所以如上操作是有一些问题的，问题不在于操作的过程有问题，而在于那个环境变量出了问题，当前声明没有问题，但是从新进入容器之后，声明的环境变量就没有了，这也是退出容器重新进入之后时间变成当前时间的原因。接下来将配置真正可以更改容器时间的方案。")]),e._v(" "),a("h3",{attrs:{id:"_2-正式操作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-正式操作。"}},[e._v("#")]),e._v(" 2，正式操作。")]),e._v(" "),a("p",[e._v("现在只是把流程步骤记录一下，实际生产应用的话，仅作为效果参考，不代表实际生产镜像配置最终效果。")]),e._v(" "),a("p",[e._v("准备内容：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ls\nDockerfile      libfaketime.tar     faketime.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("其中 "),a("code",[e._v("libfaketime.tar")]),e._v("就是我下载的源码打的包。 查看对应内容：")]),e._v(" "),a("p",[a("code",[e._v("faketime.sh")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#!/bin/bash\ntargetTime="$1"\nif [[ ${targetTime} == "" ]];then\n  echo "need a absolute time. eg: 2020-12-24 20:30:00"\n  exit;\nfi\ncurrent=`date +%s`\ntarget=`date -d "$targetTime" +%s`\nlet time=($target-$current)\nif [[ $time -gt 0 ]];then\n  time="+$time"\nfi\necho $time\necho $time > /etc/faketimerc\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[a("code",[e._v("Dockerfile")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Dockerizing CentOS7: Dockerfile for building CentOS images\n#需要一个基础镜像，这里从国内的daocloud下载，速度比较快。\nFROM       daocloud.io/library/centos:centos7.4.1708\n\n#维护者\nMAINTAINER eryajf <Linuxlql@163.com>\n\nADD libfaketime.tar /opt\nADD faketime.sh /mnt\n\nRUN yum -y install gcc automake autoconf libtool make gcc-c++ && cd /opt/libfaketime/src && make install && touch /etc/faketime\n\nENV TZ "Asia/Shanghai"\nENV LD_PRELOAD "/usr/local/lib/faketime/libfaketime.so.1" #重要的就是这个声明，是他，成就了时间穿梭的效果\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[e._v("构建一下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker build -t test .\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("启动验证：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker run -itd --name test test\n$ docker exec -it test bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("容器内验证：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@c23c65999a52 mnt]# date\nWed Aug  7 11:09:13 CST 2019\n\n[root@c23c65999a52 mnt]# ./faketime.sh "2020-12-24 20:30:00"\n+43696422\n\n[root@c23c65999a52 mnt]# date\nThu Dec 24 20:30:27 UTC 2020\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("退出容器重新进入，时间也是更改之后的时间了，如果想要让时间变成当前时间，可以删除 "),a("code",[e._v("/etc/faketimerc")]),e._v("文件，即可。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@443422a71e6e /]# rm -f /etc/faketimerc\n[root@443422a71e6e /]# date\nWed Aug  7 11:11:05 CST 2019\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("如此就集成了更改容器时间的功能了，这个功能，可以集成到基础容器当中去。")]),e._v(" "),a("h3",{attrs:{id:"_3-终稿版本。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-终稿版本。"}},[e._v("#")]),e._v(" 3，终稿版本。")]),e._v(" "),a("p",[e._v("最终个人自用的基础镜像小操作，首先把上边编译好的库文件拷贝出来，然后利用如下dockerfile构建一个基础镜像。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ cat Dockerfile\n# Dockerizing CentOS7: Dockerfile for building CentOS images\n#需要一个基础镜像，这里从国内的daocloud下载，速度比较快。\nFROM       daocloud.io/library/centos:centos7.4.1708\n\n#维护者\nMAINTAINER eryajf <Linuxlql@163.com>\n\nADD libfaketime.so.1 /usr/local/lib/\nADD faketime /usr/local/bin\n\nRUN yum -y install lrzsz wget curl vim net-tools rsync git && yum clean all\nENV TZ "Asia/Shanghai"\nENV LD_PRELOAD "/usr/local/lib/libfaketime.so.1"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[e._v("直接把库文件放在系统中，然后也把更改时间的脚本放到环境变量下，如此以来，直接运行faketime命令即可。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker build -t registry.cn-hangzhou.aliyuncs.com/eryajf/centos:7.5 .\ndocker push registry.cn-hangzhou.aliyuncs.com/eryajf/centos:7.5\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-延伸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-延伸"}},[e._v("#")]),e._v(" 4，延伸")]),e._v(" "),a("h3",{attrs:{id:"_1-参考地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-参考地址"}},[e._v("#")]),e._v(" 1，参考地址")]),e._v(" "),a("p",[e._v("http://t.cn/AiNlNxvO")]),e._v(" "),a("p",[e._v("http://t.cn/AiNjXtLt")]),e._v(" "),a("p",[e._v("http://t.cn/AiNjXCba")]),e._v(" "),a("h3",{attrs:{id:"_2-扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-扩展阅读"}},[e._v("#")]),e._v(" 2，扩展阅读")]),e._v(" "),a("p",[e._v("http://t.cn/AiNjaIP3")]),e._v(" "),a("p",[e._v("http://t.cn/AiNjH0cJ")])])}),[],!1,null,null,null);a.default=n.exports}}]);