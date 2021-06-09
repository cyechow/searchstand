import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from  '@material-ui/core'
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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
            show_height_results: false,
            show_img_results: false,
            show_results: "false",
            search_string: "test",
        }
        this.handleSearchEvent = this.handleSearchEvent.bind(this)
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
        this.clearResults = this.clearResults.bind(this)
    }

    handleSearchEvent = (event) => {
        event.preventDefault();
        
        this.setState( { open: true, show_height_results: this.state.search_string.toLowerCase() == "height", show_img_results: this.state.search_string.toLowerCase() == "topographic amplification", show_results: "true" });
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
            <div className={classes.root} height='100%' style={{marginTop: "2%"}}>
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
                    (this.state.open && this.state.show_height_results) &&
                    <Box mt={1} component="div">
                        <Typography m={1} variant="h6">Results for "{this.state.search_string}"</Typography>
                        <Box m={1} p={1} border={1}>
                            <Grid
                                justify="space-between"
                                container 
                                spacing={1}
                            >
                                <Grid item>
                                    <Typography mt={2} variant="h5"><b>IBC2018P5</b></Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Click if answer was useful
                                    </Button>
                                </Grid>
                            </Grid>
                            <Typography mt={2} variant="body1"><b>504.1 General</b></Typography>
                            <Typography mt={1} variant="body2">
                                The <font color="red">height</font>, in feet, and the number of <i>stories</i> of a building shall be determined based on the type of construction, occupancy classification and whether there is an <i>automatic sprinkler system</i> installed throughout the building.
                            </Typography>
                            <Typography mt={1} variant="body2"><a href="https://codes.iccsafe.org/content/IBC2018P5/chapter-5-general-building-heights-and-areas#IBC2018P5_Ch05_Sec504.1" target="_blank" rel="noopener noreferrer">Link</a></Typography>
                        </Box>
                        <Box m={1} p={1} border={1}>
                            <Grid
                                justify="space-between"
                                container 
                                spacing={1}
                            >
                                <Grid item>
                                    <Typography mt={2} variant="h5"><b>IBC2018P5</b></Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Click if answer was useful
                                    </Button>
                                </Grid>
                            </Grid>
                            <Typography mt={2} variant="body1"><b>504.3 <font color="red">Height</font> in feet</b></Typography>
                            <Typography mt={1} variant="body2">
                                The maximum <font color="red">height</font>, in feet, of a building shall not exceed the limits specified in Table 504.3.
                                <blockquote>
                                    <b>Exception:</b> Towers, spires, steeples and other roof structures shall be constructed of materials consistent with the required type of construction of the building except where other construction is permitted by Section 1510.2.4. Such structures shall not be used for habitation or storage. The structures shall be unlimited in <font color="red">height</font> where of noncombustible materials and shall not extend more than 20 feet (6096 mm) above the allowable building <font color="red">height</font> where of combustible materials (see Chapter 15 for additional requirements).
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
                {
                    (this.state.open && this.state.show_img_results) &&
                    <Box mt={1} component="div" overflow="visible">
                        <Typography m={1} variant="h6">Results for "{this.state.search_string}"</Typography>
                        <Box m={1} p={1} border={1}>
                            <Grid
                                justify="space-between"
                                container 
                                spacing={1}
                            >
                                <Grid item>
                                    <Typography mt={2} variant="h5"><b>NBCC 2010</b></Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Click if answer was useful
                                    </Button>
                                </Grid>
                            </Grid>
                            <Typography mt={2} variant="body1"><b>Commentary J</b></Typography>
                            <Typography mt={2} variant="body2">Item 99 Paragraph 2; Page J-32</Typography>
                            <Card className={classes.root}>
                                <CardActionArea href="https://nrc-publications.canada.ca/eng/view/ft/?id=381cca6e-62ab-4d03-9f02-1ea1db63fd53#page=148" target="_blank" rel="noopener noreferrer">
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        image={process.env.PUBLIC_URL + "/results/NBCC 2010 Commentary J-32.png"}
                                        title="NBCC 2010 Commentary J; Item 99 Paragraph 2"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Relevant Topics: site classification, geotechnical, building plan
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Box m={1} p={1} border={1}>
                            <Grid
                                justify="space-between"
                                container 
                                spacing={1}
                            >
                                <Grid item>
                                    <Typography mt={2} variant="h5"><b>NBCC 2010</b></Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Click if answer was useful
                                    </Button>
                                </Grid>
                            </Grid>
                            <Typography mt={2} variant="body1"><b>Division B Appendix C</b></Typography>
                            <Typography mt={2} variant="body2">Page C-1</Typography>
                            <Typography mt={1} variant="body2"><a href="https://nrc-publications.canada.ca/eng/view/ft/?id=cbd245df-bc91-4033-a538-fb20fcf536a1&dp=1&dsl=en#page=1131" target="_blank" rel="noopener noreferrer">Link</a></Typography>
                            <Card className={classes.root}>
                                <CardActionArea href="https://nrc-publications.canada.ca/eng/view/ft/?id=cbd245df-bc91-4033-a538-fb20fcf536a1&dp=1&dsl=en#page=1131" target="_blank" rel="noopener noreferrer">
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        image={process.env.PUBLIC_URL + "/results/NBCC 2010 Division B Appendix C-1.png"}
                                        title="NBCC 2010 Commentary J; Item 99 Paragraph 2"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Relevant Topics: seismic, topography, climate
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
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
                {
                    (this.state.open && this.state.show_height_results == false && this.state.show_img_results == false) &&
                    <Box mt={1} component="div" overflow="visible">
                        <Typography m={1} variant="h6">No results found for "{this.state.search_string}"</Typography>
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