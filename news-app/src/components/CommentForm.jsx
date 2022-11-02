import { useState } from "react"
import * as API from '../API.js'
import HeaderProfile from "./HeaderProfile";


const CommentForm = ({user, articleId, setComments})=>{

    const [commentInput, setCommentInput]=useState("")
    const [postText, setPostText] = useState("Post")

    const handleSubmit = (event)=>{

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' +  mm + '-' + dd;
       

        let newComment={
            created_at: today,
            body: commentInput,
            author: user.username,
            votes:0
        }

        setComments((currentComments)=>{
            let newComments = [...currentComments]
            newComments.unshift(newComment)
            return newComments
        })

        event.preventDefault()
        const comment = {username: user.username, body: commentInput}
        API.postCommentByArticleId(articleId.article_id, comment).then((comment)=>{
           
        }).catch((err)=>{
                setComments((currentComments)=>{
                let newComments = [...currentComments]
                newComments.shift()
                return newComments
            })
    

        })

        setCommentInput("")
    }

    const handleInput = (event)=>{

        setCommentInput(event.target.value)
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
        }}>{postText}</button>
    </form>
      </article>
    
    
    
    
   
    </>
}

export default CommentForm