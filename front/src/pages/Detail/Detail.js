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
            <h2>Simple Homemade Sugar Donuts</h2>
            <div className="dr">
                <div id="date">
                    <p4>4 April 2022</p4>
                </div>
                <div id="rate">
                    <p5>4.0 ✰ ✰ ✰ ✰ ✰</p5>
                </div>
            </div>
            <div className="detailpic">
                <div id="pic1"><img id="donut1" src={require("./pics/pic1.png")}/></div>
                <div id="pic2"><img id="donut2" src={require("./pics/pic2.png")}/></div>
            </div>
            </div>
        </main>
        <div id="content">
            <div className="text">
            <p id="detail">Best Ingredients to Use for Homemade Doughnuts
                We’re using a straightforward dough for today’s doughnuts. You only need a few ingredients to begin.
                <br></br>
                Milk: Liquid activates the yeast. Whole milk is a must for the most tender dough– or you can try buttermilk. Lower fat or nondairy milks work in a pinch, but the doughnuts aren’t as flavorful or rich.
                Yeast: You can use active dry yeast or instant yeast. If using an instant yeast, your rise time will be a little shorter.
                Eggs: Eggs provide structure and flavor.
                Butter: Melted butter promises enhanced flavor.
                Salt & Vanilla Extract: Both add flavor. Try using homemade vanilla extract.</p>
            </div>
        </div>
    </div>
  )
}

export default Detail