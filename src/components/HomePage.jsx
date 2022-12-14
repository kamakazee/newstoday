import TopicGallery from './TopicGallery'
import * as API from '../API'
import {useState, useEffect} from 'react'
import TopicSelector from './TopicSelector'


const HomePage = ({users})=>{
    const [topics, setTopics] = useState([])
    const [articlesByTopic, setArticlesByTopic] = useState({})
    const [articlesLoading, setArticlesLoading] = useState(true)


    useEffect(()=>{
        API.fetchTopics().then((topics)=>{
            setTopics(topics)
            topics.forEach(({slug: topic})=>{
                API.fetchArticlesByTopic(topic).then((articles)=>{
                    setArticlesByTopic((currentArticles)=>{
                        let newArticles = {...currentArticles}
                        newArticles[topic]= articles
                        return newArticles
                    })
    
                    setArticlesLoading(false)
                })
            })
        })
    }, [])

    if (articlesLoading) return <h2>articles loading....</h2>

    return <>
    <h3> Articles by Category</h3>
    <TopicGallery articlesByTopic={articlesByTopic} users={users}/>
    </>
  
}

export default HomePage