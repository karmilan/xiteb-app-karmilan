import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Offers = ({cardImg}) => {
  return (
    <>
     <Card sx={{ maxWidth: 455, mx:1 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={cardImg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button variant='outlined' size="small">View Details</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default Offers