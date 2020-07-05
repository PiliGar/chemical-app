import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Dashboard } from "./components/pages/DashboardPage/index";
import { Documents } from "./components/pages/DocumentsPage/index";

export const App = () => {
  return (
    <CssBaseline>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/documents" component={Documents} />
          <Route path="/documents/:type" component={Documents} />
        </Switch>
      </Router>
    </CssBaseline>
  );
};
