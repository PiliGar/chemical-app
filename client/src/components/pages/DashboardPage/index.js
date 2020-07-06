import React, { useContext, useState } from "react";
import { MainContext } from "../../../context/MainContext";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { SearchBar } from "../../ui/SearchBar/index";
import { TypesTable } from "../../ui/Table/index";
import { useStyles } from "./style";
import { Header } from "../../ui/Header/index";
import Title from "../../ui/Title";

export const Dashboard = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("Search...");
  const { dataType1, dataType2 } = useContext(MainContext);

  const filterPatents = (data) =>
    data.filter((patent) =>
      patent[2][1].toLowerCase().includes(filter.toLowerCase())
    );

  const totalDocFound =
    filterPatents(dataType1).length + filterPatents(dataType2).length;

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Title>Find patents by components:</Title>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={classes.paper}>
                <SearchBar setFilter={setFilter} text={"e.g. Vitamin A"} />
              </Paper>
            </Grid>
            {(filterPatents(dataType1)?.length > 0 ||
              filterPatents(dataType2)?.length > 0) && (
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={classes.paper}>
                  <p>Total:{totalDocFound}</p>
                </Paper>
              </Grid>
            )}
            {/* Type 1 */}
            {filterPatents(dataType1)?.length > 0 && (
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={classes.paper}>
                  <TypesTable
                    title="Chemical Type 1"
                    query={filterPatents(dataType1)}
                  />
                </Paper>
              </Grid>
            )}
            {/* Type 2 */}
            {filterPatents(dataType1)?.length > 0 && (
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={classes.paper}>
                  <TypesTable
                    title="Chemical Type 2"
                    query={filterPatents(dataType2)}
                  />
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
};
