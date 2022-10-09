import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/material";

const customAppBarStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  maxWidth: "1440px",
  height: "90px",
  padding: "20px, 53px",
  margin: "0 auto",
  backgroundColor: "#fff",
  top: 0,
  left: 0,
};

const toolBarStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const Search = styled("div")(({ theme }) => ({
  borderRadius: "4px",
  border: "1px solid #CED4DA",
  height: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px 17px",
  color: "#ADADAD",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1F2839",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "400px",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 0,
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "368px",
  height: "34px",
}));

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
const customSearchIcon = {
  color: "#1F2839",
  fontSize: "18px",
};
export {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  customAppBarStyle,
  toolBarStyles,
  StyledButtonGroup,
  buttonStyles,
  customSearchIcon,
};
