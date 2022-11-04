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
import './users.css';
import Header from './components/Header';
import {useState, useEffect} from 'react'
import * as API from './API.js'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomePage from './components/HomePage';
import SingleArticle from './components/SingleArticle';
import TopicArticles from './components/TopicArticles';
import TopicSelector from './components/TopicSelector';
import My404Component from './components/My404Component';
import UserSelect from './components/UserSelect';

function App() {


  const [user, setUser] =useState({})
  const [isLoading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  
  useEffect(()=>{
    setLoading(true)
    API.fetchUserByUsername("tickle122").then((user)=>{
      setUser(user)

      API.fetchUsers().then((currentUsers)=>{

        setUsers(currentUsers)
        setLoading(false)
    })
     
   })

   
  }, [])

  if (isLoading) return <h2> Loading...</h2>

  return (
    <BrowserRouter>
    <div className="App">
      <Header user={user}/>
      <Link to="/users/select" element={<UserSelect />}><h3>Select a different User</h3></Link>
      <TopicSelector />
      <Routes>
        <Route path="/" element={<HomePage users={users}/>}/>
        <Route path="/article/:article_id" element={<SingleArticle user={user} users={users}/>}/>
        <Route path="/articles/topic/:topic" element={<TopicArticles user={user}/>}/>
        <Route path="/users/select" element={<UserSelect users={users} setUser={setUser}/>}/>
        <Route path="*" element={<My404Component/>} />
      </Routes>
 
    </div>
    </BrowserRouter>
  );
}

export default App;
