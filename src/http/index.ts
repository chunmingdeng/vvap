import { def } from '@vue/shared';
import axios from 'axios'
import { httpStatus } from './status'

// ======public config start======
const publicCof = {
  baseURL: import.meta.env.VITE_AXIOS_BASEURL,
  timeout: 1000,
}

axios.interceptors.request.use(config => {
  console.log(1111)
  return config;
}, err => Promise.reject(err))

axios.interceptors.response.use(resp => {
  if(resp.status == 200) {
    const { data } = resp;
    if (data.respCode == 200) {
      return data;
    }
    if (data.respCode == httpStatus.UNAUTH) {
      //clear login info & redirect login url
    }
  } else {
    // 通过UI框架提示请求失败原因
  }
}, err => Promise.reject(err))
// ======public config end======


// ======需要携带token的请求实例 start======
export const axiosInstanceNeedAuth = axios.create({
  ...publicCof,
})
axiosInstanceNeedAuth.interceptors.request.use(config => {
  const TOKEN = localStorage.getItem('__TOKEN');
  if(TOKEN) (<any>config.headers).Authorizen = TOKEN;
  return config;
}, err => Promise.reject(err))
// ======需要携带token的请求实例 end======

// ======普通请求实例 start======
export const axiosInstance = axios.create({
  ...publicCof,
})
// ======普通请求实例 end======

export default {
  axiosInstance,
  axiosInstanceNeedAuth
}