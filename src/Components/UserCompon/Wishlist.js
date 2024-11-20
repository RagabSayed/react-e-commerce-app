import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromWishlist, removeAllWishlist} from '../../rtk/slices/WishlistSlice';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Footer from '../Footer';
import Root from '../Root';
import JustForYou from './JustForYou';

export default function Wishlist() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const getWishlistItems = useSelector(state => state.wishlistItems? state.wishlistItems.wishlistItems: []);
    const wishlistItems = userLogedin? getWishlistItems.filter(item => item.userId == userLogedin.id): [];
    const dispatch = useDispatch();
    const deleteAllWishlist = () => {
        const otherWishlistItems = getWishlistItems.filter(item => item.userId != userLogedin.id);
        dispatch(removeAllWishlist(otherWishlistItems));
    }
    return (
        <div>
            <Root />
            <Box sx={{margin: {xs: '50px 0', md: '50px 10%'}, '&:hover': {md: {
                    border: '2px solid blue',
                  },}}}>
                <Box sx={{mt: '30px', ml:'10px', mr:'10px'}}>
                    <Typography variant='h5' component='span'>Wishlist</Typography>
                    <Typography variant='h5' component='span' sx={{pl: '10px'}}>({wishlistItems.length})</Typography>
                    <Box sx={{float: 'right'}}>
                        <Button size="large" variant="outlined" color="default" onClick={deleteAllWishlist}
                            sx={{fontWeight: 'bold', width: '200px', textTransform: 'capitalize'}}>
                            Move All To Bag
                        </Button>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexGrow: '1', flexWrap: 'wrap', m: '40px auto'}}>
                {wishlistItems.map((product) => (
                    <Card sx={{ width: {xs:240, md:350}, height: 'auto', m: {md: '10px'}}} key={product.id}>
                        <Typography gutterBottom variant="body1" component="p" sx={{backgroundColor: 'red', color: 'white', width: '50px', padding: '5px', borderRadius: '5px'}}>
                            -{product.disc}%
                        </Typography>
                        <Box sx={{float: 'right', mr: '10px', mt: '-45px'}}>
                            <Button onClick={() => {dispatch(removeFromWishlist(product))}} 
                            sx={{display: 'block', ml: '-15px', color: 'black'}}
                            className='fav-icon'>
                                <DeleteTwoToneIcon sx={{ fontSize: '35px'}}/>
                            </Button>
                        </Box>
                        <CardMedia>
                            <img src={product.image || product.images[0]} alt={product.title} width='80%' height='400px' />
                        </CardMedia>
                        <CardActions>
                            <Button size="larg" 
                                sx={{backgroundColor: 'black', color: 'white', width: '100%', fontWeight: 'bold'}} 
                                startIcon={<ShoppingCartOutlinedIcon />}>Add To Cart
                            </Button>
                        </CardActions>
                        <CardContent sx={{textAlign: 'left'}}>
                            <Typography gutterBottom variant="body1" component="div" sx={{fontSize: '16px', fontWeight: 'bold'}}>
                                {product.title}
                            </Typography>
                            <Typography variant="body2" component='span' sx={{color: 'red', fontSize: '18px', fontWeight: 'bold', padding: '10px'}}>
                                ${(product.price - (product.price * product.disc / 100)).toFixed(2)}
                            </Typography>
                            <Typography variant="body2" component='span' sx={{ color: 'text.secondary', fontSize: '18px', fontWeight: 'bold', padding: '10px', textDecoration: 'line-through'}}>
                                ${product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                </Box>
            </Box>
            <JustForYou />
            <Footer />
        </div>
    )
}
