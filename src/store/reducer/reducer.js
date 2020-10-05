import * as actionTypes from "./actionTypes";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);
  // payload is dynamic you can call it whatever you want
  // Action -> type, [payload]
  switch (action.type) {
    // USER
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    // TOKEN
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
