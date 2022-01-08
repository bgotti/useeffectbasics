import React from 'react'
import Card from 'react-bootstrap/Card';

function CardBody({user}) {
  return (
    <>
      <Card className="card">
        {user ? user.name.first : 'Loading...'}
      </Card>
    </>
  )
}

export default CardBody
