import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCategories} from '../../rtk/slices/CategorySlice';
import Link from '@mui/material/Link';

export default function Category() {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    },[])
    const [count, setCount] = useState(0);
    const max = 6;
    function showPrevCategory() {
        if (count < categories.length && count > 0) {
            setCount(count - 1)
        } else {
            setCount(categories.length - 1)
        }
    }
    function showNextCategory() {
        if (count < categories.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    }
    return (
        <Box sx={{m: {xs: '0', md: '0 10%'}}}>
            <Box sx={{'&:hover': {
                    border: '2px solid blue',
                  },}}>
                <h1 style={{color: 'red', fontSize: '25px', fontWeight: 'bold', padding: '10px'}}>
                    <span className='today-title'></span>
                    <span>Categories</span>
                </h1>
                <Typography variant='h2' component='span'>Browse By Category</Typography>
                <Box sx={{float: 'right', mr: {xs: '10px', md: '100px'}, mt:'30px'}}>
                    <Button sx={{color: 'black'}} variant="text" onClick={(e) => {
                        e.preventDefault();
                        showPrevCategory()}}>
                        <ArrowBackIcon sx={{marginRight: '20px'}}/>
                    </Button>
                    <Button sx={{color: 'black'}} variant="text" onClick={(e) => {
                        e.preventDefault();
                        showNextCategory()}}>
                        <ArrowForwardIcon />
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexGrow: '1', mt: '40px'}}>
                    {categories.map((category, index) => (index >= count && index < (count + max) &&
                    <Link href={`/home/categoryProducts/${category.id}`} color='inherit' underline="none" key={category.id} >
                        <Card 
                        sx={{ minWidth: 228, height: 'auto', m: '10px', border: '1px solid gray', '&:hover,&.Mui-focusVisible': {backgroundColor: 'red', color: 'white'},}} >
                            <CardMedia>
                                <img src={category.image} alt={category.name} width='80%' height='auto' style={{display: 'block', margin: 'auto'}} />
                            </CardMedia>
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="body1" component="div" sx={{fontSize: '16px', fontWeight: 'bold'}}>
                                    {category.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                    ))}
                </Box>
            </Box>
            
        </Box>
    )
}
