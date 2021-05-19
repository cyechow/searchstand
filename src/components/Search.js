import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Box, Button, TextField, Typography } from  '@material-ui/core'
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { makeStyles } from '@material-ui/core/styles';

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
            show_results: "false",
            search_string: "test",
        }
        this.handleSearchEvent = this.handleSearchEvent.bind(this)
    }

    handleSearchEvent = (event) => {
        event.preventDefault();
        this.setState( { open: true, show_results: "true" });
    };

    // getSearchResults = () => {
    //     //this.state.search_string
    //     return ["Section1", "Section2", "Section3"]
    // }

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
                            this.setState({ search_string: event.target.value })
                        }}
                        />
                </form>
                {
                    this.state.open &&
                    <Box mt={1} component="div">
                        <Typography m={1} variant="h6">Results for "{this.state.search_string}"</Typography>
                        <Box m={1} p={1} border={1}>
                            <Typography mt={2} variant="body1"><b>Section #.#.##</b></Typography>
                            <Typography mt={1} variant="body2">Description 1</Typography>
                        </Box>
                        <Box m={1} p={1} border={1}>
                            <Typography mt={2} variant="body1"><b>Section #.#.##</b></Typography>
                            <Typography mt={1} variant="body2">Description 2</Typography>
                        </Box>
                        <Box mt={2} mr={1}>
                            <Button variant="contained" color="primary"
                            startIcon={<ClearAllIcon />}
                            onClick={(event) => {
                                this.setState( { open: false, show_results: "false" });
                            }}
                            color="default"
                            autofocus>
                                Clear
                            </Button>
                        </Box>
                    </Box>
                }
            </div>
        );
    };
}

SearchComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(SearchComponent);