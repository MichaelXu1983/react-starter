import { stringify } from 'qs'
import request from '@/utils/request'

// 根据业务模块命名，和 /pages/* 一一对应
export async function queryProjects (params) {
  return request(`/v4/projects?${stringify(params)}`)
}

export async function queryUsers (params) {
  return request(`/v4/users?${stringify(params)}`)
}