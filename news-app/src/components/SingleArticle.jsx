import { useParams } from "react-router-dom"

const SingleArticle = ()=>{


    const article_id = useParams({article_id})

    return <h2>Single ARtile</h2>
}

export default SingleArticle