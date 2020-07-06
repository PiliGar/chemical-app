import React from "react";
import { withRouter } from "react-router-dom";

import { useStyles } from "./style";
import { StyledTableRow } from "./style";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import RemoveRedEye from "@material-ui/icons/RemoveRedEye";

export const EntriesList = withRouter(({ data, docNum, history }) => {
  const classes = useStyles();
  const url = `https://patents.google.com/patent/`;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nº</TableCell>
            <TableCell align="left">Patent Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody width="100%">
          {data?.length > 0 &&
            data.slice(0, docNum).map((patent, i) => {
              return (
                <StyledTableRow key={i}>
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="left">{patent[0][1]}</TableCell>
                  <TableCell align="left">{patent[1][1]}</TableCell>
                  <TableCell align="right">
                    <a target="_blank" href={`${url}${patent[0][1]}`}>
                      <RemoveRedEye />
                    </a>
                  </TableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
