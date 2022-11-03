const Error = ({status, message})=>{

    return <>
    <h2>Status: {status}</h2>
    <h2>Sorry there was an error: {message}</h2>
    
    </>
}

export default Error