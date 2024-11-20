import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodayProducts} from '../../rtk/slices/TodayProductSlice';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import {addToWishlist} from '../../rtk/slices/WishlistSlice';
import {addToCart, cartEditQuant} from '../../rtk/slices/CartSlice';

export default function ExploreProducts() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const exploreProducts = useSelector((state) => state.todayProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodayProducts());
    }, []);
    const newProducts = [{id: 5, status: 'NEW'}, {id: 7, status: 'NEW'}];
    const [productsColors, setProductsColors] = useState([{id: 5, color:['red', 'purple'], active: 'red'}, {id: 6, color:['yellow', 'red'], active: 'yellow'}, 
        {id: 7, color:['black', 'red'], active: 'black'}, {id: 8, color:['gray', 'red'], active: 'gray'}]);
    const [count, setCount] = useState(8)
    function viewAllProducts () {
        setCount(exploreProducts.length);
    }
    function handleChange(id, color) {
        let productIndex = productsColors.findIndex(fn => fn.id == id);
        setProductsColors(prevState => [...prevState, productsColors[productIndex].active= color]);
    };
    const getWishlistItems = useSelector(state => state.wishlistItems? state.wishlistItems.wishlistItems: []);
    const wishlistItems = userLogedin? getWishlistItems.filter(item => item.userId == userLogedin.id): [];
    function handleWishlist (product, index) {
        const itemFound = wishlistItems.find(item => item.id == product.id);
        if (userLogedin) {
            if (!itemFound) {
                const wishlistItem ={...product, userId: userLogedin.id};
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
                cartProduct ={...cartProduct, quant: 1, userId: userLogedin.id};
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
        <Box sx={{m: {xs: '0', md: '0 10%'}}}>
            <Box >
                <h1 style={{color: 'red', fontSize: '25px', fontWeight: 'bold', padding: '10px'}}>
                    <span className='today-title'></span>
                    <span>Our Products</span>
                </h1>
                <Typography variant='h2' component='span'>Explore Our Products</Typography>
                <Box sx={{display: 'flex', flexGrow: '1', flexWrap: 'wrap', mt: '40px'}}>
                    {exploreProducts.map((product, index) => (index < count &&
                    <Card sx={{ width: {xs: 240, md: 355}, height: 'auto', m: {xs: '0', md: '10px'}}} key={product.id}>
                        <Typography gutterBottom variant="body1" component="p" 
                            sx={{backgroundColor: 'green', color: 'white', width: '70px', borderRadius: '5px', textAlign: 'center'}}>
                            {newProducts.map((item) => item.id === product.id? item.status: "")}
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
                        </CardContent>
                        <Grid container>
                            <Grid size={3}>
                                <Typography variant="body2" component='span' sx={{color: 'red', fontSize: '18px', fontWeight: 'bold', padding: '10px'}}>
                                    ${product.price}
                                </Typography>
                            </Grid>
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
                        <FormControl fullWidth>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                // onChange={handleChange}
                                onChange={(e) => {e.preventDefault();
                                    handleChange(product.id, e.target.value)}}
                            >
                            {productsColors.map((item) => item.id === product.id? item.color.map((color, index) => (
                                <Radio
                                    key= {index == 0? item.id : item.id + 1000}
                                    value= {color}
                                    checked={item.active === color? true: false}
                                    
                                    name="radio-buttons"
                                    // inputProps={{ 'aria-label': 'A' }}
                                    sx={{backgroundColor: `${color}`, color: `${color}`, p: '0', mr: '5px','&:hover':{backgroundColor: `${color}`, border: `1px solid ${color}`}}}
                                />
                            )): "")}
                            </RadioGroup>
                        </FormControl>
                    </Card>
                ))}
                </Box>
                <Button size="large" variant="contained" color="error" onClick={(e) => {
                    e.preventDefault();
                    viewAllProducts()}}
                    sx={{fontWeight: 'bold', width: '235px', display: 'block', ml: 'auto', mr: 'auto', textTransform: 'capitalize'}}>
                    View All Products
                </Button>
            </Box>
        </Box>
    )
}
