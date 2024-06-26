import { useState } from "react"

export default function NewTask({addTask}){
    const[input,setInput] = useState('');
    function handleChange(event){
        setInput(event.target.value);
    }
    function handleClick(){
        if(input.trim() !== ""){
            addTask(input);
            setInput('');
        }
       
    }
    return(
        <div className="flex items-center gap-4">
            <input 
            type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={input}
            >
            </input>
            <button onClick = {handleClick} className="text-stone-700 hover:text-stone-600">Add Task</button>
        </div>
    )
}