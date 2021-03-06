import { store } from "../store"

// GET STATE
let state = store.getState();
store.subscribe(() => {
    state = store.getState()
    data.set('code', state.login.authCode)
})

// ENDPOINTS
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
export const REDIRECT_URI = 'http://localhost:3000/'
export const API_URL = 'https://api.spotify.com/v1'

// APP 
export const CLIENT_ID = '790a84d7acf74bb19d1190baa107e089'
export const CLIENT_SECRET = '06abc79902244fc5b6428a26ed6df6e6'
export const scopes = 'user-read-private user-read-email user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing'

// LOGIN
export const loginUri = AUTH_ENDPOINT +
'?response_type=code' +
'&client_id=' + CLIENT_ID +
(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
'&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

export const base64EncodedIdAndSecret = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)

// DATA FOR POST REQUEST
export const data = new URLSearchParams()
    data.append('grant_type', 'authorization_code')
    data.append('redirect_uri', REDIRECT_URI)
    data.append('code', state.login.authCode)