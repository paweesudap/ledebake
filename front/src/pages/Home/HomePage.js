import React , { useEffect} from 'react';
import './HomePage.css'
import Card from '../../components/Card'
import image1 from './pic/pic5.png'
import image2 from './pic/pic3.png'
import image3 from './pic/pic4.png'

export default function HomePage() {
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
    <div className="banner">
      <div className="banner-pic">
        <img id="bn" src={require("./pic/branner.png")}></img>
        <div className="bar">
            <button id="b1">Hot Topic</button>
            <button id="b2">Most Viewed</button>
            <button id="b3">New Post</button>
        </div>
      </div>
      <div className="intro">
        <div className="pic">
          <img id="donut" src={require("./pic/pic1.png")}></img>
        </div>
        <div className="data">
            <h1 id="title">
              Baked <br></br></h1>
            <h1 id="title2">Donut <h1 id="title3">Recipe</h1></h1>
            <p>Soft, fluffy, and moist, these Baked Donuts are so easy to make from scratch. This simple baked donut recipe comes together quickly and easily without frying the dough in oil. See More</p>                     
        </div>
      </div>
      <div className="top3">
          <div className="head">
            <div id="top">
              <h1 id="big">Top 3! Most Viewed Of The Week</h1>
            </div>
          </div>
          <div className="menuu">
          <Card 
            img ={image1} 
            pkk = "Pancakes"
            sub1 = "This is a great recipe that I found in my Grandma's recipe book.  Read more"/>
            <Card 
            img ={image2}
            pkk = "Strawberry Cheesecake"
            sub1 = "Follow our step-by-step recipe for this easy no-cook cheesecake.  read more"/>
            <Card 
            img ={image3} 
            pkk = "Tiramisu"
            sub1 = "Tiramisu is probably the most iconic Italian treat and this one does not disappoint!  read more"/>
          </div>
          
      </div>
      <div className="new">
         
      </div>
    </div>
  
)
}

