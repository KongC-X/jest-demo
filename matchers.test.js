// test('测试10与10相匹配',() => {
//   //toBe 匹配器 matchers
//   const a = { one : 1 };
//   expect(a).toEqual({one : 1});
// })

// //string
test('toMatch',() => {
  const str = "http://www.ruimengmeng.cn"
  expect(str).toMatch(/ruimengmeng/);
})

// //Array,Set
test('toContain',() => {
  const arr = ['rui','meng','meng']
  const data = new Set(arr)
  expect(data).toContain("rui");
})

//异常
const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}
test('toThrow',() => {
  expect(throwNewErrorFunc).toThrow(/this is a new error/)
})