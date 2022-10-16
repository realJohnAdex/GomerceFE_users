import React from "react";
import {
  collectionHeading,
  CollectionsWrapper,
  CollectionRow,
} from "./Collections";
import { Typography } from "@mui/material";
import CollectionCard from "../CollectionCard";
import collectionData from "../../SetUpData/collectionData";
import { useSelector } from "react-redux";
const Collections = () => {
  const products = useSelector((state) => state.productReducer);
  console.log(products);
  return (
    <CollectionsWrapper>
      <Typography sx={collectionHeading}>Collections</Typography>
      <CollectionRow>
        {collectionData.map((data, index) => {
          return (
            <CollectionCard
              key={index}
              title={data.title}
              image={data.img}
              link={data.link}
            />
          );
        })}
      </CollectionRow>
      <CollectionRow>
        {collectionData.map((data, index) => {
          return (
            <CollectionCard
              key={index}
              title={data.title}
              image={data.img}
              link={data.link}
            />
          );
        })}
      </CollectionRow>
    </CollectionsWrapper>
  );
};

export default Collections;
