import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const CategoriesSideBar = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  position: "absolute",
  width: "280px",
  height: "300px",
  left: "26px",
  top: "128px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px 15px",
  gap: "8px",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
}));

const categoryText = {
  width: "68px",
  height: "16px",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  fontWeight: "400",
  color: "#8E8E8E",
  lineHeight: "16px",
};

const CategoriesListWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

const listLabelStyles = {
  width: "100%",
  height: "16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
};
export {
  CategoriesSideBar,
  categoryText,
  CategoriesListWrapper,
  listLabelStyles,
};
