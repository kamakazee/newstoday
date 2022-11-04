import { useState } from "react"
import * as API from '../API.js'
import FormValidation from "./FormValidation.jsx";
import HeaderProfile from "./HeaderProfile";


const ArticleForm = ({user, topic, setArticles})=>{

    const [articleInput, setArticleInput]=useState("")
    const [articleTitleInput, setArticleTitleInput]=useState("")
    const [postText, setPostText] = useState("Post")
    const [validateMsgIsHidden, setValidateMsgHidden] = useState(true)
    const [validateMessage, setValidateMessages] = useState("Message Posted Successfully")

    const handleSubmit = (event)=>{

        setValidateMsgHidden(true)

        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = yyyy + '-' +  mm + '-' + dd;
       

        let newArticle={
            author: user.username,
            title: articleTitleInput,
            created_at: today,
            body: articleInput,
            comment_count:0,
            votes:0,
            topic: topic
        }

        setArticles((currentArticles)=>{
            let newArticles = [...currentArticles]
            newArticles.unshift(newArticle)
            return newArticles
        })

        event.preventDefault()

        newArticle={
            author: user.username,
            title: articleTitleInput,
            body: articleInput,
            topic: topic
        }

        API.postArticle(newArticle).then((article)=>{

            setArticles((currentArticles)=>{
                let newArticles = [...currentArticles]
                newArticles[0]={...article}
                return newArticles
            })
    

            setPostText("POST")
            setValidateMsgHidden(false)

           
        }).catch((err)=>{

                setValidateMessages("Unable to post Article, please try later")
                setValidateMsgHidden(false)

                setPostText("Function unavailable")

                setArticles((currentArticles)=>{
                let newArticles = [...currentArticles]
                newArticles.shift()
                return newArticles
            })
        })

        setArticleInput("")
        setArticleTitleInput("")
    }

    const handleInput = (event)=>{

        setArticleInput(event.target.value)
    }


    return <>

       <div className="commentform-header">
            <FormValidation validateMsgIsHidden={validateMsgIsHidden} validateMessage={validateMessage}/>
            <div className="commentform-author">
            <HeaderProfile user={user} />
            </div>
        <h2 >Tell us what you think</h2>
      </div>
      <article className="commentform-body">
      <form className="comment-form" onSubmit={(event)=>{
            handleSubmit(event)
        }}>
        <label>Title</label>
        <input type="text" value={articleTitleInput} onChange={(event)=>{setArticleTitleInput(event.target.value)}}></input>
        <textarea type="text" value={articleInput} onChange={(event)=>{
            handleInput(event)
        }} required></textarea>
        <button type="submit" >{postText}</button>
    </form>

    
      </article>
    </>
}

export default ArticleForm