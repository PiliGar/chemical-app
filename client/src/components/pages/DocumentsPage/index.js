import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../context/MainContext";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { SearchBar } from "../../ui/SearchBar/index";
import { DocTable } from "../../ui/Table/index";
import { useStyles } from "./style";
import { Header } from "../../ui/Header/index";
import { SelectInput } from "../../ui/Select";

export const Documents = (props) => {
  const classes = useStyles();
  const { documents, dataAll } = useContext(MainContext);

  const [filter, setFilter] = useState("");

  const [docNum, setDocNum] = useState(10);

  const filterEntries = (data) =>
    data.filter((e) => e[1][1].toLowerCase().includes(filter.toLowerCase()));

  const entries =
    documents.length > 0 ? filterEntries(documents) : filterEntries(dataAll);

  console.log(filter);

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <p>
                  Total documents:
                  {documents.length > 0 ? documents.length : dataAll.length}
                </p>
              </Paper>
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <Paper className={classes.paper}>
                <SelectInput setDocNum={setDocNum} />
              </Paper>
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <Paper className={classes.paper}>
                <SearchBar setFilter={setFilter} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <h3>Document line</h3>
                {entries?.length > 0 &&
                  entries.slice(0, docNum).map((patent, i) => {
                    return (
                      <div key={i}>
                        <p>{patent[1][1]}</p>
                      </div>
                    );
                  })}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
