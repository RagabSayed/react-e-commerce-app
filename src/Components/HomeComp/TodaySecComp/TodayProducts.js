import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodayProducts} from '../../../rtk/slices/TodayProductSlice';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import {addToWishlist} from '../../../rtk/slices/WishlistSlice';
import {addToCart, cartEditQuant} from '../../../rtk/slices/CartSlice';

export default function TodayProducts() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const todayProducts = useSelector((state) => state.todayProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodayProducts());
    }, [])
    const productsDisc = [10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30];
    const [count, setCount] = useState(0)
    function showNextProduct () {
        if (count < todayProducts.length - 1) {
           setCount(count + 1);
        } else {
            setCount(0);
        }
    }
    function showPrevProduct () {
        if (count < todayProducts.length && count > 0) {
            setCount(count - 1);
        } else {
            setCount(todayProducts.length - 1);
        }
    }
    const getWishlistItems = useSelector(state => state.wishlistItems? state.wishlistItems.wishlistItems: []);
    const wishlistItems = userLogedin? getWishlistItems.filter(item => item.userId == userLogedin.id): [];
    function handleWishlist (product, index) {
        const itemFound = wishlistItems.find(item => item.id == product.id);
        if (userLogedin) {
            if (!itemFound) {
                const wishlistItem ={...product, disc: productsDisc[index], userId: userLogedin.id};
                dispatch(addToWishlist(wishlistItem));
                let favIcon = document.getElementsByClassName('fav-icon');
                favIcon[index].style.color = 'red';
            } else {
                alert("Product already exists in wishlist");
            }
        } else {
            alert("You must log in to do that");
        }
    };
    const cartItems = useSelector(state => state.cartItems? state.cartItems.cartItems: []);
    function handleAddToCart(product, index) {
        const itemFound = cartItems.find(item => item.id == product.id && item.userId == userLogedin.id);
        if (userLogedin) {
            if (!itemFound) {
                let cartProduct = product;
                cartProduct ={...cartProduct, disc: productsDisc[index], quant: 1, userId: userLogedin.id};
                dispatch(addToCart(cartProduct));
            } else {
                const quantity = itemFound.quant + 1;
                let xx = {...itemFound, quant : quantity};
                dispatch(cartEditQuant(xx));
            }
        } else {
            alert("You must log in to do that");
        }
    }

    return (
        <div style={{paddingBottom: '30px'}}>
            <Box sx={{textAlign: 'right', m: {xs: '20px 10px 0 0', md: '0 100px 0 0'}}}>
                <Button sx={{color: 'black'}} variant="text" onClick={(e) => {
                    e.preventDefault();
                    showPrevProduct()}}>
                    <ArrowBackIcon sx={{marginRight: '20px'}}/>
                </Button>
                <Button sx={{color: 'black'}} variant="text" onClick={(e) => {
                    e.preventDefault();
                    showNextProduct()}}>
                    <ArrowForwardIcon />
                </Button>
            </Box>
            <Box sx={{display: 'flex', flexGrow: '1', m: {xs:'0', md:'40px 0 0 5%'}}}>
                {todayProducts.map((product, index) => (
                    <Card sx={{ minWidth: 300, height: 'auto', m: '10px',display:`${index >= count?'block': 'none'}`}} key={product.id}>
                        <Typography gutterBottom variant="body1" component="p" sx={{backgroundColor: 'red', color: 'white', width: '50px', padding: '5px', borderRadius: '5px'}}>
                            -{productsDisc[index]}%
                        </Typography>
                        <Box sx={{float: 'right', mr: '10px', mt: '-40px'}}>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                handleWishlist(product, index);
                            }} 
                            sx={{display: 'block', ml: '-15px', color: `${wishlistItems.find(item => item.id == product.id)? 'red': 'black'}`}}
                            className='fav-icon'>
                                <FavoriteBorderIcon sx={{ fontSize: '35px'}}/>
                            </Button>
                            <Link href={`/home/products/${product.id}`} sx={{color: 'black'}}>
                                <VisibilityOutlinedIcon sx={{fontSize: '35px'}}/>
                            </Link>
                        </Box>
                        <CardMedia>
                            <img src={product.image} alt={product.title} width='80%' height='400px' />
                        </CardMedia>
                        <CardActions>
                            <Button size="large" onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToCart(product, index);
                                }}
                                sx={{backgroundColor: 'black', color: 'white', width: '100%', fontWeight: 'bold'}}>Add To Cart
                            </Button>
                        </CardActions>
                        <CardContent sx={{textAlign: 'left'}}>
                            <Typography gutterBottom variant="body1" component="div" sx={{fontSize: '16px', fontWeight: 'bold'}}>
                                {product.title}
                            </Typography>
                            <Typography variant="body2" component='span' sx={{color: 'red', fontSize: '18px', fontWeight: 'bold', padding: '10px'}}>
                                ${(product.price - (product.price * productsDisc[index] / 100)).toFixed(2)}
                            </Typography>
                            <Typography variant="body2" component='span' sx={{ color: 'text.secondary', fontSize: '18px', fontWeight: 'bold', padding: '10px', textDecoration: 'line-through'}}>
                                ${product.price}
                            </Typography>
                        </CardContent>
                        <Grid container>
                            <Grid size={5}>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={5} precision={product.rating.rate} readOnly/>
                                </Stack>
                            </Grid>
                        <Grid size={2}>
                            <Typography variant="body2" component='span' sx={{ color: 'text.secondary', fontSize: '16px', fontWeight: 'bold'}}>
                                ({product.rating.count})
                            </Typography>
                        </Grid>
                        </Grid>
                    </Card>
                ))}
            </Box>
            
        </div>
    )
}
