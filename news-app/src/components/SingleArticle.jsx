import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from '../API.js'
import HeaderProfile from "./HeaderProfile.jsx"

const SingleArticle = ()=>{

    const articleId = useParams()
    const [article, setArticle] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [author, setAuthor] = useState({})


    useEffect(()=>{
        setLoading(true)
        API.fetchArticlesByArticleId(articleId.article_id).then((article)=>{
            setArticle(article)
            API.fetchUserByUsername(article.author).then((author)=>{
                setAuthor(author)
                setLoading(false)
            })
        })
    }, [])

    if(isLoading) return <p>Loading....</p>

    return <>
    <div className="article-header">

        <h2 className="article-title">Title: {article.title}</h2>
        <h2 >Comments: <br/>{article.comment_count}</h2>
        <h2 >Likes: <br/>{article.votes}</h2>


       <div className="article-author">
        <HeaderProfile user={author}/>
       </div>
    </div>
    <article className="article-body">
        <p>{article.body}</p>
    </article>
    </>
}

export default SingleArticle