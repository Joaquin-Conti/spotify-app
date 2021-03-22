import { store } from "../store"

// GET STATE
let state = store.getState();
store.subscribe(() => {
    state = store.getState()
    accessTokenReqData.set('code', state.login.authCode)
    refreshTokenReqData.set('refresh_token', state.login.refreshToken || '')
})

// ENDPOINTS
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
export const REDIRECT_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://joaquinconti.github.io/spotify-app/'
export const API_URL = 'https://api.spotify.com/v1'
export const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/spotify-app'

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
export const accessTokenReqData = new URLSearchParams()
    accessTokenReqData.append('grant_type', 'authorization_code')
    accessTokenReqData.append('redirect_uri', REDIRECT_URI)
    accessTokenReqData.append('code', state.login.authCode)

export const refreshTokenReqData = new URLSearchParams()
    refreshTokenReqData.append('grant_type', 'refresh_token')
    refreshTokenReqData.append('client_id', CLIENT_ID)