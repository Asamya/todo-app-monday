import React, {useState} from "react";
import {postToDo} from "../service/todo-service";
import styled from "styled-components";

export default function ToDoForm({addToDo}) {
    const[description, setDescription] = useState('Da jetzt hier, vielleicht was eintragen oder so')

    const changeDescription = event => setDescription(event.target.value);
    const submitTheShit = () => postToDo({description: description, status: 'OPEN'}).then(addToDo);

    return<>
        <StyledForm>
            <label>Please enter description:
                <input type='text' value={description} onChange={changeDescription}/>
                <button type='button' onClick={submitTheShit}>Submit</button>
            </label>
        </StyledForm>
        </>
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

 }

 button{
  width:30%;

 }

`