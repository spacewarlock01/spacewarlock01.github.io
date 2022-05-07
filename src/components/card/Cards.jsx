/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Card from "./Card";
//import './Cards_nav.css';


const Cards = () =>{

    const [cardInfo, setCardInfo] = useState([
        {id: 1, title: 'Cryptography', desc:'CRYPTOGRAPHY', complete: false },
        {id: 2, title: 'OSINT', desc:'OPEN SOURCE INTELLIGENCE', complete: false},
        {id: 3, title: 'Wireshark', desc:'NETWORK ANALYSIS', complete: false},
        {id: 4, title: 'Steganography', desc:'SECRET WRITING', complete: false},
        {id: 5, title: 'SQLi', desc:'SQL INJECTION', complete: false},
        {id: 6, title: 'XSS', desc:'CROSS SITE SCRIPTING', complete: false},
        {id: 7, title: 'BA', desc:'BROKEN AUTHENTICATION', complete: false},
        {id: 8, title: 'BAC', desc:'BROKEN ACESS CONTROL', complete: false},
        {id: 9, title: 'SDE', desc:'SENSITIVE DATA EXPOSURE', complete: false},
        {id: 10, title: 'Miscellaneous', desc:'DIVERSIFIED', complete: false},
        {id: 11, title: 'Quiz', desc:'QUIZZES', complete: false},
    
    ])

    // const [cardInfo, setCardInfo] = useState([
    //     {id: 1, title: 'Cryptography 1', desc:'dhejwkwq', complete: false },
    //     {id: 2, title: 'Cryptography 2', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 3, title: 'Cryptography 3', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 4, title: 'OSINT 1', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 5, title: 'OSINT 2', desc:'', complete: false},
    //     {id: 6, title: 'OSINT 3', desc:'', complete: false},
    //     {id: 7, title: 'Network Analysis 1', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 8, title: 'Network Analysis 2', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 9, title: 'Network Analysis 3', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 10, title: 'Steganography', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 11, title: 'SQL 1', desc:'gbvhekjdlgnvbgn', complete: false},
    //     {id: 12, title: 'SQL 2', desc:'', complete: false},
    //     {id: 13, title: 'SQL 3', desc:'', complete: false},
    //     {id: 14, title: 'Broken Access Control 1', desc:'', complete: false},
    //     {id: 15, title: 'Broken Access Control 2', desc:'', complete: false},
    //     {id: 16, title: 'Broken Access Control 3', desc:'', complete: false},
    //     {id: 17, title: 'Misc 1', desc:'', complete: false},
    //     {id: 18, title: 'MISC 2', desc:'', complete: false},
    //     {id: 19, title: 'MISC 3', desc:'', complete: false},
    //     {id: 20, title: 'XSS 1', desc:'', complete: false},
    //     {id: 21, title: 'XSS 2', desc:'', complete: false},
    //     {id: 22, title: 'XSS 3', desc:'', complete: false},
    //     {id: 23, title: 'Broken Authentication 1', desc:'', complete: false},
    //     {id: 24, title: 'Broken Authentication 2', desc:'', complete: false},
    //     {id: 25, title: 'Broken Authentication 1', desc:'', complete: false},
    //     {id: 26, title: 'Sensitive Data Exposure 1', desc:'', complete: false},
    //     {id: 27, title: 'Sensitive Data Exposure 2', desc:'', complete: false},
    //     {id: 28, title: 'Sensitive Data Exposure 3', desc:'', complete: false},
    
    // ])

    useEffect(()=>{
        // call to database for all contest info
        // fetch(data);
        // setCardInfo(data);

    },[])
    return(
        <div className="Cards">
            {cardInfo.map((card)=>{
                return(
                    <Card className="card" state={card} key={card.id}/>                
                )
            })}
        </div>
    );
}

export default Cards;