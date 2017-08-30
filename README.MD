## 目录

````
-build 
-src
server.js
webpack.config.js
````

## 服务端口

server.js 中修改 `port` 变量

## 构建

webpack.config.js
````
//源文件目录
var rootPath = "./src";
//发布文件目录
var distPath = "./build";
````

* cdn 

````
var daily_publicPath = "http://daily.yuantutech.com";
var dist_publicPath = "http://s.yuantutech.com";
````

## 命令

````
npm start //本地开发
npm run dev //测试包 不压缩代码 使用  daily_publicPath 域名
npm run dist //线上包 压缩代码 使用  dist_publicPath 域名

````