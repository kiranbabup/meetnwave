import { Box, AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { items, logoName, whiteColor, dodgerBlueColor, DRAWER_WIDTH, grayBG } from '../../constants';
import { useNavigate, useLocation } from 'react-router-dom';
import meetMeLogo from "../../images/Meetme.png";

const navItems = items;

function MainHeaderComponent(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box
                component="img"
                src={meetMeLogo}
                alt="MeetMe Logo"
                sx={{ my: 2, height: '40px', cursor: 'pointer' }}
                onClick={() => navigate("/")}
            />
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.link)}>
                            <ListItemText primary={item.title} sx={{ color: location.pathname === item.link ? '#bd0e07' : 'black', '&:hover': { color: "#bd0e07" } }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ backgroundColor: whiteColor }}>
                    <Box sx={{ display: { xs: "flex", sm: "none" }, width: { xs: "100%" }, justifyContent: { xs: "space-between" } }}>
                        <Box
                            component="img"
                            src={meetMeLogo}
                            alt="MeetMe Logo"
                            sx={{ my: 2, height: '40px', cursor: 'pointer' }}
                            onClick={() => navigate("/")}
                        />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>
                    <Box sx={{flexGrow:1}}>
                        <Box
                            component="img"
                            src={meetMeLogo}
                            alt="MeetMe Logo"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                height: "3rem",
                                width: "4rem",
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate("/")}
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
                        {navItems.map((item, index) => (
                            <Button key={index} sx={{ color: location.pathname === item.link ? '#bd0e07' : 'black', '&:hover': { color: "#bd0e07" } }} onClick={() => navigate(item.link)}>
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
export default MainHeaderComponent;