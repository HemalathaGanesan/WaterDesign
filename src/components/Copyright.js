import { Typography, Link } from "@material-ui/core";
import useStyles from "./ui/Style";

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.copyRight} align='center'>
      {"Copyright © "}
      {new Date().getFullYear()}{" "}
      <Link color='inherit' href='https://mui.com/'>
        Water Design Eng.
      </Link>
    </Typography>
  );
};

export default Copyright;
