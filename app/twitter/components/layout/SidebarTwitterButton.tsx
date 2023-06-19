'use client'

import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { FaFeather } from 'react-icons/fa'


interface SidebarTwitterButtonProps {
    currentUser: User| null;
}

const SidebarTwitterButton:React.FC<SidebarTwitterButtonProps> = ({currentUser}) => {
    const router = useRouter()

    const onClick = useCallback(() => {
        if(!currentUser){
            router.push('/')

        }
        router.push('/twitter')

    },[])
  return (
    <div onClick={onClick} className=''  >
        <div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer' >
            <FaFeather size={24} color='white' />
        </div>
        <div className='mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition ' >
            <p className=' text-center font-semibold text-white text-[20px]' >Tweet</p>
        </div>
    </div>
  )
}

export default SidebarTwitterButton