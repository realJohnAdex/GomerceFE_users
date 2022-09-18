import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import SideContents from "./components/SideContents";
import { Box, Grid } from "@mui/material";
const App = () => {
  return (
    <main>
      <Navbar />
      <div className="wrapper">
        <Grid container direction="row" spacing={2} my={2}>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: "yellow" }}>
              <SideNav />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: "pink" }}>
              <SideContents />
            </Box>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </main>
  );
};

export default App;
