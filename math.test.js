  // var result = add(3,7)
  // var expected = 10

  // if(result !== 10){
  //   throw Error(`3 + 7 应该等于 ${expected}, 但是结果却是 ${result}`);
  // }

  // var result = minus(3,3)
  // var expected = 0

  // if(result !== 0){
  //   throw Error(`3 - 3 应该等于 ${expected}, 但是结果却是 ${result}`);
  // }

  // expect(add(3,7)).toBe(10)
  // expect(minus(6,3)).toBe(3)




  // function expect(result) {
  //   return{
  //     toBe: function (actual) {  
  //       if(result !== actual){
  //         throw new Error(`预期值和实际值不相等,预期${actual},结果却是${result}`)
  //       }
  //     }
  //   }
  // }
  
  // function test(desc ,fn ){
  //   try {
  //     fn()
  //     console.log(`${desc} 通过测试`);
  //   } catch (e) {
  //     console.log(`${desc} 没有通过测试`);
  //   }
  // }

  //单元测试，集成测试
  //模块测试，多个模块测试


  //npm run jest
  //jest (babel-jest)
  //babel-core
  //取 .babelrc 配置
  //在运行测试之前，结合 babel，先把你的代码做一次转化
  //运行转化过的测试用例代码

// const math = require('./math.js')
// const { add,minus,multi } = math

import { add,minus,multi } from './math';

test('测试加法 3 + 7',() => {
  expect(add(3,7)).toBe(10)
})

test('测试减法 3 - 3',() => {
  expect(minus(3,3)).toBe(0)
})

test('测试乘法 3 * 3',() => {
  expect(multi(3,3)).toBe(9)
})