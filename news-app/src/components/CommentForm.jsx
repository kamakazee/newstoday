import { useState } from "react"
import * as API from '../API.js'
import HeaderProfile from "./HeaderProfile";


const CommentForm = ({user})=>{

    const [commentInput, setCommentInput]=useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()

    }

    const handleInput = (event)=>{

        setCommentInput(event.target.value)
        console.log(commentInput)

    }


    return <>

       <div className="commentform-header">
            <div className="commentform-author">
            <HeaderProfile user={user} />
            </div>
        <h2 >Tell us what you think</h2>
      </div>
      <article className="commentform-body">
      <form className="comment-form" >
        <textarea value={commentInput} onChange={(event)=>{
            handleInput(event)
        }} name="comment" form="usrform"></textarea>
        <button type="submit" onClick={(event)=>{
            handleSubmit(event)
        }}>Post Comment</button>
    </form>
      </article>
    
    
    
    
   
    </>
}

export default CommentForm