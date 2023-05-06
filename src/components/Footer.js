import { Container, Grid, Icon, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./ui/Style";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import Place from "@material-ui/icons/Place";
import Mail from "@material-ui/icons/Mail";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import Copyright from "./Copyright";

const iconStyle = { marginBottom: "-2px", fontSize: "1rem" };
const footers = [
  {
    title: "Quick Links",
    description: [
      { name: "Home", icon: <ArrowRightAlt style={iconStyle} />, url: "/" },
      {
        name: "About Us",
        icon: <ArrowRightAlt style={iconStyle} />,
        url: "/aboutus",
      },
      {
        name: "Services",
        icon: <ArrowRightAlt style={iconStyle} />,
        url: "/service",
      },
      {
        name: "Vision & Mission",
        icon: <ArrowRightAlt style={iconStyle} />,
        url: "/vision",
      },
      {
        name: "Contact us",
        icon: <ArrowRightAlt style={iconStyle} />,
        url: "contact",
      },
    ],
  },
  {
    title: "Address",
    description: [
      {
        name: `MI133, Ragavendra Colony,
        Avalappalli Hudco,
        Basthi,Hosur-635109 `,
        icon: <Place style={iconStyle} />,
      },
    ],
  },
  {
    title: "Contact",
    description: [
      { name: "+91 8778859955", icon: <PhoneEnabledIcon style={iconStyle} /> },
      { name: "waterdesignengg@gmail.com", icon: <Mail style={iconStyle} /> },
    ],
  },
  // {
  //   title: "Legal",
  //   description: ["Privacy policy", "Terms of use"],
  // },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container
        className={classes.service}
        maxWidth='lg'
        component='footer'
        // align='center'
      >
        <Grid container spacing={1} justifyContent='space-evenly'>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography
                variant='h5'
                // className={classes.footerText}
                // gutterBottom
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item} className={classes.footerSubText}>
                    <Link
                      to={item.url}
                      className={classes.footerText}
                      // variant='button'
                      // href={`${item.url}`}
                      // sx={{ my: 1, mx: 1.5 }}
                    >
                      <Icon className={classes.iconStyle}>{item.icon}</Icon>{" "}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright />
      </Container>
    </div>
  );
};

export default Footer;
