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

const tiers = [
  {
    title: "Services",   
    description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
    we offer multiple design to check the pipe designs`,
    buttonText: "Read More",   
  },
  {
    title: "Industries",    
    description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
    we offer multiple design to check the pipe designs`,
    buttonText: "Read More"
  
  },
  {
    title: "About us",   
    description: `We offer multiple services that gives max level approach to the users who can get the most benifits out of it.
    we offer multiple design to check the pipe designs`,   
    buttonText: "Read More",
  },
];

const Services = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' component='main' className={classes.service}>
      <Grid container spacing={5} alignItems='flex-end'>
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            // sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
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
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}                  
                >    
                 <Typography                     
                      variant='subtitle1'
                     // align='center'
                      >
                      {tier.description}
                    </Typography>              
                </Box>                               
              </CardContent>
              <CardActions>
                <Button fullWidth>
                  {tier.buttonText} <ArrowRightAlt />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
