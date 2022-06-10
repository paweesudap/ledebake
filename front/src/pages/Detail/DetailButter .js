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
            <h2>Butter Pecan Pumpkin Pie</h2>
            <div className="dr">
                <div id="date">
                    <p4>4 April 2022</p4>
                </div>
                <div id="rate">
                    <p5>4.0 ✰ ✰ ✰ ✰ ✰</p5>
                </div>
            </div>
            <div className="detailpic">
                <div id="pic1"><img id="donut1" src={require("./pics/Butter-Pecan-Pumpkin-Pie_EXPS_PCBZ20_28502_E02_25_6b_fork-9 1")}/></div>
            </div>
            </div>
        </main>
        <div id="content">
            <div className="text">
            <p id="detail">Best Ingredients to Use for Homemade Doughnuts
                We’re using a straightforward dough for today’s doughnuts. You only need a few ingredients to begin.
                <br></br>
                Ingredients 1 sheet refrigerated pie crust 1 quart butter pecan ice cream, softened 1 cup canned pumpkin 1/2 cup sugar 1/4 teaspoon each ground cinnamon, ginger and nutmeg 1 cup heavy whipping cream, whipped Optional: Hot caramel ice cream topping and chocolate ice cream topping Directions 1.Unroll crust into a 9-in. pie plate; flute edge. Refrigerate 30 minutes. Preheat oven to 400°. 2.Line crust with a double thickness of foil. Fill with pie weights, dried beans or uncooked rice. Bake on a lower oven rack until edges are golden brown, 15-20 minutes. Remove foil and weights; bake until bottom is golden brown, 3-6 minutes longer. Cool on a wire rack. 3.Spread ice cream into crust; freeze until firm, about 2 hours. 4.In a small bowl, combine pumpkin, sugar, cinnamon, ginger and nutmeg; fold in whipped cream. Spread over ice cream. Cover and freeze until firm, about 2 hours. (Pie may be frozen for up to 2 months.) 5.Remove from freezer 15 minutes before slicing. If desired, drizzle with ice cream toppings and dollop with additional whipped cream.</p>
            </div>
        </div>
    </div>
  )
}

export default Detail