import React from "react";
import Time from './Time';
import Score from './Score';
import './DateTime.css';

const DateTime = () =>{
   
    return(
        <div className="date-time">
            <Time/>
            <Score/>            
        </div>
       
    );
}

export default DateTime;