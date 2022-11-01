import ArticlesByTopic from "./ArticlesByTopic"

const Topic = ({topicName, articles})=>{


    return <div className="articles-list">
    <h2 className="category-label">{topicName}</h2>
    <ArticlesByTopic articles={articles}/>

    </div>

}

export default Topic