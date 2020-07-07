import React, { useContext, useState } from "react";
import { MainContext } from "../../../context/MainContext";
import { withRouter } from "react-router-dom";
import { useStyles } from "./style";
import { SearchBar } from "../../ui/SearchBar/index";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

import Title from "../Title";

export const TypesTable = withRouter(({ history, title, query }) => {
  const classes = useStyles();
  const { setDocuments, setQueryType } = useContext(MainContext);

  const [filter, setFilter] = useState("");
  const [orderAlpAscendent, setOrderAlpAscendent] = useState(true);
  const [orderNumAscendent, setOrderNumAscendent] = useState();

  const uniqueTypes = [...new Set(query.map((e) => e[2][1]))];
  const numberOfSameType = (type) =>
    query.filter((e) => e[2][1] === type).length;

  const typeList = uniqueTypes.map((e) => [e, numberOfSameType(e)]);

  const filterTypeList = (data) => {
    const result = data.filter((e) =>
      e[0].toLowerCase().includes(filter.toLowerCase())
    );
    if (orderAlpAscendent !== undefined) {
      return orderAlpAscendent
        ? result.sort((a, b) => a[0].localeCompare(b[0]))
        : result.sort((a, b) => b[0].localeCompare(a[0]));
    }
    if (orderNumAscendent !== undefined) {
      return orderNumAscendent
        ? result.sort((a, b) => a[1] - b[1])
        : result.sort((a, b) => b[1] - a[1]);
    }
  };

  const handleOnClick = async (type) => {
    const queryDocuments = await query.filter((e) => e[2][1] === type);
    setDocuments(queryDocuments);
    history.push("/documents");
  };

  const handleOrderAlphabetical = () => {
    !orderAlpAscendent || orderAlpAscendent === undefined
      ? setOrderAlpAscendent(true)
      : setOrderAlpAscendent(false);
    setOrderNumAscendent(undefined);
  };

  const handleOrderNumerical = () => {
    !orderNumAscendent || orderNumAscendent === undefined
      ? setOrderNumAscendent(true)
      : setOrderNumAscendent(false);
    setOrderAlpAscendent(undefined);
  };

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <div>
        <div className={classes.row}>
          <SearchBar setFilter={setFilter} className={classes.searchBar} />
        </div>
        <div className={classes.row}>
          <button
            className={classes.btn}
            onClick={() => handleOrderAlphabetical()}
          >
            Name
            {orderAlpAscendent === true || orderAlpAscendent === undefined ? (
              <ArrowDropDown className={classes.icon} />
            ) : (
              <ArrowDropUp className={classes.icon} />
            )}
          </button>
          <button
            className={classes.btn}
            onClick={() => handleOrderNumerical()}
          >
            Documents
            {orderNumAscendent === true || orderNumAscendent === undefined ? (
              <ArrowDropDown className={classes.icon} />
            ) : (
              <ArrowDropUp className={classes.icon} />
            )}
          </button>
        </div>
        <div className={classes.box}>
          {filterTypeList(typeList)?.length <= 0 && (
            <div>
              <p className={classes.alert}>Not results found</p>
            </div>
          )}
          {filterTypeList(typeList)?.map((e, i) => {
            return (
              <button
                key={i}
                number={i}
                className={classes.row}
                onClick={() => handleOnClick(e[0])}
              >
                <div>{e[0]}</div>
                <div>{e[1]}</div>
              </button>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
});
