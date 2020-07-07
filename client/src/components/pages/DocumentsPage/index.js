import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../context/MainContext";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { SearchBar } from "../../ui/SearchBar/index";
import { EntriesList } from "../../ui/List/index";

import { useStyles } from "./style";

import { Header } from "../../ui/Header/index";
import { SelectInput } from "../../ui/Select";
import Title from "../../ui/Title";

export const Documents = (props) => {
  const classes = useStyles();
  const { documents, dataAll } = useContext(MainContext);

  const [filter, setFilter] = useState("");
  const [docNum, setDocNum] = useState(10);

  const filterEntries = (data) =>
    data.filter((e) => e[1][1].toLowerCase().includes(filter.toLowerCase()));

  const entries =
    documents.length > 0 ? filterEntries(documents) : filterEntries(dataAll);

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              {documents.length > 0 ? (
                <Title>Search results for "{documents[0][2][1]}":</Title>
              ) : (
                <Title>All documents:</Title>
              )}
            </Grid>

            <Grid item xs={6} md={4} lg={4}>
              <Paper className={classes.paper}>
                <SearchBar setFilter={setFilter} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <p>
                  {documents.length > 0
                    ? `Total documents: ${documents.length}`
                    : `Total documents: ${dataAll.length}`}
                </p>
              </Paper>
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <Paper className={classes.selector}>
                <SelectInput setDocNum={setDocNum} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <EntriesList data={entries} docNum={docNum} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
