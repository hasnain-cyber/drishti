import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListSubheader } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link, useHistory } from "react-router-dom";
import "../../index.scss";
import '../Navbar/Navbar.scss';
import Facebook from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram, LinkedIn } from "@material-ui/icons";

const navbarLinksList = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
        subheaderTitle: "Gallery",
        subLinks: [
            { linkPath: "", linkText: "Course" },
            {
                linkPath: "",
                linkText: "Webinar",
            },
            { linkPath: "infrastructure", linkText: "Infrastructure" },
            {
                linkPath: "",
                linkText: "Visit of dignitaries",
            },
            { linkPath: "", linkText: "Appreciations/Citations" },
            {
                linkPath: "pressRelease",
                linkText: "Press Release",
            },
            { linkPath: "", linkText: "Miscellaneous" },
            { linkPath: "", linkText: "Newsletter" },
        ],
    },
    {
        subheaderTitle: 'Miscellaneous',
        subLinks: [
            { linkPath: "home", linkText: "News and Events" },
        ]
    }
]

const MobileNavbarLinksList = (linksObject: {
    subheaderTitle: string;
    subLinks: {
        linkPath: string;
        linkText: string;
    }[];
}, setOpenDrawer: Function) => {
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
                            setOpenDrawer(false)
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

const DesktopSecondaryNavbarLinks = (linksObject: {
    subheaderTitle: string;
    subLinks: {
        linkPath: string;
        linkText: string;
    }[]
}, fontColor: string) => {
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
        <Box marginX={1} ref={ref} sx={{ position: 'relative' }}>
            <span className={'secondary-navbar-desktop-subheader'}
                style={{ color: fontColor }}>{linksObject.subheaderTitle}</span>
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
    const [openDrawer, setOpenDrawer] = useState(false)
    const [transparentNavbar, setTransparentNavbar] = useState(true)

    const history = useHistory()
    const [isLandingPage, setIsLandingPage] = useState(true)

    useEffect(() => {
        // assume that the first page is landing page
        window.addEventListener('scroll', handleScrollEvent)

        // if this is the landing page
        history.listen((location => {
            if (location.pathname === '/') {
                setIsLandingPage(true)
                handleScrollEvent()
                window.addEventListener('scroll', handleScrollEvent)
            } else {
                setIsLandingPage(false)
                handleScrollEvent()
                window.removeEventListener('scroll', handleScrollEvent)
            }
        }))
    }, [history]);

    const handleScrollEvent = () => {
        if (window.scrollY > window.innerHeight * 0.8) {
            setTransparentNavbar(false)
        } else {
            setTransparentNavbar(true)
        }
    }

    return (
        <>
            {/* main appbar */}
            <AppBar
                position={isLandingPage ? 'fixed' : 'sticky'}
                elevation={isLandingPage && transparentNavbar ? 0 : 5}
                sx={{ background: 'transparent' }}>
                <Box display={'flex'} alignItems={'center'} paddingX={2} paddingY={1}
                    bgcolor={isLandingPage && transparentNavbar ? 'transparent' : '#B2040F'}
                    sx={{ transition: '.2s' }}>
                    <Box className={'mobile-view-drawer-button'}>
                        <IconButton
                            color="inherit"
                            aria-label="Open Drawer"
                            onClick={() => setOpenDrawer(true)}
                        >
                            <MenuIcon fontSize={"large"} />
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
                            style={{ margin: 10, backgroundColor: 'white', padding: 5, borderRadius: 5 }}
                            alt={'drishti_logo'} />
                        <Typography variant="h6" fontFamily={"Ubuntu"} textAlign={'center'} fontSize={25}>
                            IITI DRISHTI CPS FOUNDATION
                        </Typography>
                    </Link>

                    {/*rhs*/}
                    <Box className={'main-navbar-contact-us'} gap={2} paddingY={'1%'}>
                        <a className={'navbar-facebook-icon'} href={'/'}><Facebook fontSize={'large'} /></a>
                        <a className={'navbar-twitter-icon'} href={'/'}><TwitterIcon fontSize={'large'} /></a>
                        <a className={'navbar-instagram-icon'} href={'/'}><Instagram fontSize={'large'} /></a>
                        <a className={'navbar-linkedIn-icon'} href={'/'}><LinkedIn fontSize={'large'} /></a>
                    </Box>
                </Box>
                <Box className={'desktop-secondary-navbar'}
                    bgcolor={isLandingPage && transparentNavbar ? 'transparent' : 'white'}>
                    {DesktopSecondaryNavbarLinks(navbarLinksList[0], isLandingPage && transparentNavbar ? 'white' : 'black')}
                    {DesktopSecondaryNavbarLinks(navbarLinksList[1], isLandingPage && transparentNavbar ? 'white' : 'black')}
                    {DesktopSecondaryNavbarLinks(navbarLinksList[2], isLandingPage && transparentNavbar ? 'white' : 'black')}
                    {DesktopSecondaryNavbarLinks(navbarLinksList[3], isLandingPage && transparentNavbar ? 'white' : 'black')}
                    <span style={{ color: isLandingPage && transparentNavbar ? 'white' : 'black' }}
                        className={'secondary-navbar-desktop-subheader'}
                        onClick={() => {
                            document.getElementById('landing-page-about')?.scrollIntoView()
                        }}>About</span>
                    <Link style={{ color: isLandingPage && transparentNavbar ? 'white' : 'black' }}
                        className={'secondary-navbar-desktop-subheader'}
                        to={'/news'}>News and
                        Events</Link>
                    <span style={{ color: isLandingPage && transparentNavbar ? 'white' : 'black' }}
                        className={'secondary-navbar-desktop-subheader'}
                        onClick={() => {
                            document.getElementById('landing-page-activities')?.scrollIntoView()
                        }}>Activities
                    </span>
                    <span style={{ color: isLandingPage && transparentNavbar ? 'white' : 'black' }}
                        className={'secondary-navbar-desktop-subheader'}
                        onClick={() => {
                            document.getElementById('main-footer-contact-us')?.scrollIntoView()
                        }}>Contact Us</span>
                </Box>
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

                {/* organization list */}
                {MobileNavbarLinksList(navbarLinksList[0], setOpenDrawer)}
                {MobileNavbarLinksList(navbarLinksList[1], setOpenDrawer)}
                {MobileNavbarLinksList(navbarLinksList[2], setOpenDrawer)}
                {MobileNavbarLinksList(navbarLinksList[3], setOpenDrawer)}
                {MobileNavbarLinksList(navbarLinksList[4], setOpenDrawer)}
            </Drawer>
        </>
    );
};

export default Navbar;
