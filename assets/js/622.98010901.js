(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{967:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("写了 chatgpt-dingtalk 项目，不少人对接钉钉很嗨皮，但是一个 issue 里有人提到能否对接到企业微信，于是我了解了一下，这里记录一下企业微信自建应用的一些细节及注意事项。")]),t._v(" "),s("p",[t._v("首先来说，钉钉中支持创建机器人类型的应用，然后给机器人配置回调，且这个机器人支持添加到群聊，然后通过艾特机器人发消息，回调给应用进行交互。")]),t._v(" "),s("p",[t._v("而企业微信则不支持上述这种模式，企业微信支持的是可以在管理后台创建一个应用，也可以给这个应用绑定回调地址，但是有一个问题是，这个应用只支持用户单独聊天，而不支持添加到群聊。不过单独聊天也有一定的应用场景，比如做一些审批的时候，是可以用到的，因此这里也把已经了解到的成果做一个记录。")]),t._v(" "),s("h2",{attrs:{id:"创建应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建应用"}},[t._v("#")]),t._v(" 创建应用")]),t._v(" "),s("p",[t._v("创建应用的流程比较简单，就不多赘述。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://work.weixin.qq.com/wework_admin/frame#index",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击链接"),s("OutboundLink")],1),t._v("访问企业微信的管理后台，然后在 "),s("code",[t._v("应用管理")]),t._v(" 栏 "),s("code",[t._v("创建应用")]),t._v("。")]),t._v(" "),s("p",[t._v("进入应用，点击接收消息的"),s("code",[t._v("设置 API 接收")]),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/06/e917209a33a521ce.png",alt:""}})]),t._v(" "),s("p",[t._v("进入回调地址配置页面：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/06/c14cc61fc0ffa751.png",alt:""}})]),t._v(" "),s("p",[t._v("此处来到第一个门槛，需要校验填入的 URL，否则会报一个 "),s("code",[t._v("openapi 回调地址请求不通过")]),t._v(" 而无法保存成功。")]),t._v(" "),s("p",[t._v("这里需要了解阅读的一些文档有：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://open.work.weixin.qq.com/wwopen/common/readDocument/40754",target:"_blank",rel:"noopener noreferrer"}},[t._v("企业内部开发配置域名指引"),s("OutboundLink")],1),t._v(" ：当然如果不是企业级应用，这篇文档可以先跳过。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.work.weixin.qq.com/document/10514",target:"_blank",rel:"noopener noreferrer"}},[t._v("开启接收消息"),s("OutboundLink")],1),t._v(" ：这个内容十分重要，它介绍了如何才能完成 URL 请求的验证。一堆参数，加密解密这里就不对赘述了，后边会直接给代码，来完成这里的校验。")])]),t._v(" "),s("p",[t._v("如上三个框的内容，第一个是填写我们的服务接口，后两个点击随机获取自动生成。")]),t._v(" "),s("p",[t._v("点击保存，企业微信会向 URL 发送一个 GET 请求，请求内容大概如下：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("http://8.136.215.57:8090/?msg_signature=ASDFQWEXZCVAQFASDFASDFSS&timestamp=13500001234&nonce=123412323&echostr=ENCRYPT_STR")])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("msg_signature")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("企业微信加密签名，msg_signature 结合了企业填写的 token、请求中的 timestamp、nonce 参数、加密的消息体")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("时间戳")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("nonce")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("随机数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("echostr")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("加密的字符串。需要"),s("a",{attrs:{href:"https://developer.work.weixin.qq.com/document/10514#12976/%E5%AF%86%E6%96%87%E8%A7%A3%E5%AF%86%E5%BE%97%E5%88%B0msg%E7%9A%84%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("解密得到消息内容明文"),s("OutboundLink")],1),t._v("，解密后有 random、msg_len、msg、CorpID 四个字段，其中 msg 即为消息内容明文")])])])]),t._v(" "),s("p",[t._v("我们要做的就是：")]),t._v(" "),s("ul",[s("li",[t._v("获取到这些参数")]),t._v(" "),s("li",[t._v("通过参数 msg_signature "),s("a",{attrs:{href:"https://developer.work.weixin.qq.com/document/10514#12976/%E6%B6%88%E6%81%AF%E4%BD%93%E7%AD%BE%E5%90%8D%E6%A0%A1%E9%AA%8C",target:"_blank",rel:"noopener noreferrer"}},[t._v("对请求进行校验"),s("OutboundLink")],1),t._v("，确认调用者的合法性。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.work.weixin.qq.com/document/10514#12976/%E5%AF%86%E6%96%87%E8%A7%A3%E5%AF%86%E5%BE%97%E5%88%B0msg%E7%9A%84%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("解密echostr"),s("OutboundLink")],1),t._v(" 参数得到消息内容(即 msg 字段)")]),t._v(" "),s("li",[t._v("在 1 秒内原样返回明文消息内容(不能加引号，不能带 bom 头，不能带换行符)")])]),t._v(" "),s("p",[t._v("这里我通过 go 启动一个简单的服务，来完成这个校验：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/gin-gonic/gin"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/sbzhu/weworkapi_golang/wxbizmsgcrypt"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tCorpId         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxx"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 企业微信 ID")]),t._v("\n\tToken          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxxxx"')]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加回调时自动生成的 Token")]),t._v("\n\tEncodingAESKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxxxxxxx"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加回调时自动生成的 EncodingAESKey")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取到请求参数")]),t._v("\n\t\tmsgSignature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg_signature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\ttimestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tnonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nonce"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\techostr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echostr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用企业微信官方提供的接口进行解析校验")]),t._v("\n\t\twxcpt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" wxbizmsgcrypt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewWXBizMsgCrypt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EncodingAESKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CorpId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wxbizmsgcrypt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XmlType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\techoStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cryptErr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" wxcpt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("VerifyURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msgSignature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nonce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echostr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" cryptErr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"verifyUrl fail"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cryptErr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"verifyUrl success echoStr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echoStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将解密出来的字符串返回出去")]),t._v("\n\t\tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echoStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8090"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br")])]),s("p",[t._v("服务在服务器启动之后，再次点击保存就能验证通过了。")]),t._v(" "),s("p",[t._v("本文暂时写到这里，以后再有需求，再进行深入探索。")])])}),[],!1,null,null,null);s.default=e.exports}}]);