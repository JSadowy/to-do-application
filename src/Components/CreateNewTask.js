import { useState } from "react";

export const CreateNewTask = (props) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeDate = (event) => {
        setDate(event.target.value)
    }

    const clearState = () => {
        setName('');
        setDate('');
    }

    const addNewTask = (event) => {
        event.preventDefault();
        const val = {
            name,
            date,
        };
        props.func(val)
        clearState()
    }
    return (
        <form>
            <label>Task </label>
            <input type="text" value={name} onChange={changeName} ></input>
            <label> Date </label>
            <input type="date" value={date} onChange={changeDate}></input>
            <button onClick={addNewTask}>Add new task</button>
        </form>
    )
}