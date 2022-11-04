import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from '../API.js'
import SingleTopicArticle from "./SingleTopicArticle.jsx"
import TopicSelector from "./TopicSelector.jsx"
import Sort from "./Sort.jsx"
import Error from "./Error.jsx"


const TopicArticles = ()=>{

    const {topic} = useParams()

    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const [err, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)

        API.fetchArticlesByTopic(topic).then((articles)=>{
            setArticles(articles)
            API.fetchUsers().then((users)=>{
                setUsers(users)
                setLoading(false)
            })
        }).catch(({response:{data}})=>{
            console.log(data)
            setError(data)
            setLoading(false)
        })

    }, [topic])

    const sortableProperties = ["created_at", "votes", "title", "topic", "author", "comment_count"]
    const orderBy = ["descending", "ascending"]


    if (isLoading) return <p>Loading....</p>
    if (err) return <Error status={err.status} message={err.message}/>

    return( <>
    <h2>{topic} Articles</h2>
    
    <Sort articles={articles} articleProperties={sortableProperties} setArticles={setArticles} topic={topic} orderBy={orderBy}/>

    {articles.map((article, index)=>{

        let img_url = ""
        users.forEach((user)=>{
            if (user.username===article.author){
                img_url=user.avatar_url
            }
        })

        return <SingleTopicArticle img_url={img_url} key={index} article={article}/>
    })}
    </>
    )
}

export default TopicArticles