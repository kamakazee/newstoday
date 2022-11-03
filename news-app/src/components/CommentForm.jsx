import { useState } from "react"
import * as API from '../API.js'
import FormValidation from "./FormValidation.jsx";
import HeaderProfile from "./HeaderProfile";


const CommentForm = ({user, articleId, setComments})=>{

    const [commentInput, setCommentInput]=useState("")
    const [postText, setPostText] = useState("Post")
    const [validateMsgIsHidden, setValidateMsgHidden] = useState(true)
    const [validateMessage, setValidateMessages] = useState("Message Posted Successfully")

    const handleSubmit = (event)=>{

        setValidateMsgHidden(true)

        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
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

            setComments((currentComments)=>{
                let newComments = [...currentComments]
                newComments[0]={...comment}
                return newComments
            })
    

            setPostText("POST")
            setValidateMsgHidden(false)

           
        }).catch((err)=>{

                setValidateMessages("Unable to post comment, please try later")
                setValidateMsgHidden(false)

                setPostText("Function unavailable")

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
            <FormValidation validateMsgIsHidden={validateMsgIsHidden} validateMessage={validateMessage}/>
            <div className="commentform-author">
            <HeaderProfile user={user} />
            </div>
        <h2 >Tell us what you think</h2>
      </div>
      <article className="commentform-body">
      <form className="comment-form" onSubmit={(event)=>{
            handleSubmit(event)
        }}>
        <textarea type="text" value={commentInput} onChange={(event)=>{
            handleInput(event)
        }} required></textarea>
        <button type="submit" >{postText}</button>
    </form>

    
      </article>
    </>
}

export default CommentForm