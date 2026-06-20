const App = () => {
  const arr = [10,20,30,40] ;

  const a = [
    {
      username : 'Jason Dessen',
      show : 'Dark Matter'
    },
    {
      username : 'Boyd Stevens',
      show : 'From'
    },
    {
      username : 'Jonas Kahnwald',
      show : 'Dark'
    }
  ]

  return (
    <div className="parent">
        {a.map(function(elem){
        return elem.username 
      })}
    </div>
  )
}

export default App