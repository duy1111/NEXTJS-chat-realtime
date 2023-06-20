import { User } from '@prisma/client'
import React, { useMemo } from 'react'
import { format } from 'date-fns'
import Button from '../Button'
import { BiCalendar } from 'react-icons/bi'
import { SafeUser } from '@/app/types'
import useEditModal from '@/app/hooks/useEditModal'

interface UserBioProps {
    user: SafeUser | null;
    currentUser: User | null
}

const UserBio:React.FC<UserBioProps> = ({user,currentUser}) => {

    const editModal = useEditModal()
    const createdAt = useMemo(() => {
        if(!user?.createdAt){
            return null;
        }
        return format(new Date(user.createdAt),'MMMM yyyy');
    },[user?.createdAt])   
  return (
    <div className=' border-b  border-neutral-800 pb-4' >
        <div className='flex justify-end p-2' >
            {currentUser?.id === user?.id ? (
                <Button secondary label='Edit' onClick={editModal.onOpen} />
            ):(
                <Button onClick={() => {}} secondary label='Follow' />
            )}
        </div>
        <div className='mt-8 px-4' >
            <div className='flex flex-col' >
                <p className='text-white text-2xl font-semibold ' >
                    {user?.name}
                </p>
                <p className='text-md text-neutral-500 ' >
                    @{user?.email}
                </p>
            </div>
            <div className='flex flex-col mt-4 ' >
                <p className='text-white' >
                    {user?.bio}
                </p>
                <div
                    className='flex flex-row items-center gap-2 mt-4 text-neutral-500'
                >
                    <BiCalendar size={24} />
                    <p>
                        Joined {createdAt}
                    </p>
                </div>
            </div>
            <div className='flex flex-row items-center mt-4 gap-6' >
                <div className='flex flex-row items-center gap-1' >
                    <p className='text-white' >{user?.followingIds?.length}</p>
                    <p className='text-neutral-500' >Following</p>
                </div>
                <div className='flex flex-row items-center gap-1' >
                    <p className='text-white' >{user?.followersCount}</p>
                    <p className='text-neutral-500' >Followers</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default UserBio