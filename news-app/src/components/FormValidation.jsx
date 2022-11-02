import { useState } from "react"

const FormValidation = ({validateMsgIsHidden, validateMessage})=>{

    

    let message="Message Posted Successfully"

    return <p className="postMessage">{validateMsgIsHidden? "" : validateMessage}</p>

    
}

export default FormValidation