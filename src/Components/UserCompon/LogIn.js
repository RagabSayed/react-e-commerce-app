import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import signUpImg from '../images/signup-img.png';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Footer from '../Footer';
import Root from '../Root';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import {useNavigate} from "react-router-dom";
import {editUserStatues} from '../../rtk/slices/SignupSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function LogIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const handleClick = (e) => {
        e.preventDefault();
        if (userLogedin) {
            alert('There is already somebody logged in, He must logged out till you can login')
        } else {
            if (loginData.email && loginData.password) {
                let userFound = usersData.length > 0? usersData.find(fn => fn.email == loginData.email): "";
                if (userFound) {
                    if (userFound.email == loginData.email && userFound.password == loginData.password) {
                        userFound = {...userFound, status: 'LOGED IN'};
                        dispatch(editUserStatues(userFound));
                        navigate('/home');
                        alert(`Welcom  ${userFound.name}`);
                    } else {
                        alert('Email or Password is incorrect');
                    }
                } else {
                    alert('Input data is invalid, if you do not register befor, you must sign up first');
                }
            } else {
                alert('You must fill all input fields');
            }
        }
        
    }
    const handleChange = (e) => {
        const{name, value} = e.target;
        setLoginData(prevState => ({
            ...prevState, [name]: value.trim()
        }));
    };
    return (
        <div style={{}}>
        <Root />
            <Grid container sx={{mt: '20px'}}>
                <Grid size={{md: 6}}>
                    <img src={signUpImg} alt="signUpImg" width="100%" />
                </Grid>
                <Grid size={{md: 4}} sx={{ml: {xs: '5%', md: '10%'}, mr: '5%', mt: {sx: '-50px', md: '100px'}}}>
                    <Box sx={{mb: '30px'}}>
                        <Typography variant="h3" component="h2" sx={{mb: '10px', fontWeight: '500'}} >
                            Log in to Exclusive
                        </Typography>
                        <Typography variant="h6" component="p" sx={{fontWeight: '400'}} >
                            Enter your details below
                        </Typography>
                    </Box>
                    <Box
                        component="form"
                        // sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
                        noValidate
                        autoComplete="off"
                        >
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField label="Email or Phone Number" variant="filled" name= 'email'
                                value= {loginData.email} onChange={handleChange} />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField label="Password" variant="filled" type='password' name= 'password'
                                value= {loginData.password} onChange={handleChange} />
                        </FormControl>
                        <Button variant="contained" color="error" size='large'
                            sx={{width: '150px', textTransform: 'capitalize', fontWeight: '400', m: '20px 0', fontSize: '18px'}}
                            onClick={handleClick}
                            >Log In
                        </Button>
                        <Link href="#"  underline='hover'
                            sx={{color: 'red', fontSize: '18px', fontWeight: '400', display: 'inline-block', ml: '50%'}}
                            >Forget Password?
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}
