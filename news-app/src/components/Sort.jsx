import * as API from '../API.js'

const Sort = ({articleProperties, setArticles, topic})=>{

    console.log(articleProperties)

    const submitSort = (event)=>{

        console.log(event.target.value)

        API.fetchSortedArticles(event.target.value, topic).then((articles)=>{
            console.log(articles)
            setArticles(articles)
        })
       
    }



    return(

    <form>
        <label><h2>Sort articles by:</h2></label>
        <select className="sortoptions" onChange={(event) => submitSort(event)}>
            {articleProperties.map((property, index)=>{
                return <option key={index} value={property}>{property}</option>

            })}
        </select>
    </form>
    )

}

export default Sort