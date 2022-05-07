/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const Quiz = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 1, title: 'Linux-Commands', desc:'#', complete: false },
        {id: 2, title: 'Secure-Coding', desc:'#', complete: false},
        {id: 3, title: 'Risk-Management', desc:'#', complete: false },
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">Quiz</h1>
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

export default Quiz;