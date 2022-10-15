import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px 0px",
  gap: "17px",
  height: "520px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  background: "#B69D74",
}));

const FooterContent = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "60px 120px 24px",
  gap: "40px",
  flex: "none",
  order: "0",
  alignSelf: "stretch",
  flexGrow: "0",
}));

const DividerStyle = {
  width: "100%",
  background: "#FFFFFF",
  flex: "none",
  order: "1",
  alignSelf: "stretch",
  flexGrow: "0",
};

const FooterBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 120px",
  width: "100%",
  height: "64px",
  flex: "none",
  order: "2",
  alignSelf: "stretch",
  flexGrow: "0",
}));
const SocialStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "8px",
  gap: "20px",
  width: "128px",
  height: "40px",
}));

const CopyRightStyling = {
  height: "25px",
  fontFamily: "Nunito Sans",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "25px",
  textAlign: "right",
  color: "#F4F5EF",
};

const SocialMediaIconStyles = {
  width: "24px",
  height: "24px",
  flex: "none",
  order: "0",
  flexGrow: "0",
  color: "#F4F5EF",
};
export {
  FooterContainer,
  FooterContent,
  DividerStyle,
  FooterBottom,
  SocialStack,
  CopyRightStyling,
  SocialMediaIconStyles,
};
