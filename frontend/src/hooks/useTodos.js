import { useEffect, useState } from 'react';
import {getTodos, postToDo, putToDo, deleteToDoItem} from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    function addToDo(toDo){
        postToDo(toDo).then(newTodo => setTodos([...todos,newTodo]))
    };

    function updateToDo(todo){
        putToDo(todo)
            .then(newProgress => setTodos([...todos
                .filter(todo => todo.id !== newProgress.id),newProgress]))
            .catch(response => console.log(response));
    }

    function deleteToDo(idToDelete) {
        deleteToDoItem(idToDelete)
            .then(() => setTodos(todos
                .filter(todo => todo.id !== idToDelete)));
    }


    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    return [todos,addToDo, updateToDo, deleteToDo];


}
