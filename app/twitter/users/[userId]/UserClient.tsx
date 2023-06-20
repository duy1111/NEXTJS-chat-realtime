'use client'
import React from 'react'
import Header from '../../components/Header'

import { User } from '@prisma/client'
import UserHero from '../../components/users/UserHero'
import UserBio from '../../components/users/UserBio'
import { SafeUser } from '@/app/types'

interface UserClientProps {
    user: SafeUser
    currentUser: User | null
}

const UserClient:React.FC<UserClientProps>= ({user,currentUser}) => {
    if(!user){
        return null
    }
   
  return (
    <>
        <Header
            showBackArrow 
            label={user.name || undefined }
        />
        <UserHero
            user={user}
        />
        <UserBio currentUser={currentUser} user={user} />

    </>
  )
}

export default UserClient