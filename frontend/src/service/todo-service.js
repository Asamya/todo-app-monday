import axios from 'axios';

const url = 'api/todo';

export const getTodos = () =>
    axios.get(url).then((response) => response.data);

export const postToDo = (todo) =>
    axios.post(url, todo).then(response => response.data);

export const putToDo = (todo) =>
    axios.put(url + '/' + todo.id, todo).then(response => response.data)


export const deleteToDoItem = (todoItemId) =>
    axios.delete(url + '/' + todoItemId);