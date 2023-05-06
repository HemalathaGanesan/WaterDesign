import { Container, Typography, Box } from "@material-ui/core";
import useStyles from "../components/ui/Style";

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Container
        // disableGutters
        maxWidth='lg'
        component='main'
        // sx={{ pt: 8, pb: 6 }}
        // style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        <Typography component='h1' variant='h4' className={classes.aboutTitle}>
          ABOUT US
        </Typography>
        <Typography
          className={classes.aboutText}
          style={{ marginBottom: "-50px" }}
        >
          Water Design Engineering is an exclusive consultant company providing
          Design and Engineering solutions for water treatment projects.
        </Typography>
        <Typography
          className={classes.aboutText}
          style={{ marginBottom: "5px" }}
        >
          We support for the total Project managements include Proposal
          Documents, Basic Engineering Package (BEP), Design Basis Report (DBR),
          Detail Engineering Drawings (Mechanical/Electrical/Plumbing), BOM,
          Civil guideline drawings, Technical Data sheets, Project Management,
          E&C supervision. Etc.
        </Typography>
        <Typography
          className={classes.aboutText}
          style={{ marginBottom: "-20px" }}
        >
          Our services include Feasibility Report, Detailed Project Report,
          Basic and Detailed Engineering Services, Energy audit ,Procurement
          Assistance,Project Management, Third Party Inspection and Expediting,
          Construction Supervision and commissioning assistance.
        </Typography>
        <Typography
          className={classes.aboutText}
          style={{ marginBottom: "0px" }}
        >
          Our team has the rich experience in various domains in different
          Verticals like ETP, STP, WTP, High Purity Systems. We are well-versed
          in Indian /International Codes and Standards.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutUs;
