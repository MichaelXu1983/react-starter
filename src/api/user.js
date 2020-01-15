import { stringify } from 'qs'
import request from '@/utils/request'
import { getUserId } from '@/utils/storage'

export async function queryCurrent() {
  return request(`/v4/user`)
}

export async function modifyPassword(params) {
  return request(`/v4/users/${getUserId()}`, {
    method: 'PUT',
    body: params,
  })
}
