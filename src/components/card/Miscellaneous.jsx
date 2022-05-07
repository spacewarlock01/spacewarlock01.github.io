/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const Miscellaneous = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 32, title: 'Dump-it!', desc:'Easy', complete: false },
        {id: 33, title: 'Emoticons', desc:'Easy', complete: false},
        {id: 34, title: 'Connect-the-Dots', desc:'Medium', complete: false},
        {id: 35, title: 'Trashhunting', desc:'Medium', complete: false},
        {id: 36, title: 'Magic-Image', desc:'Medium', complete: false },
        {id: 37, title: 'Doc-play', desc:'Medium', complete: false},
        {id: 38, title: 'Unzip', desc:'Hard', complete: false },
        {id: 39, title: 'Fine-Tuning', desc:'Hard', complete: false },
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">Miscellaneous</h1>
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

export default Miscellaneous;