import React, {useState} from 'react';
import Footer from './Footer';
import Root from './Root';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {
    const [userConect, setUserConect] = useState({
        name: '',
        phone: '',
        email: '',
        massage: ''
    })
    const handleUserConect = (e) => {
        const {name, value} = e.target;
        setUserConect(prevState => ({...prevState, [name]: value}))
    }
    const handleSendMassage = (e) => {
        e.preventDefault();
        if (userConect.name.trim() && userConect.phone.trim() && userConect.email.trim()) {
            alert('Thanks for contacting us, We will contact you soon');
            setUserConect({
                name: '',
                phone: '',
                email: '',
                massage: ''
            })
        } else {
            alert('You must fill all required fields')
        }
    }
    return (
        <div>
            <Root />
            <Box sx={{margin: {xs: '50px 0', md: '50px 10%'}}}>
                <Grid container  spacing={5}>
                    <Grid size={{xs:12, md:3}} sx={{m:{xs: '0 5%', md: '0'}}} >
                        <Box>
                            <Box sx={{mb: '20px'}}>
                                <CallIcon sx={{backgroundColor: 'red', color: 'white', height: '20px', width: '20px', p: '10px', borderRadius: '50%'}} />
                                <Typography variant="h6" component="p" sx={{fontWeight: '500', ml: '50px', mt: '-43px'}}>Call To Us</Typography>
                            </Box>
                            <Typography variant="h6" component="p" sx={{fontWeight: '400', fontSize: '14px', m: '10px 0'}}>We are available 24/7, 7 days a week.</Typography>
                            <Typography variant="h6" component="p" sx={{fontWeight: '400', fontSize: '14px', mb: '20px'}}>Phone: +8801611112222</Typography>
                            <Typography variant="h6" component="p" sx={{border: '1px solid #00000080'}}></Typography>
                        </Box>
                        <Box sx={{m: '20px 0'}}>
                            <Box sx={{mb: '20px'}}>
                                <LocalPostOfficeOutlinedIcon sx={{backgroundColor: 'red', color: 'white', height: '20px', width: '20px', p: '10px', borderRadius: '50%'}} />
                                <Typography variant="h6" component="p" sx={{fontWeight: '500', ml: '50px', mt: '-43px'}}>Write To Us</Typography>
                            </Box>
                            <Typography variant="h6" component="p" sx={{fontWeight: '400', fontSize: '14px', m: '10px 0'}}>
                                Fill out our form and we will contact you within 24 hours.
                            </Typography>
                            <Typography variant="h6" component="p" sx={{fontWeight: '400', fontSize: '14px', mb: '10px'}}>Emails: customer@exclusive.com</Typography>
                            <Typography variant="h6" component="p" sx={{fontWeight: '400', fontSize: '14px'}}>Emails: support@exclusive.com</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{xs:12, md:9}} >
                        <Box sx={{ml: {xs: '0', md: '40px'}}}>
                            <FormControl required sx={{ mr: {xs: '4%', md:'2%'}, width: {xs:'48%', md: '32%'}}}>
                                <InputLabel><Typography variant="headline" component="h3">Your Name</Typography></InputLabel>
                                <Input sx={{border: 0}}
                                    name="name"
                                    value={userConect.name}
                                    onChange={handleUserConect}
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                />
                            </FormControl>
                            <FormControl required sx={{ width: {xs:'48%', md: '32%'}}}>
                                <InputLabel><Typography variant="headline" component="h3">Your Email</Typography></InputLabel>
                                <Input sx={{border: 0}}
                                    name="email"
                                    value={userConect.email}
                                    onChange={handleUserConect}
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                />
                            </FormControl>
                            <FormControl required sx={{mt:{xs: '15px', md: '0'}, width: {xs:'48%', md: '32%'}}}>
                                <InputLabel><Typography variant="headline" component="h3">Your Phone</Typography></InputLabel>
                                <Input sx={{border: 0}}
                                    name="phone"
                                    value={userConect.phone}
                                    onChange={handleUserConect}
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                />
                            </FormControl>
                            <FormControl required fullWidth sx={{ m: '20px 0', border: 0}}>
                                <TextField
                                    multiline
                                    name='massage'
                                    value={userConect.massage}
                                    onChange={handleUserConect}
                                    rows={6}
                                    label={<Typography variant="headline" component="h3">Your Massage</Typography>}
                                    slotProps={{inputLabel: {shrink: true,},}}
                                />
                            </FormControl>
                            <Box sx={{width: '100%', textAlign: 'right'}}>
                                <Button variant="contained" size="large" color="error" sx={{textTransform: 'capitalize', width: '200px'}}
                                    onClick={handleSendMassage}>Send Massage</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}

export default Contact;