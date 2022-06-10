import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import "./Recipe.css"

function Recipe(props) {
  return (
    <div className="recipe">
        <div className="ds">
        <div className="dessert1">
            <div className="dpic">
                <img id="piccc" src={props.img}/>
            </div>
            <div className="dt">
                <p id="day">{props.day}</p>
                <p id="star">{props.star}</p>
            </div>
            <h1 id= "dname">{props.dname}</h1>
            <div className="goto">
                <NavLink exact activeClassName="active" to="/Detail">
                <button id="go">Go to Recipe</button>
                </NavLink>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Recipe