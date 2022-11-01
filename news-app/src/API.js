import axios from 'axios'

const myApi = axios.create({
    baseURL: 'https://tibbits.herokuapp.com/api',
  });

  export const fetchUserByUsername = (username) => {
    return myApi.get(`/users/${username}`).then(({data}) => {
        const {user} = data;
      return user;
    });
  };

  export const fetchTopics = () => {
    return myApi.get(`/Topics`).then(({data}) => {
        const {topics} = data;
      return topics;
    });
  };


  export const fetchArticlesByTopic = (topic) => {
    return myApi.get(`/articles?topic=${topic}`).then(({data}) => {
        const {articles} = data;
      return articles;
    });
  };

  export const fetchArticlesByArticleId = (articleId) => {
    return myApi.get(`/articles/${articleId}`).then(({data}) => {
        const {article} = data;
      return article;
    });
  };

  
