import * as API from '../API.js'
import { useState } from 'react'

const Sort = ({articleProperties, setArticles, topic, orderBy})=>{

    const [sortBy, setSortBy]= useState("created_at")
    const [order, setOrderBy]= useState("ascending")

    const submitSortBy = (event)=>{

        setSortBy(event.target.value)

        API.fetchSortedArticles(event.target.value, topic, order).then((articles)=>{

            setArticles(articles)
        })
       
    }

    const submitOrderBy = (event)=>{

        setOrderBy(event.target.value)

        API.fetchSortedArticles(sortBy, topic, event.target.value).then((articles)=>{
            
            setArticles(articles)
        })
    }



    return(

    <form className="sortform">
        <div>
        <label><p>Sort articles by:</p></label>
            <select className="sortoptions" onChange={(event) => submitSortBy(event)}>
                {articleProperties.map((property, index)=>{
                    return <option key={index} value={property}>{property}</option>

                })}
            </select>
        </div>
        <div>
            <label><p>Order by:</p></label>
            <select className="sortoptions" onChange={(event) => submitOrderBy(event)}>
                {orderBy.map((property, index)=>{
                    return <option key={index} value={property}>{property}</option>

                })}
            </select>
        </div>
    </form>
    )

}

export default Sort