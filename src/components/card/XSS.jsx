/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const XSS = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 20, title: 'Cookie-Dough', desc:'Easy', complete: false },
        {id: 21, title: 'Cookie-in-the-Oven', desc:'Medium', complete: false},
        {id: 22, title: 'In-the-Cookie-Jar', desc:'Hard', complete: false },
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">Cross-Site Scripting</h1>
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

export default XSS;