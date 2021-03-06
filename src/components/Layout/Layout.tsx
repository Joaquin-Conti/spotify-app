import React, { useEffect } from 'react'
import css from './Layout.module.css'
import { useTypedSelector, } from '../../hooks/useTypedSelector'
import Backdrop from '../UI/Backdrop/Backdrop'
import Spinner from '../../UI/Spinner/Spinner'
import { useLoginActions, useUserDataActions } from '../../hooks/useActions'
import getParams from '../../helpers/getParams'
import Main from '../Main/Main'
import { loginUri } from '../../api'

const Layout: React.FC = () => {
  const { isLoggedIn, accessToken } = useTypedSelector(state => state.login)
  const { loading } = useTypedSelector(state => state.ui)
  const { userInputSelect } = useTypedSelector(state => state.userData)
  const { userAuthorized, authCodeObtained, getAccessToken } = useLoginActions()
  const { getUserTopData } = useUserDataActions()

  // TO CHECK *WHEN* THE CODE IS OBTAINED
  useEffect(() => {
      const authCode = getParams(window.location.href).code
      if (!authCode || accessToken) return
      authCodeObtained(authCode)
      getAccessToken()
      userAuthorized(true)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    getUserTopData(userInputSelect)
  }, [accessToken])

  return (
    <React.Fragment>
      {isLoggedIn ?
 
      <main>
        <Backdrop show={loading}>
          <Spinner />
        </Backdrop>
      
        <Main />
      </main> :

      <a className={css.Anchor} href={loginUri}>LOG IN WITH SPOTIFY</a>}
    </React.Fragment>
  )
}

export default Layout