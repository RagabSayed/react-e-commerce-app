import React, {useState, useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone';
import { useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {useSelector, useDispatch} from 'react-redux';
import {editUserStatues} from '../rtk/slices/SignupSlice';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '22ch',
        '&:focus': {
          width: '28ch',
        },
      },
    },
  }));
  const SearchIconWrapper = styled('span')(({ theme }) => ({
    padding: theme.spacing(0, 2)
  }));

  export default function Root() {
    const [getWidth, setGetWidth] = useState(window.innerWidth);
    useEffect(() => {
        const changeWidth = () => {
            setGetWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
    }, [])
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const getWishlistItems = useSelector(state => state.wishlistItems? state.wishlistItems.wishlistItems: []);
    const wishlistItems = userLogedin? getWishlistItems.filter(item => item.userId == userLogedin.id): [];
    const getCartItems = useSelector(state => state.cartItems? state.cartItems.cartItems: []);
    const cartItems = userLogedin? getCartItems.filter(item => item.userId == userLogedin.id): [];
    const cartQuantity = cartItems.length > 0? cartItems.reduce((acc, item) => acc + Number(item.quant), 0): 0;
    const location = useLocation();
    const locPath = location.pathname;
    const navItems = ['home', "contact", 'about', 'sign up'];
    const handleLogout = () => {
        const xx = {...userLogedin, status: 'LOGED OUT'};
        dispatch(editUserStatues(xx));
        window.location.reload('home');
        }
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorMenu, setAnchorMenu] = useState(null);
    const open = Boolean(anchorMenu);
    const handleClickMenu = (event) => {
        setAnchorMenu(event.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorMenu(null)
    }
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
          <ThemeProvider theme={darkTheme}>
          <AppBar sx={{paddingTop: '10px'}}>
            <Box sx={{display: 'flex', flexGrow: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <Box>
                    <Typography
                        variant="body2"
                        noWrap
                        component="p"
                        sx={{textAlign: 'right', paddingTop: '10px'}}
                    >
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </Typography>
                </Box>
                <Box>
                    <ListItemButton >
                        <ListItemText primary="ShopNow" />
                    </ListItemButton>
              </Box>
              <Box>
                <FormControl size='small' fullWidth sx={{border: 0}}>
                    <Select
                    defaultValue={1} sx={{border: '1px black solid'}}
                    >
                        <MenuItem value={1}>English</MenuItem>
                        <MenuItem value={2}>Arabic</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            </Box>
          </AppBar>
          </ThemeProvider>
          
            <AppBar color="default" position="static" sx={{mt: `${getWidth>768? '70px': '100px'}`, p: '10px 0'}}>
                <Box sx={{ m: `${getWidth>768? '0 5%': '0'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{display: 'flex'}}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="h2"
                        >
                            Exclusive
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        {navItems.map((item) => (
                            <Link key={item} href={`/${item}`} color='#00000080' underline='hover' 
                                sx={{marginLeft: '20px', fontSize: '16px', fontWeight: '500', textTransform: 'capitalize','&:hover':{color: 'black'}}}
                                >{item}
                            </Link>
                            
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <Button color='inherit' sx={{ml:'10px'}}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickMenu}
                        >
                            <MenuIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorMenu}
                            open={open}
                            onClose={handleCloseMenu}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {navItems.map((item) => (
                            <MenuItem onClick={handleCloseMenu} key={item}>
                                <Link color='inherit' href='/home' key={item} href={`/${item}`} color='#00000080' underline='hover' 
                                    sx={{p: '5px 10px', fontSize: '16px', fontWeight: '500', textTransform: 'capitalize','&:hover':{color: 'black'}}}>
                                    {item}
                                </Link>
                            </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box />
                    <Box sx={{display: 'flex', flexWrap: 'nowrap'}} > 
                        <Search sx={{display: { xs: 'none', md: 'flex' }}}>
                            <StyledInputBase
                                placeholder="What are you looking for?"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <SearchIconWrapper sx={{mt: '10px'}}>
                                <SearchIcon />
                            </SearchIconWrapper>
                        </Search>
                        <Box sx={{display: `${locPath == '/sign%20up' || locPath == '/login'? 'none': 'flex'}`}}>
                            <IconButton size="large" color="inherit">
                                <Link  color="inherit" href='/home/wishlist'>
                                    <Badge badgeContent={userLogedin && wishlistItems.length} color="error">
                                        <FavoriteBorderIcon />
                                    </Badge>
                                </Link>
                            </IconButton>
                            <IconButton size="large" color="inherit" >
                                <Link  color="inherit" href= '/home/cart'>
                                    <Badge badgeContent={userLogedin && cartQuantity} color="error">
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </Link>
                            </IconButton>
                            <Box component='div' style={{display: `${userLogedin? 'flex': 'none'}`}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu sx={
                                        { mt: "1px", "& .MuiMenu-paper": 
                                            { backgroundColor: "#eb0b0b0a", backdropFilter: 'blur(75px)', color: `${locPath=='/home' || locPath=='/'? 'white': 'inherit'}` }, ml: '-6%'
                                        }
                                    }
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Typography component='span' sx={{padding: '10px'}}>{<AccountCircle />}</Typography>
                                        <Link color='inherit' href='/home/myaccount'>
                                            <Typography component='span' variant='body1' sx={{padding: '10px'}}>Manage My Account</Typography>
                                        </Link>
                                        
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Typography component='span' sx={{padding: '10px'}}>{<ContentPasteTwoToneIcon />}</Typography>
                                        <Typography component='span' variant='body1' sx={{padding: '10px'}}>My Order</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Typography component='span' sx={{padding: '10px'}}>{<HighlightOffRoundedIcon />}</Typography>
                                        <Typography component='span' variant='body1' sx={{padding: '10px'}}>My Cancellations</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Typography component='span' sx={{padding: '10px'}}>{<StarOutlineIcon />}</Typography>
                                        <Typography component='span' variant='body1' sx={{padding: '10px'}}>My Reviews</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <Typography component='span' sx={{padding: '10px', direction: 'right'}}>{<LogoutIcon />}</Typography>
                                        <Typography component='span' variant='body1' sx={{padding: '10px'}}>Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AppBar>
        </div>
    )
}

