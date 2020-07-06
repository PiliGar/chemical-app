import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../context/MainContext";
import { useStyles } from "./style";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const SelectInput = ({ setDocNum }) => {
  const { documents } = useContext(MainContext);

  const classes = useStyles();

  const [entries, setEntries] = useState(10);

  const handleChange = (event) => {
    setEntries(event.target.value);
  };

  useEffect(() => {
    setDocNum(entries);
  }, [entries]);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Shown:</InputLabel>
        <Select
          native
          defaultValue={entries}
          onChange={handleChange}
          inputProps={{
            name: "entries",
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={documents.length}>All</option>
        </Select>
      </FormControl>
    </div>
  );
};
