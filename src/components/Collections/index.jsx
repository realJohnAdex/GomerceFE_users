import React from "react";
import {
  collectionHeading,
  CollectionsWrapper,
  CollectionRow,
} from "./Collections";
import { Typography } from "@mui/material";
import CollectionCard from "../CollectionCard";
import data from "../../SetUpData/data";
const Collections = () => {
  return (
    <CollectionsWrapper>
      <Typography sx={collectionHeading}>Collections</Typography>
      <CollectionRow>
        {data.map((data, index) => {
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
        {data.map((data, index) => {
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
