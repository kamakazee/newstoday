import HeaderProfile from "./HeaderProfile";

const CommentItem = ({ comment, commentAuthor }) => {
  return (
    <>
      <div className="comment-header">
        <h2 >Created on: <br/>{comment.created_at.slice(0,10)}</h2>
        <h2> Likes: <br/>{comment.votes}</h2>

        <div className="comment-author">
          <HeaderProfile user={commentAuthor} />
        </div>
      </div>
      <article className="comment-body">
        <p>{comment.body}</p>
      </article>
    </>
  );
};

export default CommentItem;