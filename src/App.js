import React, { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import "./App.css";
const App = () => {
  const [stateAuth, setStateAuth] = useState();
  const [breakTime, setBreakTime] =useState(false)
  const response = (res) => {
    setStateAuth(res)
  }
  const handleBreak =(val)=>{
    setBreakTime(val);
  }
  return (
    <div className='outerContainer'
    >
      {!stateAuth ?
        <Login response={response} />
        :
   <Logout response={response} breakTime={breakTime} handleBreak={handleBreak} />
       
      }
    </div>
  )
}

export default App