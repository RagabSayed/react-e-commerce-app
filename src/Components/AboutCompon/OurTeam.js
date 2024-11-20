import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {teamData} from './TeamData';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

export default function OurTeam() {
    const [getWidth, setGetWidth] = useState(window.innerWidth);
    useEffect(() => {
        const changeWidth = () => {
            setGetWidth(window.innerWidth);
            window.location.reload();
        }
        window.addEventListener('resize', changeWidth);
    }, []);
    const showElementNum = getWidth > 768? 3: 2;
    const getTeamData = teamData? teamData: [];
    const [count, setCount] = useState({
        min: 6,
        max: showElementNum == 3? 9: 8
    });
    const handleChange = (e) => {
        const value = Number(e.target.value);
         setCount({
            min: value - showElementNum,
            max: value
        });
    }
    const getControlNum = getTeamData.map((person, index)=> (index + 1) % showElementNum == 0 && index + 1).filter(item => item != false);
    if (getTeamData.length % showElementNum != 0) {
        getControlNum.push(getControlNum[getControlNum.length - 1] + showElementNum);
    }
    return (
        <div style={{m: {xs: '50px 2%', md: '50px 10%'}}}>
            <Box sx={{display: 'flex'}}>
                {getTeamData.map(person => (
                <Card sx={{ width: `${getWidth > 768? '30%': '50%'}`, height: 'auto', m: {xs: '0', md: '0 1.5%'}, display: `${person.id > count.min && person.id <= count.max? 'block': 'none'}`}} key={person.id}>
                    <CardMedia>
                        <img src={person.image} alt={person.name} width='80%' height='400px' />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h4">
                            {person.name}
                        </Typography>
                        <Typography variant="h6" component="p" sx={{ color: 'text.secondary' }}>
                            {person.job}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </CardActions>
                </Card>
                ))}
            </Box>
            <FormControl fullWidth>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleChange}
                    defaultValue= {showElementNum == 3? 9: 8}
                    sx={{m: 'auto'}}
                >
                    {getControlNum.map(item => (item &&
                        <FormControlLabel value={item} control={<Radio color= 'error' />} label="" key={item} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
}