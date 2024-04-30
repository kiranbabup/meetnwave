// actions/adminData.js
export const setUserCount = (data) => async (dispatch) => {
  dispatch({
    type: "SET_USER_COUNT",
    payload: data,
  });
};

export const setEventsCount = (data) => async (dispatch) => {
  dispatch({
    type: "SET_EVENTS_COUNT",
    payload: data,
  });
};