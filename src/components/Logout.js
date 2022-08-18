import React, { useState ,useRef} from 'react'
import { GoogleLogout } from 'react-google-login';
import "./styles.css";
const Logout = (props) => {
    const logout = ()=>{
       
        props.response()
    }
    const clientId= "600277441932-dvv8ilqfvj9vevlm83babpm897htruvm.apps.googleusercontent.com";
    const padTime = (time) => {
        return time.toString().padStart(2, "0");
      };
      // State Variables
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
 
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

        resetTimer();

        return 0;
      });
    }, 1000);
  };


  const stopTimer = () => {
    if (intervalRef.current === null) return;

 setIsRunning(false);

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };



  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  // Reset Timer Function (almost same as Stop Timer Function)
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
   setTimeLeft(25 * 60)
   setIsRunning(false)
  };
   



    return (
        <div className='container' >
            {/* timer here */}
        <div  className='timerDisplay'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
            <div>

            {!isRunning && <button onClick={startTimer()}>Start</button>}
        {isRunning && <button onClick={stopTimer()}>Pause</button>}
        <button onClick={resetTimer}>Reset</button>
            {/* <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button> */}
            </div>
        <div>
        <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
            
        </div>
    )
}

export default Logout;

 // const Ref = useRef(null);

    // const [timer, setTimer] = useState('00:00:00');
  
  
    // const getTimeRemaining = (e) => {
    //     const total = Date.parse(e) - Date.parse(new Date());
    //     const seconds = Math.floor((total / 1000) % 60);
    //     const minutes = Math.floor((total / 1000 / 60) % 60);
    //     const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    //     return {
    //         total, hours, minutes, seconds
    //     };
    // }
    // const startTimer = (e) => {
    //     let { total, hours, minutes, seconds } 
    //                 = getTimeRemaining(e);
    //     if (total >= 0) {
  
    //         // update the timer
    //         // check if less than 10 then we need to 
    //         // add '0' at the beginning of the variable
    //         setTimer(
    //             (hours > 9 ? hours : '0' + hours) + ':' +
    //             (minutes > 9 ? minutes : '0' + minutes) + ':'
    //             + (seconds > 9 ? seconds : '0' + seconds)
    //         )
    //     }
    // }

    // const clearTimer = (e) => {
  
    //     // If you adjust it you should also need to
    //     // adjust the Endtime formula we are about
    //     // to code next    
    //     setTimer('00:00:10');
  
    //     // If you try to remove this line the 
    //     // updating of timer Variable will be
    //     // after 1000ms or 1sec
    //     if (Ref.current) clearInterval(Ref.current);
    //     const id = setInterval(() => {
    //         startTimer(e);
    //     }, 1000)
    //     Ref.current = id;
    // }
    // useEffect(() => {
    //    startTimer()
    // }, []);

    // const onClickReset = () => {
    //     clearTimer();
    // }