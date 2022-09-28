import React from 'react'
import './ProductCard.css'
// MUI
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button, CardActionArea, CardActions } from '@mui/material/'
function ProductCard({ image, name, price }) {
  return (
    <Card sx={{ maxWidth: 200 }} className="slider_card">
      <CardActionArea>
        <CardMedia component="img" height="200px" image={image} alt={name} />
      </CardActionArea>
      <CardContent sx={{}} className="card_content">
        <h5>{name}</h5>
        <p className="price">${price}</p>
      </CardContent>
      <CardActions className="card_actions">
        <Button size="large">Add To Cart</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
