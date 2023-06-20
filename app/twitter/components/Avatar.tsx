'use client'
import { SafeUser } from '@/app/types';
import { User } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'

interface AvatarProps {
    data : SafeUser | null;
    isLarge  ?: boolean;
    hasBorder ?: boolean;

}


const Avatar: React.FC<AvatarProps> = async({data,isLarge,hasBorder}) => {
    const router = useRouter()

    const onClick = useCallback ((event: any) => {
        event.stopPropagation();
        const url = `/twitter/users/${data?.id}`
        router.push(url)
    },[router,data?.id])
  return (
    <div className={`${hasBorder ? 'border-4 border-black': ''} ${isLarge ? 'h-32 ' : 'h-12'} ${isLarge ? 'w-32 ' : 'w-12'} rounded-full hover:opacity-90 transition cursor-pointer relative`} >

        <Image
            fill
            style={{
                objectFit:'cover',
                borderRadius: '100%'
            }}
            alt='Avatar'
            onClick={onClick}
            src={data?.image || '/images/placeholder.png'}
        />
    </div>
  )
}

export default Avatar