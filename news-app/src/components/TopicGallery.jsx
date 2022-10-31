import Topic from './Topic'

const TopicGallery = ({articlesByTopic})=>{

    return <div className="topicArticles">

        {Object.keys(articlesByTopic).map((topic, index)=>{
            return <Topic key={index} topicName={topic} articles ={articlesByTopic[topic]}/>
        })
    
    }
    </div>

}

export default TopicGallery