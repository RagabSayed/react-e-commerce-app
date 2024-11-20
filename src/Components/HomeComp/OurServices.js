import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import BeenhereSharpIcon from '@mui/icons-material/BeenhereSharp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function OurServices() {
    return (
        <Box sx={{m: {xs: '100px 2%', md:'100px 15%'}}}>
            <Box sx={{display: 'flex', flexGrow: '1'}}>
                <Box sx={{width: '30%', mr: '3.3%'}}>
                    <LocalShippingOutlinedIcon 
                        sx={{color: 'white', backgroundColor: 'black', height: '50px', width: '50px', p: '10px',
                        border: '10px solid #f5f0f0c0', borderRadius: '50%', display: 'block', m: 'auto'}} />
                    <Typography variant='h5' component='h4' 
                        sx={{fontWeight: 'bold', fontSize: {xs: '24px', md: '28px'}, textAlign: 'center', mt: '20px', mb: '5px'}}
                        >FREE AND FAST DELIVERY</Typography>
                    <Typography variant='h6' component='p' 
                        sx={{fontWeight: '500', fontSize: '18px', textAlign: 'center'}}
                        >Free delivery for all orders over $140</Typography>
                </Box>
                <Box sx={{width: '30%', mr: '3.3%'}}>
                    <HeadsetMicOutlinedIcon 
                        sx={{color: 'white', backgroundColor: 'black', height: '50px', width: '50px', p: '10px',
                        border: '10px solid #f5f0f0c0', borderRadius: '50%', display: 'block', m: 'auto'}} />
                    <Typography variant='h4' component='h4'
                        sx={{fontWeight: 'bold', fontSize: {xs: '24px', md: '28px'}, textAlign: 'center', mt: '20px', mb: '5px'}}
                        >24/7 CUSTOMER SERVICE</Typography>
                    <Typography variant='h6' component='p'
                        sx={{fontWeight: '500', fontSize: '18px', textAlign: 'center'}}
                        >Friendly 24/7 customer support</Typography>
                </Box>
                <Box sx={{width: '30%', mr: '3.3%'}}>
                    <BeenhereSharpIcon 
                        sx={{color: 'white', backgroundColor: 'black', height: '50px', width: '50px', p: '10px',
                        border: '10px solid #f5f0f0c0', borderRadius: '50%', display: 'block', m: 'auto'}} />
                    <Typography variant='h4' component='h4'
                        sx={{fontWeight: 'bold', fontSize: {xs: '24px', md: '28px'}, textAlign: 'center', mt: '20px', mb: '5px'}}
                        >MONEY BACK GUARANTEE</Typography>
                    <Typography variant='h6' component='p'
                        sx={{fontWeight: '500', fontSize: '18px', textAlign: 'center'}}
                        >We reurn money within 30 days</Typography>
                </Box>
            </Box>
        </Box>
    )
}
