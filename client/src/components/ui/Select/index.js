import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../context/MainContext";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectInput = ({ setDocNum }) => {
  const { documents } = useContext(MainContext);

  const classes = useStyles();
  const [state, setState] = React.useState({
    entries: 10,
  });

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
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: "entries",
          }}
        >
          <option selected="selected" value={10}>
            10
          </option>
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
