import { Box } from '@mui/material';
import React from 'react';
import CreativeAccordian from '../../../Components/CreativeAccordian/CreativeAccordian';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Faq = () => {
    return (
        <Box>
            <SectionTitle title='Frequently Asked' colored='Questions'>
            </SectionTitle>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mt: '4rem'
            }}>
                <CreativeAccordian
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                />
                <CreativeAccordian
                    title='Who is elegible for this course?'
                    description='Anyone who has a basic knowledge of computer and know how to follow instruction is eligable for the course.'
                />
                <CreativeAccordian
                    title='How long will you support the students?'
                    description='During the course you will get support sessions for 3 times everyday and 1 Conceptual session after every 15 days.'
                />
            </Box>
        </Box>
    );
};

export default Faq;