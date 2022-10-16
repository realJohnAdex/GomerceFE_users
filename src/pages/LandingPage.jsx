import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import SideContents from "../components/SideContents";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import getProducts from "../actions/products";
const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <main>
      <Navbar />
      <div className="wrapper">
        <Grid container direction="row" spacing={1}>
          <Grid item xs={3}>
            <SideNav />
          </Grid>
          <Grid item xs={9}>
            <SideContents />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </main>
  );
};

export default LandingPage;
