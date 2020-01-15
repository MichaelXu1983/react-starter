import request from '@/utils/request'

export async function fetchRegister(params) {
  return request('/v4/users', {
    method: 'POST',
    body: params,
  })
}
