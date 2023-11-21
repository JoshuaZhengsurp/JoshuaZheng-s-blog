---
title: react 拓展
copyright_author: JoshuaZheng
date: 2023-10-19 23:46:50
tags: 
  - "Vue.js"
  - "前端"
categories: 
  - "前端"
keywords:
description:
top_img:
comments:
cover: /image/react-lm.jpg
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


# 拓展

## setState

- setState(stateChangeObj, [callback_Func])
- setState(update_Func,  [callback_Func])

```
1.对象式的setState是函数式的setState的简写方式(语法糖)
2.使用原则：
	1).如果新状态不依赖于原状态 ===> 使用对象方式
	2).如果新状态依赖于原状态 ===> 使用函数方式
	3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取
```



## Lazy Load

```tsx
import React, { Component, lazy, Suspense } from 'react'

//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const About = lazy(() => (import('../../components/About')))
const Home = lazy(() => (import('../../components/Home')))

//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面, 必须是静态标签/组件
<Suspense fallback={<h1>LOADING......</h1>}>
  {/* 组测路由 */}
  <Route path="/about" component={About} />
  <Route path="/home" component={Home} />
</Suspense>
```

## Hooks

- React Hook/Hooks是什么?

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

- 三个常用的Hook

  ```
  (1). State Hook: React.useState()
  (2). Effect Hook: React.useEffect()
  (3). Ref Hook: React.useRef()
  ```

### State

```
const [count, setCount] = useState(0)

function add() {
    // setCount(count + 1)
    setCount(() => {
      return count + 1;
    })
  }
```

### Effect

```
useEffect(() => { 
  // 在此可以执行任何带副作用操作
  return () => { // 在组件卸载前执行
    // 在此做一些收尾工作, 比如清除定时器/取消订阅等，相当于回调函数，组件卸载时，也会再次被调用
  }
}, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
```

### ref

与createRef基本一致

## Fragment

```tsx

<Fragment><Fragment>
<></>

可以不用必须有一个真实的DOM根标签了, 挂上应该虚拟标签（相当于vue的template，渲染时不会显示，但是Fragment可且只能绑定key）
```

## Context

一种组件间通信方式, 常用于 **祖组件** 与 **后代组件** 间通信

```tsx
// 创建上下文
import React, { createContext } from 'react'
const MyContext = createContext({ name: '' })

// 使用Provider为后代提供上下文
const { Provider, Consumer } = MyContext
class A extends Component {
  state: Readonly<{ name: string }> = {
    name: 'Joshuazheng'
  };
  render(): React.ReactNode {
    return (
      <div className="A">
        <div>这是A</div>
        <div>A的{this.state.name}</div>
        <Provider value={{ name: this.state.name }}>
          <B />
        </Provider>
      </div>
    )
  }
}

// 后代组件使用
class C extends Component {
  static contextType = MyContext
  render(): React.ReactNode {
    const { name } = this.context as any
    return (
      <>
        <div className="C">
          <div>这是C</div>
          <div>{name}</div>
        </div>
      </>
    )
  }
}

// 函数组件使用
function D() {
  return (
    <div className="C">
      <div>D</div>
      <Consumer>
          {
            value => {
              return (
                <div>{value.name}</div>
              )
            } 
          }
      </Consumer>
    </div>
  )
}
```

## Component render optimize

- 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
- 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低

=> 当state/props发生改变时，重新render

控制shouldComponentUpdate() （因为默认返回true）

1. 重写shouldComponentUpdate()方法

   比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false

2. 使用PureComponent
   PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true

   注：

   ```
   只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
   不要直接修改state数据, 而是要产生新数据项目中一般使用PureComponent来优化
   ```

## render props

类似于vue插槽

1. children props

   ```tsx
   <div className="B">
       <div>这是B</div>
   </div>
   
   // 使用
   <A>
       <B></B>
   </A>
   
   // A组件
   {this.props.children}
   ```

2. render props 可携带数据

   ```tsx
   <A render={(name: string) => <B name={name}></B>}></A>
   
   // A
   {this.props.render(name)}
   ```

   

## ErrorBoundary

错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面：区分好发生错误的位置

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

```tsx
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```

## 组件通信

```tsx
	父子组件：props
	兄弟组件：消息订阅-发布、集中式管理
	祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)
```

