import { useEffect, useState } from 'react'
import Styles from '../styles/Todos.module.scss'
import { animated, useSpring, useTransition } from 'react-spring'
import { useTask } from '../contexts/TaskContext'

const Todo = ({data, onSelected, onRemove, onComplete, selected}) => {
    const [isSelected, setSelected] = useState(selected)

    useEffect(() => {
        setSelected(selected)
    }, [selected])

    const actionSpring = useSpring({
        from: {
            opacity: 0,
            top: '-100%'
        },
    
        to: {
            opacity: isSelected ? 1 : 0,
            top: isSelected ? '0%' : '-100%'
        },

        config: {
            tension: 100
        }
    })

    const handleOnClick = () => {
        if (isSelected) {
            setSelected(false)
            return
        }

        onSelected(data.id)
        setSelected(true)
    }

    const handleRemove = () => {
        setSelected(false)
        onRemove(data.id)
    }

    const handleComplete = () => {
        setSelected(false)
        onComplete(data.id)
    }

    return (
        <div className={Styles.todo} onClick={handleOnClick}>
            <p>{data.name}</p>
            
            <animated.div style={actionSpring} className={Styles.actions}>
                    <input type='button' onClick={handleRemove} value={'X'} className={Styles.closeButton}/>
                    <input type='button' onClick={handleComplete} value={'✓'} className={Styles.submitButton}/>
            </animated.div>
        </div>
    )
}

export default () => {
    const {tasks, setTasks} = useTask()
    const [currentSelected, setSelected] = useState(-1)

    const transitions = useTransition(tasks, {
        from: {
            scale: 0,
            opacity: 0
        },
        enter: {
            scale: 1,
            opacity: 1
        },
        leave: {
            opacity: 0,
            scale: 0
        }
    })

    const handleSelected = (id) => {
        setSelected(id)
    }

    const handleRemove = (id) => {
        setTasks(tasks.filter(task => {
            return (task.id != id)
        }))
    }

    const handleComplete = (id) => {
        setTasks(tasks.filter(task => {
            return (task.id != id)
        }))
    }

    return (
        <div className={Styles.holder}>
            {transitions((style, item) => {
                return (<animated.div style={style} key={item.id}><Todo onRemove={handleRemove} onComplete={handleComplete} onSelected={handleSelected} selected={item.id == currentSelected} data={item}/></animated.div>)
            })}
        </div>
    )
}