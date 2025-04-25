# 指南

欢迎使用 VitePress 文档！

# JavaScript 交互式示例

在这里，你可以尝试运行一些 JavaScript 代码示例。

## 基础示例

<RunCode>

```js
function sayHello(name) {
  return `Hello, ${name}!`
}

console.log(sayHello('World'))
```

</RunCode>

## 对象示例

<RunCode>

```js
const person = {
  name: 'Alice',
  age: 25,
  greet() {
    return `我叫 ${this.name}，今年 ${this.age} 岁`
  }
}

console.log(person.greet())
```

</RunCode>

## 数组操作示例

<RunCode>

```js
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(n => n * 2)
console.log('原始数组:', numbers)
console.log('加倍后:', doubled)
```

</RunCode>

你可以点击每个代码块下方的"运行"按钮来执行代码，查看运行结果。如果想要清除结果，可以点击"清除"按钮。
