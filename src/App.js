import { useEffect,useState } from "react";


function App() {
  let data = null;
  let input = null;
  let [todos,setTodos] = useState([])
 
  useEffect(async () => {
    data = await fetch("http://localhost:8072/");
    
    let todo = await data.json()
    console.log(todo)
    setTodos(todo)

  }, [])
  const addTodo = async () => {
    if(input)
    {
      data = await fetch("http://localhost:8072/", {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo: input })
    });
    setTodos([...todos , input])
    console.log(data)
    }
    
  }

  const removeTodo = async (todo,pos) => {
    
    data = await fetch(`http://localhost:8072/`, {
      method: 'DELETE',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo })
    });
    let todosCopy = [...todos]
    todosCopy.splice(pos,1)
    setTodos([...todosCopy])
    //console.log(data)
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-900 ">
      <div className="flex flex-row">
        <input type="text" onChange={(e) => {
          if(e.target.value)
          {
            input = e.target.value
          }
        }} className="border-solid border-2 border-sky-500 font-Inconsolata focus:outline-none" />
        <button onClick={addTodo} className="bg-cyan-600 px-3 py-2.1 ml-3 hover:bg-cyan-900 font-Inconsolata text-white">Add</button>
      </div>
      <div className="grid gap-20 grid-cols-2 mt-3 h-72 overflow-y-scroll">
        {todos?.map((todo,i) => {
         return ( <>
            <span  className="text-white font-Inconsolata">{todo.replace(/\"/g,"")}</span>
            <div >
              
              <button onClick={()=>removeTodo(todo,i)} className="bg-red-400">❌</button>
            </div></>)
        })}

      </div>
    </div>
  );
}

export default App;
