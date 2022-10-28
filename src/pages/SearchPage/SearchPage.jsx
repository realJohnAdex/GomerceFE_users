import React from "react";
import { Grid, Box } from "@mui/material";
import Filters from "../../components/filters";
import { SideFilters } from "./SearchPageStyle";

const SearchPage = () => {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={3}>
        <Box sx={SideFilters}>
          <Filters />
          <Filters />
          <Filters />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ backgroundColor: "pink" }}>I am also here too</Box>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
