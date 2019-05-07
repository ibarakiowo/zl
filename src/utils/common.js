/**
 *debounce                      延迟执行（在指定的时间内只执行一次）
 *
 * @param {function} func       需要执行的函数
 * @param {number} delay        延迟时间
 * @returns
 */
export const debounce = (func, delay) => {
  let timer
  delay = delay || 200
  return function (...args) {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        resolve(func.apply(this, args))
      }, delay)
    })
  }
}
