import HeaderProfile from "./HeaderProfile"
import UserCard from "./UserCard"

const UserSelect = ({users, setUser}) =>{

    return <>
    <h3> Pick a different user</h3>
    <ul>{users.map((user, index)=>{

        return <li className="Users" key={index} onClick={()=>{setUser(user)}}><UserCard setUser={setUser} user={user}/></li>

    })}
        
        </ul>
        </>

}
export default UserSelect