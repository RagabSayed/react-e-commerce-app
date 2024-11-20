import React,{useState, useEffect} from 'react';
import Footer from '../Footer';
import Root from '../Root';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import {cartEditQuant, removeItem} from '../../rtk/slices/CartSlice';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export default function Cart() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const getCartItems = useSelector(state => state.cartItems? state.cartItems.cartItems: []);
    const cartItems = userLogedin? getCartItems.filter(item => item.userId == userLogedin.id): [];
    const dispatch = useDispatch();
    function handleChangeQuantity (item, quantity) {
        if (quantity > 0) {
            item = {...item, quant: quantity};
            dispatch(cartEditQuant(item));
        } else {
            alert('Quantity must be greater than or equal one');
        }
    };
    function handleRemoveItem(item) {
        dispatch(removeItem(item));
    }
    const [getWidth, setGetWidth] = useState(window.innerWidth);
    useEffect(() => {
        const changeWidth = () => {
            setGetWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
    }, [])
    

    return (
        <div>
            <Root />
            <TableContainer sx={{ m: '50px 0'}} component={Paper}>
                <Table sx={{width: `${getWidth>768?'80%':'100%'}`, ml: `${getWidth>768?'10%':'0'}` }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Sub Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.map((item) => (
                        <TableRow
                        key={item.id}
                        
                        >
                        <TableCell component="th" scope="row" sx={{ border: 0, width: '40%' }}>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                handleRemoveItem(item);
                            }}>
                                <ClearIcon sx={{backgroundColor: 'red', color: 'white', borderRadius: '50%', mb: '0', mr: '5px'}} />
                            </Button>
                            <img src={item.image || item.images[0]} height='50px' width='50px' alt={item.title} />
                            <span style={{display: 'inline-block', marginLeft: '20px'}}>{item.title}</span>
                        </TableCell>
                        <TableCell align="right" sx={{ border: 0, width: '20%' }}>${item.price}</TableCell>
                        <TableCell align="right" sx={{ border: 0, width: '20%' }}>
                            <TextField
                                id="outlined-number"
                                label=""
                                type="number"
                                InputProps={{
                                    inputProps: { min: 1 }
                                  }}
                                defaultValue= {Number(item.quant)}
                                sx={{width: `${getWidth>768?'100px':'100%'}`}}
                                onChange={(e) => {
                                    e.preventDefault();
                                    handleChangeQuantity(item, e.target.value);
                                }}
                            />
                        </TableCell>
                        <TableCell align="right" sx={{ border: 0, width: '20%' }}>${(item.quant * (item.price - (item.price * (item.disc || 0) / 100))).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <Box sx={{display: 'flex', m: `${getWidth>768?'20px 10%':'20px 0'}`}}>
                    <Button size="large" variant="outlined" color="default" href="/home"
                        sx={{fontWeight: 'bold', width: '200px', textTransform: 'capitalize'}}>
                        return to shop
                    </Button>
                    <Button size="normal" variant="outlined" color="default"
                        sx={{fontWeight: 'bold', width: '200px', textTransform: 'capitalize', display: 'block', ml: 'auto'}}>
                        Update Cart
                    </Button>
                </Box>
                <Grid container spacing={2.25} sx={{m: `${getWidth>768?'50px 10% 20px 10%':'50px 0 20px 0'}`}}>
                    <Grid size={{xs:6, md:5}}>
                    <TextField
                        id="outlined-text"
                        label="Coupon Code"
                        type="text"
                        size="small"
                        sx={{width: '200px', mr: '5%', mb: '5px'}}
                    />
                    <Button size="medium" variant="contained" color="error"
                        sx={{fontWeight: 'bold', width: '150px', textTransform: 'capitalize'}}>
                        apply coupon
                    </Button>
                    </Grid>
                    <Grid size={{xs:6, md:4.75}} sx={{border:'1px solid black', borderRadius: '5px'}}>
                        <Typography variant="h4" component="h4" sx={{m: '20px'}}>Cart Total</Typography>
                        <Box sx={{m: '20px', borderBottom: '1px solid #00000033', display: 'flex'}}>
                            <Typography variant="h6" component="p" >Subtotal:</Typography>
                            <Typography variant="h6" component="p" sx={{ ml: 'auto'}}>
                                ${(cartItems.reduce((acc, item) => acc + Number(item.quant * (item.price - (item.price * (item.disc || 0) / 100))),0)).toFixed(2)}
                            </Typography>
                        </Box>
                        <Box sx={{m: '20px', borderBottom: '1px solid #00000033', display: 'flex'}}>
                            <Typography variant="h6" component="p">Shipping:</Typography>
                            <Typography variant="h6" component="p" sx={{ ml: 'auto'}}>Free</Typography>
                        </Box>
                        <Box sx={{m: '20px', display: 'flex'}}>
                            <Typography variant="h6" component="p">Total:</Typography>
                            <Typography variant="h6" component="p" sx={{ ml: 'auto'}}>
                                ${(cartItems.reduce((acc, item) => acc + Number(item.quant * (item.price - (item.price * (item.disc || 0) / 100))),0)).toFixed(2)}
                            </Typography>
                        </Box>
                        <Box sx={{m: '20px 0'}}>
                            <Button size="large" variant="contained" color="error" href="/home/cart/checkout"
                                sx={{fontWeight: 'bold', width: '200px', textTransform: 'capitalize', display: 'block', m: 'auto'}}>
                                procees to checkout
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </TableContainer>
            <Footer />
            
        </div>
    )
}
