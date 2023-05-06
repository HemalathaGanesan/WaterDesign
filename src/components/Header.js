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
import LogoImage from "../assets/images/logo.png";

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
        <div style={{ width: "55%", display: "flex" }}>
          <img
            src={LogoImage}
            alt='Water Design Engg'
            style={{ width: "5%", marginRight: "10px" }}
          />
          <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            Water Design Engg
          </Typography>
        </div>

        <nav style={{ width: "45%" }}>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
            to='/'
          >
            Home
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            to='/vision'
            sx={{ my: 1, mx: 1.5 }}
          >
            Vision & Mission
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            to='/service'
            sx={{ my: 1, mx: 1.5 }}
          >
            Services
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            to='/aboutus'
            sx={{ my: 1, mx: 1.5 }}
          >
            About Us
          </Link>
          <Link
            className={classes.navItems}
            variant='button'
            color='text.primary'
            to='/contact'
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
