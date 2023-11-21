---
title: splay（伸展树）
tags: 
  -算法
  -数据结构
  -acm
  -个人学习笔记
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
## 前言
本人是从[OI wiki](https://oi-wiki.org/ds/splay/)学到的splay（模板代码来自于OIwiki），若希望更好的阅读体验，可去oiwiki阅读相关内容。

## 概念

**Splay Tree**: 一种平衡二叉树，拥有二叉查找树的性质，同时通过伸展操作，实现的插入、查找、删除等操作均摊在O(logn)，当然分裂和合并操作也是可实现的（常用），并且保持平衡（几乎不可能为链）

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

### 删除等操作
#### 查询x的排名
和treap差不多。

当前节点为v，

1. v比x小，往左子树找
2. v比x大，rk-（v->left->s）-1,右子树找
3. 若x与v相同，返回

```cpp
//假设k是存在的
int rk(int k){
    int res=0,cur=rt;
    while(1){
        if(k<val[cur]){
            cur=ch[cur][0];
        }else{
            res+=sz[ch[cur][0]];
            if(k==val[cur]){
                splay(cur);
                return res+1;
            }
            res+=cnt[cur];
            cur=ch[cur][1];
        }
    }
}
//考虑k可能不存在二叉树里
int rk2(int k){
    int res=0,cur=rt;
}
```

#### 查询x排名的数
1. 左子树剩余排名<=x,往右子树找，
2. 往左子树找

```cpp
int kth(int k){
    int cur=rt;
    while(1){
        if(ch[cur][0]&&k<=sz[ch[cur][0]]){
            cur=ch[cur][0];
        }else{
            k-=cnt[cur]+sz[ch[cur][0]];
            if(k<=0){
                splay(cur);
                return val[cur];
            }
            cur=ch[cur][1];
        }
    }
}
```

#### 查询前驱&后继
1. 前驱： 小于x的最大的数

插入x，splay(x)，查找并返回节点，删除x
```cpp
int pre(int x){insert(x);pre();remove(x);}
int pre(){
    int cur=ch[rt][0];
    if(!cur)return cur;
    while(ch[cur][1])cur=ch[cur][1];
    splay(cur);
    return cur;
}
```
2. 后继： 大于x的最小的数

同上类似。
```cpp
int nxt(int x){insert(x);nxt();remove(x);}
int nxt(){
    int cur=ch[rt][1];
    if(!cur)return cur;
    while(ch[cur][0])cur=ch[cur][1];
    splay(cur);
    return cur;
}
```


#### 删除(remove)
1. 若cnt\[x]>1，那么cnt\[x]--即可。
2. 反之，splay(x)，合并左右子树。

```cpp
void del(int k){
    rk(k);
    if(cnt[rt]>1){
        cnt[rt]--;
        maintain(rt);
        return;
    }
    if(!ch[rt][0]&&!ch[rt][1]){
        clear(rt);
        rt=0;
        return;
    }
    if(!ch[rt][0]){
        int cur=rt;
        rt=ch[rt][1];
        fa[rt]=0;
        clear(cur);
    }
    if(!ch[rt][1]){
        int cur=rt;
        rt=ch[rt][0];
        fa[rt]=0;
        clear(cur);
    }
    int cur=rt,x=pre();//cur的前驱将成为新的根
    fa[ch[cur][1]]=x;
    ch[x][1]=ch[cur][1];
    clear(cur);
    maintain(rt);
}
```
#### 分裂(split)
```cpp
k为排名，nrt表示要分裂的根节点（稍微改了下kth()函数，详细见下面模板）
pair<int,int> split(int k,int nrt){
     if(k==0){return {0,nrt};}
     if(k==sz[nrt]){return {nrt,0};}
     kth(k,nrt);
     pair<int,int> res;
     res.first=rt;
     res.second=ch[rt][1];
     fa[res.second]=0;
     ch[res.first][1]=0;
     maintain(res.first);
     return res;
 }
```
#### 合并(merge)
假设：x节点的数均小于y的
```cpp
//这里rt专指x这棵树的根（可能需要魔改）
int merge(int x,int y){
     if(!x&&!y)return 0;
     if(!x&&y)return y;
     if(!y&&x)return x;
     cherk(x);cherk(y);
     kth(sz[x],x);
     ch[rt][1]=y;
     fa[y]=rt;
     maintain(rt);
     return rt;
 }
```

## 模板代码：
```cpp
#include<iostream>

using namespace std;

const int N=100005;
int rt,tot,fa[N],ch[N][2],cnt[N],sz[N],val[N];

struct Splay
{
    void maintain(int x){
        sz[x]=sz[ch[x][0]]+sz[ch[x][1]]+cnt[x];
    }

    bool get(int x){return x==ch[fa[x]][1];}//是左儿子还是右儿子

    void clear(int x){
        ch[x][0]=ch[x][1]=fa[x]=val[x]=sz[x]=cnt[x]=0;
    }//x给free

    void rotate(int x){//旋转
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

    void splay(int x){
        for(int f=fa[x];f=fa[x],f;rotate(x)){
            if(fa[f])rotate(get(x)==get(f)?f:x);
        }
        rt=x;
    }

    void insert(int k){//插入
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
            cur=ch[cur][val[cur]<k];
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
    int rk(int k){//查询k的排名
        int res=0,cur=rt;
        while(1){
            if(k<val[cur]){
                cur=ch[cur][0];
            }else{
                res+=sz[ch[cur][0]];
                if(k==val[cur]){
                    splay(cur);
                    return res+1;
                }
                res+=cnt[cur];
                cur=ch[cur][1];
            }
        }
    }
    int kth(int k,int nrt=rt){//找第k大
        int cur=nrt;
        while(1){
            cherk(cur);
            if(ch[cur][0]&&k<=sz[ch[cur][0]]){
                cur=ch[cur][0];
            }else{
                k-=cnt[cur]+sz[ch[cur][0]];
                if(k<=0){
                    splay(cur);
                    return val[cur];
                }
                cur=ch[cur][1];
            }
        }
    }
    int nxt(){
        int cur=ch[rt][1];
        if(!cur)return cur;
        while(ch[cur][0])cur=ch[cur][0];
        splay(cur);
        return cur;
    }
    int pre(){
        int cur=ch[rt][0];
        if(!cur)return cur;
        while(ch[cur][1])cur=ch[cur][1];
        splay(cur);
        return cur;
    }
    void del(int k){//删除
        rk(k);
        if(cnt[rt]>1){
            cnt[rt]--;
            maintain(rt);
            return;
        }
        if(!ch[rt][0]&&!ch[rt][1]){
            clear(rt);
            rt=0;
            return;
        }
        if(!ch[rt][0]){
            int cur=rt;
            rt=ch[rt][1];
            fa[rt]=0;
            clear(cur);
            return;
        }
        if(!ch[rt][1]){
            int cur=rt;
            rt=ch[rt][0];
            fa[rt]=0;
            clear(cur);
            return;
        }
        int cur=rt;
        int x=pre();
        fa[ch[cur][1]]=x;
        ch[x][1]=ch[cur][1];
        clear(cur);
        maintain(rt);
    }
    pair<int,int> split(int k,int nrt){
        if(k==0){return {0,nrt};}
        if(k==sz[nrt]){return {nrt,0};}
        kth(k,nrt);
        pair<int,int> res;
        res.first=rt;
        res.second=ch[rt][1];
        fa[res.second]=0;
        ch[res.first][1]=0;
        maintain(res.first);
        return res;
    }
    int merge(int x,int y){
        if(!x&&!y)return 0;
        if(!x&&y)return y;
        if(!y&&x)return x;
        cherk(x);cherk(y);
        kth(sz[x],x);
        ch[rt][1]=y;
        fa[y]=rt;
        maintain(rt);
        return rt;
    }
};
```

## 模板题[Permutation Transformer](https://vjudge.net/problem/UVA-11922)

emm~其实还是比较有难度的（这里先提供``双倍经验``（其实这道更简单，也算是fhqTreap模板题）：[文艺平衡树](https://www.luogu.com.cn/problem/P3391)）

### 思路：
1. 首先就必须将值\[1...n]顺序插入，使得中序遍历有序
2. 要对序列下标区间\[x,y]进行操作，我们可以用splay分裂操作，将这树分成\[1,x-1]，\[x,y]，\[y+1,n]。
3. 将\[1,x-1]、\[y+1,n]进行合并。
4. **对\[x,y]进行反转**？：如果直接进行反转，一次就要O(n)了，必超时。所有我们采用标记和pushdown()下传标记的方法来解决（这步想到了就基本完成了），我们知道，我们要对一棵树的中序遍历（左子树-节点-右子树）结果反转，只需要反转他们的输出顺序即可（右子树-节点-左子树），那么我们将节点进行标记（不立即反转），当在分裂合并过程中再次访问到该节点时，在进行反转操作（pushdown()）。

### 题解代码(个人)：
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
const int maxn=1e5+3;
const ll inf = 1e9 + 7;
const ll mod = 1e9 + 7;

struct Splay
{
    int rt;
    int tot;
    int sz[maxn],cnt[maxn],fa[maxn],ch[maxn][2],val[maxn];
    int flag[maxn];

    Splay(){
        memset(sz,0,sizeof sz);
        memset(cnt,0,sizeof cnt);
        memset(fa,0,sizeof fa);
        memset(flag,0,sizeof flag);
        memset(ch,0,sizeof ch);
        rt=tot=0;
    }
    void maintain(int x){
        sz[x]=sz[ch[x][0]]+sz[ch[x][1]]+cnt[x];
    }
    int get(int x){
        return x==ch[fa[x]][1];
    }
    void clear(int x){
        fa[x]=val[x]=cnt[x]=ch[x][0]=ch[x][1]=sz[x]=0;
    }

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
    void splay(int x){
        for(int f=fa[x];f=fa[x],f;rotate(x)){
            if(fa[f])rotate(get(x)==get(f)?f:x);
        }
        rt=x;
    }
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
            cur=ch[cur][val[cur]<k];
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
    int kth(int k,int nrt){
        int cur=nrt;
        while(1){
            cherk(cur);
            if(ch[cur][0]&&k<=sz[ch[cur][0]]){
                cur=ch[cur][0];
            }else{
                k-=cnt[cur]+sz[ch[cur][0]];
                if(k<=0){
                    splay(cur);
                    return val[cur];
                }
                cur=ch[cur][1];
            }
        }
    }

    void pushdown(int x){
        swap(ch[x][0],ch[x][1]);
        flag[ch[x][0]]^=1;
        flag[ch[x][1]]^=1;
        flag[x]=0;
    }
    void cherk(int x){
        if(x&&flag[x])pushdown(x);
    }

    pair<int,int> split(int k,int nrt){
        if(k==0){return {0,nrt};}
        if(k==sz[nrt]){return {nrt,0};}
        kth(k,nrt);
        pair<int,int> res;
        res.first=rt;
        res.second=ch[rt][1];
        fa[res.second]=0;
        ch[res.first][1]=0;
        maintain(res.first);
        return res;
    }
    int merge(int x,int y){
        if(!x&&!y)return 0;
        if(!x&&y)return y;
        if(!y&&x)return x;
        cherk(x);cherk(y);
        kth(sz[x],x);
        ch[rt][1]=y;
        fa[y]=rt;
        maintain(rt);
        return rt;//放回合并后的节点
    }

    void print(int x){
        if(x==0)return;
        cherk(x);
        print(ch[x][0]);
        cout<<val[x]<<endl;
        print(ch[x][1]);
    }
}tr;

void Treverse(int l,int r){
    pii temp1=tr.split(l-1,tr.rt);
    pii temp2=tr.split(r-l+1,temp1.sc);
    tr.flag[temp2.fs]=1;
    int rt=tr.merge(temp1.fs,temp2.sc);
    tr.rt=tr.merge(rt,temp2.fs);
}//反转

void solve(){
    int n,m;
    cin>>n>>m;
    for(int i=1;i<=n;++i){
        tr.insert(i);    
    }
    int x,y;
    while(m--){
        cin>>x>>y;
        Treverse(x,y);
    }
    tr.print(tr.rt);
}

int main()
{
    IO
        solve();
    return 0;
}
```