(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{480:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("安装swoole扩展步骤如下：")]),s._v(" "),a("h3",{attrs:{id:"_1-下载包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载包。"}},[s._v("#")]),s._v(" 1，下载包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pecl.php.net/get/swoole-4.3.6.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-编译。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译。"}},[s._v("#")]),s._v(" 2，编译。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf swoole-4.3.6.tgz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" swoole-4.3.6\n/usr/local/php/bin/phpize\n./configure --with-php-config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/php/bin/php-config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-添加扩展。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加扩展。"}},[s._v("#")]),s._v(" 3，添加扩展。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /usr/local/php/etc/php.ini "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nextension=swoole.so\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4-重启验证。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-重启验证。"}},[s._v("#")]),s._v(" 4，重启验证。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl restart php-fpm\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$php")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" swoole\nswoole\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可能报错：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/local/php/lib/php/extensions/no-debug-non-zts-20170718/swoole: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" shared object file: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", /usr/local/php/lib/php/extensions/no-debug-non-zts-20170718/swoole.so "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("libhiredis.so.0.13: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" shared object file: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Unknown on line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("需要添加hiredis模块儿：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://rpms.remirepo.net/enterprise/7/remi/x86_64/hiredis-last-0.13.3-1.el7.remi.x86_64.rpm\n$ yum localinstall "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" hiredis-last-0.13.3-1.el7.remi.x86_64.rpm\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/lib64/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-snf")]),s._v(" libhiredis.so.0.13 libhiredis.so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后重启PHP，再验证就不会报那个错误了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);