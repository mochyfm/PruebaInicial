import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ElementCreator = ({tasksList, setTasksList}) => {


    const [form, setForm] = useState({
        name: ''
    });

    const handleInput = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasksList([...tasksList, {id: uuidv4(), name: form.name}])
    }

  return (
    <div className='task-creator'>
        <h3>Add a task</h3>
        <form className='task-form' onSubmit={handleSubmit}>
            <input placeholder='Introduce a Task to do please' name='name' value={form.name} onChange={handleInput}></input>
            {form.name === '' ? <button className='' type='submit' disabled>Add</button> : <button className='btn notDisabled' type='submit'>Add</button> }
        </form>
    </div>
  )
}

export default ElementCreator