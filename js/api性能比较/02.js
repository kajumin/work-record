// reg和includes判断是否存在某子串
const str = "sssssabcjisagjadsg";
const reg = /abc/
console.time("start");
for (let i = 1; i < 1000000; i++) {
  str.includes("abc"); // 30
  // reg.test(str); // 38
}
console.timeEnd("start");
