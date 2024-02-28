(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{858:function(s,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_0-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[s._v("#")]),s._v(" 0. 前言")]),s._v(" "),e("p",[s._v("简单来说vector扮演着类似logstash的角色，但有着比logstash强悍太多的性能、简单明了的配置文件、强大的数据处理函数、智能均衡kafka分区消费等等！下面请跟随笔者的脚步，对vector实践一番吧。")]),s._v(" "),e("h3",{attrs:{id:"_0-1-vector是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-vector是什么"}},[s._v("#")]),s._v(" 0.1 vector是什么")]),s._v(" "),e("p",[s._v("vector是什么？以下描述翻译自vector官网："),e("a",{attrs:{href:"https://vector.dev/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vector.dev"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Vector 是一种高性能的可观察性数据管道，可以收集、转换所有日志、指标和跟踪信息（ logs, metrics, and traces），并将其写到您想要的存储当中；Vector 可以实现显着的成本降低、丰富的数据处理和数据安全；且开源，比所有替代方案快 10 倍。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("简单来说，它扮演着类似logstash的角色，但有着比logstash强悍太多的性能、简单明了的配置文件、强大的数据处理函数、智能均衡kafka分区消费等等；在这些特性中，性能直接关乎成本，相信这是每一家公司都会重点关注的；而从官方介绍中我们已经可以窥探一二，以下是官网给出的一些实践数据：")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/e5d54b4a7ad287e2.png",alt:"企业微信截图_05a601d3-7b3f-4952-b647-8ec8af14bbb1"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/b52d9b068fab4013.png",alt:"image-20220322205250675"}})]),s._v(" "),e("h3",{attrs:{id:"_0-2-为什么用vector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-为什么用vector"}},[s._v("#")]),s._v(" 0.2 为什么用vector")]),s._v(" "),e("p",[s._v("如果说官方有自卖自夸之嫌，那么我给出自身实践的数据以供参考：")]),s._v(" "),e("p",[s._v("本人所在公司每天产生约15T的日志量，在公司日志架构中logstash起着这样的作用：从kafka中消费数据，然后进行清洗、格式转换，最终写入elasticsearch；公司一共有34台16c64g规格的logstash机器，然而这样的高配集群在晚高峰的时候会显得很吃力，每晚必定会报一堆kafka堵塞的告警；经过调研决定使用vector替换logstash，最终只用了10台16c16g的机器便完成替换，并且之后再也没有报过kafka堆积告警！")]),s._v(" "),e("h2",{attrs:{id:"_1-安装部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装部署"}},[s._v("#")]),s._v(" 1. 安装部署")]),s._v(" "),e("p",[s._v("官方提供了安装包、docker等多种安装方式，这里我们使用docker安装等方式来进行演示")]),s._v(" "),e("h3",{attrs:{id:"_1-1-使用docker-compose安装vector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-使用docker-compose安装vector"}},[s._v("#")]),s._v(" 1.1 使用docker-compose安装vector")]),s._v(" "),e("p",[s._v("准备好docker-compose.yaml文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("version: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\nservices:\n  vector:\n    image: timberio/vector:latest-alpine        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像")]),s._v("\n    container_name: vector                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名")]),s._v("\n    volumes:\n      - /data/vector/config/:/etc/vector/       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载配置文件")]),s._v("\n      - /etc/localtime:/etc/localtime           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跟宿主机时区保持一致")]),s._v("\n    ports:\n      - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9598")]),s._v(":9598                               "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# metrics信息暴露端口，后面会讲到")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    environment:                               # 开启DEBUG模式，这里不开启")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      VECTOR_LOG: debug")]),s._v("\n    entrypoint: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vector -c /etc/vector/*.toml -w /etc/vector/*.toml"')]),s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动命令")]),s._v("\n    restart: always\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("然后在docker-compose.yaml文件所在目录执行以下命令即可启动vector：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用 docker logs -f vector 可以看到一些信息，如果vector无法启动一般先从这里获取报错信息")]),s._v(" "),e("h3",{attrs:{id:"_1-2-vector配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-vector配置文件"}},[s._v("#")]),s._v(" 1.2 vector配置文件")]),s._v(" "),e("p",[s._v("在上述docker-compose.yaml中，我们挂载了本地准备好的配置文件，接下来我们便来讲一讲配置文件一般如何配置；在此之前我们大概讲一讲配置文件的组成，大概可以分为这么几个模块：")]),s._v(" "),e("p",[s._v("tips：注意，以下任何模块（source、transforms、sinks）都可以配置多个元素，但是要保证不能同名")]),s._v(" "),e("h3",{attrs:{id:"_1-2-1-来源-sources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-来源-sources"}},[s._v("#")]),s._v(" 1.2.1 来源（sources）")]),s._v(" "),e("p",[s._v("即vector的数据来源，它支持文件、kafka、http、各类metrics等等数据源，详细请看："),e("a",{attrs:{href:"https://vector.dev/docs/reference/configuration/sources/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vector.dev/docs/reference/configuration/sources/"),e("OutboundLink")],1),s._v("，各类数据源均可在文档中找到配置方式，这里我们使用kafka演示：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sources.kafka-nginx-error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# “数据源”名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),s._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类型")]),s._v("\nbootstrap_servers "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.xxx.xxx.xxx:9092,10.xxx.xxx.xxx:9092"')]),s._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kafka链接地址")]),s._v("\ngroup_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"consumer-group-name"')]),s._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 消费组id")]),s._v("\ntopics "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(prefix1|prefix2)-.+"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# topic，支持正则")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_1-2-2-变换-可选-transforms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-变换-可选-transforms"}},[s._v("#")]),s._v(" 1.2.2 变换[可选]（transforms）")]),s._v(" "),e("p",[s._v("如果原始数据足够完美无需任何处理，那么这一块可以忽略，但是实际上大部分情况下还是需要这一步的，这里我们讲几个最常用的“变换”，详细请看："),e("a",{attrs:{href:"https://vector.dev/docs/reference/configuration/transforms/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vector.dev/docs/reference/configuration/transforms/"),e("OutboundLink")],1)]),s._v(" "),e("h4",{attrs:{id:"_1-2-2-1-remap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-1-remap"}},[s._v("#")]),s._v(" 1.2.2.1 remap")]),s._v(" "),e("p",[s._v("remap在vector中使用VRL（Vector Remap Language，一种面向表达式的语言，旨在以安全和高性能的方式处理可观察性数据）来实现，这里我们看一看公司使用vector处理nginx错误日志的配置：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[transforms.remap-nginx-error]      # “变换”名称\n  type = \"remap\"        # 类型\n  inputs = [\"kafka-nginx-error\"]        # 输入，这里的输入自然是上一层的“来源”\nsource = '''        # 正式开始处理\n  . = parse_json!(.message)     # 首先将每一条错误日志解析成json，message的值就是从kafka中读取到的原始值\n  del(.@metadata)               # 删除Vector自动携带的一些信息\n  .parse = parse_nginx_log!(.message, \"error\")      # 解析nginx错误日志\n'''\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("可以看到，在上述处理过程中，只是用了parse_json、del、parse_nginx_log三个函数便将错误日志处理完成，实际上解析nginx错误日志是一个非常困难的事情，因为nginx错误日志的格式不固定，我们很难通过通用的步骤来指定字段、取值，而Vector自带来解析nginx错误日志函数，一行代码搞定！我们可以对比之前使用logstash时的处理方式：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('grok {\n    match => [\n        "message", "(?<time>\\d{4}/\\d{2}/\\d{2}\\s{1,}\\d{2}:\\d{2}:\\d{2})\\s{1,}\\[%{DATA:err_severity}\\]\\s{1,}(%{NUMBER:pid:int}#%{NUMBER}:\\s{1,}\\*%{NUMBER}|\\*%{NUMBER}) %{DATA:err_message}(?:,\\s{1,}client:\\s{1,}(?<client_ip>%{IP}|%{HOSTNAME}))(?:,\\s{1,}server:\\s{1,}%{IPORHOST:server})(?:, request: %{QS:request})?(?:, host: %{QS:client_ip})?(?:, referrer: \\"%{URI:referrer})?",\n        "message", "(?<time>\\d{4}/\\d{2}/\\d{2}\\s{1,}\\d{2}:\\d{2}:\\d{2})\\s{1,}\\[%{DATA:err_severity}\\]\\s{1,}%{GREEDYDATA:err_message}"]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("类似的处理函数还有很多，这里不一一列举！")]),s._v(" "),e("h4",{attrs:{id:"_1-2-2-2-filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-2-filter"}},[s._v("#")]),s._v(" 1.2.2.2 filter")]),s._v(" "),e("p",[s._v("很多时候从数据源采集过来的数据我们并不是全部都需要，filter顾名思义便是用来解决这一问题的，下面的配置也很好理解：包含spanID字段的数据才保留，不包含的丢弃")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[transforms.filter-jaeger-span]\n  type = "filter"\n  inputs = [ "remap-ssd" ]\n  condition = "exists(.spanID) == true"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_1-2-3-水槽-sinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-水槽-sinks"}},[s._v("#")]),s._v(" 1.2.3 水槽（sinks）")]),s._v(" "),e("p",[s._v("可以理解为数据往哪发送，它支持console（如果是docker启动直接打到docker log中）、elasticsearch、kafka、vector、http等等，详细请看："),e("a",{attrs:{href:"https://vector.dev/docs/reference/configuration/sinks/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vector.dev/docs/reference/configuration/sinks/"),e("OutboundLink")],1),s._v("，这里使用elasticsearch来演示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[sinks.elasticsearch-ssd]       # “水槽”名称\n  type = "elasticsearch"        # 类型\n  inputs = [ "remap-ssd" ]      # 输入，这里的输入是上一层的“变换”名称\n  endpoint = "http://10.xxx.xxx.xxx:9200"       # 输出的链接地址\n  bulk.index = "{{ project_name }}-{{ env }}-%Y-%m-%d"      # 索引名称，这里看到我们使用了日志当中的字段作为变量、以及日期来作为索引名称\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_2-实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-实践"}},[s._v("#")]),s._v(" 2. 实践")]),s._v(" "),e("p",[s._v("经过以上介绍，相信你已经可以搞定单个日志的vector配置，但是实际使用场景中，会有太多日志，而且各个部门的日志格式也不尽相同，所以实际使用场景中需要用到一些实用技巧，这里列举几个比较典型的")]),s._v(" "),e("h3",{attrs:{id:"_2-1-将结果输出到console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-将结果输出到console"}},[s._v("#")]),s._v(" 2.1 将结果输出到console")]),s._v(" "),e("p",[s._v("这是我们调试时的利器，我们经常需要掌握我们拿到了什么样的数据，或者了解我们将要写入下游的数据是否符合我们的预期：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[sinks.console]\n  type = "console"\n  inputs = [ "remap-ssd" ]\n  encoding.codec = "json"\t\t# 可选json 或者 text\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_2-2-多配置文件启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-多配置文件启动"}},[s._v("#")]),s._v(" 2.2 多配置文件启动")]),s._v(" "),e("p",[s._v("实际上聪明的你已经发现，在上文介绍docker-compose中，已经使用了该配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vector -c /etc/vector/*.toml -w /etc/vector/*.toml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这样我们便可以给多个日志配置相应的配置文件，最好使用git管理，部署时直接pull下来，然后所有配置文件一起启动即可；这里还是用到了-w参数，意思是关注配置文件中的更改，并相应地重新加载；再次提醒：即使是多个配置文件，在同一个vector实例中各阶段的命名也不能重名")]),s._v(" "),e("h3",{attrs:{id:"_2-3-多topic使用正则匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-多topic使用正则匹配"}},[s._v("#")]),s._v(" 2.3 多topic使用正则匹配")]),s._v(" "),e("p",[s._v("各个部门可能对应的统一过日志格式，他们的处理方式可能都一样，这样我们可以在“来源”中指定消费同一类topic")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("topics "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(prefix1|prefix2)-.+"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-4-索引使用日志中的字段值作为索引名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-索引使用日志中的字段值作为索引名称"}},[s._v("#")]),s._v(" 2.4 索引使用日志中的字段值作为索引名称")]),s._v(" "),e("p",[s._v("topic可以使用正则消费多个topic，但是我们不能把这些日志一起打到同一个索引中，如果各部门日志格式统一的话，可以使用日志中的字段值作为变量名称，使用变量的方式就是"+s._s(s.变量)+"，此外还可以使用%Y、%m、%d分别表示年、月、日，这是一种很好的日志索引管理方式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('bulk.index = "{{ project_name }}-{{ env }}-%Y-%m-%d"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-5-查看vector各任务的处理情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-查看vector各任务的处理情况"}},[s._v("#")]),s._v(" 2.5 查看vector各任务的处理情况")]),s._v(" "),e("p",[s._v("在vector启动之后，我们可能会关心各任务的处理情况，我们只需要在某个配置文件中（或者单独创建一个配置文件）加入以下配置，让vector启动时加载该配置文件，便能以命令行的方式实时查看各任务的处理情况")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[api]\n  enabled = true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("然后执行以下命令即可：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker exec -it vector sh\nvector top\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/b6aa8397dc561f96.png",alt:"企业微信截图_76c51776-ab4f-4251-8060-ff7a873e9025"}})]),s._v(" "),e("h3",{attrs:{id:"_2-6-vector更加详细的metrics指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-vector更加详细的metrics指标"}},[s._v("#")]),s._v(" 2.6 vector更加详细的metrics指标")]),s._v(" "),e("p",[s._v("vector提供了详细的自身指标供我们查看，不过截止目前，该功能还是测试版，我们可以先看看实际效果，在某个配置文件中（或者单独创建一个配置文件）加入以下配置，vector加载后便会启动9598端口，配置文件中我们指定了使用prometheus_exporter格式的输出，熟悉prometheus的你一定会发现返回的数据格式非常熟悉")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[sources.metrics]\n  type = "internal_metrics"\n  namespace = "vector"\n  scrape_interval_secs = 30\n\n[sinks.prometheus]\n  type = "prometheus_exporter"\n  inputs = [ "metrics" ]\n  address = "0.0.0.0:9598"\n  default_namespace = "service"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/8732eaa30b6255c4.png",alt:"企业微信截图_204132da-524c-4c2e-b579-34f7b26ca263"}})]),s._v(" "),e("h3",{attrs:{id:"_2-7-vector的自动均衡kafka消费-重要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-vector的自动均衡kafka消费-重要"}},[s._v("#")]),s._v(" 2.7 vector的自动均衡kafka消费[重要]")]),s._v(" "),e("p",[s._v("在使用vector之前，logstash经常会出现消费不均匀的情况，导致部分logstash节点负载高、另一部分节点却又很空闲，在使用了vector之后这个问题自动解决了，从下图可以看出每个vector实例自动消费了6个分区；其实这是一个非常有用的功能：在使用logstash时，由于它不能自动均衡消费，所以我们需要评估各个topic的数据量，然后给其分配机器，比如20台机器专门消费数据量大的topic，5台专门消费数据小的topic；但是这个数据量和消费能力其实都是我们根据以往的经验判断的，给topic分配的机器数量也是拍脑袋决定的，并不是非常准确；而vector就自然而然的解决了这个问题，我们无需考虑太多，无需区分机器，所有的机器都一起消费所有的topic！")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/0d509c677636995d.png",alt:"企业微信截图_f90414ab-6bb6-4ab7-a00a-022bd6770ff7"}})]),s._v(" "),e("h3",{attrs:{id:"_2-8-自适应并发请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-自适应并发请求"}},[s._v("#")]),s._v(" 2.8 自适应并发请求")]),s._v(" "),e("p",[s._v("在0.17.0版本后默认启用了自适应并发，这是一个智能、强大的功能，官方介绍请看"),e("a",{attrs:{href:"https://vector.dev/blog/adaptive-request-concurrency/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vector.dev/blog/adaptive-request-concurrency/"),e("OutboundLink")],1),s._v("，这里大致介绍一下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vector往下游写数据的速度非常快，这对下游如elasticsearch等接收器提出了重大挑战，因为这些服务无法始终像vector一样快速处理事件负载；在0.11之前的vector版本中，我们可以设置限速来解决这类问题，可是这又引发了另一个问题，限速作为后备是不错，但它会将您锁定在一个永久循环中：\n在这个恶性循环中，您需要不断避免两种结果：\n - 您将限制设置得太高，进而会压倒您的服务、损害系统可靠性，这时候就需要降低限制并重新评估了。\n - 将限制设置得太低并浪费资源，您的 Elasticsearch 集群可能能够处理比您提供的更多的并发性，这时候又需要重新评估了。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("为了解决这个问题，vector推出了自适应并发的功能，它会重点观察两件事：请求的往返时间 (RTT) 和 HTTP 响应代码（失败与成功），从而决策出一个最佳的速率！")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/70372ffe2cdb18d5.png",alt:"image-20220323132507606"}})]),s._v(" "),e("h3",{attrs:{id:"_2-9-性能效果对比-重要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-性能效果对比-重要"}},[s._v("#")]),s._v(" 2.9 性能效果对比[重要]")]),s._v(" "),e("p",[s._v("拿同一个topic、同一个消费组来做对比，consumergroup:mg topic:mg-sale-api 每晚都会告警kafka堆积，堆积量都在2000w以上")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/a7ab76807fd0f86a.png",alt:"企业微信截图_a8fb6b0f-214f-43dc-9595-76ea9404a5d8"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/47248c267af7b7d9.png",alt:"企业微信截图_72dd2104-dc8d-4e48-852d-8e5489490f92"}})]),s._v(" "),e("p",[s._v("在使用vector之后，晚高峰最大的未消费数只有不到5k，这还是节点从34台16c64g 缩容到 10台16c16g的结果")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/03/a0c5731079965c87.png",alt:"企业微信截图_e4427473-73b0-4722-905e-b45bb3b0eba3"}})]),s._v(" "),e("h2",{attrs:{id:"_3-小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-小结"}},[s._v("#")]),s._v(" 3. 小结")]),s._v(" "),e("p",[s._v("实践下来可以发现vector是一款功能强大、性能优秀的数据管道工具，但在国外火热的它却在国内使用的人数寥寥无几，相关资料也少之又少，不过笔者相信是金子总会发光的，相信以后vector会被更多人发掘，从而在更多的公司里发光发热！特此感谢微拍堂同事 -- 李秋阳在项目期间提供的指引以及鼎力支持！")])])}),[],!1,null,null,null);e.default=r.exports}}]);