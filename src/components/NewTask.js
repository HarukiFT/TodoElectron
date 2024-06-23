import { useRef } from 'react'
import { useTask } from '../contexts/TaskContext'
import Styles from '../styles/NewTask.module.scss'

export default () => {
    const {tasks, setTasks} = useTask()
    const inputField = useRef()

    const handleAdd = () => {
        setTasks([...tasks, {id: Date.now(), name: inputField.current.value}])
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.form}>
                <input ref={inputField} style={{
                    gridColumn: '1/2'
                }} type='text' placeholder='Описание задачки'/>

                <input onClick={handleAdd} type='button' style={{
                    gridColumn: '2/3'
                }} value={'Плюсик'}/>
            </div>
        </div>
    )
}