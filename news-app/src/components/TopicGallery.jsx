import Topic from './Topic'

const TopicGallery = ({articlesByTopic, users})=>{

    return <div className="topicArticles">

        {Object.keys(articlesByTopic).map((topic, index)=>{
            return <Topic users={users} key={index} topicName={topic} articles ={articlesByTopic[topic]}/>
        })
    
    }
    </div>

}

export default TopicGallery