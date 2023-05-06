import { makeStyles } from "@material-ui/core";
import background from "../../assets/images/pipe2.jpg";
import footerImage from "../../assets/images/pipe5.jpg";
import { hover } from "@testing-library/user-event/dist/hover";

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
    color: "black",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    backgroundImage:
      "linear-gradient(rgb(135, 177, 181,0.8),rgb(71, 81, 82,0.8))",
    // backgroundColor: "rgb(135, 177, 181,0.8)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    flexShrink: 0,
    position: "static",
    borderBottom: "1px solid rgba(194, 224, 255, 0.08)",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  navItems: {
    color: "black",
    marginRight: "62px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  background: {
    position: "relative",
    width: "100%",
    height: 877,
    margin: 0,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `linear-gradient(rgb(170 236 227 / 80%),rgb(0, 30, 60,0.8 )), url(${background})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  about: {
    // position: "relative",
    width: "100%",
    height: "58vh",
    marginTop: "30px",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    //backgroundSize: "cover",
    //background: `linear-gradient(rgb(170 236 227 / 80%),rgb(0, 30, 60,0.8 )), url(${background})`,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
  },

  aboutTitle: {
    marginBottom: "50px",
  },
  aboutText: {
    fontSize: "1.5rem",
    //fontWeight: 500,
    //paddingTop: "15px",
    lineHeight: 1.3,
    letterSpacing: 0,
    textAlign: "left",
    width: "78%",
    margin: "0 auto",
    height: " 145px",
    color: "#6b6969",
    fontFamily: "serif",
  },
  servicePageDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  servicePageCard: {
    height: "43vh",
    //width: "30vw",
  },
  contactContainer: {
    height: "63vh",
    width: "100%",
    // marginBottom: "1vh",
  },

  contact: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "2vh",
    marginBottom: "1vh",
    // height: "10vh",
  },
  contactText: {
    display: "flex",
  },
  contactIcon: {
    marginRight: "0.5vw",
    marginTop: "-0.3vh",
  },
  enquirey: {
    display: "flex",
    flexDirection: "column",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
  },
  formField: {
    margin: "1.1vw !important",
  },
  formInput: {
    width: "25vw",
  },
  contactButton: {
    width: "8vw",
    color: "#fff !important",
    backgroundColor: "darkblue !important",
    "&:hover": {
      backgroundColor: "darkblue !important",
      color: "#fff !important",
    },
  },

  desText: {
    fontSize: "2.2rem",
    fontWeight: 500,
    paddingTop: "15px",
    lineHeight: 1.3,
    letterSpacing: 0,
    textAlign: "left",
  },
  service: {
    marginTop: "40px",
    marginBottom: "40px",
  },
  scroll: {
    width: "100%",
    overflowX: "scroll",
    display: "flex",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  card: {
    height: "100%",
    width: "400px",
    "&:hover": {
      background: "linear-gradient(rgb(170 236 227 / 80%),rgb(0, 30, 60,0.8 ))",
    },
  },

  footer: {
    //backgroundImage: `url(${footerImage})`,
    position: "relative",
    width: "100%",
    height: 300,
    margin: 0,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `linear-gradient(rgb(170 236 227 / 80%),rgb(221 196 94 / 80%)), url(${footerImage})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "black",
    textDecoration: "none",
  },
  footerSubText: {
    color: "White",
    textDecoration: "none",
    listStyle: "none",
    marginLeft: "-40px",
  },
  copyRight: {
    //marginTop: "auto",
    color: "black",
    marginBottom: -10,
    width: "100%",
  },
  iconStyle: {
    fontSize: "1rem",
    marginBottom: "-1px",
  },
}));

export default useStyles;
