/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards_nav.css';

const Crypto = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 28, title: 'Musically', desc:'Easy', complete: false },
        {id: 29, title: 'McConaughey', desc:'Easy', complete: false},
        {id: 30, title: 'Zodiac', desc:'Medium', complete: false},
        {id: 31, title: 'Knock-Knock!', desc:'Hard', complete: false },
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">Cryptography</h1>
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

export default Crypto;