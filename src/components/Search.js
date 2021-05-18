import React from 'react'
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/styles';
import { /*Button,*/ FormControl, Input, InputAdornment, InputLabel } from  '@material-ui/core'
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import { makeStyles } from '@material-ui/core/styles';

//import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

/**
class SearchComponent extends React.Component{
    search_string = ""

    handleSearchEvent = (event) => {
        this.search_string = event.target.value
    };



    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.margin} fullWidth="True">
                    <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                    <Input
                        id="search-input-field"
                        label="Search standards documentation"
                        startAdornment={
                            <InputAdornment position="start">
                                <FindInPageOutlinedIcon />
                            </InputAdornment>
                        }
                        fullWidth="true"
                        onChange={this.handleSearchEvent}
                    />
                </FormControl>
                <Dialog
                    //open={open}
                    aria-labelledby="search-alert-title"
                    aria-aria-describedby="search-alert-description"
                >
                    <DialogTitle>Searching standards database for...</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            this.search_string
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Okay
                        </Button>
                    </DialogActions>

                </Dialog>
            </div>
        );
    };
}

SearchComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}
*/

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={classes.margin} fullWidth="True">
                <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                <Input
                    id="search-input-field"
                    label="Search standards documentation"
                    startAdornment={
                        <InputAdornment position="start">
                            <FindInPageOutlinedIcon />
                        </InputAdornment>
                    }
                    fullWidth="true"
                />
            </FormControl>
        </div>
    );
}

//export default withStyles(useStyles)(SearchComponent);
export default SearchBar;