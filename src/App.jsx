import { useState } from 'react'
import './App.css'

import Quote from './comps/Quote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-red-500 to-orange-400 p-3">
        <div className="flex flex-wrap gap-3">
          <Quote text="I don't like people from Bushwick"/>
          <Quote text="I love Gus"/>
          <Quote text="I love Gus"/>
          <Quote text="I love Gus"/>
          <Quote text="I love Gus"/>
        </div>
      </div>
    </>
  )
}

export default App
