const Error = ({status, message})=>{

    return <>
    <p>Status: {status}</p>
    <p>Sorry there was an error: {message}</p>
    
    </>
}

export default Error