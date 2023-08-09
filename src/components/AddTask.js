import React, { useState } from "react";

const AddTask = ({add, edit, task, setActivity}) => {
    console.log(task)
    const [title, setTitle] = useState(task ? task.title : '')
    const [description, setDescription] = useState(task ? task.description : '')

    const handleSubmit = () => {
        setActivity('list')
        if(task)
            edit(task.id, title, description)
        else
            add(title, description)
    }

    return (
        <div className="add-task-container">
            <div className="heading">
                Task - Prepare A/B Test
                <div className="form">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"></input>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                    <button onClick={handleSubmit} className="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export {AddTask}