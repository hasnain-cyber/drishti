import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListSubheader } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link, useHistory } from "react-router-dom";
import "../index.scss";

const NavbarLinksList = (linksObject: {
    subheaderTitle: string;
    subLinks: {
        linkPath: string;
        linkText: string;
    }[];
}) => {
    const history = useHistory();

    return (
        <List>
            <ListSubheader
                sx={{
                    fontFamily: "Oswald",
                    fontSize: 20,
                    textDecoration: "underline",
                    textAlign: "center",
                }}
                color="primary"
            >
                {linksObject.subheaderTitle}
            </ListSubheader>
            {linksObject.subLinks.map((element) => (
                <ListItem key={element.linkPath}>
                    <ListItemButton
                        onClick={() => {
                            history.push("/" + element.linkPath);
                        }}
                        sx={{ fontFamily: "Prompt" }}
                    >
                        {element.linkText}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Box
            sx={{
                position: "sticky",
                top: "0"
            }}
        >
            {/* main appbar */}
            <AppBar
                position="sticky"
                sx={{ backgroundColor: "primary.dark" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open Drawer"
                        onClick={() => setOpenDrawer(true)}
                    >
                        <MenuIcon fontSize={"large"} />
                    </IconButton>
                    <img
                        src={"/assets/drishti_logo.png"}
                        width="70"
                        height="50"
                        className="margin: 0.6rem"
                        style={{ margin: "0.6rem" }}
                        alt={'drishti_logo'} />
                    <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
                        <Typography variant="h6" fontFamily={"Ubuntu"} fontSize={25}>
                            DRISHTI CPS FOUNDATION
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Drawer
                sx={{
                    width: "100vw",
                    maxWidth: 500,
                    "& .MuiDrawer-paper": {
                        width: "100vw",
                        maxWidth: 500,
                    },
                }}
                variant="temporary"
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box display={"flex"} justifyContent={"end"}>
                    <IconButton onClick={() => setOpenDrawer(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>
                <Divider />

                {/* organisation list */}
                {NavbarLinksList({
                    subheaderTitle: "Organization",
                    subLinks: [
                        { linkPath: "gov_body", linkText: "Hub Governing Body" },
                        {
                            linkPath: "bod",
                            linkText: "Board of Directors",
                        },
                        { linkPath: "exec_body", linkText: "Executive Body" },
                        {
                            linkPath: "implementation_committees",
                            linkText: "Implementation Committees",
                        },
                    ],
                })}
                {NavbarLinksList({
                    subheaderTitle: "Partners",
                    subLinks: [
                        { linkPath: "", linkText: "Industries" },
                        {
                            linkPath: "",
                            linkText: "Public Sectors",
                        },
                        { linkPath: "", linkText: "DRDO/ISRO/ORD Factories" },
                        {
                            linkPath: "",
                            linkText: "Startups",
                        },
                        {
                            linkPath: "",
                            linkText: "Defence/Paramilitary Forces/Govt Departments",
                        },
                    ],
                })}
                {NavbarLinksList({
                    subheaderTitle: "Facilities",
                    subLinks: [
                        { linkPath: "", linkText: "Spoke LOC with expertise" },
                        {
                            linkPath: "",
                            linkText: "Research Park",
                        },
                        { linkPath: "", linkText: "Testing Facilities" },
                        {
                            linkPath: "",
                            linkText: "Labs",
                        },
                        { linkPath: "", linkText: "CPS Resource Center" },
                    ],
                })}
                {NavbarLinksList({
                    subheaderTitle: "Gallery",
                    subLinks: [
                        { linkPath: "", linkText: "Course" },
                        {
                            linkPath: "",
                            linkText: "Webinar",
                        },
                        { linkPath: "", linkText: "Infrastructure" },
                        {
                            linkPath: "",
                            linkText: "Visit of dignitaries",
                        },
                        { linkPath: "", linkText: "Appreciations/Citations" },
                        {
                            linkPath: "",
                            linkText: "Press Release",
                        },
                        { linkPath: "", linkText: "Miscellaneous" },
                        { linkPath: "", linkText: "Newsletter" },
                    ],
                })}
                <Divider />
            </Drawer>
        </Box>
    );
};

export default Navbar;
