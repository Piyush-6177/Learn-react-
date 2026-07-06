import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseBy1(){
    setNum(num+1)
  }
  function decreaseBy1(){
    setNum(num-1)
  }
  function double(){
    setNum(num*2)
  }
  function half(){
    setNum(num/2)
  }

  // batch update
  // function increase(){
  //   setNum(prev => prev + 1)
  //   setNum(prev => prev + 1)
  //   setNum(prev => prev + 1)
  // }

  return (
    <div>
      <div className="counter">
        <div className="count">{num}</div>

        <div className="add">
          <button className="increase btn" onClick={increaseBy1}>Increase</button>
          <button className="decrease btn" onClick={decreaseBy1}>Decrease</button>
        </div>
        <div className="mul">
          <button className='double btn' onClick={double}>Double</button>
          <button className='half btn' onClick={half}>Half</button>
        </div>
      </div>
    </div>
  )
}

export default App