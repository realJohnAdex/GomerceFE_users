const CollectionCardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "15px 20px",
  width: "290px",
  height: "383px",
  gab: "10px",
  background: "#FDFDFD",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "4px",
  margin: "0 5px",
};

const CardTextHeading = {
  fontWeight: "600",
  fontSize: "18.75px",
  color: "#000000",
  width: "230px",
  height: "22px",
  lineHeight: "22px",
};

const buttonStyles = {
  width: "114px",
  height: "34px",
  border: "none",
  color: "#1F2839",
  padding: "8px",
  backgroundColor: "#F4F5EF",
  "&:hover": {
    backgroundColor: "#F4F5EF",
    border: "none",
  },
};

export { CollectionCardStyle, buttonStyles, CardTextHeading };
