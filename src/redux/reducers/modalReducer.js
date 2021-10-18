import { CLOSE_MODEL, CONF, OPEN_MODEL } from "../types/modalTypes";

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

        case CONF:
        return {
          ...state,
          visible: true,
          user: action.payload,
          type: action.type
        }

    default:
      return state;
  }
};

export default modalReducer;
