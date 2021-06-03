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
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
        this.clearResults = this.clearResults.bind(this)
    }

    handleSearchEvent = (event) => {
        event.preventDefault();
        this.setState( { open: true, show_results: "true" });
    };

    // getSearchResults = () => {
    //     //this.state.search_string
    //     return ["Section1", "Section2", "Section3"]
    // }

    handleSearchTextChange = (event) => {
        this.setState({ search_string: event.target.value })
        if (this.state.open)
        {
            this.clearResults(event)
        }
    };

    clearResults = (event) => {
        this.setState( { open: false, show_results: "false" });
    }

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
                        onChange={this.handleSearchTextChange}
                        />
                </form>
                {
                    this.state.open &&
                    <Box mt={1} component="div">
                        <Typography m={1} variant="h6">Results for "{this.state.search_string}"</Typography>
                        <Box m={1} p={1} border={1}>
                            <Typography mt={2} variant="h5"><b>IBC2018P5</b></Typography>
                            <Typography mt={2} variant="body1"><b>504.1 General</b></Typography>
                            <Typography mt={1} variant="body2">
                                The height, in feet, and the number of <i>stories</i> of a building shall be determined based on the type of construction, occupancy classification and whether there is an <i>automatic sprinkler system</i> installed throughout the building.
                            </Typography>
                            <Typography mt={1} variant="body2"><a href="https://codes.iccsafe.org/content/IBC2018P5/chapter-5-general-building-heights-and-areas#IBC2018P5_Ch05_Sec504.1" target="_blank" rel="noopener noreferrer">Link</a></Typography>
                        </Box>
                        <Box m={1} p={1} border={1}>
                            <Typography mt={2} variant="h5"><b>IBC2018P5</b></Typography>
                            <Typography mt={2} variant="body1"><b>504.3 Height in feet</b></Typography>
                            <Typography mt={1} variant="body2">
                                The maximum height, in feet, of a building shall not exceed the limits specified in Table 504.3.
                                <blockquote>
                                    <b>Exception:</b> Towers, spires, steeples and other roof structures shall be constructed of materials consistent with the required type of construction of the building except where other construction is permitted by Section 1510.2.4. Such structures shall not be used for habitation or storage. The structures shall be unlimited in height where of noncombustible materials and shall not extend more than 20 feet (6096 mm) above the allowable building height where of combustible materials (see Chapter 15 for additional requirements).
                                </blockquote>
                            </Typography>
                            <Typography mt={1} variant="body2"><a href="https://codes.iccsafe.org/content/IBC2018P5/chapter-5-general-building-heights-and-areas#IBC2018P5_Ch05_Sec504.3" target="_blank" rel="noopener noreferrer">Link</a></Typography>
                        </Box>
                        <Box mt={2} mr={1}>
                            <Button variant="contained" color="primary"
                            startIcon={<ClearAllIcon />}
                            onClick={this.clearResults}
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