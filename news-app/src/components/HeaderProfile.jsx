const HeaderProfile = ({user})=>{


    return <div className="header-profile">


    <img  className="header-profilepic" src={user.avatar_url}/>
    <p className="header-username">{user.username}</p>
    
    
    </div>

}

export default HeaderProfile