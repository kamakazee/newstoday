import HeaderProfile from "./HeaderProfile"
import {Link} from 'react-router-dom'
import UserSelect from "./UserSelect"

const Header = ({user})=>{


    return (
    <div className="header">
    
        <div className="headerprofile-container">
            <HeaderProfile user={user}/>
            
        </div>
        <div className="title-box">
            <Link to="/" ><p className="title">news Today</p></Link>
        </div>
    </div>
    )

}

export default Header