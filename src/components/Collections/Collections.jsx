import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CollectionsWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1012px",
  height: "892px",
  left: "358px",
  display: "flex",
  flexWrap: "wrap",
  padding: "3%",
}));

const CollectionRow = styled(Box)(({ theme }) => ({
  // margin: "2px auto",
  width: "100%",
  display: "flex",
  flexDirection: "row",
}));
const collectionHeading = {
  width: "95px",
  height: "22px",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "18.75px",
  lineHeight: "22px",
  color: "#8E8E8E",
};
export { CollectionsWrapper, collectionHeading, CollectionRow };
