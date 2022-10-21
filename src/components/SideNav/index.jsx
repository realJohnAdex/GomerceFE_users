import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CategoriesSideBar,
  categoryText,
  CategoriesListWrapper,
  listLabelStyles,
} from "./SideNav.jsx";
import "./SideNav.jsx";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  List,
  ListSubheader,
  ListItemText,
  ListItemButton,
} from "@mui/material";
const SideNav = () => {
  const categories = useSelector((state) => state.productCategories);
  const [open, setOpen] = useState(false);
  return (
    <CategoriesSideBar>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader sx={categoryText}>Categories</ListSubheader>}
      >
        <CategoriesListWrapper mt={2}>
          {categories.map((category, index) => {
            return (
              <ListItemButton key={index}>
                <ListItemText primary={category} sx={listLabelStyles} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            );
          })}
        </CategoriesListWrapper>
      </List>
    </CategoriesSideBar>
  );
};

export default SideNav;
