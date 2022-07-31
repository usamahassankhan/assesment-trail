import { ActionTypes } from "../constants/action-type";
const intialState = {
  data: [],
};

export const dashboardReducer = (state = intialState, { type, payload }) => {
  console.log(payload, "d");
  switch (type) {
    case ActionTypes.SET_DASHBOARD:
      return {
        data: payload,
      };

    default:
      return state;
  }
};
