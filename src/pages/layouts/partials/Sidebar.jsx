import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { Link } from 'react-router-dom';
import { dashboard, setting } from "./SidebarLink"


const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 20,
        paddingRight: 20,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

export default function Sidebar() {
    const [open, setOpen] = React.useState(true);
    const [openSetting, setOpenSetting] = React.useState(false);
    return (
        <div className='w-full md:w-[21%] h-screen '>
            <Box sx={{ display: 'flex' }} className="w-full h-full ">
                <ThemeProvider
                    theme={createTheme({
                        components: {
                            MuiListItemButton: {
                                defaultProps: {
                                    disableTouchRipple: true,
                                },
                            },
                        },
                        palette: {
                            mode: 'dark',
                            primary: { main: 'rgb(102, 157, 246)' },
                            background: { paper: 'rgb(5, 30, 52)' },
                        },
                    })}
                >
                    <Paper elevation={0} className='w-full '>
                        <FireNav component="nav" disablePadding>
                            <ListItemButton sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                <img src="https://geni.technology/wp-content/uploads/2022/11/Full_logo_Color-1.svg" className='w-28' alt="" />
                                <MenuOpenOutlinedIcon sx={{ fontSize: 22 }} />
                            </ListItemButton>
                            <Divider />
                            <ListItem component="div" disablePadding>
                                <ListItemButton sx={{ height: 43 }}>
                                    <ListItemIcon>
                                        <Home color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary=" Overview"
                                        primaryTypographyProps={{
                                            color: 'primary',
                                            fontWeight: 'medium',
                                            variant: 'body2',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <Box
                                sx={{
                                    bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                                    pb: open ? 2 : 0,
                                    mt: 1
                                }}
                            >
                                <ListItemButton
                                    alignItems="flex-start"
                                    onClick={() => setOpen(!open)}
                                    sx={{
                                        px: 3,
                                        pt: 1,
                                        pb: open ? 0 : 1,
                                        '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                    }}
                                >
                                    <ListItemText
                                        primary="Dashboard"
                                        primaryTypographyProps={{
                                            fontSize: 15,
                                            fontWeight: 'medium',
                                            lineHeight: '20px',
                                            mb: '2px',
                                        }}
                                        secondary=" Projects , Authentication"
                                        secondaryTypographyProps={{
                                            noWrap: true,
                                            fontSize: 12,
                                            lineHeight: '16px',
                                            color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                        }}
                                        sx={{ my: 0 }}
                                    />
                                    <KeyboardArrowDown
                                        sx={{
                                            mr: -1,
                                            opacity: 0,
                                            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                            transition: '0.2s',
                                        }}
                                    />
                                </ListItemButton>
                                {open &&
                                    dashboard.map((item) => (
                                        <Link to={item.url}
                                            key={item.label}
                                        >
                                            <ListItemButton
                                                sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                            >
                                                <ListItemIcon sx={{ color: 'inherit' }}>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.label}
                                                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    ))}
                            </Box>
                            <Box
                                sx={{
                                    bgcolor: openSetting ? 'rgba(71, 98, 130, 0.2)' : null,
                                    pb: openSetting ? 2 : 0,
                                }}
                            >
                                <ListItemButton
                                    alignItems="flex-start"
                                    onClick={() => setOpenSetting(!openSetting)}
                                    sx={{
                                        px: 3,
                                        pt: 1,
                                        pb: openSetting ? 0 : 1,
                                        '&:hover, &:focus': { '& svg': { opacity: openSetting ? 1 : 0 } },
                                    }}
                                >
                                    <ListItemText
                                        primary="Setting"
                                        primaryTypographyProps={{
                                            fontSize: 15,
                                            fontWeight: 'medium',
                                            lineHeight: '20px',
                                            mb: '2px',
                                        }}
                                        secondary="Site Setting"
                                        secondaryTypographyProps={{
                                            noWrap: true,
                                            fontSize: 12,
                                            lineHeight: '16px',
                                            color: openSetting ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                        }}
                                        sx={{ my: 0 }}
                                    />
                                    <KeyboardArrowDown
                                        sx={{
                                            mr: -1,
                                            opacity: 0,
                                            transform: openSetting ? 'rotate(-180deg)' : 'rotate(0)',
                                            transition: '0.2s',
                                        }}
                                    />
                                </ListItemButton>
                                {openSetting &&
                                    setting.map((item) => (
                                        <ListItemButton
                                            key={item.label}
                                            sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                        >
                                            <ListItemIcon sx={{ color: 'inherit' }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                            />
                                        </ListItemButton>
                                    ))}
                            </Box>
                        </FireNav>

                    </Paper>
                </ThemeProvider>
            </Box>
        </div>
    );
}
