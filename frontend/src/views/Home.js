import React, { useState } from 'react'
import { Box, ThemeProvider, createTheme, Grid } from '@mui/material';
import DocumentCards from '../components/home';
import SearchBar from '../components/search';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from '../components/googlelogin';
import logo from '../assets/logo.png';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (
        <div>
            <Grid container spacing={0} height={1}>
                <Grid item xs={3} justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 50 }}>
                        <img src={logo} style={{ height: 50 }} />
                    </Box>
                </Grid>
                <Grid item xs={6} justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 50 }}>
                        <SearchBar onSearch={handleSearch} />
                    </Box>
                </Grid>
                <Grid item xs={3} justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 50 }}>
                        <GoogleLoginButton />
                    </Box>
                </Grid>
            </Grid>
            <DocumentCards searchTerm={searchTerm} />
        </div>
    )
}

export default Home