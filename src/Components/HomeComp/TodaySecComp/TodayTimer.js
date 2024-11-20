import React, { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function TodayTimer({duration}) {
    const [time, setTime] = useState(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
            
        }, 1000); 
    },[time]);
    
    const days = (time) => {
        return parseInt(Math.floor(time / 60 / 60 / 24));
    }
    const hours = (time) => {
        return parseInt(Math.floor(time / 60 / 60)) % 24;
    }
    const minutes = (time) => {
        return parseInt(Math.floor(time / 60)) % 60;
    }
    const seconds = (time) => {
        return parseInt(time % 60);
    }
        
    return (
        <Box sx={{ m: {xs: '0 1%', md: '0 5% 0 10%'}}}>
            <Grid container>
                <Grid size={{xs: 12, md: 4}} sx={{textAlign: "right"}}>
                    <TextField
                        id="standard-read-only-input"
                        label=" "
                        defaultValue="Flash Sales"
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "40px", fontWeight: "bold"} }}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 4}} sx={{textAlign: "center"}}>
                    <TextField
                        id="standard-read-only-input"
                        label={<Typography sx={{ fontSize: "20px", fontWeight: "bold"}} component="h3"> Days </Typography>}
                        value = {`0${days(time)}`}
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "28px", fontWeight: "bold", width: '40px'} }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label=' '
                        value = ':'
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "28px", fontWeight: "bold", color: 'red', width: '20px'} }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label={<Typography sx={{ fontSize: "20px", fontWeight: "bold"}} component="h3"> Hours </Typography>}
                        value = {hours(time)}
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "28px", fontWeight: "bold", width: '50px'} }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label=' '
                        value = ':'
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "28px", fontWeight: "bold", color: 'red', width: '20px'} }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label={<Typography sx={{ fontSize: "20px", fontWeight: "bold"}} component="h3"> Minutes </Typography>}
                        value = {minutes(time)}
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "28px", fontWeight: "bold", width: '60px'} }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label=' '
                        value = ':'
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "28px", fontWeight: "bold", color: 'red', width: '20px'} }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label={<Typography sx={{ fontSize: "20px", fontWeight: "bold"}} component="h3"> Seconds </Typography>}
                        value = {seconds(time)}
                        variant="standard"
                        slotProps={{
                            input: {
                            readOnly: true,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        inputProps={{ style: { fontSize: "28px", fontWeight: "bold", width: '70px'} }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
