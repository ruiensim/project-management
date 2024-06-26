import Input from "./Input";
import { useRef } from 'react';
import Modal from "./Modal";


export default function NewProject({addProject,onClose}){
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const validationRef = useRef();

    function handleSave(){
        const enterTitle = titleRef.current.value;
        const enterDescription = descriptionRef.current.value;
        const enterDate = dateRef.current.value;
        if(enterTitle.trim() === '' || enterDescription.trim() === '' || enterDate.trim() === '' ){
            validationRef.current.open();
            return;
        }
        addProject({
            title : enterTitle,
            description : enterDescription,
            date : enterDate
        })
    }
     
    return(
        <>
        <Modal ref={validationRef}><p className="text-xl font-bold text-stone-500 my-4">Please enter valid input</p></Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onClose}>Cancel</button></li>
            <li><button onClick = {handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input type = "text" ref = {titleRef} label="Title"/>
            <Input ref = {descriptionRef} label="Description" textarea/>
            <Input type = "date" ref = {dateRef} label="Due Date"/>
        </div>
    </div>
    </>
    )
}