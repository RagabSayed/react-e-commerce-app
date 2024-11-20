import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodayProducts} from '../../rtk/slices/TodayProductSlice';
import Box from '@mui/material/Box';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from '@mui/material/Link';
import {addToCart, cartEditQuant} from '../../rtk/slices/CartSlice';

export default function JustForYou() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const getProducts = useSelector((state) => state.todayProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodayProducts());
    }, [])
    const productsDisc = [10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30];
    const [count, setCount] = useState(4);
    const seeAllProducts = (e) => {
        e.preventDefault();
        setCount(getProducts.length);
    }
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
        <Box sx={{m: {xs: '50px 0', md: '50px 10%'}}}>
            <Box sx={{mb: '50px'}}>
                    <span className='today-title'></span>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>Just For You</span>
                <Box sx={{float: 'right', mr: '30px'}}>
                    <Button size="large" variant="outlined" color="default" onClick={seeAllProducts}
                        sx={{fontWeight: 'bold', width: '150px', textTransform: 'capitalize'}}>
                        See All
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexGrow: '1', flexWrap: 'wrap', mt: '40px'}}>
                {getProducts.map((product, index) => (
                    <Card sx={{ width: {xs:240, md:350}, height: 'auto', m: {md: '10px'}, display:`${index < count?'block': 'none'}`}} key={product.id}>
                        <Typography gutterBottom variant="body1" component="p" sx={{backgroundColor: 'red', color: 'white', width: '50px', padding: '5px', borderRadius: '5px'}}>
                            -{productsDisc[index]}%
                        </Typography>
                        <Box sx={{float: 'right', mr: '10px', mt: '-40px'}}>
                            <Link href={`/home/products/${product.id}`} sx={{color: 'black'}}>
                                <VisibilityOutlinedIcon sx={{fontSize: '35px'}}/>
                            </Link>
                        </Box>
                        <CardMedia>
                            <img src={product.image} alt={product.title} width='80%' height='400px' />
                        </CardMedia>
                        <CardActions>
                            <Button size="larg" onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToCart(product, index);
                                }}
                                sx={{backgroundColor: 'black', color: 'white', width: '100%', fontWeight: 'bold'}}
                                startIcon={<ShoppingCartOutlinedIcon />} >Add To Cart
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
            </Box>
        </Box>
    )
}
