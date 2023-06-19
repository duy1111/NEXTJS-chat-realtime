'use client'
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons';


interface  SidebarItemProps {
    label : string;
    href ?: string | undefined;
    icon : IconType;
    onClick?: () => void;
    currentUser ?: User | null;

    auth ?: boolean;
}


const SidebarItem:React.FC<SidebarItemProps> = ({label,href,icon:Icon ,onClick,currentUser,auth}) => {
  const router = useRouter()
  const handleClick = useCallback(() => {
    if(onClick){
      router.replace('/')

      return onClick

    }
    if(auth && currentUser){
      router.push('/')
    }
    if(href){
      router.push(href)

    }
  },[href,onClick,router,currentUser,auth])
  return (
    <div  onClick={handleClick} className="flex flex-row items-center">
      <div className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      ">
        <Icon size={28} color="white" />
        {/* {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null} */}
      </div>
      <div className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      ">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">
          {label}
        </p>
        {/* {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null} */}
      </div>
    </div>
  )
}

export default SidebarItem