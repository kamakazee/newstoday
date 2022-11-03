import {Link} from 'react-router-dom'

const TopicMenuItem = ({topic})=>{


    return <Link to={`/articles/topic/${topic}`}><li>/ {topic} </li></Link>
}

export default TopicMenuItem