import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodayProducts} from '../../rtk/slices/TodayProductSlice';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import {addToWishlist} from '../../rtk/slices/WishlistSlice';
import Link from '@mui/material/Link';

export default function BestSelling() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const bestProducts = useSelector((state) => state.todayProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodayProducts());
    }, [])
    const productsDisc = [10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30];
    const [count, setCount] = useState(4)
    function viewAllProducts () {
        setCount(bestProducts.length);
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

    return (
        <Box sx={{m: {xs: '0', md: '0 10%'}}}>
            <Box sx={{'&:hover': {
                    border: '2px solid blue',
                  },}}>
                <h1 style={{color: 'red', fontSize: '25px', fontWeight: 'bold', padding: '10px'}}>
                    <span className='today-title'></span>
                    <span>This Month</span>
                </h1>
                <Typography variant='h2' component='span'>Best Selling Products</Typography>
                <Box sx={{float: 'right', mr: {xs: '10px', md: '100px'}, mt:'30px'}}>
                    <Button size="large" variant="contained" color="error" onClick={(e) => {
                        e.preventDefault();
                        viewAllProducts()}}
                        sx={{fontWeight: 'bold', width: '150px'}}>
                        View All
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexGrow: '1', flexWrap: 'wrap', mt: '40px'}}>
                    {bestProducts.map((product, index) => (index < count &&
                        <Card sx={{ width: {xs: 240, md: 355}, height: 'auto', m: {xs: '0', md: '10px'}}} key={product.id}>
                            <Box sx={{float: 'right', mr: '10px'}}>
                                <Button onClick={(e) => {
                                    e.preventDefault();
                                    handleWishlist(product, index);}} 
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
            </Box>
        </Box>
    )
}
