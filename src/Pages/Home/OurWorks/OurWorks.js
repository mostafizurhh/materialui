import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from '../../../Components/CreativeCard/CreativeCard';
import { cardData } from './cardData';

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
                flexDirection: ['column', 'column', 'row'],
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4rem'
            }}>
                <SectionTitle title='Here are some of' colored='our works'
                />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 3
                }}>
                    <Tabs value={value} onChange={handleChange} centered
                        sx={{
                            '& .Mui-selected': {
                                fontWeight: 'bold',
                            },

                            '& .MuiButtonBase-root': {
                                textTransform: 'capitalize',
                                color: 'primary.green'
                            },
                        }}>
                        <Tab label="All" />
                        <Tab label="Web Design" />
                        <Tab label="Mobile App" />
                    </Tabs>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <IconButton sx={{
                            //border: `1px solid #959EAD`,
                            border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                            mr: 2,
                            color: 'primary.main'
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}>
                            <ArrowBackIcon></ArrowBackIcon>
                        </IconButton>
                        <IconButton sx={{
                            border: theme => `1px solid ${value === 2 ? '#959EAD' : theme.palette.primary.main}`,
                            color: 'primary.main'
                        }}
                            onClick={() => setValue(value + 1)}
                            disabled={value === 2}>
                            <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }}></ArrowBackIcon>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            {/* card section */}
            <Grid container spacing={4}>
                {
                    cardData[value].map((image, index) => (
                        <Grid item key={index} xs={12} sm={6} lg={4} >
                            <CreativeCard image={image}></CreativeCard>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default OurWorks;