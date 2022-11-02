import * as API from '../API.js'

const DeleteCommentButton = ({comment,setComments})=>{


  const onClickDelete = ()=>{

    let commentId = comment.comment_id

    API.deleteCommentById(commentId).then(()=>{
      console.log("Delete successful")

      setComments((currentComments)=>{

        let newComments = [...currentComments]
        let indexFound = 0
  
        newComments.forEach((comment, index)=>{
          if(commentId === comment.comment_id) indexFound = index
        })

        console.log("Index found", indexFound)
  
        newComments.splice(indexFound, 1)
  
        return newComments
  
      })
    })

  }



    return <button onClick={onClickDelete}>Delete</button>
}

export default DeleteCommentButton