import { Container, Typography, Box } from "@material-ui/core";
import useStyles from "./ui/Style";

const Description = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container
        // disableGutters
        maxWidth='lg'
        component='main'
        // sx={{ pt: 8, pb: 6 }}
        // style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        <Typography component='h1' variant='h3' align='center' gutterBottom>
          Welcome to WDE
        </Typography>
        <Typography
          variant='h3'
          align='center'
          component='p'
          className={classes.desText}
        >
          {" "}
          WDE offers a range of services to its customers. Services include
          understanding the customer requirements, competitive benchmarking for
          the products, develop a conceptual design, verification of design
          using analytical engineering, develop a product prototype, product
          testing for concept validation.
        </Typography>
      </Container>
    </div>
  );
};

export default Description;
