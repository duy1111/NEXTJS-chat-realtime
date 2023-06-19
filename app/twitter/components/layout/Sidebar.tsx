'use client'
import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import { HiChat } from 'react-icons/hi'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import { User } from '@prisma/client'
import SidebarTwitterButton from './SidebarTwitterButton'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'next-auth/react'

interface SidebarProps {
    currentUser : User | null
}
const Sidebar = ({currentUser}:SidebarProps) => {
    const items = [
        {
            label: 'Home',
            href: '/twitter',
            icon: BsHouseFill,
            auth: false
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill,
            auth: true
        },
        {
            label: 'Profile',
            href: '/profile/1',
            icon: FaUser,
            auth: true

        },
        {
            label: 'Message',
            href: '/conversations',
            icon: HiChat,
            auth: true

        }
    ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6' >
        <div className='flex flex-col items-end' >
            <div className='space-y-2 lg:w-[230px]' >
                <SidebarLogo currentUser ={currentUser} />
                {items.map((item) => {
                    return (
                        <SidebarItem
                            key = {item.label}
                            href = {item.href}
                            label={item.label}
                            icon={item.icon}
                            currentUser={currentUser}
                            auth={item.auth}
                        />
                    )
                })}
               {currentUser && <SidebarItem onClick={() => signOut()} label={"Logout"} icon={BiLogOut}/>}
                <SidebarTwitterButton currentUser ={currentUser} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar