import NoNetwork from '@/assets/Exception/network.svg'
const config = {
  401: {
    img: NoNetwork,
    title: '401',
    desc: '抱歉，登录失效，请重新登录',
  },
  403: {
    img: NoNetwork,
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: NoNetwork,
    title: '404',
    desc: '抱歉，你访问的页面不存在',
  },
  500: {
    img: NoNetwork,
    title: '500',
    desc: '抱歉，网络繁忙，请稍后再试',
  },
  NoNetwork: {
    img: NoNetwork,
    title: '网络异常',
    desc: '当前网络不可用，请检查您的网络设置',
  },
}

export default config
