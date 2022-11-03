import * as API from '../API.js'
import { useEffect, useState } from 'react'


const LikeButton = ({article, setLikes})=>{

    const [likeText, setLikeText] = useState("Like")

    const updateLikes = (vote, article_id)=>{
        API.updateVotesByArticleId(vote, article_id).then((article)=>{
            
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
                updateLikes(1, article.article_id)
                return currentLikes + 1
            })
        }else{
            setLikes((currentLikes)=>{
                updateLikes(-1, article.article_id)
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

export default LikeButton