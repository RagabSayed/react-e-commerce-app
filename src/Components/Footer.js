import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import googlePlay from './images/googlePlay.png';
import appStore from './images/appStore.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CopyrightIcon from '@mui/icons-material/Copyright';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
export default function Footer() {
    return (
        <div className='footer-sec'>
            {/* <CssBaseline /> */}
            <ThemeProvider theme={darkTheme}>
            <Box sx={{width:{xs: '90%', md: '80%'}, m: 'auto'}}>
                <Grid container spacing={{xs:2, md: 5}}>
                    <Grid size={{xs: 12, md: 3}} >
                        <Typography variant='h6' component='p'><Link href='/'  underline='none' color='inherit'>Exclusive</Link></Typography>
                        <Typography variant='subtitle1' component='p'><Link href='*'  underline='none' color='inherit'>Subscribe</Link></Typography>
                        <Typography variant='body2' component='p'sx={{mt: '5px', mb: '8px'}}>Get 10% off your first order</Typography>
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel sx={{fontSize: '15px'}}>Enter your email</InputLabel>
                        <OutlinedInput
                            id="outlined-basic"
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                edge="end"
                                >
                                    <SendTwoToneIcon className='send-icon'/>
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Enter your email"
                        />
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 4, md: 2}}>
                        <Typography variant='subtitle1' component='p'><Link href='*'  underline='none' color='inherit'>Support</Link></Typography>
                        <Typography variant='body2' component='p'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Typography>
                        <Typography variant='body2' component='p'>exclusive@gmail.com</Typography>
                        <Typography variant='body2' component='p'>+88015-88888-9999</Typography>
                    </Grid>
                    <Grid size={{xs: 4, md: 2}}>
                        <Typography variant='subtitle1' component='p'>Account</Typography>
                        <Typography variant='body2' component='p'><Link href='/home/myaccount'  underline='none' color='inherit'>My Account</Link></Typography>
                        <Typography variant='body2' component='p'><Link href='/sign up'  underline='none' color='inherit'>Login / Register</Link></Typography>
                        <Typography variant='body2' component='p'><Link href='/home/cart'  underline='none' color='inherit'>Cart</Link></Typography>
                        <Typography variant='body2' component='p'><Link href='/home/wishlist'  underline='none' color='inherit'>Wishlist</Link></Typography>
                        <Typography variant='body2' component='p'><Link href='/home'  underline='none' color='inherit'>Shop</Link></Typography>
                    </Grid>
                    <Grid size={{xs: 4, md: 2}} >
                        <Typography variant='subtitle1' component='p'>Quick Link</Typography>
                        <Typography variant='body2' component='p'><Link href='*'  underline='none' color='inherit'>Privacy Policy</Link></Typography>
                        <Typography variant='body2' component='p'><Link href='*'  underline='none' color='inherit'>Terms Of Use</Link></Typography>
                        <Typography variant='body2' component='p'><Link href='*'  underline='none' color='inherit'>FAQ</Link></Typography>
                        <Typography variant='body2' component='p'><Link href='/contact'  underline='none' color='inherit'>Contact</Link></Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <Typography variant='subtitle1' component='p'>Download App</Typography>
                        <Typography variant='body2' component='p'>Save $3 with App New User Only</Typography>
                        <Grid container spacing={2}>
                            <Grid size={5} m='5px'>
                                <QrCode2Icon sx={{width: '100%', height: '100%'}}/>
                            </Grid>
                            <Grid size={6}>
                                <ImageListItem sx={{m: '5px', padding: '5px', width:'100%', border: '1px solid white', borderRadius: '5px'}}>
                                    <img
                                        src={googlePlay}
                                        alt='google play'
                                        // sx={{width:'100px', height:'100px'}}
                                    />
                                </ImageListItem>
                                <ImageListItem sx={{m: '5px', padding: '5px', width:'100%', border: '1px solid white', borderRadius: '5px'}}>
                                    <img
                                        src={appStore}
                                        alt='app store'
                                    />
                                </ImageListItem>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography sx={{textAlign: 'center', mt: '30px', padding: '10px', borderTop: '1px solid #ffffff33'}}>
                    <Typography variant='body2' component='span' sx={{paddingTop: '5px'}}>{<CopyrightIcon />}</Typography>
                    <Typography variant='body2' component='span'> Copyright Rimel 2022. All right reserved</Typography>
                </Typography>
            </Box>
            </ThemeProvider>
            
        </div>
    )
}
