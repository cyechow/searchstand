import React from 'react'
import {
    Container,
    Typography,
} from '@material-ui/core'

//import SearchComponent from './../components/Search'
import SearchBar from './../components/Search'

const Home = () => (
    <Container maxwidth="lg">
        <Typography variant="h4">Welcome to SearchStand!</Typography>
        <SearchBar />
    </Container>
);

export default Home