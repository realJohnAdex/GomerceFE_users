import { Typography } from "@mui/material";
import React from "react";

import {
  ColumnWrapper,
  CustomListItems,
  ColumnTitleStyle,
} from "./FooterColumn";
const FooterColumn = ({ title, links }) => {
  return (
    <ColumnWrapper>
      <Typography variant="h6" sx={ColumnTitleStyle}>
        {title}
      </Typography>
      {links &&
        links.map((link, index) => {
          const { label, url } = link;
          return <CustomListItems key={index}>{label}</CustomListItems>;
        })}
    </ColumnWrapper>
  );
};

export default FooterColumn;
