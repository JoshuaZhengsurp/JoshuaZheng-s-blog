---
title: hexo博客搭建ing
date: 2023-02-21 23:21:48
updated: 2023-02-22 21:12:09
tags:
---

## 从入坑到弃坑，): (悲)

1. post: source/_post
2. page
3. draft: source/_drafts

```
hexo new [layout's typr] [title]
```


## 文件组成：
1. node_modules: npm包
2. source：个人博客文章（？）等存放位置
3. themes：主题下载的位置（也可以下对应的npm包）
4. package.json：包的版本的管理？（node.js的知识）
5. _config.yml: 博客渲染配置（安装主题时，可以写对应主题的渲染配置，如：_config.buttfly.yml）

## 常用简单命令：
1.  生场静态页面（需要部署到服务器）``hexo generate / g``

## 文章：
.md:
```
---
//简单配置
---
```