/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const SQLi = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 11, title: 'Ingress-Egress', desc:'Easy', complete: false },
        {id: 12, title: 'IV', desc:'Medium', complete: false},
        {id: 13, title: 'Hack-the-Admin', desc:'Hard', complete: false },
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">SQL Injection</h1>
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

export default SQLi;