
import React from 'react'
import { BsTwitter } from 'react-icons/bs'

const SidebarLogo = () => {
    
  return (
    <div
     
        className='rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-30 cursor-pointer translate '
    >
        <BsTwitter size={28} color='blue' />
    </div>
  )
}

export default SidebarLogo