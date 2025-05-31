import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Order from './pages/Order'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Order/>
    </>

  )
}

export default App
