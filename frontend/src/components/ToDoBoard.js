import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import TodoList from "./TodoList";

export default function ({ todos , updateToDo, deleteToDo}) {
    const statuses= ["OPEN", "IN_PROGRESS","DONE"]

    const getFilteredList = (status) => todos.filter(todo=>todo.status === status);


    return (
        <StyledContainerList>
            {statuses.map(status=> <TodoList todos={getFilteredList(status)}/>)}
        </StyledContainerList>
    );
}

const StyledContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px) ;
`