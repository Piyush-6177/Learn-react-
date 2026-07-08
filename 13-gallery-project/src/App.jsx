import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    // console.log(response.data)
    setUserData(response.data);
  };

  let printUserData = (
    <h2 className="font-semibold text-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">
      Loading...
    </h2>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx} className="p-1">
          <Card elem={elem} />
        </div>
      );
    });
  }

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="flex flex-col  bg-black p-4 py-10 gap-10 h-screen  text-white overflow-auto scrollbar-thin">
      {/* <button 
        className='bg-gray-500 text-white rounded py-2 px-4 m-4 active:scale-95'
        onClick={getData}
      >Get data</button> */}

      {/* TOP HEADER */}
      <div className="flex items-center justify-center gap-4 p-5">
        <img className="h-12 w-12" src="https://cdn-icons-png.flaticon.com/512/8377/8377243.png" alt="" />
        <h1 className="text-4xl font-mono font-">Gallery</h1>
      </div>

      {/* IMAGES */}
      <div className="flex flex-wrap flex-1 py-5 px-9 relative ">{printUserData}</div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-8 p-4 items-center ">
        {/* PREV BUTTON */}
        <button
          onClick={() => {
            if(index > 1){
              setIndex((index) => index - 1)
              setUserData([]);
            }
          }}
          // disabled={index<=1}
          style={{opacity: index<=1 ? 0.5 : 1}}
          className="bg-[#3f80ec] text-black font-bold py-3 px-6 rounded-lg active:scale-95"
        >
          Prev
        </button>

        {/* PAGE NUMBER */}
        <h4>Page {index}</h4>

        {/* NEXT BUTTON */}
        <button
          className="bg-[#3f80ec] text-black font-bold py-3 px-6 rounded-lg active:scale-95"
          onClick={() => {
            setIndex((index) => index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
