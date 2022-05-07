/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import SpecificCardDisplay from "./SpecificCardDisplay";
import Nav from "../Nav/Nav"
import './Cards.css';

const Wireshark = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 46, title: 'Length-Request', desc:'Easy', complete: false },
        {id: 47, title: 'Encrypted-Message', desc:'Medium', complete: false},
        {id: 48, title: 'Do_You_Know?', desc:'Hard', complete: false},
        
    
    ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards bg">
            <Nav/>
            <h1 className="heading">Network Analysis</h1>
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

export default Wireshark;