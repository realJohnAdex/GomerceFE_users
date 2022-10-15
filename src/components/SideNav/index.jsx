import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
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
  const [open, setOpen] = useState(false);

  return (
    <CategoriesSideBar>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader sx={categoryText}>Categories</ListSubheader>}
      >
        <CategoriesListWrapper mt={2}>
          <ListItemButton>
            <ListItemText primary="Phones & Accessories" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Health & Beauty" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Home & Office" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Fashion" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Gaming" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Other Categories" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </CategoriesListWrapper>
      </List>
    </CategoriesSideBar>
  );
};

export default SideNav;
