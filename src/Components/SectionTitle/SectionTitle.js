import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const SectionTitle = ({ title, colored }) => {
    return (
        <Box>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                {title} {' '}
                {
                    colored && (
                        <span style={{ color: '#7AB259' }}>{colored}</span>
                    )
                }
            </Typography>
        </Box>
    );
};

export default SectionTitle;