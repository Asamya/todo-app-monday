import React from "react";
import styled from "styled-components";
import useToDoForm from "../hooks/useToDoForm";

export default function ToDoForm({addToDo}) {

    const {changeDescription, submitForm, description} = useToDoForm(addToDo);

    return <StyledForm onSubmit={submitForm}>
            <label>Please enter description:
                <input type='text' value={description} onChange={changeDescription}/>
            </label>
            <button>Submit</button>
        </StyledForm>
}

const StyledForm = styled.form`
  border: 1px solid rebeccapurple;
  padding: 0.5em;
  border-radius: 15%;
  margin: 2em;
  text-align: center;

 input{
  padding:25px;
  margin: 2em;
 }

 label{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

 }

 button{
  width:30%;
 }

`