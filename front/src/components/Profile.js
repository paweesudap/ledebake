import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className="profilebody">
        <div id="profile">
            <div className="profile-con">
                <div className="profile-pic">
                    <img id="pic" src={require("../components/pic/profile.jpg")}/>
                </div><br></br>
                <h1>Aurelia Reyes</h1><br></br>
                <p id="country">America, USA</p>
                <p id="myinfo">This blog is where I share all of my creations! Here you'll find beautiful Cakes and Desserts as well as other savory dishes my family enjoys.</p>
                    <div className="morebutton">
                        <button id="jbuttonn">MORE ABOUT ME</button>
                    </div>
                    <hr></hr>
                    <div className="contact">
                        <p id="contactt">CONTACT EMAIL</p><br></br>
                        <p id ="email">aurelia_reyes@yahoo.com</p><br></br>
                        <p id="social">SOCIALS</p>
                        <div className="social">
                            <div id="media1"><img id="facebook" src={require("../components/pic/facebook.png")}/></div>
                            <div id="media2"><img id="instagram" src={require("../components/pic/instagram.png")}/></div>
                            <div id="media3"><img id="twitter" src={require("../components/pic/twitter.png")}/></div>
                            <div id="media4"><img id="youtube" src={require("../components/pic/youtube.png")}/></div>
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile