import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const BrandingWrapper = styled(Box)(({ theme }) => ({
    // height: '70vh',
    backgroundColor: 'rgba(122,178,89,0.15)',
    padding: theme.spacing(4),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    gap: 40,

}))

const Branding = () => {
    return (
        <BrandingWrapper sx={{ flexDirection: ['column-reverse', 'row'], clipPath: ['inherit', 'polygon(0% 0%, 100% 0%, 100% 82%, 0% 100%)'], height: ['100%', '50vh', '55vh', '65vh'] }}>
            <Stack spacing={5}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    lineHeight: '1.2',
                }}>
                    Let’s <span style={{ color: '#6b8f55' }}>Grow</span> <br />  <span style={{ color: '#6b8f55' }}>Your</span> Brand<br /> To The <span style={{ color: '#6b8f55' }}>Next Level</span>
                </Typography>

                <Typography sx={{
                    textAlign: 'justify',

                }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores modi accusantium voluptas? Dolore nisi quis dolorum sit fuga nesciunt, aliquam cum neque quaerat tempore error suscipit, eum at sint excepturi.
                </Typography>
                <Button sx={{ width: 150 }}>Hire Us</Button>
            </Stack>
            <Box sx={{
                // display: ['none', 'block']
            }}>
                <img src='https://i.ibb.co/sPXVMbC/Frame.png' alt="" style={{ width: '100%', height: 'auto' }} />
            </Box>
        </BrandingWrapper>
    );
};

export default Branding;