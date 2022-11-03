import './App.css';
import './header.css';
import './topic-gallery.css';
import './singlearticle.css';
import './singletopicarticles.css';
import './commentsform.css';
import './comment.css';
import './delete_confirmboxes.css';
import './topicselector.css';
import './button.css';
import './sort.css';
import Header from './components/Header';
import {useState, useEffect} from 'react'
import * as API from './API.js'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomePage from './components/HomePage';
import SingleArticle from './components/SingleArticle';
import TopicArticles from './components/TopicArticles';
import TopicSelector from './components/TopicSelector';
import My404Component from './components/My404Component';

function App() {


  const [user, setUser] =useState({})
  const [isLoading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  
  useEffect(()=>{
    setLoading(true)
    API.fetchUserByUsername("tickle122").then((user)=>{
      setUser(user)
      setLoading(false)
   })

   API.fetchUsers().then((users)=>{
    setUsers(users)
})
  }, [])

  if (isLoading) return <h2> Loading...</h2>

  return (
    <BrowserRouter>
    <div className="App">
      <Header user={user}/>
      <TopicSelector />
      <Routes>
        <Route path="/" element={<HomePage users={users}/>}/>
        <Route path="/article/:article_id" element={<SingleArticle user={user} users={users}/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/articles/topic/:topic" element={<TopicArticles/>}/>
        <Route path="*" element={<My404Component/>} />
      </Routes>
 
    </div>
    </BrowserRouter>
  );
}

export default App;