import { createContext, useContext, useState } from "react";

const TaskContext = createContext()

const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const payload = {
        tasks,
        setTasks
    }

    return (
        <TaskContext.Provider value={payload}>
            {children}
        </TaskContext.Provider>
    )
}

const useTask = () => {
    const context = useContext(TaskContext)

    return context
}

export {
    TaskContextProvider,
    useTask
}