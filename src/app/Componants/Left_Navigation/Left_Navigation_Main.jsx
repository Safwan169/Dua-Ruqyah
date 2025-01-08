import React from 'react'
import LeftNavigatinBigDevice from './LeftNavigatinBigDevice'
import BottomNavbar from './SmallDeviceNavbar/BottomNavbar'

const Left_Navigation_Main = () => {
  return (
    <div>
        <LeftNavigatinBigDevice/>
      <div className="block  xl:hidden ">
        <BottomNavbar/>
      </div>
    </div>
  )
}

export default Left_Navigation_Main
