import { useState } from "react";

import "./App.css";

function App() {  
 
  let [color, setcolor] = useState("yellow");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-3xl font-bold text-center">Background changer</h1>
        <div className="fixed flex flex-wrap justify-center  inset-x-0 px-12 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-transparent m-6">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2  px-5 border-spacing-30 rounded-3xl"
              onClick={() => setcolor("red")}
            >
              Red
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded-3xl"
              onClick={() => setcolor("Green")}
            >
              Green
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-3xl"
              onClick={() => setcolor("blue")}
            >
              Blue
            </button>
          
            
            <button
              className="bg-slate-950 hover:bg-slate-950 text-white font-bold py-2 px-4  rounded-3xl"
              onClick={() => setcolor("black")}
            >
              black
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4  rounded-3xl"
              onClick={() => setcolor("yellow")}
            >
              yellow
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4  rounded-3xl"
              onClick={() => setcolor("purple")}
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
