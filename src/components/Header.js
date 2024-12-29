import React from "react";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import { BiLogIn } from "react-icons/bi";
import useMediaQuery from '@mui/material/useMediaQuery';
import { MdOutlineManageAccounts } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { toast } from "react-toastify";
import { logout, reset } from '../features/auth/authSlice'


// infinity
export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    const matches = useMediaQuery('(min-width:900px)');
    function onLogout() {
        dispatch(logout()); // Logout action
        dispatch(reset()); // Reset action

        setTimeout(() => {
            navigate('/login'); // Navigate directly
        }, 1000);

        toast.success("Logged out successfully", { autoClose: 1000, });
    }
    return (
        <header className="flex justify-around items-center p-2">
            <UseAnimations animation={github} size={45} />
            <ul className="flex gap-7 items-center text-xl font-normal">
                {
                    user ? <>
                        <button
                            onClick={onLogout}
                            className="text-black hover:text-blue-600 transition-all cursor-pointer flex items-center gap-1"
                        >
                            <TbLogout2 />
                            LOGOUT
                        </button>
                    </> : <>     <Link
                        to={"/login"}
                        className="text-black hover:text-blue-600 transition-all cursor-pointer flex items-center gap-1"
                    >
                        <BiLogIn />
                        LOGIN
                    </Link>
                        <Link
                            to={"/register"}
                            className="text-black hover:text-blue-600 transition-all cursor-pointer flex items-center gap-1"
                        >
                            <MdOutlineManageAccounts />
                            REGISTER
                        </Link></>
                }
            </ul>
        </header>
    );
}
