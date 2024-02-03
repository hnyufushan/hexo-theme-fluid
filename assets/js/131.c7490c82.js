(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{476:function(n,s,t){"use strict";t.r(s);var a=t(0),e=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("我们的应用日志，在打印的时候会读取一个环境变量，从而标注服务名称以及环境，当我们使用PHP7.4.x的时候，总是无法正常读取系统变量。")]),n._v(" "),s("p",[n._v("这个时候可以通过在 "),s("code",[n._v("/etc/opt/remi/php74/php-fpm.d/www.conf")]),n._v("文件中声明的方式进行读取：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("env[NAMESPACE] = prod\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("后来看到了一个资料：")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.php.net/manual/en/reserved.variables.environment.php",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.php.net/manual/en/reserved.variables.environment.php"),s("OutboundLink")],1)])]),n._v(" "),s("p",[n._v("这个时候也看到了在"),s("code",[n._v("www.conf")]),n._v("中有如下片段：")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" Pass environment variables like LD_LIBRARY_PATH. All "),s("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$VARIABLEs")]),n._v(" are taken from\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" the current environment.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" Default Value: clean "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("env")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[n._v("HOSTNAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[n._v("$HOSTNAME")]),n._v("\nenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[n._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" /usr/local/bin:/usr/bin:/bin\nenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("TMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" /tmp\nenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("TMPDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" /tmp\nenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("TEMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" /tmp\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])]),s("p",[n._v("默认情况下，会自动清理环境变量，这也是为何无法正常读取的原因。")]),n._v(" "),s("p",[n._v("那么在该配置最后添加如下参数：")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" 如果读不到系统环境变量,添加如下变量\nclear_env "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" no\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[n._v("然后重启PHP，便能够正常读取了。")]),n._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/de258d90915289e1.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);