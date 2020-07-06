import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "./style";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export const SearchBar = ({ setFilter, setFilterResults }) => {
  const classes = useStyles();
  return (
    <TextField
      label="Search..."
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        ),
        classes: { ...classes },
        onChange: (e) =>
          setFilter
            ? setFilter(e.target.value)
            : setFilterResults(e.target.value),
      }}
    />
  );
};
