import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { padding } from "@mui/system";
import { Link } from "react-router-dom";
import "../index.scss";

const Footer = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={5}
        bgcolor={"secondary.light"}
        paddingLeft={"3rem"}
        paddingBottom={"1rem"}
      >
        <Box maxWidth={450}>
          <Typography
            variant="h6"
            fontFamily={"Oswald"}
            fontSize={"2rem"}
            marginBottom={2}
            color={"secondary.dark"}
          >
            CONTACT US
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            IITI Drishti CPS Foundation IIT Indore Campus, Khandwa Road, Simrol,
            Indore 453552, INDIA
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            Email : officedrishti [at] iiti.ac.in
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            Phone : +91-731-660 3372(Extn- 3372)
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            Website : drishticps.iiti.ac.in
          </Typography>

          <a>
            <img
              src="http://drishticps.iiti.ac.in/images/follow/facebook.jpg"
              style={{ maxWidth: "2.5rem", margin: "0.3rem" }}
            ></img>
          </a>
          <a href="#">
            <img
              src="http://drishticps.iiti.ac.in/images/follow/twitter.jpg"
              style={{ maxWidth: "2.5rem", margin: "0.3rem" }}
            ></img>
          </a>
          <a href="https://www.instagram.com/office_drishti/">
            <img
              src="http://drishticps.iiti.ac.in/images/follow/instagram.png"
              style={{ maxWidth: "2.5rem", margin: "0.3rem" }}
            ></img>
          </a>
          <a href="https://www.linkedin.com/company/iiti-drishti-cps-foundation/">
            <img
              src="http://drishticps.iiti.ac.in/images/follow/linkedin-logo-copy.png"
              style={{ maxWidth: "2.5rem", margin: "0.3rem" }}
            ></img>
          </a>
        </Box>
        <Box maxWidth={400}>
          <Typography
            variant="h6"
            fontFamily={"Oswald"}
            fontSize={"2rem"}
            marginBottom={2}
            color={"secondary.dark"}
          >
            QUICK LINKS
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            <Link to="https://iiti.ac.in/">IIT Indore</Link>
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            <Link to="https://nmicps.gov.in/">NM-ICPS</Link>
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            <Link to="http://ciieir.iiti.ac.in/">CIIEIR</Link>
          </Typography>
          <Typography
            variant="body1"
            fontFamily={"Prompt"}
            fontSize={"0.9rem"}
            marginBottom={0}
          >
            <Link to="/">Tenders</Link>
          </Typography>
        </Box>
        <Box maxWidth={"100%"} marginLeft={"5rem"}>
          <Typography
            variant="h6"
            fontFamily={"Oswald"}
            fontSize={"2rem"}
            marginBottom={2}
            color={"secondary.dark"}
          >
            LOCATE US
          </Typography>
          <Box border={"2px solid black"} width={"400"} height={"200"}>
            <iframe
              title={"iit-indore-location"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7370.913000013107!2d75.91764557409962!3d22.5245661012452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIIT%20Indore!5e0!3m2!1sen!2sin!4v1635010938792!5m2!1sen!2sin"
              width="400"
              height="200"
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"}>
        <Box minWidth={"50%"}>
          <Typography
            fontFamily={"Ubuntu"}
            fontSize={"1rem"}
            color={"secondary.dark"}
            marginLeft={"1rem"}
          >
            @DRISHTI CPS FOUNDATION | IIT Indore
          </Typography>
        </Box>
        <Box minWidth={"50%"}>
          <Typography
            fontFamily={"Ubuntu"}
            fontSize={"1rem"}
            color={"secondary.dark"}
            alignItems={"revert"}
            textAlign={"right"}
            marginRight={"1rem"}
          >
            Designed and developed by:
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
