
import React, { use } from 'react'
import Header from '../../components/Header'
import getUser from '@/app/actions/getUser'
import UserClient from './UserClient';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { SafeUser } from '@/app/types';

interface IParams {
    userId: string;
  }

const Page = async({ params }: { params: IParams }) => {
    const user:any = await getUser(params.userId)
    const currentUser = await getCurrentUser()
  return (
    <>
        <UserClient currentUser={currentUser} user={user} />

    </>
  )
}

export default Page