import { useState } from "react";
import { Trash } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    console.log(task);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen max-h-screen overflow-y-auto lg:flex bg-black text-white">
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4 p-10 lg:w-1/2"
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        {/* NOTES HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="h-15 border-2 rounded-xl p-5 w-full font-medium py-2 outline-none"
        />

        {/* NOTES DETAILS */}
        <textarea
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="h-20 border-2 rounded-xl p-5"
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full  active:scale-95 font-bold bg-white text-black p-2 rounded-lg"
        >
          Add note
        </button>
      </form>

      {/* YOUR SAVED NOTES */}
      <div className="lg:w-1/2 lg:border-l-2 h-screen max-h-screen overflow-y-auto scrollbar-none border-t-2 p-10 ">
        <h1 className="text-4xl mb-2 font-bold">Your Notes</h1>

        <div className="flex flex-wrap  mt-5 gap-5  gap-5 ">
          {task.map((elem, idx) => {
            return (

              // NOTES CARD
              <div
                key={idx}
                className={`p-4 flex flex-col backdrop-blur-3xl items-start  relative h-50 w-45 rounded-2xl bg-cover bg-[#1c1c1c]`}
              >
                
              <h3 className="text-[#dcdcdc] pl-1 font-bold text-lg leading-tight mb-4">
                {elem.title}
              </h3>
              
              {/* INNER CARD */}
              <div className="bg-[#2c2c2c] p-2 w-full h-full flex flex-col justify-between rounded-xl border-1 border-[#454545]">
                <p className="text-[#727272] text-sm leading-tight ">
                {elem.details}
              </p>

                <div>
                  <button
                  className="bg-[#ec0e40] p-2  text-black px-2  rounded-full cursor-pointer active:scale-95"
                  onClick={() => {
                    deleteNote()
                  }}
                  >
                    <Trash size={10}/>
                  </button>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
