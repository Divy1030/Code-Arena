import React from 'react'
import Search from './Search'

function Header() {
  return (
    <>
      <div className="text-4xl font-semibold text-white">Contest Leaderboard</div>
      <div className="flex justify-between opacity-90 font-light mt-2">
        <p>1000 Total Participants</p>
        <p>Weekly Contest #124</p>
      </div>
      <Search />
    </>
  )
}

export default Header