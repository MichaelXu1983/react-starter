import { queryCurrent } from '@/api/user'
import * as types from '@/constants/ActionTypes'
import { Toast } from 'antd-mobile'

export const fetchCurrent = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    queryCurrent()
      .then(response => {
        if (Object.keys(response).length !== 0) {
          dispatch({
            type: types.GET_CURRENT_USER,
            payload: response,
            receivedAt: Date.now(),
          })
        } else {
          Toast.fail('用户信息为空')
        }
        resolve(response)
      })
      .catch(error => {
        Toast.fail('用户权限获取失败')
        reject(error)
      })
  })
}
