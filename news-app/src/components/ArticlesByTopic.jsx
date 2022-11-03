import ArticlesByTopicListItem from "./ArticleByTopicListItem"

const ArticlesByTopic = ({articles, users})=>{


    return <div >
    {articles.map((article, index)=>{
        let author = {}
        users.forEach((user)=>{
            if (user.username===article.author){
                author=user
            }
        })
        return <ArticlesByTopicListItem author={author} key={index} article={article}/>
    })}

    </div>

}

export default ArticlesByTopic