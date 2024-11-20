import React, {useEffect, useMemo} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoryProducts} from '../../rtk/slices/CategoryProductSlice';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Root from '../Root';
import Footer from '../Footer';
import {addToWishlist} from '../../rtk/slices/WishlistSlice';
import {addToCart, cartEditQuant} from '../../rtk/slices/CartSlice';
import {useParams} from 'react-router-dom'

export default function ViewCategoryProducts() {
    const getUsersData = useSelector(state => state.usersData);
    const usersData = getUsersData.usersData || [];
    const userLogedin = useMemo(() => usersData.find((user) => user.status == 'LOGED IN'), [usersData]);
    const {categoryId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoryProducts(categoryId));
    }, []);
    const allProducts = useSelector((state) => state.categoryProducts) || [];
    const productsDisc = [10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30];
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
        <div>
            <Root />
            <Box sx={{display: 'flex', flexGrow: '2', flexWrap: 'wrap', mt: '40px', ml: '5%'}}>
                {allProducts.map((product, index) => (
                    <Card sx={{ width: 500, height: 'auto', m: '10px'}} key={product.id}>
                        <Typography gutterBottom variant="body1" component="p" sx={{backgroundColor: 'red', color: 'white', width: '50px', padding: '5px', borderRadius: '5px'}}>
                            -{productsDisc[index] || 0}%
                        </Typography>
                        <Box sx={{float: 'right', mr: '10px'}}>
                            <Button onClick={(e) => {
                                    e.preventDefault();
                                    handleWishlist(product, index);
                                }} 
                                sx={{display: 'block', ml: '-15px', color: `${wishlistItems.find(item => item.id == product.id)? 'red': 'black'}`}}
                                className='fav-icon'>
                                <FavoriteBorderIcon sx={{ fontSize: '35px'}}/>
                            </Button>
                            {/* <Link href={`/home/products/${product.id}`} sx={{color: 'black'}}>
                                <VisibilityOutlinedIcon sx={{fontSize: '35px'}}/>
                            </Link> */}
                            
                        </Box>
                        <CardMedia>
                            <img src={product.images[0]} alt={product.title} width='80%' height='400px' />
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
                        <Grid container spacing={2}>
                            <Grid size={3}>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={5} precision={product.rating? product.rating.rate: 3.5} readOnly/>
                                </Stack>
                            </Grid>
                        <Grid size={2}>
                            <Typography variant="body2" component='span' sx={{ color: 'text.secondary', fontSize: '16px', fontWeight: 'bold'}}>
                                ({product.rating? product.rating.count: 200})
                            </Typography>
                        </Grid>
                        </Grid>
                    </Card>
                ))}
            </Box>
            <Footer />
        </div>
    )
}
