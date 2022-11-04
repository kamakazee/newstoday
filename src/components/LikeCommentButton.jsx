import * as API from '../API.js'
import { useEffect, useState } from 'react'


const LikeCommentButton = ({comment, setLikes})=>{

    const [likeText, setLikeText] = useState("Like")

    const updateLikes = (vote, comment_id)=>{
        API.updateVotesByCommentId(vote, comment_id).then((article)=>{
            
        }).catch((err)=>{
            setLikes((currentLikes)=>{
                return currentLikes - vote
            })
            setLikeText("Functionality Unavailable")
        })
    }

    const handleClick = (event)=>{

        if(likeText==="Like"){
            setLikes((currentLikes)=>{
                updateLikes(1, comment.article_id)
                return currentLikes + 1
            })
        }else{
            setLikes((currentLikes)=>{
                updateLikes(-1, comment.article_id)
                return currentLikes - 1
            })
        }

        setLikeText((currentText)=>{
            if (currentText==="Like"){
                
                return "Unlike"
            } 

            return "Like"
        })
    }

    return  <button className="like" onClick={()=>{
        handleClick()
    }}>{likeText}</button>


}

export default LikeCommentButton