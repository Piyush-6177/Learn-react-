const App = () => {
  const arr = [10,20,30,40] ;

  return (
    <div className="parent">
        {arr.map(function(elem){
        return elem
      })}
    </div>
  )
}

export default App