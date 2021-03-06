import { AxiosRequestConfig } from "axios";
import { base64EncodedIdAndSecret, REDIRECT_URI } from "../index"
import { store } from "../../store";

// GET STATE
let state = store.getState();
let axiosGetTopArtistsConfig: AxiosRequestConfig
store.subscribe(() => {
    state = store.getState()
    axiosGetTopArtistsConfig = {
        headers: {
            'Authorization': `Bearer ${state.login.accessToken}`
        }
    }
})

// REQUESTS CONFIGS
export const axiosTokenReqConfig = {
    headers: {
        'Authorization': `Basic ${base64EncodedIdAndSecret}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export const axiosGetAuthorizeConfig = {
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Origin': REDIRECT_URI + '/'
    }
}

export { axiosGetTopArtistsConfig }