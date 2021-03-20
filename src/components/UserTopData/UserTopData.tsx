import { Container, GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import React, { useEffect } from 'react'
// import { CardGroup, Col, Container, Row } from 'react-bootstrap'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import DataCard from '../DataCard/DataCard'
import css from './UserTopData.module.css'

const UserTopData: React.FC = () => {
  const { userTopData, userInputSelect } = useTypedSelector(state => state.userData)

return (
  <React.Fragment>
    {/* <Container maxWidth='md'> */}
      <GridList cols={2} cellHeight={300} spacing={1} className={css.GridList}>
        {userTopData && userTopData.map((artist: any, index: number) => (
          <GridListTile key={index} cols={index === 0 ? 2 : 1} rows={1}>
              <img className={css.ArtistImage} src={userInputSelect.type === 'artists' ? artist.images[0].url : artist.album.images[0].url}  alt={artist.name} />
              <GridListTileBar
              title={`${index + 1}. ${artist.name}`}
              titlePosition="top"
              actionPosition="left"
              className={css.TitleBar}
              /> 
              {/* <DataCard 
                key={index}
                index={index}
                name={artist.name} 
                src={userInputSelect.type === 'artists' ? artist.images[0].url : artist.album.images[0].url} 
                alt={artist.name}
              /> */}
        </GridListTile> 
        ))}
      </GridList>
    {/* </Container> */}
  </React.Fragment>
  )
}

export default UserTopData
