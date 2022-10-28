import React from 'react';
import { Typography } from '@mui/material';

const About = () => {
    return (
        <Typography style={{ marginTop: '5rem' }} variant="h4" align='center'>
            Creating interactive user interfaces on React is nice and simple.
            It is enough for you to describe,
            how parts of the application interface look in different states.
            React will update them in a timely manner when the data changes.    
        </Typography>
    );
};

export default About;