import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  input: {
    borderBottom: "solid 1px #3f51b5",
  },
}));
