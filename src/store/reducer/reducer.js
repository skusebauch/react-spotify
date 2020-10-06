import * as actionTypes from "./actionTypes";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // for development - REMOVE AFTER DEVELOPING
  //token:
  //  "BQBH_e9ijlhyf1N-SXKMeC2l8ZXwYqMTMmJAE8EHq0e95Nplu9t-lgBJ1EgeReWFWe_5NZbFmHhwrjN7jWrnrixq0QXEChLfpQ6TFAfDmlcFE5X3CmDj34S6yXBGX5bWKE14v7MrAEw44RGGfPgADJ8r_bGUbmFj5Cz9Tg",
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
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
