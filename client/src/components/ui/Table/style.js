import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  box: {
    maxHeight: "448px",
    overflow: "auto",
  },
  row: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    borderBottom: "solid 1px #c4c4c4",
    border: "none",
    padding: "20px",
    width: "100%",
    webkitAppearance: "none",
    mozAppearance: "none",
    cursor: "pointer",
  },
  btn: {
    background: "transparent",
    border: "none",
    lineHeight: "40px",
    "&:focus": {
      outline: "none",
      border: "none",
    },
    "&:hover": {
      color: "#3f51b5",
      cursor: "pointer",
    },
  },
  icon: {
    marginBottom: "-7px",
  },
  alert: {
    color: "#3f51b5",
    padding: "0px 20px",
  },
}));
