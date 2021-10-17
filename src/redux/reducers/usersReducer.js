import { CHANGE_USER, GET_USERS } from "../types/userTypes";


const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      
      return action.payload
      
      case CHANGE_USER:
        console.log('redux--->',  action.payload);
      return

      default:
      return state
  }
}

export default usersReducer
