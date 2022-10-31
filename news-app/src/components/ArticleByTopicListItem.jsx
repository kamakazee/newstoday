const ArticlesByTopicListItem = ({article})=>{


    return <div className="article-item">
    <p className="article-label">Article title</p>
    <p className="article-label">{article.title}</p>
    <p className="article-label">Article author</p>
    <p className="article-label">{article.author}</p>

    </div>

}

export default ArticlesByTopicListItem