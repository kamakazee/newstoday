import { useEffect, useState } from "react"
import * as API from '../API.js'
import { Link } from "react-router-dom"
import LikeButton from './LikeButton'

const SingleArticleByTopicItem = ({article, img_url})=>{

    const [likeText, setLikeText] = useState("Like")
    const [likes, setLikes] = useState(article.votes)

  
    return <div className="article-item">
    <Link to={`/article/${article.article_id}`}><p className="topicarticle">Title: {article.title}</p></Link>
    <img className="topicarticle-profileimg" src={img_url}/>
    <p className="topicarticle">By: {article.author}</p>
    <p className="topicarticle">Comments: {article.comment_count}</p>
    <p className="topicarticle">Likes: {likes}</p>
    
    <LikeButton article={article} setLikes={setLikes}/>

    </div>

}

export default SingleArticleByTopicItem