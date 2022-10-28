import React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { HeadingStyles, FilterCover, TextLabel } from "./Filters";
const Filters = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
    jason1: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine, jason1 } = state;
  return (
    <Box sx={FilterCover}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={HeadingStyles}>
          Brand
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
            sx={TextLabel}
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
            sx={TextLabel}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason1}
                onChange={handleChange}
                name="jason1"
              />
            }
            label="Jason Killian"
            sx={TextLabel}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
            sx={TextLabel}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Filters;
