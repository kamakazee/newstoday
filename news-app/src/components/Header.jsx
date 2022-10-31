import HeaderProfile from "./HeaderProfile"
import {Link} from 'react-router-dom'

const Header = ({user})=>{


    return <div className="header">
    
    <div className="headerprofile-container">
        <HeaderProfile user={user}/>
    </div>
    <Link to="/" ><p className="title">newsToday</p></Link>

    </div>

}

export default Header