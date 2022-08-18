import React, { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
const App = () => {
  const [stateAuth, setStateAuth] = useState()
  const response = (res) => {
    setStateAuth(res)
  }
  return (
    <div
    >
      {!stateAuth ?
        <Login response={response} />
        :
   <Logout response={response} />
       
      }
    </div>
  )
}

export default App