export function getAuthority() {
  return localStorage.getItem('token')
}

export function setAuthority(token) {
  return localStorage.setItem('token', token)
}

export function removeAuthority() {
  return localStorage.removeItem('token')
}

export function getUserId() {
  return localStorage.getItem('user_id')
}

export function setUserId(user_id) {
  return localStorage.setItem('user_id', user_id)
}

export function removeUserId() {
  return localStorage.removeItem('user_id')
}

export function setShowHead(h) {
  return localStorage.setItem('isShowHead', h)
}

export function getShowHead() {
  return localStorage.getItem('isShowHead')
}

export function setInitHead(h) {
  return localStorage.setItem('initShowHead', h)
}

export function getInitHead() {
  return localStorage.getItem('initShowHead')
}
