import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CustomExpandIcon = () => {
    return (
        <div>
            <div className='expandMoreIcon'>
                <AddIcon></AddIcon>
            </div>
            <div className='removeExpandIcon'>
                <RemoveIcon></RemoveIcon>
            </div>
        </div>
    )
}

const CreativeAccordian = ({ title, description }) => {
    return (
        <Accordion
            sx={{
                boxShadow: 'none',
                border: '1px solid #E5EAF4',
                p: 2,
                '& .Mui-expanded': {
                    '& .expandMoreIcon': {
                        display: 'none'
                    },
                    '& .removeExpandIcon': {
                        display: 'block',
                        '& svg': {
                            color: '#6b8f55',
                            fontWeight: 'bold'
                        }
                    }
                },
            }}>
            <AccordionSummary
                sx={{
                    '& .removeExpandIcon': {
                        display: 'none',
                    },
                    '& .expandIcon': {
                        display: 'block',
                        '& svg': {
                            color: '#6b8f55',
                            fontWeight: 'bold'
                        }
                    },
                    '& p': {
                        color: 'primary.main',
                        fontWeight: 'bold'
                    },
                    '& .Mui-expanded': {
                        '& p': {
                            color: '#6b8f55',
                            fontWeight: 'bold',
                        }
                    },

                }}
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{ textTransform: 'capitalize' }}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{
                    color: '#5A7184'
                }}>
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CreativeAccordian;