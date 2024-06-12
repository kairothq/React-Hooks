import { useEffect, useState } from "react"


function App() {
  const [id, setId] = useState(1);

  
  return (<div>
    <button onClick={()=> {setId(id+1);}}> Next </button> {/* Also we used the ; after the setId to terminate the => fn */}
    <Todo id = {id} />
    </div>
  )
}


function Todo({id}){
  const[todo,setTodo]= useState({});

  useEffect(()=>{ fetch("https://sum-server.100xdevs.com/todo?id="+id).then(async (res) => { /* shift+alt+A to put this comment thing  */
    const json= await res.json();/*  this above removing the id=1 and changing it to id="+id is very imp */
    setTodo(json.todo);
  })
}, [id])

  return <div>
    <h1>
    {todo.title}
    </h1>
    <h5>    {todo.description}
    </h5>
    </div>
  }

export default App
