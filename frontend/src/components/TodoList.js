import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

export default function TodoList({ todos , updateToDo, deleteToDo}) {

const openToDoList = todos.filter(todos => ( todos.status === "OPEN"));
const inProgressList = todos.filter(todos => (todos.status === "IN_PROGRESS"));
const doneList = todos.filter(todos => (todos.status === "DONE"));

    return (
        <StyledContainerList>
        <StyledList>
            {openToDoList.map((todo) => (
                <li key={todo.id}>
                    <Todo {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                </li>
            ))}
        </StyledList>
        <StyledList>
            {inProgressList.map((todo) => (
                <li key={todo.id}>
                    <Todo {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                </li>
            ))}
        </StyledList>
            <StyledList>
                {doneList.map((todo) => (
                    <li key={todo.id}>
                        <Todo {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                    </li>
                ))}
            </StyledList>
        </StyledContainerList>
    );
}

const StyledContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px) ;
`

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    li + li {
        margin-top: 12px;
    }
`;


