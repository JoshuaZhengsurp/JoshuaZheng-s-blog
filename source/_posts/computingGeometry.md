---
title: 计算几何模板
copyright_author: JoshuaZheng
date: 2023-03-12 23:42:55
tags:
- 'acm'
- '计算几何'
- '算法'
categories: "acm"
keywords:
description:
top_img: 
comments:
cover: /image/linmeng2.png
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

本文主要提供模板，并对一些函数进行说明，模板来源于网络或书籍



## 点、向量模板

```cpp
#include <bits/stdc++.h>

using namespace std;
#define db double
typedef double dou;

const dou PI=acos(-1.0);
const dou eps=1e-8;
int sgn(db x){
    if(fabs(x)<eps)return 0;
    else return x<0?-1:1;
}
int dcmp(db x,db y){
    if(fabs(x-y)<eps)return 0;
    else return x<y?-1:1;
}

struct Point
{
    db x,y;
    Point(){}
    Point(db x,db y):x(x),y(y){}

    Point operator+(Point _p){return {x+_p.x,y+_p.y};}
    Point operator*(Point _p){return {x*_p.x,y*_p.y};}
    Point operator-(Point _p){return {x-_p.x,y-_p.y};}
    Point operator/(Point _p){return {x/_p.x,y/_p.y};}
    bool operator==(Point a){return sgn(x-a.x)==0&&sgn(y-a.y)==0;}

    Point operator+(db _p){return {x+_p,y+_p};}
    Point operator-(db _p){return {x-_p,y-_p};}
    Point operator*(db _p){return {x*_p,y*_p};}
    Point operator/(db _p){return {x/_p,y/_p};}

    db dt2(){return x*x+y*y;}
    db dt(){return sqrt(dt2());}
};

db dist(Point a,Point b){
    return (a-b).dt();
}
db dist2(Point a,Point b){
    return (a-b).dt2();
}//距离的平方（防止sqrt再平方进度丢失）
Point unit(Point a){
    return Point(a.x/a.dt(),a.x/a.dt());
}//单位向量

//vector
db dot(Point a,Point b){return a.x*b.x+a.y*b.y;}//点乘
db angle(Point a,Point b){
    return acos(dot(a,b)/a.dt()/b.dt());
}

db cross(Point a,Point b){return a.x*b.y-a.y*b.x;}//叉乘
db ABpos(Point a,Point b){return sgn(cross(a,b));}//b在a的什么方位
db area2(Point a,Point b,Point c){return cross(b-a,c-a);}
Point rotate(Point a,db rad){
    return Point(a.x*cos(rad)-a.y*sin(rad),a.x*sin(rad)+a.y*cos(rad));
}//逆时针旋转rad角度
bool parellel(Point a,Point b){return sgn(cross(a,b))==0;}//向量平行
```

## 直线&线段

（承接了点类）


```c++
#include <bits/stdc++.h>

using namespace std;
#define db double
typedef double dou;

const dou PI=acos(-1.0);
const dou eps=1e-8;
int sgn(db x){
    if(fabs(x)<eps)return 0;
    else return x<0?-1:1;
}
int dcmp(db x,db y){
    if(fabs(x-y)<eps)return 0;
    else return x<y?-1:1;
}

/****************Node/Vector*******************/
struct Point
{
    db x,y;
    Point(){}
    Point(db x,db y):x(x),y(y){}

    Point operator+(Point _p){return {x+_p.x,y+_p.y};}
    Point operator*(Point _p){return {x*_p.x,y*_p.y};}
    Point operator-(Point _p){return {x-_p.x,y-_p.y};}
    Point operator/(Point _p){return {x/_p.x,y/_p.y};}
    bool operator==(Point a){return sgn(x-a.x)==0&&sgn(y-a.y)==0;}

    Point operator+(db _p){return {x+_p,y+_p};}
    Point operator-(db _p){return {x-_p,y-_p};}
    Point operator*(db _p){return {x*_p,y*_p};}
    Point operator/(db _p){return {x/_p,y/_p};}

    db dt2(){return x*x+y*y;}
    db dt(){return sqrt(dt2());}
};
db dist(Point a,Point b){
    return (a-b).dt();
}
db dist2(Point a,Point b){
    return (a-b).dt2();
}
Point unit(Point a){
    return Point(a.x/a.dt(),a.x/a.dt());
}//单位向量

//vector
db dot(Point a,Point b){return a.x*b.x+a.y*b.y;}
db angle(Point a,Point b){
    return acos(dot(a,b)/a.dt()/b.dt());
}

db cross(Point a,Point b){return a.x*b.y-a.y*b.x;}
db ABpos(Point a,Point b){return sgn(cross(a,b));}//b在a的什么方位
db area2(Point a,Point b,Point c){return cross(b-a,c-a);}
Point rotate(Point a,db rad){
    return Point(a.x*cos(rad)-a.y*sin(rad),a.x*sin(rad)+a.y*cos(rad));
}//逆时针旋转rad角度
bool parellel(Point a,Point b){return sgn(cross(a,b))==0;}
/****************Node/Vector*******************/

/****************Line/Segment*******************/
struct Line
{
    Point p1,p2;
    Line(){}
    Line(Point p1,Point p2):p1(p1),p2(p2){}
    Line(Point p,double angle){//根据一个点和倾斜角，确定直线 [0,PI)
        p1=p;
        if(sgn(angle-PI/2)==0){p2=p1+Point(0,1);}
        else {p2=(p1+Point(1,tan(angle)));}
    }
    Line(db a,db b,db c){//ax+by+c=0
        if(sgn(a)==0){
            p1=Point(0,-c/b);
            p2=Point(1,-c/b);
        }else if(sgn(b)==0){
            p1=Point(-c/a,0);
            p2=Point(-c/a,1);
        }else{
            p1=Point(0,-c/b);
            p2=Point(1,(-c-a)/b);
        }
    }
    db len2(){
        return dist2(p1,p2);
    }
    db len(){
        return dist(p1,p2); 
    }
};
typedef Line Segment;
int point_line_ralation(Point p,Line v){
    int c=sgn(cross(p-v.p1,v.p2-v.p1));
    if(c<0) return 1;//p在v左侧
    if(c>0) return 2;//p在v右侧
    return 0;//p在v上
}
bool point_on_seg(Point p,Line v){
    return sgn(cross(p-v.p1,v.p2-v.p1))==0&&sgn(dot(p-v.p1,p-v.p2))<=0;
}//0：p不在线段v上，1：p在v上
db dis_point_line(Point p,Line v){
    return fabs(cross(p-v.p1,v.p2-v.p1)/v.len());
}//点到直线距离
Point point_line_proj(Point p,Line v){
    db k=dot(v.p2-v.p1,p-v.p1)/v.len2();
    return v.p1+(v.p2-v.p1)*k;
}//点在直线的投影
Point point_line_symmetry(Point p,Line v){
    Point q=point_line_proj(p,v);
    return Point(2*q.x-p.x,2*q.y-p.y);
}//点关于直线对称点
db dis_point_seg(Point p,Segment v){
    if(sgn(dot(p-v.p1,v.p2-v.p1))<0||sgn(dot(p-v.p2,v.p1-v.p2))<0){
        return min(dist(p,v.p1),dist(p,v.p2));
    }
    return dis_point_line(p,v);
}
int line_relation(Line v1,Line v2){
    if(sgn(cross(v1.p2-v1.p1,v2.p2-v2.p1))==0){
        if(point_line_ralation(v1.p1,v2)==0)return 1;//重合
        else return 0;//平行
    }
    return 2;//相交
}
Point cross_point(Point a,Point b,Point c,Point d){
    db s1=cross(b-a,c-a);
    db s2=cross(b-a,d-a);//考虑到叉积正负
    return Point(c.x*s2-d.x*s1,c.y*s2-d.y*s1)/(s2-s1);
}
Point cross_point(Line v1,Line v2){
    return cross_point(v1.p1,v1.p2,v2.p1,v2.p2);
}
bool cross_segment(Point a,Point b,Point c,Point d){
    db c1=cross(b-a,c-a),c2=cross(b-a,d-a);
    db d1=cross(d-c,a-c),d2=cross(d-c,b-c);
    return sgn(c1)*sgn(c2)<0&&sgn(d1)*sgn(d2)<0; 
    //1 相交，0 不相交
} 
/****************Line/Segment*******************/
```

## 多边形

```c++
#include <bits/stdc++.h>

using namespace std;
#define db double
typedef double dou;

const dou PI=acos(-1.0);
const dou eps=1e-8;
int sgn(db x){
    if(fabs(x)<eps)return 0;
    else return x<0?-1:1;
}
int dcmp(db x,db y){
    if(fabs(x-y)<eps)return 0;
    else return x<y?-1:1;
}

/****************Node/Vector*******************/
struct Point
{
    db x,y;
    Point(){}
    Point(db x,db y):x(x),y(y){}

    Point operator+(Point _p){return {x+_p.x,y+_p.y};}
    Point operator*(Point _p){return {x*_p.x,y*_p.y};}
    Point operator-(Point _p){return {x-_p.x,y-_p.y};}
    Point operator/(Point _p){return {x/_p.x,y/_p.y};}
    bool operator==(Point a){return sgn(x-a.x)==0&&sgn(y-a.y)==0;}

    Point operator+(db _p){return {x+_p,y+_p};}
    Point operator-(db _p){return {x-_p,y-_p};}
    Point operator*(db _p){return {x*_p,y*_p};}
    Point operator/(db _p){return {x/_p,y/_p};}

    bool operator<(Point&a){
        return sgn(x-a.x)<0||(sgn(x-a.x)==0&&sgn(y-a.y)<0);
    }

    db dt2(){return x*x+y*y;}
    db dt(){return sqrt(dt2());}
};
typedef Point Vector;
db dist(Point a,Point b){
    return (a-b).dt();
}
db dist2(Point a,Point b){
    return (a-b).dt2();
}
Point unit(Point a){
    return Point(a.x/a.dt(),a.x/a.dt());
}//单位向量

//vector
db dot(Point a,Point b){return a.x*b.x+a.y*b.y;}
db angle(Point a,Point b){
    return acos(dot(a,b)/a.dt()/b.dt());
}

// a X b > 0 -> a在b右侧，反之左侧
db cross(Point a,Point b){return a.x*b.y-a.y*b.x;}
db ABpos(Point a,Point b){return sgn(cross(a,b));}//b在a的什么方位
db area2(Point a,Point b,Point c){return cross(b-a,c-a);}
Point rotate(Point a,db rad){
    return Point(a.x*cos(rad)-a.y*sin(rad),a.x*sin(rad)+a.y*cos(rad));
}//逆时针旋转rad角度
bool parellel(Point a,Point b){return sgn(cross(a,b))==0;}
/****************Node/Vector*******************/

/****************Line/Segment*******************/
struct Line
{
    Point p1,p2;
    Line(){}
    Line(Point p1,Point p2):p1(p1),p2(p2){}
    Line(Point p,double angle){//根据一个点和倾斜角，确定直线 [0,PI)
        p1=p;
        if(sgn(angle-PI/2)==0){p2=p1+Point(0,1);}
        else {p2=(p1+Point(1,tan(angle)));}
    }
    Line(db a,db b,db c){//ax+by+c=0
        if(sgn(a)==0){
            p1=Point(0,-c/b);
            p2=Point(1,-c/b);
        }else if(sgn(b)==0){
            p1=Point(-c/a,0);
            p2=Point(-c/a,1);
        }else{
            p1=Point(0,-c/b);
            p2=Point(1,(-c-a)/b);
        }
    }
    db len2(){
        return dist2(p1,p2);
    }
    db len(){
        return dist(p1,p2); 
    }
};
typedef Line Segment;
int point_line_ralation(Point p,Line v){
    int c=sgn(cross(p-v.p1,v.p2-v.p1));
    if(c<0) return 1;//p在v左侧
    if(c>0) return 2;//p在v右侧
    return 0;//p在v上
}
bool point_on_seg(Point p,Line v){
    return sgn(cross(p-v.p1,v.p2-v.p1))==0&&sgn(dot(p-v.p1,p-v.p2))<=0;
}//0：p不在线段v上，1：p在v上
db dis_point_line(Point p,Line v){
    return fabs(cross(p-v.p1,v.p2-v.p1)/v.len());
}//点到直线距离
Point point_line_proj(Point p,Line v){
    db k=dot(v.p2-v.p1,p-v.p1)/v.len2();
    return v.p1+(v.p2-v.p1)*k;
}//点在直线的投影
Point point_line_symmetry(Point p,Line v){
    Point q=point_line_proj(p,v);
    return Point(2*q.x-p.x,2*q.y-p.y);
}//点关于直线对称点
db dis_point_seg(Point p,Segment v){
    if(sgn(dot(p-v.p1,v.p2-v.p1))<0||sgn(dot(p-v.p2,v.p1-v.p2))<0){
        return min(dist(p,v.p1),dist(p,v.p2));
    }
    return dis_point_line(p,v);
}
int line_relation(Line v1,Line v2){
    if(sgn(cross(v1.p2-v1.p1,v2.p2-v2.p1))==0){
        if(point_line_ralation(v1.p1,v2)==0)return 1;//重合
        else return 0;//平行
    }
    return 2;//相交
}
Point cross_point(Point a,Point b,Point c,Point d){
    db s1=cross(b-a,c-a);
    db s2=cross(b-a,d-a);//考虑到叉积正负
    return Point(c.x*s2-d.x*s1,c.y*s2-d.y*s1)/(s2-s1);
}
Point cross_point(Line v1,Line v2){
    return cross_point(v1.p1,v1.p2,v2.p1,v2.p2);
}
bool cross_segment(Point a,Point b,Point c,Point d){
    db c1=cross(b-a,c-a),c2=cross(b-a,d-a);
    db d1=cross(d-c,a-c),d2=cross(d-c,b-c);
    return sgn(c1)*sgn(c2)<0&&sgn(d1)*sgn(d2)<0; 
    //1 相交，0 不相交
} 
/****************Line/Segment*******************/

/****************polygon*******************/
//这里解释一些，这里是引入过点p的水平线，并与边相交
//统计p点与线的方位得出是否在多边形内
int point_in_polygon(Point pt,Point *p,int n){
    for(int i=0;i<n;++i){
        if(p[i]==pt)return 3;//pt在多边形顶点上
    }
    for(int i=0;i<n;++i){
        Line v=Line(p[i],p[(i+1)%n]);
        if(point_on_seg(pt,v))return 2;
    }
    int num=0;
    for(int i=0;i<n;++i){
        int j=(i+1)%n;
        int c=sgn(cross(pt-p[j],p[i]-p[j]));
        int u=sgn(p[i].y-pt.y);
        int v=sgn(p[j].y-pt.y);
        if(c>0&&u<0&&v>=0)num++;
        if(c<0&&u>=0&&v<0)num--;
    }

    return num!=0;//1:在内部；0：外部
}
db polygon_area(Point *p,int n){
    db area=0;
    for(int i=0;i<n;++i){
        area+=cross(p[i],p[(i+1)%n]);
    }
    return area/2;
}
//求多边形重心
//可以累加求和取平均，但是精度不够
//多边形的每个三角形的有向求和，且与该重心加权，最后总面积平均
Point polygon_center(Point*p,int n){
    Point res(0,0);
    for(int i=0;i<n;++i){
        res=res+(p[i]+p[(i+1)%n])*cross(p[i],p[(i+1)%n]);
    }
    return res/polygon_area(p,n)/6;
}
//andrew算法，从左到右扫描，求下凸包，从右到左，求下凸包，由于是凸多边形，相邻两边叉积符号相同
//返回凸包顶点数
int polygon_convex_hull(Point*p,int n,Point*convexHull){
    n=unique(p,p+n)-p;
    sort(p,p+n);
    int v=0;
    for(int i=0;i<n;++i){
        while(v>1&&sgn(cross(convexHull[v-1]-convexHull[v-2],p[i]-convexHull[v-1]))<=0)
        v--;
        convexHull[v++]=p[i];
    }
    int j=v;
    for(int i=n-2;i>=0;--i){
        while(v>j&&sgn(cross(convexHull[v-1]-convexHull[v-2],p[i]-convexHull[v-1]))<=0)v--;
        convexHull[v++]=p[i];
    }
    if(n>1)v--;
    return v;
}
//求最远点对（Antipodal Pair，对踵点对）
//思路，emm~求凸包+旋转卡壳（这个详写在markdown上）。
db get_longest(Point*ch,int cnt){
    int j=2;
    ch[cnt]=ch[0];
    db res=0;
    if(cnt<3){
        return dist2(ch[0],ch[1]);
    }
    for(int i=0;i<cnt;++i){
        while(fabs(cross(ch[i+1]-ch[i],ch[j]-ch[i+1]))<=fabs(cross(ch[i+1]-ch[i],ch[(j+1)%cnt]-ch[i+1]))){
            ++j;j%=cnt;
        }
        res=max(res,max(dist2(ch[i],ch[j]),dist2(ch[i+1],ch[j])));
    }
    return res;
}

/****************polygon*******************/

/*
这里需要稍微介绍下半平面交：
所谓半平面，就是一条有向直线，将平面分割成两部分
而这条有向直线（向量）的左边，就是我们要关注的平面
一般而言，一个半平面交为凸多边形，但也有可能是无界多边形
*/
struct Disline{
    Point p;//直线上的一个点
    Vector v;//方向向量
    double ang;//方向角(从x坐标轴旋转到v的角度，用于极角排序)
    Disline(){}
    Disline(Point p,Vector v):p(p),v(v){
        ang=atan2(v.y,v.x);
    }
    bool operator<(Disline&L){
        return ang<L.ang;
    }
};
bool onleft(Disline l,Point p){
   return sgn(cross(l.v,p-l.p))>0;//不包括共线的时候
}
//对于有向直线/向量的写法
Point cross_point_dis(Disline a,Disline b){
    Vector u=a.p-b.p;
    db t=cross(b.v,u)/cross(a.v,b.v);
    return a.p+a.v*t;
}
//求半平面交，返回凸多边形
int halfplantintersection(Disline* L,int n,Point*poly){
    sort(L,L+n);
    int first,last;
    Point *p=new Point[n];//符合条件的点集
    Disline *q=new Disline[n];//双端队列
    q[first=last=0]=L[0];
    for(int i=1;i<n;++i){
        while(first<last&&!onleft(L[i],p[last-1]))--last;
        while(first<last&&!onleft(L[i],p[first]))++first;
        q[++last]=L[i];
        if(fabs(cross(q[last].v,q[last-1].v))<eps){
            last--;
            if(onleft(q[last],L[i].p))q[last]=L[i];
        }
        if(first<last)p[last-1]=cross_point_dis(q[last-1],q[last]);
    }
    while(first<last&&!onleft(q[first],p[last-1]))last--;
    if(last-first<=1){
        delete[] p,q;
        return 0;
    }
    p[last]=cross_point_dis(q[last],q[first]);
    int m=0;
    for(int i=first;i<=last;++i){
        poly[m++]=p[i];
    }
    delete[] p,q;
    return m;
}
```

## 最近公共点对

```cpp
#include <bits/stdc++.h>
using namespace std;

#define IO                       \
ios::sync_with_stdio(false); \
cin.tie(0);
#define FI freopen("Data.in", "r", stdin);
#define FO freopen("Data.out", "w", stdout);
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
const dou inf = 2e9 + 7;
const ll mod = 1e9 + 7;

// const dou INF = 2e18;

struct node{
    dou x,y;
    bool operator<(const node&a){
        return x<a.x;
    }
}nd[maxn];
int t[maxn];

inline dou dist2(int a,int b){
    return sqrt((nd[a].x-nd[b].x)*(nd[a].x-nd[b].x)+(nd[a].y-nd[b].y)*(nd[a].y-nd[b].y));
}

bool cmp(int a,int b){
    return nd[a].y<nd[b].y;
}

dou divideANDconquer(int l,int r){
    if(l>=r)return inf;
    int mid=(l+r)/2;
    dou res=min(divideANDconquer(l,mid),divideANDconquer(mid+1,r));
    int k=0;
    for(int i=l;i<=r;++i){
        if(nd[mid].x+res>nd[i].x&&nd[mid].x-res<nd[i].x){
            t[k++]=i;
        }
    }
    sort(t,t+k,cmp);
    for(int i=0;i<k;++i){
        for(int j=i+1;j<k;++j){
            if(fabs(nd[t[j]].y-nd[t[i]].y)<res)
            res=min(dist2(t[i],t[j]),res);
        }
    }
    return res;
}

void solve(){
    int n;
    cin>>n;
    for(int i=1;i<=n;++i){
        cin>>nd[i].x>>nd[i].y;
    }
    sort(nd+1,nd+n+1);
    cout<<fixed<<setprecision(4)<<divideANDconquer(1,n)<<endl;
}

int main()
{
    int t=1;
    //cin >> t;
    while(t--)
    {
        solve();
    }
    system("pause");
    return 0;
}
```



## 旋转卡壳、半平面交

```c++
#include <bits/stdc++.h>

using namespace std;
#define db double
typedef double dou;

const dou PI=acos(-1.0);
const dou eps=1e-8;
int sgn(db x){
    if(fabs(x)<eps)return 0;
    else return x<0?-1:1;
}
int dcmp(db x,db y){
    if(fabs(x-y)<eps)return 0;
    else return x<y?-1:1;
}

/****************Node/Vector*******************/
struct Point
{
    db x,y;
    Point(){}
    Point(db x,db y):x(x),y(y){}

    Point operator+(Point _p){return {x+_p.x,y+_p.y};}
    Point operator*(Point _p){return {x*_p.x,y*_p.y};}
    Point operator-(Point _p){return {x-_p.x,y-_p.y};}
    Point operator/(Point _p){return {x/_p.x,y/_p.y};}
    bool operator==(Point a){return sgn(x-a.x)==0&&sgn(y-a.y)==0;}

    Point operator+(db _p){return {x+_p,y+_p};}
    Point operator-(db _p){return {x-_p,y-_p};}
    Point operator*(db _p){return {x*_p,y*_p};}
    Point operator/(db _p){return {x/_p,y/_p};}

    bool operator<(Point&a){
        return sgn(x-a.x)<0||(sgn(x-a.x)==0&&sgn(y-a.y)<0);
    }

    db dt2(){return x*x+y*y;}
    db dt(){return sqrt(dt2());}
};
db dist(Point a,Point b){
    return (a-b).dt();
}
db dist2(Point a,Point b){
    return (a-b).dt2();
}
Point unit(Point a){
    return Point(a.x/a.dt(),a.x/a.dt());
}//单位向量

//vector
db dot(Point a,Point b){return a.x*b.x+a.y*b.y;}
db angle(Point a,Point b){
    return acos(dot(a,b)/a.dt()/b.dt());
}

// a X b > 0 -> a在b右侧，反之左侧
db cross(Point a,Point b){return a.x*b.y-a.y*b.x;}
db ABpos(Point a,Point b){return sgn(cross(a,b));}//b在a的什么方位
db area2(Point a,Point b,Point c){return cross(b-a,c-a);}
Point rotate(Point a,db rad){
    return Point(a.x*cos(rad)-a.y*sin(rad),a.x*sin(rad)+a.y*cos(rad));
}//逆时针旋转rad角度
bool parellel(Point a,Point b){return sgn(cross(a,b))==0;}
/****************Node/Vector*******************/

int polygon_convex_hull(Point*p,int n,Point*convexHull){
    n=unique(p,p+n)-p;
    sort(p,p+n);
    int v=0;
    for(int i=0;i<n;++i){
        while(v>1&&sgn(cross(convexHull[v-1]-convexHull[v-2],p[i]-convexHull[v-1]))<=0)
        v--;
        convexHull[v++]=p[i];
    }
    int j=v;
    for(int i=n-2;i>=0;--i){
        while(v>j&&sgn(cross(convexHull[v-1]-convexHull[v-2],p[i]-convexHull[v-1]))<=0)v--;
        convexHull[v++]=p[i];
    }
    if(n>1)v--;
    return v;
}
//求最远点对（Antipodal Pair，对踵点对）
//思路，emm~求凸包+旋转卡壳（这个详写在markdown上）。
db get_longest(Point*ch,int cnt){
    int j=2;
    ch[cnt]=ch[0];
    db res=0;
    if(cnt<3){
        return dist2(ch[0],ch[1]);
    }
    for(int i=0;i<cnt;++i){
        while(fabs(cross(ch[i+1]-ch[i],ch[j]-ch[i+1]))<=fabs(cross(ch[i+1]-ch[i],ch[(j+1)%cnt]-ch[i+1]))){
            ++j;j%=cnt;
        }
        res=max(res,max(dist2(ch[i],ch[j]),dist2(ch[i+1],ch[j])));
    }
    return res;
}
```

## 圆

```cpp
#include <bits/stdc++.h>

using namespace std;
#define db double
typedef double dou;

const dou PI=acos(-1.0);
const dou eps=1e-8;
int sgn(db x){
    if(fabs(x)<eps)return 0;
    else return x<0?-1:1;
}
int dcmp(db x,db y){
    if(fabs(x-y)<eps)return 0;
    else return x<y?-1:1;
}

/****************Node/Vector*******************/
struct Point
{
    db x,y;
    Point(){}
    Point(db x,db y):x(x),y(y){}

    Point operator+(Point _p){return {x+_p.x,y+_p.y};}
    Point operator*(Point _p){return {x*_p.x,y*_p.y};}
    Point operator-(Point _p){return {x-_p.x,y-_p.y};}
    Point operator/(Point _p){return {x/_p.x,y/_p.y};}
    bool operator==(Point a){return sgn(x-a.x)==0&&sgn(y-a.y)==0;}

    Point operator+(db _p){return {x+_p,y+_p};}
    Point operator-(db _p){return {x-_p,y-_p};}
    Point operator*(db _p){return {x*_p,y*_p};}
    Point operator/(db _p){return {x/_p,y/_p};}

    bool operator<(Point&a){
        return sgn(x-a.x)<0||(sgn(x-a.x)==0&&sgn(y-a.y)<0);
    }

    db dt2(){return x*x+y*y;}
    db dt(){return sqrt(dt2());}
};
db dist(Point a,Point b){
    return (a-b).dt();
}
db dist2(Point a,Point b){
    return (a-b).dt2();
}
Point unit(Point a){
    return Point(a.x/a.dt(),a.x/a.dt());
}//单位向量

//vector
db dot(Point a,Point b){return a.x*b.x+a.y*b.y;}
db angle(Point a,Point b){
    return acos(dot(a,b)/a.dt()/b.dt());
}

// a X b > 0 -> a在b右侧，反之左侧
db cross(Point a,Point b){return a.x*b.y-a.y*b.x;}
db ABpos(Point a,Point b){return sgn(cross(a,b));}//b在a的什么方位
db area2(Point a,Point b,Point c){return cross(b-a,c-a);}
Point rotate(Point a,db rad){
    return Point(a.x*cos(rad)-a.y*sin(rad),a.x*sin(rad)+a.y*cos(rad));
}//逆时针旋转rad角度
bool parellel(Point a,Point b){return sgn(cross(a,b))==0;}
/****************Node/Vector*******************/


/****************Line/Segment*******************/
struct Line
{
    Point p1,p2;
    Line(){}
    Line(Point p1,Point p2):p1(p1),p2(p2){}
    Line(Point p,double angle){//根据一个点和倾斜角，确定直线 [0,PI)
        p1=p;
        if(sgn(angle-PI/2)==0){p2=p1+Point(0,1);}
        else {p2=(p1+Point(1,tan(angle)));}
    }
    Line(db a,db b,db c){//ax+by+c=0
        if(sgn(a)==0){
            p1=Point(0,-c/b);
            p2=Point(1,-c/b);
        }else if(sgn(b)==0){
            p1=Point(-c/a,0);
            p2=Point(-c/a,1);
        }else{
            p1=Point(0,-c/b);
            p2=Point(1,(-c-a)/b);
        }
    }
    db len2(){
        return dist2(p1,p2);
    }
    db len(){
        return dist(p1,p2); 
    }
};
typedef Line Segment;
int point_line_ralation(Point p,Line v){
    int c=sgn(cross(p-v.p1,v.p2-v.p1));
    if(c<0) return 1;//p在v左侧
    if(c>0) return 2;//p在v右侧
    return 0;//p在v上
}
bool point_on_seg(Point p,Line v){
    return sgn(cross(p-v.p1,v.p2-v.p1))==0&&sgn(dot(p-v.p1,p-v.p2))<=0;
}//0：p不在线段v上，1：p在v上
db dis_point_line(Point p,Line v){
    return fabs(cross(p-v.p1,v.p2-v.p1)/v.len());
}//点到直线距离
Point point_line_proj(Point p,Line v){
    db k=dot(v.p2-v.p1,p-v.p1)/v.len2();
    return v.p1+(v.p2-v.p1)*k;
}//点在直线的投影
Point point_line_symmetry(Point p,Line v){
    Point q=point_line_proj(p,v);
    return Point(2*q.x-p.x,2*q.y-p.y);
}//点关于直线对称点
db dis_point_seg(Point p,Segment v){
    if(sgn(dot(p-v.p1,v.p2-v.p1))<0||sgn(dot(p-v.p2,v.p1-v.p2))<0){
        return min(dist(p,v.p1),dist(p,v.p2));
    }
    return dis_point_line(p,v);
}
int line_relation(Line v1,Line v2){
    if(sgn(cross(v1.p2-v1.p1,v2.p2-v2.p1))==0){
        if(point_line_ralation(v1.p1,v2)==0)return 1;//重合
        else return 0;//平行
    }
    return 2;//相交
}
Point cross_point(Point a,Point b,Point c,Point d){
    db s1=cross(b-a,c-a);
    db s2=cross(b-a,d-a);//考虑到叉积正负
    return Point(c.x*s2-d.x*s1,c.y*s2-d.y*s1)/(s2-s1);
}
Point cross_point(Line v1,Line v2){
    return cross_point(v1.p1,v1.p2,v2.p1,v2.p2);
}
bool cross_segment(Point a,Point b,Point c,Point d){
    db c1=cross(b-a,c-a),c2=cross(b-a,d-a);
    db d1=cross(d-c,a-c),d2=cross(d-c,b-c);
    return sgn(c1)*sgn(c2)<0&&sgn(d1)*sgn(d2)<0; 
    //1 相交，0 不相交
} 
/****************Line/Segment*******************/


/********************Circle**********************/
struct Circle{
	Point c;
	db r;
	Circle(){}
	Circle(Point c,db r):c(c),r(r){}
	Circle(db x,db y,db _r){c=Point(x,y);r=_r;}
};
int point_circle_relation(Point p,Circle C){
	db dst=dist(p,C.c);
	//0：圆内、1：圆上、2：圆外
	if(sgn(dst-C.r)<0)return 0;
	if(sgn(dst-C.r)==0)return 1;
	return 2;
}
int line_circle_relation(Line v,Circle C){
	double dst=dis_point_line(C.c,v);
	//0：相交、1：相切、2：圆外
	if(sgn(dst-C.r)<0)return 0;
	else if(sgn(dst-C.r)==0)return 1;
	else return 2;
}
int seg_circle_relation(Segment v,Circle C){
	db dst=dis_point_seg(C.c,v);
	//0：线段在圆外，1：线段于圆先切或端点在圆上，2：线段在圆外
	if(sgn(dst-C.r)<0)return 0;
	if(sgn(dst-C.r)==0)return 1;
	return 2;
}
int line_cross_circle(Line v,Circle C,Point &pa,Point &pb){
	if(line_circle_relation(v,C)==2)return 0;
	Point q=point_line_proj(C.c,v);
	db d=dis_point_line(C.c,v);
	db k=sqrt(C.r*C.r-d*d);
	if(sgn(k)==0){
		pa=q;pb=q;return 1;//相切
	}
	Point n=(v.p2-v.p1)/v.len();//单位向量
	pa=q+n*k;pb=q-n*k;
	return 2;//两个交点
}
//最小圆覆盖
//circle_centet()求三角形abc外接圆圆心
//min_cover_circle()返回圆心、半径
inline Point circle_center(const Point a,const Point b,const Point c){
    db a1=b.x-a.x,b1=b.y-a.y,c1=(a1*a1+b1*b1)/2;
    db a2=c.x-a.x,b2=c.y-a.y,c2=(a2*a2+b2*b2)/2;
    db d=a1*b2-a2*b1;
    Point center;center.x=a.x+(c1*b2-c2*b1)/d;center.y=a.y+(a1*c2-a2*c1)/d;return center;
    // return Point(a.x+(c1*b2-c2*b1)/d,a.y+(a1*c2-a2*c1)/d);
}
void min_cover_circle(Point*p,int n,Point&c,db&r){
    random_shuffle(p,p+n);//打乱所有点（使得复杂度接近O(n)）
    c=p[0];r=0;//从第1个点p[0]开始，半径为0
    for(int i=1;i<n;++i){//扩展所有点
        if(sgn(dist(p[i],c)-r)>0){//点p在圆外部，重设圆心
            c=p[i];r=0;
            for(int j=0;j<i;++j){
                if(sgn(dist(p[j],c)-r)>0){
                    c.x=(p[i].x+p[j].x)/2;
                    c.y=(p[i].y+p[j].y)/2;
                    r=dist(p[j],c);
                    for(int k=0;k<j;++k){
                        if(sgn(dist(p[k],c)-r)>0){//两点不能定圆时，三点定圆
                            c=circle_center(p[i],p[j],p[k]);
                            r=dist(p[i],c);
                        }
                    }
                }
            }
        }
    }
}
/********************Circle**********************/
```

