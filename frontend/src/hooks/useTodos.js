import { useEffect, useState } from 'react';
import { getTodos } from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    function addToDo(toDo){
        setTodos([...todos,toDo])
    }

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    return [todos,addToDo];
}
