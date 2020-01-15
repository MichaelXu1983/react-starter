import { Toast } from 'antd-mobile'
import { getAuthority } from '@/utils/storage'
import store from '@/index'
import { fetchAccountInvalid } from '@/actions/login'

// 定义 http 请求，返回消息对象
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

// 统一处理 http 请求返回，因为当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject，所以此处必须自定义处理这种情况，参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
function checkStatus(response) {
  // 检查 response 的状态是否在200-299(包括200,299)这个范围内，
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === 409 // 409 为 gitlab 特有
  ) {
    return response
  }
  const errortext = codeMessage[response.status] || response.statusText
  console.error(`请求错误 ${response.status}: ${response.url}`)
  Toast.fail(errortext)
  const error = new Error(errortext)
  error.name = response.status
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include', // 发送包含凭据的请求：不论是不是跨域的请求，总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息
  }
  const newOptions = { ...defaultOptions, ...options }
  // 自定义 http 请求默认键值
  newOptions.headers = {
    Authorization: `Bearer ${getAuthority()}`, // Basic Authentication
  }

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
      newOptions.body = JSON.stringify(newOptions.body)
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      }
    }
  }
  Toast.loading('请求数据中...')
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => {
      Toast.hide()
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text()
      }
      return response.json()
    })

    .catch(e => {
      Toast.hide()
      const { dispatch } = store
      const status = e.name
      const history = require('history').createBrowserHistory()
      const pathname = history.location.hash.replace('#', '')
      
      if (status === 401) {
        dispatch(fetchAccountInvalid(pathname))
        return
      }
      if (status === 403) {
        window.location.href = '#/exception/403'
        return
      }
      if (status <= 504 && status >= 500) {
        window.location.href = '#/exception/500'
        return
      }
      if (status >= 404 && status < 422) {
        window.location.href = '#/exception/404'
        return
      }
      return Promise.reject(e)
    })
}
