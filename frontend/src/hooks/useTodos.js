import { useEffect, useState } from 'react';
import {getTodos, postToDo} from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    function addToDo(toDo){
        postToDo(toDo).then(newTodo => setTodos([...todos,newTodo]))
    };

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    return [todos,addToDo];
}
