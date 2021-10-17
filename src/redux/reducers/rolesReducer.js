import { GET_ROLES } from "../types/rolesTypes";

const initialState = {}

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES:
      return action.payload

    default:
      return state;
  }
};


export default rolesReducer;
