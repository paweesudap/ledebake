import React, { Fragment } from "react";
import Profile from "../../components/Profile";
import Recipe from "../../components/Recipe";
import './Favorite.css'
import pic1 from '../../components/pic/pic12.jpg';
import pic2 from '../../components/pic/pic11.jpg';

const FavoritePage = () => (
  <div className="favcon">
      <div id="fpf">
        <Profile />
      </div>
      <div id="fc">
      <h1 id="fav">Favorite</h1>
      <hr id="line"></hr>
      <div className="fcc">
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
        </div>
      </div >
  </div>
  
);

export default FavoritePage;
