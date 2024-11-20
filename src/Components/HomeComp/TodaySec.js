import React from 'react';
import TodayTimer from './TodaySecComp/TodayTimer';
import TodayProducts from './TodaySecComp/TodayProducts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function TodaySec() {
    return (
        <Box sx={{marginTop: '200px', ml: {xs: '1%', md: '10%'}}}>
            <Box sx={{'&:hover': {
                    border: '2px solid blue',
                  },}}>
                <h1 style={{color: 'red', fontSize: '25px', fontWeight: 'bold', padding: '10px'}}>
                    <span className='today-title'></span>
                    <span>Today's</span>
                </h1>
                <TodayTimer duration={4 * 24 * 60 * 60}/>
                <TodayProducts />
            </Box>
            <Link href="/home/products">
                <Button 
                    size="large" 
                    sx={{backgroundColor: 'red', color: 'white', width: '250px', fontWeight: 'bold', marginLeft: '45%', mt: '20px',
                    '&:hover, &.Mui-focusVisible': {
                        border: '2px solid purple',
                        },
                    }}
                    
                >View All Poducts</Button>
            </Link>
            
        </Box>
    )
}
