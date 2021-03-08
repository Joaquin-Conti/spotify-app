import React, { useEffect, useRef } from 'react'
import { useUserDataActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import UserTopData from '../UserTopData/UserTopData'
import css from './Main.module.css'

const Main: React.FC = () => {
  const { userInputSelect } = useTypedSelector(state => state.userData)
  const { getUserTopData, userInputSelected } = useUserDataActions()

  const firstUpdate = useRef(true);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, inputChangedIs: string) => {
    userInputSelected({
      type: inputChangedIs === 'type' ? e.target.value : userInputSelect.type,
      timeTerm: inputChangedIs === 'timeTerm' ? e.target.value : userInputSelect.timeTerm
    })
  }

  // useEffect(() => {
  //   getUserTopData(userInputSelect)
  // }, [userInputSelect])

  return (
    <React.Fragment>
      <div className={css.GroupDiv}>
          <div>
            <label htmlFor="typeSelect" >Get your top: </label>
            <select className={css.Select} name="type" onChange={(e) => handleChange(e, 'type')}>
                <option value="artists">Artists</option>
                <option value="tracks">Tracks</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeTermSelect" >From: </label>
            <select className={css.Select} name="timeTerm" onChange={(e) => handleChange(e, 'timeTerm')}>
                <option value="short_term">This month</option>
                <option value="medium_term">6 months</option>
                <option value="long_term">All time</option>
            </select>
          </div>
        </div>
        <UserTopData />
    </React.Fragment>
  )
}

export default Main
