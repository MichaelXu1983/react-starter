import { combineReducers } from 'redux'
import { CHANGE_LOGIN_STATUS } from '@/constants/ActionTypes'
import { setAuthority } from '@/utils/storage'
// const initialState = {
//   pending: true,
//   payload: false,
// }

const login = (state = { pending: true, payload: false }, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      setAuthority(action.payload.currentAuthority)
      return {
        ...state,
        pending: false,
        payload: action.payload,
        lastUpdated: action.receivedAt,
      }
    default:
      return state
  }
}

export default combineReducers({
  login,
})
