import { Button } from '@material-ui/core'
import React from 'react'
import { useLoginActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Error: React.FC = () => {
  const { error } = useTypedSelector(state => state.error)
  const { userAuthorized } = useLoginActions()

  return (
    <React.Fragment>
      <p>{error}</p>
      <Button variant="contained" onClick={() => userAuthorized(false)}>Log Out</Button>
    </React.Fragment>
  )
}

export default Error
