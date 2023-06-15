
import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import { HiChat } from 'react-icons/hi'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/twitter',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/profile/1',
            icon: FaUser
        },
        {
            label: 'Message',
            href: '/conversations',
            icon: HiChat
        }
    ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6' >
        <div className='flex flex-col items-end' >
            <div className='space-y-2 lg:w-[230px]' >
                <SidebarLogo/>
                {items.map((item) => {
                    return (
                        <SidebarItem
                            key = {item.label}
                            href = {item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Sidebar