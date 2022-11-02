import { useState } from "react"
import FormMessage from "./FormMessage"

const FormValidation = ()=>{
    const [validateMessages, setValidateMessages] = useState([])


    let message="Nothing"



    return <FormMessage message={message} />
}

export default FormValidation