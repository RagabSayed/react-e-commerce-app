import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOneProduct} from '../../rtk/slices/OneProductSlice';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import {useParams} from 'react-router-dom';
import Root from '../Root';
import Footer from '../Footer';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import {addToWishlist} from '../../rtk/slices/WishlistSlice';
import {addToCart, cartEditQuant} from '../../rtk/slices/CartSlice';
import {fetchTodayProducts} from '../../rtk/slices/TodayProductSlice';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function ViewOneProduct() {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const todayProducts = useSelector((state) => state.todayProducts);
    useEffect(() => {
        dispatch(fetchOneProduct(productId));
        dispatch(fetchTodayProducts());
    }, []);
    const oneProduct = useSelector((state) => state.oneProduct);
    const relatedItems = todayProducts.filter(product => product.category === oneProduct.category)
    const productsDisc = [{id:1, disc:10}, {id:2, disc:15}, {id:3, disc:20}, {id:4, disc:25}, {id:5, disc:30}, {id:6, disc:10}, {id:7, disc:15}, {id:8, disc:20}, 
        {id:9, disc:25}, {id:10, disc:30}, {id:11, disc:10}, {id:12, disc:15}, {id:13, disc:20}, {id:14, disc:25}, {id:15, disc:30}, {id:16, disc:10}, 
        {id:17, disc:15}, {id:18, disc:20}, {id:19, disc:25}, {id:20, disc:30}];
    const productImages = [oneProduct.image, oneProduct.images? oneProduct.images[1]: "https://i.imgur.com/cHddUCu.jpeg", oneProduct.images? oneProduct.images[2]: "https://i.imgur.com/CFOjAgK.jpeg", "https://i.imgur.com/wbIMMme.jpeg"];
    const productSize = ['XS', 'S', 'M', 'L', 'xL'];
    const productColor = ['#A0BCE0', '#E07575'];
    const getProductDisc = productsDisc.find((fn) => fn.id == oneProduct.id);
    const [showImg, setShowImg] = useState(productImages[0]);
    const [itemColor, setItemColor] = useState(productColor[0]);
    const [itemSize, setItemSize] = useState(productSize[0]);
    function showImage(img) {
        setShowImg(img);
    }
    const [changeBtn, setChangeBtn] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
        setChangeBtn(1);
    }
    const handleDecrease = (e) => {
        e.preventDefault();
        setChangeBtn(2);
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            alert('The quantity must be greater than or equal to 1.');
        }
    }
    function handleItemSize(size, index) {
        setItemSize(size);
        const sizeShow = document.getElementsByClassName('size-show');
        sizeShow[index].style.backgroundColor = 'red';
    }
    function handleItemColor(color) {
        setItemColor(color);
    }
    const getWishlistItems = useSelector(state => state.wishlistItems? state.wishlistItems.wishlistItems: []);
    const wishlistItems = userLogedin? getWishlistItems.filter(item => item.userId == userLogedin.id): [];
    function handleWishlist (product, id) {
        const itemFound = wishlistItems.find(item => item.id == id);
        if (userLogedin) {
            if (!itemFound) {
                const discIndex = productsDisc.findIndex(fd => fd.id == id);
                const wishlistItem = {...product, disc: productsDisc[discIndex].disc, userId: userLogedin.id};
                dispatch(addToWishlist(wishlistItem));
            } else {
                alert("Product already exists in wishlist");
            }
        } else {
            alert("You must log in to do that");
        }
    };
    const cartItems = useSelector(state => state.cartItems? state.cartItems.cartItems: []);
    function handleAddToCart(product, id, quantity) {
        const itemFound = cartItems.find(item => item.id == id && item.userId == userLogedin.id);
        if (userLogedin) {
            if (!itemFound) {
                const discIndex = productsDisc.findIndex(fd => fd.id == id);
                const cartProduct ={...product, disc: productsDisc[discIndex].disc, quant: quantity, userId: userLogedin.id, color: itemColor, size: itemSize};
                dispatch(addToCart(cartProduct));
            } else {
                const calcQuantity = itemFound.quant + quantity;
                let xx = {...itemFound, quant : calcQuantity};
                dispatch(cartEditQuant(xx));
            }
        } else {
            alert("You must log in to do that");
        }
    }

    return (
        <div>
            <Root />
            <Box sx={{pb: '30px', margin: {xs: '50px 0', md: '50px 10%'}}}>
                <Grid container spacing={ 4}>
                    <Grid size={{md: 8}} container>
                        <Grid size={4}>
                            <FormControl fullWidth>
                                <RadioGroup
                                    // col
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    // onChange={handleChange}
                                    defaultValue= '0'
                                    sx={{m: 'auto'}}
                                >
                                {productImages.map((img, index) => oneProduct.id && (
                                    <FormControlLabel value={index} control={<img src={img} alt={index} width="100px" height="100px" />} label="" key={index}
                                        onClick={(e) => {
                                        e.preventDefault();
                                        showImage(img)
                                    }} />
                                ))}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid size={7}>
                            <img src={showImg || oneProduct.image} alt={oneProduct.title} width='100%' height="100%" />
                        </Grid>
                    </Grid>
                    <Grid size={{md: 4}}>
                        <Card >
                            <CardContent sx={{textAlign: 'left'}}>
                                <Typography gutterBottom variant="h5" component="h5" sx={{fontSize: '24px', fontWeight: '600'}}>
                                    {oneProduct.title}
                                </Typography>
                                <Box sx={{display: 'flex', flexGrow: '1', m: '5px 0'}}>
                                    <Stack spacing={1}>
                                        {oneProduct.rating &&
                                        <Rating name="half-rating-read" defaultValue={5} precision={ oneProduct.rating.rate} readOnly/>
                                        }
                                    </Stack>
                                    <Typography variant="body2" component='span' sx={{ color: 'text.secondary', fontSize: '14px', fontWeight: '400', p: '0 5px'}}>
                                        ({oneProduct.rating? oneProduct.rating.count: 0} Reviews) |
                                    </Typography>
                                    <Typography variant="body2" component='span' sx={{ color: '#00FF66', fontSize: '14px', fontWeight: '400'}}>
                                        In Stock
                                    </Typography>
                                </Box>
                                <Typography variant="h6" component='p' sx={{ fontSize: '24px', fontWeight: '24', m: '10px 0'}}>
                                    ${getProductDisc?(oneProduct.price - (oneProduct.price * getProductDisc.disc / 100)).toFixed(2): oneProduct.price}
                                </Typography>
                                <Typography gutterBottom variant="body1" component="p" sx={{fontSize: '14px', fontWeight: '400'}}>
                                    {oneProduct.description}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="p" sx={{border: '1px solid #00000080', m: '20px 0'}}></Typography>
                                <Box>
                                    <Typography variant='h6' component= 'span' sx={{fontSize: '20px', fontWeight: '400'}}>Colours: </Typography>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue= '0'
                                        sx={{display: 'inline-block', ml: '10px'}}
                                    >
                                        {productColor.map((color, index) => oneProduct.id && (
                                        <FormControlLabel value={index} control={<Radio sx= {{color: {color}, "&.Mui-checked":{color: {color}}}} />} label="" key={index}
                                            onChange={(e) => { e.preventDefault();
                                                handleItemColor(color);}} />
                                        ))}
                                    </RadioGroup>
                                </Box>
                                <Box>
                                    <Typography variant='h6' component= 'span' sx={{fontSize: '20px', fontWeight: '400'}}>Size: </Typography>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue= '0'
                                        sx={{display: 'inline-block', ml: '10px'}}
                                    >
                                        {productSize.map((size, index) => oneProduct.id && (
                                            <FormControlLabel value={index} control={<Typography variant= 'body1' component= 'span' 
                                                sx= {{width: '32px', height: '32px', border: '1px solid #00000080', borderRadius: '4px', fontSize: '14px', fontWeight: '500', 
                                                display: 'inline-block', textAlign: 'center', mr: '10px', backgroundColor:`${itemSize==size?'red':'white'}`}} 
                                                className='size-show'>{size}</Typography>} label="" key={index}
                                                onClick={(e) => {e.preventDefault();
                                                handleItemSize(size, index);}} />
                                        ))}
                                    </RadioGroup>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Box sx={{display: 'inline-block', mr: '20px', border: '1px solid #00000080', borderRadius: '5px'}}>
                                    <Button color={changeBtn==2? 'error': 'inherit'} variant="contained" 
                                        sx={{ fontWeight: '500', fontSize: '20px', borderTopRightRadius: '0' , borderBottomRightRadius: '0'}} 
                                        onClick={handleDecrease}>-</Button>
                                    <Typography variant='h6' component= 'span' sx={{fontSize: '20px', fontWeight: '500', p: '9px 40px 14px 40px', border: '1px solid #00000080'}}>{quantity}</Typography>
                                    <Button color={changeBtn==1? 'error': 'inherit'} variant="contained" 
                                        sx={{ fontWeight: '500', fontSize: '20px' , borderTopLeftRadius: '0' , borderBottomLeftRadius: '0'}} 
                                        onClick={handleIncrease}>+</Button>
                                </Box>
                                <Button variant="contained" size="large" color="error" sx={{textTransform: 'capitalize', width: '120px'}}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(oneProduct, oneProduct.id, quantity);
                                    }}>Buy Now</Button>
                                <Button color= 'inherit' onClick={(e) => {
                                    e.preventDefault();
                                    handleWishlist(oneProduct, oneProduct.id);}}
                                sx={{color: `${wishlistItems.find(item => item.id == oneProduct.id)? 'red': 'black'}`}} >
                                    <FavoriteBorderOutlinedIcon sx={{height: '20px', width: '20px', p: '10px', border: '1px solid #00000080', 
                                    borderRadius: '5px', textAlign: 'right'}} />
                                </Button>
                            </CardActions>
                            <Box sx={{m: '20px 0', p: '20px 10px', border: '1px solid #00000080', m: '20px 0', borderRadius: '5px'}}>
                                <Box sx={{display: 'flex', flexGrow: 1}}>
                                    <LocalShippingOutlinedIcon sx={{height: '30px', width: '30px', mt: '8px'}} />
                                    <Box sx={{ml: '10px'}}>
                                        <Typography variant="h6" component="h6" sx={{fontWeight: '500', fontSize: '16px'}}>Free Delivery</Typography>
                                        <Typography variant="h6" component="p" sx={{fontWeight: '500', fontSize: '12px', textDecoration: 'underline'}}>Enter your postal code for Delivery Availability</Typography>
                                    </Box>
                                </Box>
                                <Typography gutterBottom variant="h6" component="p" sx={{border: '1px solid #00000080', m: '20px -10px'}}></Typography>
                                <Box sx={{display: 'flex', flexGrow: 1}}>
                                    <LoopOutlinedIcon sx={{height: '30px', width: '30px', mt: '8px'}} />
                                    <Box sx={{ml: '10px'}}>
                                        <Typography variant="h6" component="h6" sx={{fontWeight: '500', fontSize: '16px'}}>Return Delivery</Typography>
                                        <Typography variant="h6" component="p" sx={{fontWeight: '500', fontSize: '12px', textDecoration: 'underline'}}>Free 30 Days Delivery Returns. Details</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ m: '50px 0'}}>
                    <h1 style={{color: 'red', fontSize: '25px', fontWeight: 'bold', padding: '10px'}}>
                        <span className='today-title'></span>
                        <span>Related Item</span>
                    </h1>
                    <Box sx={{display: 'flex', flexGrow: '1', flexWrap: 'wrap', mt: '40px'}}>
                    {relatedItems.map((product, index) => (
                        <Card sx={{ width: {xs: 240, md: 360}, height: 'auto', m: {xs: '0', md: '10px'}}} key={product.id}>
                            <Typography gutterBottom variant="body1" component="p" sx={{backgroundColor: 'red', color: 'white', width: '50px', padding: '5px', borderRadius: '5px'}}>
                                -{productsDisc[index].disc}%
                            </Typography>
                            <Box sx={{float: 'right', mr: '10px', mt: '-40px'}}>
                                <Button onClick={(e) => {
                                    e.preventDefault();
                                    handleWishlist(product, product.id);
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
                                <img src={product.image || product.images[0]} alt={product.title} width='80%' height='400px' />
                            </CardMedia>
                            <CardActions>
                                <Button size="larg" onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(product, product.id, 1);
                                    }}
                                    sx={{backgroundColor: 'black', color: 'white', width: '100%', fontWeight: 'bold'}}>Add To Cart
                                </Button>
                            </CardActions>
                            <CardContent sx={{textAlign: 'left'}}>
                                <Typography gutterBottom variant="body1" component="div" sx={{fontSize: '16px', fontWeight: 'bold'}}>
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" component='span' sx={{color: 'red', fontSize: '18px', fontWeight: 'bold', padding: '10px'}}>
                                    ${(product.price - (product.price * productsDisc[index].disc / 100)).toFixed(2)}
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
            <Footer />
        </div>
    )
}
