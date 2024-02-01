(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{581:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("我维护的开源项目 "),t("a",{attrs:{href:"https://github.com/eryajf/Thanks-Mirror",target:"_blank",rel:"noopener noreferrer"}},[s._v("Thanks-Mirror"),t("OutboundLink")],1),s._v(" 整理记录了各个包管理器，系统镜像，以及常用软件的好用镜像，随着项目越来越完善，到今天，已经累计整理链接 1091 个，随着时间推移，一些国内镜像可能会停止维护，如何自定感知那些已经失效的链接，就是一个需要考虑的事情了。")]),s._v(" "),t("p",[s._v("本文就介绍一个有意思的小动作，它的主要功能是可以自动扫描仓库内的链接，然后对链接进行请求，根据自定义的规则，自动抛出异常的链接，然后将这些链接创建到issue当中。")]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("所用Actions："),t("a",{attrs:{href:"https://github.com/lycheeverse/lychee-action",target:"_blank",rel:"noopener noreferrer"}},[s._v("lycheeverse/lychee-action"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，不过官方文档介绍的方式并不是很灵活，官方是借助其开源的项目："),t("a",{attrs:{href:"https://github.com/lycheeverse/lychee",target:"_blank",rel:"noopener noreferrer"}},[s._v("lychee"),t("OutboundLink")],1),s._v("来完成检查，本文将针对这个开源项目拓展的配置文件，来实现更加丰富的能力。")]),s._v(" "),t("p",[s._v("首先添加Actions配置文件，e.g. "),t("code",[s._v(".github/workflows/links-check.yml")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 🔗 检查链接\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("repository_dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" main\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("schedule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cron")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"00 18 * * *"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("linkChecker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Link Checker\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" lychee\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" lycheeverse/lychee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@v1.5.1\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("GITHUB_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("secrets.GITHUB_TOKEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check all markdown and html files in repo (default)")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("config ./.github/config/lychee.toml README.md\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use json as output format (instead of markdown)")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" markdown\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use different output file path")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("output")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./lychee/out.md\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Create Issue From File\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" steps.lychee.outputs.exit_code "),t("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!=")]),s._v(" 0\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("evans/create"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("issue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("from"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("file@v3\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 🔗 链接检查报告\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("content-filepath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./lychee/out.md\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" report"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" automated issue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("blockquote",[t("p",[s._v("简单介绍这个动作：当有内容提交，以及每天18点会自动运行（当然也可以手动运行），自动检测 "),t("code",[s._v("README.md")]),s._v("文件中的所有链接，使用配置文件 "),t("code",[s._v("./.github/config/lychee.toml")]),s._v("，结果输出到 "),t("code",[s._v("./lychee/out.md")]),s._v("，输出格式为Markdown，如果全部检查通过，则不会有任何动作，如果检查失败，则会自动创建issue。")])]),s._v(" "),t("p",[s._v("上边内容提到了 "),t("code",[s._v(".github/config/lychee.toml")]),s._v("，这里列出我使用的配置文件：")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#############################  Display  #############################")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Verbose program output")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("verbose")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show progress")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("progress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Path to summary output file.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# output = "report.md"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#############################  Cache  ###############################")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enable link caching. This can be helpful to avoid checking the same links on")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# multiple runs.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("cache")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#############################  Runtime  #############################")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Number of threads to utilize.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Defaults to number of cores available to the system if omitted.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("threads")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Maximum number of allowed redirects [default: 10]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("max_redirects")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Maximum number of concurrent network requests [default: 128]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("max_concurrency")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#############################  Requests  ############################")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User agent to send with each request")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("user_agent")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"curl/7.83.1"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Website timeout from connect to response finished")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Minimum wait time in seconds between retries of failed requests.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("retry_wait_time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Comma-separated list of accepted status codes for valid links.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Omit to accept all response types.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#accept = "text/html"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Proceed for server connections considered insecure (invalid TLS)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("insecure")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Comma-separated list of accepted status codes for valid links.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Don't work as of yet until https://github.com/lycheeverse/lychee/issues/644")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# is resolved")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("accept")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("429")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Only test links with the given scheme (e.g. https)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Omit to check links with any scheme")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#scheme = "https"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Request method")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("method")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"get"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Custom request headers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("headers")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#############################  Exclusions  ##########################")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Exclude URLs from checking (supports regex)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# balena base images account for ~1400 request to GitHub, they are")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# omitted to avoid being rate limited.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The openvpn link is omitted as trying to auto chek it results in")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a 503, even when it is available.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The meta-balena link is included in parameterized scripts and as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a result will always produce a failing link.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The myorg/myapp link is a dummy address used in an example contract so is omitted.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The balena/resin API urls will not respond to unauthenticated requests")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The gstatic and googleapis links go 404 and are excluded ever since we started checking HTML")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# balenaCLI linux binary URLs always error out since they are generated on run time only")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# File URLs are excluded as they aren't checked properly and error out")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("exclude")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"developer.aliyun.com/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mirrors.ustc.edu.cn/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf.net/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rsproxy.cn/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirrors.cloud.tencent.com/go/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://maven.aliyun.com/nexus/content/groups/public/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Exclude URLs contained in a file from checking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("exclude_file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("include_verbatim")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Exclude all private IPs from checking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Equivalent to setting `exclude_private`, `exclude_link_local`, and `exclude_loopback` to true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("exclude_all_private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# # Exclude private IP address ranges from checking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exclude_private = false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# # Exclude link-local IP address range from checking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exclude_link_local = false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# # Exclude loopback IP address range and localhost from checking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exclude_loopback = false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Exclude all mail addresses from checking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("exclude_mail")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br")])]),t("p",[s._v("其中大部分内容都通用，可能需要调整的两个内容是："),t("code",[s._v("accept")]),s._v("与 "),t("code",[s._v("exclude")]),s._v("，一开始我检查的时候，发现所有 "),t("code",[s._v("developer.aliyun.com")]),s._v("在GitHub Actions中访问都是网络失败，猜测应该是ali限制了外部访问，这也能理解，因此就把整个域名全部加到排除的行列了。")]),s._v(" "),t("p",[s._v("总之检查结果需要自己进行一些过滤分析，然后再结合配置文件的含义进行调整。")]),s._v(" "),t("h2",{attrs:{id:"pr自动检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pr自动检查"}},[s._v("#")]),s._v(" PR自动检查")]),s._v(" "),t("p",[s._v("如上action并没有对PR进行检查，你还可以再添加一个动作，专门用于检测PR提交上来的链接：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("$ cat link"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("check"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pr.yml\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Links (Fail Fast)\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pull_request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("linkChecker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Link Checker\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" lycheeverse/lychee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@v1.5.1\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check all markdown and html files in repo (default)")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("config ./.github/config/lychee.toml README.md\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use json as output format (instead of markdown)")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" markdown\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use different output file path")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("output")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./lychee/out.md\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Fail action on broken links")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("GITHUB_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("secrets.GITHUB_TOKEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("这样当pr时有异常的链接，将会检测失败，以前置预检一些可能是坏的链接合并到项目。")]),s._v(" "),t("h2",{attrs:{id:"效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[s._v("#")]),s._v(" 效果")]),s._v(" "),t("p",[s._v("检测通过之后的效果如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/08/6553b783d2d157ca.png",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);