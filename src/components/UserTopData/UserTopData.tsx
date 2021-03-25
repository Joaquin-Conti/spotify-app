import { GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import React from 'react'
import imgNotFound from "../../assets/image-not-found.png"
import { useTypedSelector } from '../../hooks/useTypedSelector'
import css from './UserTopData.module.css'

const UserTopData: React.FC = () => {
  const { userTopData, userInputSelect } = useTypedSelector(state => state.userData)

return (
  <React.Fragment>
      <GridList cols={2} cellHeight={300} spacing={1} className={css.GridList}>
        {userTopData && userTopData.map((artist: any, index: number) => {
          let artistImg = imgNotFound;
          if (userInputSelect.type === 'artists') {
            if (artist.images[0]) artistImg = artist.images[0].url
          } else {
            if (artist.album.images[0]) artistImg = artist.album.images[0].url
          }

          return (<GridListTile key={index} cols={index === 0 ? 2 : 1} rows={1}>
              <img className={css.ArtistImage} src={artistImg}  alt={artist.name} />
              <GridListTileBar
                title={`${index + 1}. ${artist.name}`}
                titlePosition="top"
                actionPosition="left"
                className={css.TitleBar}
              />
          </GridListTile>)
        })}
      </GridList>
  </React.Fragment>
  )
}

export default UserTopData
