import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../context/MainContext";
import { withRouter } from "react-router-dom";
import { useStyles } from "./style";
import { SearchBar } from "../../ui/SearchBar/index";
import { ArrowDropDown } from "@material-ui/icons";

import Title from "../Title";

export const TypesTable = withRouter(({ history, title, query }) => {
  const classes = useStyles();
  const { setDocuments } = useContext(MainContext);

  /*removing repeated*/
  const resultTypes = [...new Set(query.map((e) => e[2][1]))];
  const numberOfSameType = (type) =>
    query.filter((e) => e[2][1] === type).length;

  const [filter, setFilter] = useState("");

  const filterTypes = (data) =>
    data.filter((type) => type.toLowerCase().includes(filter.toLowerCase()));

  const handleOnClick = async (type) => {
    const queryDocuments = await query.filter((e) => e[2][1] === type);
    setDocuments(queryDocuments);
    history.push("/documents");
  };

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <div>
        <div className={classes.row}>
          <SearchBar setFilter={setFilter} className={classes.searchBar} />
        </div>
        <div className={classes.row}>
          <button className={classes.btn}>
            Name <ArrowDropDown className={classes.icon} />
          </button>
          <button className={classes.btn}>
            Documents <ArrowDropDown className={classes.icon} />
          </button>
        </div>
        <div className={classes.box}>
          {filterTypes(resultTypes).length <= 0 && (
            <div>
              <p className={classes.alert}>Not results found</p>
            </div>
          )}
          {filterTypes(resultTypes).map((type, i) => {
            return (
              <button
                key={i}
                number={i}
                className={classes.row}
                onClick={() => handleOnClick(type)}
              >
                <div>{type}</div>
                <div>{numberOfSameType(type)}</div>
              </button>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
});
