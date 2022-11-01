import { Link } from "react-router-dom"

const ArticlesByTopicListItem = ({article})=>{



    return <div className="article-item">
    <p className="article-label">Article title</p>
    <Link to={`/article/${article.article_id}`}><p className="article-label">{article.title}</p></Link>
    <p className="article-label">Article author</p>
    <p className="article-label">{article.author}</p>

    </div>

}

export default ArticlesByTopicListItem