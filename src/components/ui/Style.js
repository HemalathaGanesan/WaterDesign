import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navLinks: {
      marginLeft: theme.spacing(4),
      display: "flex",
    },
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "1rem",
      marginLeft: theme.spacing(10),
      "&:hover": {
        color: "grey",
        borderBottom: "1px solid white",
      },
    },
    head: {
      color: "rgb(255, 255, 255)",
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      boxShadow: "none",
      backgroundImage: "none",
      backgroundColor: "rgb(10, 25, 41)",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      position: "static",
      borderBottom: "1px solid rgba(194, 224, 255, 0.08)"
     
    },
    toolbar:{
      justifyContent:"space-between"
    },
    navItems:{
      color:"White",
      marginRight:"62px",
      textDecoration:"none"
    },
    description:{
        color:"White"
    },
    desText:{
        fontSize:"1rem"
    },
    service:{
        marginTop:'30px'
    },
    footerText:{
        color:"White"        
    },
    footerSubText:{
      color:"White",
      textDecoration:"none",
      listStyle:"none",
      marginLeft:"-40px"
    },
    copyRight:{
        marginTop:'20px',
        color:"White",
    },
    iconStyle:{
      fontSize:'1rem',
      marginBottom:'-1px'
    }
  }));

  export default useStyles