import { TaskContextProvider } from '../contexts/TaskContext'
import Styles from '../styles/App.module.scss'
import NewTask from './NewTask'
import Todos from './Todos'

export default () => {
    return (
        <TaskContextProvider>
            <div className={Styles.holder}>
                <div className={Styles.wrapper}>
                    <div className={Styles.header}>
                        <p>Тудушэчка {'<3'}</p>
                    </div>

                    <NewTask />
                    <Todos />
                </div>
            </div>
        </TaskContextProvider>)
}