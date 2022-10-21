import SideNav from "../components/SideNav";
import SideContents from "../components/SideContents";
import { Grid } from "@mui/material";
import React from "react";
const LandingPage = () => {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3}>
        <SideNav />
      </Grid>
      <Grid item xs={9}>
        <SideContents />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
