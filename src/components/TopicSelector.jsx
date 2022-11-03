import { useEffect, useState } from "react"
import * as API from '../API.js'
import TopicMenuItem from "./TopicMenuItem.jsx"
import {Link} from 'react-router-dom'

const TopicSelector = ()=>{

    const [topics, setTopics] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{

        setLoading(true)
        API.fetchTopics().then((topics)=>{
            setTopics(topics)
            setLoading(false)
        })

    },[])

    if (isLoading) return <p>Loading....</p>

    return <><h2>Jump to:</h2>
    <ul className="topic-selector">
    <Link to={`/`}><li>Home </li></Link>
    {topics.map((topic, index)=>{
        return <TopicMenuItem key={index} topic={topic.slug}/>
    })}
    </ul>
    
    </>
}

export default TopicSelector