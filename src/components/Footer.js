import { Container, Grid, Icon, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import useStyles from "./ui/Style";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import Place from "@material-ui/icons/Place";
import Mail from "@material-ui/icons/Mail";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import Instagram from "@material-ui/icons/Instagram";
import Copyright from "./Copyright";

const iconStyle = { marginBottom: "-2px", fontSize: "1rem" };
const footers = [
  {
    title: "Quick Links",
    description: [
      { name: "About Us", icon: <ArrowRightAlt style={iconStyle} /> },
      { name: "Services", icon: <ArrowRightAlt style={iconStyle} /> },
      { name: "Contact us", icon: <ArrowRightAlt style={iconStyle} /> },
      { name: "Industries", icon: <ArrowRightAlt style={iconStyle} /> },
    ],
  },
  {
    title: "Address",
    description: [
      {
        name: `122/a- Basthi,
      Avalappalli Hudco,Hosur-635109 `,
        icon: <Place style={iconStyle} />,
      },
    ],
  },
  {
    title: "Contact",
    description: [
      { name: "8870007744", icon: <PhoneEnabledIcon style={iconStyle} /> },
      { name: "wde@gmail.com", icon: <Mail style={iconStyle} /> },
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
                      href='#'
                      variant='subtitle1'
                      className={classes.footerText}
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
