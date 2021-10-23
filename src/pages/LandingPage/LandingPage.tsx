import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import "./LandingPage.scss";

const tabsDataList = [
  {
    title: "TECHNOLOGY DEVELOPMENT",
    text: "One of the core hub activities is aimed towards technology development through various researches. The budget for technology development includes support for R&D projects, prototype development, patenting, and commercialization. It is considered that the budget will comprise of both recurring expenses and non-recurring expenses; however, the actual break-up can vary, based on the sanctioned amount.",
  },
  {
    title: "ENTREPRENEURS",
    text: "The hub activity, Innovation, Entrepreneurship & Start-ups Ecosystem, will cover EIR, start-up incubation, pre-incubation and other entrepreneurship related activities like investors summit, incubation facilities. Budget for the hub activity accounts for the expenses required in the promotion, incubation, operation and development of start-ups and other entrepreneurial ventures in the domain of the CPS. ",
  },
  {
    title: "HRD AND SKILL DEVELOPMENT",
    text: "Hub activity, HRD & Skill Development, is aimed towards training and development of skilled professionals through fellowships and skill development workshops. Budget for HRD & Skill Development includes fellowship for UG, PG, Doctoral, Faculties and Chair professors, apart from development funds to support UG and PG internships and professional skill development workshops. ",
  },
  {
    title: "CENTRE OF EXCELLENCE",
    text: "A Centre of Excellence (CoE) for System Simulation, Modelling and Visualization will be developed as a part of TIH. The primary focus of the CoE will be translational research, i.e., converting the academic research into industry-oriented technology. The CoE will serve as a common unit for different activities and will facilitate interdisciplinary researches in the field of CPS. ",
  },
  {
    title: "INTERNATIONAL COLLABORATIONS",
    text: "International collaboration serves as a two-way bridge for exchange of information at international platform. Collaborations will introduce state of the art international practices in the field of CPS in technology development in India and provide a platform for show casing the developed technology. In this activity bilateral technology development will be encouraged. ",
  },
];

const Card = (cardDetailsObject: { title: String; text: String }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        padding: 5,
        width: 400,
        minHeight: 500,
        backgroundColor: "primary.dark",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        textAlign={"center"}
        fontFamily={"Oswald"}
        sx={{
          textDecoration: "underline",
          marginBottom: 2,
        }}
      >
        {cardDetailsObject.title}
      </Typography>
      <Typography variant="body1" textAlign={"center"} fontFamily={"Prompt"}>
        {cardDetailsObject.text}
      </Typography>
    </Paper>
  );
};

const TabPanel = (props: { value: number }) => {
  return (
    <Paper
      elevation={5}
      sx={{ padding: "5%", backgroundColor: "primary.dark" }}
    >
      <Typography maxWidth={800} color={"white"} textAlign={"center"}>
        {tabsDataList[props.value].text}
      </Typography>
    </Paper>
  );
};
const LandingPage = () => {
  const [tabsValue, setTabsValue] = useState(0);

  return (
    <Box bgcolor={"primary.light"}>
      <Navbar />
      {/* 1st section */}
      <Box
        className="bg_img"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage:
            "linear-gradient(\n" +
            "                rgba(0, 0, 0, 0.533),\n" +
            "                rgba(0, 0, 0, 0.533)\n" +
            "            ),url(/assets/campus_bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        height={"100vh"}
      >
        <Box margin={5} maxWidth={"100%"}>
          <Typography
            variant="h2"
            textAlign={"left"}
            fontFamily={"Oswald"}
            marginBottom={5}
            sx={{ textDecoration: "underline" }}
            color={"white"}
          >
            WELCOME TO DRISHTI
          </Typography>
          <Typography
            fontSize={"1.1rem"}
            textAlign={"left"}
            fontFamily={"Prompt"}
            color={"white"}
            marginRight={"5rem"}
          >
            The Technology Innovation Hub (TIH) falls under the aegis of the
            national mission on interdisciplinary
            <br /> cyber physical systems and is named IITI DRISHTI CPS
            Foundation: <br /> Driving Innovation through Simulation Hub for
            Technologies in Interdisciplinary Cyber Physical Systems. <br />
            The overarching goal of DRISHTI-CPS is to develop an eco-system that
            will enable knowledge generation <br /> through basic and applied
            research and foster an interactive environment where innovative
            products can be developed through joint efforts of industry and
            academia.
          </Typography>
        </Box>
      </Box>

      {/* 2nd section */}
      <Box padding={5} display={"flex"} flexDirection={"column"} gap={5}>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontFamily={"Oswald"}
          color={"secondary.dark"}
          sx={{ textDecoration: "underline" }}
        >
          ABOUT US
        </Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={5}
        >
          {Card({
            title: "VISION",
            text: "To become a pioneering center in simulation, modelling and visualization of cyber physical systems that will bolster Indian manufacturing via development and commercialization of state-of-the-art products and creation of skilled human resource (at all levels from researchers and entrepreneurs) and become a key enabler in catalyzing “Industry 4.0” to realize the vision of “Digital India”.",
          })}
          {Card({
            title: "MISSION",
            text: "To develop a seamless platform by synchronizing and integrating various entities, making a fountainhead of knowledge, Skill enhancement, Research, Technology and Product Development, by innovation and commercialization for effecting resource optimization and sustainability.",
          })}
          {Card({
            title: "THRUST AREAS",
            text:
              "Modelling, simulation and decision making in cyber physical Industrial systems" +
              "Modeling and performance optimization of Energy systems" +
              "CPS-based Prognostics and health management (PHM)" +
              "Enabling precise and sustainable agriculture using CPS" +
              "Modeling and simulation for Biological and healthcare systems" +
              "Environmental systems modeling" +
              "Dynamical systems modeling and simulation" +
              "Modeling and simulation of material behavior" +
              "Social behavior modeling and simulation",
          })}
        </Box>
      </Box>

      {/* 3rd section - carousel */}
      <Box paddingX={5}>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontFamily={"Oswald"}
          marginBottom={5}
          color={"secondary.dark"}
          sx={{ textDecoration: "underline" }}
        >
          ANNOUNCEMENTS
        </Typography>
        <Carousel autoPlay={false} animation={"fade"}>
          <Paper
            variant={"outlined"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              backgroundColor: "primary.dark",
              height: 500,
              padding: "5%",
            }}
          >
            <img
              src={"/assets/carousel_pic1.jpg"}
              alt="carousel_pic1"
              width={400}
              style={{ maxWidth: "95%", border: "2px solid black" }}
            />
            <Typography
              variant="h6"
              textAlign={"center"}
              fontFamily={"Prompt"}
              color={"white"}
            >
              Foundation stone being unveiled by Dr B Phatak, Chairman, and
              Board of governors.
            </Typography>
          </Paper>
          <Paper
            variant={"outlined"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              backgroundColor: "primary.dark",
              height: 500,
              padding: "5%",
            }}
          >
            <img
              src={"/assets/carousel_pic2.jpg"}
              alt="carousel_pic2"
              width={400}
              style={{ maxWidth: "95%", border: "2px solid black" }}
            />
            <Typography
              variant="h6"
              textAlign={"center"}
              fontFamily={"Prompt"}
              color={"white"}
            >
              Auspicious Inaugural ribbon being cut by Dr B Phatak and Dr NK
              Jain: 12 Aug 21
            </Typography>
          </Paper>
          <Paper
            variant={"outlined"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              //   backgroundColor: "white",
              backgroundColor: "primary.dark",
              height: 500,
              padding: "5%",
            }}
          >
            <img
              src={"/assets/drishti_logo.png"}
              alt="drishti_logo"
              width={400}
              style={{ maxWidth: "95%", border: "2px solid black" }}
            />
            <Typography
              variant="h6"
              textAlign={"center"}
              fontFamily={"Prompt"}
              color={"white"}
            >
              Advertisement for the post of finance manager.
            </Typography>
            <Typography
              variant="h6"
              textAlign={"center"}
              fontFamily={"Prompt"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"white"}
            >
              Last Date to apply: 21st September, 2021
            </Typography>
          </Paper>
          <Paper
            variant={"outlined"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              backgroundColor: "primary.dark",
              height: 500,
              padding: "5%",
            }}
          >
            <img
              src={"/assets/drishti_logo.png"}
              alt="drishti_logo"
              width={400}
              style={{ maxWidth: "95%", border: "2px solid black" }}
            />
            <Typography
              variant="h6"
              textAlign={"center"}
              fontFamily={"Prompt"}
              color={"white"}
            >
              Advertisement for the post of finance manager.
            </Typography>
            <Typography
              variant="h6"
              textAlign={"center"}
              fontFamily={"Prompt"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"white"}
            >
              Newsletter
            </Typography>
          </Paper>
        </Carousel>
      </Box>

      {/*4th section*/}
      <Box
        padding={"2%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        marginY={5}
        sx={{
          backgroundImage:
            "linear-gradient(\n" +
            "                rgba(0, 0, 0, 0.533),\n" +
            "                rgba(0, 0, 0, 0.533)\n" +
            "            ),url(/assets/technology.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        minHeight={500}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          fontFamily={"Oswald"}
          color={"  white"}
          marginBottom={5}
          sx={{ textDecoration: "underline" }}
        >
          ACTIVITIES
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={2}
          className={"tab-container"}
          alignItems={"center"}
          color={"white"}
        >
          <Tabs
            value={tabsValue}
            onChange={(event, value) => setTabsValue(value)}
            centered
            orientation={"vertical"}
            color={"white"}
            variant={"fullWidth"}
          >
            {tabsDataList.map((element) => (
              <Tab label={element.title} />
            ))}
          </Tabs>
          <TabPanel value={tabsValue} />
        </Box>
      </Box>

      {/*5th section - Footer*/}
      {/* <Box
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"center"}
                gap={5}
                bgcolor={"secondary.light"}
                padding={"2%"}
            >
                <Box maxWidth={500}>
                    <Typography
                        variant="h4"
                        textAlign={"center"}
                        fontFamily={"Oswald"}
                        marginBottom={2}
                        color={"secondary.dark"}
                    >
                        CONTACT US
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        IITI Drishti CPS Foundation IIT Indore Campus, Khandwa Road, Simrol,
                        Indore 453552, INDIA
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        Email : officedrishti [at] iiti.ac.in
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        Phone : +91-731-660 3372(Extn- 3372)
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        Website : drishticps.iiti.ac.in
                    </Typography>
                </Box>
                <Box maxWidth={500}>
                    <Typography
                        variant="h4"
                        textAlign={"center"}
                        fontFamily={"Oswald"}
                        marginBottom={2}
                        color={"secondary.dark"}
                    >
                        CONTACT US
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        IITI Drishti CPS Foundation IIT Indore Campus, Khandwa Road, Simrol,
                        Indore 453552, INDIA
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        Email : officedrishti [at] iiti.ac.in
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        Phone : +91-731-660 3372(Extn- 3372)
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        fontFamily={"Prompt"}
                        marginBottom={0}
                    >
                        Website : drishticps.iiti.ac.in
                    </Typography>
                </Box>
            </Box>
        </Box> */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
