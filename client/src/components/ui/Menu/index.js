import React from "react";
import { withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const MenuList = withRouter(({ history }) => (
  <div>
    <Link to="/" variant="primary" style={{ textDecoration: "none" }}>
      <ListItem>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
    </Link>

    <Link to="/documents" variant="primary" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Documents" />
      </ListItem>
    </Link>
  </div>
));
