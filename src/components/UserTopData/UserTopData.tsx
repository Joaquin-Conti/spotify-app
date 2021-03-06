import React, { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import DataCard from '../DataCard/DataCard'
import css from './UserTopData.module.css'

const UserTopData: React.FC = () => {
  const { userTopData, userInputSelect } = useTypedSelector(state => state.userData)

  useEffect(() => {
      console.log('[UserTopData] rendering')
  })

return (
  <React.Fragment>
    {userTopData ? userTopData.map((artist: any, index: number) => (
      <DataCard 
        key={index}
        index={index}
        name={artist.name} 
        src={userInputSelect.type === 'artists' ? artist.images[0].url : artist.album.images[0].url} 
        alt={artist.name}/>
      )) : null}
    </React.Fragment>
  )
}

export default UserTopData
