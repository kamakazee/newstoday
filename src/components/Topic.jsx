import ArticlesByTopic from "./ArticlesByTopic"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Topic = ({topicName, articles, users})=>{


    return <div className="topic-gallery">
    <Link to={`/articles/topic/${topicName}`}><h2 className="category-label">{topicName}</h2></Link>
    <ArticlesByTopic articles={articles} users={users}/>

    </div>

}

export default Topic