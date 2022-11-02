import ArticlesByTopicListItem from "./ArticleByTopicListItem"

const ArticlesByTopic = ({articles, users})=>{


    return <div >
    {articles.map((article, index)=>{
        let img_url = ""
        users.forEach((user)=>{
            if (user.username===article.author){
                img_url=user.avatar_url
            }
        })
        return <ArticlesByTopicListItem img_url={img_url} key={index} article={article}/>
    })}

    </div>

}

export default ArticlesByTopic