import { Grid2, TextField, Button } from "@mui/material";

// 17:53
export default function Register() {
    window.addEventListener('resize', function () {
        let screenWidth = window.innerWidth;
        // let screenHeight = window.innerHeight;
        // Perform actions based on the new screen size
        // console.log("Screen width:", screenWidth);
        // console.log("Screen height:", screenHeight);
        // Example: Update content based on screen size
        if (screenWidth < 768) {
            // Adjust layout for smaller screens
           
        } else {
            // Adjust layout for larger screens
            console.log("Large screen layout");
        }
    });
    return (
        <div className="h-screen flex justify-center items-center flex-col ">
            <h1 className="font-medium text-2xl">TaskManager Register</h1>
            <div className="w-[50%] h-auto p-2 rounded-lg ">
                <Grid2 container spacing={2}>
                    <Grid2 size={6} >
                        <TextField fullWidth id="outlined-basic" color="black" className="text-black" label="Email" variant="outlined" />
                    </Grid2>
                    <Grid2 size={6} >
                        <TextField fullWidth id="outlined-basic" color="black" className="text-black" label="Email" variant="outlined" />
                    </Grid2>
                    <Grid2 size={12} >
                        <div>

                            <TextField fullWidth id="outlined-basic"
                                color="black" className="outline-none border-none"
                                label="Password" variant="outlined" />
                        </div>
                    </Grid2>
                    <Grid2 size={12} >
                        <Button fullWidth variant="contained">Register</Button>
                    </Grid2>
                </Grid2>
            </div>
        </div >
    )
}
