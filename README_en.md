# OpenSource DocumentationForSmart Libraries

>作者：[Programmer's Little White Bar](https://luoye6.github.io/)
>
>[Gitee Homepage](https://gitee.com/falle22222n-leaves)
>
>[Github Homepage](https://github.com/luoye6)

Language：**[English](README_en.md)**| **[中文](README.md).**

## ☀️Must Read For Beginners

+ This project has a complete API backend interface document (at the end of the text) (key points⭐) 
+ The project deployment video has been recorded
+ If the project is helpful to you, Star ⭐ Once encouraged, I will continue to work hard.
+ [Project online demonstration address](https://www.xiaobaitiao.top)
+ [Project front-end address](https://gitee.com/falle22222n-leaves/vue_-book-manage-system)
+ [Project backend address](https://gitee.com/falle22222n-leaves/vue_-book-manage-system_backend)
+ [Project deployment video](https://www.bilibili.com/video/BV1Zh4y1z7QE/?spm_id_from=333.999.0.0)

[![star](https://gitee.com/falle22222n-leaves/vue_-book-manage-system/badge/star.svg?theme=dark)](https://gitee.com/falle22222n-leaves/vue_-book-manage-system)  [![gitee](https://badgen.net/badge/gitee/falle22222n-leaves/red)](https://gitee.com/falle22222n-leaves)  [![github](https://badgen.net/badge/github/github?icon)](https://github.com/luoye6)

## ☀️Personal Introduction

![](https://pic.yupi.icu/5563/202403092057479.png)

![](https://pic.yupi.icu/5563/202403092057529.png)

## ☀️Introduction

**AI Intelligent Library** is a system that uses AI models and data analysis to accurately recommend books that users like, and provides AIGC's online generation of BI charts for borrowing volume analysis, which can serve as a data analyst. It mainly has three major users: users (borrowers), librarians, and system administrators.

> Ps: If you want simplicity and novelty, then this project will be a good choice~

![](https://pic.yupi.icu/5563/202403092057798.png)

![](https://pic.yupi.icu/5563/202403092057400.png)

## ☀️Function And Features

### User functions

1）Book query function: The pagination constructor alleviates the pressure of excessive data, and the backend can set the number of requests to prevent excessive crawler requests and server load. Fuzzy query for field search. The tables can be exported to both PDF and Excel.

2）Reader rule function: Query existing borrowing rules, borrowing rules include: borrowing number, number of books that can be borrowed, number of days that can be borrowed, library that can be borrowed, overdue fee deduction/day.

3）View announcements: You can check the list of announcements published by the librarian, with a text scrolling effect.

4）Personal information: You can view an individual's borrowing card number, borrowing card name, rule number, status, and modify the password of your personal account.

5）Borrowing information: You can view the records and return status of books you have borrowed.

6）Violation information: You can check whether the returned books contain any violation information.

7）Reader's message: Implement the message function and display it in the form of a bullet screen.

8）**Intelligent recommendation** Users input their preferences, and AI recommends books to users based on the database book list and user preferences.

### Library Administrator Function

1）Borrowing Books: The librarian enters the borrowing card number (user), the book number to be borrowed, and the current time, and clicks to borrow.

2）Returning books: Enter the book number to check if the book is overdue, and set violation information, then choose whether to return the book.

3）Book Borrowing Report: Used to query the list of books that have been borrowed and returned. It also uses a pagination constructor and fuzzy query fields to display the borrowing card number, book number, borrowing date, deadline, return date, violation information, and handler.

4）Book Return Report: Used to query the list of books that have been borrowed but not yet returned, displaying the borrowing card number, book number, borrowing date, and deadline.

5）Announcement: You can query the current list of announcements and delete, modify, and add features. The pagination constructor is used to alleviate the situation of large data volume.

### System Administrator Function

1）Book management: It can query all current books, display book numbers, book nicknames, authors, libraries, classifications, locations, status, and descriptions. You can add, modify, and delete books. Implement batch queries using a paging constructor. Utilize fuzzy queries to achieve book search functionality **Utilize plugins to export PDF and Excel**.

2）Book Types: Display and query all current book types, which can be added, modified, or deleted. Use a pagination constructor to achieve batch queries and alleviate data pressure.

3）Borrowing Card Management: It is possible to query the current list of all borrowing cards, that is, the number of users, and perform operations such as adding, modifying, and deleting. Implement pagination as well.

4）Borrowing information query: can query the current completed borrowing and returning records, display the borrowing card number, book number, borrowing date, deadline, return date, violation information, and handler. Paging function, PDF and Excel export.

5）Borrowing Rule Management: You can query all current borrowing rules, display restricted borrowing days, restricted book count, restricted library, overdue fees, and perform add, delete, and modify operations.

6）Librarian Management: Display the current list of librarians, including accounts, names, and email addresses, allowing for adding, deleting, and modifying operations.

7）System management: It is possible to query the borrowing volume within a month, calculate the borrowing volume at a weekly interval, and use Echarts to display various charts.

8）System analysis: You can upload the borrowing volume and date for a certain time period, and input the analysis target and the type of chart you want to generate. After waiting for a period of time,  **AI will provide analysis conclusions and visual charts**.

### Features (highlights)

1）This project adopts a front-end and back-end separation mode, with the front-end building the page and the back-end serving as the data interface. The front-end calls the back-end data interface to obtain data and re render the page.

2）The front-end provides a Token token in the Authorization field, API authentication uses Token authentication, HTTP Status Code represents status, and data return format uses JSON.

3）The backend has enabled CORS cross domain support, using permission interceptors for permission verification and checking login status.

4）Add a global exception handling mechanism to capture exceptions and enhance system robustness.

5）The front-end uses the Echarts visualization library to implement analysis icons (line charts, pie charts) for book borrowing, and improves the loading experience through loading configuration.

6）The message component adopts bullet screen format, which is in line with user preferences.

7）Introduce the knife4j dependency and use Swagger+Knife4j to automatically generate interface documents for the OpenAPI specification. The front-end can use plugins to automatically generate interface request codes based on this, reducing the cost of front-end and back-end collaboration

8）By using the ElementUI component library for front-end interface construction, we can quickly generate pages and achieve unified permission management and multi environment switching capabilities for both front-end and back-end.

9）The QueryWrapper based on the MyBatis Plus framework enables flexible querying of MySQL databases and, in conjunction with the MyBatisX plugin, automatically generates backend CRUD basic code to reduce repetitive work.

10）Front end routing lazy loading, CDN static resource cache optimization, and image lazy loading effect.

## ☀️Operation Mode

### 2 Minutes To Quickly Get Started Using The Project

1）Find the SpringBoot startup class, click on Run

![](https://pic.yupi.icu/5563/202403092057483.png)

2）Open Knife4J to register as a user, or you can directly contact me to obtain database simulation data (simple).

![](https://pic.yupi.icu/5563/202403092057462.png)

![](https://pic.yupi.icu/5563/202403092057532.png)

3）After entering the form content in the front-end, click on login to successfully start using the function happily~

![](https://pic.yupi.icu/5563/202403092057421.png)

![](https://pic.yupi.icu/5563/202403092057302.png)

## ☀️Deployment Method

### Preconditions

**Front end**

Software: Vscore or Webstorm (recommended)

Environment: Node version 16 or 18 (recommended)  **Note: Do not choose versions above 18**

**Backend**

Software: Eclipse or IDEA (recommended)

Environment: MySQL 5.7 or 8.0 (recommended) Redis (optional)

### Front End Deployment

1）Clicking on Clone/Download Project will use Git for version control. It is recommended to use Git Clone. If you do not know how to do so, you can choose to download a Zip compressed file and extract it to your computer's D drive. It is recommended to use Star directly, and then directly obtain the database simulation file and API interface documentation from me.

![](https://pic.yupi.icu/5563/202403092057115.png)

2）Open the front-end page using Vscode or Webstorm and configure the Configuration. Configure the Node environment and package management tools. The package management tool I have chosen is Npm, while other package management tools such as Yarn, Cnpm, and Pnpm are all available**Note: Please change the image address of Npm to the new image address on Taobao, otherwise Npm Install will keep getting stuck in the progress bar**.

3）Simply click on the run of dev or open the console and enter npm run serve to successfully launch the front-end project.

```shell
npm config set registry https://registry.npmmirror.com/
```

![](https://pic.yupi.icu/5563/202403092057497.png)

![](https://pic.yupi.icu/5563/202403092057168.png)

![](https://pic.yupi.icu/5563/202403092057855.png)

4）Customize and switch image links to your own image bed, such as Qiniuyun, GitHub, etc. You can also search for online images and copy Baidu Wenku image links (try multiple times, some images have anti-theft links) **After changing the background, you can see the permission switch icon in the bottom right corner**.

![](https://pic.yupi.icu/5563/202403092057651.png)

![](https://pic.yupi.icu/5563/202403092057028.png)



### Backend Deployment

1）Clicking on Clone/Download Project will use Git for version control. It is recommended to use Git Clone. If you do not know how to do so, you can choose to download a Zip compressed file and extract it to your computer's D drive. It is recommended to use Star directly, and then directly obtain the database simulation file and API interface documentation from me.

![](https://pic.yupi.icu/5563/202403092057403.png)

2）After receiving the database simulation file, use software such as Navicat or SQLYog to import the database file. Remember to first create a database named bms_boot, and then right-click to run the SQL file. After running successfully without any errors, reopen the database and check for data. If there is data, it indicates successful import.![](https://pic.yupi.icu/5563/202403092057396.png)

![](https://pic.yupi.icu/5563/202403092057154.png)

3) Open the backend project using IDEA, locate the application dev.yml file, modify the MySQL configuration, and ensure that the username and password are correct. Note: Passwords cannot start with the number 0.

![](https://pic.yupi.icu/5563/202403092057117.png)

4）mporting Maven dependencies, pay attention to checking if your Maven version is correct. It is recommended to choose the same version as mine, version 3.8 or above. I found that importing dependencies is slow because there is no configuration for domestic images, and the default connection is to foreign servers. Therefore, Alibaba Cloud image configuration can be found in this blog post.[CSDN Maven 配置教程](https://blog.csdn.net/lianghecai52171314/article/details/102625184?ops_request_misc=&request_id=&biz_id=102&utm_term=Maven)

![](https://pic.yupi.icu/5563/202403092057513.png)

5）Find the SpringBoot startup class, and I suggest using Debug mode to start the project for better troubleshooting.

![](https://pic.yupi.icu/5563/202403092057544.png)

6）If you encounter an error, it is most likely a JDK version issue. My project is using JDK 8, so it is recommended to choose the same version as me.

![](https://pic.yupi.icu/5563/202403092057723.png)

![](https://pic.yupi.icu/5563/202403092057850.png)

7）The successful launch of the project results are shown below

![](https://pic.yupi.icu/5563/202403092057083.png)

### Front And Rear End Joint Debugging

1）If you need to modify the port and prefix (such as/API), you need to modify both the front-end and back-end.

![](https://pic.yupi.icu/5563/202403092057115.png)

![](https://pic.yupi.icu/5563/202403092057299.png)

## ☀️Technical Selection

### Front End

| **技术**                     | **作用**                                                     | **版本**                                             |
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

### 后端

| **技术及版本**                       | **作用**                                                     | **版本**                          |
| ------------------------------------ | ------------------------------------------------------------ | --------------------------------- |
| SpringBoot                           | 应用开发框架                                                 | 2.7.8                             |
| JDK                                  | Java 开发包                                                  | 1.8                               |
| MySQL                                | 提供后端数据库                                               | 8.0.23                            |
| MyBatisPlus                          | 提供连接数据库和快捷的增删改查                               | 3.5.1                             |
| SpringBoot-Configuration-processor   | 配置处理器 定义的类和配置文件绑定一般没有提示，因此可以添加配置处理器，产生相对应的提示. |                                   |
| SpringBoot-Starter-Web               | 后端集成Tomcat MVC                                           | 用于和前端连接                    |
| SpringBoot-starter-test              | Junit4单元测试前端在调用接口前，后端先调用单元测试进行增删改查，注意Junit4和5的问题，注解@RunWith是否添加 |                                   |
| Lombok                               | 实体类方法的快速生成 简化代码                                |                                   |
| mybatis-plus-generator               | 代码生成器                                                   | 3.5.1                             |
| MyBatisX                             | MyBatisPlus插件直接生成mapper,实体类,service                 |                                   |
| jjwt                                 | token工具包                                                  | 0.9.0                             |
| fastjson                             | 阿里巴巴的 JSON 工具类                                       | 1.2.83                            |
| hutool                               | hutool工具包(简化开发工具类)                                 | [文档](https://hutool.cn/docs/#/) |
| knife4j-openapi2-spring-boot-starter | Knife4j 在线接口文档测试工具                                 | 4.0.0                             |
| gson                                 | 谷歌的 JSON 工具类                                           | 2.8.5                             |
| Java-WebSocket                       | 讯飞星火 AI 配置                                             | 1.3.8                             |
| okhttp                               | 讯飞星火 AI 配置                                             | 4.10.0                            |
| okio                                 | 讯飞星火 AI 配置                                             | 2.10.0                            |
| jsoup                                | 简易爬虫工具                                                 | 1.15.3                            |
| guava                                | 谷歌工具类                                                   | 30.1-jre                          |
| spring-boot-starter-data-redis       | Redis 的 Starter                                             |                                   |
| broadscope-bailian-sdk-java          | 阿里云 AI 模型                                               | 1.1.7                             |
| spring-boot-starter-websocket        | WebSocket 的 Starter                                         |                                   |

## ☀️Architecture

![](https://pic.yupi.icu/5563/202403092057718.png)

## ☀️Core Design

### Intelligent Recommendation Function

1）Users input their book preference information.

2）The front-end sends Axios requests.

3）The backend first checks whether the text is illegal (empty or too long).

4）Check if the interface exists.

5）Check if the number of AI interface calls is sufficient.

6）GuavaRateLimiter performs individual flow limiting to determine if the number of requests exceeds the normal business frequency.

7）Manually preset the AI model and query the list of books in the database for concatenation.

8）Query the AI model and the user's latest five historical records for context association.

9）FutureTask synchronously calls to obtain AI results and sets a timeout (timeout throws an exception)

10）Persist after obtaining AI model recommendation information and reduce the number of interface calls (to determine if successful)

12）Return the processed AI recommendation information to the front-end and set the response status code to 200.

### Intelligent Analysis Function

1）Users input analysis targets, icon names, select icon types, upload Excel files, click submit, and send Axios requests to the backend.

2）Verify whether the file is empty, the name is too long, the file size is checked, and the file suffix is checked

3）Obtain the administrator ID and query the interface owned by the administrator ID from the interface information table. The interface is found to be empty.

4）Determine if the number of AI interface calls is sufficient

5）GuavaRateLimiter performs individual flow limiting to determine if the number of requests exceeds the normal business frequency.

6）Hint words and roles for constructing AI models

7）Construct user input, concatenate user input information, and use tool classes to convert Excel into CSV string data.

8）Using the iFlytek Starfire AI model, input the caller ID and input parameters, use FutureTask to synchronously obtain them, and set a timeout time (timeout throws an exception)

10）Judging the AI generated results, if there is a formatting error, return the front-end error message and prompt for re calling (consider RabbitMQ for retry and compensation mechanisms in the future)

11）Persist the AI generated results to the database, update the number of interface calls (to determine if successful), and dynamically return icons and data conclusions to the front-end.

## ☀️What Will You Get After Completing This Project

1）Simply call the AI model (iFlytek Starfire | Alibaba Bailian) to obtain custom text content.

2）Simple JWT permission verification, using backend interceptors for login verification.

3）Upload an Excel file, convert the Excel file to CSV data, and generate visual charts online by AIGC.

4）Jousp can batch crawl book lists and execute them in conjunction with SpringSchedule scheduled tasks.

5）How does the front-end and back-end of a simple system for adding, deleting, modifying, and querying work together.

6）How are front-end routing lazy loading, CDN static resource caching optimization, and image lazy loading implemented

7）Use Lodash for throttling control to minimize ineffective malicious message brushing.

8）Use custom thread pools and FutureTasks for timeout request processing.

9）Utilize Google's GuavaRateLimited for individual flow limiting control.

10）Combining scheduled tasks with Redis for cache preheating to accelerate query efficiency and improve user experience.

## ☀️Project Introduction

+ Mainly implemented using Vue2 and SpringBoot2

+ The project permission controls are: user borrowing, librarian, and system administrator

+ Development tool: IDEA2022.1.3 (I really don't recommend using Eclipse for development. IDEA projects can be exported as Eclipse projects, and they don't affect each other, but you need to learn the tutorial yourself)

+ [IDEA ->Eclipse]（ https://blog.csdn.net/HD202202/article/details/128076400 ）

+ [Eclipse ->IDEA]（ https://blog.csdn.net/q20010619/article/details/125096051 ）

+ If the school teachers insist on software, they should still follow the requirements. Can you first ask if it is possible to choose other software development options.

+ User account password: Xiangsi Duan Hongchang 123456

+ Librarian account password: admin 123456

+ System administrator account password: root 123456

+ [Front end style reference]（ https://gitee.com/mingyuefusu/tushuguanlixitong ）Thank you to the original author **Mingyue Resurrection**

+ Encountered an interaction function error or the page cannot be opened. Please use the developer tool F12 to check the status code of the request and response. Of course, the novice may not understand, so it's okay. You can add me **QQ: 909088445**. Class during the day, I can only answer when I have time at night. Thank you for your understanding! ⭐⭐⭐

## ☀️Project Detailed Introduction (HighLights)

+ This project adopts a front-end and back-end separation mode, with the front-end building the page and the back-end serving as the data interface. The front-end calls the back-end data interface to obtain data and re render the page.

+ The backend has enabled CORS cross domain support

+ API authentication using Token authentication

+ The front-end provides a Token token in the Authorization field

+ Using HTTP Status Code to represent status

+ Use JSON for data return format

+ The backend uses permission interceptors for permission verification and checks login status

+ Add a global exception handling mechanism to capture exceptions and enhance system robustness

+ The front-end uses the Echarts visualization library to implement analysis icons (line charts, pie charts) for book borrowing, and improves the loading experience through loading configuration.

+ The message component adopts bullet screen format, which is in line with user preferences.

+ Introduce the knife4j dependency and use Swagger+Knife4j to automatically generate interface documents for the OpenAPI specification. The front-end can use plugins to automatically generate interface request codes based on this, reducing the cost of front-end and back-end collaboration

+ By using the ElementUI component library for front-end interface construction, we can quickly generate pages and achieve unified permission management and multi environment switching capabilities for both front-end and back-end.

+ The QueryWrapper based on the MyBatis Plus framework enables flexible querying of MySQL databases and, in conjunction with the MyBatisX plugin, automatically generates backend CRUD basic code to reduce repetitive work.

+ Front end routing lazy loading, CDN static resource cache optimization, and image lazy loading effect.

### ⭐Introduction To User Module Functions

![](https://pic.yupi.icu/5563/202403092057579.png)

+ Book query function: The pagination constructor alleviates the pressure of excessive data, and the backend can set the number of requests to prevent excessive crawler requests and server load. Fuzzy query for field search. Tables can be exported to both PDF and Excel.

+ Reader rule function: Query existing borrowing rules, borrowing rules include: borrowing number, number of books that can be borrowed, number of days that can be borrowed, library that can be borrowed, overdue fee deduction/day.

+ View announcements: You can check the list of announcements published by the librarian, with text scrolling effect.

+ Personal information: You can view an individual's borrowing card number, borrowing card name, rule number, status, and modify the password of your personal account.

+ Borrowing information: You can view the records and return status of books you have borrowed.

+ Violation information: You can check whether the returned books contain any violation information.

+ Reader's message: Implement the message function and display it in bullet screen format.

### ⭐Introduction To The Functions Of The Librarian Module

![](https://pic.yupi.icu/5563/202403092057247.png)

+ Borrowing Books: The librarian enters the borrowing card number (user), the book number to be borrowed, and the current time, and clicks to borrow.

+ Returning books: Enter the book number to check if the book is overdue, and set violation information, then choose whether to return the book

+ Book Borrowing Report: Used to query the list of books that have been borrowed and returned. It also uses a pagination constructor and fuzzy query fields to display the borrowing card number, book number, borrowing date, deadline, return date, violation information, and handler.

+ Book Return Report: Used to query the list of books that have been borrowed but not yet returned, displaying the borrowing card number, book number, borrowing date, and deadline.

+ Announcement: You can query the current list of announcements and delete, modify, and add features. The pagination constructor is used to alleviate the situation of large data volume.

### ⭐Introduction To The Functions Of The System Administrator Module

![](https://pic.yupi.icu/5563/202403092057930.png)

+ Book management: It can query all current books, display book numbers, book nicknames, authors, libraries, classifications, locations, status, and descriptions. You can add, modify, and delete books. Implement batch queries using a paging constructor. Utilize fuzzy queries to achieve book search functionality. Use plugins to export PDF and Excel.

+ Book Types: Display and query all current book types, which can be added, modified, or deleted. Use a pagination constructor to achieve batch queries and alleviate data pressure.

+ Borrowing Card Management: It is possible to query the current list of all borrowing cards, that is, the number of users, and perform operations such as adding, modifying, and deleting. Implement pagination as well.

+ Borrowing information query: can query the current completed borrowing and returning records, display the borrowing card number, book number, borrowing date, deadline, return date, violation information, and handler. Paging function, PDF and Excel export.

+ Borrowing Rule Management: You can query all current borrowing rules, display restricted borrowing days, restricted book count, restricted library, overdue fees, and perform add, delete, and modify operations.

+ Librarian Management: Display the current list of librarians, including accounts, names, and email addresses, allowing for adding, deleting, and modifying operations.

+ System management: It is possible to query the borrowing volume within a month, calculate the borrowing volume at a weekly interval, and use Echarts to display a line chart.

## ☀️Database Table Design

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

## 🐼Functional Demonstration Diagram

### User Module Function Diagram

**Homepage carousel demonstration**

![](https://pic.yupi.icu/5563/202403092057819.png)

**Book search demonstration**

![](https://pic.yupi.icu/5563/202403092057365.png)

**Reader Rule Demonstration**

![](https://pic.yupi.icu/5563/202403092057384.png)

**View announcement demonstration**

![](https://pic.yupi.icu/5563/202403092057303.png)

**Personal information demonstration**

![](https://pic.yupi.icu/5563/202403092057307.png)

**Presentation of Borrowing Information**

![](https://pic.yupi.icu/5563/202403092057741.png)

**Violation information demonstration**

![](https://pic.yupi.icu/5563/202403092057862.png)

**Reader's message demonstration**

![](https://pic.yupi.icu/5563/202403092057854.png)

**Intelligent recommendation demonstration**

![](https://pic.yupi.icu/5563/202403092057828.png)

### Library Administrator Function Diagram

**Borrowing book demonstration**

![](https://pic.yupi.icu/5563/202403092057329.png)

**Demo on returning books**

![](https://pic.yupi.icu/5563/202403092057296.png)

**Presentation of borrowing report**

![](https://pic.yupi.icu/5563/202403092057841.png)

**Presentation of return report**

![](https://pic.yupi.icu/5563/202403092057469.png)

**Announcement demonstration**

![](https://pic.yupi.icu/5563/202403092057504.png)

### System Administrator Function Diagram

+ Due to space limitations, the main functions of the system are displayed.

**System Management Demonstration**

![](https://pic.yupi.icu/5563/202403092057554.png)

![](https://pic.yupi.icu/5563/202403092057566.png)

**Intelligent analysis demonstration**

![](https://pic.yupi.icu/5563/202403092057486.png)

## 🐼Deployment Projects

![](https://pic.yupi.icu/5563/202403092057711.png)

+ You can download ZIP compressed packages or use clones (Git clone)

+ Copy HTTP or SSH links (Github suggests SSH, Gittee can do both)

+ Create a new folder on drive D, click to enter the folder, right-click on Git Bash Here

![](https://pic.yupi.icu/5563/202403092057608.png)

+ If you haven't downloaded Git yet or don't know Git, it is recommended to read the basic tutorial first (about 30 minutes)

+ Enter git init to initialize the git project and a. git folder will appear

+ Enter git remote add origin xxxxxx (xxx is the HTTP or SSH link just copied)

+ Enter git pull origin master to pull code from a remote code hosting repository

+ Successfully pulled the project (both front-end and back-end are like this)

+ Front end projects should pay attention to relying on downloading and using npm install or yarn install (Vscode or Webstorm)

+ Backend projects should pay attention to Maven dependency downloads (IDEA (recommended) or Ecplise)

+ Suggest Taobao image source for front-end NPM image source, and Alibaba Cloud image source for back-end Maven image source (optional, but quick download after replacement)

## 🐼Deployment Project Issues

⭐

+ The UFT-8 used in the garbled code problem project

+ Generally, garbled characters are the opposite of UTF-8 and GBK

+ Please provide a clear description of Baidu IDEA garbled code and Eclipse garbled code issues

⭐

+ Clicking the interaction button did not result in any response.

+ It is obvious that the request has failed. The browser opens the developer tool, and Edge browser directly uses Ctrl+shift+i, while other browsers press F12

+ View red request and response status code issues

⭐

+ Read the document first before querying or asking questions

+ Skilled questioning and vague statements make it difficult for senior architects to identify bugs

⭐

+ **QQ: 909088445**

+ Usually online at night, it is recommended to find the problem yourself first!!!

+ Open source is free, customized and debugging projects are paid for.

## 🐼Requirement Analysis And Design

Requirement analysis and design documents. For those with (**paid**) requirements, you can add QQ: 909088445. It is suitable for those who have completed the design and course design. For those who want to save time, please feel free to contact me.

![](https://pic.yupi.icu/5563/202403092057586.png)

## 🐼Project API Interface Document

+ The interface document is too lengthy

+ I originally intended to completely adopt the RESTFUL style, but forgot halfway through it

+ Read the reference address of the document clearly

+ To combine the detailed content of the API backend interface document with the database structure and content, the front-end and back-end **star will be added** ⭐ Take a screenshot of it and add it to my QQ: **909088445** Send it to me to collect it~Thank you for your support

#### **Sample Screenshot Of Database Retrieval (Gitee&GitHub):**

![](https://pic.yupi.icu/5563/202403092057726.png)

![](https://pic.yupi.icu/5563/202403092057307.png)

![](https://pic.yupi.icu/5563/202403092057245.png)

![](https://pic.yupi.icu/5563/202403092057226.png)

## 🐷 Other

+ Personal blog address: https://luoye6.github.io/

+ Personal blog is hosted on Hexo+Github

+ Using the butterfly theme can achieve customization

+ It is recommended that those who have free time can spend 1-2 days building a personal blog to take notes.

## ☕Please Treat Me To coffee

If this project is helpful to you, may I have a cup of coffee with the author ：）

<div><img src="https://pic.yupi.icu/5563/202312191854931.png" style="height:300px;width:300px"></img> <img src="https://pic.yupi.icu/5563/202312191859536.png" style="height:300px;width:300px"></img></div>

## **Version Iteration**

### March 19, 2023



1）Introduce the knife4j dependency and use Swagger+Knife4j to automatically generate interface documentation for the OpenAPI specification. The front-end can use plugins to automatically generate interface request code on this basis, reducing the cost of front-end and back-end collaboration.

2）Introducing JSOUP dependencies allows for custom addition of crawler functionality, allowing for batch addition of books with relatively real data.

3）Add a transaction manager to enable @ Transactional to specify exception types for rollback and transaction propagation behavior.

### April 13, 2023

1）In manually adding and deleting database operations with complex logic, @ Transactional annotations have been added. When encountering runtime exceptions, the database can be rolled back directly to prevent logical errors in borrowing and returning books.

2）Fix the bug where the 11 digit book number cannot be borrowed, as it exceeds the integer's 2147483647 (10 digits). Solution: Change the database to BigInt and Java to Long.

3）**Note**: Do not delete users and announcements casually!!! It can cause logical errors when others experience it!!! Please understand the project logic before proceeding with the deletion operation!!! Thank you for your cooperation!!!

4）In the next issue, we are preparing to optimize the display of charts and functions such as alarm notifications after overdue books. Thank you for your support. I will continue to maintain and optimize the functions. If there are any bugs, you can add me on QQ or raise an issue. Do not maliciously exploit the bugs. Thank you again.

5）A video of a deployment project for Labor Day will be posted on Bilibili, and the deployment will be explained clearly to facilitate the completion of course or final projects. This project includes database table design, API interface documentation, content and function introduction, and highlight introduction. The only missing ones may be data flow diagrams, ER diagrams, and so on. As there are many people on Star, I will add them.

### May 1st, 2023

1）Add the system management function with "System Administrator" permissions, and **add a borrowing type analysis and statistical chart (pie chart)** using Echarts.

2）Optimize the display lag when no data is received, add a "loading" status, **use v-loading** (ElementUI component library), **optimize user human-machine interaction experience**, and provide **good interaction** when the server calls the interface slowly.

3）Rotation image optimization: **Compress image volume**, and also use Swiper's **Lazy loading** to achieve image loading status, and then display the image only after it is fully loaded, **optimizing the user experience process**.

4）Add a custom error code enumeration class to the backend, which allows for custom status codes to be returned while retaining the original enumeration class.

5）The front-end optimization section displays table content. When the vertical content is too long and the maximum height of the table is set, a sliding window will be displayed if it exceeds the limit. Optimize table column width and improve table aesthetics.

6）Add the **Batch Delete Books** function of the Book Management component to optimize the administrator experience, eliminating the need for individual book deletions and improving efficiency.

7）Jmeter conducted stress testing, and the server interface achieved a QPS of 50 or above when **100 users simultaneously sent requests**.

### May 20th, 2023

**Backend updates**

1）To prevent the front-end from capturing packets and obtaining plaintext passwords, the front-end inputs the password and performs MD5 encryption (mixed salt values to prevent collisions). The back-end directly compares the encrypted password with the database, and equality represents successful login. Improve system security.

2）Rectify the Controller layer by placing all business code into the Service layer, where the Controller calls the Service service and modifies the @ Transactional annotation position to the Business layer, reducing coupling and reducing bloating for the Controller. Be open to extensions and closed to modifications. In the future, we will consider using **design patterns** to optimize code and **multi threading** knowledge to improve interface response speed under **high concurrency**.

3）Modify the code according to the Alibaba manual, reduce warnings, and make the code more elegant and standardized.

4）**Fix bug**: Borrowing time is empty, causing server breakdown. If the return date is empty, it still shows that the borrowing was successful. (Solution: Verify the time parameter to determine if it is empty)

5）**Tool class increase**: SQLUtils (preventing SQL injection), NetUtils (network tool class)

**Front end update status**

1）Change the route loading method to lazy loading, which can effectively alleviate the pressure of homepage loading and reduce the time required for homepage loading.

2）Add a 404 page, and when the user visits a page with a request address that does not exist, they will be redirected directly to the 404 page to improve the user experience.

3）Add the loading status of the button, **optimize human-computer interaction**, and improve user experience. Modify button: Login button, other buttons can be customized and modified if needed. Add: loading="loading".

**Bug fixing status**

The 1.11 digit book number can be borrowed, but **cannot be checked for overdue payment**. It was found that the method parameter is still Integer. Last time, the borrowing and returning books were changed to Long, but the overdue payment check has not been changed to Long, resulting in a problem. It has now been fixed.

### June 10, 2023

**Front end update status**

1）Add full screen function buttons on certain pages to facilitate users to zoom in and view table data.

2）Added address icons for GitHub and Gitee to facilitate project pulling and cloning.

3）The reader's comment component and comment function will be strengthened to prevent meaningless numbers, letters, and spaces from appearing in the data. Further considerations will be made in the future

4）Reader message component, **using lodash for throttling **, can only send network requests once within 5 seconds to prevent malicious brushing of invalid messages.

**Backend updates**

1）Add a batch import function for books using EasyExcel on the backend to achieve interaction with storing some book data using Excel in real life, improve import efficiency, and achieve the same effect as the crawler function. It can also import large amounts of data. It is recommended to use EasyExcel for batch import, which will take faster time than the crawler function.

**Bug fixing status**

1）Modify the password modification function on the user page, as the last update already added salt values, but the backend code logic has not been changed. This fix "inability to log in after password modification" is due to the backend not adding salt values, which has been fixed.

2）Fixed the issue where the system administrator changed the password for the borrowing certificate and was unable to log in. The reason is the same as the first bug, as the backend's salt value was not added and has been fixed.

3）Fixed the issue where the system administrator directly clicked on "modify book" in the book management function and found that the classification of the book was incorrect. This was because the front-end only sent a request to obtain the classification in the "add book" dialog box, and forgot to add a request to obtain the classification when modifying the dialog box. This issue has been fixed.

### September 2023

**Front end update status**

1）Add an intelligent recommendation page that can communicate with AI. Users can input their favorite xxx books, and AI can analyze them in existing databases to make recommendations. The domestic AI model is called, and the underlying layer is OpenAI.

2）Add an intelligent analysis page, input analysis objectives, icon types, and Excel files, generate analysis conclusions and visual icons through AI, greatly improving efficiency and reducing labor analysis costs.

3）Add the function of system administrators to upload books in bulk using Excel files on the front-end (under testing), for reference only.

**Backend updates**

1）Add interfaces for intelligent analysis and obtaining the last 5 chat records, and use **Thread Pool** and **Future** for timeout request processing. If the interface call exceeds 40 seconds, an error message will be returned directly.

2）Utilize RateLimiter in Google's Guava for flow limiting control, allowing only one request per second to pass through, to prevent brushing behavior.

### November 2023

**Backend updates**

1）Switch the AI model for user chat to Alibaba's Tongyi Qianwen Plus model, and **support multi round session history**, no longer use iFlytek Starfire's AI model, but still retain the tool class. The main purpose is to receive a faster response, and Alibaba's documents are more detailed, allowing for  customized scripts . When users input irrelevant book recommendations, they can directly **refuse to answer **.

2）Add an IncSyncDeleteAIMessage **scheduled task**, which will delete records with empty content due to system errors and other reasons every day. The number of times the interface will be restored for these users will also be. In the future, RabbitMQ may be selected to put the failed messages into the message queue, and then ensure that the failed messages are consumed .

3）Login encryption has been changed from the front-end to the back-end. As the front-end can be compromised, encryption will still be placed in the back-end Solution:  Frontend transmission, encrypted with HTTPS for ciphertext, backend encrypted with salt value+algorithm, and database storing ciphertext.

4）Store the message page in Redis, **reduce database IO queries**, and increase QPS by hundreds of times!

**Front end update status**

1）Change the background images and avatars of the three login pages to be stored in the images folder of the assets folder,  mainly for the sake of users of the project. Many people do not understand graphic bed technology, so I will temporarily change the login pages to static images.

2）Optimization of permission switching prompt,  There is now a text style for login permission switching on the icon , indicating that users have multiple login pages to switch between.

3）Login encryption has been changed from the front-end to the back-end. As the front-end can be compromised, encryption will still be placed in the back-end **Solution**: Frontend transmission, encrypted with HTTPS for ciphertext, backend encrypted with salt value+algorithm, and database storing ciphertext.

### March 2024

**Backend updates**

1）Add @ ApiOperation annotations to Knife4J to indicate the purpose of each interface, making it easier for developers to read and test the interfaces.