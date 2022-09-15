import React from 'react';
import { useState } from 'react';
import ElementCreator from './ElementCreator/ElementCreator';


const App = () => {
    
    const [tasksList, setTasksList] = useState([{}]);

    const handleDelete = (id) => {
        setTasksList(tasksList.filter((tasksList) => tasksList.id !== id))
    }

  return (

    <div className='main-block'>
        <h1>My TaskList App!!!</h1>
        <ElementCreator tasksList={tasksList} setTasksList={setTasksList}/>
        {console.log(tasksList)}
        {tasksList[0].name}
    </div>

  )
}

export default App