import React, {useState} from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

export default function AboutStatistics() {
    const [selected, setSelected] = useState('product');
    function handleSelected (value) {
        setSelected(value);
    };
    return (
        <div>
                <Grid container spacing={4} sx={{m: {xs: '100px 0', md: '100px 10%'}}}>
                    <Grid size={{xs: 6, md: 3}} sx={{border: '1px solid #0000004d', borderRadius: '3px', p: '30px 50px', textAlign: 'center', 
                        backgroundColor:`${selected=='saller'? 'red' : 'white'}`, cursor: 'pointer'}} 
                        onClick={(e) => {e.preventDefault();
                            handleSelected('saller')}}>
                        <Box className='about-border'>
                            <StorefrontRoundedIcon sx={{width: '40px', height: '40px',p: '9px', backgroundColor: `${selected=='saller'? 'white' : 'black'}`,
                                color: `${selected=='saller'? 'black' : 'white'}`, borderRadius: '50%'}} />
                        </Box>
                        <Typography variant='h5' component='p' sx={{fontWeight: '700', fontSize: '32px', color: `${selected=='saller'? 'white': 'black'}`}}>10.5k </Typography>
                        <Typography variant='body1' component='p' sx={{fontWeight: '400', fontSize: '16px', color: `${selected=='saller'? 'white': 'black'}`}}>Sallers active our site</Typography>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}} sx={{border: '1px solid #0000004d', borderRadius: '5px', p: '30px 50px', textAlign: 'center', 
                            backgroundColor:`${selected=='product'? 'red' : 'white'}`, cursor: 'pointer'}} 
                        onClick={(e) => {e.preventDefault();
                            handleSelected('product')}}>
                        <Box className='about-border'>
                            <AttachMoneyRoundedIcon sx={{width: '40px', height: '40px',p: '9px', backgroundColor: `${selected=='product'? 'white' : 'black'}`,
                                color: `${selected=='product'? 'black' : 'white'}`, borderRadius: '50%'}} />
                        </Box>
                        <Typography variant='h5' component='p' sx={{fontWeight: '700', fontSize: '32px', color: `${selected=='product'? 'white': 'black'}`}}>33k </Typography>
                        <Typography variant='body1' component='p' sx={{fontWeight: '400', fontSize: '16px', color: `${selected=='product'? 'white': 'black'}`}}>Mopnthly Produduct Sale</Typography>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}} sx={{border: '1px solid #0000004d', borderRadius: '3px', p: '30px 50px', textAlign: 'center', 
                        backgroundColor:`${selected=='customer'? 'red' : 'white'}`, cursor: 'pointer'}} 
                        onClick={(e) => {e.preventDefault();
                            handleSelected('customer')}}>
                        <Box className='about-border'>
                            <ShoppingBagRoundedIcon sx={{width: '40px', height: '40px',p: '9px', backgroundColor: `${selected=='customer'? 'white' : 'black'}`,
                                color: `${selected=='customer'? 'black' : 'white'}`, borderRadius: '50%'}} />
                        </Box>
                        <Typography variant='h5' component='p' sx={{fontWeight: '700', fontSize: '32px', color: `${selected=='customer'? 'white': 'black'}`}}>44.5k </Typography>
                        <Typography variant='body1' component='p' sx={{fontWeight: '400', fontSize: '16px', color: `${selected=='customer'? 'white': 'black'}`}}>Customer active in our site</Typography>
                    </Grid>
                    <Grid size={{xs: 6, md: 3}} sx={{border: '1px solid #0000004d', borderRadius: '3px', p: '30px 50px', textAlign: 'center', 
                        backgroundColor:`${selected=='anual'? 'red' : 'white'}`, cursor: 'pointer'}} 
                        onClick={(e) => {e.preventDefault();
                            handleSelected('anual')}}>
                        <Box className='about-border'>
                            <RequestQuoteIcon sx={{width: '40px', height: '40px',p: '9px', backgroundColor: `${selected=='anual'? 'white' : 'black'}`,
                                color: `${selected=='anual'? 'black' : 'white'}`, borderRadius: '50%'}} />
                        </Box>
                        <Typography variant='h5' component='p' sx={{fontWeight: '700', fontSize: '32px', color: `${selected=='anual'? 'white': 'black'}`}}>25k </Typography>
                        <Typography variant='body1' component='p' sx={{fontWeight: '400', fontSize: '16px', color: `${selected=='anual'? 'white': 'black'}`}}>Anual gross sale in our site</Typography>
                    </Grid>
                </Grid>
        </div>
    )
}
