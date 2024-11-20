import React from 'react';
import Footer from './Footer';
import Root from './Root';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NotFoundPage() {
    return (
        <div>
            <Root />
            <Box sx={{ m: '100px 0', textAlign: 'center'}}>
                <Typography variant='h1' component='h1' sx={{fontWeight: '500', fontSize: '110px'}}>404 Not Found</Typography>
                <Typography variant='h6' component='h6' sx={{m: '20px 0'}}>Your visited page not found. You may go home page.</Typography>
                <Box sx={{width: '100%', textAlign: 'center'}}>
                    <Button variant="contained" size="large" color="error" sx={{textTransform: 'capitalize', width: '250px'}} href='/home'>Back to home page</Button>
                </Box>
            </Box>
            <Footer />
        </div>
    )
}
