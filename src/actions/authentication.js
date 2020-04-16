import {
  FIRE_LOG_START,
  FIRE_LOG_SUCCESS,
  FIRE_LOG_FAIL,
  MAKE_MANAGER,
  MAKE_TRANSPORTER,
} from "../constants/types";
import firebase from "firebase";
import Axios from "axios";
const firebaseConfig = {
  apiKey: "AIzaSyBIT0ZUBX6A54wSHzQtSqG9Kv1eg4PY4XA",
  authDomain: "ecrm-authentication.firebaseapp.com",
  databaseURL: "https://ecrm-authentication.firebaseio.com",
  projectId: "ecrm-authentication",
  storageBucket: "ecrm-authentication.appspot.com",
  messagingSenderId: "908792523780",
  appId: "1:908792523780:web:73375fb4db9935f6705951",
};

export const fireApp = firebase.initializeApp(firebaseConfig);

export const fireLoginStart = () => ({
  type: FIRE_LOG_START,
});
export const fireLoginFail = () => ({
  type: FIRE_LOG_FAIL,
});
export const fireLoginSuccess = (payload) => ({
  type: FIRE_LOG_SUCCESS,
  payload,
});

export const makeManager = (payload) => ({
  type: MAKE_MANAGER,
  payload,
});

export const makeTransporter = (payload) => ({
  type: MAKE_TRANSPORTER,
  payload,
});

export const upgradeUserType = (typo, fireID) => {
  return (dispatch) => {
    Axios.patch("/users/edit", {
      fireID: fireID,
      type: typo,
    }).then((res) => {
      if (typo === "transporter" && res.status === "success") {
        dispatch(makeTransporter());
      }
      if (typo === "manager" && res.status === "success") {
        dispatch(makeManager());
      }
    });
  };
};

export const fireListener = () => {
  return (dispatch) => {
    dispatch(fireLoginStart());
    fireApp.auth().onAuthStateChanged((user) => {
      if (user) {
        Axios.get("/users/" + user.uid).then((res) =>
          dispatch(fireLoginSuccess(res.data))
        );
      } else {
        dispatch(fireLoginFail());
      }
    });
  };
};
