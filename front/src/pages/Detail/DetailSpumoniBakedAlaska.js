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
            <h2>Spumoni Baked Alaska</h2>
            <div className="dr">
                <div id="date">
                    <p4>25 March 2022</p4>
                </div>
                <div id="rate">
                    <p5>4.5 ✰ ✰ ✰ ✰ ✰</p5>
                </div>
            </div>
            <div className="detailpic">
                <div id="pic1"><img id="donut1" src={require("./pics/Spumoni-Baked-Alaska_EXPS_THCA19_86684_C02_23_1b-1 1.png")}/></div>
            </div>
            </div>
        </main>
        <div id="content">
            <div className="text">
            <p id="detail">Ingredients 1/2 cup butter, cubed 2 ounces unsweetened chocolate, chopped 1 cup sugar 1 teaspoon vanilla extract 2 large eggs, room temperature 3/4 cup all-purpose flour 1/2 teaspoon baking powder 1/2 teaspoon salt 1 cup chopped hazelnuts 2 quarts vanilla ice cream, softened, divided 1/2 cup chopped pistachios 1/2 teaspoon almond extract 6 drops green food coloring, 
            optional 1/3 cup chopped maraschino cherries 1 tablespoon maraschino cherry juice 1 tablespoon rum
                <br></br>
                Directions 1.Preheat oven to 350°. In a microwave-safe bowl,
                 melt butter and chocolate; stir until smooth. Stir in sugar and vanilla. Add eggs, 1 at a time, beating well after each addition. Combine the flour, baking powder and salt; gradually stir into chocolate mixture. Stir in hazelnuts. 2.Spread into a greased 8-in. round baking pan. Bake until a toothpick inserted in the center comes out with moist crumbs (do not overbake), 35-40 minutes. Cool 10 minutes before removing from pan to a wire rack to cool completely. 3.Meanwhile, line an 8-in. round bowl (1-1/2 qt.) with foil. In a smaller bowl, place 1 qt. ice cream; add the pistachios, almond extract and, if desired, food coloring. Quickly spread ice cream over bottom and up sides of foil-lined bowl, leaving the center hollow; cover and freeze for 30 minutes. 4.In a small bowl, combine cherries, cherry juice, rum and remaining 1 qt. ice cream. Pack ice cream into hollow center of 8-in. bowl; cover and freeze. 5.In a large heavy saucepan, combine egg whites, sugar and cream of tartar. With a hand mixer, beat on low speed 1 minute. Continue beating over low heat until egg mixture reaches 160°, about 8 minutes. Transfer to a bowl; beat until stiff glossy peaks form and sugar is dissolved. 6.Place brownie on an ungreased foil-lined baking sheet; top with inverted ice cream mold. Remove foil. Immediately spread meringue over ice cream, sealing to edges of brownie. Freeze until ready to serve, up to 24 hours. 7.Preheat oven to 400°. Bake until meringue is lightly browned, 
                2-5 minutes. Transfer to a serving plate; serve immediately.</p>
            </div>
        </div>
    </div>
  )
}

export default Detail