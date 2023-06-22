
'use client'
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./Button";
import Avatar from "./Avatar";
import { User } from "@prisma/client";


interface FormClientProps {
    placeholder?: string;
    isComment ?: boolean;
    postId ?: string;
    currentUser ?: User | null;
}

const FormClient:React.FC<FormClientProps> = async({
    placeholder,
    isComment,
    postId,
    currentUser,
}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [body,setBody] = useState('')
    console.log('check body',body)

    const onSubmit = useCallback(async() => {
        try{
            setIsLoading(true)

            await axios.post('api/twitter/posts',{
                body
            })
            toast.success('Tweet created!')

            setBody('')
        }
        catch(error){
            toast.error('Something went wrong')
        } finally{
            setIsLoading(false)
        }
    },[body])
    const setValue = (value:string) => {
        setBody(value)
    }
  return (
    <div className="border-b border-neutral-800 px-5 py-2 " >
        {currentUser ? (
            <div className="flex flex-row gap-4" >

                <div>
                    <Avatar data={currentUser} />
                </div>
                <div className="w-full" >
                    <textarea
                        disabled={isLoading}
                       
                        value={body}
                        onChange={(e) => setValue(e.target.value)}
                        className=" disabled:opacity-80 peer resize-none mt-3 w-full bg-black ring-0 outline-none placeholder-neutral-500 text-[20px]  text-white"
                        placeholder={placeholder}
                    />
                    <hr
                        className=" opacity-0 peer-focus:opacity-100 h-[1px] w-full border-neutral-800 transition"
                    />
                    <div className="mt-4 flex flex-row justify-end" >
                        <Button disabled={isLoading || !body} onClick={onSubmit} label="Tweet" />
                    </div>
                </div>
            </div>
        ):(
            <div className="py-8" >
            <h1 className=" text-white text-2xl text-center mb-4 font-bold" >Welcome to Twitter</h1>
            <div className="flex flex-row items-center justify-center gap-4" >
                <Button label="Login" onClick={() => {}}  />
                
            </div>
        </div>
        )}
        
    </div>
  )
}

export default FormClient