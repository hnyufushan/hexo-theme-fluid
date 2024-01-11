(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{935:function(s,a,t){"use strict";t.r(a);var r=t(0),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("博客整站迁移，是一个玩博客的人绕不过去的事儿，这事儿其实挺简单的，但是不了解里头的门道的话，也会跳不少的坑。我就没少在网上的文章里跳坑，最后也没有找到一个高效好用的方式。不知道网上那些人的脑洞都是怎么长的。")]),s._v(" "),a("p",[s._v("首先说明一下，wordpress中数据库非常重要，至关重要，因此日常做好备份很有必要。")]),s._v(" "),a("p",[s._v("那么迁移的准备工作也就很明显了。")]),s._v(" "),a("h2",{attrs:{id:"_1-源站博客对应数据库的备份。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-源站博客对应数据库的备份。"}},[s._v("#")]),s._v(" 1，源站博客对应数据库的备份。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysqldump -uroot -p  $dbname > dbname.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后sz下来。放在Windows桌面别动。")]),s._v(" "),a("h2",{attrs:{id:"_2-博客站点wordpress的整个目录都拷下来。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-博客站点wordpress的整个目录都拷下来。"}},[s._v("#")]),s._v(" 2，博客站点wordpress的整个目录都拷下来。")]),s._v(" "),a("p",[s._v("我这里wordpress目录就叫wordpress，所以就此示例。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar cvf bak.tar.gz wordpress/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后也拷下来。")]),s._v(" "),a("h2",{attrs:{id:"_3-一些重要的配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-一些重要的配置。"}},[s._v("#")]),s._v(" 3，一些重要的配置。")]),s._v(" "),a("p",[s._v("nginx的配置文件。")]),s._v(" "),a("p",[s._v("mysql的配置文件。")]),s._v(" "),a("h2",{attrs:{id:"_4-在一个新的服务器上安装lnmp-我这里测试直接使用lnmp一键安装包来实验了。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-在一个新的服务器上安装lnmp-我这里测试直接使用lnmp一键安装包来实验了。"}},[s._v("#")]),s._v(" 4，在一个新的服务器上安装LNMP，我这里测试直接使用LNMP一键安装包来实验了。")]),s._v(" "),a("p",[s._v("注意版本要与源服务器的版本保持一致。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nginx -V mysql -V php -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5-注意新安装的lnmp最好也配置了phpmyadmin-方便接下来的操作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-注意新安装的lnmp最好也配置了phpmyadmin-方便接下来的操作。"}},[s._v("#")]),s._v(" 5，注意新安装的LNMP最好也配置了phpmyadmin，方便接下来的操作。")]),s._v(" "),a("p",[s._v("如果一切都准备好了，那么可以在新服务器进行复原了。")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("code",[s._v("注意")]),s._v("，如下的成功操作，有赖于这样一个条件，那就是迁移前后的所有配置都是保持一致的，这个很重要，也许有人想说，自己就是想把原来的站点一丝不差的搬移到新的服务器上的，那好，直接往下看就行了。")]),s._v(" "),a("p",[s._v("也有人可能想在迁移的过程中，更换了域名啊什么的，这就复杂了，暂且不表。")]),s._v(" "),a("h2",{attrs:{id:"_1-访问本机phpmyadmin-然后登陆上去。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-访问本机phpmyadmin-然后登陆上去。"}},[s._v("#")]),s._v(" 1，访问本机phpmyadmin，然后登陆上去。")]),s._v(" "),a("p",[s._v("创建数据库，并将，刚刚放在Windows桌面的数据库文件导入进来。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/32547be755ff5499.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("导入成功之后这边的操作就可以停下了，去服务器上。")]),s._v(" "),a("h2",{attrs:{id:"_2-把刚刚的wordpress这个压缩包导入到新的服务器。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-把刚刚的wordpress这个压缩包导入到新的服务器。"}},[s._v("#")]),s._v(" 2，把刚刚的wordpress这个压缩包导入到新的服务器。")]),s._v(" "),a("p",[s._v("因为一键安装包的nginx默认读取目录是/home/wwwroot目录，所以wordpress也传到这里来，在nginx配置的vhost里加一条bolg.conf的配置（此处可拷贝之前老服务器的配置，如果变更前后是一致的的话）。")]),s._v(" "),a("p",[s._v("然后去到wordpress里更改数据库的连接情况：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim ./wordpress/wp-config.php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8d1e8220028aa38a.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("将上边的配置与新服务器环境中设置的对应。")]),s._v(" "),a("p",[s._v("然后启动所有服务，去访问博客，就发现与搬家之前一模一样的博客展现出来了。")]),s._v(" "),a("h2",{attrs:{id:"后期啰嗦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后期啰嗦"}},[s._v("#")]),s._v(" 后期啰嗦")]),s._v(" "),a("p",[s._v("一开始自己也踩了不少的坑，最后发现竟然是如此的简单，当时因为是测试，为了与自己的线上作出区别，所以在nginx中配置了其他的域名，然后就各种状况都来了。")]),s._v(" "),a("p",[s._v("更改成其他域名之后，本地写了hosts进行测试，只有首页可以访问到，点击一下别的东西，也都会跳转到原来域名上去，这是因为这些配置，都写在了数据库当中。这些在phpmyadmin中，去到刚刚导入的数据库文件，options当中存储着。要想在这个过程中更换域名，还是有一些难度的，网上看过一个两个方法，试了也都不好用，要真有更换的需求的话，还是自己认真了解其中的配置最好吧。")])])}),[],!1,null,null,null);a.default=e.exports}}]);