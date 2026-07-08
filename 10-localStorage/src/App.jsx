
const App = () => {

  const user = {user: "Conrad", age :22}
  localStorage.setItem('user',JSON.stringify(user))
  localStorage.clear()
  const d = JSON.parse(localStorage.getItem('user'))
  localStorage.removeItem('user')
  console.log(d);
  
  return (
    <div>App</div>
  )
}

export default App