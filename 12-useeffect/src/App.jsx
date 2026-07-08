import { useEffect } from "react"
import { useState } from "react"

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const aChanging = () => {
    console.log("Value of a is changing")
  }

  const bChanging = () => {
    console.log("Value of b is changing")
  }

  useEffect(() => {
    aChanging()
  },[a])

  useEffect(() => {
    bChanging()
  },[b])

  return (
    <div className="container">
      <h1 className="a_value">A is {a}</h1>
      <h1 className="b_value">B is {b}</h1>

      <button className="btn" onClick={() => {
        setA(a+1)
      }}>Change A</button>

      <button className="btn" onClick={() =>{
        setB(b+1)
      }}>Change B</button>
    </div>
  )
}

export default App