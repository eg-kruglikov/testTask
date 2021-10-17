import { CLOSE_MODEL, OPEN_MODEL, SAVE } from "../types/modalTypes";

const initialState = { visible: false, user: {},  type:null }

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODEL:
      return {
        ...state,
        visible: true,
        ...action.payload
      };

      case CLOSE_MODEL:
        return initialState;

    default:
      return state;
  }
};

export default modalReducer;
