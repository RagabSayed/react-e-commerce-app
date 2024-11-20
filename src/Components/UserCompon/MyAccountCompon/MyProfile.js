import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../../rtk/slices/SignupSlice';

export default function MyProfile() {
    const usersData = useSelector(state => state.usersData? state.usersData.usersData: []);
    const userLogedin = usersData.find(user => user.status === 'LOGED IN');
    const [editUserData, setEditUserData] = useState({
        firstName: userLogedin.firstName || userLogedin.name,
        lastName: userLogedin.lastName,
        email: userLogedin.email,
        address: userLogedin.address,
        curPassword: '',
        newPassword: '',
        confNewPassword: ''
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const{name, value} = e.target;
        setEditUserData(prevState => ({
            ...prevState, [name]: value.trim()
        }));
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setEditUserData({
            firstName: userLogedin.firstName || userLogedin.name,
            lastName: userLogedin.lastName,
            email: userLogedin.email,
            address: userLogedin.address,
            curPassword: '',
            newPassword: '',
            confNewPassword: ''
        });
    }
    const usersWithoutEditedUser = usersData.filter((user) => user.email !== userLogedin.email);
    const handleSaveChange = (e) => {
        e.preventDefault();
        const emailCheck = usersWithoutEditedUser.find(user => user.email === editUserData.email);
        const currentPasswordCheck = () => {
            if(editUserData.newPassword.length > 0) {
                if( editUserData.curPassword === userLogedin.password){ return true} else{return false};
            }};
        const editPasswordCheck = editUserData.newPassword === editUserData.confNewPassword? true: false;
        if (emailCheck) {
            alert('This email has already existed');
        } else {
            if (currentPasswordCheck) {
                if (editPasswordCheck) {
                    const userEditingData = {
                        ...editUserData, password: editUserData.newPassword || userLogedin.password, status: userLogedin.status, 
                        id: userLogedin.id, name: editUserData.firstName + ' ' + editUserData.lastName
                    };
                    dispatch(editUser(userEditingData));
                    setEditUserData({
                        firstName: userLogedin.firstName || userLogedin.name,
                        lastName: userLogedin.lastName,
                        email: userLogedin.email,
                        address: userLogedin.address,
                        curPassword: '',
                        newPassword: '',
                        confNewPassword: ''
                    });
                } else {
                    alert('Confirm new password must look like new password')
                }
            } else {
                alert('Current password is invalid')
            }
            
        }
    };
    
    return (
        <div>
            <Typography variant='h5' component='h4' color='error' sx={{m: {xs: '30px 0', md: '30px 5%'}}}>Edit Your Profile</Typography>
            <FormGroup row sx={{m: {xs: '20px 0', md: '20px 5%'}}}>
                <TextField
                    name= 'firstName'
                    variant="standard"
                    label={<Typography variant="h6" component="p" sx={{fontWeight: '600', color: 'black'}}>First Name</Typography>}
                    // defaultValue={userLogedin.name? userLogedin.name: ''}
                    value={editUserData.firstName}
                    slotProps={{inputLabel: {shrink: true,},}}
                    InputProps={{ style: { color: "#00000080" }, disableUnderline: true, }}
                    sx={{width: '48%', mr: '4%', mb: '10px'}}
                    onChange={handleChange}
                />
                <TextField
                    name= 'lastName'
                    variant="standard"
                    label={<Typography variant="h6" component="p" sx={{fontWeight: '600', color: 'black'}}>Last Name</Typography>}
                    // defaultValue={userLogedin.lastName? userLogedin.lastName: ''}
                    value={editUserData.lastName}
                    slotProps={{inputLabel: {shrink: true,},}}
                    InputProps={{ style: { color: "#00000080" }, disableUnderline: true, }}
                    sx={{width: '48%', mb: '10px'}}
                    onChange={handleChange}
                />
                <TextField
                    name= 'email'
                    variant="standard"
                    type="email"
                    label={<Typography variant="h6" component="p" sx={{fontWeight: '600', color: 'black'}}>Email</Typography>}
                    // defaultValue={userLogedin.email? userLogedin.email: ''}
                    value={editUserData.email}
                    slotProps={{inputLabel: {shrink: true,},}}
                    InputProps={{ style: { color: "#00000080" }, disableUnderline: true, }}
                    sx={{width: '48%', mr: '4%', mb: '10px'}}
                    onChange={handleChange}
                />
                <TextField
                    name= 'address'
                    variant="standard"
                    label={<Typography variant="h6" component="p" sx={{fontWeight: '600', color: 'black'}}>Address</Typography>}
                    // defaultValue={userLogedin.address? userLogedin.address: ''}
                    value={editUserData.address}
                    slotProps={{inputLabel: {shrink: true,},}}
                    InputProps={{ style: { color: "#00000080" }, disableUnderline: true, }}
                    sx={{width: '48%', mb: '10px'}}
                    onChange={handleChange}
                />
                <Typography variant='h5' component='h4' sx={{m: '20px 0'}}>Password Changes</Typography>
                <TextField
                    name= 'curPassword'
                    value={editUserData.curPassword}
                    variant="standard"
                    type="password"
                    label= "Current Password"//{<Typography variant="h6" component="p" sx={{fontWeight: '600', color: 'black'}}>Current Password</Typography>}
                    InputProps={{ style: { color: "#00000080" }, disableUnderline: true, }}
                    sx={{width: '100%', mb: '10px'}}
                    onChange={handleChange}
                />
                <TextField
                    name= 'newPassword'
                    value={editUserData.newPassword}
                    variant="standard"
                    type="password"
                    label= "New Password"//{<Typography variant="h6" component="p" sx={{fontWeight: '600', color: 'black'}}>New Password</Typography>}
                    InputProps={{ style: { color: "#00000080" }, disableUnderline: true, }}
                    sx={{width: '100%', mb: '10px'}}
                    onChange={handleChange}
                />
                <TextField
                    name= 'confNewPassword'
                    value={editUserData.confNewPassword}
                    variant="standard"
                    type="password"
                    label= "Confirm New Password"//{<Typography variant="h6" component="p" sx={{fontWeight: '600', color: 'black'}}>Confirm New Password</Typography>}
                    InputProps={{ style: { color: "#00000080" }, disableUnderline: true, }}
                    sx={{width: '100%', mb: '10px'}}
                    onChange={handleChange}
                />
                <Box sx={{width: '100%', textAlign: 'right'}}>
                    <Button color='inherit' size="large" sx={{mr: '20px'}} onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" size="large" color="error" onClick={handleSaveChange}>Save Changes</Button>
                </Box>
            </FormGroup>
        </div>
    )
}
