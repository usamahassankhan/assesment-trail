import { ActionTypes } from "../constants/action-type";
const intialState = {

  token:"",
  auth:false,
  email:""
};

export const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, token: payload.token,auth:payload.auth,email:payload.email,
      users:payload };
    default:
      return state;
  }
};
