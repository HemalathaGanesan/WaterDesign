import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./ui/Style";

const Header = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      position='static'
      color='rgb(10, 25, 41)'
      elevation={0}
      className={classes.head}
      // sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }} className={classes.toolbar}>
        <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Water Design Eng
        </Typography>
        <nav>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            Industries
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            Services
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            About Us
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            Contact Us
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
