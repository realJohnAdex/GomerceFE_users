import React from "react";
import Button from "@mui/material/Button";
import { FloatingBtnStyles, IconStyle } from "./FloatingBtn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const FloatingBtn = () => {
  return (
    <Button
      variant="contained"
      startIcon={<KeyboardArrowUpIcon />}
      sx={FloatingBtnStyles}
    >
      Back to top
    </Button>
  );
};

export default FloatingBtn;
