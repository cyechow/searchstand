import React from 'react'
import {
    AppBar,
    Box,
    Icon,
    Toolbar,
    Typography,
} from '@material-ui/core';

import Logo from './logo.svg'

const AppHeader = () => (
    <AppBar position="static">
        <Toolbar>
            <Box display='flex' flexGrow={1}>
                <Icon fontSize='large'>
                    <img src={Logo} height={32} width={32} />
                </Icon>
            </Box>
            <Typography variant="h6" color="inherit">
                SearchStand
            </Typography>
        </Toolbar>
    </AppBar>
);

export default AppHeader