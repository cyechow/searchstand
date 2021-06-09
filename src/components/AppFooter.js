import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Toolbar, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.primary,
    background : '#FFFFFF',
    alignItems: 'baseline',
  },
}));

function AppFooter() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
    <div className={classes.root}>
        <Toolbar>
            <Grid
                justify="space-between"
                container 
                spacing={1}
            >
                <Grid item>
                    <Typography variant="caption">
                        <a href="https://github.com/cyechow/searchstand-frontend">
                            <GitHubIcon />
                        </a>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption" color="inherit">
                        Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" color="inherit">
                        <CopyrightIcon fontSize="small"/>
                        Arup 2021
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </div>
);
}

export default AppFooter;