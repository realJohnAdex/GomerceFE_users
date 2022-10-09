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
  const openNested = () => {
    setOpen(!open);
  };
  return (
    <CategoriesSideBar>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader sx={categoryText}>Categories</ListSubheader>}
      >
        <CategoriesListWrapper mt={2}>
          <ListItemButton onClick={openNested}>
            <ListItemText primary="Phones & Accessories" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={openNested}>
            <ListItemText primary="Health & Beauty" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={() => openNested()}>
            <ListItemText primary="Home & Office" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={openNested}>
            <ListItemText primary="Fashion" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={openNested}>
            <ListItemText primary="Gaming" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={openNested}>
            <ListItemText primary="Other Categories" sx={listLabelStyles} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </CategoriesListWrapper>
      </List>
    </CategoriesSideBar>
  );
};

export default SideNav;
