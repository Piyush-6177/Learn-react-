import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  // FETCH METHOD
  // const getData = async () => {
  //   console.log("fetching data...");
  //   const response = await fetch('https://picsum.photos/200/300?grayscale')

  //   // const data = await response.json

  //   console.log(response)
  // }


  // USING AXIOS
  const getData = async () => {
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    console.log("fetching...");
    
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData} className="btn">Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return <div key={idx} >{idx} Hello {elem.author}</div>
        })}
      </div>
    </div>
  )
}

export default App