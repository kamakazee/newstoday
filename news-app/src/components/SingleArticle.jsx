import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from '../API.js'
import HeaderProfile from "./HeaderProfile.jsx"
import TopicSelector from "./TopicSelector.jsx"
import LikeButton from "./LikeButton.jsx"

const SingleArticle = ()=>{

    const articleId = useParams()
    const [article, setArticle] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [author, setAuthor] = useState({})
    const [likes, setLikes] = useState(0)


    useEffect(()=>{
        setLoading(true)
        API.fetchArticlesByArticleId(articleId.article_id).then((article)=>{
            setArticle(article)
            setLikes(article.votes)
            API.fetchUserByUsername(article.author).then((author)=>{
                setAuthor(author)
                setLoading(false)
            })
        })
    }, [])

    if(isLoading) return <p>Loading....</p>

    return <>
    <TopicSelector />
    <div className="article-header">

        <h2 className="article-title">Title: {article.title}</h2>
        <h2 >Comments: <br/>{article.comment_count}
        <hr/> Likes: <br/>{likes}</h2>


       <div className="article-author">
        <HeaderProfile user={author}/>
        
       </div>
       
    </div>
    <article className="article-body">
        <LikeButton article={article} setLikes={setLikes}/>
        <p>{article.body} </p>
    </article>
    </>
}

export default SingleArticle