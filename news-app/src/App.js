import './App.css';
import './header.css';
import './topic-gallery.css';
import './singlearticle.css';
import './singletopicarticles.css';
import Header from './components/Header';
import {useState, useEffect} from 'react'
import * as API from './API.js'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomePage from './components/HomePage';
import SingleArticle from './components/SingleArticle';
import TopicArticles from './components/TopicArticles';

function App() {


  const [user, setUser] =useState({})
  const [isLoading, setLoading] = useState(true)

  
  useEffect(()=>{
    setLoading(true)
    API.fetchUserByUsername("tickle122").then((user)=>{
      setUser(user)
      setLoading(false)
   })
  }, [])

  if (isLoading) return <h2> Loading...</h2>

  return (
    <BrowserRouter>
    <div className="App">
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/article/:article_id" element={<SingleArticle/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/articles/topic/:topic" element={<TopicArticles />}/>
      </Routes>
 
    </div>
    </BrowserRouter>
  );
}

export default App;
