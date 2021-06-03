jest.mock('./util')
//util util.a util.b   jest.fn
import Util from './util'
import demoFunction from './demo1'

test('测试 demoFunction',() => {
  demoFunction()
  expect(Util).toHaveBeenCalled()
  // console.log(Util.mock)
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})