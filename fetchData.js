import axios from "axios";

// export const fetchData = (fn) => {
//   axios.get('').then((response) => {
//     fn(response.data)
//   })
// }

export const fetchData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}