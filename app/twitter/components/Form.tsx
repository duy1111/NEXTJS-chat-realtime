
import getCurrentUser from "@/app/actions/getCurrentUser";
import FormClient from "./FormClient";


interface FormProps {
    placeholder?: string;
    isComment ?: boolean;
    
}

const Form = async({placeholder,isComment}:FormProps) => {
    const currentUser = await getCurrentUser()

    
   
    
  return (
    <FormClient currentUser={currentUser} placeholder={placeholder} />
  )
}

export default Form