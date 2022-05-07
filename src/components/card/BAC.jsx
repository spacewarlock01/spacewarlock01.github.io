/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const BAC = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 14, title: 'Profiling', desc:'Easy', complete: false },
        {id: 15, title: 'Rocket-Science', desc:'Medium', complete: false},
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">Broken Access Control</h1>
            <div className="cardWrapper">
                {cardInfo.map((card)=>{
                    return(
                        <SpecificCardDisplay className="card" state={card} key={card.id} />
                    )
                })}
            </div>
        </div>
    );
}

export default BAC;