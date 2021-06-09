import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Box,
    Icon,
    Link,
    Toolbar,
    Typography,
} from '@material-ui/core';
import Logo from './logo.svg'

import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
}));

function AppHeader() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <Box display='flex' flexGrow={1}>
                    <Link href="#">
                        <Icon fontSize='large'>
                            <img src={Logo} height={32} width={32} />
                        </Icon>
                    </Link>
                </Box>
                <Box display='flex' flexGrow={1}>
                    <Typography variant="h6" color="inherit">
                        SearchStand
                    </Typography>
                </Box>
                
                <Typography variant="body1" color="inherit">
                    <Link href="#">
                        <AccountBoxIcon fontSize="large"/>
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);
};

export default AppHeader