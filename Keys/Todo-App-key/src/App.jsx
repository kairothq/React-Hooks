import {useState} from "react"

let counter = 4;

function App(){
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: " go to gym description"},{
    },
    {
    id:2,
    title: "go to gym",
    description: " go to gym description"
  },
    {
    id:3,
    title: "go to gym",
    description: " go to gym description"
    
  }]);

  function addTodo(){
    setTodos([...todos, {
      id: counter ++ ,
      title:Math.random(),
      description: Math.random ()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}> Add a todo</button>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
  }

  function todo({title, description}){
    return <div>
      <h1>
        {title}
      </h1>
      <h4>
        {description}
      </h4>
    </div>
  }
export default App