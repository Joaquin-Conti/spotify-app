import { Avatar, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react'
import { useLoginActions, useUserDataActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getInitials } from '../../utils/getInitials'
import Error from '../UI/Error/Error';
import Modal from '../UI/Modal/Modal'
import UserTopData from '../UserTopData/UserTopData'
import css from './Main.module.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }),
);

const Main: React.FC = () => {
  const [showingModal, setShowingModal] = useState(false)

  const { userInputSelect, userTopData, userProfileInfo } = useTypedSelector(state => state.userData)
  const { accessToken, refreshToken, expiresAt } = useTypedSelector(state => state.login)
  const { error } = useTypedSelector(state => state.error)


  const { getUserProfileInfo,getUserTopData, userInputSelected } = useUserDataActions()
  const { userAuthorized, getRefreshToken } = useLoginActions()

  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, inputChangedIs: string) => {
    userInputSelected({
      type: inputChangedIs === 'type' ? e.target.value : userInputSelect.type,
      timeTerm: inputChangedIs === 'timeTerm' ? e.target.value : userInputSelect.timeTerm
    })
  }

  useEffect(() => {
    if (!accessToken) return
    const now = new Date()
    const refreshTokenExpired = new Date(expiresAt).getTime() < now.getTime()
    if (refreshTokenExpired) getRefreshToken(refreshToken)
    if (!userProfileInfo.id) getUserProfileInfo()
    if (!userTopData.length) getUserTopData(userInputSelect, expiresAt)
  }, [userProfileInfo, refreshToken, accessToken, userInputSelect])

  return (
    userTopData.length ? 
    <React.Fragment>
      
      {/* {showingModal &&
        <Modal>
          <h3>Are you sure you want to log out?</h3>
          <br/> 
          <Button onClick={() => userAuthorized(false)}>Yes</Button> 
          <Button onClick={() => setShowingModal(false)}>No</Button>
        </Modal>} */}
      {userProfileInfo.id && 
      <React.Fragment>
        <h4>{userProfileInfo.display_name}</h4>
        {userProfileInfo.images.length ?
        <Avatar
          className={`${css.UserImage} ${classes.large}`}
          src={userProfileInfo.images[0].url} 
          alt={`${userProfileInfo.display_name} image`}
        />
        :
        <Avatar
          className={`${css.UserImage} ${classes.small}`}
        >{getInitials(userProfileInfo.display_name)}</Avatar>}
      </React.Fragment>}
      {error && <Error />}
      <Button variant="contained" onClick={() => userAuthorized(false)}>Log Out</Button>
      <div className={css.GroupDiv}>
        <div>
          <label htmlFor="type" >Get your top: </label>
          <select value={userInputSelect.type} className={css.Select} name="type" onChange={(e) => handleChange(e, e.target.name)}>
              <option value="artists">Artists</option>
              <option value="tracks">Tracks</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeTerm" >From: </label>
          <select value={userInputSelect.timeTerm} className={css.Select} name="timeTerm" onChange={(e) => handleChange(e, e.target.name)}>
              <option value="short_term">This month</option>
              <option value="medium_term">6 months</option>
              <option value="long_term">All time</option>
          </select>
        </div>
      </div>
      {/* <br />
      <InputLabel htmlFor="type">Get your top...</InputLabel>
      <Select
        name="type"
        value={userInputSelect.type}
        onChange={(e) => handleSelectChange(e, e.target.name)}
      >
        <MenuItem value={"artists"}>Artists</MenuItem>
        <MenuItem value={"tracks"}>Tracks</MenuItem>
      </Select>
      <br />
      <InputLabel htmlFor="timeTerm">From...</InputLabel>
      <Select
        name="timeTerm"
        value={userInputSelect.timeTerm}
        onChange={(e) => handleSelectChange(e, e.target.name)}
      >
        <MenuItem value={"short_term"}>This month</MenuItem>
        <MenuItem value={"medium_term"}>6 months</MenuItem>
        <MenuItem value={"long_term"}>All time</MenuItem>
      </Select>
      <br /> */}
      <UserTopData />
    </React.Fragment> : null
  )
}

export default Main
