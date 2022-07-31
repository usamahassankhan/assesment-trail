import { ActionTypes } from "../constants/action-type";
import axios from "axios";

// export const setDashboard = (user) => {
//   return {
//     type: ActionTypes.SET_USER,
//     payload: user,
//   };
// };

export const setDashboard = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.SET_DASHBOARD });

    const { data } = await axios.get("https://reqres.in/api/users");

    dispatch({
      type: ActionTypes.SET_DASHBOARD,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.NO_USER,
      payload:
        error.response && error.response.data.message ? "error" : "nodaa",
    });
  }
};
