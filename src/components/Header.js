import React from "react";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
// infinity
export default function Header() {
    return (
        <header className="flex justify-around items-center p-2">
            <UseAnimations animation={github} size={45} />
            <ul className="flex gap-7 items-center text-xl font-normal">
                <Link
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
                </Link>
                {/* <Link to={"/register"} className='text-black hover:text-blue-600 transition-all cursor-pointer'>LOGOUT</Link> */}
            </ul>
        </header>
    );
}
