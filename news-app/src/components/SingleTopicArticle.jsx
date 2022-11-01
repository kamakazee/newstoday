import { useEffect, useState } from "react"
import * as API from '../API.js'
import { Link } from "react-router-dom"

const SingleArticleByTopicItem = ({article, img_url})=>{



    return <div className="article-item">
    <Link to={`/article/${article.article_id}`}><p className="topicarticle">Title: {article.title}</p></Link>
    <img className="topicarticle-profileimg" src={img_url}/>
    <p className="topicarticle">By: {article.author}</p>
    <p className="topicarticle">Comments: {article.comment_count}</p>
    <p className="topicarticle">Likes: {article.votes}</p>

    </div>

}

export default SingleArticleByTopicItem