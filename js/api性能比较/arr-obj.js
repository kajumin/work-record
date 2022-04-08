const arr = new Array(100).fill(0).map((item, index) => ++index)
const obj = arr.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})
// console.log(arr)
// console.log(obj)
let value = ''
console.time('start')
for(let i = 1; i < 1000000; i++) {
  // value = obj[50] // 2
  arr.includes(90) // 4ms
}
console.timeEnd('start')
console.log(value)