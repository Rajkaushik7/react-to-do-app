import React, { useEffect, useRef, useState } from 'react'
import binIMG from '../../public/assets/images/bin.svg'
import {AddTask} from  './AddTask'
import {ViewTask} from './ViewTask'

const Tasks = ({tasks,edit, add, remove, markAsDone}) => {

    const [activity, setActivity] = useState('list')
    let selectedTask = useRef('')

    const handleEdit = (task) => {
        selectedTask.current = task
        setActivity('edit')
    }

    const handleView = (task) => {
        console.log(task)
        selectedTask.current = task
        setActivity('view')
    }

    const handleDelete = (task) => {
        remove(task.id)
        setActivity('list')
    }

    useEffect(() => {
        console.log('tasks')
        let addButton = document.getElementById('add_task')
        let addEvent = addButton.addEventListener('click', () => {
            selectedTask.current = ''
            setActivity('edit')
        })
    },[])

    switch(activity){
        case 'list':
            return (
                <div className="task-container">
                    <div className='task-box'>
                        <div className='heading'>Today Tasks</div>
                        <div className='task-list'>
                            {
                                tasks.map((task) => {
                                    return (
                                        <div key={task.id} className='task'>
                                            <div className='title'>
                                                <div onClick={() => markAsDone(task.id)} className={'mark ' + (task.marked ? 'done' : '')}></div>
                                                {task.title}
                                            </div>
                                            <div className='controls'>
                                                <button onClick={() => handleEdit(task)}>Edit</button>
                                                <button onClick={() => handleView(task)}>View</button>
                                                <button onClick={() => remove(task.id)} className='delete'>
                                                    <img src={binIMG} />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        case 'edit':
            return (
                <AddTask setActivity={setActivity} task={selectedTask.current} edit={edit} remove={remove} add={add}/>
            )
        case 'view':
            return (
                <ViewTask setActivity={setActivity} remove={() => handleDelete(selectedTask.current)} task={selectedTask.current} edit={() => handleEdit(selectedTask.current)} />
            )
    }
}

export {Tasks}