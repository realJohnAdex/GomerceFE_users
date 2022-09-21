import React from 'react'
import './SliderCard.css'
// MUI
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material/'
import phone_1 from '../../Assets/Images/phone_1.jpg'
function SliderCard({ image, name, price }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <p className="price">${price}</p>
        </CardContent>
      </CardActionArea>
      <CardActions className="card_actions">
        <Button size="large">Add To Cart</Button>
      </CardActions>
    </Card>
  )
}

export default SliderCard
