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
            <h2>Ice-Cream Tacos</h2>
            <div className="dr">
                <div id="date">
                    <p4>29 March 2022</p4>
                </div>
                <div id="rate">
                    <p5>5.0 ✰ ✰ ✰ ✰ ✰</p5>
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
            <p id="detail">Ingredients 2 flour tortillas (6 inches) 1/8 teaspoon ground cinnamon 2 tablespoons canola oil 2 tablespoons chopped pecans 2 tablespoons sweetened shredded coconut 1 drop green food coloring 1 cup chocolate ice cream 1/4 cup 
            whipped topping 6 maraschino cherries, halved
                <br></br>
                Directions 1.Sprinkle one side of each tortilla with cinnamon. In a large skillet, heat oil over medium heat. Add tortillas, one at a time, cinnamon side up. When tortilla starts to brown, fold into a taco shape; drain on paper towels. 2.In the same skillet, cook and stir pecans for 2 minutes or until lightly toasted. In a small bowl, stir coconut and food coloring until coconut is evenly tinted. Place two small scoops of ice cream in each tortilla shell; top with whipped topping, cherries, pecans and coconut. 
                ICE CREAM TACO TIPS Can I use homemade ice cream in an Ice Cream Taco?</p>
            </div>
        </div>
    </div>
  )
}

export default Detail