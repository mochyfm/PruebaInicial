import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ElementCreator = () => {


    const [form, setForm] = useState({
        uuidv4: null,
        name: ''
    });

    const handleInput = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

  return (
    <div className='task-creator'>
        <h3>Add a task</h3>
        <form className='task-form'>
            <input placeholder='Introduce a Task to do please' value={form.name} ></input>
            {form.name === '' ? <button className='' disabled>Add</button> : <button className='btn notDisabled' type='submit'>Add</button> }
        </form>
    </div>
  )
}

export default ElementCreator