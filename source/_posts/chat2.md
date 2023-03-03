---
title: chat2
copyright_author: JoshuaZheng
date: 2023-03-02 09:22:59
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
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
1. 采用p、q、r...小写字母 -> 像素
2. S，...大写字母 -> 像素集    
## 约定

## 像素间的关系

### 领域
1. 4-邻域：相对于显示坐标系 -> （x，y）->最多4的邻近像素: $$N_{D}(p)$$
   ![]()
2. 8-邻域：4-邻域+4-对角邻域 : $$N_{8}(p)$$
   ![]()

### 像素间的邻接性(connectivity)
1. 4-邻接、8-邻接
2. m-邻接（混合邻接）：对于对角像素p、q(?):
   1. 满足相似性准则 
   2. 邻域交集 ∩为 空
   
   消除8-链接的对角像素间的歧义
3. 通路
   1. 通路：由一系列依次连通的像素组成
   2. 连通 (这时8邻接所成的通路->歧义)->4连通、8连通、m连通
   
4. 距离度量函数
   对于在图像显示坐标系中坐标分别位于（x，y）、（u，v）和（w，z）的像素 p、q、r。
   1. 欧式距离
   2. 街区距离
   $$D_{4}$$
   3. 棋盘距离
   $$D_{8}$$
   4.Dm距离：m连通的路径决定 

## 图像文件格式
BMP、JREG、GIF、TIFF、PCX等
