import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Toolbar, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.primary,
    alignItems: 'baseline',
    display: 'flex',
  },
}));

function AppFooter() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
    <div className={classes.root}>
        <Toolbar>
            <Box mr={1} display="inline">
                <Typography variant="h6" color="inherit">
                    <CopyrightIcon fontSize="small"/>
                    Arup 2021
                </Typography>
            </Box>
            <Box mr={1} display="inline">
                <Typography variant="caption" color="inherit">
                    Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </Typography>
            </Box>
        </Toolbar>
    </div>
);
}

export default AppFooter;