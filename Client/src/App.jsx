import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/Sign-Up'
import Home from './pages/Home'
import Signin from './pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Signin/>
      </>
   
      <SignUp/>
      <Home/>
    </>

  )
}

export default App
