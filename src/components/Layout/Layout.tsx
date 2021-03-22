import React, { useEffect } from 'react'
import css from './Layout.module.css'
import { useTypedSelector, } from '../../hooks/useTypedSelector'
import logo from "../../assets/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png"
import Backdrop from '../UI/Backdrop/Backdrop'
import Spinner from '../../UI/Spinner/Spinner'
import { useLoginActions } from '../../hooks/useActions'
import getParams from '../../helpers/getParams'
import Main from '../Main/Main'
import { loginUri } from '../../api'
import { Button } from '@material-ui/core'

// ELIMINAR
import { useDispatch } from 'react-redux';
import { testAction } from '../../state/action-creators/user-data-action-creators';
import Error from '../UI/Error/Error'

const Layout: React.FC = () => {
  const { authCode, isLoggedIn, accessToken  } = useTypedSelector(state => state.login)
  const { loading } = useTypedSelector(state => state.ui)
  const { error } = useTypedSelector(state => state.error)

  const { userAuthorized, authCodeObtained, getAccessToken } = useLoginActions()

  
  // ELIMINAR
  const dispatch = useDispatch();

  useEffect(() => {
    const code = getParams(window.location.href).code
    if (!code || code === authCode) return
    authCodeObtained(code)
    getAccessToken()
    // userAuthorized(true)
  }, [])


  return (
    <main className={css.Container}>
      <img
        className={css.Logo}
        src={logo}
        alt="spotify-logo"
      />

      {error && <Error />}

      {accessToken ?
      
      <React.Fragment>
        <Backdrop show={loading}>
          <Spinner />
        </Backdrop>
        
        <Main />
      </React.Fragment> :
      <React.Fragment>
        
        <a className={css.Anchor} href={loginUri}>LOG IN WITH SPOTIFY</a>
      </React.Fragment>}

      {/* <button onClick={() => dispatch(testAction())}>Jeje mira este llama a la saga</button> */}
    </main>
  )
}

export default Layout
