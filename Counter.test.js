import { describe } from "yargs";
import Counter from "./Counter"

let counter = null

//钩子函数的作用域在 describe 里
// describe(()=>{})

beforeAll(()=>{
  console.log('beforeAll');
  // counter = new Counter()
})

beforeEach(()=>{
  console.log('beforeEach');
  counter = new Counter()
})

afterEach(()=>{
  console.log('afterEach');
})

afterAll(()=>{
  console.log('afterAll');
})
//test.only
test('测试 counter 中的 addOne 方法',() => {
  console.log('测试 counter 中的 addOne 方法');
  counter.addOne()
  expect(counter.number).toBe(1);
})
test('测试 counter 中的 minusOne 方法',() => {
  console.log('测试 counter 中的 minusOne 方法');
  counter.minusOne()
  expect(counter.number).toBe(-1);
})