import { GridListTile, GridListTileBar } from '@material-ui/core'
import React from 'react'
import css from './DataCard.module.css'

interface Props {
  name: string
  src: string
  alt: string
  index: number
}

const DataCard: React.FC<Props> = (props: Props) => {
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={props.src} />
    //   <Card.Body>
    //     <Card.Title>{`${props.index + 1}. ${props.name}`}</Card.Title>
    //   </Card.Body>
    // </Card>

    <GridListTile key={props.index} cols={props.index === 0 ? 2 : 1} rows={1}>
      <img className={css.ArtistImage} src={props.src}  alt={props.name} />
      <GridListTileBar
      title={`${props.index + 1}. ${props.name}`}
      titlePosition="top"
      actionPosition="left"
      className={css.TitleBar}
      />
    </GridListTile>
    
  )
}

export default DataCard
