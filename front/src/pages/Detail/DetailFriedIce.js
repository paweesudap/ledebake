import React , { useEffect} from 'react';
import './detail.css'
import Profile from '../../components/Profile'

function Detail() {
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
    <div className="detail-con">
        <div id="profile">
            <Profile />
        </div>
        <main>
            <div id="allc">
            <h2>Fried Ice Cream Dessert Bars</h2>
            <div className="dr">
                <div id="date">
                    <p4>2 April 2022</p4>
                </div>
                <div id="rate">
                    <p5>5.0 ✰ ✰ ✰ ✰ ✰</p5>
                </div>
            </div>
            <div className="detailpic">
                <div id="pic1"><img id="donut1" src={require("./pics/FriedIce.png")}/></div>
            </div>
            </div>
        </main>
        <div id="content">
            <div className="text">
            <p id="detail">Ingredients 1/2 cup butter, cubed 2 cups crushed cornflakes 1-1/2 teaspoons ground cinnamon 3 tablespoons sugar 1-3/4 cups heavy whipping cream 1/4 cup evaporated milk 1/8 teaspoon salt 1 can (14 ounces)
             sweetened condensed milk 2 teaspoons vanilla extract Optional: Honey, whipped cream and maraschino cherries
                <br></br>
                Directions 1.In a large skillet, melt butter over medium heat. Add cornflakes and cinnamon; 
                cook and stir until golden brown, about 5 minutes. Remove from heat; stir in sugar. Cool completely. 2.In a large bowl, beat cream, evaporated milk and salt until the mixture begins to thicken. Gradually beat in condensed milk and vanilla until thickened. 3.Sprinkle half the cornflakes onto bottom of a greased 9-in. square baking pan. Pour creamy filling over crust; sprinkle with remaining cornflakes. Cover and freeze overnight. 
                Cut into bars. If desired, serve with honey, whipped cream and cherries.</p>
            </div>
        </div>
    </div>
  )
}

export default Detail