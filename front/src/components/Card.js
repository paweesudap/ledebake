import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import "./Card.css"

function Card(props) {
  return (
    <div className="menu">
      <NavLink exact activeClassName="active" to="/Detail">
        <div className="box">
                <div className="boxpic">
                  <img src={props.img}></img>
                </div>
                <h1 id="pkk">{props.pkk}</h1>
                <p id="sub1">{props.sub1}</p>
        </div>
      </NavLink>
      </div>
  )
}

export default Card