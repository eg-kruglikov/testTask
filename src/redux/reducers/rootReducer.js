import {combineReducers} from 'redux'
import modalReducer from './modalReducer'
import rolesReducer from './rolesReducer'
import usersReducer from './usersReducer'




const rootReducer = combineReducers({
  users: usersReducer,
  modal: modalReducer,
  roles: rolesReducer,

})

export default rootReducer
