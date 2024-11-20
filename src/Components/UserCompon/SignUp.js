import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import signUpImg from '../images/signup-img.png';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Footer from '../Footer';
import Root from '../Root';
import Button from '@mui/material/Button';
import googleIcon from '../images/googleIcon.png';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import {useDispatch, useSelector} from 'react-redux';
import {submitForm} from '../../rtk/slices/SignupSlice';
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const [userData, setUserData] = useState({
        id: usersData.length > 0? usersData.length + 1: 1,
        name: '',
        email: '',
        password: '',
        status: 'NEW'
    })
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        if (userData.name.trim() && userData.email.trim() && userData.password.trim()) {
            const emailNotFound = usersData.length > 0? usersData.find(fn => fn.email == userData.email): "";
            if (emailNotFound) {
                alert('This email already exists');
            } else {
                dispatch(submitForm(userData));
                setUserData({
                    id: usersData.length + 1,
                    name: '',
                    email: '',
                    password: '',
                    status: 'NEW'
                });
                navigate('/login')
            }
        } else {
            alert('You must fill all input fields');
        }
    }
    const handleChange = (e) => {
        const{name, value} = e.target;
        setUserData(prevState => ({
            ...prevState, [name]: value
        }));
    };
    return (
        <div style={{}}>
        <Root />
            <Grid container sx={{mt: '20px'}}>
                <Grid size={{md: 6}}>
                    <img src={signUpImg} alt="signUpImg" width="100%" />
                </Grid>
                <Grid size={{md: 4}} sx={{ml: {xs: '5%', md: '10%'}, mr: '5%'}}>
                    <Box sx={{mb: '30px'}}>
                        <Typography variant="h3" component="h2" sx={{mb: '10px', fontWeight: '500'}} >
                            Create an account
                        </Typography>
                        <Typography variant="h6" component="p" sx={{fontWeight: '400'}} >
                            Enter your details below
                        </Typography>
                    </Box>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                        noValidate
                        autoComplete="off"
                        >
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField label="Name" variant="filled" name= 'name'
                                value= {userData.name} onChange={handleChange} />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField label="Email or Phone Number" variant="filled" name= 'email'
                                value= {userData.email} onChange={handleChange} />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField label="Password" variant="filled" type='password' name= 'password'
                                value= {userData.password} onChange={handleChange} />
                        </FormControl>
                        <Button variant="contained" color="error" 
                            sx={{width: '400px', display: 'block', textTransform: 'capitalize', fontWeight: '400', m: '20px 0', fontSize: '18px'}}
                            onClick={handleClick}
                            >Create Account
                        </Button>
                        <Button variant="outlined" sx={{border: '1px solid #00000099', borderRadius: '5px', fontWeight: '400', fontSize: '18px', textTransform: 'capitalize'}}>
                            <img src={googleIcon} alt='googleIcon' height='24px' width= '24px' />
                            <Typography variant="h6" component="p" sx={{ml: '20px', color: 'black'}}>Sign up with Google</Typography>
                        </Button>
                        <Button variant="text" sx={{width: '100%',textTransform: 'capitalize'}}>
                            <Typography variant="h6" component="span" sx={{mr: '20px', color: 'black', fontWeight: '400'}}>Already have account?</Typography>
                            <Link href="/login" sx={{color: 'black', fontSize: '18px'}}>Log in</Link>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}
