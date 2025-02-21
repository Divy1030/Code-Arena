import Navbar from '@/components/instructionPage/Navbar'
import Header from '@/components/LeaderPage/Header'
import React from 'react'

function LeaderBoardPage() {
    return (
        <>
            <Navbar />
            <div className="bg-[#0D1439] text-white px-5 md:px-[5%] sm:px-10">
                <Header />
            </div>
        </>
    )
}

export default LeaderBoardPage