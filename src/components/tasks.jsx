import React from 'react'
import { Trash2, Circle, CheckCircle} from "lucide-react";

const Tasks = ({todo, removeTodo, toggleComplete, isSelected, onClick}) => {
  return (
    <div className={` w-72 h-14 flex flex-row items-center p-4 ml-4 bg-bg-task border rounded-lg border-zinc-text`} 
    >
      <div className={`flex flex-row gap-4 items-center w-full  ${isSelected ? "selected-task line-through" : ""}`}
      onClick={onClick}
      >
      {isSelected ? (
        <CheckCircle onClick={toggleComplete} />
        ) : (
          <Circle onClick={toggleComplete} />
          )
      }

      <p className={` text-white `}>{todo.text}
      </p>
      </div>

        <button onClick={removeTodo} className='text-red-text  '>  
      <Trash2/>
        </button>
  </div>
  )
}

export default Tasks