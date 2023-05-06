import * as React from "react";
import Card from "@material-ui/core/Card";
import { Container } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { CardHeader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import image1 from "../assets/images/water.jpg";
import image2 from "../assets/images/vision.jpg";
import useStyles from "../components/ui/Style";

const Vision = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' component='main' className={classes.service}>
      {/* <Typography
        component='h1'
        variant='h4'
        className={classes.aboutTitle}
        style={{ textAlign: "center" }}
      >
        Services
      </Typography> */}
      <div className={classes.servicePageDiv} style={{ height: "52.5vh" }}>
        <Card className={classes.servicePageCard}>
          <CardMedia style={{ height: 200, width: 400 }} image={image1} />
          <CardHeader title='VISION' />
          <CardContent className={classes.servicePageCard}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                mb: 2,
                width: "19vw",
              }}
            >
              <Typography variant='subtitle1'>
                To be the first choice of go-to consultant for Design and
                Engineering solutions
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card className={classes.servicePageCard}>
          <CardMedia style={{ height: 200, width: 400 }} image={image2} />
          <CardHeader title='MISSION' />
          <CardContent className={classes.servicePageCard}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                mb: 2,
                width: "19vw",
              }}
            >
              <Typography variant='subtitle1'>
                Provide customer centric cost-effective solutions through value
                engineering.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Vision;
