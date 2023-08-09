import React from 'react'
import penIMG from '../../public/assets/images/pen.svg'
import binIMG from '../../public/assets/images/bin.svg'
import arrowIMG from '../../public/assets/images/arrow.svg'

const ViewTask = ({task, remove, edit}) => {

    return (
        <div className='view-task'>
            <div className='title'>
                Title: {task.title}
            </div>
            <div className='description'>
                Description:  {task.description}
            </div>
            <div className='controls'>
                <div onClick={() => setActivity('list')} className='control'>
                    <div className='image-container'>
                        <img src={arrowIMG}/>
                    </div>
                    Back
                </div>
                <div onClick={edit} className='control'>
                    <div className='image-container edit'>
                        <img src={penIMG}/>
                    </div>
                    Edit
                </div>
                <div onClick={remove} className='control'>
                    <div className='image-container delete'>
                        <img src={binIMG}/>
                    </div>
                    Delete
                </div>
            </div>
        </div>
    )
}

export {ViewTask}