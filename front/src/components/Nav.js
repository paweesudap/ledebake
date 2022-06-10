import { NavLink,Link } from 'react-router-dom';
import "./Nav.css"


export default function Nav(){
    const handleLogout = (event) => {
        localStorage.removeItem('token');
        window.location='/Login'
    }
    return(
        <header>
            <nav className='nav'>
                <i className="ioc" aria-hidden="true"><img id='sizeic' src={require("./pic/ic.png")}/></i>
            <ul id='f'>
                <NavLink activeClassName="active" to="/home">
                    <li>Home</li>
                </NavLink>
                <NavLink activeClassName="active" to="/favorite">
                    <li>Favorite</li>
                </NavLink>
                <NavLink activeClassName="active" to="/Profile">
                    <li>Profile</li>
                </NavLink>
            </ul>
            <div className='per'>
                
                <NavLink activeClassName="active" to="/Notification">
                    <li className="notii"><img id='sizeic' src={require("./pic/notification.png")}/></li>
                </NavLink>
                <p className="notii"><img id='sizeic' src={require("./pic/profile-user.png")}/></p>
                <button onClick={handleLogout} id="logout">Logout</button>
            </div>
            </nav>
        </header>
    )
}