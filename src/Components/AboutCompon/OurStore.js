import React from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import aboutImg from '../images/about-img.png';

export default function OurStore() {
    
    return (
        <div>
            <Box sx={{mt: '50px', mb: '50px', ml: {xs: '3%', md: '10%'}}}>
                <Grid container>
                    <Grid size={{xs: 12, md: 6}} order={{ xs: 2, md: 1 }} sx={{mt: {xs: '0', md:'80px'}}}>
                        <Typography variant="h2" component="h2" sx={{fontWeight: '600', fontSize: '54px', m: '50px 0'}}>Our Story</Typography>
                        <Typography variant="h6" component="p" sx={{fontWeight: '400', fontSize: '16px', mb: '20px', mr: '50px'}}>
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. 
                            Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands 
                            and serves 3 millioons customers across the region. 
                        </Typography>
                        <Typography variant="h6" component="p" sx={{fontWeight: '400', fontSize: '16px', mr: '50px'}}>
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in 
                            categories ranging  from consumer.
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}} order={{ xs: 1, md: 2 }}>
                        <img src={aboutImg} alt="about-img" width="100%" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
