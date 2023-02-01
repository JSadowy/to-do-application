import { useState } from "react";

export const CreateNewTask = (handleCreateNewTask) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeDate = (event) => {
        setDate(event.target.value)
    }

    const addNewTask = (event) => {
        event.preventDefault();
        if (!name) {
            return;
        } else if (!date) {
            return;
        } else if (!name && !date) {
            return;
        }


        handleCreateNewTask(name, date);

        const setNewTask = ({ setDate }, { setName }) => {
            return (
                setDate([]),
                setName([])
            )
        }
        setNewTask();
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