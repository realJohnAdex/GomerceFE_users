import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import SideContents from "./components/SideContents";
import { Grid, useTheme } from "@mui/material";

const App = () => {
  const theme = useTheme();
  console.log(theme);
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

export default App;
