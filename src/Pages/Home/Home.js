import { CssBaseline } from '@mui/material';
import React from 'react';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import Faq from './FAQ/Faq';
import OurWorks from './OurWorks/OurWorks';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <CssBaseline />
            <Branding></Branding>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
            <Faq></Faq>
        </div>
    );
};

export default Home;