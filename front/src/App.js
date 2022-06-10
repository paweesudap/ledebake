import "./App.css"
//ส่วน Page
// import Home from "./pages/Home/HomePage";
import Profile from "./pages/Profile/ProfilePage";
import Favorite from "./pages/Favorite/FavoritePage";
import Notification from "./pages/Notification/NotificationPage";
import Home from "./pages/Home/HomePage";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

//ส่วน Nav 
import Nav from './components/Nav';
import { Route,Routes } from "react-router-dom";
import Foott from "./components/Foott";


export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Favorite" element={<Favorite/>}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/Detail" element={<Detail/>}/>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </div>
      <Foott/>
    </div>
  );
}
