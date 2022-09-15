import React from 'react'
import Task from './Task/Task'

const DisplayAndRemove = ({tasksList, onDelete}) => {
  return (
    <div className='row'>
        {tasksList.map((element) => {
            return <Task key={element.id} id={element.id} name={element.name} onDelete={onDelete}/>
           })}
    </div>
  )
}

export default DisplayAndRemove