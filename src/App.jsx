import { useState } from 'react'
import './App.css'
import Todowrapper from './Components/Todowrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='TodoWrapper'>
       <Todowrapper />
    </div>
  )
}

export default App
