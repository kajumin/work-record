const mil = 1000000
const arr = new Array(mil).fill(1)

console.time('one')
// for(let i = 0; i < arr.length; i++) {} // 2ms
// for(const key of arr) {} // 性能不好 // 14
// arr.forEach(() => {}) // 11
// arr.map((v) => v) // 16
// arr.reduce(() => {}, 0) // 10

const res = arr.reduce((prev) => {
  // prev.push(1)
  // return prev
  return prev.concat(1)
}, [])
// const res = arr.reduce((prev) => {
//   // return 1 // 10ms
//   // return [...prev, 1] // 导致性能不好
// }, [])
console.timeEnd('one')