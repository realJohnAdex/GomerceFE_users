import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {
  CollectionCardStyle,
  buttonStyles,
  CardTextHeading,
} from "./CollectionCard";
import { Typography } from "@mui/material";
const CollectionCard = ({ title, image, link }) => {
  return (
    <Card sx={CollectionCardStyle}>
      <Typography variant="h6" sx={CardTextHeading}>
        {title}
      </Typography>
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardActions disableSpacing>
        <Button sx={buttonStyles} variant="outlined" color="secondary">
          See More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CollectionCard;
