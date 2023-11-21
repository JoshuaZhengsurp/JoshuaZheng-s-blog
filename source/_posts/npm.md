---
title: npm包管理器
copyright_author: JoshuaZheng
date: 2023-10-8 21:08:23
tags: 
  - "nodeJs"
  - "前端"
categories: 
  - "前端"
keywords:
description:
top_img:
comments:
cover: /image/bg.jpg
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---

# NPM

Node Package Manager

1. <name>|<pkg> 模块名
2. <version> 版本号
3. <version range> 版本范围
4. <@scopre>作用域。所有 npm 软件包都有一个名称。某些软件包名称也有作用域.



```
npm =>
	-v: 版本
	-l: 查看各个命令的简单用法
	help: 查看 npm 命令列表
	config list -l: 查看 npm 的配置
```



## 初始化

`npm init [-f, -y, ]`, -f: force; -y: yes。跳过提问阶段

## 设置环境变量

```shell
$ npm set init-author-name 'my name jerry'
$ set init-author-email '12345@qq.com'
$ set init-author-url 'http://yourdomain.com'
$ npm set init-license 'MIT'
执行了以上的修改，此时 Package.json并没有发生变化

//设置后执行init才是真正修改成功
$ npm init

//
"authore": "my name jerry <12345@qq.com> (httpS//yourdomain.com/)"
```

## 搜索

`npm search <搜索词> [-g]`

## 查看模块

`npm list`

不深入到包的支点

`npm list -g [--depth 0]` 

## **install**

```shell
npm install 

npm install [@<scope>/]<name> => 指定@latest

npm install [@<scope>/]<name>@<version>

npm install [<@scope>/]<name>@<version range>
//eg: npm install vue@">=1.0.28 < 2.0.0"

npm install <tarball url>
//eg: npm install git://github.com/package/path.git
```

全局：

- 全局安装 -g | -global  *eg: npm i -g gulp 或者 npm i gulp -g* 

- 这是默认设置，除非-D或-O存在 

- 安装并将被添加到package.json的dependencies区。 -P | --save-prod 

- **（生产阶段的依赖）** 

- 安装并将被添加到package.json的dependencies区 -S | --save 

  *eg: npm i gulp --save 或 npm i gulp -S* 

- **（开发阶段的依赖）** 

- 安装并将被添加到package.json的devDependencies区。 -D | --save-dev 

  *eg: npm i gulp --save-dev 或 npm i gulp -D* 

- **（可选阶段的依赖）** 

- 安装并将被添加到package.json的optionalDependencies区 -O | --save-optional 

- 安装模块的确切版，而不是使用npm的默认semver range运算符 -E | --save-exact 

  *eg: npm i gulp --save-exact 或 npm i gulp -E* 

- 安装并将被添加到`bundleDependencies`列表中 -B | --save-bundle

- 模块不管是否安装过，npm 都要强制重新安装 -f|--force *//eg:npm install sax --force* *//补充：所有模块都要强制重新安装，那就删除`node_modules`，重新执行`npm install`* 

-  rm -rf node_modules *//或者手动去删除node_modules目录*  

-  npm install 防止保存到`dependencies` --no-save 报告安装状况而不是真的安装 --dry-run

## uninstall

```shell
#卸载当前项目或全局模块 
$ npm uninstall <name> [-g] 

eg: npm uninstall gulp --save-dev  
    npm i gulp -g

卸载后，你可以到 /node\_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
npm ls 查看安装的模块
```

## update

```shell
#升级当前项目或全局的指定模块
$ npm update <name> [-g] 
//eg: npm update express 
      npm update express -g
```

## link

```she
# 引用依赖 有些包是全局安装了，在项目里面只需要引用即可。
$ npm link [<@scope>/]<pkg>[@<version>]
//eg: 引用   npm link gulp gulp-ssh gulp-ftp
//eg: 解除引用 npm unlink gulp
```

## npm run 执行脚本

`npm run`会创建一个Shell，执行指定`package.json`的`scripts`字段命令。

传递参数：

`npm run my-script --arg1 arg2`

使用env

```json
{
  "scripts": {
    "my-script": "NODE_ENV=production node my-script.js"
  }
}

```

串联多个脚本

```json
{
  "scripts": {
    "build": "npm run clean && npm run compile && npm run minify"
  }
}

```

npm钩子：

pre[-script], post[-script]

```json
{
  "scripts": {
    "prebuild": "npm run lint",
    "build": "webpack",
     "postbuild": "xxx"
  }
}

```



```shell
---package.json文件---
"scripts": {
    "lint": "eslint --cache --ext .js --ext .jsx src",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "pretest": "npm run lint",
    "posttest": "echo 'Finished running tests'"
  }
  
-------终端-------
$ npm run lint
//直接执行 npm run lint 结束

$ npm run test
//因为有定义了两个钩子pretest、posttest。
//所以先执行 npm run pretest
//然后执行 npm run test
//最后执行 npm run posttest
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9a2678276f54dd8821022e835b894fd~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1474&h=842&s=111410&e=png&b=ffffff)

## npm publish

```shell
# 未注册 申请注册一个用户 直接在https://www.npmjs.com/注册一样
$ npm adduser
//执行后 填写几个问题 Username、Password、Email

#已注册
$ npm login 

#发布
$ npm publish
```

