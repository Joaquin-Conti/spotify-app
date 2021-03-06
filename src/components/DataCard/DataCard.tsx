import React from 'react'
import { Card } from 'react-bootstrap'

interface Props {
  name: string
  src: string
  alt: string
  index: number
}

const DataCard: React.FC<Props> = (props: Props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{`${props.index + 1}. ${props.name}`}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default DataCard
