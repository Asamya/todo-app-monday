import axios from 'axios';

const url = 'api/todo';

export const getTodos = () =>
    axios.get(url).then((response) => response.data);

export const postToDo = (todo) =>
    axios.post(url, todo).then(response => response.data);