/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const OSINT = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 40, title: 'Finding_Mr.X', desc:'Easy', complete: false },
        {id: 41, title: 'Spill_the_Beans', desc:'Medium', complete: false},
        {id: 42, title: 'Bits-&-Pieces', desc:'Hard', complete: false},
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">OSINT</h1>
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

export default OSINT;