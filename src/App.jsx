import React from 'react';
import { useState } from 'react';
import ElementCreator from './ElementCreator/ElementCreator';


const App = () => {

    const defaultTasks = [{}];
    
    const [tasksList, setTasksList] = useState(defaultTasks);

    const handleDelete = (id) => {
        setTasksList(tasksList.filter((tasksList) => tasksList.id !== id))
    }

  return (

    <div className='main-block'>
        <h1>My TaskList App!!!</h1>
        <ElementCreator setTasksList={setTasksList}/>
    </div>

  )
}

export default App