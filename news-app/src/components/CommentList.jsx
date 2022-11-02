import { useEffect, useState } from "react"
import * as API from '../API.js'
import CommentItem from "./CommentItem.jsx"


const CommentList = ({articleId, users, comments, setComments, user})=>{

    const [isLoading, setLoading] = useState(true)
    const [isHidden, setHidden] = useState(true)


    useEffect(()=>{
        setLoading(true)
        API.fetchCommentsByArticleId(articleId).then((comments)=>{
            setComments(comments)
            setLoading(false)
           
        })
    }, [])

    if(isHidden) return <button onClick={()=>{
        setHidden(false)
    }}>Show Comments</button>

    if (isLoading) return <p>Loading......</p>

    return (<>
    <button onClick={()=>{
        setHidden(true)
    }}>Hide Comments</button>
    {comments.map((comment, index)=>{
        let commentAuthor = {}
        users.forEach((user)=>{
            if (user.username===comment.author){
                commentAuthor=user
            }
        })
           return <CommentItem key={index} comments={comments} commentAuthor={commentAuthor} comment={comment} user={user} setComments={setComments}/>
    })}</>)

}


export default CommentList