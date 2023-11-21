---
title: deepCopy
copyright_author: JoshuaZheng
date: 2023-11-03 13:56:12
tags: 
  - "Javascript"
  - "前端"
categories: 
  - "前端"
keywords:
description:
top_img:
comments:
cover: /image/relima-js.jpg
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
# deepCopy

## Goat

- 递归对象
- 明确深拷贝时需重新构造的对象类型（object，array，symbol, date, set, map, function）
- 元编程（反推数据类型）
- weakMap解决循环引用问题

## Code

类型判断
```js
const is = {
    Array: Array.isArray,
    Date: (val) => val instanceof Date,
    Set: (val) => Object.prototype.toString.call(val) === '[object Set]' || val instanceof Set,
    Map: (val) => Object.prototype.toString.call(val) === '[object Map]' || val instanceof Map,
    Object: (val) => (Object.prototype.toString.call(val) === '[object Object]' || typeof val === 'object') && val !== null,
    Symbol: (val) => Object.prototype.toString.call(val) === '[object Symbol]' || typeof val === 'symbol',
    Function: (val) => Object.prototype.toString.call(val) === '[object Function]' || typeof val === 'function',
}
```
深拷贝
```js
function deepClone(value, weakMap = new WeakMap()) {

    // 函数深拷贝
    if (is.Function(value)) {
        // 正则表达式判断 函数 / 匿名函数
        if (/^function/.test(value.toString()) || /^\(\)/.test(value.toString())) {
            return new Function('return ' + value.toString())();
        }
        return new Function('return function ' + value.toString())();
    }
    // Date 
    if (is.Date(value)) {
        return new Date(value.valueOf());
    }
    // Symbol
    if (is.Symbol(value)) {
        return Symbol(value.description);
    }
    // Map
    if (is.Map(value)) {
        const newMap = new Map();
        for (const item of value) {
            // console.log('value', item, value);
            newMap.set(deepClone(item[0], weakMap), deepClone(item[1], weakMap))
        }
        return newMap
    }
    // Set
    if (is.Set(value)) {
        const newSet = new Set();
        value.forEach(item => newSet.add(deepClone(item, weakMap)))
        return newSet
    }


    // WeakMap 解决循环引用问题  eg. test.test = test的问题
    if (weakMap.has(value)) {
        return weakMap.get(value)
    }


    // Object, base data type
    if (!(is.Object(value))) {
        return value;
    }

    // Array
    if (is.Array(value)) {
        const newArr = [];
        for (const item in value) {
            newArr[item] = deepClone(value[item], weakMap);
        }
        return newArr;
    }

    // isObj
    // const newObj = is.Array(value) ? [] : {};
    const newObj = {};
    weakMap.set(value, newObj);
    for (const key in value) {
        weakMap.set(value, newObj);
        newObj[key] = deepClone(value[key], weakMap);
    }
    // Symbol 作为key进行特殊处理， 拿到对象上面的所有Symbol key，以数组形式返回
    const symbolKeys = Object.getOwnPropertySymbols(value);
    for (const sKey of symbolKeys) {
        newObj[sKey] = deepClone(value[sKey], weakMap);
    }

    return newObj;
}
```

## More

1. function deepCopy
   ```js
    // 通过正则，判断value为函数 / 匿名函数
    // [Function: funName], [Function (anonymous)]
    if (is.Function(value)) {
        // 正则表达式判断 函数 / 匿名函数
        if (/^function/.test(value.toString()) || /^\(\)/.test(value.toString())) {
            return new Function('return ' + value.toString())();
        }
        return new Function('return function ' + value.toString())();
    }
   ```
2. Symbol
    ES6, 新，基础数据类型
    每个Symbol实例都是唯一的
    ```js
        let s1 = Symbol()
        let s2 = Symbol('joshua')
        let s3 = Symbol('joshua')
        s2 === s3 // false
        s1 === s2 // false
    ```
    - 作为对象属性名（key）
        ```js
            const PROP_1 = Symbol()
            const PROP_2 = Symbol()

            let obj = {
                [PROP_1]: 'Joshua'
            }
            obj[PROP_2] = 'Zheng';

            obj[PROP_1] // 'Joshua'
            obj[PROP_2] // 'Zheng'
        
            // 正常枚举无法枚举到Symbol

            const obj2 = {
                a:1,
                b:2,
                [Symbol('c')]:3,
            }
            Object.keys(obj2)   // ['a','b']

            for(let p in obj2){
                console.log(p)  // 'a', 'b'
            }

            Object.getOwnPropertyNames(obj2)    // ['a', 'v']
        
            // Reflect.ownKeys(obj) / Object.getOwnPropertySymbols
            Object.getOwnPropertySymbols(obj2) // [Symbol(c)],
            Reflect.ownKeys(obj2) // [Symbol(c), 'a'. 'b']
        ```
    - 作为常量
    - 私有属性/方法
      ```js
      // a
      const PASSWORD = Symbol()

      class Login {
        constructor(username, password) {
          this.username = username
          this[PASSWORD] = password
        }

        checkPassword(pwd) {
            return this[PASSWORD] === pwd
        }
      }

      export default Login

      // b
      import Login from './a'

      const login = new Login('admin', '123456')

      login.checkPassword('123456')  // true

      login.PASSWORD  // oh!no!
      login[PASSWORD] // oh!no!
      login["PASSWORD"] // oh!no!
      ```
    - 注册/获取全局Symbol:
        ```js
            let gs1 = Symbol.for('global_symbol_1')
            let gs2 = Symbol.for('global_symbol_1')

            gs1 === gs2 // true
        ```
    - 自定义迭代器/对象行为
        ``` js
        const myObj = {
          data: ['A', 'B', 'C'],
          [Symbol.iterator]() {
            let index = 0;
            const data = this.data;
            return {
              next() {
                if (index < data.length) {
                  return { value: data[index++], done: false };
                } else {
                  return { done: true };
                }
              }
            };
          }
        };

        for (const item of myObj) {
          console.log(item); // 输出: 'A', 'B', 'C'
        }
        ```
        Symbol.iterator：表示对象的默认迭代器。
        Symbol.toPrimitive：表示对象如何转换为原始值。
        Symbol.asyncIterator：表示对象的默认异步迭代器。
    [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#constructor)
3.weakMap
    - weakMap只接受对象作为键名（引用类型）
    - WeakMap 不支持对键和值进行迭代
    - 弱引用
    - Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键；WeakMap的键是弱引用，键所指向的对象是可以被垃圾回收，此时键是无效的。

    适用场景：
        Dom节点获取（弱引用，是否清除有Dom自身决定）
        存储额外数据
        私有数据存储

        ```js
            const privateData = new WeakMap();
            class MyClass {
                constructor(){
                    privateData.set(this, {
                        _privateProp: 'value'
                    })
                }

                getPrivateProp(){
                    return privateData.get(this)._privateProp;
                }
            }
        ```


