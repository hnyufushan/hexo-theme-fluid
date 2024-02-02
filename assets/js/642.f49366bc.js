(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{986:function(s,t,_){"use strict";_.r(t);var a=_(0),v=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("CentOS7下安装mysql5.7")]),s._v(" "),t("h2",{attrs:{id:"安装yum-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装yum-repo"}},[s._v("#")]),s._v(" 安装YUM Repo")]),s._v(" "),t("h3",{attrs:{id:"_1、由于centos-的yum源中没有mysql-需要到mysql的官网下载yum-repo配置文件。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、由于centos-的yum源中没有mysql-需要到mysql的官网下载yum-repo配置文件。"}},[s._v("#")]),s._v(" 1、由于CentOS 的yum源中没有mysql，需要到mysql的官网下载yum repo配置文件。")]),s._v(" "),t("p",[s._v("下载命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2、然后进行repo的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、然后进行repo的安装"}},[s._v("#")]),s._v(" 2、然后进行repo的安装：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("rpm -ivh mysql57-community-release-el7-9.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行完成后会在/etc/yum.repos.d/目录下生成两个repo文件mysql-community.repo mysql-community-source.repo")]),s._v(" "),t("h2",{attrs:{id:"二、使用yum命令即可完成安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、使用yum命令即可完成安装"}},[s._v("#")]),s._v(" 二、使用yum命令即可完成安装")]),s._v(" "),t("p",[s._v("注意：必须进入到 /etc/yum.repos.d/目录后再执行以下脚本")]),s._v(" "),t("h3",{attrs:{id:"_1、安装命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装命令"}},[s._v("#")]),s._v(" 1、安装命令：")]),s._v(" "),t("p",[s._v("yum install mysql-server")]),s._v(" "),t("h3",{attrs:{id:"_2、启动msyql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、启动msyql"}},[s._v("#")]),s._v(" 2、启动msyql：")]),s._v(" "),t("p",[s._v("systemctl start mysqld #启动MySQL")]),s._v(" "),t("h3",{attrs:{id:"_3、获取安装时的临时密码-在第一次登录时就是用这个密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、获取安装时的临时密码-在第一次登录时就是用这个密码"}},[s._v("#")]),s._v(" 3、获取安装时的临时密码（在第一次登录时就是用这个密码）：")]),s._v(" "),t("p",[s._v("grep 'temporary password' /var/log/mysqld.log")]),s._v(" "),t("h3",{attrs:{id:"_4、倘若没有获取临时密码-则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、倘若没有获取临时密码-则"}},[s._v("#")]),s._v(" 4、倘若没有获取临时密码，则")]),s._v(" "),t("blockquote",[t("p",[s._v("4.1、删除原来安装过的mysql残留的数据")])]),s._v(" "),t("p",[s._v("rm -rf /var/lib/mysql")]),s._v(" "),t("blockquote",[t("p",[s._v("4.2.再启动mysql")])]),s._v(" "),t("p",[s._v("systemctl start mysqld #启动MySQL")]),s._v(" "),t("h2",{attrs:{id:"三、登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、登录"}},[s._v("#")]),s._v(" 三、登录：")]),s._v(" "),t("h3",{attrs:{id:"_1、方式一-已验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、方式一-已验证"}},[s._v("#")]),s._v(" 1、方式一（已验证）：")]),s._v(" "),t("p",[s._v("mysql -u root -p")]),s._v(" "),t("p",[s._v("然后输入密码（刚刚获取的临时密码）")]),s._v(" "),t("h3",{attrs:{id:"_2、方式二-未验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、方式二-未验证"}},[s._v("#")]),s._v(" 2、方式二（未验证）：")]),s._v(" "),t("p",[s._v("进入mysql数据库")]),s._v(" "),t("p",[s._v("root@test:/home# mysql -uroot -proot   <uroot是用户名，proot是密码>")]),s._v(" "),t("p",[s._v("如：")]),s._v(" "),t("p",[s._v("root@test:/home# mysql -root -XXXX")]),s._v(" "),t("h3",{attrs:{id:"_3、若登录不了-则进行以下配置-跳过登录验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、若登录不了-则进行以下配置-跳过登录验证"}},[s._v("#")]),s._v(" 3、若登录不了，则进行以下配置，跳过登录验证")]),s._v(" "),t("blockquote",[t("p",[s._v("3.1、重置密码的第一步就是跳过MySQL的密码认证过程，方法如下：")])]),s._v(" "),t("blockquote",[t("p",[s._v("3.2、vim /etc/my.cnf(注：windows下修改的是my.ini)")])]),s._v(" "),t("p",[s._v("在文档内搜索mysqld定位到[mysqld]文本段：")]),s._v(" "),t("p",[s._v("/mysqld(在vim编辑状态下直接输入该命令可搜索文本内容)")]),s._v(" "),t("p",[s._v("在[mysqld]后面任意一行添加“skip-grant-tables”用来跳过密码验证的过程，如下图所示：")]),s._v(" "),t("blockquote",[t("p",[s._v("3.3、保存文档并退出：")])]),s._v(" "),t("p",[s._v("#:wq")]),s._v(" "),t("blockquote",[t("p",[s._v("3.4、接下来我们需要重启MySQL：")])]),s._v(" "),t("h2",{attrs:{id:"四、登录成功后修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、登录成功后修改密码"}},[s._v("#")]),s._v(" 四、登录成功后修改密码")]),s._v(" "),t("h3",{attrs:{id:"_1、注意-这里会进行密码强度校验-密码设置时必须包含大小写字母、特殊符号、数字-并且长度大于8位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、注意-这里会进行密码强度校验-密码设置时必须包含大小写字母、特殊符号、数字-并且长度大于8位"}},[s._v("#")]),s._v(" 1、注意：这里会进行密码强度校验（密码设置时必须包含大小写字母、特殊符号、数字，并且长度大于8位）")]),s._v(" "),t("h3",{attrs:{id:"_2、如不满足以上条件则会报错-如下图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、如不满足以上条件则会报错-如下图"}},[s._v("#")]),s._v(" 2、如不满足以上条件则会报错，如下图：")]),s._v(" "),t("p",[s._v("密码策略问题异常信息：")]),s._v(" "),t("p",[s._v("ERROR 1819 (HY000): Your password does not satisfy the current policy requirements")]),s._v(" "),t("h3",{attrs:{id:"_3、解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、解决办法"}},[s._v("#")]),s._v(" 3、解决办法：")]),s._v(" "),t("p",[s._v("3.1、查看 mysql 初始的密码策略，")]),s._v(" "),t("p",[s._v("输入语句 “ SHOW VARIABLES LIKE 'validate_password%'; ” 进行查看，")]),s._v(" "),t("p",[s._v("如下图：")]),s._v(" "),t("p",[s._v("3.2、首先需要设置密码的验证强度等级，设置 validate_password_policy 的全局参数为 LOW 即可，")]),s._v(" "),t("p",[s._v("输入设值语句 “ set global validate_password_policy=LOW; ” 进行设值，")]),s._v(" "),t("p",[s._v("3.3、当前密码长度为 8 ，如果不介意的话就不用修改了，按照通用的来讲，设置为 6 位的密码，设置 validate_password_length 的全局参数为 6 即可，")]),s._v(" "),t("p",[s._v("输入设值语句 “ set global validate_password_length=6; ” 进行设值，")]),s._v(" "),t("p",[s._v("3.4、现在可以为 mysql 设置简单密码了，只要满足六位的长度即可，")]),s._v(" "),t("p",[s._v("输入修改语句 “ ALTER USER 'root'@'localhost' IDENTIFIED BY '123456'; ” 可以看到修改成功，表示密码策略修改成功了！！！")]),s._v(" "),t("p",[s._v("3.5、注：在默认密码的长度最小值为 4 ，由 大/小写字母各一个 + 阿拉伯数字一个 + 特殊字符一个，")]),s._v(" "),t("p",[s._v("只要设置密码的长度小于 3 ，都将自动设值为 4 ，")]),s._v(" "),t("p",[s._v("3.6、关于 mysql 密码策略相关参数；")]),s._v(" "),t("p",[s._v("1）、validate_password_length  固定密码的总长度；")]),s._v(" "),t("p",[s._v("2）、validate_password_dictionary_file 指定密码验证的文件路径；")]),s._v(" "),t("p",[s._v("3）、validate_password_mixed_case_count  整个密码中至少要包含大/小写字母的总个数；")]),s._v(" "),t("p",[s._v("4）、validate_password_number_count  整个密码中至少要包含阿拉伯数字的个数；")]),s._v(" "),t("p",[s._v("5）、validate_password_policy 指定密码的强度验证等级，默认为 MEDIUM；")]),s._v(" "),t("p",[s._v("关于 validate_password_policy 的取值：")]),s._v(" "),t("p",[s._v("LOW：只验证长度；")]),s._v(" "),t("p",[s._v("1/MEDIUM：验证长度、数字、大小写、特殊字符；")]),s._v(" "),t("p",[s._v("2/STRONG：验证长度、数字、大小写、特殊字符、字典文件；")]),s._v(" "),t("p",[s._v("6）、validate_password_special_char_count 整个密码中至少要包含特殊字符的个数；")]),s._v(" "),t("p"),s._v(" "),t("h2",{attrs:{id:"五、修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、修改密码"}},[s._v("#")]),s._v(" 五、修改密码")]),s._v(" "),t("h3",{attrs:{id:"_1、方式一-已验证-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、方式一-已验证-2"}},[s._v("#")]),s._v(" 1、方式一（已验证）：")]),s._v(" "),t("p",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY '@abcd123456';")]),s._v(" "),t("h3",{attrs:{id:"_2、方式二-未验证-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、方式二-未验证-2"}},[s._v("#")]),s._v(" 2、方式二（未验证）")]),s._v(" "),t("p",[s._v('set password=password("yourpassword");')]),s._v(" "),t("h2",{attrs:{id:"六、开启远程控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、开启远程控制"}},[s._v("#")]),s._v(" 六、开启远程控制")]),s._v(" "),t("p",[s._v("MySQL默认是没有开启远程控制的，必须添加远程访问的用户，即默认是只能自己访问，别的机器是访问不了的。")]),s._v(" "),t("h3",{attrs:{id:"_1、方式一-已验证-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、方式一-已验证-3"}},[s._v("#")]),s._v(" 1、方式一（已验证）：")]),s._v(" "),t("p",[s._v("1.1、连接服务器: mysql -u root -p")]),s._v(" "),t("p",[s._v("1.2、看当前所有数据库：show databases;")]),s._v(" "),t("p",[s._v("1.3、进入mysql数据库：use mysql;")]),s._v(" "),t("p",[s._v("1.4、查看mysql数据库中所有的表：show tables;")]),s._v(" "),t("p",[s._v("1.5、查看user表中的数据：select Host, User,Password from user;")]),s._v(" "),t("p",[s._v("1.6、修改user表中的Host:   update user set Host='%' where User='root';")]),s._v(" "),t("p",[s._v("说明： % 代表任意的客户端,可替换成具体IP地址。")]),s._v(" "),t("p",[s._v("1.7、最后刷新一下：flush privileges;")]),s._v(" "),t("p",[s._v('1.8、注意：一定要记得在写sql的时候要在语句完成后加上" ; "')]),s._v(" "),t("h3",{attrs:{id:"_2、方式二-未验证-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、方式二-未验证-3"}},[s._v("#")]),s._v(" 2、方式二（未验证）：")]),s._v(" "),t("p",[s._v("1、使用 grant 命令")]),s._v(" "),t("p",[s._v('grant all privileges on 数据库名.表名 to 创建的用户名(root)@"%" identified by "密码";')]),s._v(" "),t("p",[s._v("2、格式说明：")]),s._v(" "),t("p",[s._v("数据库名.表名 如果写成*.*代表授权所有的数据库 flush privileges; #刷新刚才的内容")]),s._v(" "),t("p",[s._v("如：")]),s._v(" "),t("p",[s._v("grant all privileges on "),t("em",[s._v(".")]),s._v(' to root@"113.123.123.1" identified by "123456789";')]),s._v(" "),t("p",[s._v("@ 后面是访问mysql的客户端IP地址（或是 主机名） % 代表任意的客户端，如果填写 localhost 为本地访问（那此用户就不能远程访问该mysql数据库了）")]),s._v(" "),t("h2",{attrs:{id:"七、其他配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、其他配置"}},[s._v("#")]),s._v(" 七、其他配置")]),s._v(" "),t("h3",{attrs:{id:"_1、设置安全选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、设置安全选项"}},[s._v("#")]),s._v(" 1、设置安全选项：")]),s._v(" "),t("p",[s._v("mysql_secure_installation")]),s._v(" "),t("h3",{attrs:{id:"_2、关闭mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、关闭mysql"}},[s._v("#")]),s._v(" 2、关闭MySQL")]),s._v(" "),t("p",[s._v("systemctl stop mysqld")]),s._v(" "),t("h3",{attrs:{id:"_3、重启mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、重启mysql"}},[s._v("#")]),s._v(" 3、重启MySQL")]),s._v(" "),t("p",[s._v("systemctl restart mysqld")]),s._v(" "),t("h3",{attrs:{id:"_4、查看mysql运行状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、查看mysql运行状态"}},[s._v("#")]),s._v(" 4、查看MySQL运行状态")]),s._v(" "),t("p",[s._v("systemctl status mysqld")]),s._v(" "),t("h3",{attrs:{id:"_5、设置开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、设置开机启动"}},[s._v("#")]),s._v(" 5、设置开机启动")]),s._v(" "),t("p",[s._v("systemctl enable mysqld")]),s._v(" "),t("h3",{attrs:{id:"_6、关闭开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、关闭开机启动"}},[s._v("#")]),s._v(" 6、关闭开机启动")]),s._v(" "),t("p",[s._v("systemctl disable mysqld")]),s._v(" "),t("h3",{attrs:{id:"_7、配置默认编码为utf8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、配置默认编码为utf8"}},[s._v("#")]),s._v(" 7、配置默认编码为utf8：")]),s._v(" "),t("p",[s._v("vi /etc/my.cnf #添加 [mysqld] character_set_server=utf8 init_connect='SET NAMES utf8'")]),s._v(" "),t("p",[s._v("其他默认配置文件路径：")]),s._v(" "),t("p",[s._v("配置文件：/etc/my.cnf 日志文件：/var/log//var/log/mysqld.log 服务启动脚本：/usr/lib/systemd/system/mysqld.service socket文件：/var/run/mysqld/mysqld.pid")]),s._v(" "),t("h3",{attrs:{id:"_8、查看版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、查看版本"}},[s._v("#")]),s._v(" 8、查看版本")]),s._v(" "),t("p",[s._v("select version();")])])}),[],!1,null,null,null);t.default=v.exports}}]);