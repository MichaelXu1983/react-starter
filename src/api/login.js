import request from '@/utils/request'


export async function queryLoginByPass(params) {
    return request('/oauth/token', {
      method: 'POST',
      body: params,
    })
}
export async function queryLogout(params) {
  return request('/v4/user', {
    method: 'POST',
    body: params,
  })
}