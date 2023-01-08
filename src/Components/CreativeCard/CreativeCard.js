import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreativeCard = ({ image }) => {
    const theme = useTheme()

    return (
        <Card sx={{ p: 2, borderRadius: '10px', minWidth: 345, '&:hover': { backgroundColor: '#99bf82', } }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="230px"
                image={image}
                style={{
                    borderRadius: '10px',
                }}
            />
            <CardContent sx={{
                p: 0,
                pt: 3,
                '&:last-child': { pb: 0 },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography gutterBottom component="div">
                        Business
                    </Typography>
                    <Typography variant="h6" fontWeight='bold'>
                        Business Research
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    height: '25px',
                    width: '25px',
                    '& svg': {
                        color: 'primary.main'
                    }
                }}>
                    <AddIcon></AddIcon>
                </IconButton>
            </CardContent>

        </Card>
    );
};

export default CreativeCard;