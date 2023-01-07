import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const drawerWidth = 170;
const navItems = ['Home', 'About', 'Contact'];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Creative Agency
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Button sx={{
                    bgcolor: 'primary.green'
                }}>
                    Login
                </Button>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                mt: 2
            }}>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.main' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <img src='https://i.ibb.co/JsvBDwD/logo.png'
                                alt=''
                                style={{
                                    width: '150px',
                                }} />
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{
                                    color: 'primary.main',
                                }} variant='text'>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Button sx={{
                            bgcolor: 'primary.green',
                            display: ['none', 'block'],
                            padding: '10px 20px'
                        }}>
                            Login
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
}
export default Header;