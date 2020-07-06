import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export const SearchBar = ({ setFilter, text = "Search..." }) => {
  const classes = useStyles();
  return (
    <TextField
      label={text}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        ),
        classes: { ...classes },
        onChange: (e) => setFilter(e.target.value),
      }}
    />
  );
};
