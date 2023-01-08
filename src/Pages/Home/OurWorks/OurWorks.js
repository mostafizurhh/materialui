import React from 'react';
import { Box, IconButton } from '@mui/material';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            my: '4rem',
        }}>
            {/* heading section */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <SectionTitle title='Here are some of' colored='our works' />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 3
                }}>
                    <Tabs value={value} onChange={handleChange} centered
                        sx={{
                            '& .Mui-selected': {
                                fontWeight: 'bold'
                            },

                            '& .MuiButtonBase-root': {
                                textTransform: 'capitalize',
                                color: 'primary.green'
                            },
                        }}>
                        <Tab label="All" />
                        <Tab label="Interior" />
                        <Tab label="Exterior" />
                        <Tab label="Building" />
                    </Tabs>
                    <Box>
                        <IconButton sx={{
                            border: `1px solid #959EAD`,
                            mr: 2
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}>
                            <ArrowBackIcon></ArrowBackIcon>
                        </IconButton>
                        <IconButton sx={{
                            border: `1px solid #959EAD`
                        }}
                            onClick={() => setValue(value + 1)}
                            disabled={value === 3}>
                            <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }}></ArrowBackIcon>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OurWorks;