import React from 'react';
import { styled, Box } from '@mui/material';

const brands = [
    'https://i.ibb.co/27wHw8Y/image-5.png',
    'https://i.ibb.co/vVSVd76/image-6.png',
    'https://i.ibb.co/Dwj3KYc/image-7.png',
    'https://i.ibb.co/99gcp3b/image-8.png',
    'https://i.ibb.co/Rhk2VSh/image-9.png',
];

const BrandWrapper = styled(Box)(({ theme }) => ({
    marginBottom: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {
        height: '50px',
        width: '100px'
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        '& > img': {
            marginBottom: '1rem'
        }
    },

}))
const Brands = () => {
    return (
        <BrandWrapper>
            {
                brands.map((brand, i) => (
                    <img key={i} src={brand} alt="" />
                ))
            }
        </BrandWrapper>
    );
};

export default Brands;