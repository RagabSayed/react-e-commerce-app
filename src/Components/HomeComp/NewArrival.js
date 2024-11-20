import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import newArivalImg01 from '../images/new-arrival01.png';
import newArivalImg02 from '../images/new-arrival02.png';
import newArivalImg03 from '../images/new-arrival03.png';
import newArivalImg04 from '../images/new-arrival04.png';

export default function NewArrival() {
    return (
        <Box sx={{m: {xs: '100px 0', md: '100px 10%'}}}>
            <Box sx={{md: {'&:hover': {
                border: '2px solid blue',
              },}}}>
                <h1 style={{color: 'red', fontSize: '25px', fontWeight: 'bold', padding: '10px'}}>
                    <span className='today-title'></span>
                    <span>Featured</span>
                </h1>
                <Typography variant='h2' component='h2' sx={{mb: '70px'}}>New Arrival</Typography>
                <Grid container spacing={3}>
                    <Grid size={{md: 6}} sx={{position: 'relative'}}>
                        <img src={newArivalImg01} alt={newArivalImg01} width='100%' height='100%' />
                        <Box sx={{color: 'white', position: 'absolute', left: '5%', bottom: '5%', width: '200px'}}>
                            <Typography variant='h4' component='h4'>PlayStation 5</Typography>
                            <Typography variant='subtitle1' component='p' sx={{mt: '10px', mb: '15px'}}>Black and White version of the PS5 coming out on sale.</Typography>
                            <Button 
                                size="medium" sx={{color: 'white', fontWeight: 'bold', borderBottom: '1px solid #ffffff80', textTransform: 'capitalize', borderRadius: '0'}}
                                href='/home/products' >Shop Now</Button>
                        </Box>
                    </Grid>
                    <Grid size={{md: 6}} spacing={3} container>
                        <Grid size={12} sx={{position: 'relative', height: '400px'}} >
                            <img src={newArivalImg02} alt={newArivalImg02} width='100%' height='100%' style={{transform: 'scaleX(-1)'}} />
                            <Box sx={{color: 'white', position: 'absolute', left: '5%', bottom: '5%', width: '320px'}}>
                                <Typography variant='h4' component='h4'>Women’s Collections</Typography>
                                <Typography variant='subtitle1' component='p' sx={{mt: '10px', mb: '15px'}}>Featured woman collections that give you another vibe.</Typography>
                                <Button 
                                    size="medium" sx={{color: 'white', fontWeight: 'bold', borderBottom: '1px solid #ffffff80', textTransform: 'capitalize', borderRadius: '0'}}
                                    href='/home/products' >Shop Now</Button>
                            </Box>
                        </Grid>
                        <Grid size={6} sx={{position: 'relative', height: '400px'}} >
                            <img src={newArivalImg03} alt={newArivalImg03} width='100%' height='100%' />
                            <Box sx={{color: 'white', position: 'absolute', left: '5%', bottom: '5%'}}>
                                <Typography variant='h4' component='h4'>Speakers</Typography>
                                <Typography variant='subtitle1' component='p' sx={{mt: '10px', mb: '15px'}}>Amazon wireless speakers</Typography>
                                <Button 
                                    size="medium" sx={{color: 'white', fontWeight: 'bold', borderBottom: '1px solid #ffffff80', textTransform: 'capitalize', borderRadius: '0'}}
                                    href='/home/products' >Shop Now</Button>
                            </Box>
                        </Grid>
                        <Grid size={6} sx={{position: 'relative', height: '400px'}} >
                            <img src={newArivalImg04} alt={newArivalImg04} width='100%' height='100%' />
                            <Box sx={{color: 'white', position: 'absolute', left: '5%', bottom: '5%'}}>
                                <Typography variant='h4' component='h4'>Perfume</Typography>
                                <Typography variant='subtitle1' component='p' sx={{mt: '10px', mb: '15px'}}>GUCCI INTENSE OUD EDP</Typography>
                                <Button 
                                    size="medium" sx={{color: 'white', fontWeight: 'bold', borderBottom: '1px solid #ffffff80', textTransform: 'capitalize', borderRadius: '0'}}
                                    href='/home/products' >Shop Now</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
