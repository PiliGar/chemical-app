import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { MainContext } from "../../../context/MainContext";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useStyles } from "./style";

export const MenuList = withRouter(({ history }) => {
  const classes = useStyles();
  const { setDocuments } = useContext(MainContext);

  const goToSearh = () => {
    setDocuments([]);
    history.push("/");
  };
  const goToDocuments = () => {
    history.push("/documents");
  };
  return (
    <div>
      <ListItem button onClick={() => goToSearh()}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button onClick={() => goToDocuments()}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Documents" />
      </ListItem>
    </div>
  );
});
