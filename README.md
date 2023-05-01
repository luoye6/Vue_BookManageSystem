## ☀️新手必读

+ 本项目拥有完整的API后台接口文档（文尾)(重点⭐)
+ 项目部署视频正在录制
+ 如果项目对您有所帮助，可以Star⭐一下，受到鼓励的我会继续加油。
+ [项目在线演示地址](https://abc.xiaobaitiao.club/)
+ [项目前端地址](https://gitee.com/falle22222n-leaves/vue_-book-manage-system)
+ [项目后端地址](https://gitee.com/falle22222n-leaves/vue_-book-manage-system_backend)
+ [项目部署视频](https://www.bilibili.com/video/BV1314y1Z7SS/?pop_share=1&vd_source=e40a9464b71684502f289cff3f51514f)

## ☀️技术栈介绍

### ☃️前端主要技术栈

| 技术                         | 作用                                                         | 版本                                                 |
| ---------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| Vue                          | 提供前端交互                                                 | 2.6.14                                               |
| Vue-Router                   | 路由式编程导航                                               | 3.5.1                                                |
| Element-UI                   | 模块组件库，绘制界面                                         | 2.4.5                                                |
| Axios                        | 发送ajax请求给后端请求数据                                   | 1.2.1                                                |
| core-js                      | 兼容性更强，浏览器适配                                       | 3.8.3                                                |
| swiper                       | 轮播图插件（快速实现)                                        | 3.4.2                                                |
| vue-baberrage                | vue弹幕插件(实现留言功能)                                    | 3.2.4                                                |
| vue-json-excel               | 表格导出Excel                                                | 0.3.0                                                |
| html2canvas+jspdf            | 表格导出PDF                                                  | 1.4.1 2.5.1                                          |
| node-polyfill-webpack-plugin | webpack5中移除了nodejs核心模块的polyfill自动引入             | 2.0.1                                                |
| default-passive-events       | **Chrome** 增加了新的事件捕获机制 **Passive Event Listeners**（被动事件侦听器) | 让页面滑动更加流畅，主要用于提升移动端滑动行为的性能 |
| nprogress                    | 发送请求显示进度条(人机交互友好)                             | 0.2.0                                                |
| echarts                      | 数据转图标的好工具(功能强大)                                 | 5.4.1                                                |
| less lessloader              | 方便样式开发                                                 | 4.1.3 11.1.0                                         |

### ☃️后端主要技术栈

| 技术及版本                         | 作用                                                         | 版本                              |
| ---------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| SpringBoot                         | 应用开发框架                                                 | 2.7.8                             |
| JDK                                | Java 开发包                                                  | 1.8                               |
| MySQL                              | 提供后端数据库                                               | 8.0.23                            |
| MyBatisPlus                        | 提供连接数据库和快捷的增删改查                               | 3.5.1                             |
| SpringBoot-Configuration-processor | 配置处理器 定义的类和配置文件绑定一般没有提示，因此可以添加配置处理器，产生相对应的提示. |                                   |
| SpringBoot-Starter-Web             | 后端集成Tomcat MVC                                           | 用于和前端连接                    |
| SpringBoot-starter-test            | Junit4单元测试前端在调用接口前，后端先调用单元测试进行增删改查，注意Junit4和5的问题，注解@RunWith是否添加 |                                   |
| Lombok                             | 实体类方法的快速生成 简化代码                                |                                   |
| mybatis-plus-generator             | 代码生成器                                                   | 3.5.1                             |
| MyBatisX                           | MyBatisPlus插件直接生成mapper,实体类,service                 |                                   |
| jjwt                               | token工具包                                                  | 0.9.0                             |
| fastjson                           | 阿里巴巴的json对象转化工具                                   | 1.2.83                            |
| hutool                             | hutool工具包(简化开发工具类)                                 | [文档](https://hutool.cn/docs/#/) |

## ☀️项目简介

+ 主要使用Vue2和SpringBoot2实现
+ 项目权限控制分别为：用户借阅，图书管理员，系统管理员
+ 开发工具：IDEA2022.1.3(真不推荐用eclipse开发，IDEA项目可以导出为eclipse项目，二者不影响，但需要自己学教程) 
+ [IDEA->Eclipse](https://blog.csdn.net/HD202202/article/details/128076400)
+ [Eclipse->IDEA](https://blog.csdn.net/q20010619/article/details/125096051)

+ 学校老师硬性要求软件的话，还是按要求来。可以先问一下是否可以选择其他软件开发。
+ 用户账号密码：  相思断红肠 123456
+ 图书管理员账号密码:   admin 123456
+ 系统管理员账号密码:   root 123456
+ [前端样式参考](https://gitee.com/mingyuefusu/tushuguanlixitong)  感谢原作者**明月复苏**

+ 遇到交互功能错误，或者页面无法打开，请用开发者工具F12查看请求和响应状态码情况，当然可能小白不懂，那也没关系，可以加我**QQ：909088445**。白天上课，晚上有空才能回答，感谢体谅！⭐⭐⭐

## ☀️项目详细介绍（亮点)

+ 本项目采用前后端分离的模式，前端构建页面，后端作数据接口，前端调用后端数据接口得到数据，重新渲染页面。
+ 后端已开启CORS跨域支持
+ API认证使用Token认证
+ 前端在Authorization字段提供token令牌
+ 使用HTTP Status Code表示状态
+ 数据返回格式使用JSON
+ 后端采用权限拦截器进行权限校验，并检查登录情况
+ 添加全局异常处理机制，捕获异常，增强系统健壮性
+ 前端用Echarts可视化库实现了图书借阅的分析图标（折线图、饼图），并通过loading配置提高加载体验。
+ 留言组件采用弹幕形式，贴合用户的喜好。
+ 引入knife4j依赖，使用 Swagger + Knife4j 自动生成 OpenAPI 规范的接口文档，前端可以在此基础上使用插件自动生成接口请求代码，降低前后端协作成本
+ 使用ElementUI组件库进行前端界面搭建，快速实现页面生成，并实现了前后端统一权限管理，多环境切换等能力。
+ 基于MyBatis Plus框架的QueryWrapper实现对MySQL数据库的灵活查询，并配合MyBatisX插件自动生成后端CRUD基础代码，减少重复工作。

### ⭐用户模块功能介绍

![img](http://xxx.xiaobaitiao.club/project/%E7%94%A8%E6%88%B7%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D.png)

+ 图书查询功能：分页构造器缓解数据过大压力，后端可设置请求数防止爬虫请求数过大，服务器负载过大。模糊查询进行字段搜索。表格均可导出PDF和EXCEL。
+ 读者规则功能：查询现有的借阅规则，借阅规则包括：借阅编号，可借阅图书数量，可借阅天数，可借阅图书馆，过期扣费/天。
+ 查看公告: 可以查询图书管理员发布的公告列表，文字滑动⭐

+ 个人信息: 可以查看个人的借阅证编号，借阅证姓名，规则编号，状态，可以修改个人账户的密码。

+ 借阅信息: 可以查看自身借阅过的图书记录和归还情况
+ 违章信息: 可以查询自身归还的图书是否有违章信息
+ 读者留言: 实现留言功能并以弹幕形式显示

### ⭐图书管理员模块功能介绍

![image-20230311151434774](http://xxx.xiaobaitiao.club/project/%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E5%91%98%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D%E5%9B%BE.png)

+ 借阅图书: 图书管理员输入借阅证号(用户)和要借的图书编号和当前的时间，点击借阅。
+ 归还图书: 输入图书编号查看图书是否逾期，并且可以设置违规信息，然后选择是否归还图书
+ 借书报表: 用于查询已经借阅并归还的书籍列表，同样使用分页构造器和模糊查询字段，显示借阅证编号，图书编号，借阅日期，截止日期，归还日期，违章信息，处理人。
+ 还书报表: 用于查询已经借阅但是还未归还的书籍列表，显示借阅证编号，图书编号，借阅日期，截止日期。

+ 发布公告: 可以查询当前发布的公告列表，并进行删除，修改，增加功能，分页构造器用于缓解数据量大的情况。

### ⭐系统管理员模块功能介绍

![image-20230311151453931](http://xxx.xiaobaitiao.club/project/%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86%E5%91%98%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D%E5%9B%BE.png)

+ 书籍管理: 可以查询当前的所有图书，显示图书编号，图书昵称，作者，图书馆，分类，位置，状态，描述。可以进行添加，修改，删除图书。利用分页构造器实现批量查询。利用模糊查询实现图书搜索功能。利用插件实现PDF和EXCEL导出。
+ 书籍类型: 显示查询当前的所有图书类型，可以进行添加，修改，删除图书类型，利用分页构造器实现批量查询，缓解数据压力。
+ 借阅证管理: 可以查询当前的所有借阅证列表，也就是用户数量，可以进行添加，修改，删除操作。同样实现分页。
+ 借阅信息查询: 可以查询当前已经完成借阅和归还的记录，显示借阅证号，书籍编号，借阅日期，截止日期，归还日期，违章信息，处理人。分页功能，PDF和EXCEL导出。
+ 借阅规则管理: 可以查询当前所有的借阅规则，显示限制借阅天数，限制本数，限制图书馆，逾期费用，可以进行添加、删除、修改操作。
+ 图书管理员管理: 显示当前的图书管理员列表，显示账号，姓名，邮箱，可以进行添加、删除、修改操作。
+ 系统管理: 可以查询一个月内的借阅量，以一周为时间间隔，计算借阅量，用Echarts实现折线图的展示。

## ☀️数据库表设计

### t_users表

| 列名        | 数据类型以及长度 | 备注                                              |
| ----------- | ---------------- | ------------------------------------------------- |
| user_id     | int(11)          | 主键 非空 自增 用户表的唯一标识                   |
| username    | varchar(32)      | 用户名 非空                                       |
| password    | varchar(32)      | 密码(MD5加密) 非空                                |
| card_name   | varchar(10)      | 真实姓名 非空                                     |
| card_number | Bigint(11)       | 借阅证编号 固定 11位随机生成 非空(后文都改BigInt) |
| rule_number | int(11)          | 规则编号 可以自定义 也就是权限功能                |
| status      | int(1)           | 1表示可用 0表示禁用                               |
| create_time | datetime         | 创建时间 Java注解 JsonFormatter                   |
| update_time | datetime         | 更新时间 Java注解 JsonFormatter                   |

### t_admins表

| 列名        | 数据类型以及长度 | 备注                              |
| ----------- | ---------------- | --------------------------------- |
| admin_id    | int(11)          | 主键 非空 自增 管理员表的唯一标识 |
| username    | varchar(32)      | 用户名 非空                       |
| password    | varchar(32)      | 密码(MD5加密) 非空                |
| admin_name  | varchar(10)      | 管理员真实姓名 非空               |
| status      | int(1)           | 1表示可用 0表示禁用               |
| create_time | datetime         | 创建时间 Java注解 JsonFormatter   |
| update_time | datetime         | 更新时间 Java注解 JsonFormatter   |

### t_book_admins表

| 列名            | 数据类型以及长度 | 备注                            |
| --------------- | ---------------- | ------------------------------- |
| book_admin_id   | int(11)          | 主键 非空 自增 管理表的唯一标识 |
| username        | varchar(32)      | 用户名 非空                     |
| password        | varchar(32)      | 密码(MD5加密)非空               |
| book_admin_name | varchar(10)      | 图书管理员真实姓名 非空         |
| status          | int(1)           | 1表示可用 0表示禁用             |
| email           | varchar(255)     | 电子邮箱                        |
| create_time     | datetime         | 创建时间 Java注解 JsonFormatter |
| update_time     | datetime         | 更新时间 Java注解 JsonFormatter |

### t_books表

| 列名             | 数据类型以及长度 | 备注                            |
| ---------------- | ---------------- | ------------------------------- |
| book_id          | int(11)          | 主键 自增 非空 图书表的唯一标识 |
| book_number      | int(11)          | 图书编号 非空 图书的唯一标识    |
| book_name        | varchar(32)      | 图书名称 非空                   |
| book_author      | varchar(32)      | 图书作者 非空                   |
| book_library     | varchar(32)      | 图书所在图书馆的名称 非空       |
| book_type        | varchar(32)      | 图书类别 非空                   |
| book_location    | varchar(32)      | 图书位置 非空                   |
| book_status      | varchar(32)      | 图书状态(未借出/已借出)         |
| book_description | varchar(100)     | 图书描述                        |
| create_time      | datetime         | 创建时间 Java注解 JsonFormatter |
| update_time      | datetime         | 更新时间 Java注解 JsonFormatter |

### t_books_borrow表

| 列名        | 数据类型以及长度 | 备注                                                         |
| ----------- | ---------------- | ------------------------------------------------------------ |
| borrow_id   | int(11)          | 主键 自增 非空 借阅表的唯一标识                              |
| card_number | int(11)          | 借阅证编号 固定 11位随机生成 非空 用户与图书关联的的唯一标识 |
| book_number | int(11)          | 图书编号 非空 图书的唯一标识                                 |
| borrow_date | datetime         | 借阅日期 Java注解 JsonFormatter                              |
| close_date  | datetime         | 截止日期 Java注解 JsonFormatter                              |
| return_date | datetime         | 归还日期 Java注解 JsonFormatter                              |
| create_time | datetime         | 创建时间 Java注解 JsonFormatter                              |
| update_time | datetime         | 更新时间 Java注解 JsonFormatter                              |

### t_notice表

| 列名            | 数据类型以及长度 | 备注                                |
| --------------- | ---------------- | ----------------------------------- |
| notice_id       | int(11)          | 主键 非空 自增 公告表记录的唯一标识 |
| notice_title    | varchar(32)      | 公告的题目 非空                     |
| notice_content  | varchar(255)     | 公告的内容 非空                     |
| notice_admin_id | int(11)          | 发布公告的管理员的id                |
| create_time     | datetime         | 创建时间 Java注解 JsonFormatter     |
| update_time     | datetime         | 更新时间 Java注解 JsonFormatter     |

### t_violation表

| 列名               | 数据类型以及长度 | 备注                                |
| ------------------ | ---------------- | ----------------------------------- |
| violation_id       | int(11)          | 主键 非空 自增 违章表记录的唯一标识 |
| card_number        | int(11)          | 借阅证编号 固定 11位随机生成 非空   |
| book_number        | int(11)          | 图书编号 非空 图书的唯一标识        |
| borrow_date        | datetime         | 借阅日期 Java注解 JsonFormatter     |
| close_date         | datetime         | 截止日期 Java注解 JsonFormatter     |
| return_date        | datetime         | 归还日期 Java注解 JsonFormatter     |
| violation_message  | varchar(100)     | 违章信息 非空                       |
| violation_admin_id | int(11)          | 违章信息管理员的id                  |
| create_time        | datetime         | 创建时间 Java注解 JsonFormatter     |
| update_time        | datetime         | 更新时间 Java注解 JsonFormatter     |

### t_comment表

| 列名                  | 数据类型以及长度 | 备注                                |
| --------------------- | ---------------- | ----------------------------------- |
| comment_id            | int(11)          | 主键 非空 自增 留言表记录的唯一标识 |
| comment_avatar        | varchar(255)     | 留言的头像                          |
| comment_barrage_style | varchar(32)      | 弹幕的高度                          |
| comment_message       | varchar(255)     | 留言的内容                          |
| comment_time          | int(11)          | 留言的时间(控制速度)                |
| create_time           | datetime         | 创建时间 Java注解 JsonFormatter     |
| update_time           | datetime         | 更新时间 Java注解 JsonFormatter     |

### t_book_rule表

| 列名               | 数据类型以及长度 | 备注                                  |
| ------------------ | ---------------- | ------------------------------------- |
| rule_id            | int(11)          | 主键 非空 自增 借阅规则记录的唯一标识 |
| book_rule_id       | int(11)          | 借阅规则编号 非空                     |
| book_days          | int(11)          | 借阅天数 非空                         |
| book_limit_number  | int(11)          | 限制借阅的本数 非空                   |
| book_limit_library | varchar(255)     | 限制的图书馆 非空                     |
| book_overdue_fee   | double           | 图书借阅逾期后每天费用 非空           |
| create_time        | datetime         | 创建时间 Java注解 JsonFormatter       |
| update_time        | datetime         | 更新时间 Java注解 JsonFormatter       |

### t_book_type表

| 列名         | 数据类型以及长度 | 备注                                  |
| ------------ | ---------------- | ------------------------------------- |
| type_id      | int(11)          | 主键 非空 自增 图书类别记录的唯一标识 |
| type_name    | varchar(32)      | 借阅类别的昵称 非空                   |
| type_content | varchar(255)     | 借阅类别的描述 非空                   |
| create_time  | datetime         | 创建时间 Java注解 JsonFormatter       |
| update_time  | datetime         | 更新时间 Java注解 JsonFormatter       |

## 🐼功能演示图

### 用户模块功能图

**首页轮播图演示**

![image-20230311151755217](http://xxx.xiaobaitiao.club/project/%E9%A6%96%E9%A1%B5%E8%BD%AE%E6%92%AD%E5%9B%BE%E6%BC%94%E7%A4%BA.png)

**图书查询演示**

![image-20230311151815350](http://xxx.xiaobaitiao.club/project/%E5%9B%BE%E4%B9%A6%E6%9F%A5%E8%AF%A2%E6%BC%94%E7%A4%BA.png)

**读者规则演示**

![image-20230311151837692](http://xxx.xiaobaitiao.club/project/%E8%AF%BB%E8%80%85%E8%A7%84%E5%88%99%E6%BC%94%E7%A4%BA.png)

**查看公告演示**

![image-20230311151858285](http://xxx.xiaobaitiao.club/project/%E6%9F%A5%E7%9C%8B%E5%85%AC%E5%91%8A%E6%BC%94%E7%A4%BA.png)

**个人信息演示**

![image-20230311151918353](http://xxx.xiaobaitiao.club/project/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E6%BC%94%E7%A4%BA.png)

**借阅信息演示**

![image-20230311151939885](http://xxx.xiaobaitiao.club/project/%E5%80%9F%E9%98%85%E4%BF%A1%E6%81%AF%E6%BC%94%E7%A4%BA.png)

**违章信息演示**

![image-20230311151958147](http://xxx.xiaobaitiao.club/project/%E8%BF%9D%E7%AB%A0%E4%BF%A1%E6%81%AF%E6%BC%94%E7%A4%BA.png)

**读者留言演示**

![image-20230311152043122](http://xxx.xiaobaitiao.club/project/%E8%AF%BB%E8%80%85%E7%95%99%E8%A8%80%E6%BC%94%E7%A4%BA.png)

### 图书管理员功能图

**借阅图书演示**

![image-20230311152118721](http://xxx.xiaobaitiao.club/project/%E5%80%9F%E9%98%85%E5%9B%BE%E4%B9%A6%E6%BC%94%E7%A4%BA.png)

**归还图书演示**

![image-20230311152136821](http://xxx.xiaobaitiao.club/project/%E5%BD%92%E8%BF%98%E5%9B%BE%E4%B9%A6%E6%BC%94%E7%A4%BA.png)

**借书报表演示**

![image-20230311152220983](http://xxx.xiaobaitiao.club/project/%E5%80%9F%E4%B9%A6%E6%8A%A5%E8%A1%A8.png)

**还书报表演示**

![image-20230311152251587](http://xxx.xiaobaitiao.club/project/%E8%BF%98%E4%B9%A6%E6%8A%A5%E8%A1%A8.png)

**发布公告演示**

![image-20230311152310736](http://xxx.xiaobaitiao.club/project/%E5%8F%91%E5%B8%83%E5%85%AC%E5%91%8A%E6%BC%94%E7%A4%BA.png)

### 系统管理员功能图

+ 由于篇幅受限，系统管理员功能图只展示一个图表的功能。

**系统管理演示**

![image-20230311152338284](http://xxx.xiaobaitiao.club/project/%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86.png)

## 🐼部署项目

![image-20230311152411864](http://xxx.xiaobaitiao.club/project/%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E6%BC%94%E7%A4%BA1.png)

+ 可以下载ZIP压缩包或者使用克隆(Git clone)
+ 复制http或者ssh的链接（github建议ssh,gittee都可以)
+ 在D盘新建一个文件夹，点击进入该文件夹，右键Git Bash Here

![image-20230311152442211](http://xxx.xiaobaitiao.club/project/%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E6%BC%94%E7%A4%BA2.png)

+ 还没有下载Git或者不会Git的建议先看基础教程（30分钟左右)

+ 输入git init 初始化git项目 然后出现一个.git文件夹
+ 输入git remote add origin xxxxxx(xxx为刚刚复制的http或者ssh链接)

+ 输入git pull origin master 从远程代码托管仓库拉取代码
+ 成功拉取项目（前端后端都是如此)
+ 前端项目注意依赖下载使用npm install 或者 yarn install （Vscode或者Webstorm)
+ 后端项目注意maven依赖下载（IDEA(推荐)或者Ecplise)
+ 前端npm 镜像源建议淘宝镜像源，后端maven镜像源推荐阿里云镜像源（非必选，但更换后下载快速) 

## 🐼部署项目问题

⭐

+ 乱码问题 项目采用的UFT-8 
+ 一般出现乱码就是UTF-8和GBK二者相反
+ 请百度IDEA乱码和Eclipse乱码问题(描述清楚即可)

⭐

+ 点击交互按钮，没有发生反应。
+ 很明显，请求失败，浏览器打开开发者工具，Edge浏览器直接ctrl+shift+i,其他浏览器按F12
+ 查看红色的请求和响应状态码问题

⭐

+ 先阅读文档再进行问题的查询或者提问
+ 提问有技巧，模糊的发言，让高级架构师找BUG也无从下手

⭐

+ **QQ：909088445**

+ 晚上在线，建议先自己寻找问题，实在实现不了，可以滴我
+ 需要定制化项目和修改项目的某些的功能也可以加我

## 🐼项目API接口文档

+ 接口文档篇幅过大
+ 本来想完全采用RESTFUL风格，做到一半忘记了
+ 看清楚文档的基准地址
+ 要API后端接口文档详细内容和数据库结构+内容一起的，将前后端**star**⭐的截图加我QQ：**909088445**发我即可领取~感谢支持

## 🐷其他

+ 个人博客地址: https://luoye6.github.io/
+ 个人博客采用Hexo+Github托管
+ 采用butterfly主题可以实现定制化
+ 推荐有空闲时间的，可以花1-2天搭建个人博客用于记录笔记。

## **版本迭代**

### 2023-3-19

1.引入knife4j依赖，使用 Swagger + Knife4j 自动生成 OpenAPI 规范的接口文档，前端可以在此基础上使用插件自动生成接口请求代码，降低前后端协作成本。

2.引入jsoup依赖可以自定义添加爬虫功能,可以批量添加图书并且是比较真实的数据。

3.添加事务管理器，可以进行用@Transactional指定异常类型回滚和事务传播行为。

### 2023-4-13

1.手动在增加和删除逻辑较为复杂的数据库操作上，添加了@Transactional注解，遇到运行时异常直接回滚数据库，防止借书和还书出现逻辑错误。

2.修复11位图书编号无法借书的Bug,其原因是因为11位超出了Integer的2147483647(10位)。解决方法：数据库改为BigInt,Java改为Long。

3.**注意**：不要随便删除用户和公告！！！会导致其他人体验的时候出现逻辑错误！！！请明白了项目逻辑再去做删除操作！！！感谢配合！！！

4.下一期准备优化图表的展示，逾期图书后告警通知之类的功能，感谢大家的支持，我会继续维护和优化功能，有Bug可以加我QQ或者提出issue,勿要恶意利用bug，再次鸣谢。

5.劳动节准备录一期部署项目的视频会发到b站，到时候会将部署讲清楚，方便大家课设或者毕设的完成，此项目有数据库表设计、API接口文档、内容功能介绍、亮点介绍，唯一缺少的可能是数据流图、ER图之类的，star的人多了，我会添加上去。

### 2023-5-1

1.添加“系统管理员”权限的系统管理功能，添加借书类型分析统计图（饼图）采用Echarts。

2.优化请求在没有收到数据时的显示卡顿的情况，添加“加载中”状态,使用v-loading(ElementUI组件库)，优化用户人机交互体验，在服务器调用接口缓慢的情况下，给予良好的交互。

3.轮播图优化：压缩图片体积，另外使用Swiper的懒加载，实现图片加载中状态，然后图片完全加载完成后才显示图片，优化用户体验过程。

4.后端新增自定义错误码枚举类，可以自定义状态码进行返回，保留原有枚举类。

5.前端优化部分表格内容展示，当纵向内容过长，设置了表格最大高度，超出就会显示滑动窗口。优化表格列宽度，提高表格美观度。

6.添加书籍管理组件的批量删除图书功能，优化管理员体验，不用单个删除图书，提高效率。

7.Jmeter进行压力测试，服务器接口在100个用户并发发送请求的情况下，QPS达到50以上。