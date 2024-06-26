import Button from "./Button";

export default function SideBar({
    addProject,
    project,
    handleSelect,
    selectedProjectId}){
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
        <h2 className="mb-10 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
        <div>
           <Button onClick = {addProject}>+ Add Project"</Button>
        </div>
        <ul className="mt-8">
        {project.map(item=>{
            let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
            
            if(item.id === selectedProjectId){
                cssClass += " bg-stone-800 text-stone-200"
            }

            return(  
            <li key = {item.id}>
            <button onClick = {()=>handleSelect(item.id)} className = {cssClass}>
                {item.title}
             </button></li>)
          }
            )
             }
        
        </ul>
    </aside>
}