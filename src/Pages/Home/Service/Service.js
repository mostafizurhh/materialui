import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Service = ({ image }) => {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 'none', mx: 'auto', '& :hover': { boxShadow: 'none' } }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                    sx={{
                        width: 'auto',
                        mx: 'auto',
                        mt: 2
                    }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        Web & Mobile Design
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in illo exercitationem ratione provident, amet ipsum quasi, cupiditate corporis sunt assumenda natus dolorum? Amet, expedita harum distinctio iste delectus ipsum?
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Service;