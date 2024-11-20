import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

export default function GoToTop() {
    const [show, setShow] = useState(false)
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShow(true);
        } else {
            setShow(false);
        }
    })
    const handelClick = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div>
            <IconButton onClick={handelClick} className= 'to-top-btn' sx={{display:`${show? 'block': 'none'}`, position: 'fixed',
                bottom: '30%', right: '50px', zIndex: 9900, color: 'black', backgroundColor: 'white', height: '50px', width: '50px', 
                borderRadius: '0', '&:hover': {color: 'black', backgroundColor: 'white'}}}>
                <ArrowUpwardSharpIcon sx={{fontSize: '35px'}}/>
               
            </IconButton>
        </div>
    )
}
