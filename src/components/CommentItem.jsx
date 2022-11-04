import HeaderProfile from "./HeaderProfile";

import DeleteCommentButton from "./DeleteCommentButton";
import { useEffect, useState } from "react";

const CommentItem = ({ comment, commentAuthor, user, setComments, comments}) => {

  const [isButtonHidden, setButtonHidden] = useState(true)

  useEffect(()=>{
    user.username === commentAuthor.username ? setButtonHidden(false) : setButtonHidden(true)
  },[comments])



  return (
    <>
      <div className="comment-header">
        <p >Created on: {comment.created_at.slice(0,10)}</p>
        <p> Likes: {comment.votes}</p>

        <div className="comment-author">
          <HeaderProfile user={commentAuthor} />
        </div>
      </div>
      <article className="comment-body">
        <p>{comment.body}</p>
        {isButtonHidden ? <></>: <DeleteCommentButton setComments={setComments} comment={comment}/>}
      </article>
      
    </>
  );
};

export default CommentItem;
