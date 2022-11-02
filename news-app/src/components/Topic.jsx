import ArticlesByTopic from "./ArticlesByTopic"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Topic = ({topicName, articles})=>{


    return <div className="topic-gallery">
    <Link to={`/articles/topic/${topicName}`}><h2 className="category-label">{topicName}</h2></Link>
    <ArticlesByTopic articles={articles}/>

    </div>

}

export default Topic