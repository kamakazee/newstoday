import { useEffect, useState } from "react"
import * as API from '../API.js'
import CommentItem from "./CommentItem.jsx"


const CommentList = ({articleId, users})=>{

    const [comments, setComments] = useState([])
    const [isLoading, setLoading] = useState(true)


    useEffect(()=>{
        setLoading(true)
        API.fetchCommentsByArticleId(articleId).then((comments)=>{
            setComments(comments)
            setLoading(false)
           
        })
    }, [])

    if (isLoading) return <p>Loading......</p>

    return (<>{comments.map((comment, index)=>{
        let commentAuthor = {}
        users.forEach((user)=>{
            if (user.username===comment.author){
                commentAuthor=user
            }
        })
           return <CommentItem key={index} commentAuthor={commentAuthor} comment={comment}/>
    })}</>)

}


export default CommentList