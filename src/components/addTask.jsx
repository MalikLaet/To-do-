import { useState } from "react";

const AddTask = ({addTodo}) => {
    const [value, setValue] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value)
        setValue("")

       
    }

    return  (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={value}
            minLength={4}
            maxLength={30}
            placeholder="Add your task" 
            onChange={(e) => setValue(e.target.value)}
            className="ml-4 pl-4 flex  border border-black rounded-lg  w-72 bg-zinc text-zinc-text"
            />
        <button className="pl-4 pt-2 text-white hover:text-zinc-text"  type="submit">Adicionar</button>
        </form>
    </div>
    );
}

export default AddTask;

