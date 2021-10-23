import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../index.scss";
import Location from "../components/location";

const Footer = () => {
    return (
        <Box>
            <Box
                display={"flex"}
                flexWrap={"wrap"}
                gap={5}
                bgcolor={"secondary.light"}
                padding={"2%"}
            >
                <Box maxWidth={450}>
                    <Typography
                        variant="h4"
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
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        IITI Drishti CPS Foundation IIT Indore Campus, Khandwa Road, Simrol,
                        Indore 453552, INDIA
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Prompt"}
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        Email : officedrishti [at] iiti.ac.in
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Prompt"}
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        Phone : +91-731-660 3372(Extn- 3372)
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Prompt"}
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        Website : drishticps.iiti.ac.in
                    </Typography>
                </Box>
                <Box maxWidth={400}>
                    <Typography
                        variant="h4"
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
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        <a href="https://iiti.ac.in/">IIT Indore</a>
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Prompt"}
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        <a href="https://nmicps.gov.in/">NM-ICPS</a>
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Prompt"}
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        <a href="http://ciieir.iiti.ac.in/">CIIEIR</a>
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Prompt"}
                        fontSize={"1rem"}
                        marginBottom={0}
                    >
                        <a href="#">Tenders</a>
                    </Typography>
                </Box>
                <Box>
                    <Location/>
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
