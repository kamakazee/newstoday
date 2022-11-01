import { useEffect, useState } from "react"
import * as API from '../API.js'
import { Link } from "react-router-dom"

const SingleArticleByTopicItem = ({article, img_url})=>{

    const [likeText, setLikeText] = useState("Like")
    const [likes, setLikes] = useState(article.votes)

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



    return <div className="article-item">
    <Link to={`/article/${article.article_id}`}><p className="topicarticle">Title: {article.title}</p></Link>
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