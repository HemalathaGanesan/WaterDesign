import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./ui/Style";
import { useNavigate } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import img1 from "../assets/images/pipe2.jpg";
import img2 from "../assets/images/pipe3.jpg";
import img3 from "../assets/images/pipe.jpg";
import img4 from "../assets/images/pipe41.jpg";
const tiers = [
  {
    title: "Services",
    description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
    we offer multiple design to check the pipe designs`,
    buttonText: "Read More",
    image: img2,
    url: "service",
  },
  {
    title: "Vision & Mission",
    description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
    we offer multiple design to check the pipe designs`,
    buttonText: "Read More",
    image: img4,
    url: "vision",
  },
  {
    title: "About us",
    description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
    we offer multiple design to check the pipe designs`,
    buttonText: "Read More",
    image: img3,
    url: "aboutus",
  },
  // {
  //   title: "About us",
  //   description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
  //   we offer multiple design to check the pipe designs`,
  //   buttonText: "Read More",
  //   image: img2,
  //   url: "service",
  // },
  // {
  //   title: "About us",
  //   description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
  //   we offer multiple design to check the pipe designs`,
  //   buttonText: "Read More",
  //   image: img1,
  //   url: "service",
  // },
];

const Services = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container maxWidth='lg' component='main' className={classes.service}>
      <div className={classes.scroll}>
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            // sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
            style={{ height: "500px", margin: "30px" }}
          >
            <Card className={classes.card}>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "Grey"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardMedia
                style={{ height: 200, width: 400 }}
                image={tier.image}
                title={tier.title}
              />

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography variant='subtitle1'>
                    {tier.description}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions>
                <Button
                  fullWidth
                  onClick={() => {
                    navigate(`${tier.url}`);
                  }}
                >
                  {tier.buttonText} <ArrowRightAlt />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </div>
    </Container>
  );
};

export default Services;
