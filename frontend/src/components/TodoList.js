import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

export default function TodoList({ todos }) {

const openToDoList = todos.filter(todos => ( todos.status === "OPEN"));
const inProgress = todos.filter(todos => (todos.status === "IN_PROGRESS"));
const done = todos.filter(todos => (todos.status === "DONE"));


    return (
        <div>
        <StyledList>
            {openToDoList.map((todo) => (
                <li key={todo.id}>
                    <Todo {...todo} />
                </li>
            ))}
        </StyledList>
            <StyledList>
                {inProgress.map((todo) => (
                    <li key={todo.id}>
                        <Todo {...todo} />
                    </li>
                ))}
            </StyledList>
            <StyledList>
                {done.map((todo) => (
                    <li key={todo.id}>
                        <Todo {...todo} />
                    </li>
                ))}
            </StyledList>
        </div>
    );
}

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    li + li {
        margin-top: 12px;
    }
`;


