import React from 'react';
import styled from 'styled-components/macro';
import useTodos from './hooks/useTodos';
import ToDoForm from "./components/ToDoForm";
import ToDoBoard from "./components/ToDoBoard";

export default function App() {
    const [todos, addToDo, updateToDo, deleteToDo] = useTodos();

    return (
        <Main>
            <h1>Super Kanban Board </h1>
            <ToDoForm addToDo={addToDo}/>
            <ToDoBoard todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
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
