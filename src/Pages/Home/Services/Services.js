import React from 'react';
import { Box, Grid } from '@mui/material';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Service from '../Service/Service';

const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];

const Services = () => {
    return (
        <Box>
            <SectionTitle title='Provide Awesome' colored='Services'></SectionTitle>
            <Grid container spacing={4} marginTop='4rem'>
                {
                    serviceImages.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} >
                            <Service
                                key={index}
                                image={image}
                            ></Service>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Services;