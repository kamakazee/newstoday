import { Link } from "react-router-dom"
import HeaderProfile from "./HeaderProfile"

const ArticlesByTopicListItem = ({article, author})=>{



    return <div className="topic-gallery-item">
         <HeaderProfile user={author}/>
    <Link to={`/article/${article.article_id}`}>
        <div className="article-label">
            <p>{article.title}</p>
        </div>
    </Link>
   
    </div>

}

export default ArticlesByTopicListItem