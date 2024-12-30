import { Grid2, TextField } from "@mui/material";
import { use, useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoEyeOff } from "react-icons/io5";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from '../features/auth/authSlice'
import Spinner from "../components/Spinner";

const color = red[500];

// 21:31
export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password } = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { user, isLoading, isError, message, isSuccess } = useSelector((state) => state.auth)


    useEffect(() => {
        if (isError) {
            toast.error(message, { autoClose: 1000, })
        }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, navigate, dispatch])

    const changeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };



    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password
        }
        dispatch(register(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="h-[91vh]  flex justify-center items-center ">
            <form className="md:w-[40%] h-auto p-10 md:rounded-lg sm:w-full " onSubmit={onSubmit} >
                <Grid2 container spacing={2}>
                    {/* <Grid2 size={12}>
                        <h1 className="font-medium text-2xl">TaskManager Register</h1>
                    </Grid2> */}
                    <Grid2 size={12}>
                        <TextField
                            name="name"
                            value={name}
                            onChange={changeHandler}
                            fullWidth
                            id="outlined-basic"
                            color="black"
                            className="text-black"
                            label="Name"
                            variant="outlined"
                        />
                    </Grid2>
                    <Grid2 size={12}>
                        <TextField
                            name="email"
                            value={email}
                            onChange={changeHandler}
                            fullWidth
                            id="outlined-basic"
                            color="black"
                            className="text-black"
                            label="Email"
                            variant="outlined"
                        />
                    </Grid2>
                    <Grid2 size={12}>
                        <FormControl color="dark" className="text-black" fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                name="password"
                                value={password}
                                className="text-black"
                                onChange={changeHandler}
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment className="text-black" position="end" >
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
                    <Grid2 size={12}>
                        <button
                            fullWidth
                            className="bg-black w-full p-3 
                        rounded-xl text-xl uppercase font-bold 
                        transition-all text-white
                        active:opacity-25
                        "
                        >
                            Register
                        </button>
                    </Grid2>
                </Grid2>
            </form>
        </div>
    );
}
