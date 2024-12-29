import React from 'react'
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
export default function Spinner() {
    return (
        <div className='h-screen flex justify-center items-center '>
            {
                setTimeout(() => {
                    <UseAnimations animation={infinity} size={45} />
                }, [2000])
            }
        </div>
    )
}
