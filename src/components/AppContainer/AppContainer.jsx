import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
}));

export default AppContainer;
