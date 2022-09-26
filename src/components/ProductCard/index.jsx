import React from 'react'
import './ProductCard.css'
// MUI
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material/'
import phone_1 from '../../Assets/Images/phone_1.jpg'
function ProductCard({ image, name, price }) {
  return (
    <Card sx={{ maxWidth: 200 }} className="slider_card">
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent sx={{}} className="card_content">
          <h5>{name}</h5>
          <p className="price">${price}</p>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ paddingY: 1.5, paddingX: 1 }} className="card_actions">
        <Button size="large">Add To Cart</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
