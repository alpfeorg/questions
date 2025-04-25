# JavaScript 有哪些数据类型？哪些是基本类型？哪些是引用类型？

## JavaScript 数据类型概述

JavaScript 中的数据类型可以分为两大类：基本类型（原始类型）和引用类型。

## 基本类型（Primitive Types）

基本类型是存储在栈内存中的简单数据段，它们是按值访问的。JavaScript 中有 7 种基本类型：

1. **Number（数字）**
   - 包括整数和浮点数
   - 例如：`42`, `3.14`, `-1`

2. **String（字符串）**
   - 表示文本数据
   - 例如：`'hello'`, `"world"`, `` `template` ``

3. **Boolean（布尔值）**
   - 只有两个值：`true` 和 `false`

4. **Null（空值）**
   - 表示一个空值或不存在的对象
   - 例如：`null`

5. **Undefined（未定义）**
   - 表示变量已声明但未赋值
   - 例如：`undefined`

6. **Symbol（符号）**
   - ES6 新增，表示唯一的标识符
   - 例如：`Symbol('description')`

7. **BigInt（大整数）**
   - ES2020 新增，用于表示大于 2^53 - 1 的整数
   - 例如：`123n`

## 引用类型（Reference Types）

引用类型是存储在堆内存中的对象，它们是按引用访问的。JavaScript 中的引用类型包括：

1. **Object（对象）**
   - 最基础的引用类型
   - 例如：`{ name: 'John', age: 30 }`

2. **Array（数组）**
   - 有序的数据集合
   - 例如：`[1, 2, 3]`

3. **Function（函数）**
   - 可执行的代码块
   - 例如：`function() {}`

4. **Date（日期）**
   - 日期和时间
   - 例如：`new Date()`

5. **RegExp（正则表达式）**
   - 用于模式匹配
   - 例如：`/pattern/`

6. **Map（映射）**
   - ES6 新增，键值对集合
   - 例如：`new Map()`

7. **Set（集合）**
   - ES6 新增，唯一值的集合
   - 例如：`new Set()`

## 基本类型和引用类型的区别

1. **存储位置**
   - 基本类型：存储在栈内存中
   - 引用类型：存储在堆内存中，栈内存中存储的是指向堆内存的引用

2. **访问方式**
   - 基本类型：按值访问
   - 引用类型：按引用访问

3. **复制方式**
   - 基本类型：复制值
   - 引用类型：复制引用

4. **比较方式**
   - 基本类型：比较值
   - 引用类型：比较引用

## 示例代码

```javascript
// 基本类型示例
let num = 42;
let str = 'hello';
let bool = true;

// 引用类型示例
let obj = { name: 'John' };
let arr = [1, 2, 3];
let func = function() {};

// 基本类型复制
let a = 10;
let b = a;  // b 是 a 的值的副本
a = 20;     // 修改 a 不会影响 b
console.log(b); // 10

// 引用类型复制
let obj1 = { name: 'John' };
let obj2 = obj1;  // obj2 是 obj1 的引用
obj1.name = 'Jane'; // 修改 obj1 会影响 obj2
console.log(obj2.name); // 'Jane'
``` 