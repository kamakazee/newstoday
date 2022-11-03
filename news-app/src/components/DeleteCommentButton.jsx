import * as API from '../API.js'
import ConfirmBox from './ConFirmBox'
import { useState } from 'react'
import DeleteFailMessage from './DeleteFailMessage.jsx'

const DeleteCommentButton = ({comment,setComments})=>{


  const [isConfirmHidden, setConfirmHidden] = useState(true)
  const [isFailMessageHidden, setFailMessageHidden] = useState(true)


  const deleteComment = ()=>{

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
    }).catch((err)=>{
      setFailMessageHidden(false)
    })

  }

  const handleDeleteClick = ()=>{
    setConfirmHidden(false)
  }

  const handleConfirmClick = (isTrue)=>{

    if(isTrue){
    setConfirmHidden(true)
    deleteComment()}
    else{

      setConfirmHidden(true)
    }

  }

    if (isConfirmHidden) return <><button className="delete" onClick={handleDeleteClick}>Delete</button>
    {isFailMessageHidden ? <></> : <DeleteFailMessage/> }
    </>

    return <> <ConfirmBox setConfirmHidden={setConfirmHidden} handleConfirmClick={handleConfirmClick}/> </>

}

export default DeleteCommentButton