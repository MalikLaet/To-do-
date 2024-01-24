import { useState } from "react";
import AddTask from "./components/addTask";
import Tasks from "./components/tasks";

export default function App() {
  const [todos, setTodos] = useState([ ])
  const [selectedTask, setSelectedTask] = useState(null)

  const addTodo = (text) => {
    const newTask = 
      {
        id: Math.floor(Math.random() * 1000),
        text,
        isCompleted: false,
      };

    setTodos([...todos, newTask])
  }

  const removeTodo = (taskId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== taskId)
    setTodos(updatedTodos)
  }

  const toggleComplete = (taskId) => {
    const updatedTodos = todos.map((todo) => 
    todo.id === taskId ? {...todo, isCompleted: !todo.isCompleted} : todo
    )
      setTodos(updatedTodos)
    }

    const handleTaskClick = (taskId) => {
      setSelectedTask(taskId === selectedTask ? null :taskId)
    }

  return (
    <div className=" h-screen flex justify-center pt-48 bg-zinc-300">
      <div className="bg-zinc w-80 h-5/6 text-white flex flex-col ">
        
        <h1 className="text-red-text font-semibold text-3xl p-4">To-do</h1>

          <AddTask 
           addTodo = {addTodo} />

        <h2 className="text-2xl p-4 col-zinc-text">Tasks</h2>

         <div className="flex flex-col gap-4">
           {todos.map((todo) => (
            <Tasks 
            key={todo.id}
            todo = {todo}  
            removeTodo={() => removeTodo(todo.id)} 
            toggleComplete={() => toggleComplete(todo.id)}
            isSelected= {todo.id === selectedTask}
            onClick={() => handleTaskClick(todo.id)}
            />
           ))}
          </div>
      </div>
    </div>
  );
}


