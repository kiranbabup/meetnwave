import { Box, AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { items, mainColor, mainbgcolor } from '../../constants';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = items

function MainHeaderComponent(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }} onClick={()=>navigate("/")}>
            Meet'n'Wave
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>navigate(item.link)}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ backgroundColor: mainbgcolor,}}>
                    <Box sx={{ display: { xs: "flex", sm: "none" }, width: { xs: "100%" }, justifyContent: { xs: "space-between" } }}>
                        <Typography variant="h6" sx={{ my: 2, color:mainColor }} onClick={()=>navigate("/")}>
                        Meet'n'Wave
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{color:mainColor}}/>
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color:mainColor }}
                        onClick={()=>navigate("/")}
                    >
                        Meet'n'Wave
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' }, mr:2 }}>
                        {navItems.map((item,index) => (
                            <Button key={index} sx={{ color: mainColor }} onClick={()=>navigate(item.link)}>
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
export default MainHeaderComponent;