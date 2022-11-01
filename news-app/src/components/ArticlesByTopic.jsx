import ArticlesByTopicListItem from "./ArticleByTopicListItem"

const ArticlesByTopic = ({articles})=>{


    return <div >
    {articles.map((article, index)=>{
        return <ArticlesByTopicListItem key={index} article={article}/>
    })}

    </div>

}

export default ArticlesByTopic