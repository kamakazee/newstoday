import { useEffect, useState } from "react"
import * as API from '../API.js'

const SingleArticleByTopicItem = ({article, img_url})=>{

    const [likeText, setLikeText] = useState("Like")
    const [likes, setLikes] = useState(article.votes)


    const handleClick = (event)=>{

        setLikeText((currentText)=>{
            if (currentText==="Like"){

                setLikes((currentLikes)=>{
                    return currentLikes + 1
                })



                return "Unlike"
            } 

            setLikes((currentLikes)=>{
                return currentLikes - 1
            })

            

            return "Like"
        })

    }


    return <div className="article-item">
    <p className="topicarticle">Title: {article.title}</p>
    <img className="topicarticle-profileimg" src={img_url}/>
    <p className="topicarticle">By: {article.author}</p>
    <p className="topicarticle">Comments: {article.comment_count}</p>
    <p className="topicarticle">Likes: {likes}</p>
    <button onClick={()=>{
        handleClick()
    }}>{likeText}</button>

    </div>

}

export default SingleArticleByTopicItem