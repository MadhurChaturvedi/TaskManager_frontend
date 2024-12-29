// const [mediaQry, setMediaQry] = useState(false);
// window.addEventListener('resize', function () {
//     let screenWidth = window.innerWidth;
//     // let screenHeight = window.innerHeight;
//     // Perform actions based on the new screen size
//     // console.log("Screen width:", screenWidth);
//     // console.log("Screen height:", screenHeight);
//     // Example: Update content based on screen size
//     if (screenWidth > 900) {
//         // Adjust layout for smaller screens
//         setMediaQry(false)

//     } else {
//         // Adjust layout for larger screens
//         // console.log("Large screen layout");
//         setMediaQry(true)
//     }
// });




/*
import { Grid2, TextField } from "@mui/material";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoEyeOff } from "react-icons/io5";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({}); // Track validation errors

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    const changeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" })); // Clear errors on change
    };

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }
        if (password !== password2) {
            newErrors.password2 = "Passwords do not match.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
        }
    };

    return (
        <div className="h-[91vh] flex justify-center items-center">
            <form
                className="w-[50%] h-auto p-10 rounded-lg"
                onSubmit={handleSubmit}
            >
                <Grid2 container spacing={2}>
                    <Grid2 size={12}>
                        <TextField
                            name="email"
                            value={email}
                            onChange={changeHandler}
                            fullWidth
                            id="outlined-basic"
                            className="text-black"
                            label="Email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid2>
                    <Grid2 size={12}>
                        <FormControl
                            className="text-black"
                            fullWidth
                            variant="outlined"
                            error={!!errors.password}
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                name="password"
                                value={password}
                                onChange={changeHandler}
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
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
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}
                    </Grid2>
                    <Grid2 size={12}>
                        <TextField
                            name="password2"
                            value={password2}
                            onChange={changeHandler}
                            fullWidth
                            id="outlined-basic"
                            className="text-black"
                            label="Confirm Password"
                            variant="outlined"
                            error={!!errors.password2}
                            helperText={errors.password2}
                        />
                    </Grid2>
                    <Grid2 size={12}>
                        <button
                            type="submit"
                            className="bg-black w-full p-3 rounded-xl text-xl uppercase font-bold transition-all text-white active:opacity-25"
                        >
                            Register
                        </button>
                    </Grid2>
                </Grid2>
            </form>
        </div>
    );
}

*/