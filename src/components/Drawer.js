import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "White",
    fontSize: "1.2rem",
  },
  icon: {
    color: "white",
  },
  drawer: {
    width: 240,
    backgroundColor: "grey",
  },
}));

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        style={{ backgroundColor: "grey" }}
      >
        <List className={classes.drawer}>
          <ListItem>
            <ListItemText>
              <Link to='/' className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to='/' className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to='/' className={classes.link}>
                Services
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to='/' className={classes.link}>
                Industries
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to='/' className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
