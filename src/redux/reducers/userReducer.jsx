import { ActionTypes } from "../constants/action-type";
const intialState = {

  token:""
};

export const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, token: payload.token,
      users:payload };
    default:
      return state;
  }
};
