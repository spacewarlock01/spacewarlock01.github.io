/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const Steganography = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 43, title: 'Hush-Hush!', desc:'Easy', complete: false },
        {id: 44, title: 'BTS', desc:'Medium', complete: false},
        {id: 45, title: 'Covert', desc:'Hard', complete: false },
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">Steganography</h1>
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

export default Steganography;