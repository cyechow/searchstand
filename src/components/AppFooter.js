import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar,Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.primary,
    alignItems: 'center',
    align: 'center',
    flexGrow: 1,
  },
}));

function AppFooter() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
    <div className={classes.root}>
        <Toolbar>
            <Typography variant="h6" color="inherit">
                <CopyrightIcon fontSize="small"/>
                Arup 2021
            </Typography>
        </Toolbar>
    </div>
);
}

export default AppFooter;