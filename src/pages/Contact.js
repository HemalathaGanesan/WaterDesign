import { Container, Icon, Typography } from "@material-ui/core";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import Place from "@material-ui/icons/Place";
import Mail from "@material-ui/icons/Mail";
import SendIcon from "@material-ui/icons/Send";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "../components/ui/Style";

const Contact = () => {
  const classes = useStyles();

  const handleSend = (e) => {
    console.log("test");
  };

  return (
    <Container className={classes.contactContainer}>
      <Typography
        style={{ marginTop: "2vh", fontSize: "1vw", fontWeight: "800" }}
      >
        Get in touch with us if you have any queries. We'll be happy to help!
      </Typography>
      <div className={classes.contact}>
        <Typography className={classes.contactText}>
          <Icon className={classes.contactIcon}>
            <PhoneEnabledIcon />
          </Icon>
          +91 8778859955
        </Typography>
        <Typography className={classes.contactText}>
          <Icon className={classes.contactIcon}>
            <Mail />
          </Icon>
          waterdesignengg@gmail.com
        </Typography>
        <Typography className={classes.contactText}>
          <Icon className={classes.contactIcon}>
            <Place />
          </Icon>
          MI133, Ragavendra Colony, Avalappalli Hudco,Basthi,Hosur-635109.
        </Typography>
      </div>
      <div className={classes.enquirey}>
        <Typography style={{ fontWeight: "800", fontSize: "1vw" }}>
          For Enquirey
        </Typography>
        <form className={classes.contactForm} onSubmit={handleSend}>
          <FormControl className={classes.formField}>
            <OutlinedInput
              placeholder='Please enter your name'
              className={classes.formInput}
            />
          </FormControl>
          <FormControl className={classes.formField}>
            <OutlinedInput
              placeholder='Please enter your email'
              className={classes.formInput}
            />
          </FormControl>
          <FormControl className={classes.formField}>
            <OutlinedInput
              placeholder='Please enter your Mobile'
              className={classes.formInput}
            />
          </FormControl>
          <TextField
            className={classes.formField}
            style={{ width: "25vw" }}
            id='standard-multiline-flexible'
            label='Message'
            multiline
            maxRows={4}
            variant='standard'
          />
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            className={classes.contactButton}
            type='submit'
          >
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
