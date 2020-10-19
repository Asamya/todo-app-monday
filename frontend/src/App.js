import React from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import ToDoForm from "./components/ToDoForm";

export default function App() {
    const [todos, addToDo] = useTodos();

    return (
        <Main>
            <h1>Super Kanban Board </h1>
            <ToDoForm addToDo={addToDo}/>
            <TodoList todos={todos} />
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
        text-align: center;
    }
`;
