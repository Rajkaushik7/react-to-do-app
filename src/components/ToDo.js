import React, {useState} from 'react'
import {useToDo} from '../hooks/useToDo'
import { Tasks } from './Tasks'
import '../styles/to_do.less'


const ToDo = () => {
    const {taskData, add, remove, edit, markAsDone} = useToDo()

    return (
        <div className='to-do'>
            <Tasks edit={edit} remove={remove} add={add} markAsDone={markAsDone} tasks={taskData}/>
        </div>
    )
}

export {ToDo}