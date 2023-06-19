
import useUser from '@/app/hooks/useUser';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'

interface AvatarProps {
    userId : string;
    isLarge  ?: boolean;
    hasBorder ?: boolean;

}


const Avatar: React.FC<AvatarProps> = ({userId,isLarge,hasBorder}) => {
    const router = useRouter()
    const {data: fetchedUser} = useUser(userId)
    const useClick = useCallback ((event: any) => {
        event.stopPropagation();
        const url = `/twitter/users/${userId}`
        router.push(url)
    },[router,userId])
  return (
    <div className={`${hasBorder ? 'border-4 border-black': ''} ${isLarge ? 'h-32 ' : 'h-12'} ${isLarge ? 'w-32 ' : 'w-12'} rounded-full hover:opacity-90 transition cursor-pointer relative`} >


    </div>
  )
}

export default Avatar