import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../context/MainContext";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ListItem } from "../ListItem/index";
import { useStyles } from "./style";
import Title from "../Title";

export const TypesTable = withRouter(({ history, title, query }) => {
  const classes = useStyles();
  const { documents, setDocuments } = useContext(MainContext);

  const resultTypes = [...new Set(query.map((e) => e[2][1]))];
  const numberOfSameType = (type) =>
    query.filter((e) => e[2][1] === type).length;

  const handleOnClick = async (type) => {
    const queryDocuments = await query.filter((e) => e[2][1] === type);
    setDocuments(queryDocuments);
    history.push("/documents");
  };

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Documents</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultTypes.map((type, i) => {
            return (
              <div key={i}>
                <button onClick={() => handleOnClick(type)}>
                  <ListItem name={type} total={numberOfSameType(type)} />
                </button>
              </div>
            );
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
});
