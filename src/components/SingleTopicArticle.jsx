import { useEffect, useState } from "react"
import * as API from '../API.js'
import { Link } from "react-router-dom"
import LikeButton from './LikeButton'
import Sort from "./Sort.jsx"

const SingleArticleByTopicItem = ({article, img_url})=>{

    const [likes, setLikes] = useState(article.votes)

    useEffect(()=>{

        setLikes(article.votes)

    },[article])
  
    return <>
    
    <div className="article-item">
        
        <Link to={`/article/${article.article_id}`}><p className="topicarticletitle">Title: {article.title}</p></Link>
        <img className="topicarticle-profileimg" src={img_url}/>
        <p className="topicarticle">By: {article.author}</p>
        <p className="topicarticle">Comments: {article.comment_count}</p>
        <p className="topicarticle">Likes: {likes}</p>
        <p className="topicarticle">Created at: {article.created_at.slice(0,10)}</p>
        
        <LikeButton article={article} setLikes={setLikes}/>

    </div>
    </>

}

export default SingleArticleByTopicItem