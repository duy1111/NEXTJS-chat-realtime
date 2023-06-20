'use client'
import React from 'react'

import Avatar from '../Avatar'
import getUsers from '@/app/actions/getUsers'
import { User } from '@prisma/client';

interface FollowBarProps {
  users : User[];
}
const FollowBar: React.FC<FollowBarProps>= async({users =[]}) => {
  
  



  return (
    <div className='px-6 py-4 hidden lg:block' >
        
        <div className=' bg-neutral-800 rounded-xl p-4  ' >
            <h2 className='text-white text-xl font-semibold' >Who to Follow</h2>
            <div className='flex flex-col gap-6 mt-4' >
              
              {users.map((item) => {
                
                  return  (<div key={item.id} className='flex flex-row gap-4 ' >
                    <Avatar data={item}  />
                    <div className='flex flex-col ' >
                      <p className='text-white font-semibold text-sm' >
                        {item.name}
                      </p>  
                      <p className='text-neutral-400 text-sm' >
                        @{item.name}
                      </p>
                    </div>
                  </div>)
                })}
            </div>
        </div>
    </div>
  )
}

export default FollowBar