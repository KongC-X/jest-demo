import axios from 'axios'
import { runCallback , getData } from './demo'

jest.mock('axios')

test('测试 runCallback',() => {
  const func = jest.fn() //mock函数，捕获函数的调用
  runCallback(func)
  expect(func).toBeCalled()  //是否被调用
  console.log(func.mock);
})

test.only('测试 getData',async () => {
  axios.get.mockResolvedValue({data:'hello'})
  await getData().then((data) => {
    expect(data).toBe('hello')
  })
})