import axios from 'axios'

const myApi = axios.create({
    baseURL: 'https://tibbits.herokuapp.com/api',
  });

  export const fetchUserByUsername = (username) => {
    return myApi.get(`/users/${username}`).then(({data}) => {
        const {user} = data;
      return user;
    }).catch((err)=>{
      return <h2>An error occurred: {err} </h2>
    });
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
    }).catch((err)=>{
      return <h2>An error occurred: {err} </h2>
    });
  };


  export const fetchArticlesByTopic = (topic) => {
    return myApi.get(`/articles?topic=${topic}`).then(({data}) => {
        const {articles} = data;
      return articles;
    }).catch((err)=>{
      return <h2>An error occurred: {err} </h2>
    });
  };

