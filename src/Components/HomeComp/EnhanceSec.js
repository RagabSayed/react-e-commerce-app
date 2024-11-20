import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import inhancesecimg from '../images/enhance-sec.png'

export default function EnhanceSec() {
    const attributes = [
        {id: 1, num: '23', text: 'Hours'},
        {id: 2, num: '05', text: 'Days'},
        {id: 3, num: '59', text: 'Minutes'},
        {id: 4, num: '35', text: 'Seconds'}
    ]
    return (
        <Box sx={{m: {xs: '100px 0', md: '100px 10%'}}}>
            <Box sx={{padding: '80px', backgroundColor: '#000000', color: 'white', '&:hover': {
                border: '2px solid blue',
              },}}>
                <Grid container>
                    <Grid size={{xs: 12, md: 6}} order={{xs: 2, md: 1}}>
                        <Typography variant="h6" component="p" sx={{color: '#00FF66', mb: '40px'}}>Categories</Typography>
                        <Typography variant="h2" component="h2" >Enhance Your Music Experience</Typography>
                        <Box sx={{mt: '40px', display: 'flex', flexGrow: '1'}}>
                        {attributes.map((attr) => (
                            <Box 
                            sx={{backgroundColor: 'white', color: 'black', width: '70px', height: '70px', borderRadius: '50%', textAlign: 'center', mr: '20px'}} 
                            key={attr.id}>
                                <Typography variant="h5" component="p" sx={{mt: '5px'}}>{attr.num}</Typography>
                                <Typography variant="subtitle2" component="p" >{attr.text}</Typography>
                            </Box>
                        ))}    
                        </Box>
                        <Button size="large" variant="contained" color="success"
                            sx={{fontWeight: 'bold', width: '150px', mt: '40px'}} href='/home/products'>
                            Buy Now!
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}} order={{xs: 1, md: 2}} >
                        <img src={inhancesecimg} alt={inhancesecimg} width='100%' style={{backgroundColor: '#D9D9D9', backdropFilter: 'blur(200px)'}}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
