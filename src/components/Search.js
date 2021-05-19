import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Button, TextField } from  '@material-ui/core'
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  },
}));

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
            search_string: "test",
        }
        this.handleSearchEvent = this.handleSearchEvent.bind(this)
    }

    handleSearchEvent = (event) => {
        event.preventDefault();
        this.setState( { open: true });
    };

    render() {
        const classes = useStyles;

        return (
            <div className={classes.root} style={{marginTop: "2%"}}>
                <form className={classes.form} onSubmit={this.handleSearchEvent}>
                    <TextField
                        id="search-input-field"
                        label="Search standards documentation"
                        variant='outlined'
                        fullWidth
                        InputProps={{
                            startAdornment: <FindInPageOutlinedIcon />
                        }}
                        onChange={ event => {
                            this.setState({ open: this.state.open, search_string: event.target.value })
                        }}
                        />
                </form>
                <Dialog
                    open={this.state.open}
                    aria-labelledby="search-alert-title"
                    aria-describedby="search-alert-description"
                >
                    <DialogTitle>Searching standards database for...</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.search_string}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(event) => {
                            this.setState( { open: false });
                        }}
                        color="primary"
                        autofocus>
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

export default withStyles(useStyles)(SearchComponent);