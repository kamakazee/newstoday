import { useState } from "react"

const CommentForm = ()=>{

    const [commentInput, setCommentInput]=useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        
    }

    const handleInput = (event)=>{

        setCommentInput(event.target.value)
        console.log(commentInput)

    }


    return <form className="comment-form" >
        <fieldset>
        <legend>Post a comment</legend>
        <textarea value={commentInput} onChange={(event)=>{
            handleInput(event)
        }} name="comment" form="usrform"></textarea>
        <button type="submit" onClick={(event)=>{
            handleSubmit(event)
        }}>Post Comment</button>
        </fieldset>
        
    </form>
}

export default CommentForm