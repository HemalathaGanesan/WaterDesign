import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from './ui/Style'

const Header = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // <Grid container>
    //   <AppBar>
    //     <Toolbar>
    //       <Typography varient='h3' className={classes.title}>
    //         Water design Eng
    //       </Typography>
    //       {isMobile ? (
    //         <DrawerComponent />
    //       ) : (
    //         <div className={classes.navLinks}>
    //           <Link to='/' className={classes.link}>
    //             Home
    //           </Link>
    //           <Link to='/' className={classes.link}>
    //             About
    //           </Link>
    //           <Link to='/' className={classes.link}>
    //             Services
    //           </Link>
    //           <Link to='/' className={classes.link}>
    //             Industries
    //           </Link>
    //           <Link to='/' className={classes.link}>
    //             Contact
    //           </Link>
    //         </div>
    //       )}
    //     </Toolbar>
    //   </AppBar>
    // </Grid>
    <AppBar
      position='static'
      color='rgb(10, 25, 41)'
      elevation={0}
      className={classes.head}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }} className={classes.toolbar}>
        <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Water Design Eng
        </Typography>
        <nav >
          <Link className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            Industries
          </Link>
          <Link className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            Services
          </Link>
          <Link className={classes.navItems}
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
          >
            About Us
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
