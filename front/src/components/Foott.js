import "./Foott.css"

export default function Foott(){
    return(
        <footer id="bg">
            <div className='nav'>
                <i className="ioc" aria-hidden="true" id="pad"><img id='sizeic' src={require("./pic/logo_bakery.png")}/></i>
                <div className="alldet">
                <div className="set">
                <p id="si">LET’S BE FRIENDS!</p>
            <div className='per' id="icc">
                <li className="noti"><img id='sizeic' src={require("./pic/facebook.png")}/></li>
                <li className="noti"><img id='sizeic' src={require("./pic/instagram.png")}/></li>
                <li className="noti"><img id='sizeic' src={require("./pic/twitter.png")}/></li>
                <li className="noti"><img id='sizeic' src={require("./pic/youtube.png")}/></li>
                </div>
            </div>
            </div>
            </div>
        </footer>
    )
}