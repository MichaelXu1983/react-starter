import { queryLoginByPass, queryLogout } from '@/api/login'
import { setAuthority, removeAuthority } from '@/utils/storage'
import { fetchCurrent } from './user'
import * as types from '@/constants/ActionTypes'
import store from '@/index'
import { Toast } from 'antd-mobile'

export const fetchLoginByToken = param => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const response = param
    dispatch({
      type: types.CHANGE_LOGIN_STATUS,
      payload: {
        response,
        currentAuthority: response.token, // 全局唯一接口调用凭据
      },
      receivedAt: Date.now(),
    })
    // 获取用户信息
    store
      .dispatch(fetchCurrent())
      .then(res => {})
      .catch(err => {})
    resolve(response)
  }).catch(err => {
    Toast.fail(err.message, 3, null, false)
  })
}

export const fetchLoginByPass = param => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    queryLoginByPass(param)
      .then(response => {
        dispatch({
          type: types.CHANGE_LOGIN_STATUS,
          payload: {
            response,
            currentAuthority: response.access_token, // 全局唯一接口调用凭据
          },
          receivedAt: Date.now(),
        })

        if (typeof response.error === 'undefined') {
          // 登录成功，获取用户信息
          store
            .dispatch(fetchCurrent())
            .then(res => {})
            .catch(err => {})
          resolve(response)
        } else {
          const { error_description } = response
          Toast.fail(error_description)
        }
      })
      .catch(err => {
        Toast.fail(err.message, 3, null, false)
      })
  })
}

export const fetchLogout = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const response = {}
    response.access_token = ''
    response.status = true
    response.message = '登出成功'
    dispatch({
      type: types.CHANGE_LOGIN_STATUS,
      payload: {
        response,
        currentAuthority: response.access_token, // 全局唯一接口调用凭据
      },
      receivedAt: Date.now(),
    })
    dispatch({
      type: types.SET_CURRENT_USER,
      payload: {
        response,
        id:'' // 用户ID
      },
      pending: true,
      receivedAt: Date.now(),
    })
    Toast.success('登出成功', 3, null, false)
    window.location.href = `#/`
    resolve(response)
  })
}

export const fetchAccountInvalid = pathname => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const response = {}
    response.access_token = ''
    response.status = true
    response.message = '没有权限'
    dispatch({
      type: types.CHANGE_LOGIN_STATUS,
      payload: {
        response,
        currentAuthority: response.access_token, // 全局唯一接口调用凭据
      },
      receivedAt: Date.now(),
    })
    dispatch({
      type: types.SET_CURRENT_USER,
      payload: {
        response,
        id:'' // 用户ID
      },
      pending: true,
      receivedAt: Date.now(),
    })
    window.location.href = `#/login?from_hash=${pathname}`
    resolve(response)
  })
}
