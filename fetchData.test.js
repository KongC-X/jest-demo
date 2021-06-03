import { fetchData } from './fetchData';

// test('fetchData 返回结果为 { success : true }', (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({
//       success:true
//     })
//     done();
//   })
// })

// test('fetchData 返回结果为 404', () => {
//   expect.assertions(1)  //用catch要加这句话
//   return fetchData().catch((e) => {
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// test('fetchData 返回结果为 { success : true }',async () => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data : {
//       success : true
//     }
//   })
// })

// test('fetchData 返回结果为404',() => {
//   return expect(fetchData()).rejects.toThrow()
// })

test('fetchData 返回结果为 { success : true }',async () => {
  const response = await fetchData()
  expect(response.data).toEqual({
    success:true
  })
})