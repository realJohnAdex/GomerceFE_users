const breadCrumbsText = {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  /* identical to box height, or 114% */
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  letterSpacing: "1.25px",
  textTransform: "uppercase",
  color: "#1F2839",
};

const breadCrumbsButtonStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContents: "center",
  padding: "2px",
  height: "36px",
  background: "#F4F5EF",
  border: "1px solid #F4F5EF",
  borderRadius: "4px",
  /* Inside auto layout */
  flex: "none",
  order: "0",
  flexGrow: "0",
};

const singleBreadCrumbTextStyle = {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  flex: "none",
  order: "0",
  flexGrow: "0",
  textTransform: "uppercase",
};
export { breadCrumbsText, breadCrumbsButtonStyles, singleBreadCrumbTextStyle };
