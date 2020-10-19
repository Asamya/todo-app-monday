import {useState} from "react";


export default function useToDoForm(addToDo) {
    const[description, setDescription] = useState('Da jetzt hier, vielleicht!')

    const changeDescription = event => setDescription(event.target.value);
    const submitForm = event => {
        event.preventDefault();
        addToDo({description, status:"OPEN"})
    };

    return {changeDescription,submitForm,description}
}