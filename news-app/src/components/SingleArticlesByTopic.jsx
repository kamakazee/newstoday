import { useParams } from "react-router-dom"


const SingleArticlesByTopic = ()=>{

    const {topic} = useParams()


    return <h2>Inside of single page of Articles By Topic: {topic}</h2>
}

export default SingleArticlesByTopic