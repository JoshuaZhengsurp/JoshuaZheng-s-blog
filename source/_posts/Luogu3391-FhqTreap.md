---
title: Luogu3391_FhqTreap
tags: 
  - 算法
  - 平衡二叉树
  - Treap
  - 数据结构
copyright_author: JoshuaZheng
date: 2023-02-23 19:22:36
updated: 
categories: "acm"
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

## 前言

这道题，我得承认，我是sb。

过了10几天，终于给调出来了（）

bug原因：下传标记问题。在split()函数里，标记没下传，就求节点左子树的大小了（寄）

## 解题思路
（已经改得，不三不四了，fhqTreap模板来自OI wiki）

由于题目是要求对一段区间进行反转，所以，treap树的性质维护不会过多考虑值，而是只维护堆的性质。

将[1,n]按顺序插入（使树本来有序，分裂合并后：中序遍历->1,2,...,n）

随后，分裂，找到区间，标记反转，倘若分裂过程找到已经标记的点时，反转左右子树，并且下传标记 （？这样可能会有bug吧）

在合并过程中（一棵树会接在另一棵树的叶子上），同时反转并且下传标记。

```cpp
#include <bits/stdc++.h>
using namespace std;

#define IO                       \
ios::sync_with_stdio(false); \
cin.tie(0);
#define FIO                        \
freopen("Data.in", "r", stdin);\
freopen("Data.out", "w", stdout);
#define FCLS       \
fclose(stdin); \
fclose(stdout);
#define fr(i, a, b) for (int i = a; i <= b; ++i)
#define rfr(i,a,b) for(int i=a;i>=b;--i)
#define fr_(i, a, b) for (int i = a; i < b; ++i)
#define rfr_(i,a,b) for(int i=a;i>b;--i)
#define lc k<<1
#define rc k<<1|1
#define pk push_back
#define fs first
#define sc second
#define mkp make_pair
typedef long long ll;
typedef unsigned long long ull;
typedef double dou;
typedef pair<int, int> pii;
typedef vector<int> vi;
const int maxn=2e5+3;
const ll inf = 1e9 + 7;
const ll mod = 1e9 + 7;

struct Node{
    Node *ch[2];
    int r;//priority
    int v,s,rep_c;//value,size,rep_cnt;
    int flag;// 0-> to res
    Node(int v=0):v(v){
        r=rand();
        ch[0]=ch[1]=nullptr;
        rep_c=s=flag=1;
    }
    void maintain(){
        s=rep_c;
        if(ch[0]!=nullptr)s+=ch[0]->s;
        if(ch[1]!=nullptr)s+=ch[1]->s;
    }
    void cherk(){
        if(!flag){
            pushdown();
            swap(ch[0],ch[1]);
        }
    }
    void pushdown(){
        if(ch[0]!=nullptr)ch[0]->flag^=1;
        if(ch[1]!=nullptr)ch[1]->flag^=1;
        flag^=1;
    }
};
struct fhqTreap{
    Node *root;
    fhqTreap(){
        root=nullptr;
    }
    pair<Node*,Node*> split_by_rank2(Node*o,int rk){
        // <=
        if(o==nullptr)return {nullptr,nullptr};
        o->cherk();
        int totleft = (o->ch[0]==nullptr?0:o->ch[0]->s);
        if(rk<=totleft){
            pair<Node*,Node*> temp=split_by_rank2(o->ch[0],rk);
            o->ch[0]=temp.second;
            o->maintain();
            return {temp.fs,o};
        }else{
            pair<Node*,Node*> temp=split_by_rank2(o->ch[1],rk-totleft-1);
            o->ch[1]=temp.first;
            o->maintain();
            return {o,temp.sc};
        }
    }
    Node *merge(Node *u,Node *v){
        if(u==nullptr&&v==nullptr)return nullptr;
        if(u!=nullptr&&v==nullptr)return u;
        if(u==nullptr&&v!=nullptr) return v;
        u->cherk();v->cherk();
        if(u->r < v->r){
            u->ch[1]=merge(u->ch[1],v);
            u->maintain();
            return u;
        }else{
            v->ch[0]=merge(u,v->ch[0]);
            v->maintain();
            return v;
        }
    }
    void insert(int val){
        pair<Node*,Node*> temp=split_by_rank2(root,val);
        pair<Node*,Node*> l_tr=split_by_rank2(temp.fs,val-1);
        Node *new_node;
        if(l_tr.sc==nullptr){
            new_node=new Node(val);
        }else{
            l_tr.sc->rep_c++;
            l_tr.sc->maintain();
        }
        Node *temp_left=merge(l_tr.first,l_tr.second==nullptr?new_node:l_tr.second);
        root=merge(temp_left,temp.sc);
    }
    void reverse(int l,int r){
        pair<Node*,Node*> temp=split_by_rank2(root,l-1);
        pair<Node*,Node*> lt=split_by_rank2(temp.sc,r-l+1);
        lt.first->flag^=1;
        root=merge(temp.fs,merge(lt.fs,lt.sc));
    }
    void print(Node*o){
        if(o==nullptr)return;
        o->cherk();
        print(o->ch[0]);
        cout<<o->v<<' ';
        print(o->ch[1]);
    }
};

void solve(){
    fhqTreap ft;
    int n,m,x,y;
    cin>>n>>m;
    for(int i=1;i<=n;++i){
        ft.insert(i);
    }
    while(m--){
        cin>>x>>y;
        ft.reverse(x,y);
    }
    ft.print(ft.root);
}

int main()
{
    solve();
    return 0;
}
```





