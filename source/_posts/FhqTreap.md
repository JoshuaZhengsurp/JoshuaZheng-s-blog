---
title: FhqTreap
copyright_author: JoshuaZheng
date: 2023-02-26 16:49:51
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
# 无旋Treap(FHQ-Treap)

支持维护序列，可持久化等特性

又称分裂合并treap。

相比于普通的Treap，相同操作下，fhqTreap速度上稍慢些（频繁的使用分裂合并操作），但是代码的编写要比普通Treap容易些，并且也更能胜任区间问题。

通过分裂合并方式动态维护堆的性质。

## 基本操作：
直接上模板代码了。
```cpp
#include <bits/stdc++.h>
using namespace std;

/***********************************************/

struct Node{
    Node *ch[2];
    int r;//prioroty
    int v,s,rep_c;//value,size,rep_cnt（the number of the same value）
    Node(int v=0):v(v){
        r=rand();//非常重要！！！
        ch[0]=ch[1]=nullptr;
        rep_c=s=1;
    }
    void maintain(){
        s=rep_c;
        if(ch[0]!=nullptr)s+=ch[0]->s;
        if(ch[1]!=nullptr)s+=ch[1]->s;
    }
};

struct fhqTreap{
    Node *root;
    fhqTreap(){
        root=nullptr;
    }

    //分裂treap树，以key值为关键值，分裂成两颗树，一棵树是小于或等于key值的，另一颗是大于key值（so？有什么用吗？插入、删除等都需要这操作）
    pair<Node*,Node*> split(Node*o,int key){
        //代码以递归的方式呈现
        if(o==nullptr)return {nullptr,nullptr};
        if(o->v<=key){
            pair<Node*,Node*> temp=split(o->ch[1],key);
            o->ch[1]=temp.first;
            o->maintain();
            return {o,temp.second};
        }else{
            pair<Node*,Node*> temp=split(o->ch[0],key);
            o->ch[0]=temp.second;
            o->maintain();
            return {temp.first,o};
        }
    }
    //这里是以排名为关键值来分裂，分裂成三颗树（），分别为小于，等于，大于排名rk的tree，和上面的split比较类似
    tuple<Node*,Node*,Node*> split_by_rank(Node*o,int rk){
        if(o==nullptr)return {nullptr,nullptr,nullptr};
        int totleft=(o->ch[0]==NULL?0:o->ch[0]->s);//判断排名，同时考虑重复出现一个值的情况（rep_c）
        if(rk<=totleft){
            //递归，差不多
            Node *l,*mid,*r;
            tie(l,mid,r)=split_by_rank(o->ch[0],rk);
            o->ch[0]=r;
            o->maintain();
            return {l,mid,o};
        }else if(rk<=totleft+o->rep_c){
            //因为找到了对应排名的点Node（并列第几）
            Node *lt=o->ch[0],*rt=o->ch[1];
            o->ch[0]=o->ch[1]=nullptr;
            return {lt,o,rt};
        }else{
            Node *l,*mid,*r;
            tie(l,mid,r)=split_by_rank(o->ch[1],rk-totleft-(o->rep_c));
            o->ch[1]=l;
            o->maintain();
            return {o,mid,r};
        }
    }
    //合并两棵树
    Node* merge(Node *u,Node *v){
        //elements in u is smaller that elements in v
        if(u==nullptr&&v==nullptr)return nullptr;
        if(u!=nullptr&&v==nullptr)return u;
        if(v!=nullptr&&u==nullptr)return v;

        //通过优先级priority维护堆的性质
        if(u->r<v->r){
            u->ch[1]=merge(u->ch[1],v);
            u->maintain();
            return u;
        }else{
            v->ch[0]=merge(u,v->ch[0]);
            v->maintain();
            return v;
        }
    }

    //插入操作。
    void insert(int val){
        //思路很简单，将treap分裂两次先分裂出(<=val)和（>val）的树，然后再分裂（<=val）变成（<val）和(==val)的两棵树，然后堆（==val）的这棵树进行操作
        pair<Node*,Node*> temp=split(root,val);
        pair<Node*,Node*> l_tr=split(temp.first,val-1);
        
        Node *new_node;
        if(l_tr.second==nullptr){
            new_node=new Node(val);
        }else{
            l_tr.second->rep_c++;
            l_tr.second->maintain();
        }
        Node *temp_left=merge(l_tr.first,l_tr.second==nullptr?new_node:l_tr.second);
        root=merge(temp_left,temp.second);//操作结束，合并回去
    }
    //删除
    void remove(int val){
        //这里思路也差不多

        pair<Node*,Node*> temp=split(root,val);
        pair<Node*,Node*> l_tr=split(temp.first,val-1);

        if(l_tr.second->rep_c>1){
            --l_tr.second->rep_c;
            l_tr.second->maintain();
            l_tr.first=merge(l_tr.first,l_tr.second);
        }else{
            if(temp.first==l_tr.second){
                temp.first=nullptr;
                //最初分裂的树中，含val的树只有一个点
            }
            delete l_tr.second;
            l_tr.second=nullptr;
        }
        root=merge(l_tr.first,temp.second);//操作结束，合并回去
    }
    //查找val在这颗树上的排名
    int qrand(Node*o,int val){
        if(o==nullptr)return 0;
        pair<Node*,Node*> temp=split(o,val-1);
        int ret=(temp.first==nullptr?0:temp.first->s)+1;
        root=merge(temp.first,temp.second);
        return ret;
    }
    //排名为k的数是几
    int kth(Node*o,int k){
        Node *l,*mid,*r;
        tie(l,mid,r)=split_by_rank(o,k);
        int ret=mid->v;
        root=merge(merge(l,mid),r);
        return ret;
    }
    //第一个小于v的数
    int pfnum(Node*o,int v){
        pair<Node*,Node*> temp=split(root,v-1);
        int ret=kth(temp.first,temp.first->s);
        root=merge(temp.first,temp.second);
        return ret;
    }
    //第一个大于v的数
    int sfnum(Node*o,int v){
        pair<Node*,Node*> temp=split(root,v);
        int ret=kth(temp.second,1);
        root=merge(temp.first,temp.second);
        return ret;
    }
};

fhqTreap tr;

/***********************************************/
```

## 区间操作
除了处理旋转treap的基本操作之外，fhqTreap比较合适处理一些区间问题