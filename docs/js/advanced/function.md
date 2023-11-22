# 函数进阶

## 函数的主要属性

由于函数也是对象，所有的函数都属于 `Function` 类，因此函数也有属性和方法，这些属性与方法都继承自 `Function` 类

### `length`
函数的 length 属性表示函数的形参个数

::: code-group
```js [index.js]
function fn(a, b) {
  console.log(fn.length); // 2
}
```
:::

### `arguments`
函数的 arguments 属性表示函数的实参对象，该属性是类数组对象，包含函数的实参

::: code-group
```js [index.js]
function fn(a, b) {
  console.log(arguments); // Arguments(2)[1, 2]
}
fn(1, 2);
```
:::

### `caller`
函数的 caller 属性表示调用当前函数的函数，该属性只在函数内部使用，在全局作用域下访问该属性会报错

::: code-group
```js [index.js]
function fn() {
  console.log(caller);
}
:::

## 回调函数

### 定义

被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。