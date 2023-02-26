---
title: acmT
date: 2023-02-26 18:36:23
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
---
2023/1/1

# 周报

2023-2-26

### 大主题：

字符串&动态规划&二叉平衡树

### 本周总结：
本周主要学了splay和fhqTreap这两数据结构。
学习记录：
 1. [splay](https://joshuazhengsurp.netlify.app/2023/02/23/splay%EF%BC%88%E4%BC%B8%E5%B1%95%E6%A0%91%EF%BC%89/)，
 2. [fhqTreap](https://130357.xyz/2023/02/26/fhqtreap/) 

也做相关的题目（虽然部分思路比较简单，但细节还蛮多，并且代码量有亿点长(难de)）。

1. fhqTreap：又叫无旋Treap，通过分裂合并取代旋转，相比普通Treap，要慢一些，不过更适用与解决区间问题
2. splay：通过splay操作，保证二叉树基本不存在链状情况，同时也可通过分裂合并操作实现区间反转等操作。

题目：
|题目(链接)|涉及算法|
| ------------------------------------------------------------ | -------------------- |
| [文艺平衡树](https://www.luogu.com.cn/problem/P3391) | FHQTreap/splay             |
|[普通平衡树](https://www.luogu.com.cn/problem/P3369) | FHQTreap/Splay/Treap |
| [Permutation Transformer](https://vjudge.net/contest/538228#problem/C)    | splay/FHQTreap            |
| [Jeewl Magic](https://vjudge.net/problem/UVA-11996) | splay，字符串hash             |
| [Serval and Toxel's Arrays](https://codeforces.com/contest/1789/problem/C) | 思维、数学      |
| [Marking](https://atcoder.jp/contests/abc290/tasks/abc290_d)| 数论             |
| [Step Up Robot](https://atcoder.jp/contests/abc289/tasks/abc289_d)     | dp             |
| [Swap Places](https://atcoder.jp/contests/abc289/tasks/abc289_e)          | 双向bfs，动态规划 |
|[Stammering Aliens ](https://vjudge.net/problem/UVA-12206)|字符串hash|
