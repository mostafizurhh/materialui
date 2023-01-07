import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122,178,89,0.15)',
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 82%, 0% 100% )',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 32
}))

const Branding = () => {
    return (
        <BrandingWrapper>
            <Stack spacing={5}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    lineHeight: '1.2'
                }}>
                    Let’s Grow <br /> Your Brand <br /> To The Next Level
                </Typography>

                <Typography sx={{
                    textAlign: 'justify'
                }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores modi accusantium voluptas? Dolore nisi quis dolorum sit fuga nesciunt, aliquam cum neque quaerat tempore error suscipit, eum at sint excepturi.</Typography>
                <Button sx={{ width: '30%' }}>Hire Us</Button>
            </Stack>
            <Box>
                <img src='https://i.ibb.co/sPXVMbC/Frame.png' alt="" style={{ width: '100%' }} />
            </Box>
        </BrandingWrapper>
    );
};

export default Branding;