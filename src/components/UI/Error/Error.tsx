import { Button } from '@material-ui/core'
import React from 'react'
import { useLoginActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ErrorTypes } from '../../../state/action-types/action-types'

const Error: React.FC = () => {
  const { error } = useTypedSelector(state => state.error)
  const { accessToken } = useTypedSelector(state => state.login)
  const { userAuthorized } = useLoginActions()

  return (
    <React.Fragment>
      <p>{error?.message}</p>
      {/* {error?.errorType === ErrorTypes.ERROR_AUTHENTICATION && <Button variant="contained" onClick={() => userAuthorized(false)}>Log Out</Button>} */}
      {accessToken && <Button variant="contained" onClick={() => userAuthorized(false)}>Log Out</Button>}
    </React.Fragment>
  )
}

export default Error
