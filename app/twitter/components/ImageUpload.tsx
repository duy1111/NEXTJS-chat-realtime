'use client'
import {useDropzone} from 'react-dropzone'
import React from 'react'


interface ImageUploadProps {
    onChange: (base64: string) => void;
    label :string;
    value ?:string;
    disabled : boolean;

}

const ImageUpload: React.FC<ImageUploadProps> = ({onChange,label,value,disabled}) => {
  return (
    <div>

    </div>
  )
}

export default ImageUpload