import React,{useState} from 'react';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import Footer from '../Footer';
import Root from '../Root';
import MyProfile from './MyAccountCompon/MyProfile';
import MyPaymentOptions from './MyAccountCompon/MyPaymentOptions';
import AddressBook from './MyAccountCompon/AddressBook';

export default function MyAccount() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const [showCompon, setShowCompon] = useState('profile');
    const handleProfile = (e) => {
        e.preventDefault();
        setShowCompon('profile')
    }
    const handleAddress = (e) => {
        e.preventDefault();
        setShowCompon('address')
    }
    const handlePayment = (e) => {
        e.preventDefault();
        setShowCompon('payment')
    }
    const handleReturns = (e) => {
        e.preventDefault();
        setShowCompon('returns')
    }
    const handleCancellation = (e) => {
        e.preventDefault();
        setShowCompon('cancellation')
    }
    const handleWishlist = (e) => {
        e.preventDefault();
        setShowCompon('wishlist')
    }
    return (
        <div>
            <Root />
            <Box sx={{margin: {xs: '50px 0', md: '50px 10%'}}}>
                <Box sx={{textAlign: 'right'}}>
                    <Typography variant='h6' component='span'>Welcome! </Typography>
                    <Typography variant='h6' component='span' color='error'>{userLogedin.name}</Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid size={{md: 3}}>
                        <Box sx={{display:{xs: 'flex', md: 'block'}}}>
                            <Box sx={{ mr: {xs: '15px', md: '0'}}}>
                                <Typography sx={{fontWeight: '500' }} variant="h6" component="div">
                                Manage My Account
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Button color={showCompon === 'profile'? 'error': 'inherit'} sx={{textTransform: 'capitalize'}} onClick={handleProfile}>
                                            <ListItemText primary={<Typography variant='body1' component='p' sx={{fontWeight: '500', fontSize: '16px'}}>My Profile</Typography>}/>
                                        </Button>
                                    </ListItem>
                                    <ListItem sx={{ mt: '-30px' }}>
                                        <Button  color={showCompon === 'address'? 'error': 'inherit'} sx={{textTransform: 'capitalize'}} onClick={handleAddress}>
                                            <ListItemText primary={<Typography variant='body1' component='p' sx={{fontWeight: '500', fontSize: '16px'}}>Address Book</Typography>}/>
                                        </Button>
                                    </ListItem>
                                    <ListItem sx={{ mt: '-30px' }}>
                                        <Button  color={showCompon === 'payment'? 'error': 'inherit'} sx={{textTransform: 'capitalize'}} onClick={handlePayment}>
                                            <ListItemText primary={<Typography variant='body1' component='p' sx={{fontWeight: '500', fontSize: '16px'}}>My Payment Options</Typography>}/>
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight: '500' }} variant="h6" component="div">
                                My Orders
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Button  color={showCompon === 'returns'? 'error': 'inherit'} sx={{textTransform: 'capitalize'}} onClick={handleReturns}>
                                            <ListItemText primary={<Typography variant='body1' component='p' sx={{fontWeight: '500', fontSize: '16px'}}>My Returns</Typography>}/>
                                        </Button>
                                    </ListItem>
                                    <ListItem sx={{ mt: '-30px' }}>
                                        <Button  color={showCompon === 'cancellations'? 'error': 'inherit'} sx={{textTransform: 'capitalize'}} onClick={handleCancellation}>
                                            <ListItemText primary={<Typography variant='body1' component='p' sx={{fontWeight: '500', fontSize: '16px'}}>My Cancellations</Typography>}/>
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Button  color={showCompon === 'wishlist'? 'error': 'inherit'} sx={{textTransform: 'capitalize'}} onClick={handleWishlist}>
                                    <Typography sx={{fontWeight: '500' }} variant="h6" component="div">My WishList</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{md: 9}}>
                        <Box sx={{display:`${showCompon === 'profile'? 'block': 'none'}`}}>
                            <MyProfile />
                        </Box>
                        <Box sx={{display:`${showCompon === 'address'? 'block': 'none'}`}}>
                            <AddressBook />
                        </Box>
                        <Box sx={{display:`${showCompon === 'payment'? 'block': 'none'}`}}>
                            <MyPaymentOptions />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}