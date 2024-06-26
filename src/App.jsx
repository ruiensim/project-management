import SideBar from "./componet/SideBar";
import NoProjectSelected from "./componet/NoProjectSelected";
import NewProject from "./componet/NewProject";
import { SelectedProject } from "./componet/SelectedProject";
import { useState } from "react";

function App() {

  const[projectState,setProjetState] = useState({
      projectId : undefined,
      project : [],
      task : []
  });

 function handleSelect(id){
  setProjetState((prevState)=>{
    return{
    ...prevState,
    projectId : id
    }
  })
 }

 function handleClick(){
    setProjetState((prevState)=>{
      return{
      ...prevState,
      projectId : null
      }
    })
 }

 function handleClose(){
  setProjetState((prevState)=>{
    return{
    ...prevState,
    projectId : undefined
    }
  })
}

function handleDelete(){
  setProjetState((prevState)=>{
    return{
    ...prevState,
    projectId : undefined,
    project : prevState.project.filter(project => project.id !== prevState.projectId)
    }}
    )
  
}

 function addProject(input){
  const projectId = Math.random();
  const newfile = {
    ...input,
    id : projectId
  }
  setProjetState((prevState)=>{
    return{
    ...prevState,
    projectId : undefined,
    project : [...prevState.project,newfile]
    }
  })
 }
 function addTask(text){
  const taskId = Math.random();
  setProjetState((prevState)=>{
    const newfile = {
      text : text,
      id : taskId,
      projectId : prevState.projectId
    }
    return{
    ...prevState,
    task : [...prevState.task,newfile]
    }
  })
 }

 function deleteTask(id){
  setProjetState((prevState)=>{
    return{
    ...prevState,
    task : prevState.task.filter(task => task.id !== id)
    }}
    )

 }

 const selectedProject = projectState.project.find(project => project.id === projectState.projectId);

 let content =<SelectedProject 
 task={projectState.task} 
 project={selectedProject} 
 handleDelete = {handleDelete} 
 addTask={addTask} 
 deleteTask={deleteTask}/>;

 if(projectState.projectId === null)
 {
   content = <NewProject onClose={handleClose} addProject={addProject}/>
 }
 else if(projectState.projectId === undefined)
 {
   content = <NoProjectSelected addProject={handleClick}/>
 }

  return (
    <main className="h-screen my-2 flex gap-8">
      <SideBar selectedProjectId = {projectState.projectId} handleSelect={handleSelect} addProject={handleClick} project={projectState.project}/>
      {content}
    </main>
  );
}

export default App;
