import { combineReducers } from 'redux'
import { GET_CURRENT_USER, SET_CURRENT_USER } from '@/constants/ActionTypes'
import { setUserId, removeUserId } from '@/utils/storage'

// const initialState = {
//   pending: true,
//   payload: false,
// }

const currentUser = (state = { pending: true, payload: false }, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      setUserId(action.payload.id)                  // 设置用户ID
      return {
        ...state,
        pending: false,
        payload: action.payload,
        lastUpdated: action.receivedAt,
      }
    case SET_CURRENT_USER:
      setUserId(action.payload.id)                  // 更新用户ID
      return {
        ...state,
        pending: action.pending,
        payload: action.payload,
        lastUpdated: action.receivedAt,
      }
    default:
      return state
  }
}

export default combineReducers({
  currentUser,
})
