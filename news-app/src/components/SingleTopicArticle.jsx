import { useEffect, useState } from "react"
import * as API from '../API.js'

const SingleArticleByTopicItem = ({article, img_url})=>{

    const [voteText, setVoteText] = useState("Like")


    const handleClick = (event)=>{

        setVoteText((currentText)=>{
            if (currentText==="Like"){
                return "Unlike"
            } 

            return "Like"
        })

    }





    return <div className="article-item">
    <p className="topicarticle">Title: {article.title}</p>
    <img className="topicarticle-profileimg" src={img_url}/>
    <p className="topicarticle">By: {article.author}</p>
    <p className="topicarticle">Comments: {article.comment_count}</p>
    <p className="topicarticle">Likes: {article.votes}</p>
    <button onClick={()=>{
        handleClick()
    }}>{voteText}</button>

    </div>

}

export default SingleArticleByTopicItem