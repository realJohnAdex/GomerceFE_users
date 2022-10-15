import React, { useState } from "react";
import {
  CategoriesSideBar,
  categoryText,
  CategoriesListWrapper,
  listLabelStyles,
} from "./SideNav.jsx";
import "./SideNav.jsx";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import categoriesData from "../../SetUpData/categoriesData";
import {
  List,
  ListSubheader,
  ListItemText,
  ListItemButton,
} from "@mui/material";
const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <CategoriesSideBar>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader sx={categoryText}>Categories</ListSubheader>}
      >
        <CategoriesListWrapper mt={2}>
          {categoriesData.map((category) => {
            const { id, title, subList } = category;
            return (
              <ListItemButton key={id}>
                <ListItemText primary={title} sx={listLabelStyles} />
                {subList && (open ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            );
          })}
        </CategoriesListWrapper>
      </List>
    </CategoriesSideBar>
  );
};

export default SideNav;
