import React from 'react';
import styled from 'styled-components';

export default function Todo({ id, status, description, updateToDo , deleteToDo}) {
    return (
        <StyledTodo>
            <h3>{description}</h3>
            <p>{status}</p>
            { status === "OPEN" && <button onClick={() => updateToDo({id, status: 'IN_PROGRESS', description})}>StartWorking</button>}
            { status === "IN_PROGRESS" && <button onClick={() => updateToDo({id, status: 'DONE', description})}>Done!</button>}
            <button onClick={() => deleteToDo(id)}>Delete</button>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;
