import * as API from '../API.js'
import { useState } from 'react'


const LikeButton = ({article, setLikes})=>{

    const [likeText, setLikeText] = useState("Like")

    const updateLikes = (vote, article_id)=>{
        API.updateVotesByArticleId(vote, article_id).then((article)=>{

            console.log("Update complete", article)
            
        }).catch((err)=>{
            setLikes((currentLikes)=>{
                return currentLikes - vote
            })
            setLikeText("Functionality Unavailable")
        })
    }


    const handleClick = (event)=>{
        setLikeText((currentText)=>{
            if (currentText==="Like"){

                setLikes((currentLikes)=>{
                    updateLikes(1, article.article_id)
                    return currentLikes + 1
                })
                return "Unlike"
            } 
            updateLikes(-1, article.article_id)

            setLikes((currentLikes)=>{
                return currentLikes - 1
            })
            return "Like"
        })
    }

    return  <button onClick={()=>{
        handleClick()
    }}>{likeText}</button>


}

export default LikeButton