// deduplicate([1, 1, 2, 3, 4, 5, 5]) // -> [1, 2, 3, 4, 5]

// 利用 Set 过滤重复值
// 优点：简单
// 缺点：额外申请内存
function deduplicate(arr) {
  const set = new Set();
  for (const n of arr) {
    set.add(n);
  }
  return Array.from(set);
}

// 先排序，再使用双指针遍历修改item项
// 优点：不占用内存
// 缺点：排序占用时间
function deduplicate_2(arr) {
  arr.sort();
  var il = 0;
  var ir = 1;
  while (ir < arr.length) {
    if (arr[il] == arr[ir]) {
      ++ir;
      continue;
    }
    arr[il + 1] = arr[ir];
    ++il;
    ++ir;
    continue;
  }
  arr.length = il + 1;
  return arr;
}

console.log(deduplicate([1, 1, 2, 3, 4, 5, 5]));
console.log(deduplicate_2([1, 1, 2, 3, 4, 5, 5]));



// snake_case 转换成 camelCase
function snake2camel(key) {
  var s = "";
  var flag = false;
  for (var i = 0; i < key.length; ++i) {
    const c = key.charAt(i);
    if (c == '_') {
      if (i == 0) // '_'开头的不处理
        continue;
      flag = true;
      continue;
    }

    const c_code = c.charCodeAt(0);
    if (c_code < 65 || (c_code > 90 && c_code < 97) || c_code > 122) // 大小写字母
      return key;

    const c_upper = c.toUpperCase();
    if (flag && c != c_upper) { // '_'和后一个小写字母替换为大写字母
      s += c_upper;
      flag = false;
      continue;
    }
    if (!flag && c == c_upper) { // 异常的大写字母转为小写字母
      s += c.toLowerCase();
      continue;
    }

    flag = false;
    s += c;
  }
  return s;
}

console.log(snake2camel("snake_case"));
console.log(snake2camel("_snake_case"));
console.log(snake2camel("snake_case_"));
console.log(snake2camel("snake__case"));
console.log(snake2camel("_"));
console.log(snake2camel("Snake_case"));
console.log(snake2camel("sNake_Case"));
console.log(snake2camel("~!@#_abc_&*()_+"));



// 首次渲染+监视后续的尺寸变化
/*
import { useSize } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';

export default function TestSizeComp({ maxWidth, maxHeight }) {
  const ref = useRef(null);
  const size = useSize(ref);
  const [reqCnt, setReqCnt] = useState(0);

  useEffect(() => {
    if (size) {
      if (reqCnt == 0)
        console.log("first req", size.width, size.height);
      else if (size.width < maxWidth && size.height < maxHeight)
        console.log("onsize req", size.width, size.height);
      setReqCnt(reqCnt + 1);
    }
  }, [size]);

  return (
    <div ref={ref}>
      width: {size?.width} ~ height: {size?.height}
    </div>
  );
}

<TestSizeComp maxWidth={300} maxHeight={300} />
*/



//解释下面这个工具类型的用法
// type Something<T, K extends keyof T = keyof T> = {
//   [P in K] = T[P];
// };

/**
 * 对模板语法不熟，看起来是利用模板来做编译期 object.key 合法检查
 */



// AbortController 非 HTTP 请求的例子
/**
 * 官网有例子
 * https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal/throwIfAborted#%E5%AE%9E%E7%8E%B0%E5%8F%AF%E4%B8%AD%E6%AD%A2%E7%9A%84_api
 */
function myCoolPromiseAPI(/* … ,*/ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    if (signal.aborted) {
      reject(signal.reason);
    }

    // Perform the main purpose of the API
    // Call resolve(result) when done.

    // Watch for 'abort' signals
    signal.addEventListener('abort', () => {
      // Stop the main operation
      // Reject the promise wth the abort reason.
      reject(signal.reason);
    });
  });
}

const controller = new AbortController();
const signal = controller.signal;

function startSpinner() { }
function stopSpinner() { }

startSpinner();

myCoolPromiseAPI({ /* … ,*/ signal })
  .then((result) => { })
  .catch((err) => {
    if (err.name === 'AbortError') return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
