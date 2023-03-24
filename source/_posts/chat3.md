---
title: chat3
copyright_author: JoshuaZheng
date: 2023-03-09 09:02:52
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
mathjax: true
katex:
aplayer:
highlight_shrink:
aside:
---

### 

#### 灰度反转

k位灰度图：2<sup>k</sup>-1 - val(灰度值)

#### 对数分布

$$
g(x,y) = clog(1+f(x,y))
$$

1. 对图像动态范围进行压缩，调高低灰度的值

2. 人眼视觉与入光成对数关系

#### 直方图

灰度直方图：灰度像素个数。（不能表示图像中每个像素的位置信息）

反映特征

1. 总体偏左/右，灰度值普遍偏小/大，图像偏暗/亮
2. 集中局部区域，对比度较低
3. 均匀分布，对比度较高



### 图像的代数运算

1. 图像相加

$$
g(x,y)=f_1(x,y)+f_2(x,y)
$$

2. 图像合成

$$
g(x,y)=cf_1(x,y)+(1-c)f_2(x,y)
$$

3. 图像多次叠加，去除噪声

$$
g(x,y)=\frac{1}{n}\sum{f_i(x,y)}
$$

4. 相减运算：变换检测

$$
g(x,y)=f_1(x,y)-f_2(x,y)
$$

(若结果小于0，一般取0)

###  图像的几何操作

1. 图像平移操作

   块偏移、图偏移
   $$
   \left[\begin{matrix}x_1\\y_1\\1\end{matrix}\right]
   =
   \left[\begin{matrix}1&0&x\\0&1&y\\0&0&1\end{matrix}\right]*\left[\begin{matrix}x_0\\y_0\\1\end{matrix}\right]
   \\
   \\
   x_1=x_0+x,y_1=y_0+1
   $$

2. 

3. 图像旋转

   （旋转原点 -> (0.5h,0.5w)）

   旋转 -> 超出画幅部分 -> 截断/增大画幅
   $$
   \left[\begin{matrix}x_1\\y_1\\1\end{matrix}\right]
   =
   \left[\begin{matrix}0&-1&0.5h\\0&1&0.5w\\1&0&0\end{matrix}\right]
   \left[\begin{matrix}\cos(a)&\sin(a)&0\\-\sin(a)&\cos(a)&0\\0&0&1\end{matrix}\right]
   \left[\begin{matrix}x_0\\y_0\\1\end{matrix}\right]
   $$

4. 水平/垂直镜像
   $$
   x
   $$

5. 转置变换

6. 缩放/放大变换
   $$
   \left[\begin{matrix} x1\\y1\\1 \end{matrix}\right]
   =
   \left[\begin{matrix} r&0&0\\0&r&0\\0&0&1 \end{matrix}\right]
   \left[\begin{matrix} x0\\y0\\1 \end{matrix}\right]
   $$

   - 整数放大

   - 非整数放大：插值算法、双线性插值
     $$
     f(x,y)=[f(1,0)-f(0,0)]x+[f(0,1)-f(0,0)]y+[f(1,1)+f(0,0)-f(0,1)-f(1,0)]xy+f(0,0)
     $$
