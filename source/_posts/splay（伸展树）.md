---
title: splay（伸展树）
tags: 
  -算法
  -数据结构
  -acm
  -平衡二叉树
copyright_author: JoshuaZheng
date: 2023-02-23 21:47:51
updated:
categories: acm
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


## 概念

**Splay Tree**: 一种平衡二叉树，拥有二叉查找树的性质，同时通过伸展操作，实现的插入、查找、删除等操作均摊在O(logn)，并且保持平衡（几乎不可能为链）

**伸展splay(x)**: 通过旋转使x转到根的位置上。

(由数组写成的模板代码)

声明：
```
节点:x 节点总数:tot 父节点:fa[x] 左右儿子编号:ch[x][0|1] 节点权值:val[x] 权值出现次数:cnt[x] 树的大小:sz[i]
```

## 基本操作
1. maintain(x): 维护节点x的sz值
2. get(x): 判断节点x为fa\[x]的左右儿子
3. clear(x): 销毁节点x

## splay&rotate&insert
### 旋转（rotate）

上移节点某个位置（从结果来看，不破坏二叉树的性质，左|右旋）

（同treap、avl旋转）

1. 右旋：
```cpp
//要旋转x上去，y是x的父亲
ch[y][0]=ch[x][1];
fa[ch[x][1]]=y;
//那么y的左儿子变成了x的右儿子

ch[x][1]=y;fa[y]=x;
//而x的右儿子变成了y的

fa[x]=z;if(z)ch[z][y==ch[z][1]]=x;
考虑到y的父亲，所以fa[x]=z;
```
2. 左旋:
```cpp
ch[y][1]=ch[x][0];
fa[ch[x][0]]=y;

ch[x][1]=y;fa[y]=x;

fa[x]=z;if(z)ch[z][y==ch[z][1]]=x;
```
故，我们只需要知道x是y的左/右儿子，就能推出右/左旋。
```cpp
void rotate(int x){
    int y=fa[x],z=fa[y],chk=get(x);
    ch[y][chk]=ch[x][chk^1];
    if(ch[x][chk^1])fa[ch[x][chk^1]]=y;
    ch[x][chk^1]=y;
    fa[y]=x;
    fa[x]=z;
    if(z)ch[z][y==ch[z][1]]=x;
    maintain(y);
    maintain(x);
}
```
### 伸展(splay)
情况本质上只有4种：
1. 本来在根上了
2. y是根节点
3. x和y的父亲共线
4. x和y的父亲不共线

```cpp
void splay(int x){
    for(int f=fa[x];f=fa[x],f;rotate(x)){
        //如果fa[f]==0，还会在旋转一次
        if(fa[f])rotate(get(x)==get(f)?f:x);
    }
    rt=x;
}
```

### 插入(insert)
插入考虑三种情况：
1. 如果空树，直接插入
2. 否则从树根往下找，如果k值已经存在，那么不需要插入操作，并splay下
3. 反之，进行插入操作（就是字面意思），之后splay下（时间局部性）
```cpp
void insert(int k){
    if(!rt){
        val[++tot]=k;
        cnt[tot]++;
        rt=tot;
        maintain(rt);
        return;
    }
    int cur=rt,f=0;
    while(1){
        if(val[cur]==k){
            cnt[cur]++;
            maintain(cur);
            maintain(f);
            splay(cur);
            break;
        }
        f=cur;
        cur=ch[cur][val][cur<k];
        if(!cur){
            val[++tot]=k;
            cnt[tot]++;
            fa[tot]=f;
            ch[f][val[f]<k]=tot;
            maintain(tot);
            maintain(f);
            splay(tot);
            break;
        }
    }
}
```







