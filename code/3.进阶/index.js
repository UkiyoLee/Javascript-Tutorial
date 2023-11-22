// 回调函数

/**
 * 手写一个函数map,传递一个数组arr作为原始数组的数据，map函数需要用户自定义对数组的操作行为（用户写一个函数），该行为
 * 依次对数组的每一个元素生效，且该行为需要用到元素的值和对应的下标，我们需要按照顺序将该行为的返回结
 * 果依次打包成数组作为map函数的返回值
 */

// 将函数体作为参数传递，并调用

function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i))
  }
  return result;
}

//  使用fn(参数列表)----定义fn
// ---定义map------用户使用map()------->

// 1. 回调函数是先使用后定义
// 2. 回调函数的参数列表是在使用阶段定义的


const mapper = map([1, 2, 4, 8], (value, index) => {
  return value * 2 + index;
});

console.log(mapper);