import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

const generateNavbarLinksList = (linksObject: { subheaderTitle: String; subLinks: any[]; }) => {
    return (
        <List>
            <ListSubheader sx={{ fontSize: 20, textDecoration: 'underline', textAlign: 'center' }} color='primary'>
                {linksObject.subheaderTitle}
            </ListSubheader>
            {linksObject.subLinks.map(element =>
                <ListItem>
                    <ListItemButton>
                        <Link to={element.linkPath} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={element.linkText} sx={{ textAlign: 'center' }} />
                        </Link>
                    </ListItemButton>
                </ListItem>
            )}
        </List>
    )
}

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <Box>

            {/* main appbar */}
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open Drawer"
                        onClick={() => setOpenDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        IITI Drishti CPS Foundation
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Drawer
                sx={{
                    width: 300,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 300
                    },
                }}
                variant="temporary"
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}>
                <Box display={'flex'} justifyContent={'end'}>
                    <IconButton onClick={() => setOpenDrawer(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>
                <Divider />

                {/* organisation list */}
                {generateNavbarLinksList({ subheaderTitle: 'Organization', subLinks: [{ linkPath: '/gov_body', linkText: 'Hub Governing Body' }, { linkPath: '/bod', linkText: 'Board of Directors' }, { linkPath: '/exec_body', linkText: 'Executive Body' }, { linkPath: '/implementation_committees', linkText: 'Implementation Committees' }] })}
                <Divider />
            </Drawer>
        </Box>
    );
}

export default Navbar
