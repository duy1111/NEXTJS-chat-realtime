import { User } from '@prisma/client'
import React from 'react'
import Avatar from '../Avatar'
import Image from 'next/image'
import { SafeUser } from '@/app/types'
interface UserHeroProps {
    user: SafeUser | null
}
const UserHero:React.FC<UserHeroProps> = ({user}) => {
    
  return (
    <div>
        <div className='bg-neutral-700 h-44 relative' >
            {user?.coverImage && (
                <Image
                    src={user?.coverImage}
                    fill
                    alt='Cover Image'
                    style={{
                        objectFit:'cover'
                    }}
                />
            )}
            <div className=' absolute -bottom-16 left-4' >
                <Avatar
                    isLarge
                    hasBorder
                    data={user}
                />
            </div>
        </div>
    </div>
  )
}

export default UserHero