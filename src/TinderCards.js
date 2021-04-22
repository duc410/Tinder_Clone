import React, { useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people,setPeople]=useState([
        {
           name:"Evelyn Claire",
           url:"https://i.pinimg.com/236x/35/3d/e7/353de7c7914ca3ec43b6fc960309866c.jpg",
        },
        {
            name:"Nicole Kidman",
            url:"https://www.elle.vn/wp-content/uploads/2013/07/08/dien-vien-nicole-kidman-ellenetwork-ellevn-e1440159107671.jpg",
        }
    ]);

    const swiped=(dir,character) => {
        console.log("Removing: "+character);
    }

    const outOfFrame=(name)=>{
        console.log(name + "left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="CardContainer">
            {people.map((person) =>(
               <TinderCard
                 className="swipe"
                 key={person.name}
                 preventSwipe={["up","down"]}
                 onSwipe={(dir)=> swiped(dir,person.name)}
                 onCardLeftScreen={()=>outOfFrame(person.name)} 

               >
                   <div 
                    style={{backgroundImage:`url(${person.url})`}}
                    className="card"
                   >
                       <h3>{person.name}</h3>
                   </div>
               </TinderCard>
             ))} 
            </div>
        </div>
    )
}

export default TinderCards
