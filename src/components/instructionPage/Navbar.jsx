import { Avatar } from '@mui/material'
import React from 'react'

function Navbar() {
    return (
        <>
            <div className="navbar bg-[#00072E] flex h-[4rem] px-10">
                <div className="logo text-white font-semibold text-2xl flex justify-center items-center mb-2">
                    <div className="">
                        <Avatar alt="CSI" src="https://www.csiakgec.in/images/logocsiCenter.png" sx={{ width: 50, height: 50 }} />
                    </div>
                    <p className='text-[1.3rem]'>CodeArena</p>
                </div>
                <div className="user">
                    <div className="profile"></div>
                    <div className="dropdown">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar