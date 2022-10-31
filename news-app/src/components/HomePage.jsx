import TopicGallery from './TopicGallery'
import * as API from '../API'
import {useState, useEffect} from 'react'


const HomePage = ({user})=>{
    const [topics, setTopics] = useState([])
    const [articlesByTopic, setArticlesByTopic] = useState({})
    const [articlesLoading, setArticlesLoading] = useState(true)


    useEffect(()=>{
        API.fetchTopics().then((topics)=>{
            setTopics(topics)
        })
    }, [])

    useEffect(()=>{
        topics.forEach(({slug: topic})=>{
            console.log(topic)
            API.fetchArticlesByTopic(topic).then((articles)=>{
                setArticlesByTopic((currentArticles)=>{
                    console.log("Current articles: ", currentArticles)
                    let newArticles = {...currentArticles}
                    newArticles[topic]= articles
                    return newArticles
                })

                setArticlesLoading(false)
            })
        })

    },[topics])

    if (articlesLoading) return <h2>articles loading....</h2>

    return <TopicGallery articlesByTopic={articlesByTopic}/>
  
}

export default HomePage