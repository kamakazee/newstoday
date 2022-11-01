import {Link} from 'react-router-dom'

const TopicMenuItem = ({topic})=>{


    return <Link to={`/articles/topic/${topic}`}><li className="topicmenu">/ {topic} </li></Link>
}

export default TopicMenuItem