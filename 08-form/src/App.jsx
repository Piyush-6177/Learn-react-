import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted")

    setTitle('')
  }

  return (
    <div>
      <form action="" onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input 
          type="text" 
          placeholder="Your name here"
          value={title}
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App