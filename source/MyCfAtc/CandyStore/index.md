---
title: CandyStore
copyright_author: JoshuaZheng
date: 2023-02-26 16:49:51
---

![CandyStore](https://codeforces.com/contest/1798/problem/C)

贪心和数学（gcd和lcm那些）。
题意，大概是有n种糖果，每种ai个，单价为bi，一捆有di的，一捆的等价为ci

假设有一段区间，[l,r]，他们的ci一样，那么在只给出ai和bi情况下，能否使不同ci的个数最少。

贪心：显然区间是连续，那么我们可以增量的求一段区间的尽可能大的ci，直到结束或遇到找不到的合适ci的数时，ans++即可。

怎么找ci？
显然ci一定能整除ai*bi,即对于[l,r]来说，gcd(a\*b[l,r])=f，同时ci也必须能整除bi，即lcm(b[l,r])=g，那么，只要f%g==0，则我们总是能在[g,f]中找到合适的ci

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
const ll inf = 1e9 + 7;
const ll mod = 1e9 + 7;

ll a[maxn],b[maxn],c[maxn];

void solve(){
    int n,ans=0;
    cin>>n;
    ll g,f;
    g=f=0;
    for(int i=0;i<n;++i){
        cin>>a[i]>>b[i];
    }
    g=0;f=1;
    for(int i=0;i<n;++i){
        if(std::__gcd(g,a[i]*b[i])%((f*b[i])/std::__gcd(f,b[i]))!=0){
            g=0;f=1;
            ans++;
        }
        if(g==0){
            g=a[i]*b[i];
        }else {
            g=std::__gcd(g,a[i]*b[i]);
        }
        f=(f*b[i])/std::__gcd(f,b[i]);
    }
    cout<<ans+1<<endl;
}

int main()
{
    int t=1;
    cin >> t;
    while(t--)
    {
        solve();
    }
    system("pause");
    return 0;
}
```