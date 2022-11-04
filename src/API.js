import axios from 'axios'

const myApi = axios.create({
    baseURL: 'https://tibbits.herokuapp.com/api',
  });

  export const fetchUserByUsername = (username) => {
    return myApi.get(`/users/${username}`).then(({data}) => {
        const {user} = data;
      return user;
    })
  };

  export const fetchUsers = (username) => {
    return myApi.get(`/users`).then(({data}) => {
        const {users} = data;
      return users;
    })
  };


  export const fetchTopics = () => {
    return myApi.get(`/Topics`).then(({data}) => {
        const {topics} = data;
      return topics;
    })
  };


  export const fetchArticlesByTopic = (topic) => {
    return myApi.get(`/articles?topic=${topic}`).then(({data}) => {
        const {articles} = data;
      return articles;
    })
  };

  export const updateVotesByArticleId = (vote, article_id) => {
    return myApi.patch(`/articles/${article_id}`, {inc_votes: vote}).then(({data}) => {
        const {article} = data;
      return article;
    })
  };

  export const updateVotesByCommentId = (vote, comment_id) => {
    return myApi.patch(`/comments/${comment_id}`, {inc_votes: vote}).then(({data}) => {
        const {comment} = data;
      return comment;
    })
  };


  export const fetchArticlesByArticleId = (articleId) => {
    return myApi.get(`/articles/${articleId}`).then(({data}) => {
        const {article} = data;
      return article;
    });
  };


  export const postCommentByArticleId = (articleId, comment) => {
    return myApi.post(`/articles/${articleId}/comment`, comment).then(({data}) => {
        const {comment} = data;
      return comment;
    });
  };

  
  
  export const fetchCommentsByArticleId = (articleId) => {
    return myApi.get(`/articles/${articleId}/comment`).then(({data}) => {
        const {comments} = data;
      return comments;
    });
  };

  export const deleteCommentById = (commentId) => {
    console.log(commentId)
    return myApi.delete(`/comments/${commentId}`).then(({data}) => {
        const {comment} = data;
      return comment;
    
    })
  }

  export const fetchSortedArticles = (property, topic, order) => {

    let orderBy =""

    order==="ascending" ? orderBy="ASC" : orderBy="DESC"

    return myApi.get(`/articles?sort_by=${property}&&topic=${topic}&&order=${orderBy}`).then(({data}) => {
        const {articles} = data;
      return articles;
    });
  };


