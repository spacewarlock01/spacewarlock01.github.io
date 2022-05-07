import React, {useState, useEffect} from "react";
import './Time.css';

const Time = () =>{
    
    const [timeLeft, setTimeLeft] = useState(10800);
    const getTime = () =>{
        let time = parseInt(timeLeft);
        let hrs = parseInt(time/3600);
        time%=3600;
        let min = parseInt(time/60);
        time%=60;
        let sec = parseInt(time);
        return `${hrs}:${min}:${sec}`;
    }

    useEffect(()=>{
        if(timeLeft !== 0) {
            setTimeout(()=>{
                setTimeLeft((time)=>{
                    return time-1;
                })
            },1000)
        }
    },[timeLeft])

    return(
        <div className="time">
            <h1>{getTime()}</h1>
            <h3>Time Left</h3>
        </div>
    )

    // var[date,setDate] = useState(new Date());
    // useEffect( () => {
    //     var timer = setInterval( ()=> setDate(new Date()),1000)
    //     return function cleanup(){
    //         clearInterval(timer)
    //     }
    // });
    // return(
    //     <div className="time">
    //         <h1>{date.toLocaleTimeString('it-IT')}</h1>
    //         <h3>Time Left</h3>
    //     </div>
    // );
}

export default Time;