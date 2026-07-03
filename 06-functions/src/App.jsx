const App = () => {
  function inputChanging(val) {
    console.log(val);
  }

// we can trigger function like events three ways :
// 1. call it directly via () 
// 2. just write the function name 
// 3. call it inside another function 

  return (
    <div>
      <div className="box">
        <input
          // called the function inside another function 
          onChange={function (elem) {
            inputChanging(elem.target.value);
          }}
          className="input"
          type="text"
          placeholder="Enter Name"
        />
      </div>
    </div>
  );
};

export default App;
