import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from '../API.js'
import SingleArticleByTopicItem from "./SingleArticleByTopicItem.jsx"


const SingleArticlesByTopic = ()=>{

    const {topic} = useParams()

    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{

        setLoading(true)

        API.fetchArticlesByTopic(topic).then((articles)=>{
            console.log(articles)
            setArticles(articles)
            setLoading(false)
        })

    }, [])


    if (isLoading) return <p>Loading....</p>

    return( <>
    <h2>Inside of single page of Articles By Topic: {topic}</h2>
    {articles.map((article, index)=>{
        return <SingleArticleByTopicItem key={index} article={article}/>
    })}
    </>
    )
}

export default SingleArticlesByTopic