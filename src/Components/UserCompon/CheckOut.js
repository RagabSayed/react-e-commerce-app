import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Footer from '../Footer';
import Root from '../Root';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import BkashBank from '../images/BKash-bKash2-Logo.wine.svg';
import VisaBank from '../images/vecteezy_visa-logo-vector-visa-icon-free-vector_20336392.jpg';
import MasterCardBank from '../images/MasterCard_logo.png';
import NagadBank from '../images/Nagad-Logo.wine.svg';
import Button from '@mui/material/Button';

export default function CheckOut() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const getCartItems = useSelector(state => state.cartItems? state.cartItems.cartItems: []);
    const cartItems = userLogedin? getCartItems.filter(item => item.userId == userLogedin.id): [];
    
    return (
        <div>
            <Root />
            <Box sx={{m: {xs: '50px 0', md: '50px 10%'}}}>
                <Typography variant="h3" component="h2" sx={{mb: '20px'}}>Billing Details</Typography>
                <Grid container>
                    <Grid size={{md: 6}}>
                        <FormControl required fullWidth sx={{ m: '20px 0'}}>
                            <InputLabel><Typography variant="headline" component="h3">First Name</Typography></InputLabel>
                            <Input sx={{border: 0}}
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: '20px 0'}}>
                            <InputLabel><Typography variant="headline" component="h3">Company Name</Typography></InputLabel>
                            <Input sx={{border: 0}}
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl required fullWidth sx={{ m: '20px 0'}}>
                            <InputLabel><Typography variant="headline" component="h3">Street Address</Typography></InputLabel>
                            <Input sx={{border: 0}}
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: '20px 0', border: '1px solid white' }}>
                            <InputLabel><Typography variant="headline" component="h3">Apartment, floor, etc. (optional)</Typography></InputLabel>
                            <Input sx={{border: 0}}
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl required fullWidth sx={{ m: '20px 0'}}>
                            <InputLabel><Typography variant="headline" component="h3">Town/City</Typography></InputLabel>
                            <Input sx={{border: 0}}
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl required fullWidth sx={{ m: '20px 0'}}>
                            <InputLabel><Typography variant="headline" component="h3">Phone Number</Typography></InputLabel>
                            <Input sx={{border: 0}}
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl required fullWidth sx={{ m: '20px 0'}}>
                            <InputLabel><Typography variant="headline" component="h3">Email Address</Typography></InputLabel>
                            <Input sx={{border: 0}}
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: '20px 0'}}>
                            
                            <FormControlLabel 
                                control={<Checkbox defaultChecked color="error" />} 
                                label={<Typography variant="h6" component="span" >Save this information for faster check-out next time</Typography>}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={{md: 6}} sx={{pl: {xs: '10px', md: '80px'}}}>
                        <TableBody>
                        {cartItems.map((item) => (
                            <TableRow
                            key={item.id}
                            sx={{ border: 0 }}
                            >
                                <TableCell component="th" scope="row" sx={{ border: 0, width: '20%' }}>
                                    <img src={item.image || item.images[0]} height='50px' width='50px' alt={item.title} />
                                </TableCell>
                                <TableCell sx={{ border: 0, width: '60%', fontSize: '18px', fontWeight: '400'}}>{item.title}</TableCell>
                                <TableCell align="right" sx={{ border: 0, width: '20%', fontSize: '18px', fontWeight: '400'}}>
                                    ${(item.quant * (item.price - (item.price * (item.disc || 0) / 100))).toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                            <TableRow>
                                <TableCell sx={{fontSize: '18px', fontWeight: '400'}}>Subtotal:</TableCell>
                                <TableCell />
                                <TableCell align="right" sx={{fontSize: '18px', fontWeight: '400'}}>
                                    ${(cartItems.reduce((acc, item) => acc + Number(item.quant * (item.price - (item.price * (item.disc || 0) / 100))),0)).toFixed(2)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{fontSize: '18px', fontWeight: '400'}}>Shipping:</TableCell>
                                <TableCell />
                                <TableCell align="right" sx={{fontSize: '18px', fontWeight: '400'}}>Free</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{fontSize: '18px', fontWeight: '400', border: 0}}>Total:</TableCell>
                                <TableCell sx={{border: 0}}/>
                                <TableCell align="right" sx={{fontSize: '18px', fontWeight: '400', border: 0}}>
                                    ${(cartItems.reduce((acc, item) => acc + Number(item.quant * (item.price - (item.price * (item.disc || 0) / 100))),0)).toFixed(2)}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="cash"
                            name="radio-buttons-group"
                        >
                            <Box sx={{display: 'flex', flexGrow: 1}}>
                                <FormControlLabel value="bank" control={<Radio />} label={<Typography variant="h6" component="span" >Bank</Typography>} />
                                <Stack direction="row" spacing={1} sx={{ml: 'auto'}}>
                                    <img src={BkashBank} alt='BkashBank' width="50" height="50"/>
                                    <img src={VisaBank} alt='BkashBank' width="50" height="50"/>
                                    <img src={MasterCardBank} alt='BkashBank' width="50" height="50"/>
                                    <img src={NagadBank} alt='BkashBank' width="50" height="50"/>
                                </Stack>
                            </Box>
                            <FormControlLabel value="cash" control={<Radio />} label={<Typography variant="h6" component="span">Cash on delivery</Typography>} />
                        </RadioGroup>
                        <Box sx={{m: '30px 0'}}>
                            <TextField
                                id="outlined-text"
                                label="Coupon Code"
                                type="text"
                                // size="small"
                                sx={{width: '60%', mr: '5%'}}
                            />
                            <Button size="large" variant="contained" color="error"
                                sx={{fontWeight: 'bold', width: '35%', textTransform: 'capitalize'}}>
                                apply coupon
                            </Button>
                        </Box>
                        <Button size="large" variant="contained" color="error"
                            sx={{fontWeight: 'bold', width: '200px', textTransform: 'capitalize'}}>
                            place order
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    )
}
