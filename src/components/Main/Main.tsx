import { Avatar, Button, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useLoginActions, useUserDataActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Modal from '../UI/Modal/Modal'
import UserTopData from '../UserTopData/UserTopData'
import css from './Main.module.css'

const Main: React.FC = () => {
  const [showingModal, setShowingModal] = useState(false)

  const { userInputSelect, userTopData, userProfileInfo } = useTypedSelector(state => state.userData)
  const { accessToken, refreshToken, expiresAt } = useTypedSelector(state => state.login)

  const { getUserProfileInfo,getUserTopData, userInputSelected } = useUserDataActions()
  const { userAuthorized, getRefreshToken } = useLoginActions()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, inputChangedIs: string) => {
    userInputSelected({
      type: inputChangedIs === 'type' ? e.target.value : userInputSelect.type,
      timeTerm: inputChangedIs === 'timeTerm' ? e.target.value : userInputSelect.timeTerm
    })
  }

  useEffect(() => {
    if (!accessToken) return
    const now = new Date()
    if (new Date(expiresAt).getTime() < now.getTime()) {
      getRefreshToken(refreshToken)
    }
    console.log(userProfileInfo)
    if (!userProfileInfo.images.length) {
      getUserProfileInfo()
    }
    getUserTopData(userInputSelect, expiresAt)
  }, [userProfileInfo, refreshToken, accessToken, userInputSelect])

  return (
    userTopData.length && userProfileInfo.images.length ? 
    <React.Fragment>
      
      {/* {showingModal &&
        <Modal>
          <h3>Are you sure you want to log out?</h3>
          <br/> 
          <Button onClick={() => userAuthorized(false)}>Yes</Button> 
          <Button onClick={() => setShowingModal(false)}>No</Button>
        </Modal>} */}

      <h4>{userProfileInfo.display_name}</h4>
      <Avatar className={css.UserImage} src={userProfileInfo.images[0].url} alt={`${userProfileInfo.display_name} image`} />
      <Button variant="contained" onClick={() => userAuthorized(false)}>Log Out</Button>
      <div className={css.GroupDiv}>
        <div>
          <label htmlFor="typeSelect" >Get your top: </label>
          <select value={userInputSelect.type} className={css.Select} name="type" onChange={(e) => handleChange(e, e.target.name)}>
              <option value="artists">Artists</option>
              <option value="tracks">Tracks</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeTermSelect" >From: </label>
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
