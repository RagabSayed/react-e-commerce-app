import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import image from '../../images/carsouel-img01.jpg';
import AppleIcon from '@mui/icons-material/Apple';

function Carsouel() {
    
    return (
        <Carousel sx={{ml: 'auto', mr: 'auto'}} className="carousel-css">
            <Paper key={1}>
                <Grid container >
                    <Grid size={{xs: 12, md: 6}} className="carsouel-text">
                        <Box>
                            <AppleIcon sx={{height: '10vh', width: '10vh', mt: '20px'}}/>
                            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', display: 'inline-block', textAlign: 'center'}}>iPhone 14 Series</Typography>
                        </Box>
                        <Typography variant="h2" component="h2" sx={{fontWeight: 'bold', mt: '20px'}}>Up to 10% off Voucher</Typography>
                        <Button className="CheckButton" endIcon={<ArrowForwardIcon />} sx={{color: '#ffffff', fontSize: '20px', mt: '30px'}}>
                            <Typography variant="body1" component="span" sx={{textDecoration: 'underline', textTransform: 'capitalize'}}>Shop Now</Typography>
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <img src={image} alt="" style={{width: '100%', height: '100%'}}/>
                    </Grid>
                </Grid>        
            </Paper>
            <Paper key={2}>
                <Grid container >
                    <Grid size={{xs: 12, md: 6}} className="carsouel-text">
                        <Box>
                            <AppleIcon sx={{height: '10vh', width: '10vh', mt: '20px'}}/>
                            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', display: 'inline-block', textAlign: 'center'}}>iPhone 14 Series</Typography>
                        </Box>
                        <Typography variant="h2" component="h2" sx={{fontWeight: 'bold', mt: '20px'}}>Up to 10% off Voucher</Typography>
                        <Button className="CheckButton" endIcon={<ArrowForwardIcon />} sx={{color: '#ffffff', fontSize: '20px', mt: '30px'}}>
                            <Typography variant="body1" component="span" sx={{textDecoration: 'underline', textTransform: 'capitalize'}}>Shop Now</Typography>
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <img src={image} alt="" style={{width: '100%', height: '100%'}}/>
                    </Grid>
                </Grid>        
            </Paper>
            <Paper key={3}>
                <Grid container >
                    <Grid size={{xs: 12, md: 6}} className="carsouel-text">
                        <Box>
                            <AppleIcon sx={{height: '10vh', width: '10vh', mt: '20px'}}/>
                            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', display: 'inline-block', textAlign: 'center'}}>iPhone 14 Series</Typography>
                        </Box>
                        <Typography variant="h2" component="h2" sx={{fontWeight: 'bold', mt: '20px'}}>Up to 10% off Voucher</Typography>
                        <Button className="CheckButton" endIcon={<ArrowForwardIcon />} sx={{color: '#ffffff', fontSize: '20px', mt: '30px'}}>
                            <Typography variant="body1" component="span" sx={{textDecoration: 'underline', textTransform: 'capitalize'}}>Shop Now</Typography>
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <img src={image} alt="" style={{width: '100%', height: '100%'}}/>
                    </Grid>
                </Grid> 
            </Paper>
            <Paper key={4}>
                <Grid container >
                    <Grid size={{xs: 12, md: 6}} className="carsouel-text">
                        <Box>
                            <AppleIcon sx={{height: '10vh', width: '10vh', mt: '20px'}}/>
                            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', display: 'inline-block', textAlign: 'center'}}>iPhone 14 Series</Typography>
                        </Box>
                        <Typography variant="h2" component="h2" sx={{fontWeight: 'bold', mt: '20px'}}>Up to 10% off Voucher</Typography>
                        <Button className="CheckButton" endIcon={<ArrowForwardIcon />} sx={{color: '#ffffff', fontSize: '20px', mt: '30px'}}>
                            <Typography variant="body1" component="span" sx={{textDecoration: 'underline', textTransform: 'capitalize'}}>Shop Now</Typography>
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <img src={image} alt="" style={{width: '100%', height: '100%'}}/>
                    </Grid>
                </Grid>                
            </Paper>
            <Paper key={5}>
                <Grid container >
                    <Grid size={{xs: 12, md: 6}} className="carsouel-text">
                        <Box>
                            <AppleIcon sx={{height: '10vh', width: '10vh', mt: '20px'}}/>
                            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', display: 'inline-block', textAlign: 'center'}}>iPhone 14 Series</Typography>
                        </Box>
                        <Typography variant="h2" component="h2" sx={{fontWeight: 'bold', mt: '20px'}}>Up to 10% off Voucher</Typography>
                        <Button className="CheckButton" endIcon={<ArrowForwardIcon />} sx={{color: '#ffffff', fontSize: '20px', mt: '30px'}}>
                            <Typography variant="body1" component="span" sx={{textDecoration: 'underline', textTransform: 'capitalize'}}>Shop Now</Typography>
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <img src={image} alt="" style={{width: '100%', height: '100%'}}/>
                    </Grid>
                </Grid>                
            </Paper>
        </Carousel>
    )
}

export default Carsouel
