import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar/>
      <Outlet/>
      <Rightbar/>
    </div>
  )
}

export default Home
