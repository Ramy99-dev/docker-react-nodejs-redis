

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-900 ">
      <div className="flex flex-row">
        <input type="text" className="border-solid border-2 border-sky-500 font-Inconsolata focus:outline-none" />
        <button className="bg-cyan-600 px-3 py-2.1 ml-3 hover:bg-cyan-900 font-Inconsolata text-white">Add</button>
      </div>
      <div className="grid gap-20 grid-cols-2 mt-3">
        <span className="text-white font-Inconsolata">Coding</span>
        <div>
           <button className="bg-green-600 mr-5">👍</button>
           <button className="bg-red-400">❌</button>
        </div>
      </div>
    </div>
  );
}

export default App;
