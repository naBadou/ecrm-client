import {
  TYPE_CHECK_START,
  TYPE_CHECK_POS,
  TYPE_CHECK_NEG,
  FIRE_CHECK_START,
  FIRE_CHECK_POS,
  FIRE_CHECK_NEG,
} from "../constants/types";

import Axios from "axios";
import { fireApp } from "../services/firebase";

export const fireCheckStart = () => ({
  type: FIRE_CHECK_START,
});
export const fireCheckPos = () => ({
  type: FIRE_CHECK_POS,
});
export const fireCheckNeg = () => ({
  type: FIRE_CHECK_NEG,
});

export const typeCheckStart = () => ({
  type: TYPE_CHECK_START,
});
export const typeCheckPos = (accountType, user) => ({
  type: TYPE_CHECK_POS,
  accountType,
  user,
});
export const typeCheckNeg = () => ({
  type: TYPE_CHECK_NEG,
});

export const fireCheckingProcess = () => {
  return (dispatch) => {
    dispatch(fireCheckStart());
    fireApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fireCheckPos());
        dispatch(typeCheckStart());
        Axios.get("/auth/" + user.uid).then((res) => {
          if (res.data.error) {
            dispatch(typeCheckNeg());
          }
          if (!res.data.error && !res.data.hasType) {
            dispatch(typeCheckPos("no-type"));
          } else {
            dispatch(typeCheckPos(res.data.hasType, res.data.data));
          }
        });
      } else {
        dispatch(fireCheckNeg());
      }
    });
  };
};

// export const registerProcessStart = () => ({
//   type: REGISTER_PROCESS_START,
// });
// export const registerProcessFail = () => ({
//   type: REGISTER_PROCESS_FAIL,
// });
// export const registerProcessSuccess = (payload) => ({
//   type: REGISTER_PROCESS_SUCCESS,
//   payload,
// });

// export const registerFirebaseStart = () => ({
//   type: REGISTER_FIREBASE_START,
// });
// export const registerFirebaseFail = () => ({
//   type: REGISTER_FIREBASE_FAIL,
// });
// export const registerFirebaseSuccess = () => ({
//   type: REGISTER_FIREBASE_SUCCESS,
// });

// export const registerMongoStart = () => ({
//   type: REGISTER_MONGO_START,
// });
// export const registerMongoFail = () => ({
//   type: REGISTER_MONGO_FAIL,
// });
// export const registerMongoSuccess = () => ({
//   type: REGISTER_MONGO_SUCCESS,
// });

// export const registerProcess = (email, password) => {
//   return (dispatch) => {
//     dispatch(registerProcessStart());
//     dispatch(registerFirebaseStart());
//     fireApp
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(({ user }) => {
//         if (user.uid) {
//           dispatch(registerFirebaseSuccess());
//           dispatch(registerMongoStart());
//           Axios.post("/auth/register", {
//             email: email,
//             uid: user.uid,
//           })
//             .then((res) => {
//               if (res.data) {
//                 dispatch(registerMongoSuccess());
//                 dispatch(registerProcessSuccess(res.data));
//               } else {
//                 dispatch(registerMongoFail());
//               }
//             })
//             .catch((err) => console.log(err));
//         } else {
//           dispatch(registerFirebaseFail());
//         }
//       })
//       .catch((err) => console.log(err));
//   };
// };

// export const pickTypeStart = () => ({
//   type: PICK_TYPE_START,
// });

// export const pickTypeFail = () => ({
//   type: PICK_TYPE_FAIL,
// });

// export const pickTypeSuccess = (payload) => ({
//   type: PICK_TYPE_SUCCESS,
//   payload,
// });

// export const upgradeUserType = (typo, uid) => {
//   return (dispatch) => {
//     dispatch(pickTypeStart());
//     Axios.patch("/auth/register", {
//       uid: uid,
//       type: typo,
//     })
//       .then((res) => {
//         console.log("action - register process : ", res.data);
//         dispatch(pickTypeSuccess(res.data));
//       })

//       .catch((err) => console.log(err));
//   };
// };
// export const checkingUserStart = () => ({
//   type: CHECKING_USER_START,
// });
// export const checkingUserFail = () => ({
//   type: CHECKING_USER_FAIL,
// });
// export const checkingUserSuccess = (payload) => ({
//   type: CHECKING_USER_SUCCESS,
//   payload,
// });

// export const checkingUserProcess = () => {
//   return (dispatch) => {
//     dispatch(checkingUserStart());
//     fireApp.auth().onAuthStateChanged((user) => {
//       if (user) {
//         Axios.get("/auth/" + user.uid).then((res) => {
//           if (res.data.error) {
//             dispatch(checkingUserFail());
//           } else {
//             dispatch(checkingUserSuccess(res.data));
//           }
//         });
//       } else {
//         dispatch(checkingUserFail());
//       }
//     });
//   };
// };

// export const fireLoginStart = () => ({
//   type: FIRE_LOG_START,
// });
// export const fireLoginFail = () => ({
//   type: FIRE_LOG_FAIL,
// });
// export const fireLoginSuccess = (payload) => ({
//   type: FIRE_LOG_SUCCESS,
//   payload,
// });
