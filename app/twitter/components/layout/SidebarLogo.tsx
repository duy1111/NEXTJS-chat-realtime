'use client'
import { User } from '@prisma/client'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'

interface SidebarLogoProps {
  currentUser: User | null
}

const SidebarLogo:React.FC<SidebarLogoProps> = ({currentUser}) => {
    
  return (
    <div
     
        className='rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-30 cursor-pointer translate '
    >
        <BsTwitter size={28} color='blue' />
    </div>
  )
}

export default SidebarLogo