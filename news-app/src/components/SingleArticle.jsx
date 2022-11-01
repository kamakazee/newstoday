import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from '../API.js'

const SingleArticle = ()=>{

    const articleId = useParams()
    const [article, setArticle] = useState("")
    const [isLoading, setLoading] = useState(true)


    useEffect(()=>{
        setLoading(true)
        API.fetchArticlesByArticleId(articleId.article_id).then((article)=>{
            setArticle(article)
            setLoading(false)
        })


    }, [])

    if(isLoading) return <p>Loading....</p>

    return <><h2>Single Article</h2>
    <p>{article.body}</p>
    </>
}

export default SingleArticle