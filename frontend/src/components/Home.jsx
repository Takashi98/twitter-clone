import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'

const Home = () => {
  return (
    <div>
      <LeftSidebar/>
      <Feed/>
      <Rightbar/>
    </div>
  )
}

export default Home
