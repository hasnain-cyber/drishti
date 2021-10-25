import {Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListSubheader} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useEffect, useRef, useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {Link, useHistory} from "react-router-dom";
import "../../index.scss";
import '../Navbar/Navbar.scss'

const navbarLinksList = [
    {
        subheaderTitle: "Organization",
        subLinks: [
            {linkPath: "gov_body", linkText: "Hub Governing Body"},
            {
                linkPath: "bod",
                linkText: "Board of Directors",
            },
            {linkPath: "exec_body", linkText: "Executive Body"},
            {
                linkPath: "implementation_committees",
                linkText: "Implementation Committees",
            },
        ],
    },
    {
        subheaderTitle: "Partners",
        subLinks: [
            {linkPath: "", linkText: "Industries"},
            {
                linkPath: "",
                linkText: "Public Sectors",
            },
            {linkPath: "", linkText: "DRDO/ISRO/ORD Factories"},
            {
                linkPath: "",
                linkText: "Startups",
            },
            {
                linkPath: "",
                linkText: "Defence/Paramilitary Forces/Govt Departments",
            },
        ],
    },
    {
        subheaderTitle: "Facilities",
        subLinks: [
            {linkPath: "", linkText: "Spoke LOC with expertise"},
            {
                linkPath: "",
                linkText: "Research Park",
            },
            {linkPath: "", linkText: "Testing Facilities"},
            {
                linkPath: "",
                linkText: "Labs",
            },
            {linkPath: "", linkText: "CPS Resource Center"},
        ],
    },
    {
        subheaderTitle: "Gallery",
        subLinks: [
            {linkPath: "", linkText: "Course"},
            {
                linkPath: "",
                linkText: "Webinar",
            },
            {linkPath: "", linkText: "Infrastructure"},
            {
                linkPath: "",
                linkText: "Visit of dignitaries",
            },
            {linkPath: "", linkText: "Appreciations/Citations"},
            {
                linkPath: "",
                linkText: "Press Release",
            },
            {linkPath: "", linkText: "Miscellaneous"},
            {linkPath: "", linkText: "Newsletter"},
        ],
    }
]

const MobileNavbarLinksList = (linksObject: {
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
                        sx={{fontFamily: "Prompt"}}
                    >
                        {element.linkText}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

const DesktopNavbarLinks = (linksObject: {
    subheaderTitle: string;
    subLinks: {
        linkPath: string;
        linkText: string;
    }[]
}) => {
    const ref = useRef<HTMLElement>()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        ref.current?.addEventListener('mouseenter', () => {
            setOpen(true)
        })
        ref.current?.addEventListener('mouseleave', () => {
            setOpen(false)
        })
    }, [])

    return (
        <Box marginX={1} ref={ref} sx={{position: 'relative'}}>
            <Typography fontFamily={'Prompt'}>{linksObject.subheaderTitle}</Typography>
            <Box display={'flex'} flexDirection={'column'} bgcolor={'white'} width={200}
                 sx={{
                     position: 'absolute',
                     right: 0,
                     transition: '.5s',
                     opacity: open ? 1 : 0,
                     pointerEvents: open ? 'auto' : 'none'
                 }}>
                {linksObject.subLinks.map(element => <Link key={element.linkText}
                                                           className={'navbar-subLink'}
                                                           to={element.linkPath}>{element.linkText}</Link>)}
            </Box>
        </Box>
    )
}

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Box
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 5,
            }}>
            {/* main appbar */}
            <AppBar
                position="sticky"
                sx={{backgroundColor: "primary.dark"}}
            >
                <Toolbar>
                    <Box className={'mobile-view-drawer-button'}>
                        <IconButton
                            color="inherit"
                            aria-label="Open Drawer"
                            onClick={() => setOpenDrawer(true)}
                        >
                            <MenuIcon fontSize={"large"}/>
                        </IconButton>
                    </Box>
                    <Link to={"/"} style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <img
                            src={"/assets/drishti_logo.png"}
                            width="75"
                            height="55"
                            style={{margin: 10, backgroundColor: 'white', padding: 5, borderRadius: 5}}
                            alt={'drishti_logo'}/>
                        <Typography variant="h6" fontFamily={"Ubuntu"} fontSize={25}>
                            DRISHTI CPS FOUNDATION
                        </Typography>
                    </Link>

                    {/*rhs*/}
                    <Box className={'desktop-view-navbar-links'}>
                        {DesktopNavbarLinks(navbarLinksList[0])}
                        {DesktopNavbarLinks(navbarLinksList[1])}
                        {DesktopNavbarLinks(navbarLinksList[2])}
                        {DesktopNavbarLinks(navbarLinksList[3])}
                    </Box>
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
                        <ChevronLeftIcon/>
                    </IconButton>
                </Box>
                <Divider/>

                {/* organisation list */}
                {MobileNavbarLinksList(navbarLinksList[0])}
                {MobileNavbarLinksList(navbarLinksList[1])}
                {MobileNavbarLinksList(navbarLinksList[2])}
                {MobileNavbarLinksList(navbarLinksList[3])}
            </Drawer>
        </Box>
    );
};

export default Navbar;
