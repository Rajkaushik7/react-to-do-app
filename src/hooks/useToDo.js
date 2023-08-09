import {useState} from "react";
import SampleData from '../data/sampleData.json'

const useToDo = () => {
    const [taskData, setTaskData] = useState(SampleData)

    function edit(id, title, description) {
        setTaskData(
            taskData.map((data) => {
                if(data.id == id) {
                    return {
                        id: id,
                        title: title,
                        description: description,
                        marked: data.marked
                    }
                }
                return data
            })
        )
    }

    function add(title, description) {
        setTaskData([
            ...taskData,
            {
                id: Math.random() * 1000 + '_' + (new Date()).getTime(),
                title: title,
                description: description,
                marked: 0
            }
        ])
    }

    function remove(id) {
        setTaskData(
            taskData.filter((data) => {
                return id != data.id
            })
        )
    }

    function markAsDone(id) {
        setTaskData(
            taskData.map((data) => {
                if(data.id == id) {
                    return {
                        ...data,
                        marked: !data.marked
                    }
                }
                return data
            })
        )
    }

    return {
        taskData,
        edit,
        add,
        remove,
        markAsDone
    }
}

export {useToDo}