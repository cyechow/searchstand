import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Box,
    Grid,
    Icon,
    Toolbar,
    Typography,
} from '@material-ui/core';
import Logo from './logo.svg'

import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
}));

function AppHeader() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
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
                
                <Typography variant="body1" color="inherit">
                    <AccountBoxIcon fontSize="large"/>
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);
};

export default AppHeader