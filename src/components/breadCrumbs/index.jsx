import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  breadCrumbsButtonStyles,
  breadCrumbsText,
  singleBreadCrumbTextStyle,
} from "./BreadCrumbs";
import Button from "@mui/material/Button";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumbs = () => {
  const breadcrumbs = [
    <Button variant="outlined" sx={breadCrumbsButtonStyles}>
      <Link
        underline="hover"
        key="1"
        href="/"
        onClick={handleClick}
        sx={breadCrumbsText}
      >
        Home
      </Link>
    </Button>,
    <Button variant="outlined" sx={breadCrumbsButtonStyles}>
      <Link
        underline="hover"
        key="2"
        href="/material-ui/getting-started/installation/"
        onClick={handleClick}
        sx={breadCrumbsText}
      >
        Collection
      </Link>
    </Button>,
    <Typography key="3" sx={singleBreadCrumbTextStyle}>
      Item Title
    </Typography>,
  ];

  return (
    <Stack spacing={2} mt={3} mb={3}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbs;
