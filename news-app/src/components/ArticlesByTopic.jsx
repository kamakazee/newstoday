import ArticlesByTopicListItem from "./ArticleByTopicListItem"

const ArticlesByTopic = ({articles})=>{


    return <div >
    {articles.map((article)=>{
        return <ArticlesByTopicListItem article={article}/>
    })}

    </div>

}

export default ArticlesByTopic