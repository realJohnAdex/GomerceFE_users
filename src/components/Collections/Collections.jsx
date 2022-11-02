import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CollectionsWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1012px",
  left: "358px",
  display: "flex",
  flexWrap: "wrap",
}));

const CollectionRow = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  margin: "3% auto",
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
