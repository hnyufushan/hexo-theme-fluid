(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{423:function(t,e,_){"use strict";_.r(e);var v=_(0),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("腾讯云日志产品成本控制主要有如下几个维度：")]),t._v(" "),e("ul",[e("li",[t._v("减量：去掉没有意义的无效日志，只打印关键日志。")]),t._v(" "),e("li",[t._v("减周期：尽可能减少日志存储的时长。")]),t._v(" "),e("li",[t._v("转低频：低频相较于标准存储，总体可降低约 60% -- 70% 的成本。")]),t._v(" "),e("li",[t._v("慎开全文索引：全文索引会把所有日志全部索引一遍，并且这个索引过程产生的流量与存储的计量方式是未经压缩的日志，如果开启全文索引，则存储及流量往往会比不开的日志存储高出 4 -- 6 倍。")])]),t._v(" "),e("p",[t._v("我们需要共同严把成本控制的关口，结合业务实际使用场景，以及本文介绍的腾讯云日志产品使用的最佳实践，选择合适的接入方案。")]),t._v(" "),e("h2",{attrs:{id:"如何计费"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何计费"}},[t._v("#")]),t._v(" 如何计费")]),t._v(" "),e("p",[t._v("关于腾讯云日志产品的计费方式，官方文档介绍了很多内容，大致分为如下四个方面：")]),t._v(" "),e("ul",[e("li",[t._v("存储")]),t._v(" "),e("li",[t._v("流量")]),t._v(" "),e("li",[t._v("调用")]),t._v(" "),e("li",[t._v("分区")])]),t._v(" "),e("p",[t._v("根据我们实际生产中一个月两万多元的日志主题费用消耗来看，其中存储与流量的费用占了 99.73%, 所以你在考虑成本控制的时候，只需要关注这两块儿就可以了。")]),t._v(" "),e("p",[t._v("接下来的内容，也都是围绕着这两块儿进行的探索与分析，只要了解了产品的特性，以及使用场景的分析，那么用最低的成本发挥产品最大的价值，就不再是空谈。")]),t._v(" "),e("h2",{attrs:{id:"关于索引存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于索引存储"}},[t._v("#")]),t._v(" 关于索引存储")]),t._v(" "),e("p",[t._v("在"),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/614/45802",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云官方文档"),e("OutboundLink")],1),t._v("中，可以看到关于存储费用上的详细介绍。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/d09320ca6917fc3f.jpg",alt:""}})]),t._v(" "),e("p",[t._v("此处有两个概念需要我们了解，日志存储和索引存储。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("日志存储：表示原始日志存到 cls 所占用的存储大小，这个存储量配合 Loglistener(官方组件，默认有压缩机制)采集，会有压缩(压缩比通常会有 4 到 5 倍)，计价也是算的压缩后的存储费用。")])]),t._v(" "),e("li",[e("p",[t._v("索引存储：当我们给该主题的日志开启了索引功能之后，索引后的日志所占用的存储大小。这个存储计量方式是未压缩的日志。")])])]),t._v(" "),e("p",[t._v("但是索引存储中，也有三种情况可区分：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("方案")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("特性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("问题点")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("其他")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("全文索引")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("主题内所有日志内容都会被索引；可以通过任意关键字对日志进行全文检索。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("所有的日志都会被索引，且转为索引的是未压缩的源日志，因此全文索引占用存储会很大，费用高。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("除去尽量避免开启全文索引之外，还应该尽可能避免类似一个生产主题包含所有生产环境日志的这种情况，因为一个开启索引的操作，就会产生高昂的费用，且有不少都是非必要消耗。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("仅开启键值索引")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("以日志中键值进行索引，可以对日志进行有选择性的索引；检索只能通过键值对来进行；能够满足检索需求的情况下，减小日志的索引存储量。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持模糊的全文搜素，支持指定"),e("code",[t._v("键")]),t._v("对应的模糊及确定的值进行搜索。依赖日志结构相对清晰规范。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("关闭全文索引，通过键值索引进行模糊搜索的示例："),e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/f552abe799252db7.jpg",alt:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("全文索引和键值索引都开启")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("当开启了全文索引之后，则键值索引不收费，但是仍旧需要单独配置需要索引的键值对。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("费用高，仍需要配置键值索引，不推荐这种方案。")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("p",[t._v("因此，在使用索引功能的时候，比较建议使用"),e("code",[t._v("键值索引")]),t._v("进行配置，不建议直接开启全文索引。运维以及开发测试人员也应该熟悉了解并习惯键值索引的应用及检索方式。")]),t._v(" "),e("p",[t._v("接下来我们通过一个实际生产的主题为例，来具体计算分析一下不同应用策略对费用的影响。")]),t._v(" "),e("p",[t._v("如下截图是一个只使用了标准存储的日志主题，日志保留时长为30天，并且开启了全文索引。（注意这句描述中的要素，可以说把日志产品中不该踩的坑全部踩中，如果你看到这个描述，一下就能分析出问题所在，那或许本文如下内容你就不需要再看了。不要以为这样的情况不会出现在实际生产中，这正是我所遇到的现实。）")]),t._v(" "),e("p",[t._v("现在，我们现在只从存储维度来进行分析：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/1c17b7034a70cf18.jpg",alt:""}})]),t._v(" "),e("p",[t._v("因为存储空间在新日志写入与旧日志删除之间，一天波动不算十分大，因此以平均值角度来进行计算：")]),t._v(" "),e("blockquote",[e("p",[t._v("首先可以看到一个细节：")]),t._v(" "),e("ul",[e("li",[t._v("标准存储大约7867G，索引存储量大约44785G，两者相差5倍多")])]),t._v(" "),e("p",[t._v("接下来是具体的费用计算，根据"),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/614/45803",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云日志产品定价策略"),e("OutboundLink")],1),t._v("可得：标准存储的费用为"),e("code",[t._v("0.0115元/GB/日")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("标准日志存储费用："),e("code",[t._v("7867 * 0.0115 * 30 = 2714元")])]),t._v(" "),e("li",[t._v("标准索引存储费用："),e("code",[t._v("44785 * 0.0115 * 30 = 15450元")])]),t._v(" "),e("li",[t._v("核算下来，这个日志主题单在存储费用一项，每个月要花费："),e("code",[t._v("15450 + 2714 = 18164元")])])]),t._v(" "),e("p",[e("strong",[e("code",[t._v("当然，通常公司使用云产品的时候都会有一个折扣价，因为各家折扣不一，所以这里就以原始价格来进行计算。")])])])]),t._v(" "),e("p",[t._v("通过这个费用计算想说明一个问题："),e("strong",[e("code",[t._v("开启了全文索引的日志主题，每个月花费在标准索引上的费用会很高。")])])]),t._v(" "),e("p",[t._v("因此关于索引的核心表达就是："),e("strong",[e("code",[t._v("慎开全文索引，善用键值索引，切勿重建索引。")])])]),t._v(" "),e("blockquote",[e("p",[t._v("如果你们公司通过腾讯云子账号给开发者以及测试开通了cls检索日志的权限，那么这个授权当中，务必把重建索引的权限收回，这是一个非常贵的按钮。这个细节，会在流量主题详聊。")])]),t._v(" "),e("h2",{attrs:{id:"关于低频存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于低频存储"}},[t._v("#")]),t._v(" 关于低频存储")]),t._v(" "),e("p",[t._v("腾讯云日志产品在存储选型方面，提供了两种方案，标准存储与低频存储。"),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/614/60019",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("中有一个直观的对比图：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("功能点")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("低频存储")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("标准存储")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("索引建立")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓（只支持全文索引）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("上下文检索")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("快速分析")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("全文检索")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓（亿条数据 2 秒响应）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓（亿条数据 0.5 秒响应）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("键值检索")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("日志下载")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("SQL 分析")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("仪表盘")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("监控告警")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("投递到 COS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("投递到 Ckafka")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("投递到 ES")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("投递到 SCF")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("日志消费")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("数据加工")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])])])]),t._v(" "),e("p",[t._v("简单分析下实际应用场景中如何选择：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("标准存储：需要对日志配置告警与绘制大盘；不需要长期留存的日志；对查询响应有较高要求（亿条数据 0.5 秒响应）；有做 sql 分析的需求。")])]),t._v(" "),e("li",[e("p",[t._v("低频存储：对查询响应速度要求不高（亿条数据 2 秒响应）；不需要做 sql 分析；没有绘制仪表盘，配置监控告警的需求；仅有检索回溯需求的。（需要注意如果直接创建低频存储的日志主题，则日志保留时间必须大于等于7，虽然如此，同一主题的日志存留存留为7天的低频也仍然比存留1天的标准费用要低，以下是通过官方提供的价格计算器算的对比图）")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/73f2ffbc676e78dd.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("标准+低频：可以设置 7 天内的为标准存储，超过 7 天的转为低频。兼顾两个特性，成本控制比较有优势。（目前的问题是仅支持 7 天以上的标准存储数据转为低频。）对于必须要存储超过 7 天的日志，可以选择这个方案。如果标准存储小于等于7天，则无法选择该方案。")])])]),t._v(" "),e("p",[t._v("我们仍以上边的实际截图数据为例，简单看下不同选型方案的费用对比：")]),t._v(" "),e("blockquote",[e("p",[t._v("根据"),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/614/45803",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云日志产品定价策略"),e("OutboundLink")],1),t._v("可得：低频存储的费用为"),e("code",[t._v("0.0025元/GB/日")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("上边计算得知原方案的费用为 18164元每月。")])]),t._v(" "),e("p",[t._v("现在将主题配置改为7天前的日志沉降为低频存储。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("（标准存储：(7867*0.0115*7)+(7867*0.0025*23)） + （索引存储：(44785*0.0115*7)+(44785*0.0025*23)）==> 1085 + 6180 = 7265元")])]),t._v(" "),e("li",[t._v("两个方案每个月存储费用相差 "),e("code",[t._v("18164 - 7265 = 10899元")])])])]),t._v(" "),e("p",[t._v("目前来看，除了使用"),e("code",[t._v("标准+低频")]),t._v("的方案能够减少成本之外，一些业务日志，事实上可以直接放到低频存储当中，连标准 7 天转低频都不需要，这样能够对于成本的节约大概能到 "),e("code",[t._v("60%--70%")]),t._v("。")]),t._v(" "),e("p",[t._v("所以一定要"),e("strong",[t._v("创建专门存放低频日志的主题，这个主题可以开启全文索引")]),t._v("(否则就没法检索了)，经由业务方确认之后，接入进去，关于这个的实践，最后我们也会专门开一个子题来探索。")]),t._v(" "),e("h2",{attrs:{id:"关于流量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于流量"}},[t._v("#")]),t._v(" 关于流量")]),t._v(" "),e("p",[t._v("以上内容基本上都是在存储视角下功夫，其实还有一个维度容易被忽视那就是流量，流量优化大概有两个方向：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("降低原始无效日志的打印，从源头上控制日志量，是解决成本问题最根本的手段，需要时常应用这一手段，因为随着业务开发的迭代，无效日志一定也会在不知不觉中越来越多的。")])]),t._v(" "),e("li",[e("p",[t._v("还有一个比较重要的手段是：不开全文索引，开启全文索引之后，cls 会将原生日志转为索引的过程产生的流量，作为流量费的一部分，通常这个费用远高于日志传输写入的流量费用。以下是腾讯官方文档对这块儿的说明")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/442ca5cddf0177d5.jpg",alt:""}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("所以针对这一点，我们应该尽可能避免直接开启全文索引，而选择开启键值索引。")])]),t._v(" "),e("li",[e("p",[t._v("另外一个需要格外注意的点就是，一定注意，不要随意点击重建索引按钮，这个按钮会把历史日志重新索引一遍，如果你增加了一个字段，就点击重建索引，那这个操作会将历史保留的日志全部重新索引一遍，会以原日志大小产生索引转换流量费用，成本高昂。")])])]),t._v(" "),e("p",[t._v("官方文档对此概述为："),e("a",{attrs:{href:"https://cloud.tencent.com/document/product/614/74779",target:"_blank",rel:"noopener noreferrer"}},[t._v("重建索引会将指定时间范围内的原始日志重新构建一遍索引，将产生索引流量费用（不产生写流量费用及索引存储费用）。数据量较大时会消耗较长时间并产生较高的费用，建议您尽量避免频繁地修改索引配置并重建索引。"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"关于日志主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于日志主题"}},[t._v("#")]),t._v(" 关于日志主题")]),t._v(" "),e("p",[t._v("在腾讯云日志服务当中，日志主题是与 ES 中索引对等的一个概念，通常来说，一个索引应该对应一个应用，然后再以索引维度进行绘图聚合，以及监控告警规则的配置。相对应的，在腾讯云日志中，我们也应该一个主题对应一个应用，而不应该宽泛地将许多个应用的日志汇聚在一个主题之中。")]),t._v(" "),e("p",[t._v("虽然一个应用对应一个主题看起来配置相对麻烦，但是收益绝对大的一个事。")]),t._v(" "),e("p",[t._v("从腾讯云日志产品视角来看，一个应用日志采集的需求从业务方提交到运维手中，应该有如下几个考量点：")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("存储周期：")]),t._v("默认为 3 天，最多 7 天，超过 7 天的，一定需要配置沉降为低频存储。超过 15 天的，需做特殊说明。超过 30 天的，需要考虑转储到 cos。超过7天的，应该考虑直接选择低频存储。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("存储类型：")]),t._v("默认为低频存储，如有配置监控告警，绘制大盘，做 sql 分析(目前公司内没有用到)的需求，可选择标准存储，但是注意要与存储周期规则做结合。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("索引配置：")]),t._v("默认关闭全文索引，只配置键值索引，即支持根据指定键的关键字进行检索，如特别需要，再开全文索引，一定注意，全文索引要比键值索引成本贵 3--4 倍。")])])]),t._v(" "),e("p",[t._v("因此作为业务方，需要了解这些概念以及概念背后涉及的特性，从而在提交日志采集需求的时候，做到有的放矢。")]),t._v(" "),e("p",[t._v("针对日志主题，因为一个日志主题对应一个应用，就可以针对性应用实际场景，配置指定的键值索引，以及是否开启全文索引。")]),t._v(" "),e("h2",{attrs:{id:"关于日志分级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于日志分级"}},[t._v("#")]),t._v(" 关于日志分级")]),t._v(" "),e("p",[t._v("日志分级通常会与日志规范绑定分析，所以这里以两个维度来进行分析。")]),t._v(" "),e("h3",{attrs:{id:"标准的日志规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准的日志规范"}},[t._v("#")]),t._v(" 标准的日志规范")]),t._v(" "),e("p",[t._v("通常日志打印规范中，会以日志级别的维度来对日志进行分级，这自然没有什么问题，配置日志采集的时候，我们也可以通过不同分级的情况，来进行不同规则的配置，比如A公司所有应用的日志，约定的打印规范如下：")]),t._v(" "),e("ul",[e("li",[t._v("统一将日志写在 "),e("code",[t._v("/data/logs/")])]),t._v(" "),e("li",[t._v("按照"),e("code",[t._v("级别")]),t._v("分目录保存，或者分文件保存，这里就以分文件保存来示例：\n"),e("ul",[e("li",[t._v("user-api-info-2023-05-20.log")]),t._v(" "),e("li",[t._v("user-api-warn-2023-05-20.log")]),t._v(" "),e("li",[t._v("user-api-error-2023-05-20.log")])])])]),t._v(" "),e("p",[t._v("通常情况下，info日志一天可能会打印10G，warn与error可能会打印100M，info日志在一些问题排查追踪的时候，会用到上下文，有一定检索需求但不太有配置告警与绘制大盘的需求，而warn与error则有配置告警的需求。")]),t._v(" "),e("p",[t._v("这时就可以将日志使用以及配置规则进行如下设计：")]),t._v(" "),e("ul",[e("li",[t._v("创建标准主题：user-api-base-log\n"),e("ul",[e("li",[t._v("日志采集规则为："),e("code",[t._v("/data/logs/user-api-warn-*.log & /data/logs/user-api-error-*.log")])]),t._v(" "),e("li",[t._v("日志存储策略选择为标准存储")]),t._v(" "),e("li",[t._v("时间可以保留7天")]),t._v(" "),e("li",[t._v("然后添加告警规则。")])])]),t._v(" "),e("li",[t._v("创建低频主题：user-api-low-log\n"),e("ul",[e("li",[t._v("日志采集规则为："),e("code",[t._v("/data/logs/user-api-info-*.log")])]),t._v(" "),e("li",[t._v("日志存储策略选择为低频存储")]),t._v(" "),e("li",[t._v("时间可以保留7天")]),t._v(" "),e("li",[t._v("不影响全文检索与回溯。")])])])]),t._v(" "),e("p",[t._v("接下来我们可以算一下这种方案，与直接创建一个主题存所有日志的成本差异。为了便于计算，假设该服务有10个节点，则可得如下结果。")]),t._v(" "),e("p",[t._v("标准存储的费用：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/9a665d4da7bb728c.png",alt:""}})]),t._v(" "),e("p",[t._v("优化后的方案：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/d82ca54cf58a1b5b.png",alt:""}})]),t._v(" "),e("p",[t._v("可见，在满足实际使用需求的情况下，只需要简单一下日志的使用方式及采集规则，每个月就能省下："),e("code",[t._v("5979 - 3886 = 2090元")])]),t._v(" "),e("h3",{attrs:{id:"没有日志规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#没有日志规范"}},[t._v("#")]),t._v(" 没有日志规范")]),t._v(" "),e("p",[t._v("假如你们公司当下没有按照日志等级进行分类，那么至少可以与开发者一起约定出来两个规范，及标准日志与低频日志，日志打印方案大概如下：")]),t._v(" "),e("ul",[e("li",[t._v("统一将日志写在 "),e("code",[t._v("/data/logs/")])]),t._v(" "),e("li",[t._v("标准日志：user-api-base-2023-05-20.log")]),t._v(" "),e("li",[t._v("低频日志：user-api-low-2023-05-20.log")])]),t._v(" "),e("p",[t._v("然后运维侧按照如上的流程，创建base与low两个日志主题，配置不同的采集规则，同样可以达到降低成本的目的。")]),t._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),e("p",[t._v("成本优化这项工作不需要高深的技术，但是需要足够的耐心与洞察力，我的经验心得是：")]),t._v(" "),e("ul",[e("li",[t._v("多看官方文档，奥妙自在其中。")]),t._v(" "),e("li",[t._v("勤动手，点一点账单，做一做表格。")]),t._v(" "),e("li",[t._v("多分析，分析日志中不合理的打印，以及应用场景的不合理。")]),t._v(" "),e("li",[t._v("多交流，如果你遇到不合理的打印，就需要多与开发者交流，看看究竟是无心之举，还是有意的打印。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);