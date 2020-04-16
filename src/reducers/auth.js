import {
  FIRE_LOG_START,
  FIRE_LOG_FAIL,
  FIRE_LOG_SUCCESS,
  MAKE_TRANSPORTER,
  MAKE_MANAGER,
} from "../constants/types";

const initialState = {
  appReady: false,
  user: undefined,
  isLogged: undefined,
  hasType: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FIRE_LOG_START:
      return {
        ...state,
      };
    case FIRE_LOG_FAIL:
      return {
        ...state,
        isLogged: false,
        appReady: true,
      };
    case FIRE_LOG_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
        appReady: true,
        hasType: action.payload.type ? true : false,
      };
    case MAKE_MANAGER:
      return {
        ...state,
      };
    case MAKE_TRANSPORTER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
