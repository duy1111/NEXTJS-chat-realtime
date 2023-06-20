'use client'
import getCurrentUser from '@/app/actions/getCurrentUser'
import useEditModal from '@/app/hooks/useEditModal'
import { User } from '@prisma/client'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Modal from '../Modal'
import Input from '../Input'
import ImageUpload from '../ImageUpload'


interface EditModalProps {
    currentUser: User |null
}
const EditModal: React.FC<EditModalProps> = ({currentUser}) => {
    const editModal = useEditModal()
    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
   
    useEffect(() => {
        if(currentUser){
            setProfileImage(currentUser?.image)
            setCoverImage(currentUser?.coverImage)
            setName(currentUser?.name)
            setBio(currentUser?.bio)
        }   
        
    },[currentUser])

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async() => {

        try{
            setIsLoading(true)
            await axios.post(`/api/twitter/edit`,{
                name,
                image: profileImage,
                profileImage: profileImage,
                coverImage,
                bio
            });

            toast.success('Updated');

            editModal.onClose()
        }catch(error){
            toast.error('Something went wrong ')
        }finally{
            setIsLoading(false)
        }
    },[bio,name,profileImage,coverImage,editModal])

    const bodyContent = (
        <div className='flex flex-col gap-4 ' >
            <ImageUpload
                value={profileImage}
                disabled={isLoading}
                onChange={(image) => setProfileImage(image)}
                label='Upload profile image'
            />
            <ImageUpload
                value={coverImage}
                disabled={isLoading}
                onChange={(image) => setCoverImage(image)}
                label='Upload cover image'
            />
            <Input
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}

            />
           
            <Input
                placeholder='Bio'
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                disabled={isLoading}
                
            />
        </div>
    )
  return (
    <Modal
        disabled={isLoading} 
        isOpen={editModal.isOpen}
        title='Edit your profile'
        actionLabel='Save'
        onClose={editModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
    />
  )
}

export default EditModal
