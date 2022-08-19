import React, { useState ,useRef, useEffect} from 'react'
import { GoogleLogout } from 'react-google-login';
import "./styles.css";
const Logout = (props) => {
    const logout = ()=>{
       
        props.response()
        props.handleBreak(false)
    }
    const clientId= "600277441932-dvv8ilqfvj9vevlm83babpm897htruvm.apps.googleusercontent.com";
    const padTime = (time) => {
        return time.toString().padStart(2, "0");
      };
      // State Variables
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef(null);
  // Functions
  // Strat Timer Function
  const startTimer = () => {
  
    if (intervalRef.current !== null) return;

    setIsRunning(true);

    // Creating a interval to update the time in every 1 second
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft > 0) return timeLeft - 1;

        if(timeLeft == 0) return handleBreakTime();

       

        return 0;
      });
    }, 1000)
    ;
    
  };

// break timer
const handleBreakTime=()=>{
    resetTimer(1);
    setIsBreak(true)
     // Creating a interval to update the time in every 1 second
     intervalRef.current = setInterval(() => {
        setTimeLeft((breakTimeLeft) => {
          if (breakTimeLeft > 0) return breakTimeLeft - 1;
           
            setIsBreak(false);
            
            resetTimer(25)
          return 0;
        });
      }, 1000)
  
}

  const stopTimer = () => {
    
    if (intervalRef.current === null) return;

    setIsRunning(false);

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  // Reset Timer Function (almost same as Stop Timer Function)
  const resetTimer = (val) => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
   setTimeLeft(val * 60)
   setIsRunning(false)
  };


    return (
        <div className='container' >
            {/* timer here */}
            <p className='headerText'>POMODORO TIMER</p>
        <div  className='timerDisplay'>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
      </div>
      {isBreak?<p className='title'>Break Time</p>:null}
      <div className='buttonGroup'>

            {!isRunning && !isBreak? <button  className ="buttonStyle" onClick={startTimer}>Start</button>:null}

        {isRunning && <button className ="buttonStyle" onClick={stopTimer}>Pause</button>}

        {<button className ="buttonStyle" onClick={()=>{resetTimer(25)}}>Reset</button>}
            {/* <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button> */}
        </div>
        <div>
        <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
        />
        </div>
            
        </div>
    )
}

export default Logout;

