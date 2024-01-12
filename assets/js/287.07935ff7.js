(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{631:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("正常情况下，tomcat 默认的程序会输出一大堆的日志，而这些日志，对日常运维来说，帮助并不大，反而徒增不少的烦人文件。")]),a._v(" "),s("p",[a._v("这些都可以通过配置给优化掉。")]),a._v(" "),s("h2",{attrs:{id:"_1-针对-logging-properties。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-针对-logging-properties。"}},[a._v("#")]),a._v(" 1，针对 logging.properties。")]),a._v(" "),s("p",[a._v("修改"),s("code",[a._v("conf/logging.properties")]),a._v("日志配置文件可以屏蔽掉部分的日志信息。")]),a._v(" "),s("p",[a._v("将 level 级别设置成 WARNING 就可以大量减少日志的输出，当然也可以设置成 OFF，直接禁用掉。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("可以直接用下边的内容替换掉原来的文件。如果也是tomcat8的话。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@node1 tomcat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cat")]),a._v(" conf/logging.properties\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Licensed to the Apache Software Foundation (ASF) under one or more")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# contributor license agreements.  See the NOTICE file distributed with")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# this work for additional information regarding copyright ownership.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# The ASF licenses this file to You under the Apache License, Version 2.0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# (the "License"); you may not use this file except in compliance with')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# the License.  You may obtain a copy of the License at")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#     http://www.apache.org/licenses/LICENSE-2.0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unless required by applicable law or agreed to in writing, software")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# distributed under the License is distributed on an "AS IS" BASIS,')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# See the License for the specific language governing permissions and")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# limitations under the License.")]),a._v("\n \n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("############################################################")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Handler specific properties.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Describes specific configuration info for Handlers.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("############################################################")]),a._v("\n \n1catalina.org.apache.juli.AsyncFileHandler.level "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" OFF\n1catalina.org.apache.juli.AsyncFileHandler.directory "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${catalina.base}")]),a._v("/logs\n1catalina.org.apache.juli.AsyncFileHandler.prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" catalina.\n \njava.util.logging.ConsoleHandler.level "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" OFF\njava.util.logging.ConsoleHandler.formatter "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" org.apache.juli.OneLineFormatter\n \n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("############################################################")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Facility specific properties.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Provides extra control for each logger.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("############################################################")]),a._v("\n \norg.apache.catalina.core.ContainerBase."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Catalina"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".level "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" OFF\norg.apache.catalina.core.ContainerBase."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Catalina"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".handlers "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 2localhost.org.apache.juli.AsyncFileHandler\n \norg.apache.catalina.core.ContainerBase."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Catalina"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("/manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".level "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" OFF\norg.apache.catalina.core.ContainerBase."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Catalina"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("/manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".handlers "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 3manager.org.apache.juli.AsyncFileHandler\n \norg.apache.catalina.core.ContainerBase."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Catalina"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("/host-manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".level "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" OFF\norg.apache.catalina.core.ContainerBase."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Catalina"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("/host-manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".handlers "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 4host-manager.org.apache.juli.AsyncFileHandler\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# For example, set the org.apache.catalina.util.LifecycleBase logger to log")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# each component that extends LifecycleBase changing state:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#org.apache.catalina.util.LifecycleBase.level = FINE")]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# To see debug messages in TldLocationsCache, uncomment the following line:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#org.apache.jasper.compiler.TldLocationsCache.level = FINE")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/57abd01725ac22fb.jpg",alt:"image"}})]),a._v(" "),s("h2",{attrs:{id:"_2-关闭-localhost-access-log-日志。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-关闭-localhost-access-log-日志。"}},[a._v("#")]),a._v(" 2，关闭 localhost_access_log 日志。")]),a._v(" "),s("p",[a._v("修改在 tomcat 的安装目录 conf 文件夹下 server.xml 里配置，将 AccessLogValve 注释掉。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("-- Valve "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("className")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"org.apache.catalina.valves.AccessLogValve"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("directory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"logs"')]),a._v("\n               "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost_access_log"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("suffix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".txt"')]),a._v("\n               "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("pattern")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%h %l %u %t "')]),a._v("%r"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" %s %b"')]),a._v(" / --"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("一般这段代码的位置就在配置的底部，注释掉。")]),a._v(" "),s("h2",{attrs:{id:"_3-管理-catalina-out。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-管理-catalina-out。"}},[a._v("#")]),a._v(" 3，管理 catalina.out。")]),a._v(" "),s("p",[a._v("这个文件是 tomcat 的启动日志，很多时候可以帮助我们运维，可以留下来。")]),a._v(" "),s("p",[a._v("如果需要关闭，则可以设置"),s("code",[a._v("bin/catalina.sh")]),a._v("文件：")]),a._v(" "),s("p",[a._v("搜索：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-z")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CATALINA_OUT")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CATALINA_OUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CATALINA_BASE")]),a._v('"')]),a._v("/logs/catalina.out\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("可以更改后边的输出路径为"),s("code",[a._v("/dev/null")]),a._v("，让启动日志从此无影无踪。")]),a._v(" "),s("p",[a._v("但是一般不建议关闭这条日志输出，而时间长了之后，这个文件又会非常大，可以通过定时任务的策略进行定期清空处理：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#clean the log")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" */4 * * * "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /usr/local/tomcat/logs/catalina.out\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);