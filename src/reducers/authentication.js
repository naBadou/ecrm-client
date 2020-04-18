import {
  REGISTER_PROCESS_START,
  REGISTER_PROCESS_FAIL,
  REGISTER_PROCESS_SUCCESS,
  REGISTER_FIREBASE_START,
  REGISTER_FIREBASE_FAIL,
  REGISTER_FIREBASE_SUCCESS,
  REGISTER_MONGO_START,
  REGISTER_MONGO_FAIL,
  REGISTER_MONGO_SUCCESS,
  PICK_TYPE_START,
  PICK_TYPE_FAIL,
  PICK_TYPE_SUCCESS,
  CHECKING_USER_START,
  CHECKING_USER_FAIL,
  CHECKING_USER_SUCCESS,
  FIRE_CHECK_START,
  FIRE_CHECK_NEG,
  FIRE_CHECK_POS,
  TYPE_CHECK_START,
  TYPE_CHECK_NEG,
  TYPE_CHECK_POS,
} from "../constants/types";

const initialState = {
  loading: true,
  accountType: null,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FIRE_CHECK_START:
      return {
        ...state,
        loading: true,
      };
    case FIRE_CHECK_NEG:
      return {
        ...state,
        loading: false,
        accountType: "visitor",
      };
    case FIRE_CHECK_POS:
      return {
        ...state,
      };
    case TYPE_CHECK_START:
      return {
        ...state,
      };
    case TYPE_CHECK_NEG:
      return {
        ...state,
        loading: false,
        accountType: "visitor",
      };
    case TYPE_CHECK_POS:
      return {
        ...state,
        loading: false,
        accountType: action.accountType,
        user: action.user,
      };

    //////////////////////
    // case REGISTER_PROCESS_START:
    //   return {
    //     ...state,
    //   };
    // case REGISTER_PROCESS_FAIL:
    //   return {
    //     ...state,
    //   };
    // case REGISTER_PROCESS_SUCCESS:
    //   return {
    //     ...state,
    //     account: action.payload,
    //   };
    // case REGISTER_FIREBASE_START:
    //   return {
    //     ...state,
    //   };
    // case REGISTER_FIREBASE_FAIL:
    //   return {
    //     ...state,
    //   };
    // case REGISTER_FIREBASE_SUCCESS:
    //   return {
    //     ...state,
    //   };
    // case REGISTER_MONGO_START:
    //   return {
    //     ...state,
    //   };
    // case REGISTER_MONGO_FAIL:
    //   return {
    //     ...state,
    //   };
    // case REGISTER_MONGO_SUCCESS:
    //   return {
    //     ...state,
    //   };
    // case PICK_TYPE_START:
    //   return {
    //     ...state,
    //   };
    // case PICK_TYPE_FAIL:
    //   return {
    //     ...state,
    //   };
    // case PICK_TYPE_SUCCESS:
    //   return {
    //     ...state,
    //     account: action.payload,
    //   };

    // case CHECKING_USER_START:
    //   return {
    //     ...state,
    //     appReady: false,
    //   };
    // case CHECKING_USER_FAIL:
    //   return {
    //     ...state,
    //     account: {},
    //     appReady: true,
    //   };
    // case CHECKING_USER_SUCCESS:
    //   return {
    //     ...state,
    //     appReady: true,
    //     account: action.payload,
    //   };

    default:
      return state;
  }
}
