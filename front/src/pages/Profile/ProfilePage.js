import React , { useEffect} from 'react';
import Profile from "../../components/Profile";
import './ProfilePage.css'
import Filter from "../../components/Filter";
import Recipe from "../../components/Recipe";
import pic1 from '../../components/pic/pic12.jpg';
import pic2 from '../../components/pic/pic11.jpg';
import pic3 from '../../components/pic/pic10.jpg';
import pic4 from '../../components/pic/pic13.jpg';

export default function ProfilePage() {

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:4444/authen', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token 
        },
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'ok'){
            
        }else{
            alert('authen failed')
            localStorage.removeItem('token');
            window.location='/Login'
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }, [])

  return (
    <div className="profilecon">
      <div id="pf">
        <Profile />
      </div>
      <div id="ft">
        <Filter />
      </div>
      <div className="tag">
        <h1 id="tagg">Ice Cream Dessert We Love</h1>
      </div>
      <div id="rc">
      <div className="rcc">
        <Recipe 
        img = {pic1}
        day = "4 April 2022"
        star = "4.0 ✰✰✰✰"
        dname = "Butter Pecan Pumpkin Pie"/>
        <Recipe 
        img = {pic2}
        day = "5 April 2022"
        star = "4.0 ✰✰✰✰"
        dname = "Fire Ice Cream Dessert Bars"/>
        <Recipe 
        img = {pic3}
        day = "5 April 2022"
        star = "4.0 ✰✰✰✰"
        dname = "Icecream Tacos"/>
      <Recipe 
        img = {pic4}
        day = "6 April 2022"
        star = "4.0 ✰✰✰✰"
        dname = "Spumonibake Alaska"/>
        </div>
      </div >
  </div>
)
}

