import { Grid2, TextField, Button } from "@mui/material";
import { useState } from "react";
import Garden from '../assets/garden.jpg'
import { AiOutlineEye } from "react-icons/ai";
import { IoEyeOff } from "react-icons/io5";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
// 21:31
export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })


    const { name, email, password, password2 } = formData;

    const changeHandler = (e) => {


    }
    return (
        <div className="h-[92vh] flex justify-center items-center ">
            <div className="w-[50%] h-full">
                <img src={Garden} className="w-full h-full object-cover" alt="Garden" />
            </div>
            <form className="w-[50%] h-auto p-10 rounded-lg">
                <Grid2 container spacing={2}>
                    {/* <Grid2 size={12}>
                        <h1 className="font-medium text-2xl">TaskManager Register</h1>
                    </Grid2> */}
                    <Grid2 size={12} >
                        <TextField name="name" value={name} onChange={changeHandler} fullWidth id="outlined-basic" color="black" className="text-black" label="Name" variant="outlined" />
                    </Grid2>
                    <Grid2 size={12} >
                        <TextField name="email" value={email} onChange={changeHandler} fullWidth id="outlined-basic" color="black" className="text-black" label="Email" variant="outlined" />
                    </Grid2>
                    <Grid2 size={12} >
                        <FormControl fullWidth variant="outlined">
                            <InputLabel fullWidth htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput fullWidth
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end" fullWidth>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <AiOutlineEye /> : <IoEyeOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid2>
                    <Grid2 size={12} >
                        <FormControl fullWidth variant="outlined">
                            <InputLabel fullWidth htmlFor="outlined-adornment-password">Re-Password</InputLabel>
                            <OutlinedInput fullWidth
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end" fullWidth>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <AiOutlineEye /> : <IoEyeOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Re-Password"
                            />
                        </FormControl>
                    </Grid2>
                    <Grid2 size={12} >
                        <Button color="warning" fullWidth variant="contained">Register</Button>
                    </Grid2>
                </Grid2>
            </form>
        </div >
    )
}
