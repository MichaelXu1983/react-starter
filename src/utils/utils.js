import routerData from '@/router/index'
import moment from 'moment'
import { parse, stringify } from 'qs'
import { getAuthority } from './storage'
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val
}

export const addZore = n => (n < 10 ? '0' + n : '' + n)

export const second2time = (s = 0) => {
  let m = 0,
    h = 0
  m = Math.floor(s / 60)
  s = s % 60
  h = Math.floor(m / 60)
  m = m % 60
  return `${h}小时${addZore(m)}分${addZore(s)}秒`
}

export function getTimeDistance(type) {
  const now = new Date()
  const oneDay = 1000 * 60 * 60 * 24

  if (type === 'today') {
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    return [moment(now), moment(now.getTime() + (oneDay - 1000))]
  }

  if (type === 'week') {
    let day = now.getDay()
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)

    if (day === 0) {
      day = 6
    } else {
      day -= 1
    }

    const beginTime = now.getTime() - day * oneDay

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))]
  }

  if (type === 'month') {
    const year = now.getFullYear()
    const month = now.getMonth()
    const nextDate = moment(now).add(1, 'months')
    const nextYear = nextDate.year()
    const nextMonth = nextDate.month()

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(
        moment(
          `${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`
        ).valueOf() - 1000
      ),
    ]
  }

  if (type === 'year') {
    const year = now.getFullYear()

    return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)]
  }
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = []
  nodeList.forEach(node => {
    const item = node
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/')
    item.exact = true
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path))
    } else {
      if (item.children && item.component) {
        item.exact = false
      }
      arr.push(item)
    }
  })
  return arr
}

function accMul(arg1, arg2) {
  let m = 0
  const s1 = arg1.toString()
  const s2 = arg2.toString()
  m += s1.split('.').length > 1 ? s1.split('.')[1].length : 0
  m += s2.split('.').length > 1 ? s2.split('.')[1].length : 0
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / 10 ** m
}

export function digitUppercase(n) {
  const fraction = ['角', '分']
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟', '万']]
  let num = Math.abs(n)
  let s = ''
  fraction.forEach((item, index) => {
    s += (digit[Math.floor(accMul(num, 10 * 10 ** index)) % 10] + item).replace(
      /零./,
      ''
    )
  })
  s = s || '整'
  num = Math.floor(num)
  for (let i = 0; i < unit[0].length && num > 0; i += 1) {
    let p = ''
    for (let j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p
      num = Math.floor(num / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }

  return s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!') // eslint-disable-line
  }
  const arr1 = str1.split('/')
  const arr2 = str2.split('/')
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2
  }
  return 3
}

export function getRenderArr(routes) {
  let renderArr = []
  renderArr.push(routes[0])
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1)
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3)
    if (isAdd) {
      renderArr.push(routes[i])
    }
  }
  return renderArr
}

export function getRouterConfig(pathname) {
  if (pathname.indexOf('?') !== -1) {
    pathname = pathname.split('?')[0]
  }
  return routerData.find(v => v.path === pathname)
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1])
}

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query)
  if (search.length) {
    return `${path}?${search}`
  }
  return path
}

export function replaceChars(str, length, pos, mask) {
  mask = mask ? mask : '*'
  let replacement = ''
  for (let i = 0; i < length; i++) {
    replacement += mask
  }
  if (pos === 'front') {
    let regexp = new RegExp('.{1,' + length + '}')
    return str.replace(regexp, replacement)
  } else if (pos === 'middle') {
    let replacement = ''
    for (let i = 0; i < str.length - length * 2; i++) {
      replacement += mask
    }
    let regexp = new RegExp(
      '.{' + (str.length - length) + ',' + str.length + '}'
    )
    return (
      str.substring(0, length) +
      str.replace(regexp, replacement) +
      str.substring(str.length - length)
    )
  } else {
    let regexp = new RegExp(
      '.{' + (str.length - length) + ',' + str.length + '}'
    )
    return (
      str.substring(0, str.length - length) + str.replace(regexp, replacement)
    )
  }
}

export function dateFormat(format, date) {
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  }
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (var k in o)
    if (new RegExp('(' + k + ')').test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return format
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/

export function isUrl(path) {
  return reg.test(path)
}

export function getQueryString(name, query) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = decodeURIComponent(query)
    .substr(1)
    .match(reg)
  if (r != null) {
    return unescape(r[2])
  } else {
    return null
  }
}

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function getDeviceSystem() {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //g
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  const isWeiXin = !!u.match(/MicroMessenger/i) //微信浏览器

  let system = ''
  if (isWeiXin) {
    system = 'weixin'
  } else if (isAndroid) {
    system = 'android'
  } else if (isIOS) {
    system = 'ios'
  } else {
    system = 'web'
  }
  return system
}

export const hasLogin = () => {
  return getAuthority('token').length > 0
}
