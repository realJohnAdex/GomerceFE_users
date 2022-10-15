import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ColumnWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px 16px 16px 0px",
  gap: "8px",
  width: "220px",
  height: "306px",
}));
const ColumnTitleStyle = {
  width: "196px",
  height: "21px",
  fontFamily: "Roboto",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#F4F5EF",
};
const CustomListItems = styled("li")(({ theme }) => ({
  listStyle: "none",
  color: "#ffffff",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "8px",
  width: "100%",
  cursor: "pointer",
}));

export { ColumnWrapper, CustomListItems, ColumnTitleStyle };
