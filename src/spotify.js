// SPOTIFY DOCS
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "b82ab0eb1099438bb745692281462b1e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// save access token from the response
// "#access_token=BQC8p0O9bf8zna8E-0WdJ1fVCPS5bA7yqCIKxjxM3W-fH4kJnEtJLf4F_YA25cEBLzvv8eJTUKniHsbYz8e6PKShDhUCdQzP0tvEonwNfAJhqjysUUJfkNLiKF7s2Xm-j1cHNaKxEYvInwx8Sl8_m3oaxARmk_4TlDOtHQ&token_type=Bearer&expires_in=3600"
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // # accessToken=
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
